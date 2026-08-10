/**
 * Utility to compress and resize images on client-side before storing in LocalStorage
 * Prevents LocalStorage QuotaExceededError and broken image rendering.
 */

export interface CompressOptions {
  maxWidth?: number;
  maxHeight?: number;
  quality?: number;
  preserveAlpha?: boolean;
}

export function compressImage(
  file: File | string,
  options: CompressOptions = {}
): Promise<string> {
  return new Promise((resolve) => {
    const {
      maxWidth = 800,
      maxHeight = 800,
      quality = 0.82,
      preserveAlpha = false,
    } = options;

    const processDataUrl = (src: string, isPngFile: boolean) => {
      const img = new Image();
      img.onerror = () => resolve(src); // fallback to original if image fails to load in canvas
      img.onload = () => {
        let width = img.width;
        let height = img.height;

        if (width > maxWidth || height > maxHeight) {
          const ratio = Math.min(maxWidth / width, maxHeight / height);
          width = Math.round(width * ratio);
          height = Math.round(height * ratio);
        }

        const canvas = document.createElement('canvas');
        canvas.width = Math.max(1, width);
        canvas.height = Math.max(1, height);

        const ctx = canvas.getContext('2d');
        if (!ctx) return resolve(src);

        const keepTransparent = preserveAlpha || isPngFile;

        if (!keepTransparent) {
          ctx.fillStyle = '#FFFFFF';
          ctx.fillRect(0, 0, width, height);
        }

        ctx.drawImage(img, 0, 0, width, height);

        try {
          const format = keepTransparent ? 'image/png' : 'image/jpeg';
          const compressed = canvas.toDataURL(format, keepTransparent ? undefined : quality);
          // Only use compressed if it actually succeeded and is valid
          if (compressed && compressed.length > 50) {
            resolve(compressed);
          } else {
            resolve(src);
          }
        } catch {
          resolve(src);
        }
      };
      img.src = src;
    };

    if (typeof file === 'string') {
      processDataUrl(file, file.startsWith('data:image/png'));
    } else {
      const isPng = file.type === 'image/png' || file.type === 'image/svg+xml';
      const reader = new FileReader();
      reader.onerror = () => resolve('');
      reader.onload = (e) => {
        const result = e.target?.result as string;
        if (result) {
          processDataUrl(result, isPng);
        } else {
          resolve('');
        }
      };
      reader.readAsDataURL(file);
    }
  });
}
