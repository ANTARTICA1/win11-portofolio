import React, { useState, useRef, useEffect } from 'react';
import { 
  Video, Phone, Search, MoreVertical, Paperclip, Smile, 
  Send, Mic, ChevronDown, CornerUpLeft, X, Check, CheckCheck,
  FileText, Image, User, BarChart2, PhoneOff, ExternalLink
} from 'lucide-react';
import { 
  playClickSound, 
  playWhatsAppSentSound, 
  playWhatsAppReceivedSound 
} from '../../utils/sound';
import { INITIAL_USER, RECRUITER_SUMMARY } from '../../data/fileSystem';
import './WhatsAppApp.css';

const INITIAL_MESSAGES = [
  {
    id: 1,
    sender: 'gungkrisna',
    text: 'Halo! Selamat datang di Portofolioku',
    time: '09.15',
    status: 'read'
  },
  {
    id: 2,
    sender: 'gungkrisna',
    text: `Aku Gungkrisna (${INITIAL_USER.name}), ${INITIAL_USER.role} dengan ${RECRUITER_SUMMARY.experienceYears} pengalaman.`,
    time: '09.15',
    status: 'read'
  },
  {
    id: 3,
    sender: 'gungkrisna',
    text: 'Di portofolio interaktif ini kamu bisa coba langsung aplikasi buatanku: Tatagih, Temuin, dan Lintas.',
    time: '09.16',
    status: 'read'
  },
  {
    id: 4,
    sender: 'me',
    text: 'Halo Gungkrisna! Menarik banget konsep portofolio Windows 11 ini 👏',
    time: '09.18',
    status: 'read'
  },
  {
    id: 5,
    sender: 'me',
    text: 'Tech stack utama yang biasa kamu pake untuk web & mobile apa aja gung?',
    time: '09.18',
    status: 'read'
  },
  {
    id: 6,
    sender: 'gungkrisna',
    text: 'Untuk Mobile aku fokus di Flutter (Dart) dan React Native.',
    time: '09.20',
    status: 'read'
  },
  {
    id: 7,
    sender: 'gungkrisna',
    text: 'Kalau Web & Backend: React.js, Next.js 14, TypeScript, Node.js, Go/Golang, dan PostgreSQL.',
    time: '09.20',
    status: 'read'
  },
  {
    id: 8,
    sender: 'gungkrisna',
    text: 'Semua project dibangun dengan clean architecture, UI responsif, dan performa tinggi.',
    time: '09.21',
    status: 'read'
  },
  {
    id: 9,
    sender: 'me',
    text: 'Keren! Kalau proyek unggulan yang paling kompleks apa ya gung?',
    time: '09.23',
    status: 'read'
  },
  {
    id: 10,
    sender: 'me',
    text: 'Dan status kamu sekarang open untuk rekrutmen / project?',
    time: '09.23',
    status: 'read'
  },
  {
    id: 11,
    sender: 'gungkrisna',
    text: 'Ada Tatagih (Fintech Subscription Manager dengan analitik QRIS) dan Temuin (Platform Geofencing Google Maps API)!',
    time: '09.25',
    status: 'read'
  },
  {
    id: 12,
    sender: 'gungkrisna',
    quoted: {
      sender: 'Anda',
      text: 'Dan status kamu sekarang open untuk rekrutmen / project?'
    },
    text: 'Yes! Saat ini aku berstatus OPEN TO WORK untuk Full-Time, Remote, maupun Project Freelance 🚀',
    time: '09.26',
    status: 'read'
  },
  {
    id: 13,
    sender: 'gungkrisna',
    text: 'Kamu bisa download CV lengkapku di desktop atau ketik apa saja di chat ini seputar skill & pengalamanku ya!',
    time: '09.26',
    status: 'read'
  }
];

const SUGGESTED_TOPICS = [
  'Tanya Pengalaman & Karir',
  'Tech Stack & Keahlian',
  'Proyek Tatagih & Lintas',
  'Cara Download Resume CV',
  'Status Rekrutmen & Kontak'
];

