import React, { useState } from 'react';
import { 
  Search, Home, Users, Briefcase, MessageSquare, Bell, 
  Plus, Edit2, ThumbsUp, Repeat, Send, BarChart2, 
  ExternalLink, Globe, Check, Award, ArrowRight, X, UserPlus, Phone, Mail
} from 'lucide-react';
import { playClickSound } from '../../utils/sound';
import { INITIAL_USER } from '../../data/fileSystem';
import './LinkedInApp.css';

const FULL_NAME = 'Anak Agung Ngurah Krisna Artha Wibawa';
const SHORT_NAME = 'Anak Agung Ngurah Krisn...';

export const LinkedInApp = () => {
  const [activeNav, setActiveNav] = useState('home');
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const [showPostModal, setShowPostModal] = useState(false);
  const [showOpenDetails, setShowOpenDetails] = useState(false);
  const [newPostText, setNewPostText] = useState('');
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: SHORT_NAME,
      role: 'You',
      sub: '--',
      date: 'May 31',
      text: 'View my verified achievement from Amazon Web Services (AWS).',
      credly: {
        title: 'AWS Academy Graduate - Cloud Foundations - ...',
        domain: 'credly.com',
        url: 'https://www.credly.com/organizations/amazon-web-services/badges',
        badge: 'AWS Academy Cloud Foundations Trained'
      },
      impressions: 6
    }
  ]);
  const [selectedCred, setSelectedCred] = useState(null);

  const handleLike = () => {
    playClickSound();
    if (isLiked) {
      setIsLiked(false);
      setLikeCount(prev => Math.max(0, prev - 1));
    } else {
      setIsLiked(true);
      setLikeCount(prev => prev + 1);
    }
  };

  const handleCreatePost = (e) => {
    e.preventDefault();
    if (!newPostText.trim()) return;
    playClickSound();
    const newPost = {
      id: Date.now(),
      author: SHORT_NAME,
      role: 'You',
      sub: 'Information Technology Student',
      date: 'Just now',
      text: newPostText.trim(),
      impressions: 1
    };
    setPosts([newPost, ...posts]);
    setNewPostText('');
    setShowPostModal(false);
  };

  const certifications = [
    {
      id: 'aws',
      title: 'AWS Academy Graduate - Cloud Foundations - Training Badge',
      issuer: 'Amazon Web Services (AWS)',
      issueDate: 'Issued May 2026',
      credentialId: 'AWS-ACADEMY-CF-2026',
      credentialUrl: 'https://www.credly.com/organizations/amazon-web-services/badges',
      iconType: 'aws'
    },
    {
      id: 'cppa',
      title: 'Certificate in Python Programming Associate (CPPA)',
      issuer: 'CertNexus',
      issueDate: 'Issued Feb 2026',
      credentialId: 'Credential ID 181045167',
      credentialUrl: 'https://certnexus.com/',
      iconType: 'certnexus'
    },
    {
      id: 'flutter',
      title: 'Mobile Application Developer with Flutter & Dart',
      issuer: 'Google Developers & Dicoding Indonesia',
      issueDate: 'Issued Jan 2026',
      credentialId: 'DICODING-FLUTTER-9921',
      credentialUrl: 'https://www.dicoding.com/',
      iconType: 'flutter'
    },
    {
      id: 'fullstack',
      title: 'Full-Stack Web Development & Cloud Architecture',
      issuer: 'Meta / Coursera Professional Certificate',
      issueDate: 'Issued Nov 2025',
      credentialId: 'META-FS-CERT-4412',
      credentialUrl: 'https://www.coursera.org/',
      iconType: 'meta'
    },
    {
      id: 'cisco',
      title: 'CCNA: Introduction to Networks & Cloud Security',
      issuer: 'Cisco Networking Academy',
      issueDate: 'Issued Aug 2025',
      credentialId: 'CISCO-NET-2025-01',
      credentialUrl: 'https://www.netacad.com/',
      iconType: 'cisco'
    }
  ];

  const renderCertLogo = (type) => {
    switch (type) {
      case 'aws':
        return (
          <div style={{ width: '48px', height: '48px', backgroundColor: '#000000', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800, fontSize: '13px', letterSpacing: '-0.5px' }}>
            <span>aws</span>
          </div>
        );
      case 'certnexus':
        return (
          <div style={{ width: '48px', height: '48px', backgroundColor: '#ffffff', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #e2e8f0' }}>
            <Check size={28} color="#0284c7" strokeWidth={3.5} />
          </div>
        );
      case 'flutter':
        return (
          <div style={{ width: '48px', height: '48px', backgroundColor: '#02569B', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '11px', fontWeight: 700 }}>
            Flutter
          </div>
        );
      case 'meta':
        return (
          <div style={{ width: '48px', height: '48px', backgroundColor: '#0668E1', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '18px', fontWeight: 800 }}>
            ∞
          </div>
        );
      case 'cisco':
      default:
        return (
          <div style={{ width: '48px', height: '48px', backgroundColor: '#049fd9', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '10px', fontWeight: 800 }}>
            CISCO
          </div>
        );
    }
  };

  const filteredCerts = searchQuery.trim()
    ? certifications.filter(c => c.title.toLowerCase().includes(searchQuery.toLowerCase()) || c.issuer.toLowerCase().includes(searchQuery.toLowerCase()))
    : certifications;

  return (
    <div className="linkedin-container">
      <div className="linkedin-navbar">
        <div className="linkedin-nav-left">
          <button 
            className="linkedin-logo-btn" 
            onClick={() => { playClickSound(); setActiveNav('home'); }}
            title="LinkedIn Home"
          >
            <div style={{ width: '34px', height: '34px', backgroundColor: '#0a66c2', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', fontWeight: 800, fontSize: '20px', fontFamily: 'Segoe UI, sans-serif' }}>
              in
            </div>
          </button>

          <div className="linkedin-search-wrap">
            <Search size={16} color="rgba(0, 0, 0, 0.6)" />
            <input 
              type="text" 
              className="linkedin-search-input" 
              placeholder="Search" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="linkedin-nav-right">
          {[
            { id: 'home', label: 'Home', icon: Home },
            { id: 'network', label: 'My Network', icon: Users },
            { id: 'jobs', label: 'Jobs', icon: Briefcase },
            { id: 'messaging', label: 'Messaging', icon: MessageSquare },
            { id: 'notifications', label: 'Notifications', icon: Bell }
          ].map(item => (
            <button 
              key={item.id}
              className={`linkedin-nav-item ${activeNav === item.id ? 'active' : ''}`}
              onClick={() => {
                playClickSound();
                setActiveNav(item.id);
              }}
            >
              <item.icon size={20} />
              <span className="linkedin-nav-label">{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="linkedin-scroll-body">
        <div className="linkedin-content-col">
          <div className="linkedin-card linkedin-card-hero">
            <div className="linkedin-hero-banner">
              <div className="linkedin-banner-info">
                <div className="linkedin-banner-name">
                  KRISNA ARTHA
                </div>
                <div className="linkedin-banner-role">
                  DEVOPS & FULL-STACK ENGINEER
                </div>
                <div className="linkedin-banner-contacts">
                  <div className="linkedin-banner-contact-item">
                    <Phone size={12} color="#0284c7" />
                    <span>+62812 - 3456 - 7890</span>
                  </div>
                  <div className="linkedin-banner-contact-item">
                    <Mail size={12} color="#0284c7" />
                    <span>agungkrisna.dev@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="linkedin-hero-body">
              <div className="linkedin-hero-top-row">
                <div className="linkedin-hero-avatar-wrap">
                  <img 
                    src="/avatars/linkedin_dummy_avatar.svg" 
                    alt={FULL_NAME} 
                    className="linkedin-hero-avatar"
                  />
                </div>

                <button 
                  className="linkedin-icon-action" 
                  style={{ marginTop: '12px' }}
                  onClick={() => {
                    playClickSound();
                    alert('Notifikasi aktif untuk update profil Anak Agung Ngurah Krisna Artha Wibawa.');
                  }}
                  title="Notifikasi Profil"
                >
                  <Bell size={20} />
                </button>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px' }}>
                <div>
                  <div className="linkedin-hero-title-row">
                    <h1 className="linkedin-hero-title">{FULL_NAME}</h1>
                    <span className="linkedin-hero-pronouns">He/Him</span>
                  </div>

                  <p className="linkedin-hero-headline">
                    DevOps Engineer & Full-Stack Developer | Containerization | Cloud Services | Kubernetes | Automation | Networking
                  </p>

                  <p className="linkedin-hero-location">
                    <span>Denpasar, Bali, Indonesia</span>
                    <span>·</span>
                    <span 
                      className="linkedin-link-blue"
                      onClick={() => {
                        playClickSound();
                        alert(`Kontak Resmi:\nNama: ${FULL_NAME}\nEmail: ${INITIAL_USER.email}\nPhone: ${INITIAL_USER.phone}\nWebsite: https://krisnaartha.my.id\nKampus: Institut Teknologi dan Bisnis STIKOM Bali`);
                      }}
                    >
                      Contact info
                    </span>
                  </p>

                  <div className="linkedin-hero-connections">
                    45 connections
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '6px' }}>
                  <div style={{ width: '38px', height: '38px', borderRadius: '4px', backgroundColor: '#ffffff', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
                    <svg viewBox="0 0 100 100" width="28" height="28">
                      <path d="M50 10 C35 30 25 50 30 75 C35 90 65 90 70 75 C75 50 65 30 50 10 Z" fill="#0284c7" />
                      <path d="M50 30 C42 45 38 58 42 72 C45 80 55 80 58 72 C62 58 58 45 50 30 Z" fill="#f59e0b" />
                      <path d="M50 48 C46 56 45 64 48 70 C50 74 54 74 56 70 C58 64 54 56 50 48 Z" fill="#dc2626" />
                    </svg>
                  </div>
                  <span style={{ fontSize: '13.5px', fontWeight: 600, color: 'rgba(0,0,0,0.9)', maxWidth: '210px', lineHeight: 1.25 }}>
                    Institut Teknologi dan Bisnis STIKOM Bali
                  </span>
                </div>
              </div>

              <div className="linkedin-hero-actions">
                <button 
                  className="linkedin-btn-primary"
                  onClick={() => {
                    playClickSound();
                    setIsConnected(!isConnected);
                  }}
                  style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
                >
                  <UserPlus size={16} />
                  <span>{isConnected ? 'Pending' : '+ Connect'}</span>
                </button>

                <button 
                  className="linkedin-btn-outline"
                  onClick={() => {
                    playClickSound();
                    alert(`Kirim pesan langsung ke ${FULL_NAME} melalui email: ${INITIAL_USER.email} atau WhatsApp.`);
                  }}
                >
                  <Send size={15} />
                  <span>Message</span>
                </button>

                <button 
                  className="linkedin-btn-secondary"
                  onClick={() => {
                    playClickSound();
                    alert(`Profil LinkedIn ${FULL_NAME}\nIPK: 3.90 • Prodi: Information Technology ITB STIKOM Bali`);
                  }}
                >
                  More
                </button>
              </div>

              <div className="linkedin-open-box">
                <div className="linkedin-open-box-title">
                  Open to work
                </div>
                <div className="linkedin-open-box-desc">
                  Central Java, Indonesia +4 more | On-site · Hybrid · Remote · Full-time · Contract
                </div>
                <div 
                  className="linkedin-open-box-link"
                  onClick={() => {
                    playClickSound();
                    setShowOpenDetails(true);
                  }}
                >
                  Show details
                </div>
              </div>
            </div>
          </div>

          <div className="linkedin-card">
            <div className="linkedin-card-header">
              <h2 className="linkedin-card-title">About</h2>
            </div>
            <div style={{ fontSize: '14px', lineHeight: '1.5', color: 'rgba(0,0,0,0.9)', whiteSpace: 'pre-line' }}>
              {`Sup, am trying to be an DevOps, for now i have Roadmap to learn Linux deeper, and then after knowing the OS, my next destination is understand how network does, and then containerization, thats all for now, il update all of my activity to be an DevOps XD`}
            </div>
          </div>

          <div className="linkedin-card">
            <div className="linkedin-card-header">
              <div>
                <h2 className="linkedin-card-title">Activity</h2>
                <div className="linkedin-card-subtitle">0 followers</div>
              </div>
              <div className="linkedin-card-header-actions">
                <button 
                  className="linkedin-btn-outline"
                  style={{ padding: '4px 14px', fontSize: '13px' }}
                  onClick={() => {
                    playClickSound();
                    setShowPostModal(true);
                  }}
                >
                  Create a post
                </button>
                <button 
                  className="linkedin-icon-action"
                  onClick={() => {
                    playClickSound();
                    setShowPostModal(true);
                  }}
                >
                  <Edit2 size={18} />
                </button>
              </div>
            </div>

            {posts.map(post => (
              <div key={post.id} className="linkedin-post-card">
                <div className="linkedin-post-header">
                  <div className="linkedin-post-author">
                    <div className="linkedin-post-avatar">
                      <img 
                        src="/avatars/linkedin_dummy_avatar.svg" 
                        alt="Avatar" 
                        style={{ width: '100%', height: '100%', borderRadius: '50%' }} 
                      />
                    </div>
                    <div>
                      <div className="linkedin-post-name">
                        <span>{post.author}</span>
                        <span style={{ color: 'rgba(0,0,0,0.6)', fontWeight: 400 }}>• {post.role}</span>
                      </div>
                      <div className="linkedin-post-sub">{post.sub}</div>
                      <div className="linkedin-post-sub" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <span>{post.date}</span>
                        <span>•</span>
                        <Globe size={12} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="linkedin-post-text">
                  {post.text}
                </div>

                {post.credly && (
                  <div 
                    className="linkedin-embed-link-card"
                    onClick={() => {
                      playClickSound();
                      setSelectedCred(certifications[0]);
                    }}
                  >
                    <div className="linkedin-embed-thumbnail">
                      <div style={{
                        width: '58px',
                        height: '58px',
                        border: '2px solid #334155',
                        borderRadius: '6px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '4px',
                        backgroundColor: '#0f172a',
                        color: '#f8fafc',
                        textAlign: 'center'
                      }}>
                        <Award size={20} color="#38bdf8" />
                        <span style={{ fontSize: '7px', fontWeight: 700, textTransform: 'uppercase', marginTop: '2px' }}>AWS ACADEMY</span>
                      </div>
                    </div>
                    <div className="linkedin-embed-info">
                      <span className="linkedin-embed-title">{post.credly.title}</span>
                      <span className="linkedin-embed-domain">{post.credly.domain}</span>
                    </div>
                  </div>
                )}

                <div className="linkedin-post-analytics">
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <BarChart2 size={14} color="#0a66c2" />
                    <span>{post.impressions} impressions</span>
                  </span>
                  <span 
                    className="linkedin-link-blue"
                    onClick={() => {
                      playClickSound();
                      alert('Analytics Post: 6 Views, 100% Organic Reach.');
                    }}
                  >
                    View analytics
                  </span>
                </div>

                <div className="linkedin-post-actions-row">
                  <button 
                    className={`linkedin-action-btn ${isLiked ? 'active' : ''}`}
                    onClick={handleLike}
                  >
                    <ThumbsUp size={16} fill={isLiked ? '#0a66c2' : 'none'} />
                    <span>Like {likeCount > 0 ? `(${likeCount})` : ''}</span>
                  </button>

                  <button 
                    className="linkedin-action-btn"
                    onClick={() => {
                      playClickSound();
                      alert('Komentar dibuka untuk jaringan profesional.');
                    }}
                  >
                    <MessageSquare size={16} />
                    <span>Comment</span>
                  </button>

                  <button 
                    className="linkedin-action-btn"
                    onClick={() => {
                      playClickSound();
                      alert('Postingan berhasil dibagikan.');
                    }}
                  >
                    <Repeat size={16} />
                    <span>Repost</span>
                  </button>

                  <button 
                    className="linkedin-action-btn"
                    onClick={() => {
                      playClickSound();
                      navigator.clipboard.writeText('https://krisnaartha.my.id');
                      alert('Link disalin ke clipboard!');
                    }}
                  >
                    <Send size={16} />
                    <span>Send</span>
                  </button>
                </div>
              </div>
            ))}

            <div className="linkedin-card-footer">
              <button 
                className="linkedin-card-footer-btn"
                onClick={() => {
                  playClickSound();
                  alert(`Menampilkan seluruh riwayat aktivitas ${FULL_NAME}.`);
                }}
              >
                <span>Show all</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          <div className="linkedin-card">
            <div className="linkedin-card-header">
              <h2 className="linkedin-card-title">Education</h2>
              <div className="linkedin-card-header-actions">
                <button 
                  className="linkedin-icon-action"
                  onClick={() => playClickSound()}
                >
                  <Plus size={20} />
                </button>
                <button 
                  className="linkedin-icon-action"
                  onClick={() => playClickSound()}
                >
                  <Edit2 size={18} />
                </button>
              </div>
            </div>

            <div className="linkedin-item-row" style={{ borderBottom: 'none' }}>
              <div className="linkedin-item-logo" style={{ backgroundColor: '#ffffff' }}>
                <svg viewBox="0 0 100 100" width="36" height="36">
                  <path d="M50 10 C35 30 25 50 30 75 C35 90 65 90 70 75 C75 50 65 30 50 10 Z" fill="#0284c7" />
                  <path d="M50 30 C42 45 38 58 42 72 C45 80 55 80 58 72 C62 58 58 45 50 30 Z" fill="#f59e0b" />
                  <path d="M50 48 C46 56 45 64 48 70 C50 74 54 74 56 70 C58 64 54 56 50 48 Z" fill="#dc2626" />
                </svg>
              </div>

              <div className="linkedin-item-content">
                <span className="linkedin-item-title">
                  Institut Teknologi dan Bisnis STIKOM Bali
                </span>
                <span className="linkedin-item-sub">
                  Information Technology
                </span>
                <span className="linkedin-item-meta">
                  IPK: 3.90 • Rekayasa Perangkat Lunak, Cloud Computing & Mobile Engineering
                </span>
              </div>
            </div>
          </div>

          <div className="linkedin-card">
            <div className="linkedin-card-header">
              <h2 className="linkedin-card-title">Licenses & certifications ({certifications.length})</h2>
              <div className="linkedin-card-header-actions">
                <button 
                  className="linkedin-icon-action"
                  onClick={() => playClickSound()}
                >
                  <Plus size={20} />
                </button>
                <button 
                  className="linkedin-icon-action"
                  onClick={() => playClickSound()}
                >
                  <Edit2 size={18} />
                </button>
              </div>
            </div>

            {filteredCerts.map((cert) => (
              <div key={cert.id} className="linkedin-item-row">
                <div className="linkedin-item-logo">
                  {renderCertLogo(cert.iconType)}
                </div>

                <div className="linkedin-item-content">
                  <span className="linkedin-item-title">{cert.title}</span>
                  <span className="linkedin-item-sub">{cert.issuer}</span>
                  <span className="linkedin-item-meta">{cert.issueDate}</span>
                  {cert.credentialId && (
                    <span className="linkedin-item-meta">{cert.credentialId}</span>
                  )}

                  <button 
                    className="linkedin-btn-secondary linkedin-credential-btn"
                    onClick={() => {
                      playClickSound();
                      setSelectedCred(cert);
                    }}
                  >
                    <span>Show credential</span>
                    <ExternalLink size={13} style={{ marginLeft: '4px' }} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {showPostModal && (
        <div 
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.65)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 100,
            padding: '16px'
          }}
          onClick={() => setShowPostModal(false)}
        >
          <div 
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '8px',
              width: '520px',
              maxWidth: '100%',
              padding: '20px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.25)'
            }}
            onClick={e => e.stopPropagation()}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
              <h3 style={{ fontSize: '17px', fontWeight: 700, margin: 0 }}>Create a post</h3>
              <button 
                onClick={() => setShowPostModal(false)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}
              >
                <X size={20} color="rgba(0,0,0,0.6)" />
              </button>
            </div>

            <textarea 
              rows={4}
              placeholder="What do you want to talk about?"
              value={newPostText}
              onChange={e => setNewPostText(e.target.value)}
              style={{
                width: '100%',
                border: '1px solid #e0dfdc',
                borderRadius: '6px',
                padding: '12px',
                fontSize: '14px',
                fontFamily: 'inherit',
                outline: 'none',
                resize: 'none',
                marginBottom: '14px'
              }}
            />

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
              <button 
                className="linkedin-btn-secondary"
                onClick={() => setShowPostModal(false)}
              >
                Cancel
              </button>
              <button 
                className="linkedin-btn-primary"
                onClick={handleCreatePost}
              >
                Post
              </button>
            </div>
          </div>
        </div>
      )}

      {showOpenDetails && (
        <div 
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.65)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 100,
            padding: '16px'
          }}
          onClick={() => setShowOpenDetails(false)}
        >
          <div 
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '12px',
              width: '460px',
              maxWidth: '100%',
              padding: '24px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
              position: 'relative'
            }}
            onClick={e => e.stopPropagation()}
          >
            <button 
              onClick={() => setShowOpenDetails(false)}
              style={{ position: 'absolute', top: 16, right: 16, background: 'none', border: 'none', cursor: 'pointer' }}
            >
              <X size={20} color="rgba(0,0,0,0.6)" />
            </button>

            <h3 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 12px 0', color: 'rgba(0,0,0,0.9)' }}>
              Open to Work Preferences
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13.5px', color: 'rgba(0,0,0,0.8)' }}>
              <div><b>Job Titles:</b> DevOps Engineer, Cloud Engineer, Full-Stack Developer, Mobile Developer</div>
              <div><b>Locations:</b> Bali, Indonesia · Central Java · Jakarta · Remote</div>
              <div><b>Workplace types:</b> On-site, Hybrid, Remote</div>
              <div><b>Job types:</b> Full-time, Contract, Internship, Freelance</div>
            </div>

            <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'flex-end' }}>
              <button 
                className="linkedin-btn-primary"
                onClick={() => setShowOpenDetails(false)}
              >
                Got it
              </button>
            </div>
          </div>
        </div>
      )}

      {selectedCred && (
        <div 
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.65)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 100,
            padding: '16px'
          }}
          onClick={() => setSelectedCred(null)}
        >
          <div 
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '12px',
              width: '460px',
              maxWidth: '100%',
              padding: '24px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
              position: 'relative'
            }}
            onClick={e => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedCred(null)}
              style={{ position: 'absolute', top: 16, right: 16, background: 'none', border: 'none', cursor: 'pointer' }}
            >
              <X size={20} color="rgba(0,0,0,0.6)" />
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
              {renderCertLogo(selectedCred.iconType)}
              <div>
                <h3 style={{ fontSize: '16px', fontWeight: 700, margin: 0, color: 'rgba(0,0,0,0.9)' }}>
                  {selectedCred.title}
                </h3>
                <div style={{ fontSize: '13px', color: 'rgba(0,0,0,0.6)', marginTop: '2px' }}>
                  {selectedCred.issuer}
                </div>
              </div>
            </div>

            <div style={{ backgroundColor: '#f8fafc', padding: '12px', borderRadius: '6px', fontSize: '13px', color: 'rgba(0,0,0,0.8)', marginBottom: '18px' }}>
              <div><b>Penerima:</b> {FULL_NAME}</div>
              <div><b>Institusi:</b> Institut Teknologi dan Bisnis STIKOM Bali</div>
              <div><b>Status:</b> Terverifikasi Resmi</div>
              {selectedCred.credentialId && (
                <div><b>ID Kredensial:</b> {selectedCred.credentialId}</div>
              )}
            </div>

            <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
              <button 
                className="linkedin-btn-secondary"
                onClick={() => setSelectedCred(null)}
              >
                Tutup
              </button>
              <button 
                className="linkedin-btn-primary"
                onClick={() => {
                  playClickSound();
                  window.open(selectedCred.credentialUrl, '_blank');
                }}
              >
                Buka di Credly / Situs Resmi
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
