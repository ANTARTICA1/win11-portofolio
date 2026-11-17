import React, { useState, useMemo, useRef, useEffect } from 'react';
import { 
  Search, ExternalLink, Code, X, Smartphone, Globe, Cpu, 
  CheckCircle2, ShieldCheck, Star, ArrowRight, ChevronRight, ChevronLeft,
  Home, LayoutGrid, Gamepad2, Sparkles, Palette, Bell, Download, 
  Library, Layers, User, Play, Info, Check, Eye
} from 'lucide-react';
import { PROJECTS_DATA } from '../../data/projectsData';
import { WinIcon } from '../Common/WinIcon';
import { playClickSound, playWindowSound } from '../../utils/sound';
import { useWindow } from '../Windows/WindowContext';
import './VisionDeckApp.css';

// Custom inline SVG icons for authentic Microsoft Store featured catalog
const StoreIcons = {
  Spotify: () => (
    <svg viewBox="0 0 100 100" width="100%" height="100%">
      <circle cx="50" cy="50" r="48" fill="#1ed760" />
      <path d="M72 40 C56 32, 33 32, 22 36 C20 37, 18 36, 17 34 C16 32, 17 30, 19 29 C32 25, 59 25, 76 35 C78 36, 79 39, 77 41 C76 42, 73 42, 72 40 Z" fill="#000000" />
      <path d="M68 51 C55 44, 35 43, 25 46 C23 47, 21 46, 20 44 C19 42, 20 40, 22 39 C34 35, 57 37, 71 45 C73 46, 74 49, 72 51 C71 52, 69 52, 68 51 Z" fill="#000000" />
      <path d="M63 62 C52 56, 38 55, 29 58 C27 59, 25 58, 24 56 C23 54, 24 52, 26 51 C37 48, 52 49, 65 57 C67 58, 68 61, 66 63 C65 64, 64 64, 63 62 Z" fill="#000000" />
    </svg>
  ),
  WhatsApp: () => (
    <svg viewBox="0 0 100 100" width="100%" height="100%">
      <circle cx="50" cy="50" r="48" fill="#25d366" />
      <path d="M50 18 C32.3 18 18 32.3 18 50 C18 56.1 19.7 61.8 22.8 66.7 L19 80 L32.9 76.4 C37.8 79.1 43.7 80.7 50 80.7 C67.7 80.7 82 66.4 82 48.7 C82 31 67.7 18 50 18 Z" fill="#ffffff" />
      <path d="M65.4 57.5 C64.6 57.1 60.5 55.1 59.8 54.8 C59 54.5 58.5 54.4 57.9 55.3 C57.3 56.2 55.6 58.2 55.1 58.8 C54.6 59.4 54 59.5 53.2 59.1 C52.4 58.7 49.7 57.8 46.5 55 C44 52.8 42.3 50.1 41.8 49.2 C41.3 48.4 41.7 48 42.1 47.6 C42.5 47.2 43 46.5 43.4 46 C43.8 45.5 44 45.1 44.3 44.5 C44.6 43.9 44.4 43.4 44.2 43 C44 42.6 42.3 38.3 41.6 36.6 C40.9 34.9 40.2 35.1 39.7 35.1 C39.2 35.1 38.6 35.1 38 35.1 C37.4 35.1 36.5 35.3 35.7 36.2 C34.9 37.1 32.8 39.1 32.8 43.2 C32.8 47.3 35.8 51.2 36.2 51.8 C36.6 52.4 42.1 60.9 50.4 64.5 C52.4 65.4 53.9 65.9 55.2 66.3 C57.2 66.9 59.1 66.8 60.5 66.6 C62.1 66.4 65.4 64.6 66.1 62.6 C66.8 60.6 66.8 58.9 66.6 58.5 C66.4 58.1 66.2 57.9 65.4 57.5 Z" fill="#25d366" />
    </svg>
  ),
  Downloader4K: () => (
    <svg viewBox="0 0 80 80" width="100%" height="100%">
      <rect width="80" height="80" rx="18" fill="#8bc34a" />
      <path d="M40 24 C33.4 24 28 29.4 28 36 C25.8 36 24 37.8 24 40 C24 42.2 25.8 44 28 44 L54 44 C57.3 44 60 41.3 60 38 C60 34.7 57.3 32 54 32 C53.7 32 53.4 32 53.1 32.1 C51.8 27.5 47.6 24 40 24 Z" fill="#ffffff" />
      <path d="M40 33 L40 54 M33 47 L40 54 L47 47" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M40 32 L40 40 M36 36 L44 36" stroke="#8bc34a" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    </svg>
  ),
  FDM: () => (
    <svg viewBox="0 0 80 80" width="100%" height="100%">
      <rect width="80" height="80" rx="18" fill="#0288d1" />
      <path d="M25 22 L55 22 L55 32 L37 32 L37 42 L50 42 L50 52 L37 52 L37 62 L25 62 Z" fill="#ffffff" />
      <path d="M50 42 L65 52 L50 62 Z" fill="#4fc3f7" />
    </svg>
  ),
  TorrentPlayer: () => (
    <svg viewBox="0 0 80 80" width="100%" height="100%">
      <rect width="80" height="80" rx="18" fill="#2e7d32" />
      <circle cx="40" cy="40" r="28" fill="#1b5e20" />
      <polygon points="34,28 54,40 34,52" fill="#ffffff" />
      <path d="M37 44 L43 44 L40 48 Z" fill="#4caf50" />
    </svg>
  ),
  Vortex: () => (
    <svg viewBox="0 0 80 80" width="100%" height="100%">
      <rect width="80" height="80" rx="18" fill="#1e1e2d" />
      <circle cx="40" cy="40" r="26" fill="url(#vortexGrad)" />
      <path d="M40 26 C47.7 26 54 32.3 54 40 C54 44.5 51.8 48.5 48.5 51 C45.5 48.5 43.5 44.5 43.5 40 C43.5 38 42 36.5 40 36.5 C38 36.5 36.5 38 36.5 40 C36.5 45.5 40 50 45 52.5 C43.5 53.5 41.8 54 40 54 C32.3 54 26 47.7 26 40 C26 32.3 32.3 26 40 26 Z" fill="#ffffff" />
      <defs>
        <radialGradient id="vortexGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#9c27b0" />
          <stop offset="50%" stopColor="#2196f3" />
          <stop offset="100%" stopColor="#00bcd4" />
        </radialGradient>
      </defs>
    </svg>
  ),
  Transmission: () => (
    <svg viewBox="0 0 80 80" width="100%" height="100%">
      <rect width="80" height="80" rx="18" fill="#2d3748" />
      <path d="M30 24 L50 24 L50 36 L58 36 L40 54 L22 36 L30 36 Z" fill="#e2e8f0" />
      <rect x="22" y="56" width="36" height="5" rx="2" fill="#e2e8f0" />
      <line x1="40" y1="24" x2="40" y2="16" stroke="#e2e8f0" strokeWidth="4" strokeLinecap="round" />
    </svg>
  ),
  Vuze: () => (
    <svg viewBox="0 0 80 80" width="100%" height="100%">
      <rect width="80" height="80" rx="18" fill="#1565c0" />
      <path d="M30 46 C28 42 28 35 34 30 C38 27 45 28 49 32 C53 36 52 42 48 46 C45 49 42 50 38 52 C35 53 32 50 30 46 Z" fill="#ffffff" />
      <circle cx="37" cy="33" r="2.5" fill="#1565c0" />
      <path d="M48 37 C54 36 60 40 58 46 C56 50 51 52 48 49" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M32 46 C26 47 22 52 24 58 C26 62 31 63 35 59" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" fill="none" />
    </svg>
  ),
  FrostWire: () => (
    <svg viewBox="0 0 80 80" width="100%" height="100%">
      <rect width="80" height="80" rx="18" fill="#0288d1" />
      <circle cx="40" cy="40" r="28" fill="#03a9f4" />
      <path d="M22 40 L58 40 M32 30 L48 50 M48 30 L32 50" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />
    </svg>
  ),
  TorrentManager: () => (
    <svg viewBox="0 0 80 80" width="100%" height="100%">
      <rect width="80" height="80" rx="18" fill="#1b5e20" />
      <rect x="22" y="18" width="36" height="44" rx="4" fill="#000000" />
      <path d="M40 26 L40 46 M33 39 L40 46 L47 39" stroke="#22c55e" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <rect x="25" y="49" width="30" height="9" rx="2" fill="#22c55e" />
      <text x="40" y="56" fill="#000000" fontSize="7" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">TORRENT</text>
    </svg>
  )
};

