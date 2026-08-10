import React, { useState, useRef } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Building2,
  Upload,
  FileText,
  X,
  CheckCircle2,
  Send,
  ShieldCheck,
  AlertCircle,
  ExternalLink,
} from 'lucide-react';
import { Language } from '../types';
import { t } from '../utils/translations';

interface ContactSectionProps {
  currentLang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ currentLang }) => {
  const [formData, setFormData] = useState({
    region: '서울/수도권',
    companyName: '',
    contactName: '',
    phone: '',
    email: '',
    inquiryType: '광고/매체 문의',
    message: '',
  });

  const [attachedFile, setAttachedFile] = useState<File | null>(null);
  const [agreedPrivacy, setAgreedPrivacy] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const isKo = currentLang === 'ko';

  const regions = [
    '서울/수도권',
    '경기/인천',
    '강원권',
    '충청권',
    '전라권',
    '경상권',
    '제주특별자치도',
    '해외 (Global/Overseas)',
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      // 파일 크기 제한 (20MB)
      if (file.size > 20 * 1024 * 1024) {
        alert(isKo ? '파일 크기는 최대 20MB까지 첨부 가능합니다.' : 'File size limit is 20MB.');
        return;
      }
      setAttachedFile(file);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.size > 20 * 1024 * 1024) {
        alert(isKo ? '파일 크기는 최대 20MB까지 첨부 가능합니다.' : 'File size limit is 20MB.');
        return;
      }
      setAttachedFile(file);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const removeFile = () => {
    setAttachedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    if (!agreedPrivacy) {
      setFormError(
        isKo
          ? '개인정보 수집 및 이용 동의에 체크해주세요.'
          : 'Please agree to the privacy policy before submitting.'
      );
      return;
    }

    if (!formData.companyName.trim() || !formData.contactName.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.message.trim()) {
      setFormError(
        isKo ? '모든 필수 입력 사항을 기입해 주세요.' : 'Please fill in all required fields.'
      );
      return;
    }

    setIsSubmitting(true);

    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form
      setFormData({
        region: '서울/수도권',
        companyName: '',
        contactName: '',
        phone: '',
        email: '',
        inquiryType: '광고/매체 문의',
        message: '',
      });
      setAttachedFile(null);
      setAgreedPrivacy(false);
    }, 1200);
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12 animate-fadeIn">
      {/* Top Banner Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold text-blue-900 uppercase tracking-widest bg-blue-50/90 px-4 py-1.5 rounded-full border border-blue-100 inline-block font-mono">
          CONTACT US
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          {isKo ? '오시는 길 & 사업 문의' : 'Location & Business Contact'}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
          {isKo
            ? '문의를 남겨주시면 담당자가 신속히 답변해 드리겠습니다.'
            : 'Please leave an inquiry and our representative will respond promptly.'}
        </p>
      </div>

      {/* Main Grid: Contact Info (Left - 1/3 or 1/4 ratio) & Inquiry Form (Right - 2/3 or 3/4 ratio) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Column: Company Info & Map Cards (col-span-4) */}
        <div className="lg:col-span-4 flex flex-col gap-6 h-full">
          {/* Main Address Card */}
          <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-7 shadow-xl relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-600/20 border border-blue-500/30 rounded-2xl text-blue-400 shrink-0">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white">(주)다이즈하이미디어</h3>
              </div>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-slate-400 block mb-0.5">{isKo ? '본사 위치' : 'Headquarters Location'}</span>
                  <p className="font-medium text-white leading-relaxed">
                    {isKo
                      ? '인천시 부평구 백범로577번길 20'
                      : '20, Baekbeom-ro 577beon-gil, Bupyeong-gu, Incheon'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-3 border-t border-slate-800">
                <Phone className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-slate-400 block mb-0.5">{isKo ? '대표 전화' : 'Main Phone'}</span>
                  <p className="font-bold text-white text-sm sm:text-base">032-573-3114</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-3 border-t border-slate-800">
                <Mail className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-slate-400 block mb-0.5">{isKo ? '공식 이메일' : 'Email'}</span>
                  <p className="font-bold text-white text-xs sm:text-sm break-all">info@disehimedia.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Location Map Preview Card */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm flex-1 flex flex-col justify-between space-y-4">
            <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-blue-600" />
              <span>{isKo ? '위치 안내' : 'Map Location'}</span>
            </h4>
            
            {/* Interactive Embedded Google Map */}
            <div className="w-full flex-1 min-h-[220px] bg-slate-100 rounded-2xl border border-slate-200 overflow-hidden relative shadow-inner">
              <iframe
                title="Dise HiMedia Location Map"
                src={`https://maps.google.com/maps?q=${encodeURIComponent('인천시 부평구 백범로577번길 20')}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
                className="w-full h-full min-h-[220px] border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="flex gap-2 pt-1">
              <a
                href={`https://map.naver.com/p/search/${encodeURIComponent('인천 부평구 백범로577번길 20')}`}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>네이버 지도</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
              </a>
              <a
                href={`https://map.kakao.com/link/search/${encodeURIComponent('인천 부평구 백범로577번길 20')}`}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-2.5 px-3 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>카카오맵</span>
                <ExternalLink className="w-3.5 h-3.5 text-amber-600" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Inquiry Form (col-span-8) */}
        <div className="lg:col-span-8 flex flex-col h-full">
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm relative flex-1 flex flex-col justify-between">
            <div className="mb-8 pb-6 border-b border-slate-200">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-1">INQUIRY FORM</span>
              <h2 className="text-2xl font-extrabold text-slate-900">
                {isKo ? '온라인 문의 보내기' : 'Submit Inquiry'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                {isKo
                  ? '사업 제안, 매체 광고 구좌 문의, 기술 도입 및 솔루션 상담을 남겨주시면 담당자가 빠른 시일 내에 연락드립니다.'
                  : 'Please fill out the form below. Our representative will contact you shortly.'}
              </p>
            </div>

            {isSubmitted ? (
              <div className="py-12 text-center space-y-5 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-slate-900">
                  {isKo ? '문의가 성공적으로 접수되었습니다!' : 'Inquiry Submitted Successfully!'}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  {isKo
                    ? '(주)다이즈하이미디어에 관심을 가져주셔서 감사합니다. 작성해주신 연락처 및 이메일로 담당자가 확인 후 신속히 답변 드리겠습니다.'
                    : 'Thank you for contacting DISE HI MEDIA. Our team will review your message and respond promptly.'}
                </p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md transition-all cursor-pointer"
                >
                  {isKo ? '추가 문의하기' : 'Send Another Inquiry'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {formError && (
                  <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold flex items-center gap-2.5 animate-shake">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{formError}</span>
                  </div>
                )}

                {/* 1. 지역 & 회사명 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      {isKo ? '지역' : 'Region'} <span className="text-rose-500">*</span>
                    </label>
                    <select
                      value={formData.region}
                      onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                      className="w-full h-[46px] px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-900 focus:bg-white focus:outline-none focus:border-blue-600 transition-all cursor-pointer"
                    >
                      {regions.map((r) => (
                        <option key={r} value={r}>
                          {r}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      {isKo ? '회사명' : 'Company Name'} <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={isKo ? '예: (주)다이즈' : 'e.g. DISE Corp.'}
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full h-[46px] px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-900 focus:bg-white focus:outline-none focus:border-blue-600 transition-all"
                    />
                  </div>
                </div>

                {/* 2. 담당자명 & 연락처 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      {isKo ? '담당자명' : 'Contact Person'} <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={isKo ? '홍길동 팀장' : 'John Doe'}
                      value={formData.contactName}
                      onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                      className="w-full h-[46px] px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-900 focus:bg-white focus:outline-none focus:border-blue-600 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      {isKo ? '연락처' : 'Phone Number'} <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="010-0000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full h-[46px] px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-900 focus:bg-white focus:outline-none focus:border-blue-600 transition-all"
                    />
                  </div>
                </div>

                {/* 3. 이메일 & 첨부파일 (문의분야 위치에 첨부파일 배치) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      {isKo ? '이메일' : 'Email Address'} <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full h-[46px] px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-900 focus:bg-white focus:outline-none focus:border-blue-600 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      {isKo ? '첨부파일' : 'Attachment File'}{' '}
                      <span className="text-slate-400 font-normal">(선택, 최대 20MB)</span>
                    </label>

                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      className="hidden"
                      accept=".pdf,.doc,.docx,.ppt,.pptx,.zip,.jpg,.png"
                    />

                    {attachedFile ? (
                      <div className="flex items-center justify-between h-[46px] px-3.5 rounded-xl bg-blue-50 border border-blue-200 text-xs text-blue-900">
                        <div className="flex items-center gap-2 truncate">
                          <FileText className="w-4 h-4 text-blue-600 shrink-0" />
                          <span className="font-semibold truncate">{attachedFile.name}</span>
                        </div>
                        <button
                          type="button"
                          onClick={removeFile}
                          className="p-1 rounded-lg hover:bg-blue-100 text-blue-700 transition-colors"
                          title="Delete File"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ) : (
                      <div
                        onClick={() => fileInputRef.current?.click()}
                        onDrop={handleDrop}
                        onDragOver={handleDragOver}
                        className="border border-dashed border-slate-300 hover:border-blue-500 rounded-xl px-4 text-center bg-slate-50 hover:bg-blue-50/40 transition-all cursor-pointer flex items-center justify-center gap-2 group h-[46px]"
                      >
                        <Upload className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
                        <span className="text-xs font-semibold text-slate-600 group-hover:text-blue-600">
                          {isKo ? '파일 선택 / 드래그' : 'Select or Drag File'}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* 4. 문의 내용 (상하 2배 크기로 확장 rows=8) */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    {isKo ? '문의내용' : 'Inquiry Message'} <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows={8}
                    required
                    placeholder={
                      isKo
                        ? '문의하실 프로젝트 내용, 희망 기한, 예상 예산 규모 등을 자유롭게 기재해 주세요.'
                        : 'Please enter your inquiry details, project scope, timeline, etc.'
                    }
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-900 focus:bg-white focus:outline-none focus:border-blue-600 transition-all resize-y min-h-[200px]"
                  />
                </div>

                {/* 6. 개인정보 수집 및 이용 동의 */}
                <div className="pt-2">
                  <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <input
                      type="checkbox"
                      id="privacyConsent"
                      checked={agreedPrivacy}
                      onChange={(e) => setAgreedPrivacy(e.target.checked)}
                      className="w-4 h-4 mt-0.5 text-blue-600 rounded border-slate-300 focus:ring-blue-500 cursor-pointer"
                    />
                    <div className="flex-1 text-xs text-slate-600">
                      <label htmlFor="privacyConsent" className="font-semibold text-slate-800 cursor-pointer">
                        {isKo ? '개인정보 수집 및 이용 동의 (필수)' : 'I agree to the collection and use of personal information (Required)'}
                      </label>
                      <p className="text-[11px] text-slate-500 mt-0.5">
                        {isKo
                          ? '수집항목: 회사명, 담당자명, 연락처, 이메일 | 수집목적: 사업 상담 및 답변 안내 | 보유기간: 문의 접수 후 1년 간 보관'
                          : 'Items collected: Company, Name, Phone, Email | Purpose: Inquiry response | Retention: 1 year'}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setShowPrivacyModal(true)}
                      className="text-[11px] font-bold text-blue-600 hover:underline shrink-0"
                    >
                      {isKo ? '전문보기' : 'View Details'}
                    </button>
                  </div>
                </div>

                {/* 7. Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>{isKo ? '전송 중...' : 'Submitting...'}</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Privacy Modal Detail */}
      {showPrivacyModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-4 shadow-2xl relative">
            <button
              onClick={() => setShowPrivacyModal(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2 text-blue-600">
              <ShieldCheck className="w-5 h-5" />
              <h3 className="text-lg font-bold text-slate-900">개인정보 수집 및 이용 방침</h3>
            </div>
            <div className="text-xs text-slate-600 leading-relaxed space-y-2 max-h-60 overflow-y-auto pr-2 border-y border-slate-100 py-3 font-normal">
              <p><strong>1. 수집하는 개인정보 항목:</strong> 지역, 회사명, 담당자 성함, 연락처, 이메일 주소, 첨부파일 내 포함정보</p>
              <p><strong>2. 개인정보의 수집 및 이용 목적:</strong> 프로젝트 상담 및 제안서 전달, 서비스 문의에 대한 신속한 응대 및 이력 관리</p>
              <p><strong>3. 개인정보의 보유 및 이용 기간:</strong> 원칙적으로 문의 처리 완료 후 1년 간 보관 후 지체 없이 파기합니다.</p>
              <p><strong>4. 동의 거부 권리:</strong> 귀하는 개인정보 수집 동의를 거부할 권리가 있으며, 거부 시 온라인 문의 제출이 제한될 수 있습니다.</p>
            </div>
            <button
              onClick={() => setShowPrivacyModal(false)}
              className="w-full py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs"
            >
              확인 및 닫기
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
