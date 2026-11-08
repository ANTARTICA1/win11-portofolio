import React, { useEffect, useRef, useState } from 'react';
import {
  FileText, Copy, Check, Send, ZoomIn, ZoomOut, Printer, Layers,
  Phone, Mail, UserRoundSearch, GraduationCap, Trophy, Lightbulb,
  Code, SquareTerminal, Radar, Database, Cable, Bug, FolderGit2, Globe, ExternalLink
} from 'lucide-react';
import { playClickSound } from '../../utils/sound';

/* ------------------------------------------------------------------ */
/*  DATA CV — mengikuti CV asli (gambar contoh) + proyek di portfolio  */
/* ------------------------------------------------------------------ */
const CV = {
  name: ['AA NGURAH KRISNA', 'ARTHA WIBAWA'],
  fullName: 'AA Ngurah Krisna Artha Wibawa',
  role: 'Full-Stack Web & Mobile Developer | Cybersecurity',
  photo: '/certificates/foto_krisna.jpg',
  about:
    'An enthusiastic and fast-learning IT student specializing in Full-Stack Web & Mobile Development (Flutter, React, Laravel) with a strong foundation in Cybersecurity. Experienced in building robust commercial mobile apps, RESTful backends, and AI integrations with secure clean architecture. Having a persistent personality, high attention to UI/UX performance, and great time management.',
  contact: {
    phone: '+6282247846546',
    email: 'kresnaartha3@gmail.com',
    linkedin: 'linkedin.com/in/krisnaartha',
    github: 'antartica1',
    whatsapp: 'https://wa.me/6282247846546'
  },
  skills: [
    { name: 'Flutter & Dart', level: 90, icon: Code },
    { name: 'Laravel & PHP', level: 85, icon: Database },
    { name: 'React & Next.js', level: 82, icon: Globe },
    { name: 'Python & FastAPI', level: 78, icon: Code },
    { name: 'Kali Linux & Security', level: 75, icon: Radar },
    { name: 'SQL & Database Arch', level: 80, icon: Database }
  ],
  education: [
    { school: 'SMP Kristen Harapan', detail: 'Junior High School', period: '2018 - 2021' },
    { school: 'SMA Kristen Harapan', detail: 'Senior High School, Science Major', period: '2021- 2024' },
    // Sesuai INITIAL_USER.institution & INITIAL_USER.degree di src/data/fileSystem.js
    { school: 'ITB STIKOM Bali', detail: 'Bachelor\'s Degree, Information Technology', period: 'Currently studying' }
  ],
  awards: [
    {
      title: 'Bronze Medal - INNOPA',
      lines: ['Title: \u201cWind and Solar Power Generator for Fishermen\u2019s Freezers\u201d', 'Year: 2019']
    },
    {
      title: 'Kihajar STEM \u2013 Kemendikbudristek',
      lines: ['Completed national STEM program (Basic Track)', 'Year: 2019']
    },
    {
      title: 'Honorable Mention \u2013 OSPC',
      lines: [
        'Title: \u201cStall in Car: Utilizing Non-Cargo Vehicles as Mobile Shops During the COVID-19 Pandemic\u201d',
        'Year: 2023'
      ]
    }
  ],
  // Diambil dari stack proyek-proyek yang ada di portfolio (src/data/projectsData.js)
  techStack: [
    'Flutter & Dart', 'PHP', 'Laravel', 'Python', 'FastAPI', 'C++ (Win32 API)',
    'JavaScript', 'Tailwind CSS', 'MySQL', 'SQLite', 'Gemini API', 'Telegram Bot API'
  ],
  links: [
    { label: 'github.com/ANTARTICA1', href: 'https://github.com/ANTARTICA1' },
    { label: 'portofolio.krisnaartha.my.id', href: 'https://portofolio.krisnaartha.my.id' }
  ],
  // Ringkasan (terjemahan) dari deskripsi proyek di src/data/projectsData.js
  projects: [
    {
      name: 'Lintas',
      tagline: 'Cross-Device Productivity Ecosystem',
      desc: 'Connects an Android phone and a Windows PC over local Wi-Fi for remote trackpad, instant file transfer, and automatic PC lock.',
      stack: 'Flutter & Dart \u00b7 C++ Win32 API \u00b7 WebSocket \u00b7 SHA-256',
      url: 'https://github.com/ANTARTICA1/lintas-flutter'
    },
    {
      name: 'SIGAP',
      tagline: 'Sistem Gerak Aman dari Pencurian',
      desc: 'Anti-theft smartphone security app based on motion & charger sensors, with continuous alarm, 100% volume watchdog, photo and GPS evidence.',
      stack: 'Flutter \u00b7 Dart \u00b7 Sensors Plus \u00b7 Camera \u00b7 Geolocator',
      url: 'https://github.com/ANTARTICA1/sigap-flutter'
    },
    {
      name: 'OnlyUs',
      tagline: 'Bilateral Proximity-Locked Digital Vault',
      desc: 'Private two-person vault that stays locked and only opens when both smartphones are close to each other.',
      stack: 'Flutter \u00b7 Dart \u00b7 Proximity Sensor API \u00b7 Secure Storage',
      url: 'https://github.com/ANTARTICA1/Onlyus'
    },
    {
      name: 'NenaCare',
      tagline: 'AI-Powered K3 Incident Reporting & Monitoring',
      desc: 'Workplace safety (K3) system with Gemini AI risk analysis and Telegram Bot for incident reporting and real-time monitoring.',
      stack: 'PHP (OOP) \u00b7 MySQL \u00b7 Gemini API \u00b7 Telegram Bot API',
      url: 'https://github.com/ANTARTICA1/NenaCare'
    },
    {
      name: 'Tatagih',
      tagline: 'Smart Subscription Manager & AI Financial Assistant',
      desc: 'Web subscription manager with a Gemini AI assistant to track digital bills, detect wasteful spending, and manage split bills.',
      stack: 'Laravel 13 \u00b7 Tailwind CSS \u00b7 MySQL \u00b7 Gemini API',
      url: 'https://github.com/ANTARTICA1/Subscription-Guard'
    },
    {
      name: 'Temuin',
      tagline: 'QR Code-Based Lost & Found Platform',
      desc: 'Lost item tracker using unique QR codes, with GPS location snapshots, photo evidence, and real-time owner notifications.',
      stack: 'Flutter \u00b7 PHP Native \u00b7 MySQL \u00b7 Midtrans Snap',
      url: 'https://github.com/ANTARTICA1/temuin-flutter'
    },
    {
      name: 'Bingkai',
      tagline: 'Local-First Photo Gallery',
      desc: 'Local photo gallery to tidy up thousands of photos with swipe curation, duplicate detection, and phone / gamepad remote control.',
      stack: 'Python \u00b7 FastAPI \u00b7 SQLite \u00b7 Alpine.js',
      url: 'https://github.com/ANTARTICA1/bingkai-app'
    },
    {
      name: 'ITB STIKOM Bali TheoTown',
      tagline: 'Educational Building Plugin for TheoTown',
      desc: 'Custom TheoTown plugin featuring the ITB STIKOM Bali campus in 2.5D isometric pixel art with city education simulation.',
      stack: 'TheoTown Plugin API \u00b7 JSON \u00b7 Isometric Pixel Art',
      url: 'https://github.com/ANTARTICA1/PLUGIN-STIKOM-BALI-THEOTOWN'
    }
  ]
};

