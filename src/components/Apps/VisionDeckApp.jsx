import React, { useState, useMemo } from 'react';
import { 
  Layers, Sparkles, RotateCw, Search, ExternalLink, 
  Shield, Share2, Smartphone, Globe, Lock, Camera, 
  FolderGit2, Shuffle, Quote, Code, CheckCircle2, ChevronRight
} from 'lucide-react';
import { PROJECTS_DATA } from '../../data/projectsData';
import { WinIcon } from '../Common/WinIcon';
import { playClickSound } from '../../utils/sound';
import './VisionDeckApp.css';

export const VisionDeckApp = ({ onLaunchApp, initialSelectedProject = null }) => {
  const [flippedCards, setFlippedCards] = useState(() => {
    const init = {};
    if (initialSelectedProject) {
      init[initialSelectedProject] = true;
    }
    return init;
  });
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpotlight, setSelectedSpotlight] = useState(null);

  // Filter out internal non-project keys like dino
  const validProjects = useMemo(() => {
    return Object.values(PROJECTS_DATA).filter(
      (p) => p.id !== 'dino' && p.id !== 'krisnaartha' && p.motto
    );
  }, []);

  const categories = [
    { id: 'all', label: 'Semua Karya' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'web', label: 'Web & AI SaaS' },
    { id: 'utility', label: 'Desktop & Utilities' }
  ];

  const filteredProjects = useMemo(() => {
    return validProjects.filter((p) => {
      const matchSearch =
        searchQuery === '' ||
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (p.motto && p.motto.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (p.tagline && p.tagline.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (p.stack && p.stack.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase())));

      if (!matchSearch) return false;

      if (activeCategory === 'mobile') {
        return (
          p.category.toLowerCase().includes('mobile') ||
          p.category.toLowerCase().includes('flutter') ||
          ['lintas', 'sigap', 'temuin', 'onlyus'].includes(p.id)
        );
      }
      if (activeCategory === 'web') {
        return (
          p.category.toLowerCase().includes('web') ||
          p.category.toLowerCase().includes('saas') ||
          ['tatagih', 'nenacare', 'makalah'].includes(p.id)
        );
      }
      if (activeCategory === 'utility') {
        return (
          p.category.toLowerCase().includes('desktop') ||
          p.category.toLowerCase().includes('plugin') ||
          p.category.toLowerCase().includes('simulation') ||
          ['bingkai', 'theotown', 'neurofly'].includes(p.id)
        );
      }
      return true;
    });
  }, [validProjects, activeCategory, searchQuery]);

  const toggleCardFlip = (projectId) => {
    playClickSound();
    setFlippedCards((prev) => ({
      ...prev,
      [projectId]: !prev[projectId]
    }));
  };

  const flipAllCards = (flipToBack) => {
    playClickSound();
    const nextState = {};
    validProjects.forEach((p) => {
      nextState[p.id] = flipToBack;
    });
    setFlippedCards(nextState);
  };

  const areAllFlipped = validProjects.length > 0 && validProjects.every((p) => flippedCards[p.id]);

  const handleLaunchProject = (e, projectId) => {
    e.stopPropagation();
    playClickSound();
    if (onLaunchApp) {
      if (projectId === 'neurofly') {
        onLaunchApp('neurofly');
      } else {
        onLaunchApp('chrome', { projectId });
      }
    }
  };

  return (
    <div className="vision-deck-container">
      <header className="vision-deck-header">
        <div className="vision-deck-title-area">
          <div className="vision-deck-badge-icon">
            <Layers size={20} color="#ffffff" />
          </div>
          <div className="vision-deck-title-text">
            <h1>Vision Deck - Koleksi Kartu 3D & Filosofi</h1>
            <p>Eksplorasi moto berima dan esensi nilai dari setiap karya Agung Krisna</p>
          </div>
        </div>

        <div className="vision-deck-toolbar">
          <div className="vision-deck-search">
            <Search size={14} color="#64748b" />
            <input
              type="text"
              placeholder="Cari moto, nama, atau teknologi..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <button
            type="button"
            className="vision-deck-btn"
            onClick={() => flipAllCards(!areAllFlipped)}
            title="Balik semua kartu sekaligus"
          >
            <RotateCw size={14} />
            <span>{areAllFlipped ? 'Lihat Spesifikasi' : 'Buka Semua Moto'}</span>
          </button>
        </div>
      </header>

      <div className="vision-deck-categories">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            className={`vision-deck-filter-pill ${activeCategory === cat.id ? 'active' : ''}`}
            onClick={() => {
              playClickSound();
              setActiveCategory(cat.id);
            }}
          >
            {cat.label}
          </button>
        ))}
        <span style={{ marginLeft: 'auto', fontSize: '11px', color: '#64748b' }}>
          Menampilkan {filteredProjects.length} kartu koleksi
        </span>
      </div>

      <main className="vision-deck-content">
        <div className="vision-deck-grid">
          {filteredProjects.map((project) => {
            const isFlipped = !!flippedCards[project.id];
            const stats = project.stats || [];

            return (
              <div key={project.id} className="deck-card-scene">
                <div
                  className={`deck-card ${isFlipped ? 'is-flipped' : ''}`}
                  onClick={() => toggleCardFlip(project.id)}
                  title="Klik untuk membalik kartu"
                >
                  {/* FRONT FACE: SPECIFICATIONS & IDENTITY */}
                  <div className="deck-card-face deck-card-front">
                    <div className="card-holo-shimmer" />

                    <div className="card-top-row">
                      <span className="card-badge">{project.status || 'Active Showcase'}</span>
                      <span className="card-year-tag">{project.period || '2024'}</span>
                    </div>

                    <div className="card-icon-banner">
                      <div className="card-icon-box">
                        <WinIcon name={project.id} size={32} />
                      </div>
                      <div className="card-heading">
                        <h3>{project.name}</h3>
                        <p>{project.tagline}</p>
                      </div>
                    </div>

                    {stats.length > 0 && (
                      <div className="card-stats-list">
                        {stats.slice(0, 3).map((st, sIdx) => (
                          <div key={sIdx} className="card-stat-item">
                            <span className="card-stat-label">{st.label}</span>
                            <span className="card-stat-val">{st.value}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="card-stack-pills">
                      {project.stack?.slice(0, 4).map((tech, tIdx) => (
                        <span key={tIdx} className="card-stack-pill">{tech}</span>
                      ))}
                    </div>

                    <div className="card-flip-prompt">
                      <Sparkles size={13} />
                      <span>Klik untuk membuka Moto Resmi</span>
                    </div>
                  </div>

                  {/* BACK FACE: EMBOSSED MOTTO & CORE MISSION */}
                  <div className="deck-card-face deck-card-back">
                    <div className="back-header-row">
                      <span className="back-motto-badge">
                        <Quote size={13} />
                        <span>Moto Resmi Produk</span>
                      </span>
                      <WinIcon name={project.id} size={22} />
                    </div>

                    <div className="back-motto-quote-box">
                      <h4>"{project.motto}"</h4>
                    </div>

                    <div className="back-mission-text">
                      {project.description}
                    </div>

                    <div style={{ marginTop: 'auto', paddingTop: '10px' }}>
                      <div style={{ fontSize: '10.5px', color: '#94a3b8', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <Code size={12} color="#38bdf8" />
                        <span>Arsitektur Pilihan:</span>
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '14px' }}>
                        {project.stack?.slice(0, 3).map((t, idx) => (
                          <span
                            key={idx}
                            style={{
                              fontSize: '10px',
                              padding: '2px 7px',
                              borderRadius: '4px',
                              background: 'rgba(99, 102, 241, 0.2)',
                              border: '1px solid rgba(99, 102, 241, 0.35)',
                              color: '#c7d2fe'
                            }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="back-actions-grid">
                      <button
                        type="button"
                        className="back-action-btn launch"
                        onClick={(e) => handleLaunchProject(e, project.id)}
                        title="Buka showcase aplikasi ini"
                      >
                        <ExternalLink size={13} />
                        <span>Buka Showcase</span>
                      </button>

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="back-action-btn"
                          onClick={(e) => e.stopPropagation()}
                          title="Lihat source code di GitHub"
                        >
                          <FolderGit2 size={13} />
                          <span>GitHub</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};
