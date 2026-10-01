import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, ArrowRight, RotateCw, Lock, Star, ExternalLink, 
  CheckCircle2, ChevronDown, Plus, X, ZoomIn, FolderGit2, Search
} from 'lucide-react';
import { WinIcon } from '../Common/WinIcon';
import { playClickSound } from '../../utils/sound';
import { useWindow } from '../Windows/WindowContext';
import { ChromeDinoGame } from './ChromeDinoGame';
import { PROJECTS_DATA } from '../../data/projectsData';
import './BrowserApp.css';

export const BrowserApp = ({ onOpenFile, initialProject = 'tatagih', initialUrl = null, onLaunchApp }) => {
  const winCtx = useWindow();
  const [activeProjectId, setActiveProjectId] = useState(initialProject || 'tatagih');
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const [selectedPhotoModal, setSelectedPhotoModal] = useState(null);
  const [isBookmarked, setIsBookmarked] = useState(true);
  const [isReloading, setIsReloading] = useState(false);
  const [showTabSearch, setShowTabSearch] = useState(false);
  const [omniboxVal, setOmniboxVal] = useState(() => {
    return initialProject === 'dino' ? 'chrome://dino' : initialProject === 'krisnaartha' ? 'krisnaartha.my.id' : `agungkrisna.dev/projects/${initialProject || 'tatagih'}`;
  });

  const projectKeys = Object.keys(PROJECTS_DATA);

  const [tabs, setTabs] = useState(() => {
    const initKey = initialProject || 'tatagih';
    const p = PROJECTS_DATA[initKey] || PROJECTS_DATA.tatagih;
    const title = p.isDino ? 'chrome://dino' : p.isExternalIframe ? 'krisnaartha.my.id' : `${p.name} — Showcase`;
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
      setOmniboxVal('krisnaartha.my.id');
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
      const title = p ? (p.isDino ? 'chrome://dino' : p.isExternalIframe ? 'krisnaartha.my.id' : `${p.name} — Showcase`) : 'New Tab';
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
          title: `${p.name} — Showcase`,
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
  const activePhoto = currentProject.photos[activePhotoIndex] || currentProject.photos[0] || {};

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
                        <span className="tab-search-item-title">{p.name} — Showcase</span>
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
            } else if (val.includes('krisnaartha')) {
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
          <span>chrome://dino 🦖</span>
        </div>
        <div
          className={`chrome-bookmark-item ${activeProjectId === 'krisnaartha' ? 'active' : ''}`}
          onClick={() => handleSelectProject('krisnaartha')}
          title="krisnaartha.my.id (Portfolio)"
        >
          <WinIcon name="krisnaartha" size={13} />
          <span>krisnaartha.my.id</span>
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
                <p className="project-lead-desc">{currentProject.solution}</p>

                <div className="project-stack-row">
                  {currentProject.stack.map((item, idx) => (
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
                  <a
                    href={currentProject.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-live"
                  >
                    <ExternalLink size={15} />
                    <span>Kunjungi Live Demo</span>
                  </a>
                </div>
              </div>
            </header>

            <section className="preview-showcase-section">
              <div className="preview-card-header">
                <div className="preview-header-left">
                  <span className="preview-card-title">Galeri Dokumentasi Antarmuka</span>
                  <span className="preview-screen-count">
                    Foto {activePhotoIndex + 1} dari {currentProject.photos.length}
                  </span>
                </div>

                <div className="preview-header-actions">
                  {currentProject.photos.length > 1 && (
                    <div className="preview-tab-row">
                      {currentProject.photos.map((photo, idx) => (
                        <button
                          key={photo.id}
                          type="button"
                          className={`preview-tab-btn ${activePhotoIndex === idx ? 'active' : ''}`}
                          onClick={() => {
                            playClickSound();
                            setActivePhotoIndex(idx);
                          }}
                        >
                          <span>Foto {idx + 1}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div
                className="preview-viewport-container"
                onClick={() => setSelectedPhotoModal(activePhoto)}
                title="Klik untuk memperbesar gambar"
              >
                <div className="preview-photo-stage">
                  <img
                    src={activePhoto?.imageUrl || currentProject.photos[0]?.imageUrl || `/projects/${currentProject.id}.jpg`}
                    alt={activePhoto?.title || currentProject.name}
                    className="preview-featured-img"
                  />
                  <div className="preview-zoom-badge">
                    <ZoomIn size={13} />
                    <span>Klik untuk memperbesar</span>
                  </div>
                </div>
              </div>

              <div className="preview-caption-bar">
                <div className="preview-caption-tag">Penjelasan Sekilas:</div>
                <div className="preview-caption-title">{activePhoto?.title}</div>
                <p className="preview-caption-text">{activePhoto?.caption}</p>
              </div>

              {currentProject.photos.length > 1 && (
                <div className="preview-thumbnails-container">
                  <div className="preview-thumbnails-label">
                    Koleksi Foto Proyek ({currentProject.photos.length} Tangkapan Layar):
                  </div>
                  <div className="preview-thumbnails-grid">
                    {currentProject.photos.map((photo, idx) => (
                      <div
                        key={photo.id}
                        className={`preview-thumb-box ${activePhotoIndex === idx ? 'active' : ''}`}
                        onClick={() => {
                          playClickSound();
                          setActivePhotoIndex(idx);
                        }}
                      >
                        <div className="thumb-img-wrapper">
                          {photo.imageUrl ? (
                            <img src={photo.imageUrl} alt={photo.title} className="thumb-preview-img" />
                          ) : (
                            <div className="thumb-placeholder-box">Foto {idx + 1}</div>
                          )}
                          <span className="thumb-index-badge">Foto {idx + 1}</span>
                        </div>
                        <div className="thumb-meta">
                          <div className="thumb-title">{photo.title}</div>
                          <div className="thumb-desc-snippet">{photo.caption}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
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
              <h3 className="lightbox-title">{selectedPhotoModal.title}</h3>
              <button
                className="lightbox-close-btn"
                onClick={() => setSelectedPhotoModal(null)}
              >
                <X size={18} />
              </button>
            </div>
            <div className="lightbox-body">
              <div className="lightbox-preview-frame">
                <img
                  src={selectedPhotoModal?.imageUrl || currentProject.photos[0]?.imageUrl || `/projects/${currentProject.id}.jpg`}
                  alt={selectedPhotoModal?.title || currentProject.name}
                  style={{ maxWidth: '100%', maxHeight: '60vh', objectFit: 'contain', borderRadius: '4px' }}
                />
              </div>
              <div style={{ fontSize: '11px', color: '#64748b', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.5px' }}>
                Penjelasan Sekilas:
              </div>
              <p className="lightbox-caption-text">
                {selectedPhotoModal.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
