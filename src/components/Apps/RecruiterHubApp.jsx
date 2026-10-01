import React, { useState } from 'react';
import { 
  FileText, Download, Printer, Copy, Check, Send, 
  ExternalLink, ZoomIn, ZoomOut, Mail, Phone, MapPin, 
  Globe, Award, Briefcase, GraduationCap, 
  Code, Layers, CheckCircle
} from 'lucide-react';
import { WinIcon } from '../Common/WinIcon';
import { INITIAL_USER, RECRUITER_SUMMARY } from '../../data/fileSystem';
import { playClickSound } from '../../utils/sound';

export const RecruiterHubApp = () => {
  const [zoom, setZoom] = useState(100);
  const [copied, setCopied] = useState(false);

  const handleZoomIn = () => {
    playClickSound();
    setZoom((prev) => Math.min(prev + 10, 130));
  };

  const handleZoomOut = () => {
    playClickSound();
    setZoom((prev) => Math.max(prev - 10, 70));
  };

  const handleResetZoom = () => {
    playClickSound();
    setZoom(100);
  };

  const handlePrint = () => {
    playClickSound();
    window.print();
  };

  const handleCopySummary = () => {
    playClickSound();
    const summaryText = `${INITIAL_USER.fullName} (${INITIAL_USER.name})\n${INITIAL_USER.role}\nEmail: ${INITIAL_USER.email}\nWhatsApp: ${INITIAL_USER.phone}\nLinkedIn: ${INITIAL_USER.linkedin}\nGitHub: ${INITIAL_USER.github}\nPortfolio: ${INITIAL_USER.website}\n\nRingkasan: ${RECRUITER_SUMMARY.headline}. Spesialisasi: ${RECRUITER_SUMMARY.specialization}.`;
    navigator.clipboard.writeText(summaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadCV = () => {
    playClickSound();
    const cvText = `================================================================================
CURRICULUM VITAE — ${INITIAL_USER.fullName.toUpperCase()}
${INITIAL_USER.role}
================================================================================

KONTAK:
• Email      : ${INITIAL_USER.email}
• WhatsApp   : ${INITIAL_USER.phone}
• Lokasi     : ${INITIAL_USER.location}
• LinkedIn   : ${INITIAL_USER.linkedin}
• GitHub     : ${INITIAL_USER.github}
• Portofolio : ${INITIAL_USER.website}

--------------------------------------------------------------------------------
1. RINGKASAN PROFESIONAL
--------------------------------------------------------------------------------
Software Engineer berorientasi hasil dengan pengalaman 3+ tahun dalam rekayasa
aplikasi mobile berskala komersial (Flutter, React Native) dan platform web
performa tinggi (React, Next.js, Node.js, Go, Laravel). Terbukti mampu memimpin
pengembangan arsitektur sistem dari nol hingga produksi, mencakup integrasi payment
gateway (Midtrans), geofencing/GIS, sistem keamanan berbasis sensor, hingga
otomasi kecerdasan buatan (Gemini AI). Memprioritaskan clean architecture, performa
tinggi, dan pengalaman pengguna (UI/UX) yang intuitif.

--------------------------------------------------------------------------------
2. KEAHLIAN TEKNIS (TECHNICAL SKILLS)
--------------------------------------------------------------------------------
• Mobile Development : Flutter & Dart, React Native, State Management (Riverpod, Provider, BLoC), Hardware Sensor APIs (Accelerometer, Camera, Battery, GPS)
• Frontend Web       : React.js, Next.js 14, TypeScript, Tailwind CSS, Vite, HTML5, Vanilla CSS, Responsive UI/UX
• Backend & APIs     : Node.js, Express, Go (Golang), PHP (Laravel 13), RESTful APIs, WebSocket, JWT & HMAC-SHA256
• Database & Cloud   : PostgreSQL, MySQL, Redis, SQLite, MongoDB, Docker, Git/GitHub, CI/CD Pipelines, Linux
• Tools & Metodologi : Postman, Figma, Agile/Scrum, Unit & Feature Testing (PHPUnit)

--------------------------------------------------------------------------------
3. PENGALAMAN PROYEK REKAYASA SISTEM
--------------------------------------------------------------------------------
1. Tatagih — Smart Subscription Manager & AI Financial Assistant (2024)
   - Merancang platform SaaS manajemen langganan dan deteksi kebocoran dana (vampire spending) berbasis Laravel 13, Tailwind CSS, dan Chart.js.
   - Mengintegrasikan analisis kesehatan finansial berbasis Google Gemini AI dan notifikasi proaktif via Telegram Bot.
   - Mengembangkan sistem pembagian tagihan (split-bill) dengan upload dan verifikasi bukti bayar otomatis.

2. Lintas — Cross-Device Productivity Ecosystem (2024)
   - Membangun ekosistem nirkabel lokal berlatensi rendah (<12ms) yang menghubungkan Android (Flutter) dan Windows (C++/Win32 API) via WebSocket port 8945.
   - Mengembangkan fitur NearLock (auto-lock laptop saat ponsel menjauh), transfer berkas lokal 2 arah berkecepatan tinggi dengan verifikasi hash SHA-256, dan remote trackpad/presenter.

3. SIGAP — Sistem Gerak Aman dari Pencurian (2024)
   - Merancang aplikasi keamanan smartphone anti-maling dengan siklus Detect -> Alert -> Lock -> Record -> Review.
   - Memanfaatkan stream akselerometer sumbu XYZ dan status charger baterai, sirine darurat, penguncian volume 100%, serta snapshot kamera depan dan koordinat GPS.

4. Temuin — Platform Pelacak & Penemu Barang Hilang Berbasis QR Code (2024)
   - Mengembangkan platform pelacakan barang berharga berbasis QR Code unik tanpa mengekspos data pribadi pemilik.
   - Mengintegrasikan pemindaian kamera instan, pencatatan koordinat GPS, foto bukti barang, dan sistem Boost Listing via Midtrans Snap.

5. NenaCare — AI-Powered K3 Incident Reporting & Monitoring System (2024)
   - Mengembangkan platform pelaporan K3 dengan opsi 100% anonim dan analisis risiko otomatis bertenaga Google Gemini 2.5 Flash-Lite.
   - Mengintegrasikan bot Telegram untuk notifikasi dan remote control darurat serta ekspor audit report ke PDF berformat A4 landscape.

6. ITB STIKOM Bali — Building Plugin for TheoTown (2024)
   - Merancang gedung kampus 5x5 tile dengan aset seni piksel isometrik 2.5D khas arsitektur Bali.
   - Mengonfigurasi engine simulasi pendidikan berkapasitas 2.500 mahasiswa dan radius pengaruh 700 tile untuk versi Android dan PC.

--------------------------------------------------------------------------------
4. PENDIDIKAN FORMAL
--------------------------------------------------------------------------------
Institut Teknologi dan Bisnis STIKOM Bali
Sarjana Komputer (S.Kom.), Teknik Informatika | IPK: 3.84 (Cum Laude)

--------------------------------------------------------------------------------
5. BAHASA
--------------------------------------------------------------------------------
• Bahasa Indonesia : Native (Penutur Asli)
• Bahasa Inggris   : Professional Working Proficiency

Status: Terbuka untuk Penawaran Kerja (Full-Time / Remote / Onsite / Hybrid)
================================================================================`;

    const blob = new Blob([cvText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Curriculum_Vitae_Agung_Krisna.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
              Curriculum_Vitae_Agung_Krisna.pdf
            </span>
            <span style={{
              fontSize: '11px',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              color: '#94a3b8',
              padding: '2px 6px',
              borderRadius: '4px',
              whiteSpace: 'nowrap'
            }}>
              1 / 1 Halaman (A4)
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
            <button
              onClick={handleZoomOut}
              title="Perkecil"
              style={{
                background: 'transparent',
                border: 'none',
                color: '#cbd5e1',
                padding: '4px 6px',
                cursor: 'pointer',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <ZoomOut size={14} />
            </button>
            <button
              onClick={handleResetZoom}
              title="Reset Zoom"
              style={{
                background: 'transparent',
                border: 'none',
                color: '#e2e8f0',
                fontSize: '11.5px',
                fontWeight: 600,
                padding: '4px 6px',
                cursor: 'pointer',
                borderRadius: '4px',
                minWidth: '40px',
                textAlign: 'center'
              }}
            >
              {zoom}%
            </button>
            <button
              onClick={handleZoomIn}
              title="Perbesar"
              style={{
                background: 'transparent',
                border: 'none',
                color: '#cbd5e1',
                padding: '4px 6px',
                cursor: 'pointer',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center'
              }}
            >
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
            onClick={handlePrint}
            title="Cetak CV"
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
            <Printer size={14} />
            <span>Cetak</span>
          </button>

          <button
            onClick={handleDownloadCV}
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
            <Download size={14} />
            <span>Unduh CV</span>
          </button>

          <a
            href={INITIAL_USER.whatsapp}
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

      <div style={{
        flex: 1,
        overflowY: 'auto',
        overflowX: 'auto',
        padding: '24px 16px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: '#282936'
      }}>
        <div style={{
          width: `${Math.round(794 * (zoom / 100))}px`,
          minHeight: `${Math.round(1123 * (zoom / 100))}px`,
          backgroundColor: '#ffffff',
          color: '#0f172a',
          boxShadow: '0 20px 45px rgba(0, 0, 0, 0.45), 0 4px 12px rgba(0, 0, 0, 0.25)',
          borderRadius: '4px',
          padding: `${Math.round(36 * (zoom / 100))}px ${Math.round(42 * (zoom / 100))}px`,
          boxSizing: 'border-box',
          fontSize: `${13 * (zoom / 100)}px`,
          lineHeight: '1.5',
          fontFamily: 'Segoe UI, -apple-system, BlinkMacSystemFont, "Liberation Sans", sans-serif'
        }}>
          <header style={{
            borderBottom: '2px solid #0f172a',
            paddingBottom: '16px',
            marginBottom: '18px'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px' }}>
              <div>
                <h1 style={{
                  fontSize: `${23 * (zoom / 100)}px`,
                  fontWeight: 800,
                  color: '#0f172a',
                  margin: '0 0 4px 0',
                  letterSpacing: '-0.3px',
                  textTransform: 'uppercase'
                }}>
                  {INITIAL_USER.fullName}
                </h1>
                <div style={{
                  fontSize: `${14 * (zoom / 100)}px`,
                  fontWeight: 600,
                  color: '#0284c7',
                  marginBottom: '8px'
                }}>
                  {INITIAL_USER.role}
                </div>
              </div>

              <div style={{
                textAlign: 'right',
                fontSize: `${11 * (zoom / 100)}px`,
                color: '#16a34a',
                backgroundColor: '#f0fdf4',
                padding: '4px 10px',
                borderRadius: '20px',
                border: '1px solid #bbf7d0',
                fontWeight: 600,
                whiteSpace: 'nowrap'
              }}>
                ● Siap Bekerja Segera
              </div>
            </div>

            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '12px 18px',
              fontSize: `${11.5 * (zoom / 100)}px`,
              color: '#475569',
              marginTop: '8px',
              borderTop: '1px solid #e2e8f0',
              paddingTop: '10px'
            }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                <MapPin size={13} color="#0284c7" />
                {INITIAL_USER.location}
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                <Mail size={13} color="#0284c7" />
                {INITIAL_USER.email}
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                <Phone size={13} color="#0284c7" />
                {INITIAL_USER.phone}
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                <Globe size={13} color="#0284c7" />
                {INITIAL_USER.website}
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                <WinIcon name="linkedin" size={13} />
                linkedin.com/in/{INITIAL_USER.handle}
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                <WinIcon name="github" size={13} />
                github.com/{INITIAL_USER.handle}
              </span>
            </div>
          </header>

          <section style={{ marginBottom: '16px' }}>
            <h2 style={{
              fontSize: `${12.5 * (zoom / 100)}px`,
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.6px',
              color: '#0f172a',
              borderBottom: '1px solid #cbd5e1',
              paddingBottom: '4px',
              marginBottom: '8px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              <Briefcase size={14} color="#0284c7" /> Ringkasan Profesional
            </h2>
            <p style={{ margin: 0, color: '#334155', textAlign: 'justify', lineHeight: '1.55' }}>
              Software Engineer berorientasi hasil dengan pengalaman 3+ tahun dalam rekayasa aplikasi mobile berskala komersial (Flutter, React Native) dan platform web performa tinggi (React, Next.js, Node.js, Go, Laravel). Terbukti mampu memimpin pengembangan arsitektur sistem dari inisiasi hingga tahap produksi, mencakup integrasi payment gateway (Midtrans), geofencing/GIS, sistem keamanan perangkat keras berbasis sensor, hingga otomasi kecerdasan buatan (Gemini AI). Berorientasi pada clean architecture, efisiensi komputasi, dan pengalaman pengguna (UI/UX) yang intuitif.
            </p>
          </section>

          <section style={{ marginBottom: '16px' }}>
            <h2 style={{
              fontSize: `${12.5 * (zoom / 100)}px`,
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.6px',
              color: '#0f172a',
              borderBottom: '1px solid #cbd5e1',
              paddingBottom: '4px',
              marginBottom: '8px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              <Code size={14} color="#0284c7" /> Keahlian Teknis (Technical Skills)
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '8px 16px' }}>
              <div>
                <strong style={{ color: '#0f172a', fontSize: `${11.5 * (zoom / 100)}px` }}>Mobile Development:</strong>
                <div style={{ color: '#475569', fontSize: `${11.5 * (zoom / 100)}px` }}>
                  Flutter & Dart, React Native, Riverpod, Provider, BLoC, Sensor Hardware APIs (Accelerometer, Camera, Battery, GPS)
                </div>
              </div>
              <div>
                <strong style={{ color: '#0f172a', fontSize: `${11.5 * (zoom / 100)}px` }}>Frontend Web:</strong>
                <div style={{ color: '#475569', fontSize: `${11.5 * (zoom / 100)}px` }}>
                  React.js, Next.js 14, TypeScript, Tailwind CSS, Vite, HTML5, Vanilla CSS, Responsive & Accessible UI
                </div>
              </div>
              <div>
                <strong style={{ color: '#0f172a', fontSize: `${11.5 * (zoom / 100)}px` }}>Backend & Cloud APIs:</strong>
                <div style={{ color: '#475569', fontSize: `${11.5 * (zoom / 100)}px` }}>
                  Node.js, Express, Go (Golang), PHP (Laravel 13), RESTful APIs, WebSocket, JWT & HMAC-SHA256, Gemini AI API
                </div>
              </div>
              <div>
                <strong style={{ color: '#0f172a', fontSize: `${11.5 * (zoom / 100)}px` }}>Database & Tooling:</strong>
                <div style={{ color: '#475569', fontSize: `${11.5 * (zoom / 100)}px` }}>
                  PostgreSQL, MySQL, Redis, SQLite, MongoDB, Docker, Git/GitHub, Linux, Postman, CI/CD, Agile/Scrum
                </div>
              </div>
            </div>
          </section>

          <section style={{ marginBottom: '16px' }}>
            <h2 style={{
              fontSize: `${12.5 * (zoom / 100)}px`,
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.6px',
              color: '#0f172a',
              borderBottom: '1px solid #cbd5e1',
              paddingBottom: '4px',
              marginBottom: '10px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              <Layers size={14} color="#0284c7" /> Pengalaman Proyek Rekayasa (Featured Engineering Projects)
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <span style={{ fontWeight: 700, color: '#0f172a', fontSize: `${12.5 * (zoom / 100)}px` }}>
                    Tatagih — Smart Subscription Manager & AI Financial Assistant
                  </span>
                  <span style={{ color: '#64748b', fontSize: `${11 * (zoom / 100)}px`, fontWeight: 500 }}>2024</span>
                </div>
                <div style={{ color: '#0284c7', fontSize: `${11 * (zoom / 100)}px`, fontWeight: 600, marginBottom: '3px' }}>
                  Full-Stack Web SaaS (Laravel 13, Tailwind CSS, Vite, Chart.js, Gemini AI API, Telegram Bot API)
                </div>
                <ul style={{ margin: '0 0 0 16px', padding: 0, color: '#334155', fontSize: `${11.5 * (zoom / 100)}px`, lineHeight: '1.45' }}>
                  <li>Merancang platform SaaS sentralisasi langganan digital dengan visualisasi kalender tagihan dan deteksi kebocoran dana (vampire spending).</li>
                  <li>Mengintegrasikan Tata Asisten AI berbasis Google Gemini API untuk mengevaluasi Financial Health Score (0-100) dan rekomendasi penghematan cerdas.</li>
                  <li>Membangun fitur patungan langganan (split bill) multi-user dengan upload verifikasi bukti bayar serta notifikasi jatuh tempo H-3/H-1 via Telegram Bot.</li>
                </ul>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <span style={{ fontWeight: 700, color: '#0f172a', fontSize: `${12.5 * (zoom / 100)}px` }}>
                    Lintas — Cross-Device Productivity Ecosystem (Android × Windows)
                  </span>
                  <span style={{ color: '#64748b', fontSize: `${11 * (zoom / 100)}px`, fontWeight: 500 }}>2024</span>
                </div>
                <div style={{ color: '#0284c7', fontSize: `${11 * (zoom / 100)}px`, fontWeight: 600, marginBottom: '3px' }}>
                  Cross-Device Local Systems (Flutter, Dart, C++ Win32 API, Riverpod, WebSocket Port 8945, SHA-256)
                </div>
                <ul style={{ margin: '0 0 0 16px', padding: 0, color: '#334155', fontSize: `${11.5 * (zoom / 100)}px`, lineHeight: '1.45' }}>
                  <li>Membangun ekosistem konektivitas nirkabel lokal berlatensi rendah (&lt;12ms) yang menghubungkan ponsel Android dan komputer Windows tanpa ketergantungan cloud.</li>
                  <li>Mengembangkan protokol transfer file instan dua arah dengan validasi integritas checksum SHA-256 dan sinkronisasi Universal Clipboard.</li>
                  <li>Mengimplementasikan fitur keamanan NearLock yang secara otomatis mengunci workstation Windows saat pengguna smartphone menjauh dari laptop.</li>
                </ul>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <span style={{ fontWeight: 700, color: '#0f172a', fontSize: `${12.5 * (zoom / 100)}px` }}>
                    SIGAP — Sistem Gerak Aman dari Pencurian (Mobile Security)
                  </span>
                  <span style={{ color: '#64748b', fontSize: `${11 * (zoom / 100)}px`, fontWeight: 500 }}>2024</span>
                </div>
                <div style={{ color: '#0284c7', fontSize: `${11 * (zoom / 100)}px`, fontWeight: 600, marginBottom: '3px' }}>
                  Mobile Security Application (Flutter, Dart, Provider, Sensors Plus, Camera API, Geolocator)
                </div>
                <ul style={{ margin: '0 0 0 16px', padding: 0, color: '#334155', fontSize: `${11.5 * (zoom / 100)}px`, lineHeight: '1.45' }}>
                  <li>Merancang aplikasi keamanan smartphone anti-maling berarsitektur Detect -&gt; Alert -&gt; Lock -&gt; Record -&gt; Review.</li>
                  <li>Mendeteksi pergerakan fisik perangkat (akselerometer XYZ threshold 2.0) dan pencabutan charger paksa untuk memicu alarm darurat seketika.</li>
                  <li>Menghadirkan Volume Watchdog 100%, penguncian layar darurat berbasis PIN, foto penyusup otomatis kamera depan, dan pencatatan koordinat GPS.</li>
                </ul>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <span style={{ fontWeight: 700, color: '#0f172a', fontSize: `${12.5 * (zoom / 100)}px` }}>
                    Temuin — Platform Pelacak & Penemu Barang Hilang Berbasis QR Code
                  </span>
                  <span style={{ color: '#64748b', fontSize: `${11 * (zoom / 100)}px`, fontWeight: 500 }}>2024</span>
                </div>
                <div style={{ color: '#0284c7', fontSize: `${11 * (zoom / 100)}px`, fontWeight: 600, marginBottom: '3px' }}>
                  Full-Stack Mobile App (Flutter, Material 3, PHP Native, PDO, MySQL, Midtrans Snap, Geolocator)
                </div>
                <ul style={{ margin: '0 0 0 16px', padding: 0, color: '#334155', fontSize: `${11.5 * (zoom / 100)}px`, lineHeight: '1.45' }}>
                  <li>Menghubungkan pemilik barang berharga dan penemu via stiker QR Code unik tanpa mengekspos kontak pribadi pemilik ke publik.</li>
                  <li>Merekam snapshot titik lokasi penemuan GPS secara presisi dan foto kondisi fisik barang saat laporan dibuat.</li>
                  <li>Mengintegrasikan pembayaran digital Midtrans Snap untuk opsi monetisasi Boost Listing dengan verifikasi signature server.</li>
                </ul>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <span style={{ fontWeight: 700, color: '#0f172a', fontSize: `${12.5 * (zoom / 100)}px` }}>
                    NenaCare — AI-Powered K3 Incident Reporting & Monitoring System
                  </span>
                  <span style={{ color: '#64748b', fontSize: `${11 * (zoom / 100)}px`, fontWeight: 500 }}>2024</span>
                </div>
                <div style={{ color: '#0284c7', fontSize: `${11 * (zoom / 100)}px`, fontWeight: 600, marginBottom: '3px' }}>
                  Workplace Safety Web App (PHP OOP, MySQL, Google Gemini 2.5 Flash-Lite, Telegram Bot, Dompdf)
                </div>
                <ul style={{ margin: '0 0 0 16px', padding: 0, color: '#334155', fontSize: `${11.5 * (zoom / 100)}px`, lineHeight: '1.45' }}>
                  <li>Membangun sistem pelaporan insiden K3 industri F&B dengan opsi pelaporan 100% anonim untuk perlindungan pelapor.</li>
                  <li>Memanfaatkan Google Gemini AI untuk analisis risiko instan, penentuan level prioritas, dan saran mitigasi darurat dalam format JSON terstruktur.</li>
                  <li>Mengintegrasikan Telegram Bot dua arah dengan tombol aksi remote dan fitur ekspor dokumen laporan audit berformat PDF A4 landscape.</li>
                </ul>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <span style={{ fontWeight: 700, color: '#0f172a', fontSize: `${12.5 * (zoom / 100)}px` }}>
                    ITB STIKOM Bali — Building Plugin for TheoTown (Educational Mod)
                  </span>
                  <span style={{ color: '#64748b', fontSize: `${11 * (zoom / 100)}px`, fontWeight: 500 }}>2024</span>
                </div>
                <div style={{ color: '#0284c7', fontSize: `${11 * (zoom / 100)}px`, fontWeight: 600, marginBottom: '3px' }}>
                  Game Modding & Simulation (TheoTown Plugin API, code.json, Isometric Pixel Art 2.5D, Android & PC)
                </div>
                <ul style={{ margin: '0 0 0 16px', padding: 0, color: '#334155', fontSize: `${11.5 * (zoom / 100)}px`, lineHeight: '1.45' }}>
                  <li>Merancang representasi kampus ITB STIKOM Bali 5x5 tile dengan sentuhan arsitektur nusantara (atap tumpang dan candi bentar).</li>
                  <li>Mengonfigurasi engine simulasi pendidikan fungsional berkapasitas 2.500 mahasiswa dan radius pengaruh edukasi 700 tile.</li>
                </ul>
              </div>
            </div>
          </section>

          <section style={{ marginBottom: '16px' }}>
            <h2 style={{
              fontSize: `${12.5 * (zoom / 100)}px`,
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.6px',
              color: '#0f172a',
              borderBottom: '1px solid #cbd5e1',
              paddingBottom: '4px',
              marginBottom: '8px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              <GraduationCap size={14} color="#0284c7" /> Pendidikan Formal
            </h2>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <div>
                <strong style={{ color: '#0f172a', fontSize: `${12 * (zoom / 100)}px` }}>
                  Institut Teknologi dan Bisnis STIKOM Bali
                </strong>
                <div style={{ color: '#475569', fontSize: `${11.5 * (zoom / 100)}px` }}>
                  Sarjana Komputer (S.Kom.), Program Studi Teknik Informatika
                </div>
              </div>
              <div style={{ textAlign: 'right', color: '#64748b', fontSize: `${11 * (zoom / 100)}px` }}>
                <span style={{ fontWeight: 600, color: '#0f172a' }}>IPK: 3.84 / 4.00</span> (Cum Laude)
              </div>
            </div>
          </section>

          <section>
            <h2 style={{
              fontSize: `${12.5 * (zoom / 100)}px`,
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.6px',
              color: '#0f172a',
              borderBottom: '1px solid #cbd5e1',
              paddingBottom: '4px',
              marginBottom: '8px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              <Award size={14} color="#0284c7" /> Informasi Tambahan & Bahasa
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '8px', fontSize: `${11.5 * (zoom / 100)}px`, color: '#475569' }}>
              <div>
                <strong style={{ color: '#0f172a' }}>Penguasaan Bahasa:</strong>
                <div>Bahasa Indonesia (Penutur Asli / Native), Bahasa Inggris (Professional Working Proficiency)</div>
              </div>
              <div>
                <strong style={{ color: '#0f172a' }}>Ketersediaan Kerja:</strong>
                <div>Siap Bergabung Segera (Full-Time, Onsite / Remote / Hybrid, Kontrak / Freelance)</div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
