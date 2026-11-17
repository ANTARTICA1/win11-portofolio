import React, { useState, useEffect, useRef } from 'react';
import { 
  X, MessageSquare, Compass, Zap, Send, 
  RefreshCw, Download, ExternalLink, ChevronRight, ChevronLeft, Gamepad2, Image, MessageCircle
} from 'lucide-react';
import { playClippySound, playClickSound } from '../../utils/sound';
import { INITIAL_USER } from '../../data/fileSystem';

const CLIPPY_QUOTES = [
  'Kelihatannya Anda sedang mencari Full-Stack & Mobile Developer berbakat! Mau kubantu download CV Agung Krisna?',
  'Tahukah Anda? Agung membangun 10+ proyek web & mobile dari nol dengan clean architecture dan performa tinggi.',
  'Butuh developer yang paham mobile (Flutter) sekaligus web modern (React/Next.js) dan backend (Laravel/Node)? Agung solusinya!',
  'Psst... petunjuk eksperimen rahasia tersebar di folder Documents, Downloads, dan Recycle Bin.',
  'Ingin melihat simulasi crash? Coba ketik "bsod" di Run dialog (Alt+R) atau ketuk logo Windows 5x!',
  'Para gamer sejati: coba tekan tombol panah Konami Code (Atas Atas Bawah Bawah Kiri Kanan Kiri Kanan B A) di desktop!',
  'Ketik "hack" di Command Prompt kalau mau menguji kemampuan peretasan terminal ala Fallout.'
];

const QA_DATABASE = [
  {
    id: 'whoami',
    label: 'Siapa Agung Krisna?',
    keywords: ['siapa', 'who', 'profil', 'biodata', 'tentang', 'about', 'background'],
    answer: 'Agung Krisna adalah Software Engineer asal Denpasar, Bali yang berfokus pada pengembangan aplikasi Mobile (Flutter) dan Web Full-Stack modern (React, Next.js, Laravel). Berpengalaman membangun aplikasi siap produksi dengan fokus pada performa dan pengalaman pengguna yang mulus.',
    actionLabel: 'Lihat Profil Lengkap (CV)',
    actionType: 'recruiter'
  },
  {
    id: 'skills',
    label: 'Apa Keahlian Utamanya?',
    keywords: ['skill', 'keahlian', 'stack', 'teknologi', 'bahasa', 'kemampuan', 'tools'],
    answer: 'Tech Stack Unggulan: Mobile Development (Flutter, Dart, React Native), Frontend Web (React 19, Next.js, Vite, Tailwind CSS), Backend (Node.js, Express, Go, Laravel, PostgreSQL, MySQL), serta DevOps (Docker, Git, GCP, Vercel).',
    actionLabel: 'Buka Settings (Tech Specs)',
    actionType: 'settings'
  },
  {
    id: 'projects',
    label: 'Rekomendasi Proyek Terbaik?',
    keywords: ['proyek', 'project', 'karya', 'rekomendasi', 'aplikasi', 'portfolio', 'tatagih', 'lintas', 'sigap'],
    answer: 'Tiga proyek terfavorit: 1. Tatagih (AI Financial & Bill Manager), 2. Lintas (Cross-Device PC Touchpad & File Transfer Port 8945), dan 3. SIGAP (Proteksi ponsel anti-maling berbasis sensor akselerometer & kamera).',
    actionLabel: 'Jelajahi di File Explorer',
    actionType: 'explorer'
  },
  {
    id: 'hire',
    label: 'Bagaimana Cara Merekrut?',
    keywords: ['hire', 'rekrut', 'kerja', 'kontak', 'hubungi', 'whatsapp', 'email', 'interview'],
    answer: 'Agung terbuka untuk kesempatan kerja Full-time, Remote, maupun Kontrak sebagai Mobile Engineer atau Full-Stack Developer. Anda dapat langsung mengunduh CV atau mengirim pesan melalui WhatsApp!',
    actionLabel: 'Chat via WhatsApp',
    actionType: 'whatsapp'
  },
  {
    id: 'secrets',
    label: 'Ada Rahasia Apa di OS ini?',
    keywords: ['rahasia', 'secret', 'easter', 'egg', 'cheat', 'game', 'konami', 'misteri'],
    answer: 'Eksperimen rahasia yang bisa dicoba: 1. Ketik "hack" di CMD untuk game decrypt password Fallout. 2. Masukkan angka 1337 di Calculator. 3. Tekan Konami Code (Atas Atas Bawah Bawah Kiri Kanan Kiri Kanan B A) di desktop untuk perayaan konfeti!',
    actionLabel: 'Buka Terminal CMD',
    actionType: 'terminal'
  }
];

