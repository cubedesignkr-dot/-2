import React, { useState } from 'react';
import ceoPortraitDriveImg from '../assets/images/ceo_portrait_drive.jpg';
import { compressImage } from '../utils/imageCompressor';
import {
  X,
  Save,
  RotateCcw,
  Plus,
  Trash2,
  Edit3,
  Image as ImageIcon,
  Palette,
  Search as SearchIcon,
  Globe,
  Sparkles,
  Upload,
  Sliders,
  CheckCircle,
  FileCode,
  Download,
  Lock,
  LogOut,
  KeyRound,
} from 'lucide-react';

import { CompanyLogo } from './CompanyLogo';
import { DEFAULT_HERO_IMAGES } from './HeroBanner';

import {
  Language,
  PortfolioItem,
  BusinessPillar,
  AmsitTech,
  CeoMessage,
  SiteThemeConfig,
  SeoConfig,
  GalleryCategory,
} from '../types';

interface AdminDashboardProps {
  currentLang: Language;
  onClose: () => void;
  // State getters & setters
  hero: { slogan: Record<Language, string>; subSlogan: Record<Language, string> };
  onSaveHero: (data: any) => void;

  heroImages?: string[] | null;
  onSaveHeroImages?: (images: string[] | null) => void;

  portfolio: PortfolioItem[];
  onSavePortfolio: (items: PortfolioItem[]) => void;

  ceoMessages: CeoMessage[];
  onSaveCeoMessages: (items: CeoMessage[]) => void;

  theme: SiteThemeConfig;
  onSaveTheme: (theme: SiteThemeConfig) => void;

  seo: SeoConfig;
  onSaveSeo: (seo: SeoConfig) => void;

  customLogo?: string | null;
  onSaveLogo?: (logoUrl: string | null) => void;

  onResetAllData: () => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({
  currentLang,
  onClose,
  hero,
  onSaveHero,
  heroImages,
  onSaveHeroImages,
  portfolio,
  onSavePortfolio,
  ceoMessages,
  onSaveCeoMessages,
  theme,
  onSaveTheme,
  seo,
  onSaveSeo,
  customLogo,
  onSaveLogo,
  onResetAllData,
}) => {
  // Login Authentication State
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [loginError, setLoginError] = useState('');
  const [adminPassword, setAdminPassword] = useState(() => {
    return localStorage.getItem('daiz_admin_pw') || 'daiz2026!';
  });
  const [newPassword, setNewPassword] = useState('');

  const [activeTab, setActiveTab] = useState<'gallery' | 'content' | 'theme' | 'seo' | 'data'>('gallery');

  // Local state copies for unsaved edits
  const [heroForm, setHeroForm] = useState(hero);
  const [heroSlideList, setHeroSlideList] = useState<string[]>(() => {
    if (heroImages && heroImages.length > 0) return heroImages;
    return DEFAULT_HERO_IMAGES;
  });
  const [portfolioList, setPortfolioList] = useState<PortfolioItem[]>(portfolio);
  const [ceoList, setCeoList] = useState<CeoMessage[]>(ceoMessages);
  const [themeForm, setThemeForm] = useState<SiteThemeConfig>(theme);
  const [seoForm, setSeoForm] = useState<SeoConfig>(seo);

  const [notification, setNotification] = useState<string | null>(null);

  // Gallery New / Edit Modal State
  const [editingItem, setEditingItem] = useState<PortfolioItem | null>(null);
  const [isNewItemModal, setIsNewItemModal] = useState(false);

  const handleLogoFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      showNotify('이미지 파일(PNG, JPG, SVG 등)만 업로드 가능합니다.');
      return;
    }

