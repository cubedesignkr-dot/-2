import React, { useState, useRef } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Building2,
  ExternalLink,
  FileText,
  X,
  CheckCircle2,
  ShieldCheck,
  AlertCircle,
  Upload,
  ArrowRight,
  Clock,
  UserCheck,
} from 'lucide-react';
import { Language } from '../types';

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
    botField: '', // honeypot
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

  const inquiryTypes = [
    '광고/매체 문의',
    'LED 구축 문의',
    'CMS 시스템 문의',
    '통합운영 문의',
    '기타/파트너십',
  ];

  const ALLOWED_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp', '.pdf'];

  const validateFile = (file: File): boolean => {
    if (file.size > 7 * 1024 * 1024) {
      alert(isKo ? '첨부파일 크기는 최대 7MB까지 가능합니다.' : 'File size limit is 7MB.');
      return false;
    }
    const ext = '.' + file.name.split('.').pop()?.toLowerCase();
    if (!ALLOWED_EXTENSIONS.includes(ext)) {
      alert(
        isKo
          ? '허용되지 않는 파일 형식입니다. (.jpg, .jpeg, .png, .webp, .pdf 파일만 가능)'
          : 'Allowed file formats: .jpg, .jpeg, .png, .webp, .pdf'
      );
      return false;
    }
    return true;
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (validateFile(file)) {
        setAttachedFile(file);
      } else if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (validateFile(file)) {
        setAttachedFile(file);
      }
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

  const handleSubmit = async (e: React.FormEvent) => {
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

    if (
      !formData.companyName.trim() ||
      !formData.contactName.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim() ||
      !formData.message.trim()
    ) {
      setFormError(
        isKo ? '모든 필수 입력 사항을 기입해 주세요.' : 'Please fill in all required fields.'
      );
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = new FormData();
      payload.append('form-name', 'business-inquiry');
      payload.append('bot-field', formData.botField);
      payload.append('region', formData.region);
      payload.append('company', formData.companyName);
      payload.append('name', formData.contactName);
      payload.append('phone', formData.phone);
      payload.append('email', formData.email);
      payload.append('inquiryType', formData.inquiryType);
      payload.append('message', formData.message);
      payload.append('privacyConsent', agreedPrivacy ? 'true' : 'false');
      if (attachedFile) {
        payload.append('attachment', attachedFile);
      }

      const response = await fetch('/', {
        method: 'POST',
        body: payload,
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          region: '서울/수도권',
          companyName: '',
          contactName: '',
          phone: '',
          email: '',
          inquiryType: '광고/매체 문의',
          message: '',
          botField: '',
        });
        setAttachedFile(null);
        setAgreedPrivacy(false);
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
      } else {
        setFormError(
          isKo
            ? '문의 접수 중 오류가 발생했습니다. 잠시 후 다시 시도하거나 hidise@disehimedia.com으로 문의해주세요.'
            : 'An error occurred during submission. Please try again later or contact hidise@disehimedia.com.'
        );
      }
    } catch (err) {
      console.error('Submit Error:', err);
      setFormError(
        isKo
          ? '문의 접수 중 오류가 발생했습니다. 잠시 후 다시 시도하거나 hidise@disehimedia.com으로 문의해주세요.'
          : 'An error occurred during submission. Please try again later or contact hidise@disehimedia.com.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-20 bg-[#F8FAFC] text-[#222831] font-sans antialiased">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        
        {/* SECTION HEADER */}
        <div className="text-center space-y-2.5 max-w-3xl mx-auto">
          <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#294A63] bg-[#294A63]/10 px-3 py-1 rounded-full inline-block">
            CONTACT US
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#222831] tracking-tight leading-snug">
            LET’S BUILD THE NEXT MEDIA INFRASTRUCTURE
          </h2>
          <p className="text-xs sm:text-sm text-[#66717C] font-normal leading-relaxed">
            {isKo
              ? 'LED 미디어 구축 및 디지털 사이니지 통합운영에 관한 문의를 남겨주시면 담당자가 신속하게 안내해 드립니다.'
              : 'Leave an inquiry regarding LED media installation and digital signage integrated operation.'}
          </p>
        </div>

        {/* 2-COLUMN MAIN LAYOUT (Left: Company Info + Map | Right: Inquiry Form) */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(320px,0.38fr)_minmax(0,0.62fr)] gap-8 lg:gap-12 items-stretch">
          
          {/* LEFT COLUMN: COMPANY INFO & LOCATION MAP */}
          <div className="flex flex-col gap-6 h-auto lg:h-full">
            
            {/* BOX 1: COMPANY INFO */}
            <div className="bg-white border border-[#D9DEE3] rounded-[2px] p-5 sm:p-7 lg:p-8 flex-none">
              <div className="border-b border-[#E2E8F0] pb-4 mb-6">
                <span className="text-[11px] font-mono font-bold text-[#294A63] uppercase tracking-wider block">
                  COMPANY INFO
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-[#222831] tracking-tight mt-1">
                  (주)다이즈하이미디어
                </h3>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                
                {/* ADDRESS */}
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#294A63] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] font-mono font-semibold text-[#66717C] uppercase block">
                      ADDRESS
                    </span>
                    <p className="text-xs sm:text-sm font-medium text-[#222831] leading-relaxed">
                      {isKo
                        ? '인천시 부평구 백범로577번길 20'
                        : '20, Baekbeom-ro 577beon-gil, Bupyeong-gu, Incheon, Republic of Korea'}
                    </p>
                  </div>
                </div>

                {/* PHONE */}
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#294A63] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] font-mono font-semibold text-[#66717C] uppercase block">
                      TEL
                    </span>
                    <a
                      href="tel:032-573-3114"
                      className="text-xs sm:text-sm font-mono font-bold text-[#222831] hover:text-[#294A63] transition-colors underline underline-offset-4"
                    >
                      032-573-3114
                    </a>
                  </div>
                </div>

                {/* EMAIL */}
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#294A63] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] font-mono font-semibold text-[#66717C] uppercase block">
                      EMAIL
                    </span>
                    <a
                      href="mailto:hidise@disehimedia.com"
                      className="text-xs sm:text-sm font-mono font-medium text-[#222831] hover:text-[#294A63] transition-colors"
                    >
                      hidise@disehimedia.com
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* BOX 2: LOCATION MAP */}
            <div className="bg-white border border-[#D9DEE3] rounded-[2px] p-5 sm:p-7 lg:p-8 flex-1 flex flex-col min-h-0">
              <div className="border-b border-[#E2E8F0] pb-4 mb-6">
                <span className="text-[11px] font-mono font-bold text-[#294A63] uppercase tracking-wider block">
                  LOCATION MAP
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-[#222831] tracking-tight mt-1">
                  {isKo ? '오시는 길' : 'Location & Map'}
                </h3>
              </div>

              <div className="flex-1 w-full min-h-[280px] border border-[#E2E8F0] rounded-[2px] overflow-hidden relative">
                <iframe
                  title="다이즈하이미디어 본사 위치"
                  src="https://www.google.com/maps?q=%EC%9D%B8%EC%B2%9C%EC%8B%9C%20%EB%B6%80%ED%8F%89%EA%B5%AC%20%EB%B0%B1%EB%B2%94%EB%A1%9C577%EB%B2%88%EA%B8%B8%2020&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              <div className="pt-3 flex items-center justify-between text-xs">
                <span className="text-[#66717C] font-medium truncate">
                  {isKo ? '인천시 부평구 백범로577번길 20' : '20, Baekbeom-ro 577beon-gil, Bupyeong-gu, Incheon'}
                </span>
                <a
                  href="https://map.naver.com/p/search/%EC%9D%B8%EC%B2%9C%EC%8B%9C%20%EB%B6%80%ED%8F%89%EA%B5%AC%20%EB%B0%B1%EB%B2%94%EB%A1%9C577%EB%B2%88%EA%B8%B8%2020"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-mono text-[#294A63] hover:underline flex items-center gap-1 font-semibold shrink-0 ml-2"
                >
                  <span>지도 크게보기</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: ONLINE INQUIRY FORM */}
          <div className="h-auto lg:h-full flex flex-col">
            <div className="bg-white border border-[#D9DEE3] rounded-[2px] p-5 sm:p-7 lg:p-8 flex-1 flex flex-col">
              
              <div className="border-b border-[#E2E8F0] pb-4 mb-6">
                <span className="text-[11px] font-mono font-bold text-[#294A63] uppercase tracking-wider block">
                  ONLINE INQUIRY
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-[#222831] tracking-tight mt-1">
                  {isKo ? '프로젝트 상담 및 문의 접수' : 'Online Consultation'}
                </h3>
              </div>

              {isSubmitted ? (
                <div className="flex-1 py-12 flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#294A63]/10 text-[#294A63] flex items-center justify-center">
                    <CheckCircle2 className="w-7 h-7 text-[#294A63]" />
                  </div>
                  <h4 className="text-xl font-bold text-[#222831]">
                    {isKo ? '문의가 정상적으로 접수되었습니다.' : 'Inquiry Submitted Successfully!'}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#66717C] max-w-md mx-auto leading-relaxed">
                    {isKo
                      ? '담당자가 확인 후 안내드리겠습니다.'
                      : 'Our team will review your message and get back to you promptly.'}
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 bg-[#18324A] hover:bg-[#294A63] text-white font-bold text-xs rounded-[2px] transition-colors cursor-pointer mt-2"
                  >
                    {isKo ? '추가 문의 작성' : 'Send Another Inquiry'}
                  </button>
                </div>
              ) : (
                <form
                  name="business-inquiry"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  encType="multipart/form-data"
                  onSubmit={handleSubmit}
                  className="flex-1 flex flex-col gap-4 sm:gap-5"
                >
                  <input type="hidden" name="form-name" value="business-inquiry" />

                  {/* Honeypot field for anti-spam (visually hidden offscreen) */}
                  <div style={{ position: 'absolute', left: '-9999px', top: '-9999px', opacity: 0, height: 0, width: 0, overflow: 'hidden' }} aria-hidden="true">
                    <input
                      type="text"
                      name="bot-field"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formData.botField}
                      onChange={(e) => setFormData({ ...formData, botField: e.target.value })}
                    />
                  </div>

                  {formError && (
                    <div className="p-3 bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold flex items-center gap-2 rounded-[2px]">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{formError}</span>
                    </div>
                  )}

                  {/* INQUIRY TYPE PILLS/TABS */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-[#222831]">
                      {isKo ? '문의 유형' : 'Inquiry Type'} <span className="text-[#D97706]">*</span>
                    </label>
                    <input type="hidden" name="inquiryType" value={formData.inquiryType} />
                    <div className="flex flex-wrap gap-2">
                      {inquiryTypes.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setFormData({ ...formData, inquiryType: type })}
                          className={`px-3 py-1.5 text-xs font-semibold rounded-[2px] border transition-all cursor-pointer ${
                            formData.inquiryType === type
                              ? 'bg-[#18324A] text-white border-[#18324A]'
                              : 'bg-[#F8FAFC] text-[#66717C] border-[#E2E8F0] hover:border-[#294A63]'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* ROW 1: REGION & COMPANY NAME */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-[#222831]">
                        {isKo ? '지역' : 'Region'} <span className="text-[#D97706]">*</span>
                      </label>
                      <select
                        name="region"
                        value={formData.region}
                        onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                        className="w-full h-10 px-3 bg-[#F8FAFC] focus:bg-white border border-[#E2E8F0] text-xs font-medium text-[#222831] rounded-[2px] focus:outline-none focus:border-[#294A63] focus:ring-1 focus:ring-[#294A63] transition-all cursor-pointer"
                      >
                        {regions.map((r) => (
                          <option key={r} value={r}>
                            {r}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-[#222831]">
                        {isKo ? '회사명' : 'Company Name'} <span className="text-[#D97706]">*</span>
                      </label>
                      <input
                        type="text"
                        name="company"
                        required
                        placeholder={isKo ? '예: (주)다이즈' : 'e.g. DISE Corp.'}
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        className="w-full h-10 px-3 bg-[#F8FAFC] focus:bg-white border border-[#E2E8F0] text-xs font-medium text-[#222831] rounded-[2px] focus:outline-none focus:border-[#294A63] focus:ring-1 focus:ring-[#294A63] transition-all"
                      />
                    </div>
                  </div>

                  {/* ROW 2: CONTACT NAME & PHONE */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-[#222831]">
                        {isKo ? '담당자명' : 'Contact Person'} <span className="text-[#D97706]">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder={isKo ? '홍길동 팀장' : 'John Doe'}
                        value={formData.contactName}
                        onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                        className="w-full h-10 px-3 bg-[#F8FAFC] focus:bg-white border border-[#E2E8F0] text-xs font-medium text-[#222831] rounded-[2px] focus:outline-none focus:border-[#294A63] focus:ring-1 focus:ring-[#294A63] transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-[#222831]">
                        {isKo ? '연락처' : 'Phone Number'} <span className="text-[#D97706]">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="010-0000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full h-10 px-3 bg-[#F8FAFC] focus:bg-white border border-[#E2E8F0] text-xs font-medium text-[#222831] rounded-[2px] focus:outline-none focus:border-[#294A63] focus:ring-1 focus:ring-[#294A63] transition-all"
                      />
                    </div>
                  </div>

                  {/* ROW 3: EMAIL & FILE ATTACHMENT */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-[#222831]">
                        {isKo ? '이메일' : 'Email Address'} <span className="text-[#D97706]">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full h-10 px-3 bg-[#F8FAFC] focus:bg-white border border-[#E2E8F0] text-xs font-medium text-[#222831] rounded-[2px] focus:outline-none focus:border-[#294A63] focus:ring-1 focus:ring-[#294A63] transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-[#222831]">
                        {isKo ? '첨부파일' : 'Attachment File'}{' '}
                        <span className="text-[#66717C] font-normal">(선택, 최대 7MB)</span>
                      </label>

                      <input
                        type="file"
                        name="attachment"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        className="hidden"
                        accept=".jpg,.jpeg,.png,.webp,.pdf"
                      />

                      {attachedFile ? (
                        <div className="flex items-center justify-between h-10 px-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-[2px] text-xs text-[#222831]">
                          <div className="flex items-center gap-2 truncate">
                            <FileText className="w-4 h-4 text-[#294A63] shrink-0" />
                            <span className="font-semibold truncate">{attachedFile.name}</span>
                          </div>
                          <button
                            type="button"
                            onClick={removeFile}
                            className="p-1 hover:text-rose-600 transition-colors"
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
                          className="border border-dashed border-[#CBD5E1] hover:border-[#294A63] bg-[#F8FAFC] hover:bg-white rounded-[2px] px-3 text-center transition-colors cursor-pointer flex items-center justify-center gap-2 h-10 group"
                        >
                          <Upload className="w-3.5 h-3.5 text-[#66717C] group-hover:text-[#294A63] transition-colors" />
                          <span className="text-xs font-medium text-[#66717C] group-hover:text-[#222831]">
                            {isKo ? '파일 선택 / 드래그' : 'Select or Drag File'}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* ROW 4: INQUIRY MESSAGE */}
                  <div className="space-y-1.5 flex-1 flex flex-col">
                    <label className="block text-xs font-bold text-[#222831]">
                      {isKo ? '문의내용' : 'Inquiry Message'} <span className="text-[#D97706]">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      placeholder={
                        isKo
                          ? '문의하실 프로젝트 내용, 희망 기한, 예상 예산 규모 등을 자유롭게 기재해 주세요.'
                          : 'Please enter your inquiry details, project scope, timeline, etc.'
                      }
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full flex-1 p-3 bg-[#F8FAFC] focus:bg-white border border-[#E2E8F0] text-xs font-medium text-[#222831] rounded-[2px] focus:outline-none focus:border-[#294A63] focus:ring-1 focus:ring-[#294A63] transition-all resize-y min-h-[110px]"
                    />
                  </div>

                  {/* PRIVACY CONSENT */}
                  <div className="pt-1">
                    <div className="p-3 sm:p-3.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-[2px] flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="privacyConsent"
                        name="privacyConsent"
                        checked={agreedPrivacy}
                        onChange={(e) => setAgreedPrivacy(e.target.checked)}
                        className="w-4 h-4 mt-0.5 text-[#294A63] border-[#CBD5E1] rounded-[2px] focus:ring-0 cursor-pointer"
                      />
                      <div className="flex-1 text-xs text-[#4A5568] space-y-0.5">
                        <label htmlFor="privacyConsent" className="font-bold text-[#222831] cursor-pointer block">
                          {isKo ? '개인정보 수집 및 이용 동의 (필수)' : 'I agree to personal information collection (Required)'}
                        </label>
                        <p className="text-[11px] text-[#66717C]">
                          {isKo
                            ? '수집항목: 회사명, 담당자명, 연락처, 이메일 | 수집목적: 사업 상담 및 답변 안내 | 보유기간: 1년'
                            : 'Items collected: Company, Name, Phone, Email | Purpose: Inquiry response | Retention: 1 year'}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => setShowPrivacyModal(true)}
                        className="text-xs font-bold text-[#294A63] hover:underline shrink-0 cursor-pointer"
                      >
                        {isKo ? '전문보기' : 'View Details'}
                      </button>
                    </div>
                  </div>

                  {/* SUBMIT BUTTON */}
                  <div className="pt-1">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 bg-[#18324A] hover:bg-[#294A63] text-white font-bold text-xs tracking-wider rounded-[2px] flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-50 group"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>{isKo ? '전송 중...' : 'Submitting...'}</span>
                        </>
                      ) : (
                        <>
                          <span>SUBMIT INQUIRY</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>

      {/* PRIVACY MODAL */}
      {showPrivacyModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white border border-[#E2E8F0] rounded-xl max-w-lg w-full p-6 space-y-4 relative shadow-lg">
            <button
              onClick={() => setShowPrivacyModal(false)}
              className="absolute top-4 right-4 p-2 text-[#66717C] hover:text-[#222831] cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2 text-[#294A63]">
              <ShieldCheck className="w-5 h-5" />
              <h3 className="text-base font-bold text-[#222831]">개인정보 수집 및 이용 방침</h3>
            </div>
            <div className="text-xs text-[#4A5568] leading-relaxed space-y-2 max-h-60 overflow-y-auto pr-2 border-y border-[#E2E8F0] py-3 font-normal">
              <p><strong>1. 수집하는 개인정보 항목:</strong> 지역, 회사명, 담당자 성함, 연락처, 이메일 주소, 첨부파일 내 포함정보</p>
              <p><strong>2. 개인정보의 수집 및 이용 목적:</strong> 프로젝트 상담 및 제안서 전달, 서비스 문의에 대한 신속한 응대 및 이력 관리</p>
              <p><strong>3. 개인정보의 보유 및 이용 기간:</strong> 원칙적으로 문의 처리 완료 후 1년 간 보관 후 지체 없이 파기합니다.</p>
              <p><strong>4. 동의 거부 권리:</strong> 귀하는 개인정보 수집 동의를 거부할 권리가 있으며, 거부 시 온라인 문의 제출이 제한될 수 있습니다.</p>
            </div>
            <button
              onClick={() => setShowPrivacyModal(false)}
              className="w-full py-2.5 bg-[#18324A] text-white font-bold text-xs rounded-md hover:bg-[#294A63] transition-colors cursor-pointer"
            >
              확인 및 닫기
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