const PAGE_W = 794;
const PAGE_H = 1123;
const PAGE_GAP = 24;
const PAGE_COUNT = 2;

/* ------------------------------------------------------------------ */
/*  STYLE — disimpan sebagai string agar bisa dipakai ulang saat print */
/* ------------------------------------------------------------------ */
const CV_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@700&family=Open+Sans:wght@400;600;700&display=swap');
.cv-doc{width:${PAGE_W}px;display:flex;flex-direction:column;gap:${PAGE_GAP}px;font-family:'Open Sans','Segoe UI',Arial,sans-serif;color:#2b2b2b;}
.cv-doc *{box-sizing:border-box;}
.cv-page{position:relative;width:${PAGE_W}px;height:${PAGE_H}px;background:#fff;overflow:hidden;display:grid;grid-template-columns:41px 304px 1fr;box-shadow:0 20px 45px rgba(0,0,0,.45),0 4px 12px rgba(0,0,0,.25);-webkit-print-color-adjust:exact;print-color-adjust:exact;}
.cv-deco{position:absolute;pointer-events:none;z-index:0;}
.cv-side{grid-column:2;position:relative;background:#cfeaf2;padding-top:125px;z-index:1;}
.cv-side.cv-side--p2{padding-top:56px;}
.cv-main{grid-column:3;position:relative;padding:40px 14px 0 37px;z-index:1;}
.cv-main.cv-main--p2{padding-top:44px;}

.cv-photo{display:block;margin-left:28px;width:249px;height:305px;border-radius:125px 125px 0 0;overflow:hidden;background:#3aa0c8;}
.cv-photo img{width:100%;height:100%;object-fit:cover;object-position:50% 30%;transform:scale(1.12);transform-origin:50% 40%;display:block;}

.cv-sec-head{position:relative;display:flex;align-items:center;height:66px;}
.cv-badge{position:absolute;left:0;top:0;width:66px;height:66px;z-index:2;}
.cv-sec-bar{flex:1;height:40px;background:#a9d7e6;display:flex;align-items:center;justify-content:space-between;font-weight:700;color:#1f1f1f;}
.cv-sec-bar svg{color:#4a4a4a;}
.cv-main .cv-sec-head{margin-left:-8px;margin-right:33px;}
.cv-main .cv-sec-bar{margin-left:33px;padding:0 12px 0 37px;font-size:16.5px;}
.cv-side .cv-sec-head{margin-left:-41px;margin-right:25px;}
.cv-side .cv-sec-bar{margin-left:59px;padding:0 10px 0 32px;font-size:16.5px;}

.cv-name{font-family:'Libre Baskerville',Georgia,'Times New Roman',serif;font-weight:700;font-size:25px;line-height:1.12;letter-spacing:1px;color:#141414;text-align:center;margin:0 22px 0 0;}
.cv-name-line{height:2px;background:#a9d7e6;margin:13px 33px 0 -3px;}
.cv-role{text-align:center;font-weight:700;font-size:17px;color:#1f1f1f;margin:12px 33px 6px 0;}

.cv-text{font-size:14.5px;line-height:1.8;text-align:justify;color:#333;margin:12px 0 26px;}

.cv-list{list-style:none;margin:10px 0 22px;padding:0;}
.cv-item{position:relative;padding-left:59px;margin-bottom:13px;}
.cv-item::before{content:'';position:absolute;left:40px;top:7px;width:13px;height:13px;border-radius:50%;background:#a9d7e6;}
.cv-item-title{font-weight:700;font-size:18.5px;line-height:1.35;color:#141414;}
.cv-item-sub{font-size:14.5px;line-height:1.65;color:#3a3a3a;padding-right:6px;}
.cv-awards{margin-bottom:0;}
.cv-awards .cv-item{margin-bottom:13px;}
.cv-awards .cv-item-title{font-size:17.5px;}
.cv-awards .cv-item-sub{font-size:14px;line-height:1.65;}

.cv-contact{list-style:none;margin:10px 0 14px;padding:0 0 0 27px;}
.cv-contact li{display:flex;align-items:center;gap:12px;height:36px;font-size:14px;color:#2b2b2b;}
.cv-contact a{color:inherit;text-decoration:none;}
.cv-ico{width:22px;height:22px;border-radius:50%;background:#2f4a7a;color:#fff;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;}
.cv-ico.cv-ico--sq{border-radius:4px;}

.cv-skills{list-style:none;margin:6px 0 0;padding:0 0 0 52px;}
.cv-skill{width:203px;margin-bottom:17px;}
.cv-skill-top{display:flex;align-items:center;justify-content:space-between;font-size:14px;color:#2b2b2b;height:22px;}
.cv-skill-top svg{color:#6b6b6b;}
.cv-bar{height:10px;border-radius:6px;background:#5a4b44;overflow:hidden;margin-top:4px;}
.cv-bar span{display:block;height:100%;background:#a9d7e6;border-radius:6px 0 0 6px;}

.cv-chips{display:flex;flex-wrap:wrap;gap:7px;padding:8px 22px 0 27px;margin-bottom:22px;}
.cv-chip{font-size:12.5px;padding:4px 10px;border-radius:14px;background:#fff;color:#2b2b2b;border:1px solid #a9d7e6;}

.cv-projects{margin-bottom:0;}
.cv-projects .cv-item{margin-bottom:11px;padding-right:6px;}
.cv-projects .cv-item::before{top:6px;}
.cv-proj-title{display:flex;align-items:center;gap:6px;font-weight:700;font-size:16px;line-height:1.35;color:#141414;text-decoration:none;}
.cv-proj-title svg{color:#5b8fa3;flex-shrink:0;}
.cv-proj-tag{font-size:12.5px;font-style:italic;font-weight:600;color:#3f8aa5;line-height:1.4;}
.cv-proj-desc{font-size:12.5px;line-height:1.5;color:#333;margin-top:2px;}
.cv-proj-stack{font-size:11.5px;color:#666;margin-top:2px;line-height:1.4;}
`;

const PRINT_CSS = `
@page{size:A4;margin:0;}
html,body{margin:0;padding:0;background:#fff;}
.cv-doc{transform:none !important;gap:0 !important;}
.cv-page{box-shadow:none !important;break-after:page;page-break-after:always;}
.cv-page:last-child{break-after:auto;page-break-after:auto;}
`;

/* ------------------------------------------------------------------ */
/*  ORNAMEN                                                            */
/* ------------------------------------------------------------------ */
const TechBadge = () => (
  <svg className="cv-badge" viewBox="0 0 66 66" aria-hidden="true">
    <circle cx="33" cy="33" r="31" fill="#ffffff" stroke="#a9d7e6" strokeWidth="1.5" />
    <circle cx="33" cy="33" r="26" fill="none" stroke="#7fc3da" strokeWidth="3.5" strokeDasharray="14 4 3 4" />
    <circle cx="33" cy="33" r="19" fill="#e4f4f9" stroke="#a9d7e6" strokeWidth="1" />
    <circle cx="33" cy="33" r="13" fill="none" stroke="#7fc3da" strokeWidth="2" strokeDasharray="4 2.5" />
    <circle cx="33" cy="33" r="7" fill="#ffffff" stroke="#7fc3da" strokeWidth="1.5" />
    <circle cx="33" cy="33" r="3" fill="#7fc3da" />
    <path d="M4 22h8l4 4M4 44h8l4-4M62 22h-6M62 44h-6" stroke="#a9d7e6" strokeWidth="1.2" fill="none" />
  </svg>
);

const SectionHead = ({ title, icon: Icon }) => (
  <div className="cv-sec-head">
    <TechBadge />
    <div className="cv-sec-bar">
      <span>{title}</span>
      {Icon && <Icon size={24} strokeWidth={1.8} />}
    </div>
  </div>
);

const LinkedInIcon = () => (
  <span className="cv-ico cv-ico--sq" style={{ fontSize: 11, fontWeight: 700, fontFamily: 'Arial, sans-serif' }}>in</span>
);

const GithubIcon = () => (
  <span className="cv-ico">
    <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  </span>
);

const CircuitTopLeft = () => (
  <svg className="cv-deco" style={{ left: 0, top: 0 }} width="380" height="120" viewBox="0 0 380 120" aria-hidden="true">
    <g stroke="#d6dde2" strokeWidth="2" fill="none">
      <path d="M0 30h60l20 20h90l18-18h70" />
      <path d="M0 60h40l25 25h120" />
      <path d="M120 0v20l15 15h60" />
      <path d="M210 0v14l14 14h150" />
      <path d="M0 95h20l15-15" />
    </g>
    <g fill="#ffffff" stroke="#d6dde2" strokeWidth="2">
      <circle cx="258" cy="32" r="5" />
      <circle cx="185" cy="85" r="5" />
      <circle cx="195" cy="35" r="4" />
      <circle cx="374" cy="28" r="4" />
      <circle cx="35" cy="80" r="4" />
    </g>
  </svg>
);

const CircuitRight = ({ top = 400 }) => (
  <svg className="cv-deco" style={{ right: 0, top }} width="200" height="220" viewBox="0 0 200 220" aria-hidden="true">
    <g stroke="#d6dde2" strokeWidth="2" fill="none">
      <path d="M200 20h-60l-30 30v60" />
      <path d="M200 60h-40l-20 20v90l-30 30" />
      <path d="M200 110h-25v80" />
      <path d="M150 0v30" />
    </g>
    <g fill="#ffffff" stroke="#d6dde2" strokeWidth="2">
      <circle cx="110" cy="115" r="5" />
      <circle cx="80" cy="200" r="5" />
      <circle cx="175" cy="195" r="5" />
      <circle cx="140" cy="80" r="9" />
      <circle cx="140" cy="80" r="3" />
    </g>
  </svg>
);

const Hexagons = () => {
  const hex = (cx, cy, r) => {
    const pts = Array.from({ length: 6 }, (_, i) => {
      const a = (Math.PI / 3) * i + Math.PI / 6;
      return `${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`;
    });
    return pts.join(' ');
  };
  return (
    <svg className="cv-deco" style={{ right: 0, bottom: 0 }} width="330" height="360" viewBox="0 0 330 360" aria-hidden="true">
      <g stroke="#e1e6ea" strokeWidth="1.6" fill="none">
        <polygon points={hex(250, 70, 62)} />
        <polygon points={hex(196, 165, 62)} />
        <polygon points={hex(304, 165, 62)} />
        <polygon points={hex(250, 260, 62)} />
        <polygon points={hex(142, 260, 62)} />
        <polygon points={hex(196, 355, 62)} />
        <polygon points={hex(304, 355, 62)} />
      </g>
    </svg>
  );
};

const SideRails = ({ top = 740, height = 330 }) => (
  <svg className="cv-deco" style={{ left: 0, top, zIndex: 0 }} width="304" height={height} viewBox={`0 0 304 ${height}`} aria-hidden="true">
    <g stroke="#9ab9c4" strokeWidth="1.3" fill="none">
      <path d={`M18 0v${height - 20}h14`} />
      <path d={`M285 30v${height - 70}`} />
    </g>
    <g fill="#9ab9c4">
      <circle cx="18" cy="0" r="3" />
      <circle cx="285" cy="30" r="3" />
      <circle cx={285} cy={height - 40} r="3" />
      <circle cx="32" cy={height - 20} r="3" />
    </g>
  </svg>
);

/* ------------------------------------------------------------------ */
/*  KOMPONEN UTAMA                                                     */
/* ------------------------------------------------------------------ */
export const RecruiterHubApp = ({ onOpenApp }) => {
  const [zoom, setZoom] = useState(100);
  const [copied, setCopied] = useState(false);
  const viewportRef = useRef(null);
  const sheetRef = useRef(null);

  // Sesuaikan zoom awal dengan lebar jendela supaya CV langsung terlihat utuh
  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const fit = Math.floor(((el.clientWidth - 40) / PAGE_W) * 20) * 5;
    setZoom(Math.max(50, Math.min(100, fit)));
  }, []);

  const handleZoomIn = () => {
    playClickSound();
    setZoom((prev) => Math.min(prev + 10, 150));
  };

  const handleZoomOut = () => {
    playClickSound();
    setZoom((prev) => Math.max(prev - 10, 50));
  };

  const handleResetZoom = () => {
    playClickSound();
    setZoom(100);
  };

  const handleCopySummary = () => {
    playClickSound();
    const summaryText = [
      `${CV.fullName} - ${CV.role}`,
      `Phone/WhatsApp: ${CV.contact.phone}`,
      `Email: ${CV.contact.email}`,
      `LinkedIn: ${CV.contact.linkedin}`,
      `GitHub: github.com/${CV.contact.github}`,
      '',
      CV.about,
      '',
      `Skills: ${CV.skills.map((s) => s.name).join(', ')}`,
      `Projects: ${CV.projects.map((p) => p.name).join(', ')}`
    ].join('\n');
    navigator.clipboard.writeText(summaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Buka CV di jendela baru lalu panggil dialog print (pilih "Save as PDF")
  const handleDownloadCV = () => {
    playClickSound();
    const node = sheetRef.current;
    if (!node) return;
    const printWin = window.open('', '_blank');
    if (!printWin) return;
    printWin.document.write(`<!doctype html><html><head><meta charset="utf-8" />
<title>CV - ${CV.fullName}</title>
<base href="${window.location.origin}/" />
<style>${CV_CSS}${PRINT_CSS}</style></head><body>${node.outerHTML}</body></html>`);
    printWin.document.close();

    const images = Array.from(printWin.document.images);
    const imagesReady = Promise.all(
      images.map((img) => (img.complete ? null : new Promise((res) => { img.onload = res; img.onerror = res; })))
    );
    const fontsReady = printWin.document.fonts ? printWin.document.fonts.ready : Promise.resolve();
    Promise.all([imagesReady, fontsReady]).then(() => {
      setTimeout(() => {
        printWin.focus();
        printWin.print();
      }, 250);
    });
  };

  const scale = zoom / 100;

  const toolbarBtn = {
    background: 'transparent',
    border: 'none',
    color: '#cbd5e1',
    padding: '4px 6px',
    cursor: 'pointer',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center'
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      width: '100%',
      backgroundColor: '#1e1f29',
      color: '#f8fafc',
      fontFamily: 'Segoe UI, -apple-system, BlinkMacSystemFont, Roboto, sans-serif',
      overflow: 'hidden'
    }}>
      <style>{CV_CSS}</style>

      {/* ---------------- Toolbar ---------------- */}
      <div style={{
        height: '48px',
        backgroundColor: '#161722',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 16px',
        flexShrink: 0,
        gap: '12px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', minWidth: 0 }}>
          <div style={{
            width: '28px',
            height: '28px',
            borderRadius: '6px',
            backgroundColor: '#dc2626',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            flexShrink: 0
          }}>
            <FileText size={16} />
          </div>
          <div style={{ minWidth: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '13px', fontWeight: 600, color: '#f1f5f9', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              CV_AA_Ngurah_Krisna_Artha_Wibawa.pdf
            </span>
            <span style={{
              fontSize: '11px',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              color: '#94a3b8',
              padding: '2px 6px',
              borderRadius: '4px',
              whiteSpace: 'nowrap'
            }}>
              {PAGE_COUNT} Halaman (A4)
            </span>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.06)',
            borderRadius: '6px',
            padding: '2px 4px',
            gap: '2px'
          }}>
            <button onClick={handleZoomOut} title="Perkecil" style={toolbarBtn}>
              <ZoomOut size={14} />
            </button>
            <button
              onClick={handleResetZoom}
              title="Reset Zoom"
              style={{ ...toolbarBtn, color: '#e2e8f0', fontSize: '11.5px', fontWeight: 600, minWidth: '40px', justifyContent: 'center' }}
            >
              {zoom}%
            </button>
            <button onClick={handleZoomIn} title="Perbesar" style={toolbarBtn}>
              <ZoomIn size={14} />
            </button>
          </div>

          <button
            onClick={handleCopySummary}
            title="Salin ringkasan CV"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              color: '#e2e8f0',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: '6px',
              padding: '6px 10px',
              fontSize: '12px',
              fontWeight: 500,
              cursor: 'pointer'
            }}
          >
            {copied ? <Check size={14} color="#22c55e" /> : <Copy size={14} />}
            <span>{copied ? 'Tersalin' : 'Salin Info'}</span>
          </button>

          <button
            onClick={handleDownloadCV}
            title="Simpan sebagai PDF / Cetak"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: '#0078d4',
              color: '#ffffff',
              border: 'none',
              borderRadius: '6px',
              padding: '6px 12px',
              fontSize: '12px',
              fontWeight: 600,
              cursor: 'pointer'
            }}
          >
            <Printer size={14} />
            <span>Unduh CV (PDF)</span>
          </button>

          {onOpenApp && (
            <button
              onClick={() => {
                playClickSound();
                onOpenApp('chrome', { projectId: 'motto' });
              }}
              title="Buka Koleksi Moto & Visi di Google Chrome"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                background: 'linear-gradient(135deg, #0284c7, #6366f1)',
                color: '#ffffff',
                border: 'none',
                borderRadius: '6px',
                padding: '6px 12px',
                fontSize: '12px',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              <Layers size={14} />
              <span>Vision Deck (Motto)</span>
            </button>
          )}

          <a
            href={CV.contact.whatsapp}
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: '#22c55e',
              color: '#ffffff',
              borderRadius: '6px',
              padding: '6px 12px',
              fontSize: '12px',
              fontWeight: 600,
              textDecoration: 'none',
              cursor: 'pointer'
            }}
          >
            <Send size={14} />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>

      {/* ---------------- Dokumen ---------------- */}
      <div
        ref={viewportRef}
        style={{
          flex: 1,
          overflow: 'auto',
          padding: '24px 16px',
          backgroundColor: '#282936'
        }}
      >
        <div style={{
          width: `${PAGE_W * scale}px`,
          height: `${(PAGE_H * PAGE_COUNT + PAGE_GAP * (PAGE_COUNT - 1)) * scale}px`,
          margin: '0 auto'
        }}>
          <div
            ref={sheetRef}
            className="cv-doc"
            style={{ transform: `scale(${scale})`, transformOrigin: 'top left' }}
          >
            {/* ======================= HALAMAN 1 ======================= */}
            <section className="cv-page">
              <CircuitTopLeft />
              <CircuitRight top={420} />
              <Hexagons />

              <aside className="cv-side">
                <SideRails top={740} height={350} />
                <div className="cv-photo">
                  <img src={CV.photo} alt={CV.fullName} />
                </div>

                <div style={{ marginTop: 32 }}>
                  <SectionHead title="Contact" icon={Phone} />
                  <ul className="cv-contact">
                    <li>
                      <span className="cv-ico"><Phone size={12} fill="#fff" strokeWidth={0} /></span>
                      <a href={CV.contact.whatsapp}>{CV.contact.phone}</a>
                    </li>
                    <li>
                      <span className="cv-ico"><Mail size={12} /></span>
                      <a href={`mailto:${CV.contact.email}`}>{CV.contact.email}</a>
                    </li>
                    <li>
                      <LinkedInIcon />
                      <a href={`https://${CV.contact.linkedin}`}>{CV.contact.linkedin}</a>
                    </li>
                    <li>
                      <GithubIcon />
                      <a href={`https://github.com/${CV.contact.github}`}>{CV.contact.github}</a>
                    </li>
                  </ul>
                </div>

                <SectionHead title="Skills" icon={Lightbulb} />
                <ul className="cv-skills">
                  {CV.skills.map(({ name, level, icon: Icon }) => (
                    <li key={name} className="cv-skill">
                      <div className="cv-skill-top">
                        <span>{name}</span>
                        <Icon size={15} />
                      </div>
                      <div className="cv-bar"><span style={{ width: `${level}%` }} /></div>
                    </li>
                  ))}
                </ul>
              </aside>

              <main className="cv-main">
                <h1 className="cv-name">
                  {CV.name[0]}<br />{CV.name[1]}
                </h1>
                <div className="cv-name-line" />
                <div className="cv-role">{CV.role}</div>

                <SectionHead title="About Me" icon={UserRoundSearch} />
                <p className="cv-text">{CV.about}</p>

                <SectionHead title="Education" icon={GraduationCap} />
                <ul className="cv-list">
                  {CV.education.map((edu) => (
                    <li key={edu.school} className="cv-item">
                      <div className="cv-item-title">{edu.school}</div>
                      <div className="cv-item-sub">{edu.detail}</div>
                      <div className="cv-item-sub">{edu.period}</div>
                    </li>
                  ))}
                </ul>

                <SectionHead title="Awards" icon={Trophy} />
                <ul className="cv-list cv-awards">
                  {CV.awards.map((award) => (
                    <li key={award.title} className="cv-item">
                      <div className="cv-item-title">{award.title}</div>
                      {award.lines.map((line) => (
                        <div key={line} className="cv-item-sub">{line}</div>
                      ))}
                    </li>
                  ))}
                </ul>
              </main>
            </section>

            {/* ======================= HALAMAN 2 ======================= */}
            <section className="cv-page">
              <CircuitTopLeft />
              <CircuitRight top={560} />
              <Hexagons />

              <aside className="cv-side cv-side--p2">
                <SideRails top={620} height={460} />
                <SectionHead title="Tech Stack" icon={Code} />
                <div className="cv-chips">
                  {CV.techStack.map((tech) => (
                    <span key={tech} className="cv-chip">{tech}</span>
                  ))}
                </div>

                <SectionHead title="Links" icon={Globe} />
                <ul className="cv-contact">
                  {CV.links.map((link) => (
                    <li key={link.href}>
                      <span className="cv-ico"><Globe size={12} /></span>
                      <a href={link.href}>{link.label}</a>
                    </li>
                  ))}
                </ul>
              </aside>

              <main className="cv-main cv-main--p2">
                <SectionHead title="Projects" icon={FolderGit2} />
                <ul className="cv-list cv-projects">
                  {CV.projects.map((project) => (
                    <li key={project.name} className="cv-item">
                      <a className="cv-proj-title" href={project.url} target="_blank" rel="noreferrer">
                        {project.name}
                        <ExternalLink size={12} />
                      </a>
                      <div className="cv-proj-tag">{project.tagline}</div>
                      <div className="cv-proj-desc">{project.desc}</div>
                      <div className="cv-proj-stack">{project.stack}</div>
                    </li>
                  ))}
                </ul>
              </main>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
