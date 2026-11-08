import React, { useState, useRef, useEffect } from 'react';
import { Plus, X } from 'lucide-react';
import { WinIcon } from '../Common/WinIcon';
import { INITIAL_USER, RECRUITER_SUMMARY } from '../../data/fileSystem';
import { playClickSound } from '../../utils/sound';
import { useWindow } from '../Windows/WindowContext';

export const TerminalApp = ({ onLaunchApp }) => {
  const winCtx = useWindow();
  const [history, setHistory] = useState([
    {
      type: 'system',
      text: `Microsoft Windows [Version 10.0.26200.9457]\n(c) Microsoft Corporation. All rights reserved.\n`
    }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [cmdHistory, setCmdHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const terminalEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const trimmed = inputVal.trim();
      executeCommand(trimmed);
      if (trimmed) {
        setCmdHistory(prev => [...prev, trimmed]);
        setHistoryIndex(-1);
      }
      setInputVal('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (cmdHistory.length === 0) return;
      const nextIdx = historyIndex === -1 ? cmdHistory.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIdx);
      setInputVal(cmdHistory[nextIdx]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex === -1) return;
      const nextIdx = historyIndex + 1;
      if (nextIdx >= cmdHistory.length) {
        setHistoryIndex(-1);
        setInputVal('');
      } else {
        setHistoryIndex(nextIdx);
        setInputVal(cmdHistory[nextIdx]);
      }
    }
  };

  const executeCommand = (cmd) => {
    playClickSound();
    const promptLine = `C:\\Users\\KRISNA> ${cmd}`;
    const cleanCmd = cmd.toLowerCase().trim();

    if (!cleanCmd) {
      setHistory(prev => [...prev, { type: 'input', text: promptLine }]);
      return;
    }

    if (cleanCmd === 'clear' || cleanCmd === 'cls') {
      setHistory([]);
      return;
    }

    let output = '';

    switch (cleanCmd) {
      case 'help':
        output = `
Daftar Perintah yang Tersedia:
--------------------------------------------------
  whoami        : Informasi profil dan spesialisasi developer
  skills        : Ringkasan keahlian teknis (Tech Stack)
  projects      : Daftar proyek unggulan yang telah diselesaikan
  visiondeck    : Membuka Vision Deck 3D Holographic Card Deck & Moto
  motto         : Menampilkan daftar moto resmi dari setiap karya
  resume        : Ringkasan kualifikasi kerja & pengalaman
  contact       : Kontak resmi (Email, WhatsApp, LinkedIn, GitHub)
  dir / ls      : Menampilkan daftar file dalam direktori saat ini
  cat <file>    : Membaca isi file (contoh: cat resume.txt)
  secret        : [?] Menampilkan petunjuk rahasia & easter eggs
  clear / cls   : Membersihkan layar terminal
`;
        break;

      case 'whoami':
        output = `
NAMA         : ${INITIAL_USER.name}
PERAN        : ${INITIAL_USER.role}
STATUS       : ${INITIAL_USER.status}
LOKASI       : ${INITIAL_USER.location}
DESKRIPSI    : Passionate software engineer dengan fokus pada pengembangan
               aplikasi mobile berkinerja tinggi (Flutter, React Native)
               dan arsitektur web modern (React, Next.js, Node.js).
`;
        break;

      case 'skills':
        output = `
KEAHLIAN TEKNIS (TECH STACK):
--------------------------------------------------
[+] Mobile Development : Flutter (Dart), React Native, Android SDK, Riverpod
[+] Frontend Web       : React.js, Next.js, TypeScript, TailwindCSS, HTML5/CSS3
[+] Backend & Database : Node.js (Express), Go (Golang), PostgreSQL, MongoDB, Redis
[+] DevOps & Cloud     : Docker, Git, CI/CD Actions, Google Cloud, Vercel
[+] Tools & UI Design  : Figma, Postman, VS Code, Android Studio
`;
        break;

      case 'projects':
        output = `
PROYEK UNGGULAN & MOTO RESMI:
--------------------------------------------------
1. Tatagih (Smart Subscription Manager & AI Financial Assistant)
   - Motto : "Membantu mengatur agar duit tak kabur"
   - Tech  : PHP, Laravel 13, Blade, Tailwind CSS, Vite, MySQL, Chart.js, Google Gemini API, Telegram Bot API
   - Fitur : Tata Asisten (Health Score & Gemini AI), Pendeteksi Kebocoran Dana, Fitur Patungan (Split Bill).

2. Lintas (Cross-Device Productivity Ecosystem)
   - Motto : "Membantu berbagi berkas dengan tangkas dan tuntas"
   - Tech  : Flutter, Dart, C++ Windows Runner, Riverpod, GoRouter, HTTP & WebSocket (Port 8945), SHA-256
   - Fitur : Remote Touchpad, Virtual Keyboard, Instant Drop transfer berkas, NearLock auto-lock PC.

3. SIGAP (Sistem Gerak Aman dari Pencurian)
   - Motto : "Membantu ponsel berdering saat disentuh maling"
   - Tech  : Flutter, Dart, Provider, Sensors Plus, Battery Plus, Camera, GPS
   - Fitur : Proteksi anti-angkat meja via accelerometer, charger unplug alert, volume watchdog 100%, snapshot GPS & kamera.

4. NenaCare (AI-Powered K3 Incident Reporting & Monitoring System)
   - Motto : "Membantu proses laporan tanpa perlu antrean"
   - Tech  : PHP (OOP), MySQL, Google Gemini 2.5 Flash-Lite, Telegram Bot API, Chart.js, Dompdf
   - Fitur : Pelaporan insiden K3 anonim, AI risk analysis otomatis, remote action Telegram Bot.

5. OnlyUs (Bilateral Proximity-Locked Digital Vault)
   - Motto : "Membantu menyimpan rapat dan terbuka saat dekat"
   - Tech  : Flutter, Dart, Proximity API, Bilateral Key Exchange, Secure Storage
   - Fitur : Brankas bilateral khusus 2 perangkat, hanya terbuka saat smartphone berada dalam jarak dekat fisik.

6. Temuin (QR Code Lost & Found Platform)
   - Motto : "Membantu yang hilang kembali pulang"
   - Tech  : Flutter, Dart, PHP Native, PDO, MySQL, Midtrans Snap
   - Fitur : Identitas barang via QR code, snapshot GPS & foto bukti saat lapor temuan.

7. Bingkai (Galeri Foto Komputer Lokal)
   - Motto : "Membantu yang tersimpan tetap rupawan"
   - Tech  : Python, FastAPI, SQLite, Alpine.js, Tailwind CSS, Pillow-WebP
   - Fitur : 100% Offline (Local-First), Tinder Swipe Mode, Deteksi Foto Kembar, Remote Wi-Fi & Gamepad.

8. ITB STIKOM Bali TheoTown (Building Plugin)
   - Motto : "Membantu membangun kota impian berjiwa nusantara"
   - Tech  : TheoTown Plugin API, code.json, Isometric Pixel Art 2.5D, Android & PC
   - Fitur : Gedung kampus khas arsitektur Bali, fungsi edukasi 2.500 mahasiswa, radius 700 tile.

Ketik 'visiondeck' untuk membuka kartu koleksi 3D interaktif.
`;
        break;

      case 'visiondeck':
      case 'motto':
      case 'manifesto':
      case 'deck':
        if (onLaunchApp) onLaunchApp('visiondeck');
        output = `
MEMBUKA VISION DECK...
--------------------------------------------------
Daftar Moto Resmi Karya Agung Krisna:
[1] Lintas   : "Membantu berbagi berkas dengan tangkas dan tuntas"
[2] Bingkai  : "Membantu yang tersimpan tetap rupawan"
[3] Sigap    : "Membantu ponsel berdering saat disentuh maling"
[4] NenaCare : "Membantu proses laporan tanpa perlu antrean"
[5] OnlyUs   : "Membantu menyimpan rapat dan terbuka saat dekat"
[6] Temuin   : "Membantu yang hilang kembali pulang"
[7] Tatagih  : "Membantu mengatur agar duit tak kabur"

Jendela Vision Deck 3D Holographic Card Deck sedang diluncurkan...
`;
        break;

      case 'resume':
        output = `
PENGALAMAN & KUALIFIKASI:
--------------------------------------------------
- Pengalaman : ${RECRUITER_SUMMARY.experienceYears}
- Pendidikan : S1 Teknik Informatika (IPK 3.84)
- Hubungi WhatsApp untuk penawaran: ${INITIAL_USER.whatsapp}
`;
        break;

      case 'contact':
        output = `
KONTAK RESMI AGUNG KRISNA:
--------------------------------------------------
Email    : ${INITIAL_USER.email}
WhatsApp : ${INITIAL_USER.phone} (Link: ${INITIAL_USER.whatsapp})
GitHub   : ${INITIAL_USER.github}
LinkedIn : ${INITIAL_USER.linkedin}
`;
        break;

      case 'dir':
      case 'ls':
        output = `
 Direktori C:\\Users\\KRISNA

09/29/2026  03:45 PM    <DIR>          .
09/29/2026  03:45 PM    <DIR>          ..
09/29/2026  03:45 PM    <DIR>          Documents
09/29/2026  03:45 PM    <DIR>          Downloads
09/29/2026  03:45 PM    <DIR>          Projects
09/29/2026  03:48 PM             3,240 Pengantar.txt
09/29/2026  03:48 PM             2,150 biodata.txt
09/29/2026  03:48 PM             1,890 skills.txt
09/29/2026  03:48 PM           245,600 resume.pdf
               4 File(s)        252,880 bytes
               5 Dir(s)  380,412,985,344 bytes free
`;
        break;

      case 'secret':
      case 'secrets':
      case 'easteregg':
      case 'eastereggs':
      case 'cheat':
      case 'hints':
        output = `
======================================================================
[!] KRISNA-OS SCAVENGER HUNT (PETA PETUNJUK RAHASIA)
======================================================================
Petunjuk eksperimen rahasia telah dipecah dan disebarkan ke beberapa tempat:

1. [Tempat Sampah] : Recycle Bin -> 'FILE RAHASIA.txt' (Protokol Crash & Ringkasan)
2. [Dokumen]       : Documents   -> 'clue_arcade_1986.txt' (Kode Arcade Gamer 1986)
3. [Unduhan]       : Downloads   -> 'memo_asisten_jadul.txt' (Pemanggilan Asisten 90-an)
4. [Kalkulator]    : Coba masukkan angka '1337' atau '6969' pada aplikasi Calculator
5. [Shortcut Run]  : Tekan Alt+R lalu coba ketik 'bsod' atau 'clippy'
======================================================================
`;
        break;

      case 'bsod':
      case 'crash':
        output = `Memicu simulasi Blue Screen of Death...`;
        if (onLaunchApp) setTimeout(() => onLaunchApp('bsod'), 300);
        break;

      case 'clippy':
        output = `Membangunkan Clippy Assistant...`;
        if (onLaunchApp) setTimeout(() => onLaunchApp('clippy'), 300);
        break;

      case 'konami':
        output = `Cheat Code 1986: Tekan urutan tombol [Atas] [Atas] [Bawah] [Bawah] [Kiri] [Kanan] [Kiri] [Kanan] [B] [A] langsung di keyboard desktop Anda!`;
        break;

      case 'matrix':
        output = `
01010111 01100001 01101011 01100101 00100000 01110101 01110000 00101100 00100000 01001110 01100101 01101111 00101110 00101110 00101110
[+] Initializing neural socket...
[+] Connecting to drosophila connectome...
[+] Access Granted: Welcome to Agung Krisna's developer vault!
Ketik 'secret' untuk daftar misteri tersembunyi.
`;
        break;

      default:
        if (cleanCmd.startsWith('cat ') || cleanCmd.startsWith('type ')) {
          const fileTarget = cleanCmd.replace('cat ', '').replace('type ', '').trim();
          output = `Isi file ${fileTarget}:\n${RECRUITER_SUMMARY.headline}\nSpesialisasi: ${RECRUITER_SUMMARY.specialization}\nSilakan buka aplikasi Notepad untuk membaca versi lengkap!`;
        } else {
          output = `'${cmd}' is not recognized as an internal or external command,\noperable program or batch file. Ketik 'help' untuk daftar perintah.`;
        }
        break;
    }

    setHistory(prev => [
      ...prev,
      { type: 'input', text: promptLine },
      { type: 'output', text: output }
    ]);
  };

  return (
    <div style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#0c0c0c',
      overflow: 'hidden'
    }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'stretch',
          backgroundColor: '#181818',
          height: '40px',
          padding: '0 0 0 8px',
          position: 'relative',
          userSelect: 'none',
          cursor: 'default',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
        }}
        onPointerDown={winCtx?.handleTitlePointerDown}
        onPointerMove={winCtx?.handleTitlePointerMove}
        onPointerUp={winCtx?.handleTitlePointerUp}
        onDoubleClick={() => {
          if (!winCtx?.isMobile && winCtx?.onMaximize) {
            playClickSound();
            winCtx.onMaximize();
          }
        }}
      >
        <div style={{ display: 'flex', alignItems: 'flex-end', height: '100%', gap: '2px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: '#272727',
              color: '#ffffff',
              padding: '0 8px 0 12px',
              height: '34px',
              borderRadius: '8px 8px 0 0',
              fontSize: '12px',
              fontWeight: 500,
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderBottom: 'none',
              minWidth: '160px',
              justifyContent: 'space-between'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
              <WinIcon name="terminal" size={15} />
              <span>Command Prompt</span>
            </div>
            <button
              type="button"
              title="Close Tab"
              style={{
                width: '18px',
                height: '18px',
                borderRadius: '4px',
                border: 'none',
                background: 'transparent',
                color: '#9ca3af',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              onPointerDown={(e) => e.stopPropagation()}
              onClick={(e) => {
                e.stopPropagation();
                if (winCtx?.onClose) winCtx.onClose();
              }}
            >
              <X size={12} />
            </button>
          </div>
          <button
            type="button"
            title="New Tab"
            style={{
              width: '28px',
              height: '28px',
              borderRadius: '4px',
              border: 'none',
              background: 'transparent',
              color: '#9ca3af',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '3px',
              marginLeft: '2px'
            }}
            onPointerDown={(e) => e.stopPropagation()}
            onClick={() => {
              playClickSound();
              setHistory(prev => [
                ...prev,
                {
                  type: 'system',
                  text: `Microsoft Windows [Version 10.0.26200.9457]\n(c) Microsoft Corporation. All rights reserved.\n`
                }
              ]);
            }}
          >
            <Plus size={15} />
          </button>
        </div>

        <div style={{ flex: 1, minWidth: '20px', height: '100%' }} />

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
            className="terminal-win-controls"
          />
        )}
      </div>

      <div
        onClick={() => inputRef.current?.focus()}
        style={{
          flex: 1,
          width: '100%',
          backgroundColor: '#0c0c0c',
          color: '#cccccc',
          fontFamily: 'Consolas, "Lucida Console", "Cascadia Code", "Courier New", monospace',
          fontSize: '13.5px',
          lineHeight: '1.4',
          padding: '14px',
          overflowY: 'auto',
          position: 'relative'
        }}
      >
      {history.map((item, idx) => (
        <div key={idx} style={{ marginBottom: '6px', whiteSpace: 'pre-wrap', lineHeight: '1.4' }}>
          {item.type === 'input' ? (
            <span style={{ color: '#ffffff', fontWeight: 'normal' }}>{item.text}</span>
          ) : (
            <span style={{ color: '#cccccc' }}>{item.text}</span>
          )}
        </div>
      ))}

      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
        <span style={{ color: '#cccccc', fontWeight: 'normal', whiteSpace: 'nowrap' }}>
          C:\Users\KRISNA&gt;
        </span>
        <input
          ref={inputRef}
          type="text"
          className="selectable"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={handleKeyDown}
          autoFocus
          spellCheck={false}
          style={{
            flex: 1,
            background: 'transparent',
            border: 'none',
            outline: 'none',
            color: '#ffffff',
            fontFamily: 'inherit',
            fontSize: 'inherit',
            caretColor: '#ffffff'
          }}
        />
      </div>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '6px',
        marginTop: '20px',
        paddingTop: '12px',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)'
      }}>
        {['help', 'whoami', 'skills', 'projects', 'resume', 'contact', 'clear'].map((cmd) => (
          <button
            key={cmd}
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              executeCommand(cmd);
            }}
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.16)',
              color: '#e2e8f0',
              borderRadius: '4px',
              padding: '3px 9px',
              fontSize: '11px',
              fontFamily: 'inherit',
              cursor: 'pointer'
            }}
          >
            {cmd}
          </button>
        ))}
      </div>

      <div ref={terminalEndRef} />
      </div>
    </div>
  );
};
