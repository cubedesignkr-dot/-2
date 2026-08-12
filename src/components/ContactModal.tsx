import React, { useState } from 'react';
import { X, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { Language } from '../types';

interface ContactModalProps {
  currentLang: Language;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ currentLang, onClose }) => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    inquiryType: '인천국제공항 / 베트남 노이바이 공항 DOOH 광고 구좌 문의',
    message: '',
    botField: '', // honeypot
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    if (
      !formData.companyName.trim() ||
      !formData.contactName.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim() ||
      !formData.message.trim()
    ) {
      setFormError('모든 필수 입력 사항을 기입해 주세요.');
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = new FormData();
      payload.append('form-name', 'business-inquiry');
      payload.append('bot-field', formData.botField);
      payload.append('region', '서울/수도권');
      payload.append('company', formData.companyName);
      payload.append('name', formData.contactName);
      payload.append('phone', formData.phone);
      payload.append('email', formData.email);
      payload.append('inquiryType', formData.inquiryType);
      payload.append('message', formData.message);
      payload.append('privacyConsent', 'true');

      const response = await fetch('/', {
        method: 'POST',
        body: payload,
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        setFormError(
          '문의 접수 중 오류가 발생했습니다. 잠시 후 다시 시도하거나 hidise@disehimedia.com으로 문의해주세요.'
        );
      }
    } catch (err) {
      console.error('Modal Submit Error:', err);
      setFormError('문의 접수 중 오류가 발생했습니다. 잠시 후 다시 시도하거나 hidise@disehimedia.com으로 문의해주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-xl w-full p-6 sm:p-8 relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-950/80 text-slate-300 hover:text-white border border-slate-800 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-10 space-y-4">
            <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto animate-bounce" />
            <h3 className="text-2xl font-black text-white">문의가 정상적으로 접수되었습니다.</h3>
            <p className="text-xs text-slate-300 max-w-md mx-auto">
              담당자가 확인 후 안내드리겠습니다.
            </p>
            <button
              onClick={onClose}
              className="mt-6 px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs cursor-pointer"
            >
              확인
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
            className="space-y-4 text-left"
          >
            <input type="hidden" name="form-name" value="business-inquiry" />
            <input type="hidden" name="region" value="서울/수도권" />
            <input type="hidden" name="privacyConsent" value="true" />

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
              <div className="p-3 bg-rose-950/80 border border-rose-800 text-rose-300 text-xs font-semibold flex items-center gap-2 rounded-xl">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{formError}</span>
              </div>
            )}

            <div>
              <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Business Contact</span>
              <h3 className="text-2xl font-black text-white mt-1">(주)다이즈하이미디어 사업 및 매체 문의</h3>
              <p className="text-xs text-slate-400">
                인천공항, 베트남 노이바이 공항 DOOH 광고 구좌 및 AMSIT 기술 도입 문의
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">회사/기관명 *</label>
                <input
                  type="text"
                  name="company"
                  required
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  placeholder="주식회사 다이즈"
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">담당자 성함 *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.contactName}
                  onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                  placeholder="홍길동 팀장"
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">이메일 주소 *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="contact@company.com"
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">전화번호 *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="010-0000-0000"
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">문의 분야 *</label>
              <select
                name="inquiryType"
                value={formData.inquiryType}
                onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-blue-500"
              >
                <option value="인천국제공항 / 베트남 노이바이 공항 DOOH 광고 구좌 문의">인천국제공항 / 베트남 노이바이 공항 DOOH 광고 구좌 문의</option>
                <option value="AMSIT 5대 원천기술 (Aero-Flex, MW 36K) 도입 / 구축">AMSIT 5대 원천기술 (Aero-Flex, MW 36K) 도입 / 구축</option>
                <option value="STN SPORTS PUB 및 랜드마크 270° 곡면 LED 미디어">STN SPORTS PUB 및 랜드마크 270° 곡면 LED 미디어</option>
                <option value="몽골 / 글로벌 신사업 및 투자 제휴">몽골 / 글로벌 신사업 및 투자 제휴</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">상세 문의 내용 *</label>
              <textarea
                name="message"
                rows={3}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="예상 캠페인 일자, 희망 매체 위치, 예산 규모 등을 기재해 주시면 더 신속한 제안이 가능합니다."
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-blue-500"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs shadow-xl flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {isSubmitting ? (
                <span>전송 중...</span>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>문의 제출하기</span>
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