    try {
      const compressed = await compressImage(file, {
        maxWidth: 500,
        maxHeight: 300,
        preserveAlpha: true,
      });

      if (compressed && onSaveLogo) {
        onSaveLogo(compressed);
        showNotify('회사 로고 이미지 파일이 성공적으로 용량 최적화되어 변경되었습니다!');
      }
    } catch {
      showNotify('이미지 처리 중 오류가 발생했습니다.');
    }
  };

  const handleResetLogo = () => {
    if (onSaveLogo) {
      onSaveLogo(null);
      showNotify('기본 회사 로고로 원복되었습니다.');
    }
  };

  const handleHeroImageChange = async (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      showNotify('이미지 파일만 업로드 가능합니다.');
      return;
    }

    try {
      const compressed = await compressImage(file, {
        maxWidth: 1000,
        maxHeight: 700,
        quality: 0.80,
      });

      if (compressed) {
        const updated = [...heroSlideList];
        updated[index] = compressed;
        setHeroSlideList(updated);
        if (onSaveHeroImages) {
          onSaveHeroImages(updated);
        }
        showNotify(`히어로 슬라이드 #${index + 1} 사진이 최적화되어 수정되었습니다!`);
      }
    } catch {
      showNotify('슬라이드 이미지 변경 중 오류가 발생했습니다.');
    }
  };

  const handleAddHeroImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (heroSlideList.length >= 5) {
      showNotify('히어로 슬라이드 사진은 최대 5개까지만 올릴 수 있습니다.');
      return;
    }

    if (!file.type.startsWith('image/')) {
      showNotify('이미지 파일만 업로드 가능합니다.');
      return;
    }

    try {
      const compressed = await compressImage(file, {
        maxWidth: 1000,
        maxHeight: 700,
        quality: 0.80,
      });

      if (compressed) {
        const updated = [...heroSlideList, compressed].slice(0, 5);
        setHeroSlideList(updated);
        if (onSaveHeroImages) {
          onSaveHeroImages(updated);
        }
        showNotify(`새 슬라이드 사진이 최적화되어 추가되었습니다. (총 ${updated.length}개 반영 중)`);
      }
    } catch {
      showNotify('슬라이드 이미지 추가 중 오류가 발생했습니다.');
    }
  };

  const handleDeleteHeroImage = (index: number) => {
    if (heroSlideList.length <= 1) {
      showNotify('최소 1개의 슬라이드 사진은 있어야 합니다.');
      return;
    }
    const updated = heroSlideList.filter((_, i) => i !== index);
    setHeroSlideList(updated);
    if (onSaveHeroImages) {
      onSaveHeroImages(updated);
    }
    showNotify(`슬라이드 #${index + 1} 사진이 삭제되었습니다. (남은 슬라이드 ${updated.length}개)`);
  };

  const handleResetHeroImages = () => {
    setHeroSlideList(DEFAULT_HERO_IMAGES);
    if (onSaveHeroImages) {
      onSaveHeroImages(null);
    }
    showNotify('기본 히어로 슬라이드 이미지로 원복되었습니다.');
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === adminPassword) {
      setIsLoggedIn(true);
      setLoginError('');
      setPasswordInput('');
    } else {
      setLoginError('비밀번호가 올바르지 않습니다. 다시 확인해주세요.');
    }
  };

  const handleChangePassword = () => {
    if (!newPassword.trim()) {
      showNotify('새 비밀번호를 입력해주세요.');
      return;
    }
    setAdminPassword(newPassword.trim());
    localStorage.setItem('daiz_admin_pw', newPassword.trim());
    setNewPassword('');
    showNotify('관리자 비밀번호가 새로 변경되었습니다.');
  };

  const showNotify = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  };

  const handleSaveAll = () => {
    onSaveHero(heroForm);
    onSavePortfolio(portfolioList);
    onSaveCeoMessages(ceoList);
    onSaveTheme(themeForm);
    onSaveSeo(seoForm);
    showNotify('모든 설정이 성공적으로 저장되었습니다!');
  };

  // Gallery Item Add / Edit handler
  const handleSaveGalleryItem = (item: PortfolioItem) => {
    if (portfolioList.some((p) => p.id === item.id)) {
      setPortfolioList(portfolioList.map((p) => (p.id === item.id ? item : p)));
    } else {
      setPortfolioList([item, ...portfolioList]);
    }
    setEditingItem(null);
    setIsNewItemModal(false);
    showNotify('갤러리 항목이 업데이트되었습니다.');
  };

  const handleDeleteGalleryItem = (id: string) => {
    if (confirm('이 포트폴리오 항목을 삭제하시겠습니까?')) {
      setPortfolioList(portfolioList.filter((p) => p.id !== id));
      showNotify('항목이 삭제되었습니다.');
    }
  };

  // Image Upload File Handler with Auto Resize & Compression (Prevents LocalStorage Quota Errors)
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>, callback: (url: string) => void) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const isPng = file.type === 'image/png';
      const compressed = await compressImage(file, {
        maxWidth: 800,
        maxHeight: 800,
        quality: 0.82,
        preserveAlpha: isPng,
      });

      if (compressed) {
        callback(compressed);
        showNotify('이미지 파일이 성공적으로 용량 최적화되어 등록되었습니다.');
      }
    } catch {
      showNotify('이미지 업로드 처리 중 오류가 발생했습니다.');
    }
  };

  // AI SEO Auto Tuning Button
  const [isAiSeoLoading, setIsAiSeoLoading] = useState(false);
  const handleAiSeoTune = async () => {
    setIsAiSeoLoading(true);
    try {
      const response = await fetch('/api/ai/copywriting', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: 'Generate an optimized meta title and description for DAIZ High Media (주식회사 다이즈하이미디어), a leading LED media, airport CMS, DOOH owner in Korea & Vietnam.',
          targetLang: currentLang,
          section: 'seo',
        }),
      });
      const data = await response.json();
      if (data.success && data.text) {
        setSeoForm({
          ...seoForm,
          metaDescription: {
            ...seoForm.metaDescription,
            [currentLang]: data.text.trim(),
          },
        });
        showNotify('AI가 SEO 메타 설명을 최적화했습니다!');
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsAiSeoLoading(false);
    }
  };

  // Export JSON
  const handleExportData = () => {
    const dataObj = {
      hero: heroForm,
      portfolio: portfolioList,
      ceoMessages: ceoList,
      theme: themeForm,
      seo: seoForm,
    };
    const jsonStr = JSON.stringify(dataObj, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `daiz_site_backup_${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    showNotify('전체 웹사이트 백업 데이터가 다운로드되었습니다.');
  };

  // If not logged in, render Admin Password Login Modal
  if (!isLoggedIn) {
    return (
      <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-md w-full p-8 shadow-2xl relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-col items-center text-center mb-8">
            <div className="w-16 h-16 rounded-2xl bg-blue-900/80 border border-blue-700/80 text-blue-300 flex items-center justify-center mb-4 shadow-lg">
              <Lock className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-white tracking-tight">관리자 인증</h2>
            <p className="text-xs text-slate-400 mt-2">
              다이세 하이 미디어 관리자 대시보드 접근을 위해 비밀번호를 입력해주세요.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-2 uppercase tracking-wider">
                관리자 비밀번호
              </label>
              <div className="relative">
                <input
                  type="password"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  placeholder="비밀번호 입력..."
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                  autoFocus
                />
              </div>
              {loginError && (
                <p className="text-xs text-red-400 mt-2 font-medium">{loginError}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-900/30 transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <KeyRound className="w-4 h-4" />
              <span>대시보드 로그인</span>
            </button>
          </form>

          <div className="mt-6 pt-4 border-t border-slate-800 text-center">
            <p className="text-[11px] text-slate-500">
              * 초기 관리자 비밀번호: <span className="font-mono font-bold text-slate-400">daiz2026!</span> (로그인 후 변경 가능)
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-lg flex items-center justify-center p-2 sm:p-6 animate-fadeIn">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-6xl w-full h-[92vh] flex flex-col shadow-2xl overflow-hidden relative">
        {/* Top Header */}
        <div className="px-6 py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-blue-600 text-white font-black text-sm">DA</div>
            <div>
              <h2 className="text-lg font-bold text-white">관리자 대시보드 (Admin CMS)</h2>
              <p className="text-xs text-slate-400">콘텐츠, 갤러리 사진, 테마, SEO 통합 관리</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {notification && (
              <div className="px-3 py-1.5 rounded-lg bg-emerald-950 text-emerald-300 border border-emerald-800 text-xs font-semibold flex items-center gap-2 animate-fadeIn">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>{notification}</span>
              </div>
            )}

            <button
              onClick={handleSaveAll}
              className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-lg flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <Save className="w-4 h-4" />
              <span>전체 저장</span>
            </button>

            <button
              onClick={() => setIsLoggedIn(false)}
              className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
              title="로그아웃"
            >
              <LogOut className="w-4 h-4" />
              <span>로그아웃</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Admin Navigation Tabs */}
        <div className="px-6 py-3 bg-slate-950/60 border-b border-slate-800 flex items-center gap-2 overflow-x-auto">
          <button
            onClick={() => setActiveTab('gallery')}
            className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'gallery'
                ? 'bg-blue-600 text-white shadow'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <ImageIcon className="w-4 h-4" />
            <span>갤러리 & 사진 관리 ({portfolioList.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('content')}
            className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'content'
                ? 'bg-blue-600 text-white shadow'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Edit3 className="w-4 h-4" />
            <span>텍스트 & 슬로건 편집</span>
          </button>

          <button
            onClick={() => setActiveTab('theme')}
            className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'theme'
                ? 'bg-blue-600 text-white shadow'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Palette className="w-4 h-4" />
            <span>디자인 & 테마 커스텀</span>
          </button>

          <button
            onClick={() => setActiveTab('seo')}
            className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'seo'
                ? 'bg-blue-600 text-white shadow'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <SearchIcon className="w-4 h-4" />
            <span>SEO 검색 최적화</span>
          </button>

          <button
            onClick={() => setActiveTab('data')}
            className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'data'
                ? 'bg-blue-600 text-white shadow'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <FileCode className="w-4 h-4" />
            <span>백업 & 보안 설정</span>
          </button>
        </div>

        {/* Tab Content Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* TAB 1: GALLERY MANAGER */}
          {activeTab === 'gallery' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div>
                  <h3 className="text-lg font-bold text-white">포트폴리오 갤러리 관리 시스템</h3>
                  <p className="text-xs text-slate-400">사진 등록, 카테고리 설정, 현장 스펙 수정을 할 수 있습니다.</p>
                </div>
                <button
                  onClick={() => {
                    setEditingItem({
                      id: `port-${Date.now()}`,
                      title: { ko: '신규 프로젝트 현장', en: 'New Project Site', vi: 'Dự Án Mới', zh: '新项目', ar: 'مشروع جديد' },
                      category: 'commercial',
                      categoryLabel: { ko: '상업 · 엔터테인먼트', en: 'Commercial', vi: 'Thương Mại', zh: '商业', ar: 'تجري' },
                      imageUrl: 'https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&w=1200&q=80',
                      location: { ko: '서울 강남', en: 'Gangnam, Seoul', vi: 'Seoul', zh: '首尔', ar: 'سيؤول' },
                      specs: { ko: '4K Ultra LED / MW Controller', en: '4K Ultra LED', vi: '4K LED', zh: '4K LED', ar: '4K LED' },
                      year: '2024',
                      description: { ko: '현장 설명 문구를 입력하세요.', en: 'Description text.', vi: 'Mo ta.', zh: '说明.', ar: 'شرح.' },
                    });
                    setIsNewItemModal(true);
                  }}
                  className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold flex items-center gap-1.5 shadow cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>새 현장 사진 추가</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {portfolioList.map((item) => (
                  <div key={item.id} className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                    <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-900">
                      <img src={item.imageUrl} alt={item.title.ko} className="w-full h-full object-cover" />
                      <span className="absolute top-2 left-2 px-2 py-0.5 rounded bg-slate-950/80 border border-slate-800 text-[10px] font-bold text-blue-300">
                        {item.category}
                      </span>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold text-white line-clamp-1">{item.title.ko}</h4>
                      <p className="text-xs text-slate-400 truncate">{item.location.ko}</p>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-slate-800">
                      <button
                        onClick={() => {
                          setEditingItem({ ...item });
                          setIsNewItemModal(false);
                        }}
                        className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-blue-300 flex items-center gap-1 cursor-pointer"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                        <span>수정</span>
                      </button>

                      <button
                        onClick={() => handleDeleteGalleryItem(item.id)}
                        className="p-1.5 rounded-lg bg-red-950/60 hover:bg-red-900 text-red-400 cursor-pointer"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: TEXT & CONTENT EDITING */}
          {activeTab === 'content' && (
            <div className="space-y-8 max-w-4xl">
              {/* Hero Slogan */}
              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Edit3 className="w-4 h-4 text-blue-400" />
                  <span>메인 히어로 슬로건 편집 (Hero Banner Slogans)</span>
                </h3>

                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-1">메인 슬로건 (한국어)</label>
                    <input
                      type="text"
                      value={heroForm.slogan.ko}
                      onChange={(e) =>
                        setHeroForm({
                          ...heroForm,
                          slogan: { ...heroForm.slogan, ko: e.target.value },
                        })
                      }
                      className="w-full px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-1">서브 슬로건 (한국어)</label>
                    <textarea
                      rows={2}
                      value={heroForm.subSlogan.ko}
                      onChange={(e) =>
                        setHeroForm({
                          ...heroForm,
                          subSlogan: { ...heroForm.subSlogan, ko: e.target.value },
                        })
                      }
                      className="w-full px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* 히어로 배경 사진 슬라이드 커스텀 업로드 (최대 5개) */}
              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h3 className="text-base font-bold text-white flex items-center gap-2">
                      <ImageIcon className="w-4 h-4 text-blue-400" />
                      <span>메인 히어로 배너 배경 사진 업로드 (최대 5개)</span>
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      올리신 이미지 개수(예: 3개 올리면 3개만)만큼 메인 화면 히어로 배너 슬라이드로 자동 반영됩니다.
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    {heroSlideList.length < 5 && (
                      <label className="px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold cursor-pointer flex items-center gap-1.5 transition-all shadow">
                        <Plus className="w-3.5 h-3.5" />
                        <span>사진 추가 ({heroSlideList.length}/5)</span>
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={handleAddHeroImage}
                        />
                      </label>
                    )}
                    <button
                      type="button"
                      onClick={handleResetHeroImages}
                      className="px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white text-xs font-medium cursor-pointer flex items-center gap-1 border border-slate-800 transition-colors"
                      title="기본 사진 세트로 원복"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>초기화</span>
                    </button>
                  </div>
                </div>

                {/* Grid of uploaded slides */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
                  {heroSlideList.map((imgSrc, index) => (
                    <div
                      key={index}
                      className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex flex-col justify-between space-y-3 relative group"
                    >
                      <div className="flex items-center justify-between text-xs font-semibold text-slate-300">
                        <span className="flex items-center gap-1.5 font-mono text-blue-400">
                          <span className="w-5 h-5 rounded-full bg-blue-950 border border-blue-800 flex items-center justify-center text-[10px] font-bold">
                            {index + 1}
                          </span>
                          <span>슬라이드 #{index + 1}</span>
                        </span>
                        {heroSlideList.length > 1 && (
                          <button
                            type="button"
                            onClick={() => handleDeleteHeroImage(index)}
                            className="text-slate-500 hover:text-red-400 p-1 rounded hover:bg-slate-800 transition-colors cursor-pointer"
                            title="사진 삭제"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>

                      {/* Image Thumbnail Preview */}
                      <div className="w-full h-28 rounded-lg overflow-hidden bg-slate-950 border border-slate-800 relative group/img">
                        <img
                          src={imgSrc}
                          alt={`Hero Slide ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center p-2">
                          <label className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-[11px] font-bold cursor-pointer flex items-center gap-1.5 shadow">
                            <Upload className="w-3.5 h-3.5" />
                            <span>사진 변경</span>
                            <input
                              type="file"
                              accept="image/*"
                              className="hidden"
                              onChange={(e) => handleHeroImageChange(index, e)}
                            />
                          </label>
                        </div>
                      </div>

                      {/* File Change Button Mobile/Accessible */}
                      <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                        <span className="truncate max-w-[120px] text-slate-500 font-mono">
                          {imgSrc.startsWith('data:') ? '사용자 업로드' : '기본 시스템 샘플'}
                        </span>
                        <label className="text-blue-400 hover:text-blue-300 font-semibold cursor-pointer underline">
                          사진 바꾸기
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) => handleHeroImageChange(index, e)}
                          />
                        </label>
                      </div>
                    </div>
                  ))}

                  {/* Empty Slot Placeholder if < 5 */}
                  {heroSlideList.length < 5 && (
                    <label className="p-4 rounded-xl border-2 border-dashed border-slate-800 hover:border-blue-500 bg-slate-950/40 hover:bg-slate-900/60 flex flex-col items-center justify-center text-center cursor-pointer min-h-[160px] transition-all group">
                      <div className="w-10 h-10 rounded-full bg-slate-900 group-hover:bg-blue-950 border border-slate-800 group-hover:border-blue-800 flex items-center justify-center text-slate-400 group-hover:text-blue-400 mb-2 transition-colors">
                        <Plus className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-bold text-slate-300 group-hover:text-blue-300 transition-colors">
                        + 슬라이드 사진 추가하기
                      </span>
                      <span className="text-[11px] text-slate-500 mt-1">
                        (현재 {heroSlideList.length}/5개 적용 중)
                      </span>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleAddHeroImage}
                      />
                    </label>
                  )}
                </div>
              </div>

              {/* CEO Profile Photo & Quotes Management */}
              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-5">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold text-white flex items-center gap-2">
                      <ImageIcon className="w-4 h-4 text-blue-400" />
                      <span>대표이사 프로필 사진 및 인사말 관리</span>
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      컴퓨터나 핸드폰에 저장된 사진 파일(.jpg, .png)을 직접 올려서 CEO 대표 이미지로 변경할 수 있습니다.
                    </p>
                  </div>
                </div>

                {ceoList.map((ceo, cIdx) => (
                  <div key={cIdx} className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-4">
                    <div className="text-xs font-bold text-blue-400 flex items-center justify-between">
                      <span>{ceo.name.ko} ({ceo.title.ko})</span>
                      <span className="text-[10px] text-slate-500 font-mono">ID: {ceo.id}</span>
                    </div>

                    {/* CEO Photo Upload Box */}
                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 flex flex-col sm:flex-row items-center gap-5">
                      {/* Current Image Preview - Original Aspect Ratio */}
                      <div className="w-24 h-32 shrink-0 rounded-lg overflow-hidden border border-slate-700 bg-slate-900 shadow-sm relative group flex items-center justify-center p-0.5">
                        <img
                          src={ceo.photo && !ceo.photo.includes('unsplash') ? ceo.photo : ceoPortraitDriveImg}
                          alt={ceo.name.ko}
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = ceoPortraitDriveImg;
                          }}
                        />
                      </div>

                      <div className="flex-1 space-y-3 w-full">
                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                            CEO 사진 파일 직접 업로드 (추천)
                          </label>
                          <div className="flex items-center gap-3">
                            <label className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold cursor-pointer flex items-center gap-2 transition-all shadow">
                              <Upload className="w-4 h-4" />
                              <span>내 PC/모바일에서 사진 파일 선택</span>
                              <input
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={(e) =>
                                  handleFileUpload(e, (url) => {
                                    const updated = [...ceoList];
                                    updated[cIdx].photo = url;
                                    setCeoList(updated);
                                    onSaveCeoMessages(updated);
                                    showNotify('CEO 프로필 사진이 성공적으로 교체 및 저장되었습니다!');
                                  })
                                }
                              />
                            </label>
                          </div>
                          <p className="text-[11px] text-slate-500 mt-1">
                            고해상도 대표 사진 파일을 선택하면 즉시 실시간 미리보기에 적용됩니다.
                          </p>
                        </div>

                        <div>
                          <label className="block text-[11px] text-slate-400 mb-1">
                            또는 이미지 웹 URL 직접 입력
                          </label>
                          <input
                            type="text"
                            value={ceo.photo}
                            placeholder="https://..."
                            onChange={(e) => {
                              const updated = [...ceoList];
                              updated[cIdx].photo = e.target.value;
                              setCeoList(updated);
                              onSaveCeoMessages(updated);
                            }}
                            className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white focus:outline-none focus:border-blue-500"
                          />
                        </div>
                      </div>
                    </div>

                    {/* CEO Quote & Statement Text Editing */}
                    <div className="space-y-3">
                      <div>
                        <label className="block text-[11px] font-semibold text-slate-400 mb-1">
                          대표 메시지 핵심 요약 (Statement Quote)
                        </label>
                        <input
                          type="text"
                          value={ceo.quote.ko}
                          onChange={(e) => {
                            const updated = [...ceoList];
                            updated[cIdx].quote.ko = e.target.value;
                            setCeoList(updated);
                          }}
                          className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-blue-500"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold text-slate-400 mb-1">
                          주요 약력 / 대표 성과 (Key Achievement)
                        </label>
                        <input
                          type="text"
                          value={ceo.keyAchievement.ko}
                          onChange={(e) => {
                            const updated = [...ceoList];
                            updated[cIdx].keyAchievement.ko = e.target.value;
                            setCeoList(updated);
                          }}
                          className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-blue-500"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: THEME & DESIGN */}
          {activeTab === 'theme' && (
            <div className="space-y-6 max-w-4xl">
              {/* 회사 로고 업로드 전용 섹션 */}
              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-5">
                <div>
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <Upload className="w-5 h-5 text-blue-400" />
                    <span>회사 로고 이미지 파일 업로드</span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    헤더, 푸터 및 웹사이트 전체에 적용되는 공식 회사 로고 이미지 파일(PNG, SVG, JPG)을 직접 업로드하여 변경할 수 있습니다.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center pt-2">
                  {/* Current Logo Preview Card */}
                  <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 flex flex-col items-center justify-center min-h-[140px]">
                    <span className="text-[11px] text-slate-500 font-mono mb-3 uppercase tracking-wider">현재 웹사이트 적용 로고 미리보기</span>
                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 max-w-full flex items-center justify-center min-w-[200px]">
                      <CompanyLogo customLogo={customLogo} className="h-10 sm:h-12 w-auto" />
                    </div>
                    <span className="text-[11px] text-slate-400 mt-3 font-medium">
                      {customLogo ? '✓ 사용자 업로드 커스텀 로고 적용 중' : '✓ 기본 공식 로고(logo.png) 적용 중'}
                    </span>
                  </div>

                  {/* Upload Controls */}
                  <div className="space-y-4">
                    <label className="block text-xs font-semibold text-slate-300">새 로고 이미지 선택</label>
                    <div className="flex flex-col gap-3">
                      <label className="relative flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-lg shadow-blue-900/40 cursor-pointer transition-all border border-blue-500">
                        <Upload className="w-4 h-4" />
                        <span>내 컴퓨터에서 로고 파일 선택 (PNG/SVG)</span>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleLogoFileUpload}
                          className="hidden"
                        />
                      </label>

                      {customLogo && (
                        <button
                          type="button"
                          onClick={handleResetLogo}
                          className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 font-semibold text-xs transition-colors cursor-pointer border border-slate-800"
                        >
                          <RotateCcw className="w-3.5 h-3.5 text-slate-400" />
                          <span>기본 로고(logo.png)로 원복하기</span>
                        </button>
                      )}
                    </div>
                    <p className="text-[11px] text-slate-500 leading-relaxed">
                      * 권장: 배경이 투명한 PNG 또는 SVG 이미지 파일을 권장합니다.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-6">
                <div>
                  <h3 className="text-base font-bold text-white mb-1">테마 & 색상 포인트 커스텀</h3>
                  <p className="text-xs text-slate-400">요청사항에 맞게 블루-실버-빨강 포인트 색상을 미세 조정합니다.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-2">로고 텍스트</label>
                    <input
                      type="text"
                      value={themeForm.customLogoText}
                      onChange={(e) => setThemeForm({ ...themeForm, customLogoText: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-2">로고 서브텍스트</label>
                    <input
                      type="text"
                      value={themeForm.customLogoSubtext}
                      onChange={(e) => setThemeForm({ ...themeForm, customLogoSubtext: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-800">
                  <div>
                    <label className="block text-xs text-slate-400 mb-1">기본 배경색</label>
                    <input
                      type="color"
                      value={themeForm.primaryColor}
                      onChange={(e) => setThemeForm({ ...themeForm, primaryColor: e.target.value })}
                      className="w-full h-10 rounded-lg cursor-pointer bg-slate-900 border border-slate-800"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-slate-400 mb-1">실버 엑센트</label>
                    <input
                      type="color"
                      value={themeForm.silverAccent}
                      onChange={(e) => setThemeForm({ ...themeForm, silverAccent: e.target.value })}
                      className="w-full h-10 rounded-lg cursor-pointer bg-slate-900 border border-slate-800"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-slate-400 mb-1">블루 포인트</label>
                    <input
                      type="color"
                      value={themeForm.bluePoint}
                      onChange={(e) => setThemeForm({ ...themeForm, bluePoint: e.target.value })}
                      className="w-full h-10 rounded-lg cursor-pointer bg-slate-900 border border-slate-800"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-slate-400 mb-1">레드 포인트</label>
                    <input
                      type="color"
                      value={themeForm.redPoint}
                      onChange={(e) => setThemeForm({ ...themeForm, redPoint: e.target.value })}
                      className="w-full h-10 rounded-lg cursor-pointer bg-slate-900 border border-slate-800"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: SEO TOOLS */}
          {activeTab === 'seo' && (
            <div className="space-y-6 max-w-4xl">
              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-5">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold text-white">SEO 검색엔진 최적화 도구</h3>
                    <p className="text-xs text-slate-400">구글 및 네이버 검색 노출에 사용되는 Meta 태그를 설정합니다.</p>
                  </div>

                  <button
                    onClick={handleAiSeoTune}
                    disabled={isAiSeoLoading}
                    className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold flex items-center gap-1.5 shadow cursor-pointer disabled:opacity-50"
                  >
                    <Sparkles className="w-4 h-4 text-amber-300" />
                    <span>{isAiSeoLoading ? 'AI 최적화 중...' : 'AI SEO 메타 자동생성'}</span>
                  </button>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">메타 타이틀 (SEO Title)</label>
                  <input
                    type="text"
                    value={seoForm.metaTitle.ko}
                    onChange={(e) =>
                      setSeoForm({
                        ...seoForm,
                        metaTitle: { ...seoForm.metaTitle, ko: e.target.value },
                      })
                    }
                    className="w-full px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">메타 디스크립션 (SEO Description)</label>
                  <textarea
                    rows={3}
                    value={seoForm.metaDescription.ko}
                    onChange={(e) =>
                      setSeoForm({
                        ...seoForm,
                        metaDescription: { ...seoForm.metaDescription, ko: e.target.value },
                      })
                    }
                    className="w-full px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">SEO 키워드 (Keywords)</label>
                  <input
                    type="text"
                    value={seoForm.metaKeywords.ko}
                    onChange={(e) =>
                      setSeoForm({
                        ...seoForm,
                        metaKeywords: { ...seoForm.metaKeywords, ko: e.target.value },
                      })
                    }
                    className="w-full px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white"
                  />
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: DATA & BACKUP */}
          {activeTab === 'data' && (
            <div className="space-y-6 max-w-2xl">
              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Download className="w-4 h-4 text-blue-400" />
                  <span>데이터 내보내기 & 백업</span>
                </h3>
                <p className="text-xs text-slate-400">현재 웹사이트의 모든 포트폴리오, 텍스트, 설정 데이터를 안전하게 JSON 파일로 다운로드합니다.</p>
                <button
                  onClick={handleExportData}
                  className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold flex items-center gap-2 cursor-pointer transition-colors shadow"
                >
                  <Download className="w-4 h-4" />
                  <span>백업 JSON 파일 다운로드</span>
                </button>
              </div>

              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <KeyRound className="w-4 h-4 text-blue-400" />
                  <span>관리자 비밀번호 변경</span>
                </h3>
                <p className="text-xs text-slate-400">관리자 대시보드 로그인 시 사용할 새 비밀번호를 설정합니다.</p>
                <div className="flex items-center gap-3 max-w-md">
                  <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="새 비밀번호 입력..."
                    className="flex-1 px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-blue-500"
                  />
                  <button
                    onClick={handleChangePassword}
                    className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition-colors cursor-pointer shrink-0"
                  >
                    비밀번호 변경
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Gallery New / Edit Modal */}
        {(editingItem || isNewItemModal) && (
          <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl w-full p-6 space-y-4 max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <h4 className="text-base font-bold text-white">포트폴리오 현장 사진 정보 수정</h4>
                <button onClick={() => setEditingItem(null)} className="text-slate-400 hover:text-white">
                  <X className="w-5 h-5" />
                </button>
              </div>

              {editingItem && (
                <div className="space-y-4 text-xs">
                  <div>
                    <label className="block text-slate-300 mb-1">프로젝트 제목 (한국어)</label>
                    <input
                      type="text"
                      value={editingItem.title.ko}
                      onChange={(e) =>
                        setEditingItem({
                          ...editingItem,
                          title: { ...editingItem.title, ko: e.target.value },
                        })
                      }
                      className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-slate-300 mb-1">카테고리</label>
                      <select
                        value={editingItem.category}
                        onChange={(e) =>
                          setEditingItem({
                            ...editingItem,
                            category: e.target.value as GalleryCategory,
                          })
                        }
                        className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white"
                      >
                        <option value="airport">공공 · 공항 랜드마크</option>
                        <option value="commercial">상업 · 엔터테인먼트</option>
                        <option value="retail">리테일 · B2B</option>
                        <option value="global">글로벌 신사업</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-slate-300 mb-1">위치 (Location)</label>
                      <input
                        type="text"
                        value={editingItem.location.ko}
                        onChange={(e) =>
                          setEditingItem({
                            ...editingItem,
                            location: { ...editingItem.location, ko: e.target.value },
                          })
                        }
                        className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-300 mb-1">사진 이미지 URL 또는 파일 업로드</label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={editingItem.imageUrl}
                        onChange={(e) => setEditingItem({ ...editingItem, imageUrl: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white"
                        placeholder="https://..."
                      />
                      <label className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 cursor-pointer shrink-0 font-bold flex items-center gap-1">
                        <Upload className="w-4 h-4" />
                        <span>파일</span>
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) =>
                            handleFileUpload(e, (url) => setEditingItem({ ...editingItem, imageUrl: url }))
                          }
                        />
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-300 mb-1">하드웨어 및 시스템 스펙</label>
                    <input
                      type="text"
                      value={editingItem.specs.ko}
                      onChange={(e) =>
                        setEditingItem({
                          ...editingItem,
                          specs: { ...editingItem.specs, ko: e.target.value },
                        })
                      }
                      className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 mb-1">상세 설명</label>
                    <textarea
                      rows={3}
                      value={editingItem.description.ko}
                      onChange={(e) =>
                        setEditingItem({
                          ...editingItem,
                          description: { ...editingItem.description, ko: e.target.value },
                        })
                      }
                      className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white"
                    />
                  </div>

                  <div className="flex justify-end gap-2 pt-3 border-t border-slate-800">
                    <button
                      onClick={() => setEditingItem(null)}
                      className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 font-semibold"
                    >
                      취소
                    </button>
                    <button
                      onClick={() => handleSaveGalleryItem(editingItem)}
                      className="px-5 py-2 rounded-xl bg-blue-600 text-white font-bold shadow"
                    >
                      저장하기
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