export const WhatsAppApp = ({ onLaunchApp }) => {
  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem('wa_chat_history_gk_v2');
    if (saved) {
      try { return JSON.parse(saved); } catch {}
    }
    return INITIAL_MESSAGES;
  });

  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [replyingTo, setReplyingTo] = useState(null);
  const [showMenu, setShowMenu] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [showAttachmentMenu, setShowAttachmentMenu] = useState(false);
  const [callModal, setCallModal] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [showScrollBottom, setShowScrollBottom] = useState(false);

  const chatBodyRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    localStorage.setItem('wa_chat_history_gk_v2', JSON.stringify(messages));
  }, [messages]);

  const scrollToBottom = (smooth = true) => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTo({
        top: chatBodyRef.current.scrollHeight,
        behavior: smooth ? 'smooth' : 'auto'
      });
    }
  };

  useEffect(() => {
    scrollToBottom(false);
  }, []);

  const handleScroll = () => {
    if (!chatBodyRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = chatBodyRef.current;
    if (scrollHeight - scrollTop - clientHeight > 120) {
      setShowScrollBottom(true);
    } else {
      setShowScrollBottom(false);
    }
  };

  const getCurrentTime = () => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${hours}.${minutes}`;
  };

  const generateBotReply = (userMsg) => {
    const lower = userMsg.toLowerCase();

    if (lower.includes('tatagih') || lower.includes('tagihan') || lower.includes('fintech') || lower.includes('langganan')) {
      return 'Tatagih adalah aplikasi manajemen langganan dan finansial cerdas yang kubangun dengan React, Node.js, dan analitik visual. Kamu bisa buka langsung shortcut Tatagih.exe di desktop untuk mencoba demonya!';
    }

    if (lower.includes('temuin') || lower.includes('maps') || lower.includes('geofencing') || lower.includes('hilang')) {
      return 'Temuin merupakan platform crowdsourcing pencarian barang hilang berbasis geofencing Google Maps API. Dilengkapi sistem verifikasi kepemilikan dan chat terenkripsi.';
    }

    if (lower.includes('lintas') || lower.includes('clipboard') || lower.includes('phone') || lower.includes('companion')) {
      return 'Lintas adalah Phone-to-PC Companion Utility. Fitur unggulannya adalah sinkronisasi clipboard dua arah tanpa internet, kirim file instan lewat Wi-Fi lokal, dan integrasi notifikasi.';
    }

    if (lower.includes('neurofly') || lower.includes('pong') || lower.includes('ai') || lower.includes('drosophila')) {
      return 'NeuroFly mengintegrasikan neural connectome lalat buah (Drosophila) dengan game Pong klasik. Membuktikan bagaimana jaringan saraf biologis dapat mengendalikan respons real-time!';
    }

    if (lower.includes('proyek') || lower.includes('project') || lower.includes('portfolio') || lower.includes('karya') || lower.includes('aplikasi')) {
      const replies = [
        'Proyek unggulanku meliputi: 1) Tatagih (Fintech), 2) Temuin (Crowdsourcing Maps), 3) Lintas (Phone-to-PC), dan 4) Makalah AI Generator. Semuanya bisa kamu buka via icon di Desktop atau Google Chrome di sini!',
        'Setiap proyek di portofolio ini dirancang dengan standar industri: TypeScript untuk type-safety, clean architecture, automated testing, dan UI responsif.',
        'Kamu bisa melihat preview detail dan kode masing-masing proyek di File Explorer folder "Projects" gung!'
      ];
      return replies[Math.floor(Math.random() * replies.length)];
    }

    if (lower.includes('flutter') || lower.includes('dart') || lower.includes('mobile') || lower.includes('react native') || lower.includes('android') || lower.includes('ios')) {
      return 'Di ranah mobile, aku terbiasa menggunakan Flutter (Dart) dengan arsitektur BLoC / Riverpod, serta React Native. Berpengalaman mengintegrasikan native SDKs, background services, dan offline-first caching.';
    }

    if (lower.includes('tech stack') || lower.includes('skill') || lower.includes('bahasa') || lower.includes('framework') || lower.includes('keahlian')) {
      return `Keahlian utamaku meliputi:\n• Mobile: ${RECRUITER_SUMMARY.topSkills.slice(0, 3).join(', ')}\n• Frontend: React.js, Next.js 14, TypeScript, TailwindCSS\n• Backend & Database: Node.js, Go/Golang, PostgreSQL, MongoDB, Docker`;
    }

    if (lower.includes('backend') || lower.includes('database') || lower.includes('node') || lower.includes('golang') || lower.includes('postgres') || lower.includes('api')) {
      return 'Untuk backend, aku menguasai Node.js (Express/NestJS).';
    }

    if (lower.includes('pengalaman') || lower.includes('karir') || lower.includes('kuliah') || lower.includes('pendidikan') || lower.includes('lulusan') || lower.includes('ipk')) {
      return `Aku memiliki ${RECRUITER_SUMMARY.experienceYears} pengalaman sebagai Full-Stack & Mobile Developer. Lulusan S1 Teknik Informatika (IPK 3.90).`;
    }

    if (lower.includes('cv') || lower.includes('resume') || lower.includes('download cv') || lower.includes('berkas')) {
      return `Kamu bisa download Curriculum Vitae (CV) terbaruku langsung lewat tombol di aplikasi "Recruiter Hub" atau buka file "README_RECRUITER.txt" di Notepad desktop! Mau aku bantu bukakan aplikasinya?`;
    }

    if (lower.includes('rekrut') || lower.includes('hire') || lower.includes('kerja') || lower.includes('loker') || lower.includes('gaji') || lower.includes('kontak') || lower.includes('email') || lower.includes('hubungi') || lower.includes('wa')) {
      return `Aku sangat terbuka untuk tawaran kerja Full-Time, Remote, maupun Project Freelance! Kamu bisa hubungi aku via email di ${INITIAL_USER.email} atau WhatsApp resmi di ${INITIAL_USER.phone}.`;
    }

    if (lower.includes('windows') || lower.includes('website') || lower.includes('bikin pake apa') || lower.includes('portofoliomu') || lower.includes('tampilan')) {
      return 'Portofolio Windows 11 ini kubangun dari nol menggunakan React 19 + Vite dan Vanilla CSS. Dilengkapi draggable & resizable window manager, dynamic taskbar, start menu, system tray, serta web apps fungsional!';
    }

    if (lower.includes('halo') || lower.includes('hi') || lower.includes('hai') || lower.includes('p') || lower.includes('oi') || lower.includes('gung') || lower.includes('krisna') || lower.includes('salam')) {
      return `Halo! Senang bisa terhubung denganmu. Ada hal tertentu seputar proyek atau skill yang ingin kamu ketahui lebih detail?`;
    }

    if (lower.includes('keren') || lower.includes('mantap') || lower.includes('hebat') || lower.includes('bagus') || lower.includes('wow') || lower.includes('suka')) {
      return 'Terima kasih banyak atas apresiasinya! Semoga portofolio ini memberikan gambaran jelas mengenai standar kualitas dan dedikasi kodingku 🙌';
    }

    const defaultReplies = [
      'Pertanyaan yang menarik! Sebagai Full-Stack & Mobile Developer, aku selalu memprioritaskan clean code, performa andal, dan user experience yang memukau.',
      'Boleh banget! Jangan ragu jelajahi aplikasi lainnya di Desktop seperti Projects Showcase, Terminal, atau Recruiter Hub ya.',
      `Kalau ada tawaran kolaborasi atau project, kamu juga bisa langsung email ke ${INITIAL_USER.email} ya!`,
      'Siap! Ada aspek teknis atau fitur lain dari proyekku yang ingin kita diskusikan?'
    ];
    return defaultReplies[Math.floor(Math.random() * defaultReplies.length)];
  };

  const handleSendMessage = (textToSend) => {
    const text = (typeof textToSend === 'string' ? textToSend : inputText).trim();
    if (!text) return;

    playWhatsAppSentSound();

    const newMsgId = Date.now();
    const userMsg = {
      id: newMsgId,
      sender: 'me',
      text,
      time: getCurrentTime(),
      status: 'sent',
      quoted: replyingTo ? {
        sender: replyingTo.sender === 'me' ? 'Anda' : 'Gungkrisna',
        text: replyingTo.text
      } : null
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setReplyingTo(null);
    setShowEmojiPicker(false);
    setShowAttachmentMenu(false);

    setTimeout(() => {
      scrollToBottom(true);
    }, 50);

    setTimeout(() => {
      setMessages((prev) => prev.map(m => m.id === newMsgId ? { ...m, status: 'delivered' } : m));
    }, 350);

    setTimeout(() => {
      setMessages((prev) => prev.map(m => m.id === newMsgId ? { ...m, status: 'read' } : m));
    }, 750);

    setTimeout(() => {
      setIsTyping(true);
      scrollToBottom(true);

      const typingDuration = 1000 + Math.random() * 800;
      setTimeout(() => {
        setIsTyping(false);
        const botReply = generateBotReply(text);
        
        playWhatsAppReceivedSound();

        const botMsg = {
          id: Date.now() + 1,
          sender: 'gungkrisna',
          text: botReply,
          time: getCurrentTime(),
          status: 'read'
        };

        setMessages((prev) => [...prev, botMsg]);
        setTimeout(() => {
          scrollToBottom(true);
        }, 50);
      }, typingDuration);
    }, 900);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleResetChat = () => {
    playClickSound();
    setMessages(INITIAL_MESSAGES);
    localStorage.removeItem('wa_chat_history_gk_v2');
    setShowMenu(false);
  };

  const handleStartCall = (type) => {
    playClickSound();
    setCallModal(type);
    setTimeout(() => {
      setTimeout(() => {
        setCallModal(null);
      }, 4000);
    }, 100);
  };

  const handleSelectEmoji = (emoji) => {
    playClickSound();
    setInputText((prev) => prev + emoji);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const filteredMessages = searchQuery.trim()
    ? messages.filter(m => m.text.toLowerCase().includes(searchQuery.toLowerCase()))
    : messages;

  return (
    <div className="wa-container" onClick={() => {
      if (showMenu) setShowMenu(false);
      if (showEmojiPicker) setShowEmojiPicker(false);
      if (showAttachmentMenu) setShowAttachmentMenu(false);
    }}>
      <div className="wa-header">
        <div className="wa-header-left" onClick={() => {
          playClickSound();
          if (onLaunchApp) onLaunchApp('recruiter');
        }} title="Lihat Profil Gungkrisna">
          <div className="wa-avatar-wrap">
            <img 
              src="/avatars/gungkrisna_avatar.svg" 
              alt="Gungkrisna" 
              className="wa-avatar-img"
            />
          </div>
          <div className="wa-header-info">
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span className="wa-header-name">Gungkrisna</span>
              <span style={{
                fontSize: '10px',
                backgroundColor: 'rgba(34, 197, 94, 0.2)',
                color: '#4ade80',
                padding: '1px 6px',
                borderRadius: '8px',
                border: '1px solid rgba(34, 197, 94, 0.4)',
                fontWeight: 600
              }}>
                Developer
              </span>
            </div>
            <span className={`wa-header-status ${isTyping ? 'typing' : ''}`}>
              {isTyping ? 'sedang mengetik...' : 'online (Open to Work)'}
            </span>
          </div>
        </div>

        <div className="wa-header-actions">
          {isSearching ? (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: '#2a3942',
              borderRadius: '8px',
              padding: '2px 8px',
              marginRight: '8px'
            }}>
              <Search size={16} color="#8696a0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari dalam chat..."
                autoFocus
                style={{
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                  color: '#fff',
                  fontSize: '13px',
                  padding: '4px 6px',
                  width: '140px'
                }}
              />
              <button
                onClick={() => {
                  setSearchQuery('');
                  setIsSearching(false);
                }}
                style={{ background: 'none', border: 'none', color: '#8696a0', cursor: 'pointer', padding: 2 }}
              >
                <X size={14} />
              </button>
            </div>
          ) : (
            <button 
              className="wa-icon-btn" 
              title="Cari Pesan"
              onClick={() => {
                playClickSound();
                setIsSearching(true);
              }}
            >
              <Search size={20} />
            </button>
          )}

          <button 
            className="wa-icon-btn" 
            title="Panggilan Video"
            onClick={() => handleStartCall('video')}
          >
            <Video size={20} />
          </button>
          
          <button 
            className="wa-icon-btn" 
            title="Panggilan Suara"
            onClick={() => handleStartCall('voice')}
          >
            <Phone size={19} />
          </button>

          <button 
            className="wa-icon-btn" 
            title="Menu Lainnya"
            onClick={(e) => {
              e.stopPropagation();
              playClickSound();
              setShowMenu(!showMenu);
            }}
          >
            <MoreVertical size={20} />
          </button>
        </div>
      </div>

      {showMenu && (
        <div className="wa-menu-dropdown" onClick={(e) => e.stopPropagation()}>
          <div className="wa-menu-item" onClick={() => {
            playClickSound();
            if (onLaunchApp) onLaunchApp('recruiter');
            setShowMenu(false);
          }}>
            <User size={16} /> Buka Recruiter Hub
          </div>
          <div className="wa-menu-item" onClick={() => {
            playClickSound();
            window.open(INITIAL_USER.whatsapp, '_blank');
            setShowMenu(false);
          }}>
            <ExternalLink size={16} /> Hubungi WhatsApp Asli
          </div>
          <div className="wa-menu-item" onClick={handleResetChat}>
            <CornerUpLeft size={16} /> Reset Percakapan
          </div>
        </div>
      )}

      <div 
        className="wa-chat-body" 
        ref={chatBodyRef}
        onScroll={handleScroll}
      >
        <div className="wa-date-pill-container">
          <div className="wa-date-pill">HARI INI</div>
        </div>

        {filteredMessages.map((msg) => {
          const isSent = msg.sender === 'me';
          return (
            <div 
              key={msg.id} 
              className={`wa-message-row ${isSent ? 'sent' : 'received'}`}
            >
              <div className={`wa-bubble ${isSent ? 'sent' : 'received'}`}>
                <div className="wa-bubble-actions">
                  <button 
                    className="wa-bubble-action-btn"
                    title="Balas pesan"
                    onClick={() => {
                      playClickSound();
                      setReplyingTo(msg);
                      if (inputRef.current) inputRef.current.focus();
                    }}
                  >
                    <CornerUpLeft size={13} />
                  </button>
                </div>

                {msg.quoted && (
                  <div className="wa-quoted-container">
                    <div className="wa-quoted-sender">{msg.quoted.sender}</div>
                    <div className="wa-quoted-text">{msg.quoted.text}</div>
                  </div>
                )}

                <span className="wa-message-text">{msg.text}</span>
                
                <span className="wa-message-meta">
                  <span>{msg.time}</span>
                  {isSent && (
                    <span>
                      {msg.status === 'read' ? (
                        <CheckCheck size={15} className="wa-check-blue" />
                      ) : msg.status === 'delivered' ? (
                        <CheckCheck size={15} color="#8696a0" />
                      ) : (
                        <Check size={14} color="#8696a0" />
                      )}
                    </span>
                  )}
                </span>
              </div>
            </div>
          );
        })}

        {isTyping && (
          <div className="wa-message-row received">
            <div className="wa-typing-bubble">
              <span className="wa-typing-dot"></span>
              <span className="wa-typing-dot"></span>
              <span className="wa-typing-dot"></span>
            </div>
          </div>
        )}
      </div>

      {showScrollBottom && (
        <button 
          className="wa-scroll-btn" 
          title="Gulir ke bawah"
          onClick={() => {
            playClickSound();
            scrollToBottom(true);
          }}
        >
          <ChevronDown size={22} />
        </button>
      )}

      {replyingTo && (
        <div className="wa-replying-bar">
          <div className="wa-replying-info">
            <span className="wa-replying-to">
              Membalas {replyingTo.sender === 'me' ? 'Anda' : 'Gungkrisna'}
            </span>
            <span className="wa-replying-content">{replyingTo.text}</span>
          </div>
          <button 
            onClick={() => setReplyingTo(null)}
            style={{ background: 'none', border: 'none', color: '#8696a0', cursor: 'pointer' }}
          >
            <X size={18} />
          </button>
        </div>
      )}

      <div className="wa-quick-topics">
        {SUGGESTED_TOPICS.map((topic, idx) => (
          <button
            key={idx}
            className="wa-topic-chip"
            onClick={() => {
              playClickSound();
              handleSendMessage(topic);
            }}
          >
            {topic}
          </button>
        ))}
      </div>

      {showAttachmentMenu && (
        <div 
          style={{
            position: 'absolute',
            bottom: '70px',
            left: '20px',
            backgroundColor: '#233138',
            borderRadius: '12px',
            padding: '12px',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '12px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
            zIndex: 40,
            border: '1px solid rgba(255,255,255,0.06)'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {[
            { icon: FileText, label: 'Resume CV', color: '#7f66ff', action: () => { if (onLaunchApp) onLaunchApp('recruiter'); } },
            { icon: Image, label: 'Sertifikat', color: '#007bfc', action: () => { if (onLaunchApp) onLaunchApp('photos'); } },
            { icon: BarChart2, label: 'Proyek', color: '#ffbc38', action: () => { if (onLaunchApp) onLaunchApp('chrome', { projectId: 'tatagih' }); } },
            { icon: User, label: 'Kontak', color: '#02a698', action: () => { handleSendMessage('Bisa minta kontak resmi Gungkrisna?'); } }
          ].map((item, i) => (
            <div 
              key={i}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '6px',
                cursor: 'pointer',
                padding: '6px',
                borderRadius: '8px'
              }}
              onClick={() => {
                playClickSound();
                setShowAttachmentMenu(false);
                item.action();
              }}
            >
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                backgroundColor: item.color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff'
              }}>
                <item.icon size={20} />
              </div>
              <span style={{ fontSize: '11px', color: '#d1d7db' }}>{item.label}</span>
            </div>
          ))}
        </div>
      )}

      {showEmojiPicker && (
        <div 
          style={{
            position: 'absolute',
            bottom: '70px',
            left: '50px',
            backgroundColor: '#202c33',
            borderRadius: '10px',
            padding: '12px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
            zIndex: 40,
            border: '1px solid rgba(255,255,255,0.06)',
            display: 'grid',
            gridTemplateColumns: 'repeat(6, 1fr)',
            gap: '8px',
            fontSize: '22px'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {['👋', '🚀', '💻', '✨', '🔥', '👏', '🤝', '💼', '⚡', '💯', '📱', '🛠️', '🎯', '💡', '👍', '😊', '☕', '❤️'].map((emoji, i) => (
            <button
              key={i}
              style={{
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                fontSize: '22px',
                padding: '4px',
                borderRadius: '6px'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              onClick={() => handleSelectEmoji(emoji)}
            >
              {emoji}
            </button>
          ))}
        </div>
      )}

      <div className="wa-footer">
        <button 
          className="wa-icon-btn" 
          title="Lampiran Cepat"
          onClick={(e) => {
            e.stopPropagation();
            playClickSound();
            setShowAttachmentMenu(!showAttachmentMenu);
            setShowEmojiPicker(false);
          }}
        >
          <Paperclip size={22} />
        </button>

        <button 
          className="wa-icon-btn" 
          title="Pilih Emoji"
          onClick={(e) => {
            e.stopPropagation();
            playClickSound();
            setShowEmojiPicker(!showEmojiPicker);
            setShowAttachmentMenu(false);
          }}
        >
          <Smile size={22} />
        </button>

        <div className="wa-input-container">
          <input
            ref={inputRef}
            type="text"
            className="wa-input-field"
            placeholder="Ketik pesan untuk Gungkrisna..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>

        {inputText.trim() ? (
          <button 
            className="wa-send-btn" 
            title="Kirim Pesan"
            onClick={() => handleSendMessage()}
          >
            <Send size={18} />
          </button>
        ) : (
          <button 
            className="wa-icon-btn" 
            title="Pesan Suara"
            onClick={() => {
              playClickSound();
              handleSendMessage('Halo Gung, mau tanya seputar ketersediaan untuk project.');
            }}
          >
            <Mic size={22} />
          </button>
        )}
      </div>

      {callModal && (
        <div className="wa-call-modal">
          <img 
            src="/avatars/gungkrisna_avatar.svg" 
            alt="Gungkrisna" 
            className="wa-call-avatar"
          />
          <div className="wa-call-name">Gungkrisna</div>
          <div className="wa-call-status">
            {callModal === 'video' ? 'Memanggil Panggilan Video...' : 'Memanggil...'} (Sedang dalam sesi koding)
          </div>
          <div className="wa-call-actions">
            <button 
              className="wa-end-call-btn"
              onClick={() => {
                playClickSound();
                setCallModal(null);
              }}
            >
              <PhoneOff size={24} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