export const VisionDeckApp = ({ onLaunchApp, initialSelectedProject = null }) => {
  const winCtx = useWindow();
  const [activeNav, setActiveNav] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);
  const [heroCarouselIndex, setHeroCarouselIndex] = useState(0);
  const shelfScrollRef = useRef(null);

  // Projects list from portfolio data
  const validProjects = useMemo(() => {
    return Object.values(PROJECTS_DATA).filter(
      (p) => p.id !== 'dino' && p.id !== 'krisnaartha' && p.motto
    );
  }, []);

  // Left Navigation Rail Items
  const railItemsTop = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'apps', label: 'Apps', icon: LayoutGrid },
    { id: 'gaming', label: 'Gaming', icon: Gamepad2 },
    { id: 'ai-hub', label: 'AI Hub', icon: Sparkles },
    { id: 'themes', label: 'Themes', icon: Palette }
  ];

  const railItemsBottom = [
    { id: 'whats-new', label: "What's New", icon: Bell },
    { id: 'downloads', label: 'Downloads', icon: Download },
    { id: 'library', label: 'Library', icon: Library }
  ];

  // Hero Carousel Showcase Items (Spotify, Tatagih, NenaCare)
  const heroItems = [
    {
      id: 'spotify',
      title: 'Spotify - Music and Podcasts',
      tagline: 'Download now',
      themeClass: 'ms-hero-spotify',
      bgColor: 'linear-gradient(135deg, #092f15 0%, #031408 60%, #08210f 100%)',
      btnText: 'Open',
      btnBg: '#1ed760',
      btnColor: '#000000',
      action: () => {
        if (onLaunchApp) onLaunchApp('chrome', { url: 'https://open.spotify.com' });
      },
      renderLogo: () => (
        <div className="ms-hero-brand-wrap">
          <div className="ms-spotify-circle">
            <StoreIcons.Spotify />
          </div>
          <span className="ms-spotify-wordmark">Spotify</span>
        </div>
      )
    },
    {
      id: 'tatagih',
      title: 'Tatagih - AI Financial & Bill Manager',
      tagline: 'Smart Subscription Manager & AI Financial Assistant',
      themeClass: 'ms-hero-tatagih',
      bgColor: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 60%, #090d16 100%)',
      btnText: 'Open',
      btnBg: '#10b981',
      btnColor: '#ffffff',
      action: () => {
        if (onLaunchApp) onLaunchApp('chrome', { projectId: 'tatagih' });
      },
      renderLogo: () => (
        <div className="ms-hero-brand-wrap">
          <div className="ms-tatagih-circle">
            <WinIcon name="tatagih" size={72} />
          </div>
          <span className="ms-tatagih-wordmark">Tatagih</span>
        </div>
      )
    },
    {
      id: 'nenacare',
      title: 'NenaCare - AI K3 Incident System',
      tagline: 'AI-Powered Occupational Safety & Risk Priority',
      themeClass: 'ms-hero-nenacare',
      bgColor: 'linear-gradient(135deg, #042f2e 0%, #064e3b 60%, #021e1a 100%)',
      btnText: 'Open',
      btnBg: '#06b6d4',
      btnColor: '#000000',
      action: () => {
        if (onLaunchApp) onLaunchApp('chrome', { projectId: 'nenacare' });
      },
      renderLogo: () => (
        <div className="ms-hero-brand-wrap">
          <div className="ms-tatagih-circle">
            <WinIcon name="nenacare" size={72} />
          </div>
          <span className="ms-tatagih-wordmark">NenaCare</span>
        </div>
      )
    }
  ];

  // Auto-cycle hero banner carousel gently
  useEffect(() => {
    const timer = setInterval(() => {
      setHeroCarouselIndex((prev) => (prev + 1) % heroItems.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [heroItems.length]);

  // "Apps we think you'll love" curated shelf apps
  const appsWeThinkYoullLove = [
    {
      id: '4k_video',
      name: '4K Video Downloader Plus',
      price: 'Free',
      icon: StoreIcons.Downloader4K,
      category: 'Video Tools',
      action: () => playClickSound()
    },
    {
      id: 'fdm',
      name: 'Free Download Manager',
      price: 'Free',
      icon: StoreIcons.FDM,
      category: 'Downloads',
      action: () => playClickSound()
    },
    {
      id: 'torrent_player',
      name: 'Torrent Player Lite',
      price: 'Free',
      icon: StoreIcons.TorrentPlayer,
      category: 'Media & Streaming',
      action: () => playClickSound()
    },
    {
      id: 'vortex',
      name: 'Vortex Torrent Downloader',
      price: 'Free',
      icon: StoreIcons.Vortex,
      category: 'Network Utility',
      action: () => playClickSound()
    },
    {
      id: 'transmission',
      name: 'Transmission Manager',
      price: 'Free',
      icon: StoreIcons.Transmission,
      category: 'Client & Server',
      action: () => playClickSound()
    },
    {
      id: 'vuze',
      name: 'Vuze Torrent',
      price: '$1.59',
      icon: StoreIcons.Vuze,
      category: 'P2P Networking',
      action: () => playClickSound()
    },
    {
      id: 'frostwire',
      name: 'FrostWire Torrent Downloader',
      price: 'Free',
      icon: StoreIcons.FrostWire,
      category: 'File Sharing',
      action: () => playClickSound()
    },
    {
      id: 'torrent_mgr',
      name: 'Torrent Manager',
      price: 'Free',
      icon: StoreIcons.TorrentManager,
      category: 'Downloader',
      action: () => playClickSound()
    },
    // Developer Portfolio Apps inside the shelf
    {
      id: 'tatagih',
      name: 'Tatagih - Subscription AI',
      price: 'Free',
      isPortfolio: true,
      iconName: 'tatagih',
      category: 'Finance & AI',
      action: () => onLaunchApp && onLaunchApp('chrome', { projectId: 'tatagih' })
    },
    {
      id: 'lintas',
      name: 'Lintas - PC Companion',
      price: 'Free',
      isPortfolio: true,
      iconName: 'lintas',
      category: 'Productivity & Tool',
      action: () => onLaunchApp && onLaunchApp('chrome', { projectId: 'lintas' })
    },
    {
      id: 'nenacare',
      name: 'NenaCare - K3 System',
      price: 'Free',
      isPortfolio: true,
      iconName: 'nenacare',
      category: 'Incident Response',
      action: () => onLaunchApp && onLaunchApp('chrome', { projectId: 'nenacare' })
    },
    {
      id: 'temuin',
      name: 'Temuin - Lost & Found',
      price: 'Free',
      isPortfolio: true,
      iconName: 'temuin',
      category: 'Community Utility',
      action: () => onLaunchApp && onLaunchApp('chrome', { projectId: 'temuin' })
    }
  ];

  // Scroll shelf left/right
  const handleScrollShelf = (direction) => {
    playClickSound();
    if (shelfScrollRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      shelfScrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Filter projects when searching or browsing categories
  const filteredProjects = useMemo(() => {
    return validProjects.filter((p) => {
      const matchSearch =
        searchQuery === '' ||
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (p.motto && p.motto.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (p.tagline && p.tagline.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (p.description && p.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (p.stack && p.stack.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase())));

      if (!matchSearch) return false;

      if (activeNav === 'apps') {
        return ['tatagih', 'nenacare', 'makalah', 'lintas', 'temuin'].includes(p.id);
      }
      if (activeNav === 'gaming') {
        return ['neurofly', 'theotown'].includes(p.id);
      }
      if (activeNav === 'ai-hub') {
        return ['tatagih', 'nenacare', 'makalah'].includes(p.id);
      }
      return true;
    });
  }, [validProjects, activeNav, searchQuery]);

  const currentHero = heroItems[heroCarouselIndex];

  return (
    <div className="ms-store-container">
      {/* ---------------------------------------------------- */}
      {/* 1. SEAMLESS WINDOWS 11 TITLEBAR & SEARCH HEADER      */}
      {/* ---------------------------------------------------- */}
      <header
        className="ms-store-header"
        onPointerDown={winCtx?.handleTitlePointerDown}
        onPointerMove={winCtx?.handleTitlePointerMove}
        onPointerUp={winCtx?.handleTitlePointerUp}
        onDoubleClick={() => !winCtx?.isMobile && winCtx?.onMaximize?.()}
      >
        {/* Left: Store Icon + Brand Name */}
        <div className="ms-store-brand">
          <div className="ms-store-logo">
            <WinIcon name="store" size={17} />
          </div>
          <span className="ms-store-title">Microsoft Store</span>
        </div>

        {/* Center: Search Pill Bar */}
        <div
          className="ms-store-search-pill"
          onPointerDown={(e) => e.stopPropagation()}
        >
          <input
            type="text"
            className="ms-store-search-input"
            placeholder="Search apps, games, and more"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery ? (
            <button
              type="button"
              className="ms-search-clear-btn"
              onClick={() => setSearchQuery('')}
            >
              <X size={13} />
            </button>
          ) : (
            <Search size={14} className="ms-store-search-icon" />
          )}
        </div>

        {/* Right: User Profile Avatar & Window Controls */}
        <div className="ms-store-header-right" onPointerDown={(e) => e.stopPropagation()}>
          <div 
            className="ms-store-profile-btn" 
            title="Agung Krisna (Verified Developer)"
            onClick={() => onLaunchApp && onLaunchApp('recruiter')}
          >
            <User size={14} color="#e2e8f0" />
          </div>

          {winCtx?.WindowControls && (
            <winCtx.WindowControls
              onMinimize={winCtx.onMinimize}
              onMaximize={winCtx.onMaximize}
              onClose={winCtx.onClose}
              isMaximized={winCtx.isMaximized}
              isMobile={winCtx.isMobile}
              showSnapLayouts={winCtx.showSnapLayouts}
              setShowSnapLayouts={winCtx.setShowSnapLayouts}
              snapWindow={winCtx.snapWindow}
            />
          )}
        </div>
      </header>

      {/* ---------------------------------------------------- */}
      {/* 2. MAIN LAYOUT: LEFT RAIL & CONTENT VIEW             */}
      {/* ---------------------------------------------------- */}
      <div className="ms-store-body">
        {/* Left Navigation Rail (Authentic Windows 11 Style) */}
        <nav className="ms-store-rail">
          <div className="ms-rail-group ms-rail-top">
            {railItemsTop.map((item) => {
              const Icon = item.icon;
              const isActive = activeNav === item.id && !searchQuery;
              return (
                <button
                  key={item.id}
                  type="button"
                  className={`ms-rail-item ${isActive ? 'active' : ''}`}
                  onClick={() => {
                    playClickSound();
                    setActiveNav(item.id);
                    setSearchQuery('');
                  }}
                  title={item.label}
                >
                  {isActive && <div className="ms-rail-indicator" />}
                  <div className="ms-rail-icon-box">
                    <Icon size={19} />
                  </div>
                  <span className="ms-rail-label">{item.label}</span>
                </button>
              );
            })}
          </div>

          <div className="ms-rail-spacer" />

          <div className="ms-rail-group ms-rail-bottom">
            {railItemsBottom.map((item) => {
              const Icon = item.icon;
              const isActive = activeNav === item.id && !searchQuery;
              return (
                <button
                  key={item.id}
                  type="button"
                  className={`ms-rail-item ${isActive ? 'active' : ''}`}
                  onClick={() => {
                    playClickSound();
                    setActiveNav(item.id);
                    setSearchQuery('');
                  }}
                  title={item.label}
                >
                  {isActive && <div className="ms-rail-indicator" />}
                  <div className="ms-rail-icon-box">
                    <Icon size={18} />
                  </div>
                  <span className="ms-rail-label">{item.label}</span>
                </button>
              );
            })}
          </div>
        </nav>

        {/* Store Main View Area */}
        <main className="ms-store-main-scroll">
          {/* If Search Query is Active: Show Search Results */}
          {searchQuery ? (
            <div className="ms-search-results-section">
              <div className="ms-search-heading">
                <h2 className="ms-shelf-title">Results for &ldquo;{searchQuery}&rdquo;</h2>
                <span className="ms-search-count">{filteredProjects.length} items found</span>
              </div>

              {filteredProjects.length === 0 ? (
                <div className="ms-empty-state">
                  <Search size={48} className="ms-empty-icon" />
                  <p className="ms-empty-title">Tidak ada aplikasi yang cocok</p>
                  <p className="ms-empty-sub">Coba kata kunci lain atau jelajahi kategori di bilah samping.</p>
                </div>
              ) : (
                <div className="ms-search-grid">
                  {filteredProjects.map((proj) => (
                    <div
                      key={proj.id}
                      className="ms-search-card"
                      onClick={() => setSelectedProject(proj)}
                    >
                      <div className="ms-search-card-icon">
                        <WinIcon name={proj.id} size={48} />
                      </div>
                      <div className="ms-search-card-info">
                        <h4 className="ms-search-card-name">{proj.name}</h4>
                        <p className="ms-search-card-category">{proj.category}</p>
                        <div className="ms-search-card-rating">
                          <Star size={11} fill="#f59e0b" stroke="#f59e0b" />
                          <span>4.9</span>
                          <span className="ms-bullet">&bull;</span>
                          <span className="ms-price-badge">Free</span>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="ms-btn-card-open"
                        onClick={(e) => {
                          e.stopPropagation();
                          playClickSound();
                          if (onLaunchApp) onLaunchApp('chrome', { projectId: proj.id });
                        }}
                      >
                        Open
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : activeNav === 'home' ? (
            /* ------------------------------------------------ */
            /* HOME VIEW: HERO SPOTLIGHT + APPS WE THINK...    */
            /* ------------------------------------------------ */
            <div className="ms-home-view">
              {/* Asymmetric Hero Showcase Section */}
              <div className="ms-hero-grid">
                {/* 1. Large Left Card (Spotify / Featured Carousel) */}
                <div
                  className={`ms-hero-card-left ${currentHero.themeClass}`}
                  style={{ background: currentHero.bgColor }}
                >
                  <div className="ms-hero-left-content">
                    <h1 className="ms-hero-title">{currentHero.title}</h1>
                    <p className="ms-hero-subtitle">{currentHero.tagline}</p>
                    <button
                      type="button"
                      className="ms-hero-action-pill"
                      style={{
                        backgroundColor: currentHero.btnBg,
                        color: currentHero.btnColor
                      }}
                      onClick={() => {
                        playClickSound();
                        currentHero.action();
                      }}
                    >
                      {currentHero.btnText}
                    </button>
                  </div>

                  <div className="ms-hero-right-logo">
                    {currentHero.renderLogo()}
                  </div>

                  {/* Carousel Indicator Dots */}
                  <div className="ms-hero-dots">
                    {heroItems.map((_, dotIdx) => (
                      <span
                        key={dotIdx}
                        className={`ms-hero-dot ${dotIdx === heroCarouselIndex ? 'active' : ''}`}
                        onClick={() => {
                          playClickSound();
                          setHeroCarouselIndex(dotIdx);
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* 2. Right Stack (WhatsApp + 2 Mini Cards) */}
                <div className="ms-hero-stack-right">
                  {/* WhatsApp Bright Card */}
                  <div
                    className="ms-hero-card-whatsapp"
                    onClick={() => {
                      playClickSound();
                      if (onLaunchApp) onLaunchApp('whatsapp');
                    }}
                  >
                    <div className="ms-whatsapp-info">
                      <h3 className="ms-whatsapp-title">WhatsApp</h3>
                      <button
                        type="button"
                        className="ms-whatsapp-get-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          playClickSound();
                          if (onLaunchApp) onLaunchApp('whatsapp');
                        }}
                      >
                        Get
                      </button>
                      <div className="ms-esrb-badge">
                        <div className="ms-esrb-letter">E</div>
                        <div className="ms-esrb-text">
                          <span className="ms-esrb-headline">EVERYONE</span>
                          <span className="ms-esrb-sub">In-App Purchases, Shares Location, Users Interact</span>
                        </div>
                      </div>
                    </div>
                    <div className="ms-whatsapp-logo-watermark">
                      <StoreIcons.WhatsApp />
                    </div>
                  </div>

                  {/* Bottom Row: 2 Mini Side-by-Side Cards */}
                  <div className="ms-hero-bottom-row">
                    {/* Mini Card 1: Football Manager 27 / Simulation */}
                    <div
                      className="ms-mini-card ms-mini-fm"
                      onClick={() => {
                        playClickSound();
                        if (onLaunchApp) onLaunchApp('neurofly');
                      }}
                    >
                      <div className="ms-mini-card-overlay" />
                      <div className="ms-mini-pill-tag">Football Manager 27</div>
                    </div>

                    {/* Mini Card 2: Forza Horizon 6 / Lintas */}
                    <div
                      className="ms-mini-card ms-mini-forza"
                      onClick={() => {
                        playClickSound();
                        if (onLaunchApp) onLaunchApp('chrome', { projectId: 'lintas' });
                      }}
                    >
                      <div className="ms-mini-card-overlay" />
                      <div className="ms-mini-badge-citylife">City Life</div>
                      <div className="ms-mini-pill-tag">
                        <span className="ms-red-icon-box">FH</span>
                        <span>Forza Horizon 6</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Shelf: "Apps we think you'll love >" */}
              <section className="ms-shelf-section">
                <div className="ms-shelf-header">
                  <div className="ms-shelf-title-wrap">
                    <h2 className="ms-shelf-title">
                      <span>Apps we think you&apos;ll love</span>
                      <ChevronRight size={18} className="ms-shelf-title-chevron" />
                    </h2>
                  </div>
                  <div className="ms-shelf-controls">
                    <button
                      type="button"
                      className="ms-shelf-nav-btn"
                      onClick={() => handleScrollShelf('left')}
                      title="Scroll Left"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <button
                      type="button"
                      className="ms-shelf-nav-btn"
                      onClick={() => handleScrollShelf('right')}
                      title="Scroll Right"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>

                <div className="ms-shelf-slider" ref={shelfScrollRef}>
                  {appsWeThinkYoullLove.map((app) => {
                    const AppIcon = app.icon;
                    return (
                      <div
                        key={app.id}
                        className="ms-app-tile"
                        onClick={() => {
                          playClickSound();
                          if (app.isPortfolio) {
                            const found = validProjects.find((p) => p.id === app.id);
                            if (found) setSelectedProject(found);
                            else app.action();
                          } else {
                            app.action();
                          }
                        }}
                      >
                        <div className="ms-app-tile-icon-box">
                          {app.isPortfolio ? (
                            <WinIcon name={app.iconName} size={48} />
                          ) : (
                            <AppIcon />
                          )}
                        </div>
                        <div className="ms-app-tile-name" title={app.name}>
                          {app.name}
                        </div>
                        <div className="ms-app-tile-footer">
                          <span className="ms-app-tile-price">{app.price}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* Shelf 2: "Top Free Apps & Portfolio Projects >" */}
              <section className="ms-shelf-section" style={{ marginTop: '28px' }}>
                <div className="ms-shelf-header">
                  <div className="ms-shelf-title-wrap">
                    <h2 className="ms-shelf-title">
                      <span>Top Free Apps</span>
                      <ChevronRight size={18} className="ms-shelf-title-chevron" />
                    </h2>
                  </div>
                </div>

                <div className="ms-top-free-grid">
                  {validProjects.slice(0, 6).map((proj, idx) => (
                    <div
                      key={proj.id}
                      className="ms-top-free-card"
                      onClick={() => setSelectedProject(proj)}
                    >
                      <span className="ms-top-free-rank">{idx + 1}</span>
                      <div className="ms-top-free-icon">
                        <WinIcon name={proj.id} size={42} />
                      </div>
                      <div className="ms-top-free-info">
                        <div className="ms-top-free-title">{proj.name}</div>
                        <div className="ms-top-free-cat">{proj.tagline || proj.category}</div>
                        <div className="ms-top-free-rating">
                          <Star size={11} fill="#f59e0b" stroke="#f59e0b" />
                          <span>4.9</span>
                          <span className="ms-bullet">&bull;</span>
                          <span className="ms-price-badge">Free</span>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="ms-btn-card-open"
                        onClick={(e) => {
                          e.stopPropagation();
                          playClickSound();
                          if (onLaunchApp) onLaunchApp('chrome', { projectId: proj.id });
                        }}
                      >
                        Get
                      </button>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          ) : (
            /* ------------------------------------------------ */
            /* CATEGORY SPECIFIC VIEWS                          */
            /* ------------------------------------------------ */
            <div className="ms-category-view">
              <div className="ms-search-heading">
                <h2 className="ms-shelf-title">
                  {activeNav === 'apps' && 'Productivity & Cloud Apps'}
                  {activeNav === 'gaming' && 'Games & Arcade Simulation'}
                  {activeNav === 'ai-hub' && 'AI Hub — Intelligent Applications'}
                  {activeNav === 'themes' && 'Themes & Personalization'}
                  {activeNav === 'whats-new' && "What's New in Portfolio Edition"}
                  {activeNav === 'downloads' && 'Downloads & Updates'}
                  {activeNav === 'library' && 'My Application Library'}
                </h2>
                <span className="ms-search-count">
                  {activeNav === 'themes' 
                    ? 'Official Windows 11 Bloom Themes' 
                    : `${filteredProjects.length} available items`}
                </span>
              </div>

              {activeNav === 'themes' ? (
                <div className="ms-themes-grid">
                  {[
                    { id: 'bloom_dark', name: 'Windows 11 Bloom Dark', bg: '#0b0f19', img: '/wallpapers/win11_bloom_dark.jpg' },
                    { id: 'bloom_light', name: 'Windows 11 Bloom Light', bg: '#f1f5f9', img: '/wallpapers/win11_bloom_light.jpg' },
                    { id: 'glow', name: 'Windows 11 Glow', bg: '#111827', img: '/wallpapers/win11_glow.jpg' },
                    { id: 'motion', name: 'Captured Motion', bg: '#1f2937', img: '/wallpapers/win11_motion.jpg' },
                    { id: 'flow', name: 'Windows 11 Flow', bg: '#0f172a', img: '/wallpapers/win11_flow.jpg' },
                    { id: 'sunrise', name: 'Sunrise Glow', bg: '#31102b', img: '/wallpapers/win11_sunrise.jpg' }
                  ].map((theme) => (
                    <div key={theme.id} className="ms-theme-card">
                      <div
                        className="ms-theme-preview"
                        style={{ backgroundImage: `url(${theme.img})` }}
                      />
                      <div className="ms-theme-card-body">
                        <span className="ms-theme-name">{theme.name}</span>
                        <button
                          type="button"
                          className="ms-btn-card-open"
                          onClick={() => {
                            playClickSound();
                            if (onLaunchApp) onLaunchApp('settings', { tab: 'personalization' });
                          }}
                        >
                          Terapkan
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="ms-search-grid">
                  {filteredProjects.map((proj) => (
                    <div
                      key={proj.id}
                      className="ms-search-card"
                      onClick={() => setSelectedProject(proj)}
                    >
                      <div className="ms-search-card-icon">
                        <WinIcon name={proj.id} size={48} />
                      </div>
                      <div className="ms-search-card-info">
                        <h4 className="ms-search-card-name">{proj.name}</h4>
                        <p className="ms-search-card-category">{proj.tagline || proj.category}</p>
                        <div className="ms-search-card-rating">
                          <Star size={11} fill="#f59e0b" stroke="#f59e0b" />
                          <span>4.9</span>
                          <span className="ms-bullet">&bull;</span>
                          <span className="ms-price-badge">Free</span>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="ms-btn-card-open"
                        onClick={(e) => {
                          e.stopPropagation();
                          playClickSound();
                          if (onLaunchApp) onLaunchApp('chrome', { projectId: proj.id });
                        }}
                      >
                        Open
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </main>
      </div>

      {/* ---------------------------------------------------- */}
      {/* 3. PRODUCT DETAIL MODAL DIALOG (STORE SHEET)         */}
      {/* ---------------------------------------------------- */}
      {selectedProject && (
        <div className="ms-detail-overlay" onClick={() => setSelectedProject(null)}>
          <div
            className="ms-detail-dialog anim-flyout"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="ms-detail-header">
              <div className="ms-detail-icon">
                <WinIcon name={selectedProject.id} size={64} />
              </div>
              <div className="ms-detail-meta">
                <h2 className="ms-detail-title">{selectedProject.name}</h2>
                <p className="ms-detail-developer">
                  <ShieldCheck size={14} color="#3b82f6" />
                  <span>Agung Krisna (Verified Developer)</span>
                </p>
                <div className="ms-detail-rating-row">
                  <div className="ms-stars">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} size={13} fill="#f59e0b" stroke="#f59e0b" />
                    ))}
                  </div>
                  <span className="ms-rating-score">4.9</span>
                  <span className="ms-rating-reviews">(128 rating)</span>
                  <span className="ms-bullet">&bull;</span>
                  <span className="ms-cat-pill">{selectedProject.category}</span>
                </div>
              </div>
              <button
                type="button"
                className="ms-detail-close-btn"
                onClick={() => setSelectedProject(null)}
              >
                <X size={16} />
              </button>
            </div>

            <div className="ms-detail-actions">
              <button
                type="button"
                className="ms-btn-primary-get"
                onClick={() => {
                  playClickSound();
                  if (onLaunchApp) {
                    if (selectedProject.id === 'neurofly') onLaunchApp('neurofly');
                    else onLaunchApp('chrome', { projectId: selectedProject.id });
                  }
                  setSelectedProject(null);
                }}
              >
                <ExternalLink size={15} />
                <span>Buka Aplikasi (Get)</span>
              </button>

              {selectedProject.githubUrl && (
                <button
                  type="button"
                  className="ms-btn-secondary"
                  onClick={() => {
                    playClickSound();
                    window.open(selectedProject.githubUrl, '_blank', 'noopener,noreferrer');
                  }}
                >
                  <Code size={14} />
                  <span>Lihat Repository GitHub</span>
                </button>
              )}
            </div>

            <div className="ms-detail-scroll">
              {/* Product Philosophy Motto */}
              {selectedProject.motto && (
                <div className="ms-motto-callout">
                  <div className="ms-motto-badge">FILOSOFI &amp; MOTO KARYA</div>
                  <p className="ms-motto-text">&ldquo;{selectedProject.motto}&rdquo;</p>
                </div>
              )}

              {/* Description */}
              <div className="ms-detail-section">
                <h3 className="ms-detail-section-title">Deskripsi Aplikasi</h3>
                <p className="ms-detail-desc">{selectedProject.description}</p>
              </div>

              {/* Tech Stack */}
              {selectedProject.stack && (
                <div className="ms-detail-section">
                  <h3 className="ms-detail-section-title">Teknologi &amp; Arsitektur</h3>
                  <div className="ms-stack-wrap">
                    {selectedProject.stack.map((item, idx) => (
                      <span key={idx} className="ms-stack-pill">{item}</span>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Features */}
              {selectedProject.keyFeatures && (
                <div className="ms-detail-section">
                  <h3 className="ms-detail-section-title">Fitur Utama</h3>
                  <div className="ms-features-list">
                    {selectedProject.keyFeatures.map((feat, idx) => (
                      <div key={idx} className="ms-feature-item">
                        <CheckCircle2 size={16} color="#10b981" className="ms-feature-check" />
                        <div>
                          <strong>{feat.title}: </strong>
                          <span>{feat.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
