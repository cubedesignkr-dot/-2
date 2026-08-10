import React from 'react';
import { Lock } from 'lucide-react';
import { SiteThemeConfig } from '../types';
import { CompanyLogo } from './CompanyLogo';
import { ActivePage } from './Header';

interface FooterProps {
  theme: SiteThemeConfig;
  onOpenAdmin: () => void;
  onNavigate?: (page: ActivePage) => void;
  customLogo?: string | null;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAdmin, onNavigate, customLogo }) => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 text-slate-600 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10 border-b border-slate-200">
          {/* Col 1: 맨 좌측 - 회사 로고만 위치 */}
          <div className="flex items-start">
            <CompanyLogo customLogo={customLogo} variant="dark" className="h-9 w-auto" />
          </div>

          {/* Col 2: 중간 - SITEMAP (약간 오른쪽으로 이동하여 여백 및 레이아웃 균형 확보) */}
          <div className="md:pl-12 lg:pl-20">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-4 font-mono">SITEMAP</h4>
            <ul className="space-y-2.5 text-sm font-medium text-slate-700">
              <li>
                <button
                  onClick={() => onNavigate?.('about')}
                  className="hover:text-blue-900 hover:underline transition-colors cursor-pointer text-left font-bold"
                >
                  ABOUT
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate?.('pillars')}
                  className="hover:text-blue-900 hover:underline transition-colors cursor-pointer text-left font-bold"
                >
                  TECH
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate?.('portfolio')}
                  className="hover:text-blue-900 hover:underline transition-colors cursor-pointer text-left font-bold"
                >
                  GALLERY
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate?.('contact')}
                  className="hover:text-blue-900 hover:underline transition-colors cursor-pointer text-left"
                >
                  CONTACT
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: 맨 오른쪽 - 기업 정보 */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-4 font-mono">기업 정보</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700 font-medium">
              <li>
                <span className="text-slate-500 mr-2">회사명</span> (주)다이즈하이미디어
              </li>
              <li>
                <span className="text-slate-500 mr-2">사업자 번호</span> 122-86-11534
              </li>
              <li>
                <span className="text-slate-500 mr-2">본사</span> 인천시부평구백범로577 번길20
              </li>
              <li>
                <span className="text-slate-500 mr-2">대표전화</span> 032-573-3114
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Line & Admin Login */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} DISE HI MEDIA Co., Ltd. (주)다이즈하이미디어. All rights reserved.</p>
          
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-800 cursor-pointer">개인정보처리방침</span>
            <span>•</span>
            <span className="hover:text-slate-800 cursor-pointer">이용약관</span>
            <span>•</span>
            <button
              onClick={onOpenAdmin}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-200/80 hover:bg-slate-300 text-slate-700 font-medium text-xs transition-colors cursor-pointer"
            >
              <Lock className="w-3 h-3 text-slate-600" />
              <span>관리자 로그인</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