const TOUR_STEPS = [
  {
    step: 1,
    title: 'Selamat Datang di Desktop',
    desc: 'Ini adalah portofolio interaktif Agung Krisna yang mensimulasikan lingkungan Windows 11 asli. Anda dapat membuka aplikasi, menyeret jendela, hingga menyesuaikan tata letak layar desktop!',
    actionText: 'Buka Pengantar.txt',
    actionTarget: 'notepad'
  },
  {
    step: 2,
    title: 'Katalog Proyek Unggulan',
    desc: 'Semua karya mobile, web, dan modding game disimpan di folder Projects. Setiap proyek dilengkapi deskripsi masalah, solusi arsitektur, dan tautan live demo serta repositori GitHub.',
    actionText: 'Buka Projects (Explorer)',
    actionTarget: 'explorer'
  },
  {
    step: 3,
    title: 'Mini Games & Tantangan',
    desc: 'Suka tantangan? Buka Command Prompt lalu ketik "hack" untuk memainkan mini game decrypt password Fallout, atau bersantai dengan Windows Solitaire dan Catur melawan Bot AI!',
    actionText: 'Main Catur vs Bot',
    actionTarget: 'chess'
  },
  {
    step: 4,
    title: 'Kualifikasi & Kontak Resmi',
    desc: 'Butuh informasi cepat untuk kebutuhan rekrutmen? Anda dapat meninjau riwayat pengalaman dan langsung mengunduh berkas Curriculum Vitae (PDF) atau menghubungi Agung melalui WhatsApp.',
    actionText: 'Buka Curriculum Vitae',
    actionTarget: 'recruiter'
  }
];

const WALLPAPERS = [
  '/wallpapers/win11_bloom_dark.jpg',
  '/wallpapers/win11_bloom_light.jpg',
  '/wallpapers/win11_glow.jpg',
  '/wallpapers/win11_motion.jpg',
  '/wallpapers/win11_sunrise.jpg',
  '/wallpapers/win11_flow.jpg'
];

const PROJECTS_LIST = ['theotown', 'nenacare', 'tatagih', 'temuin', 'lintas', 'neurofly', 'sigap', 'bingkai', 'onlyus'];

