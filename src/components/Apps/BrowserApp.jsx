import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, ArrowRight, RotateCw, Lock, Star, ExternalLink, 
  CheckCircle2, ChevronDown, Plus, X, ZoomIn, FolderGit2,
  ChevronLeft, ChevronRight, Maximize2, Gamepad2
} from 'lucide-react';
import { WinIcon } from '../Common/WinIcon';
import { playClickSound } from '../../utils/sound';
import { useWindow } from '../Windows/WindowContext';
import { ChromeDinoGame } from './ChromeDinoGame';
import { NeuroFlyGame } from './NeuroFlyGame';
import { PROJECTS_DATA } from '../../data/projectsData';
import { PhoneMockup } from '../Common/PhoneMockup';
import './BrowserApp.css';

export const BrowserApp = ({ onOpenFile, initialProject = 'tatagih', initialUrl = null, onLaunchApp }) => {
  const winCtx = useWindow();
  const [activeProjectId, setActiveProjectId] = useState(initialProject || 'tatagih');
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const [phoneMockupMode, setPhoneMockupMode] = useState(true);
  const [neuroFlyLiveMode, setNeuroFlyLiveMode] = useState(true);
  const [selectedPhotoModal, setSelectedPhotoModal] = useState(null);
  const [isBookmarked, setIsBookmarked] = useState(true);
  const [isReloading, setIsReloading] = useState(false);
  const [showTabSearch, setShowTabSearch] = useState(false);
  const [omniboxVal, setOmniboxVal] = useState(() => {
    return initialProject === 'dino' ? 'chrome://dino' : initialProject === 'krisnaartha' ? 'portofolio.krisnaartha.my.id' : `agungkrisna.dev/projects/${initialProject || 'tatagih'}`;
  });

  const projectKeys = Object.keys(PROJECTS_DATA);

  const [tabs, setTabs] = useState(() => {
    const initKey = initialProject || 'tatagih';
    const p = PROJECTS_DATA[initKey] || PROJECTS_DATA.tatagih;
    const title = p.isDino ? 'chrome://dino' : p.isExternalIframe ? 'portofolio.krisnaartha.my.id' : `${p.name} - Showcase`;
    const icon = p.isDino ? 'dino' : p.isExternalIframe ? 'krisnaartha' : 'chrome';
    return [
      {
        id: p.id,
        projectId: p.id,
        title,
        icon
      }
    ];
  });

  useEffect(() => {
    if (activeProjectId === 'dino') {
      setOmniboxVal('chrome://dino');
    } else if (activeProjectId === 'krisnaartha') {
      setOmniboxVal('portofolio.krisnaartha.my.id');
    } else if (PROJECTS_DATA[activeProjectId]) {
      setOmniboxVal(`agungkrisna.dev/projects/${activeProjectId}`);
    }
  }, [activeProjectId]);

  const handleSelectProject = (projectId) => {
    playClickSound();
    setActiveProjectId(projectId);
    setActivePhotoIndex(0);
    setTabs((prev) => {
      const exists = prev.find((t) => (t.projectId || t.id) === projectId);
      if (exists) return prev;
      const p = PROJECTS_DATA[projectId];
      const title = p ? (p.isDino ? 'chrome://dino' : p.isExternalIframe ? 'portofolio.krisnaartha.my.id' : `${p.name} - Showcase`) : 'New Tab';
      const icon = p?.isDino ? 'dino' : p?.isExternalIframe ? 'krisnaartha' : 'chrome';
      return [
        ...prev,
        {
          id: projectId,
          projectId: projectId,
          title,
          icon
        }
      ];
    });
  };

  useEffect(() => {
    if (initialProject && PROJECTS_DATA[initialProject]) {
      handleSelectProject(initialProject);
    }
  }, [initialProject]);

  const handleNewTab = () => {
    playClickSound();
    const availableKey = projectKeys.find((k) => !tabs.some((t) => (t.projectId || t.id) === k));
    if (availableKey) {
      handleSelectProject(availableKey);
    } else {
      const nextKey = projectKeys[tabs.length % projectKeys.length];
      const p = PROJECTS_DATA[nextKey];
      const newId = `${p.id}-${Date.now()}`;
      setTabs((prev) => [
        ...prev,
        {
          id: newId,
          projectId: p.id,
          title: `${p.name} - Showcase`,
          icon: 'chrome'
        }
      ]);
      setActiveProjectId(p.id);
    }
  };

  const handleCloseTab = (tabId, e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    playClickSound();
    if (tabs.length === 1) {
      if (winCtx?.onClose) {
        winCtx.onClose();
      }
      return;
    }
    const idx = tabs.findIndex((t) => t.id === tabId);
    const newTabs = tabs.filter((t) => t.id !== tabId);
    setTabs(newTabs);

    const closedTab = tabs[idx];
    const targetProjId = closedTab?.projectId || closedTab?.id;
    if (activeProjectId === targetProjId) {
      const fallbackTab = newTabs[Math.max(0, idx - 1)];
      setActiveProjectId(fallbackTab.projectId || fallbackTab.id);
    }
  };

  const currentProject = PROJECTS_DATA[activeProjectId] || PROJECTS_DATA.tatagih;

  const handleReload = () => {
    playClickSound();
    setIsReloading(true);
    setTimeout(() => {
      setIsReloading(false);
    }, 400);
  };

  const currentIndex = projectKeys.indexOf(activeProjectId);
  const prevProjectKey = projectKeys[(currentIndex - 1 + projectKeys.length) % projectKeys.length];
  const nextProjectKey = projectKeys[(currentIndex + 1) % projectKeys.length];
  
  // Strict check: only photos with isMobile: true or projects sigap / temuin are portrait mobile screenshots
  const activePhoto = currentProject.photos[activePhotoIndex] || currentProject.photos[0] || {};
  const isMobilePhoto = Boolean(
    activePhoto?.isMobile ||
    currentProject.id === 'sigap' ||
    currentProject.id === 'temuin'
  );

  // Keyboard navigation for active photo and lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!currentProject?.photos || currentProject.photos.length <= 1) return;
      if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;

      if (e.key === 'ArrowLeft') {
        playClickSound();
        setActivePhotoIndex((prev) => (prev > 0 ? prev - 1 : currentProject.photos.length - 1));
      } else if (e.key === 'ArrowRight') {
        playClickSound();
        setActivePhotoIndex((prev) => (prev < currentProject.photos.length - 1 ? prev + 1 : 0));
      } else if (e.key === 'Escape' && selectedPhotoModal) {
        setSelectedPhotoModal(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentProject, selectedPhotoModal]);

  return (
    <div className="chrome-browser">
      <div
        className="chrome-titlebar"
        onPointerDown={winCtx?.handleTitlePointerDown}
        onPointerMove={winCtx?.handleTitlePointerMove}
        onPointerUp={winCtx?.handleTitlePointerUp}
        onDoubleClick={(e) => {
          if (e.target.closest('.chrome-tab, .chrome-tabstrip, button, input, a')) return;
          if (!winCtx?.isMobile && winCtx?.onMaximize) {
            playClickSound();
            winCtx.onMaximize();
          }
        }}
      >
        <div className="chrome-tab-search-wrapper" onPointerDown={(e) => e.stopPropagation()}>
          <button
            type="button"
            className="chrome-tab-search-btn"
            title="Tab search"
            onClick={(e) => {
              e.stopPropagation();
              playClickSound();
              setShowTabSearch(!showTabSearch);
            }}
          >
            <ChevronDown size={14} />
          </button>

          {showTabSearch && (
            <div className="chrome-tab-search-flyout anim-flyout">
              <div className="tab-search-header">Daftar Tab & Showcase</div>
              <div className="tab-search-list">
                {projectKeys.map((pKey) => {
                  const p = PROJECTS_DATA[pKey];
                  const isActive = pKey === activeProjectId;
                  return (
                    <div
                      key={pKey}
                      className={`tab-search-item ${isActive ? 'active' : ''}`}
                      onClick={() => {
                        handleSelectProject(pKey);
                        setShowTabSearch(false);
                      }}
                    >
                      <WinIcon name={p.id} size={16} />
                      <div className="tab-search-item-info">
                        <span className="tab-search-item-title">{p.name} - Showcase</span>
                        <span className="tab-search-item-sub">{p.category}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        <div className="chrome-tabstrip" onPointerDown={(e) => e.stopPropagation()}>
          {tabs.map((tab) => {
            const isTabActive = (tab.projectId || tab.id) === activeProjectId;
            return (
              <div
                key={tab.id}
                className={`chrome-tab ${isTabActive ? 'active' : ''}`}
                onPointerDown={(e) => {
                  e.stopPropagation();
                  playClickSound();
                  setActiveProjectId(tab.projectId || tab.id);
                  setActivePhotoIndex(0);
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  playClickSound();
                  setActiveProjectId(tab.projectId || tab.id);
                  setActivePhotoIndex(0);
                }}
                onDoubleClick={(e) => e.stopPropagation()}
              >
                <WinIcon name={tab.icon || "chrome"} size={15} />
                <span className="chrome-tab-title">{tab.title}</span>
                <button
                  type="button"
                  className="chrome-tab-close"
                  title="Tutup Tab"
                  onPointerDown={(e) => e.stopPropagation()}
                  onClick={(e) => handleCloseTab(tab.id, e)}
                >
                  <X size={12} />
                </button>
              </div>
            );
          })}

          <button
            type="button"
            className="chrome-newtab-btn"
            title="Tab Baru"
            onPointerDown={(e) => e.stopPropagation()}
            onClick={(e) => {
              e.stopPropagation();
              handleNewTab();
            }}
          >
            <Plus size={15} />
          </button>
        </div>

        <div className="chrome-titlebar-drag-spacer" />

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
            className="chrome-win-controls"
          />
        )}
      </div>

      <div className="chrome-toolbar">
        <button
          className="chrome-tool-btn"
          title="Back"
          onClick={() => handleSelectProject(prevProjectKey)}
        >
          <ArrowLeft size={16} />
        </button>
        <button
          className="chrome-tool-btn"
          title="Forward"
          onClick={() => handleSelectProject(nextProjectKey)}
        >
          <ArrowRight size={16} />
        </button>
        <button
          className={`chrome-tool-btn ${isReloading ? 'animate-spin' : ''}`}
          title="Reload"
          onClick={handleReload}
        >
          <RotateCw size={14} />
        </button>

        <form
          className="chrome-omnibox"
          onSubmit={(e) => {
            e.preventDefault();
            const val = (omniboxVal || '').trim().toLowerCase();
            if (val.includes('dino')) {
              handleSelectProject('dino');
            } else if (val.includes('krisnaartha') || val.includes('portofolio')) {
              handleSelectProject('krisnaartha');
            } else if (val.includes('theotown') || val.includes('stikom')) {
              handleSelectProject('theotown');
            } else if (val.includes('nenacare')) {
              handleSelectProject('nenacare');
            } else if (val.includes('tatagih')) {
              handleSelectProject('tatagih');
            } else if (val.includes('lintas')) {
              handleSelectProject('lintas');
            } else if (val.includes('neurofly')) {
              handleSelectProject('neurofly');
            } else if (val.includes('temuin')) {
              handleSelectProject('temuin');
            } else if (val.includes('makalah')) {
              handleSelectProject('makalah');
            } else if (val.includes('sigap')) {
              handleSelectProject('sigap');
            } else if (val.includes('bingkai')) {
              handleSelectProject('bingkai');
            }
          }}
        >
          {currentProject?.isDino ? (
            <WinIcon name="dino" size={14} />
          ) : currentProject?.id === 'krisnaartha' ? null : (
            <Lock size={13} color="#22c55e" />
          )}
          <span style={{ color: currentProject?.isDino ? '#94a3b8' : '#22c55e', fontWeight: 600 }}>
            {currentProject?.isDino ? 'chrome://' : 'https://'}
          </span>
          <input
            type="text"
            className="chrome-url-input"
            value={omniboxVal}
            onChange={(e) => setOmniboxVal(e.target.value)}
            style={{
              flex: 1,
              background: 'transparent',
              border: 'none',
              outline: 'none',
              color: '#ffffff',
              fontSize: '12px',
              fontFamily: 'inherit'
            }}
          />
          <Star
            size={15}
            color={isBookmarked ? '#f59e0b' : '#9ca3af'}
            fill={isBookmarked ? '#f59e0b' : 'none'}
            style={{ cursor: 'pointer', flexShrink: 0 }}
            onClick={(e) => {
              e.stopPropagation();
              setIsBookmarked(!isBookmarked);
            }}
          />
        </form>

        <div
          style={{
            width: '28px',
            height: '28px',
            borderRadius: '50%',
            backgroundColor: '#2563eb',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '11px',
            fontWeight: 700
          }}
          title="Agung Krisna Profile"
        >
          AK
        </div>
      </div>

      <div className="chrome-bookmarks-bar">
        <div
          className={`chrome-bookmark-item ${activeProjectId === 'dino' ? 'active' : ''}`}
          onClick={() => handleSelectProject('dino')}
          title="Play Chrome Dinosaur Game"
        >
          <WinIcon name="dino" size={13} />
          <span>chrome://dino </span>
        </div>
        <div
          className={`chrome-bookmark-item ${activeProjectId === 'krisnaartha' ? 'active' : ''}`}
          onClick={() => handleSelectProject('krisnaartha')}
          title="portofolio.krisnaartha.my.id (Portfolio)"
        >
          <WinIcon name="krisnaartha" size={13} />
          <span>portofolio.krisnaartha.my.id</span>
        </div>
        <div
          className={`chrome-bookmark-item ${activeProjectId === 'theotown' ? 'active' : ''}`}
          onClick={() => handleSelectProject('theotown')}
        >
          <WinIcon name="theotown" size={13} />
          <span>TheoTown (STIKOM Bali Mod)</span>
        </div>
        <div
          className={`chrome-bookmark-item ${activeProjectId === 'nenacare' ? 'active' : ''}`}
          onClick={() => handleSelectProject('nenacare')}
        >
          <WinIcon name="nenacare" size={13} />
          <span>NenaCare (K3 Incident AI)</span>
        </div>
        <div
          className={`chrome-bookmark-item ${activeProjectId === 'tatagih' ? 'active' : ''}`}
          onClick={() => handleSelectProject('tatagih')}
        >
          <WinIcon name="tatagih" size={13} />
          <span>Tatagih (Bill Manager)</span>
        </div>
        <div
          className={`chrome-bookmark-item ${activeProjectId === 'lintas' ? 'active' : ''}`}
          onClick={() => handleSelectProject('lintas')}
        >
          <WinIcon name="lintas" size={13} />
          <span>Lintas (Companion Utility)</span>
        </div>
        <div
          className={`chrome-bookmark-item ${activeProjectId === 'neurofly' ? 'active' : ''}`}
          onClick={() => handleSelectProject('neurofly')}
        >
          <WinIcon name="neurofly" size={13} />
          <span>NeuroFly (Drosophila × Pong)</span>
        </div>
        <div
          className={`chrome-bookmark-item ${activeProjectId === 'sigap' ? 'active' : ''}`}
          onClick={() => handleSelectProject('sigap')}
        >
          <WinIcon name="sigap" size={13} />
          <span>SIGAP (Keamanan HP)</span>
        </div>
        <div
          className={`chrome-bookmark-item ${activeProjectId === 'temuin' ? 'active' : ''}`}
          onClick={() => handleSelectProject('temuin')}
        >
          <WinIcon name="temuin" size={13} />
          <span>Temuin (Lost &amp; Found)</span>
        </div>
        <div
          className={`chrome-bookmark-item ${activeProjectId === 'bingkai' ? 'active' : ''}`}
          onClick={() => handleSelectProject('bingkai')}
        >
          <WinIcon name="bingkai" size={13} />
          <span>Bingkai (Galeri Foto)</span>
        </div>
        <a
          href="https://github.com/agungkrisna"
          target="_blank"
          rel="noreferrer"
          className="chrome-bookmark-item"
          style={{ textDecoration: 'none' }}
        >
          <WinIcon name="github" size={13} />
          <span>GitHub</span>
        </a>
      </div>

      <div className="chrome-content-area" style={currentProject?.isDino || currentProject?.isExternalIframe ? { padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' } : {}}>
        {currentProject?.isDino ? (
          <div style={{ flex: 1, width: '100%', height: '100%', overflow: 'hidden' }}>
            <ChromeDinoGame isEmbedded={true} />
          </div>
        ) : currentProject?.isExternalIframe ? (
          <iframe
            src={currentProject.iframeUrl}
            title={currentProject.name}
            style={{ flex: 1, width: '100%', height: '100%', border: 'none', backgroundColor: '#ffffff' }}
          />
        ) : (
          <div className="chrome-page-container">
            <div className="project-nav-bar">
              <span className="project-nav-label">PROYEK:</span>
              {projectKeys.filter(k => k !== 'dino' && k !== 'krisnaartha').map((pKey) => {
                const p = PROJECTS_DATA[pKey];
                const isActive = pKey === activeProjectId;
                return (
                  <button
                    key={pKey}
                    className={`project-nav-btn ${isActive ? 'active' : ''}`}
                    onClick={() => {
                      handleSelectProject(pKey);
                      setActivePhotoIndex(0);
                    }}
                  >
                    <WinIcon name={p.id} size={14} />
                    <span>{p.name}</span>
                  </button>
                );
              })}
            </div>

            <header className="project-header">
              <div className="project-hero-main">
                <h1 className="project-main-title">{currentProject.fullTitle}</h1>
                <p className="project-lead-desc">{currentProject.description || currentProject.tagline}</p>

                <div className="project-stack-row">
                  {currentProject.stack?.map((item, idx) => (
                    <span key={idx} className="project-stack-tag">{item}</span>
                  ))}
                </div>

                <div className="project-actions-row">
                  <a
                    href={currentProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-github"
                  >
                    <FolderGit2 size={16} />
                    <span>Source Code (GitHub)</span>
                  </a>
                  {currentProject.liveUrl && (
                    <a
                      href={currentProject.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-live"
                    >
                      <ExternalLink size={15} />
                      <span>Kunjungi Live Demo</span>
                    </a>
                  )}
                  {currentProject.id === 'neurofly' && (
                    <button
                      type="button"
                      className="btn-live"
                      onClick={() => {
                        playClickSound();
                        setNeuroFlyLiveMode(true);
                        if (onLaunchApp) onLaunchApp('neurofly');
                      }}
                      style={{
                        background: 'linear-gradient(135deg, #0284c7, #2563eb)',
                        border: 'none',
                        color: '#fff',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}
                      title="Mainkan game 3D Pong dan lawan lalat buah langsung"
                    >
                      <Gamepad2 size={15} />
                      <span>Mainkan 3D Pong vs Lalat</span>
                    </button>
                  )}
                </div>
              </div>
            </header>

            <section className="preview-showcase-section">
              <div className="preview-card-header">
                <div className="preview-header-left">
                  <span className="preview-card-title">
                    {currentProject.id === 'neurofly' && neuroFlyLiveMode
                      ? 'Simulasi 3D: Human vs Drosophila Fly Brain (MaleCNS v1.0)'
                      : 'Galeri Dokumentasi Antarmuka'}
                  </span>
                  <span className="preview-screen-count">
                    {currentProject.id === 'neurofly' && neuroFlyLiveMode
                      ? 'Mode Permainan Aktif (60 FPS)'
                      : `Layar ${activePhotoIndex + 1} dari ${currentProject.photos.length}`}
                  </span>
                </div>

                <div className="preview-header-actions">
                  {currentProject.id === 'neurofly' && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginRight: '6px' }}>
                      <button
                        type="button"
                        className="preview-zoom-action-btn"
                        onClick={() => {
                          playClickSound();
                          setNeuroFlyLiveMode(true);
                        }}
                        style={{
                          backgroundColor: neuroFlyLiveMode ? '#0284c7' : '#1e293b',
                          color: '#fff',
                          borderColor: neuroFlyLiveMode ? '#38bdf8' : '#334155'
                        }}
                        title="Mainkan game langsung di halaman ini"
                      >
                        <Gamepad2 size={13} />
                        <span>🎮 Lawan Lalat (Live 3D)</span>
                      </button>
                      <button
                        type="button"
                        className="preview-zoom-action-btn"
                        onClick={() => {
                          playClickSound();
                          setNeuroFlyLiveMode(false);
                        }}
                        style={{
                          backgroundColor: !neuroFlyLiveMode ? '#0284c7' : '#1e293b',
                          color: '#fff',
                          borderColor: !neuroFlyLiveMode ? '#38bdf8' : '#334155'
                        }}
                        title="Tampilkan foto & tangkapan layar"
                      >
                        <span>📸 Galeri Foto</span>
                      </button>
                      {onLaunchApp && (
                        <button
                          type="button"
                          className="preview-zoom-action-btn"
                          onClick={() => {
                            playClickSound();
                            onLaunchApp('neurofly');
                          }}
                          style={{
                            backgroundColor: '#4338ca',
                            color: '#fff',
                            borderColor: '#6366f1'
                          }}
                          title="Buka NeuroFly di jendela mandiri Windows"
                        >
                          <span>Jendela Mandiri ↗</span>
                        </button>
                      )}
                    </div>
                  )}

                  {(!neuroFlyLiveMode || currentProject.id !== 'neurofly') && (
                    <button
                      type="button"
                      className="preview-zoom-action-btn"
                      onClick={() => {
                        playClickSound();
                        setSelectedPhotoModal(activePhoto);
                      }}
                      title="Perbesar tampilan foto"
                    >
                      <Maximize2 size={13} />
                      <span>Perbesar</span>
                    </button>
                  )}
                </div>
              </div>

              <div className={`showcase-studio-grid ${currentProject.id === 'neurofly' && neuroFlyLiveMode ? 'layout-neurofly-sim' : isMobilePhoto ? 'layout-mobile' : 'layout-desktop'}`}>
                
                {/* Visual Showcase Stage (Left Pane) */}
                <div className="showcase-visual-stage">
                  <div className={`stage-ambient-glow glow-${currentProject.id || 'default'}`} />

                  {/* Stage navigation chevrons */}
                  {currentProject.photos.length > 1 && (!neuroFlyLiveMode || currentProject.id !== 'neurofly') && (
                    <>
                      <button
                        type="button"
                        className="stage-nav-arrow arrow-left"
                        onClick={(e) => {
                          e.stopPropagation();
                          playClickSound();
                          setActivePhotoIndex((prev) => (prev > 0 ? prev - 1 : currentProject.photos.length - 1));
                        }}
                        title="Foto Sebelumnya (Panah Kiri)"
                        aria-label="Previous Photo"
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <button
                        type="button"
                        className="stage-nav-arrow arrow-right"
                        onClick={(e) => {
                          e.stopPropagation();
                          playClickSound();
                          setActivePhotoIndex((prev) => (prev < currentProject.photos.length - 1 ? prev + 1 : 0));
                        }}
                        title="Foto Selanjutnya (Panah Kanan)"
                        aria-label="Next Photo"
                      >
                        <ChevronRight size={20} />
                      </button>
                    </>
                  )}

                  {/* Centerpiece Container */}
                  <div
                    className="stage-centerpiece-wrapper"
                    onClick={() => {
                      if (currentProject.id === 'neurofly' && neuroFlyLiveMode) return;
                      playClickSound();
                      setSelectedPhotoModal(activePhoto);
                    }}
                    title={currentProject.id === 'neurofly' && neuroFlyLiveMode ? '' : 'Klik untuk memperbesar gambar'}
                  >
                    {currentProject.id === 'neurofly' && neuroFlyLiveMode ? (
                      <div className="stage-desktop-chassis neurofly-game-mode">
                        <div className="desktop-chassis-bar">
                          <div className="chassis-traffic-dots">
                            <span className="dot dot-red" />
                            <span className="dot dot-yellow" />
                            <span className="dot dot-green" />
                          </div>
                          <div className="chassis-game-title">
                            <span>NeuroFly — 3D Pong vs Drosophila MaleCNS v1.0 (Live Biological Simulation)</span>
                          </div>
                          {onLaunchApp && (
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                playClickSound();
                                onLaunchApp('neurofly');
                              }}
                              style={{
                                marginLeft: 'auto',
                                backgroundColor: '#1e293b',
                                color: '#38bdf8',
                                border: '1px solid #334155',
                                borderRadius: '4px',
                                padding: '2px 8px',
                                fontSize: '11px',
                                cursor: 'pointer'
                              }}
                              title="Buka di jendela mandiri"
                            >
                              Pop-out Jendela ↗
                            </button>
                          )}
                        </div>
                        <div className="desktop-game-stage" style={{ height: '620px', width: '100%', overflow: 'hidden' }}>
                          <NeuroFlyGame
                            isEmbedded={true}
                            onOpenExternal={onLaunchApp ? () => onLaunchApp('neurofly') : null}
                          />
                        </div>
                      </div>
                    ) : isMobilePhoto ? (
                      <div className="stage-phone-holder">
                        <PhoneMockup
                          src={activePhoto?.imageUrl || currentProject.photos[0]?.imageUrl || `/projects/${currentProject.id}.jpg`}
                          alt={activePhoto?.title || currentProject.name}
                          projectName={currentProject.id}
                        />
                      </div>
                    ) : currentProject.id === 'theotown' ? (
                      <div className="stage-desktop-chassis game-mode">
                        <div className="desktop-chassis-bar">
                          <div className="chassis-traffic-dots">
                            <span className="dot dot-red" />
                            <span className="dot dot-yellow" />
                            <span className="dot dot-green" />
                          </div>
                          <div className="chassis-game-title">
                            <span>TheoTown — ITB STIKOM Bali Plugin Gameplay</span>
                          </div>
                        </div>
                        <div className="desktop-screenshot-stage">
                          <img
                            src={activePhoto?.imageUrl || currentProject.photos[0]?.imageUrl || `/projects/${currentProject.id}.jpg`}
                            alt={activePhoto?.title || currentProject.name}
                            className="desktop-screenshot-img"
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="stage-desktop-chassis">
                        <div className="desktop-chassis-bar">
                          <div className="chassis-traffic-dots">
                            <span className="dot dot-red" />
                            <span className="dot dot-yellow" />
                            <span className="dot dot-green" />
                          </div>
                          <div className="chassis-url-pill">
                            <Lock size={10} className="chassis-lock-icon" />
                            <span>
                              {currentProject.id === 'lintas'
                                ? 'Lintas Windows Companion Host (v2.0 • Port 8945)'
                                : `https://${currentProject.id}.demo.app/${activePhoto?.id || ''}`}
                            </span>
                          </div>
                        </div>
                        <div className="desktop-screenshot-stage">
                          <img
                            src={activePhoto?.imageUrl || currentProject.photos[0]?.imageUrl || `/projects/${currentProject.id}.jpg`}
                            alt={activePhoto?.title || currentProject.name}
                            className="desktop-screenshot-img"
                          />
                        </div>
                      </div>
                    )}

                    {(!neuroFlyLiveMode || currentProject.id !== 'neurofly') && (
                      <div className="stage-zoom-badge">
                        <ZoomIn size={12} />
                        <span>Klik untuk memperbesar</span>
                      </div>
                    )}
                  </div>

                  {/* Pagination Dots */}
                  {currentProject.photos.length > 1 && (!neuroFlyLiveMode || currentProject.id !== 'neurofly') && (
                    <div className="stage-dots-tray">
                      {currentProject.photos.map((_, idx) => (
                        <button
                          key={idx}
                          type="button"
                          className={`stage-dot-pill ${activePhotoIndex === idx ? 'active' : ''}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            playClickSound();
                            setActivePhotoIndex(idx);
                          }}
                          title={`Beralih ke foto ${idx + 1}`}
                          aria-label={`Go to photo ${idx + 1}`}
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* Context & Interactive Gallery (Right Pane) */}
                {(!neuroFlyLiveMode || currentProject.id !== 'neurofly') && (
                  <div className="showcase-context-panel">
                  
                  {/* Active Screen Information Card */}
                  <div className="active-screen-panel">
                    <div className="screen-kicker-row">
                      <span className="screen-type-tag">
                        {currentProject.id === 'theotown'
                          ? 'Tampilan Dalam Game TheoTown'
                          : isMobilePhoto
                          ? 'Antarmuka Smartphone (Flutter Android)'
                          : currentProject.id === 'lintas'
                          ? 'Antarmuka Desktop (Windows Companion Host)'
                          : 'Antarmuka Web'}
                      </span>
                      <span className="screen-index-badge">
                        Tangkapan Layar #{activePhotoIndex + 1}
                      </span>
                    </div>

                    <h2 className="active-screen-title">
                      {activePhoto?.title || currentProject.name}
                    </h2>

                    <p className="active-screen-caption">
                      {activePhoto?.caption || currentProject.description}
                    </p>
                  </div>

                  {/* Interactive Thumbnails List */}
                  {currentProject.photos.length > 1 ? (
                    <div className="screen-selector-group">
                      <div className="screen-selector-header">
                        <span className="selector-label">PILIH TAMPILAN</span>
                        <span className="selector-count">{currentProject.photos.length} Tangkapan Layar Tersedia</span>
                      </div>

                      <div className={`screen-thumbs-container ${isMobilePhoto ? 'mobile-gallery-mode' : 'desktop-gallery-mode'}`}>
                        {currentProject.photos.map((photo, idx) => {
                          const isActive = activePhotoIndex === idx;
                          return (
                            <div
                              key={photo.id || idx}
                              className={`screen-thumb-item ${isActive ? 'active' : ''}`}
                              onClick={() => {
                                playClickSound();
                                setActivePhotoIndex(idx);
                              }}
                            >
                              <div className={`thumb-portrait-shell ${photo.isMobile ? 'is-mobile-thumb' : 'is-desktop-thumb'}`}>
                                {photo.imageUrl ? (
                                  <img
                                    src={photo.imageUrl}
                                    alt={photo.title}
                                    className="thumb-portrait-img"
                                    loading="lazy"
                                  />
                                ) : (
                                  <div className="thumb-portrait-fallback">#{idx + 1}</div>
                                )}
                                <span className="thumb-badge-num">#{idx + 1}</span>
                              </div>

                              <div className="thumb-content-meta">
                                <div className="thumb-meta-top">
                                  <span className="thumb-meta-title">{photo.title}</span>
                                </div>
                                <p className="thumb-meta-desc">{photo.caption}</p>
                                {isActive && (
                                  <div className="thumb-current-indicator">
                                    <span className="indicator-dot" />
                                    <span>Sedang Aktif</span>
                                  </div>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ) : (
                    /* If single photo, display architecture & project notes */
                    <div className="single-photo-side-box">
                      <div className="side-box-title">Spesifikasi & Sorotan Proyek:</div>
                      {currentProject.stats && currentProject.stats.length > 0 ? (
                        <div className="side-stats-grid">
                          {currentProject.stats.map((st, sIdx) => (
                            <div key={sIdx} className="side-stat-pill">
                              <span className="side-stat-k">{st.label}</span>
                              <span className="side-stat-v">{st.value}</span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="side-box-text">
                          Proyek ini dilengkapi dokumentasi lengkap dan dapat ditinjau langsung melalui tautan live demo maupun repositori kode GitHub.
                        </p>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
            </section>

            <section className="editorial-context-section">
              <div className="editorial-col">
                <h2 className="editorial-heading">Latar Belakang & Masalah</h2>
                <p className="editorial-body">{currentProject.problem}</p>
              </div>
              <div className="editorial-col">
                <h2 className="editorial-heading">Solusi & Pendekatan</h2>
                <p className="editorial-body">{currentProject.solution}</p>
              </div>
            </section>

            <section className="key-features-section">
              <h2 className="editorial-heading" style={{ marginBottom: '16px' }}>Fitur-Fitur Utama</h2>
              <div className="features-checklist">
                {currentProject.keyFeatures.map((feat, idx) => (
                  <div key={idx} className="feature-list-row">
                    <CheckCircle2 size={16} className="feature-check-icon" />
                    <div className="feature-text">
                      <span className="feature-name">{feat.title}:</span>
                      <span className="feature-desc"> {feat.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <footer className="project-footer-nav">
              <div className="footer-nav-label">Jelajahi Proyek Lainnya:</div>
              <div className="footer-nav-links">
                <button
                  className="footer-nav-btn"
                  onClick={() => {
                    handleSelectProject(prevProjectKey);
                    setActivePhotoIndex(0);
                  }}
                >
                  <ArrowLeft size={14} />
                  <span>{PROJECTS_DATA[prevProjectKey].name}</span>
                </button>
                <button
                  className="footer-nav-btn"
                  onClick={() => {
                    handleSelectProject(nextProjectKey);
                    setActivePhotoIndex(0);
                  }}
                >
                  <span>{PROJECTS_DATA[nextProjectKey].name}</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </footer>
          </div>
        )}
      </div>

      {selectedPhotoModal && (
        <div
          className="lightbox-overlay"
          onClick={() => setSelectedPhotoModal(null)}
        >
          <div
            className="lightbox-dialog"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="lightbox-header">
              <div className="lightbox-header-info">
                <span className="lightbox-kicker">
                  Foto {activePhotoIndex + 1} dari {currentProject.photos.length}
                </span>
                <h3 className="lightbox-title">{activePhoto?.title || selectedPhotoModal.title}</h3>
              </div>
              <button
                className="lightbox-close-btn"
                onClick={() => setSelectedPhotoModal(null)}
                title="Tutup (Esc)"
              >
                <X size={18} />
              </button>
            </div>

            <div className="lightbox-body">
              <div className="lightbox-preview-frame">
                {currentProject.photos.length > 1 && (
                  <>
                    <button
                      type="button"
                      className="lightbox-nav-btn btn-left"
                      onClick={() => {
                        playClickSound();
                        setActivePhotoIndex((prev) => (prev > 0 ? prev - 1 : currentProject.photos.length - 1));
                      }}
                      title="Sebelumnya (Panah Kiri)"
                    >
                      <ChevronLeft size={22} />
                    </button>
                    <button
                      type="button"
                      className="lightbox-nav-btn btn-right"
                      onClick={() => {
                        playClickSound();
                        setActivePhotoIndex((prev) => (prev < currentProject.photos.length - 1 ? prev + 1 : 0));
                      }}
                      title="Selanjutnya (Panah Kanan)"
                    >
                      <ChevronRight size={22} />
                    </button>
                  </>
                )}

                {isMobilePhoto ? (
                  <div className="modal-phone-container">
                    <PhoneMockup
                      src={activePhoto?.imageUrl || selectedPhotoModal?.imageUrl || `/projects/${currentProject.id}.jpg`}
                      alt={activePhoto?.title || selectedPhotoModal?.title || currentProject.name}
                      projectName={currentProject.id}
                    />
                  </div>
                ) : (
                  <img
                    src={activePhoto?.imageUrl || selectedPhotoModal?.imageUrl || `/projects/${currentProject.id}.jpg`}
                    alt={activePhoto?.title || selectedPhotoModal?.title || currentProject.name}
                    className="lightbox-full-img"
                  />
                )}
              </div>

              <div className="lightbox-caption-area">
                <div className="lightbox-caption-kicker">
                  Penjelasan Antarmuka:
                </div>
                <p className="lightbox-caption-text">
                  {activePhoto?.caption || selectedPhotoModal.caption}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
