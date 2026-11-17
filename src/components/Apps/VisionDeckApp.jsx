import React, { useState, useMemo } from 'react';
import { 
  Search, ExternalLink, FolderGit2, Quote, Code, 
  X, Smartphone, Globe, Cpu, CheckCircle2, ShieldCheck, 
  Star, ArrowRight, BookOpen, Layers
} from 'lucide-react';
import { PROJECTS_DATA } from '../../data/projectsData';
import { WinIcon } from '../Common/WinIcon';
import { playClickSound } from '../../utils/sound';
import './VisionDeckApp.css';

export const VisionDeckApp = ({ onLaunchApp, initialSelectedProject = null }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);

  // Filter out internal non-project keys like dino and krisnaartha
  const validProjects = useMemo(() => {
    return Object.values(PROJECTS_DATA).filter(
      (p) => p.id !== 'dino' && p.id !== 'krisnaartha' && p.motto
    );
  }, []);

  const categories = [
    { id: 'all', label: 'Semua Aplikasi', icon: Layers },
    { id: 'mobile', label: 'Mobile Apps (Flutter)', icon: Smartphone },
    { id: 'web', label: 'Web & AI Cloud', icon: Globe },
    { id: 'utility', label: 'Desktop & Game Engine', icon: Cpu }
  ];

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

  // Featured Spotlight Project per category
  const featuredProject = useMemo(() => {
    if (activeCategory === 'mobile') {
      return validProjects.find((p) => p.id === 'lintas') || validProjects[0];
    }
    if (activeCategory === 'web') {
      return validProjects.find((p) => p.id === 'tatagih') || validProjects[0];
    }
    if (activeCategory === 'utility') {
      return validProjects.find((p) => p.id === 'neurofly') || validProjects[0];
    }
    return validProjects.find((p) => p.id === 'tatagih') || validProjects[0];
  }, [validProjects, activeCategory]);

  const handleLaunchProject = (e, projectId) => {
    if (e) e.stopPropagation();
    playClickSound();
    if (onLaunchApp) {
      if (projectId === 'neurofly') {
        onLaunchApp('neurofly');
      } else {
        onLaunchApp('chrome', { projectId });
      }
    }
  };

  const handleOpenDetail = (project) => {
    playClickSound();
    setSelectedProject(project);
  };

  const handleCloseDetail = () => {
    playClickSound();
    setSelectedProject(null);
  };

  return (
    <div className="ms-store-container">
      {/* Microsoft Store Header Bar */}
      <header className="ms-store-header">
        <div className="ms-store-brand">
          <div className="ms-store-logo">
            <WinIcon name="store" size={24} />
          </div>
          <div className="ms-store-title-wrap">
            <div className="ms-store-title">Microsoft Store</div>
            <div className="ms-store-subtitle">Katalog Karya &amp; Filosofi Pengembang — Agung Krisna</div>
          </div>
        </div>

        <div className="ms-store-search-wrap">
          <Search size={14} className="ms-store-search-icon" />
          <input
            type="text"
            className="ms-store-search-input"
            placeholder="Cari aplikasi, stack teknologi, atau kata kunci..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button
              type="button"
              className="ms-store-search-clear"
              onClick={() => setSearchQuery('')}
            >
              <X size={12} />
            </button>
          )}
        </div>
      </header>

      <div className="ms-store-body">
        {/* Left Navigation Rail */}
        <nav className="ms-store-nav">
          <div className="ms-store-nav-group">
            <div className="ms-store-nav-label">Navigasi Katalog</div>
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  type="button"
                  className={`ms-store-nav-item ${activeCategory === cat.id ? 'active' : ''}`}
                  onClick={() => {
                    playClickSound();
                    setActiveCategory(cat.id);
                  }}
                >
                  <Icon size={16} />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          <div className="ms-store-publisher-badge">
            <div className="ms-publisher-avatar">
              <img src="/certificates/foto_krisna.jpg" alt="Agung Krisna" />
            </div>
            <div className="ms-publisher-info">
              <div className="ms-publisher-name">Agung Krisna</div>
              <div className="ms-publisher-status">
                <ShieldCheck size={12} color="#3b82f6" />
                <span>Verified Developer</span>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content Area */}
        <main className="ms-store-content">
          {/* Featured Spotlight Banner (Shown when no search query) */}
          {!searchQuery && featuredProject && (
            <div className="ms-store-hero">
              <div className="ms-hero-backdrop" />
              <div className="ms-hero-content">
                <div className="ms-hero-badge">PILIHAN PENGEMBANG &bull; UNGGULAN</div>
                <div className="ms-hero-header">
                  <div className="ms-hero-icon">
                    <WinIcon name={featuredProject.id} size={44} />
                  </div>
                  <div>
                    <h2 className="ms-hero-title">{featuredProject.name}</h2>
                    <p className="ms-hero-tagline">{featuredProject.tagline}</p>
                  </div>
                </div>

                <div className="ms-hero-motto">
                  <Quote size={15} className="ms-quote-icon" />
                  <span>&ldquo;{featuredProject.motto}&rdquo;</span>
                </div>

                <p className="ms-hero-desc">
                  {featuredProject.description}
                </p>

                <div className="ms-hero-footer">
                  <div className="ms-hero-tags">
                    {featuredProject.stack?.slice(0, 4).map((tech, idx) => (
                      <span key={idx} className="ms-tech-pill">{tech}</span>
                    ))}
                  </div>

                  <div className="ms-hero-actions">
                    <button
                      type="button"
                      className="ms-btn ms-btn-primary"
                      onClick={(e) => handleLaunchProject(e, featuredProject.id)}
                    >
                      <ExternalLink size={14} />
                      <span>Buka Aplikasi</span>
                    </button>
                    <button
                      type="button"
                      className="ms-btn ms-btn-secondary"
                      onClick={() => handleOpenDetail(featuredProject)}
                    >
                      <span>Lihat Detail</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Section Heading */}
          <div className="ms-section-header">
            <div>
              <h3 className="ms-section-title">
                {activeCategory === 'all' ? 'Semua Aplikasi & Karya' : categories.find(c => c.id === activeCategory)?.label}
              </h3>
              <p className="ms-section-desc">
                {filteredProjects.length} aplikasi siap diuji dan ditinjau
              </p>
            </div>
          </div>

          {/* Windows Fluent App Cards Grid */}
          {filteredProjects.length === 0 ? (
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '60px 20px',
              width: '100%',
              color: '#94a3b8',
              textAlign: 'center',
              userSelect: 'none'
            }}>
              <Search size={44} color="#64748b" style={{ opacity: 0.5, marginBottom: '14px' }} />
              <div style={{ fontSize: '14px', fontWeight: 600, color: '#e2e8f0' }}>
                Tidak ada aplikasi yang ditemukan.
              </div>
              <div style={{ fontSize: '13px', color: '#38bdf8', fontStyle: 'italic', marginTop: '8px' }}>
                &ldquo;Nothing here. Just like my free time.&rdquo;
              </div>
            </div>
          ) : (
            <div className="ms-store-grid">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="ms-card"
                  onClick={() => handleOpenDetail(project)}
                >
                <div className="ms-card-top">
                  <div className="ms-card-icon">
                    <WinIcon name={project.id} size={36} />
                  </div>
                  <div className="ms-card-identity">
                    <h4 className="ms-card-title">{project.name}</h4>
                    <span className="ms-card-cat">{project.status || 'Showcase'}</span>
                    <div className="ms-card-rating">
                      <div className="ms-stars">
                        <Star size={11} fill="#eab308" color="#eab308" />
                        <Star size={11} fill="#eab308" color="#eab308" />
                        <Star size={11} fill="#eab308" color="#eab308" />
                        <Star size={11} fill="#eab308" color="#eab308" />
                        <Star size={11} fill="#eab308" color="#eab308" />
                      </div>
                      <span className="ms-rating-text">5.0 &bull; Bebas Biaya</span>
                    </div>
                  </div>
                </div>

                <div className="ms-card-motto">
                  <Quote size={12} className="ms-card-quote-icon" />
                  <span>&ldquo;{project.motto}&rdquo;</span>
                </div>

                <p className="ms-card-desc">
                  {project.tagline || project.description}
                </p>

                <div className="ms-card-tags">
                  {project.stack?.slice(0, 3).map((st, i) => (
                    <span key={i} className="ms-card-tag">{st}</span>
                  ))}
                  {project.stack && project.stack.length > 3 && (
                    <span className="ms-card-tag muted">+{project.stack.length - 3}</span>
                  )}
                </div>

                <div className="ms-card-actions">
                  <button
                    type="button"
                    className="ms-card-btn ms-card-btn-get"
                    onClick={(e) => handleLaunchProject(e, project.id)}
                    title="Jalankan dan buka aplikasi ini"
                  >
                    <ExternalLink size={13} />
                    <span>Buka</span>
                  </button>

                  <button
                    type="button"
                    className="ms-card-btn ms-card-btn-info"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleOpenDetail(project);
                    }}
                    title="Lihat spesifikasi &amp; arsitektur"
                  >
                    <span>Detail</span>
                  </button>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="ms-card-btn ms-card-btn-git"
                      onClick={(e) => e.stopPropagation()}
                      title="Lihat Repository GitHub"
                    >
                      <FolderGit2 size={13} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
        </main>
      </div>

      {/* Detail Modal (Windows 11 Fluent Dialog) */}
      {selectedProject && (
        <div className="ms-modal-backdrop" onClick={handleCloseDetail}>
          <div className="ms-modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="ms-modal-header">
              <div className="ms-modal-brand">
                <WinIcon name={selectedProject.id} size={32} />
                <div>
                  <h3 className="ms-modal-title">{selectedProject.name}</h3>
                  <p className="ms-modal-subtitle">{selectedProject.tagline}</p>
                </div>
              </div>
              <button
                type="button"
                className="ms-modal-close"
                onClick={handleCloseDetail}
              >
                <X size={16} />
              </button>
            </div>

            <div className="ms-modal-body">
              {/* Motto Banner */}
              <div className="ms-modal-motto-box">
                <div className="ms-modal-motto-label">
                  <Quote size={13} />
                  <span>Filosofi &amp; Moto Produk:</span>
                </div>
                <div className="ms-modal-motto-text">
                  &ldquo;{selectedProject.motto}&rdquo;
                </div>
              </div>

              {/* Description */}
              <div className="ms-modal-section">
                <h4 className="ms-modal-section-title">Deskripsi Lengkap</h4>
                <p className="ms-modal-desc-text">
                  {selectedProject.description}
                </p>
              </div>

              {/* Specs & Stats if available */}
              {selectedProject.stats && selectedProject.stats.length > 0 && (
                <div className="ms-modal-section">
                  <h4 className="ms-modal-section-title">Spesifikasi &amp; Metrik Kunci</h4>
                  <div className="ms-modal-stats-grid">
                    {selectedProject.stats.map((st, sIdx) => (
                      <div key={sIdx} className="ms-modal-stat-card">
                        <span className="ms-modal-stat-label">{st.label}</span>
                        <span className="ms-modal-stat-val">{st.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tech Stack */}
              <div className="ms-modal-section">
                <h4 className="ms-modal-section-title">Teknologi &amp; Arsitektur</h4>
                <div className="ms-modal-tags">
                  {selectedProject.stack?.map((t, tIdx) => (
                    <span key={tIdx} className="ms-modal-tech-badge">
                      <Code size={11} />
                      <span>{t}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="ms-modal-footer">
              <button
                type="button"
                className="ms-btn ms-btn-primary"
                onClick={(e) => {
                  handleLaunchProject(e, selectedProject.id);
                  handleCloseDetail();
                }}
              >
                <ExternalLink size={14} />
                <span>Buka Aplikasi Sekarang</span>
              </button>

              {selectedProject.githubUrl && (
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="ms-btn ms-btn-secondary"
                  style={{ textDecoration: 'none' }}
                >
                  <FolderGit2 size={14} />
                  <span>Lihat Repository GitHub</span>
                </a>
              )}

              <button
                type="button"
                className="ms-btn ms-btn-ghost"
                onClick={handleCloseDetail}
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