export const ClippyAssistant = ({
  onClose,
  onOpenRecruiter,
  onOpenWhatsApp,
  onLaunchApp,
  onSelectWallpaper,
  currentWallpaper
}) => {
  const [activeTab, setActiveTab] = useState('tips'); // 'tips' | 'qa' | 'tour' | 'actions'
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [isWiggling, setIsWiggling] = useState(false);
  const [tourIndex, setTourIndex] = useState(0);
  
  // Q&A States
  const [selectedQa, setSelectedQa] = useState(null);
  const [customQuestion, setCustomQuestion] = useState('');
  const [qaAnswer, setQaAnswer] = useState(null);

  // Eye-Tracking Pupil Offset State
  const [pupilOffset, setPupilOffset] = useState({ x: 0, y: 0 });
  const avatarRef = useRef(null);

  // Eye tracking listener
  useEffect(() => {
    const handlePointerMove = (e) => {
      if (!avatarRef.current) return;
      const rect = avatarRef.current.getBoundingClientRect();
      const eyeX = rect.left + rect.width / 2;
      const eyeY = rect.top + rect.height / 2;

      const deltaX = e.clientX - eyeX;
      const deltaY = e.clientY - eyeY;
      const angle = Math.atan2(deltaY, deltaX);
      const dist = Math.min(3.2, Math.hypot(deltaX, deltaY) / 75);

      setPupilOffset({
        x: Math.cos(angle) * dist,
        y: Math.sin(angle) * dist
      });
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, []);

  const handlePokeClippy = () => {
    playClippySound();
    setIsWiggling(true);
    setTimeout(() => setIsWiggling(false), 500);
    setQuoteIndex((prev) => (prev + 1) % CLIPPY_QUOTES.length);
  };

  const handleSelectTab = (tab) => {
    playClickSound();
    setActiveTab(tab);
    if (tab === 'qa') {
      setSelectedQa(null);
      setQaAnswer(null);
    }
  };

  const handleActionExecute = (actionType) => {
    playClickSound();
    if (actionType === 'recruiter') {
      if (onOpenRecruiter) onOpenRecruiter();
      else if (onLaunchApp) onLaunchApp('recruiter');
    } else if (actionType === 'whatsapp') {
      if (onOpenWhatsApp) onOpenWhatsApp();
      else window.open(INITIAL_USER.whatsapp, '_blank', 'noopener,noreferrer');
    } else if (actionType === 'random_project') {
      const randomProj = PROJECTS_LIST[Math.floor(Math.random() * PROJECTS_LIST.length)];
      if (onLaunchApp) onLaunchApp('chrome', { projectId: randomProj });
    } else if (actionType === 'random_wallpaper') {
      if (onSelectWallpaper) {
        const available = WALLPAPERS.filter(w => w !== currentWallpaper);
        const randomWp = available[Math.floor(Math.random() * available.length)] || WALLPAPERS[0];
        onSelectWallpaper(randomWp);
      }
    } else if (actionType === 'github') {
      window.open(INITIAL_USER.github || 'https://github.com/ANTARTICA1', '_blank', 'noopener,noreferrer');
    } else if (onLaunchApp) {
      onLaunchApp(actionType);
    }
  };

  const handleAskQuestion = (qItem) => {
    playClickSound();
    setSelectedQa(qItem);
    setQaAnswer({
      question: qItem.label,
      answer: qItem.answer,
      actionLabel: qItem.actionLabel,
      actionType: qItem.actionType
    });
  };

  const handleCustomQuestionSubmit = (e) => {
    e.preventDefault();
    const query = customQuestion.trim().toLowerCase();
    if (!query) return;

    playClickSound();
    setCustomQuestion('');

    // Keyword matching algorithm
    const match = QA_DATABASE.find(item => 
      item.keywords.some(k => query.includes(k))
    );

    if (match) {
      setQaAnswer({
        question: customQuestion,
        answer: match.answer,
        actionLabel: match.actionLabel,
        actionType: match.actionType
      });
    } else {
      setQaAnswer({
        question: customQuestion,
        answer: 'Pertanyaan yang menarik! Anda dapat menanyakan tentang profil Agung, keahlian teknis (tech stack), proyek unggulan (Tatagih, Lintas, SIGAP), cara merekrut, atau rahasia tersembunyi sistem.',
        actionLabel: 'Buka CV Agung',
        actionType: 'recruiter'
      });
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 'calc(var(--taskbar-height) + 16px)',
        right: '24px',
        zIndex: 10005,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        pointerEvents: 'auto',
        fontFamily: "'Segoe UI', -apple-system, sans-serif"
      }}
    >
      {/* Speech Bubble */}
      <div
        style={{
          backgroundColor: '#ffffe1',
          color: '#1e293b',
          border: '1.5px solid #000000',
          borderRadius: '8px',
          padding: '12px 14px',
          width: '320px',
          maxWidth: 'calc(100vw - 32px)',
          boxShadow: '0 12px 32px rgba(0, 0, 0, 0.45), 0 2px 6px rgba(0, 0, 0, 0.2)',
          position: 'relative',
          marginBottom: '10px',
          fontSize: '12.5px',
          lineHeight: 1.45,
          animation: 'fadeIn 0.25s ease-out'
        }}
      >
        {/* Header Bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '8px',
          borderBottom: '1px solid #cbd5e1',
          paddingBottom: '6px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11.5px', fontWeight: 700, color: '#0369a1' }}>
            <span>Clippy Assistant</span>
          </div>

          <button
            onClick={() => {
              playClickSound();
              onClose();
            }}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '2px',
              color: '#64748b',
              display: 'flex',
              alignItems: 'center',
              borderRadius: '4px'
            }}
            title="Tutup Clippy"
          >
            <X size={15} />
          </button>
        </div>

        {/* Navigation Mode Tabs */}
        <div style={{
          display: 'flex',
          gap: '4px',
          marginBottom: '10px',
          backgroundColor: 'rgba(0, 0, 0, 0.05)',
          padding: '2px',
          borderRadius: '6px'
        }}>
          <button
            onClick={() => handleSelectTab('tips')}
            style={{
              flex: 1,
              padding: '4px 2px',
              fontSize: '10.5px',
              fontWeight: activeTab === 'tips' ? 700 : 500,
              backgroundColor: activeTab === 'tips' ? '#ffffff' : 'transparent',
              color: activeTab === 'tips' ? '#0f172a' : '#64748b',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              boxShadow: activeTab === 'tips' ? '0 1px 3px rgba(0,0,0,0.1)' : 'none'
            }}
          >
            Tips
          </button>

          <button
            onClick={() => handleSelectTab('qa')}
            style={{
              flex: 1.2,
              padding: '4px 2px',
              fontSize: '10.5px',
              fontWeight: activeTab === 'qa' ? 700 : 500,
              backgroundColor: activeTab === 'qa' ? '#ffffff' : 'transparent',
              color: activeTab === 'qa' ? '#0284c7' : '#64748b',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              boxShadow: activeTab === 'qa' ? '0 1px 3px rgba(0,0,0,0.1)' : 'none'
            }}
          >
            Tanya Jawab
          </button>

          <button
            onClick={() => handleSelectTab('tour')}
            style={{
              flex: 1,
              padding: '4px 2px',
              fontSize: '10.5px',
              fontWeight: activeTab === 'tour' ? 700 : 500,
              backgroundColor: activeTab === 'tour' ? '#ffffff' : 'transparent',
              color: activeTab === 'tour' ? '#16a34a' : '#64748b',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              boxShadow: activeTab === 'tour' ? '0 1px 3px rgba(0,0,0,0.1)' : 'none'
            }}
          >
            Tur Wisata
          </button>

          <button
            onClick={() => handleSelectTab('actions')}
            style={{
              flex: 1.1,
              padding: '4px 2px',
              fontSize: '10.5px',
              fontWeight: activeTab === 'actions' ? 700 : 500,
              backgroundColor: activeTab === 'actions' ? '#ffffff' : 'transparent',
              color: activeTab === 'actions' ? '#7c3aed' : '#64748b',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              boxShadow: activeTab === 'actions' ? '0 1px 3px rgba(0,0,0,0.1)' : 'none'
            }}
          >
            Aksi Cepat
          </button>
        </div>

        {/* Tab 1: Classic Tips */}
        {activeTab === 'tips' && (
          <div>
            <p style={{ margin: '4px 0 12px', fontWeight: 500, minHeight: '48px', fontSize: '12px' }}>
              {CLIPPY_QUOTES[quoteIndex]}
            </p>

            <div style={{ display: 'flex', gap: '6px' }}>
              <button
                onClick={() => handleActionExecute('recruiter')}
                style={{
                  flex: 1,
                  backgroundColor: '#0284c7',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '4px',
                  padding: '6px 8px',
                  fontSize: '11px',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                Unduh CV
              </button>

              <button
                onClick={handlePokeClippy}
                style={{
                  flex: 1,
                  backgroundColor: '#e2e8f0',
                  color: '#1e293b',
                  border: '1px solid #cbd5e1',
                  borderRadius: '4px',
                  padding: '6px 8px',
                  fontSize: '11px',
                  cursor: 'pointer',
                  fontWeight: 500
                }}
              >
                Tip Lainnya &gt;
              </button>
            </div>
          </div>
        )}

        {/* Tab 2: Smart Local Q&A */}
        {activeTab === 'qa' && (
          <div>
            {qaAnswer ? (
              <div style={{ marginBottom: '8px' }}>
                <div style={{ fontSize: '11px', fontWeight: 700, color: '#0369a1', marginBottom: '3px' }}>
                  Pertanyaan: "{qaAnswer.question}"
                </div>
                <div style={{
                  backgroundColor: '#ffffff',
                  padding: '8px 10px',
                  borderRadius: '6px',
                  border: '1px solid #cbd5e1',
                  fontSize: '11.5px',
                  lineHeight: 1.45,
                  marginBottom: '8px',
                  color: '#0f172a'
                }}>
                  {qaAnswer.answer}
                </div>

                <div style={{ display: 'flex', gap: '6px' }}>
                  {qaAnswer.actionLabel && (
                    <button
                      onClick={() => handleActionExecute(qaAnswer.actionType)}
                      style={{
                        flex: 1,
                        backgroundColor: '#0284c7',
                        color: '#ffffff',
                        border: 'none',
                        borderRadius: '4px',
                        padding: '6px 8px',
                        fontSize: '11px',
                        fontWeight: 600,
                        cursor: 'pointer'
                      }}
                    >
                      {qaAnswer.actionLabel}
                    </button>
                  )}
                  <button
                    onClick={() => setQaAnswer(null)}
                    style={{
                      backgroundColor: '#f1f5f9',
                      color: '#475569',
                      border: '1px solid #cbd5e1',
                      borderRadius: '4px',
                      padding: '6px 8px',
                      fontSize: '11px',
                      cursor: 'pointer'
                    }}
                  >
                    Tanya Lainnya
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div style={{ fontSize: '11px', color: '#475569', marginBottom: '6px', fontWeight: 600 }}>
                  Pilih Pertanyaan Cepat:
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '10px' }}>
                  {QA_DATABASE.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleAskQuestion(item)}
                      style={{
                        textAlign: 'left',
                        backgroundColor: '#ffffff',
                        border: '1px solid #cbd5e1',
                        borderRadius: '4px',
                        padding: '5px 8px',
                        fontSize: '11px',
                        color: '#1e293b',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                      }}
                    >
                      <span>{item.label}</span>
                      <ChevronRight size={12} color="#94a3b8" />
                    </button>
                  ))}
                </div>

                <form onSubmit={handleCustomQuestionSubmit} style={{ display: 'flex', gap: '4px' }}>
                  <input
                    type="text"
                    value={customQuestion}
                    onChange={(e) => setCustomQuestion(e.target.value)}
                    placeholder="Tulis pertanyaan Anda..."
                    style={{
                      flex: 1,
                      backgroundColor: '#ffffff',
                      border: '1px solid #cbd5e1',
                      borderRadius: '4px',
                      padding: '4px 8px',
                      fontSize: '11px',
                      outline: 'none',
                      color: '#0f172a'
                    }}
                  />
                  <button
                    type="submit"
                    style={{
                      backgroundColor: '#0284c7',
                      color: '#ffffff',
                      border: 'none',
                      borderRadius: '4px',
                      padding: '4px 8px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                    title="Kirim Pertanyaan"
                  >
                    <Send size={12} />
                  </button>
                </form>
              </div>
            )}
          </div>
        )}

        {/* Tab 3: Interactive Tour Guide */}
        {activeTab === 'tour' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
              <span style={{ fontSize: '11px', fontWeight: 700, color: '#15803d' }}>
                Langkah {TOUR_STEPS[tourIndex].step} dari 4: {TOUR_STEPS[tourIndex].title}
              </span>
              <span style={{ fontSize: '10px', color: '#64748b' }}>
                {tourIndex + 1}/4
              </span>
            </div>

            <div style={{
              backgroundColor: '#ffffff',
              padding: '8px 10px',
              borderRadius: '6px',
              border: '1px solid #cbd5e1',
              fontSize: '11.5px',
              lineHeight: 1.45,
              marginBottom: '10px',
              color: '#1e293b'
            }}>
              {TOUR_STEPS[tourIndex].desc}
            </div>

            <div style={{ display: 'flex', gap: '6px', marginBottom: '8px' }}>
              <button
                onClick={() => handleActionExecute(TOUR_STEPS[tourIndex].actionTarget)}
                style={{
                  flex: 1,
                  backgroundColor: '#16a34a',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '4px',
                  padding: '6px 8px',
                  fontSize: '11px',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                {TOUR_STEPS[tourIndex].actionText}
              </button>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <button
                disabled={tourIndex === 0}
                onClick={() => {
                  playClickSound();
                  setTourIndex(prev => Math.max(0, prev - 1));
                }}
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  color: tourIndex === 0 ? '#cbd5e1' : '#475569',
                  cursor: tourIndex === 0 ? 'default' : 'pointer',
                  fontSize: '11px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '2px'
                }}
              >
                <ChevronLeft size={13} />
                <span>Sebelumnya</span>
              </button>

              <button
                onClick={() => {
                  playClickSound();
                  if (tourIndex < TOUR_STEPS.length - 1) {
                    setTourIndex(prev => prev + 1);
                  } else {
                    setTourIndex(0);
                    setActiveTab('tips');
                  }
                }}
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  color: '#0284c7',
                  cursor: 'pointer',
                  fontSize: '11px',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '2px'
                }}
              >
                <span>{tourIndex < TOUR_STEPS.length - 1 ? 'Lanjut' : 'Selesai Tur'}</span>
                <ChevronRight size={13} />
              </button>
            </div>
          </div>
        )}

        {/* Tab 4: Action Hub */}
        {activeTab === 'actions' && (
          <div>
            <div style={{ fontSize: '11px', color: '#475569', marginBottom: '8px', fontWeight: 600 }}>
              Pusat Tindakan Cepat (1-Klik):
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
              <button
                onClick={() => handleActionExecute('random_project')}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #cbd5e1',
                  borderRadius: '5px',
                  padding: '6px 8px',
                  fontSize: '10.5px',
                  color: '#0f172a',
                  cursor: 'pointer',
                  textAlign: 'left',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <Zap size={13} color="#f59e0b" />
                <span>Acak Proyek</span>
              </button>

              <button
                onClick={() => handleActionExecute('recruiter')}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #cbd5e1',
                  borderRadius: '5px',
                  padding: '6px 8px',
                  fontSize: '10.5px',
                  color: '#0f172a',
                  cursor: 'pointer',
                  textAlign: 'left',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <Download size={13} color="#0284c7" />
                <span>Unduh CV</span>
              </button>

              <button
                onClick={() => handleActionExecute('whatsapp')}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #cbd5e1',
                  borderRadius: '5px',
                  padding: '6px 8px',
                  fontSize: '10.5px',
                  color: '#0f172a',
                  cursor: 'pointer',
                  textAlign: 'left',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <MessageCircle size={13} color="#16a34a" />
                <span>Chat WA</span>
              </button>

              <button
                onClick={() => handleActionExecute('random_wallpaper')}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #cbd5e1',
                  borderRadius: '5px',
                  padding: '6px 8px',
                  fontSize: '10.5px',
                  color: '#0f172a',
                  cursor: 'pointer',
                  textAlign: 'left',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <Image size={13} color="#7c3aed" />
                <span>Acak Wallpaper</span>
              </button>

              <button
                onClick={() => handleActionExecute('solitaire')}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #cbd5e1',
                  borderRadius: '5px',
                  padding: '6px 8px',
                  fontSize: '10.5px',
                  color: '#0f172a',
                  cursor: 'pointer',
                  textAlign: 'left',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <Gamepad2 size={13} color="#e11d48" />
                <span>Solitaire</span>
              </button>

              <button
                onClick={() => handleActionExecute('chess')}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #cbd5e1',
                  borderRadius: '5px',
                  padding: '6px 8px',
                  fontSize: '10.5px',
                  color: '#0f172a',
                  cursor: 'pointer',
                  textAlign: 'left',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <Gamepad2 size={13} color="#2563eb" />
                <span>Catur vs Bot</span>
              </button>
            </div>
          </div>
        )}

        {/* Speech Bubble Arrow pointing to Clippy */}
        <div
          style={{
            position: 'absolute',
            bottom: '-10px',
            right: '34px',
            width: 0,
            height: 0,
            borderLeft: '10px solid transparent',
            borderRight: '10px solid transparent',
            borderTop: '10px solid #ffffe1'
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-12px',
            right: '34px',
            width: 0,
            height: 0,
            borderLeft: '10px solid transparent',
            borderRight: '10px solid transparent',
            borderTop: '11px solid #000000',
            zIndex: -1
          }}
        />
      </div>

      {/* Clippy Paperclip Avatar with Eye-Tracking Pupil Movement */}
      <div
        ref={avatarRef}
        onClick={handlePokeClippy}
        style={{
          cursor: 'pointer',
          transform: isWiggling ? 'scale(1.18) rotate(12deg)' : 'scale(1) rotate(0deg)',
          transition: 'transform 0.15s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          userSelect: 'none',
          paddingRight: '16px',
          filter: 'drop-shadow(0 4px 10px rgba(0, 0, 0, 0.35))'
        }}
        title="Klik Clippy untuk tip rahasia dan suara nostalgia!"
      >
        <svg width="68" height="74" viewBox="0 0 100 110" fill="none">
          {/* Paperclip wire outer loop */}
          <path
            d="M50 15 C30 15, 20 30, 20 60 C20 85, 35 100, 55 100 C75 100, 85 85, 85 55 C85 30, 75 10, 50 10 C30 10, 30 40, 30 65 C30 80, 40 85, 52 85 C62 85, 70 78, 70 60 C70 42, 65 35, 50 35"
            stroke="#94a3b8"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Paperclip wire inner highlight */}
          <path
            d="M50 15 C30 15, 20 30, 20 60 C20 85, 35 100, 55 100 C75 100, 85 85, 85 55 C85 30, 75 10, 50 10 C30 10, 30 40, 30 65 C30 80, 40 85, 52 85 C62 85, 70 78, 70 60 C70 42, 65 35, 50 35"
            stroke="#cbd5e1"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Eyebrows */}
          <ellipse cx="40" cy="38" rx="8" ry="1.8" fill="#1e293b" transform="rotate(-12 40 38)" />
          <ellipse cx="62" cy="38" rx="8" ry="1.8" fill="#1e293b" transform="rotate(12 62 38)" />
          
          {/* Eye Whites */}
          <circle cx="41" cy="48" r="9.5" fill="#ffffff" stroke="#1e293b" strokeWidth="2.5" />
          <circle cx="63" cy="48" r="9.5" fill="#ffffff" stroke="#1e293b" strokeWidth="2.5" />
          
          {/* Eye Pupils with Dynamic Eye-Tracking Offset */}
          <circle 
            cx={43 + pupilOffset.x} 
            cy={48 + pupilOffset.y} 
            r="4.2" 
            fill="#0f172a" 
          />
          <circle 
            cx={44.5 + pupilOffset.x * 0.7} 
            cy={46.5 + pupilOffset.y * 0.7} 
            r="1.5" 
            fill="#ffffff" 
          />
          
          <circle 
            cx={65 + pupilOffset.x} 
            cy={48 + pupilOffset.y} 
            r="4.2" 
            fill="#0f172a" 
          />
          <circle 
            cx={66.5 + pupilOffset.x * 0.7} 
            cy={46.5 + pupilOffset.y * 0.7} 
            r="1.5" 
            fill="#ffffff" 
          />
        </svg>
      </div>
    </div>
  );
};
