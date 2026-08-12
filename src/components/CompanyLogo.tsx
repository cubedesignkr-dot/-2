import React, { useState, useEffect } from 'react';
import defaultLogo from '../assets/images/logo.png';
import svgLogo from '../assets/images/dise_logo.svg';
import { storage } from '../services/storage';

interface CompanyLogoProps {
  className?: string;
  variant?: 'dark' | 'light';
  customLogo?: string | null;
}

export const CompanyLogo: React.FC<CompanyLogoProps> = ({
  className = 'h-9 w-auto',
  variant = 'dark',
  customLogo,
}) => {
  const isLight = variant === 'light';
  const [hasError, setHasError] = useState(false);
  const [fallbackStep, setFallbackStep] = useState<number>(0);

  const storedLogo = storage.getLogo();
  const activeLogo = customLogo !== undefined ? customLogo : storedLogo;

  useEffect(() => {
    setHasError(false);
    setFallbackStep(0);
  }, [activeLogo]);

  const DEFAULT_LOGO_URL = '/images/brand/dise-logo.png';

  // Determine current image source based on fallback step
  const getSource = (): string | null => {
    let logo = activeLogo;
    if (logo === 'https://i.imgur.com/M81md58.png') {
      logo = DEFAULT_LOGO_URL;
    }
    if (fallbackStep === 0) {
      return logo || DEFAULT_LOGO_URL || defaultLogo || svgLogo;
    } else if (fallbackStep === 1) {
      return DEFAULT_LOGO_URL || defaultLogo || svgLogo;
    } else if (fallbackStep === 2) {
      return defaultLogo || svgLogo;
    }
    return null;
  };

  const currentSrc = getSource();

  const handleError = () => {
    if (fallbackStep < 2) {
      setFallbackStep((prev) => prev + 1);
    } else {
      setHasError(true);
    }
  };

  return (
    <div className={`inline-flex items-center shrink-0 select-none ${className}`}>
      {!hasError && currentSrc ? (
        <img
          src={currentSrc}
          alt="DISE HI MEDIA"
          className={`h-full w-auto object-contain block transition-opacity duration-300 ${
            isLight ? 'brightness-0 invert' : ''
          }`}
          onError={handleError}
        />
      ) : (
        /* Fallback Text Logo if image fails or unavailable */
        <div className={`flex items-center gap-2 font-black tracking-tight font-sans ${isLight ? 'text-white' : 'text-slate-900'}`}>
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-extrabold text-xs shadow-sm">
            DH
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-sm font-black tracking-wide">DISE HI MEDIA</span>
            <span className="text-[9px] font-semibold text-blue-600 tracking-widest uppercase mt-0.5">Media Glass</span>
          </div>
        </div>
      )}
    </div>
  );
};
