import React, { useState, useRef, useEffect } from 'react';
import { INITIAL_USER, RECRUITER_SUMMARY } from '../../data/fileSystem';
import { playClickSound } from '../../utils/sound';

export const TerminalApp = ({ onLaunchApp }) => {
  const [history, setHistory] = useState([
    {
      type: 'system',
      text: `Windows PowerShell\nCopyright (C) Microsoft Corporation. All rights reserved.\n\nKetik 'help' untuk melihat daftar perintah portfolio interaktif.`
    }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [cmdHistory, setCmdHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isMatrixActive, setIsMatrixActive] = useState(false);

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
    const promptLine = `PS C:\\Users\\Agung> ${cmd}`;
    const cleanCmd = cmd.toLowerCase().trim();

    if (!cleanCmd) {
      setHistory(prev => [...prev, { type: 'input', text: promptLine }]);
      return;
    }

    if (cleanCmd === 'clear' || cleanCmd === 'cls') {
      setHistory([]);
      return;
    }

    if (cleanCmd === 'matrix') {
      setIsMatrixActive(true);
      setTimeout(() => setIsMatrixActive(false), 8000);
      setHistory(prev => [
        ...prev,
        { type: 'input', text: promptLine },
        { type: 'output', text: 'Wake up, Neo... The Matrix has you. (Easter egg berjalan selama 8 detik)' }
      ]);
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
  resume        : Ringkasan kualifikasi kerja & pengalaman
  contact       : Kontak resmi (Email, WhatsApp, LinkedIn, GitHub)
  neofetch      : Tampilan spesifikasi sistem & profil ASCII
  dir / ls      : Menampilkan daftar file dalam direktori saat ini
  cat <file>    : Membaca isi file (contoh: cat resume.txt)
  clear / cls   : Membersihkan layar terminal
  matrix        : Easter egg efek Matrix falling green rain
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
PROYEK UNGGULAN:
--------------------------------------------------
1. DompetQ (Fintech Mobile App)
   - Tech  : Flutter, Riverpod, Node.js, PostgreSQL
   - Fitur : E-Wallet, QRIS payment, grafik analitik keuangan, biometrik auth.

2. Temuin (Lost and Found Crowdsourcing)
   - Tech  : React Native, Node.js, Google Maps API, MongoDB
   - Fitur : Geolocation mapping barang hilang, sistem verifikasi klaim, chat.

3. Makalah Generator (Academic AI Assistant)
   - Tech  : Next.js 14, TypeScript, OpenAI API, LaTeX Engine
   - Fitur : Pembuatan bab akademik terstruktur, manajemen sitasi otomatis APA.

Ketik 'cat dompetq.txt' atau buka File Explorer untuk detail lengkap.
`;
        break;

      case 'resume':
        output = `
PENGALAMAN & KUALIFIKASI:
--------------------------------------------------
- Pengalaman : ${RECRUITER_SUMMARY.experienceYears}
- Pendidikan : S1 Teknik Informatika (IPK 3.84)
- Prestasi   : Juara 2 Hackathon Mobile App Kampus 2023
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
Direktori: C:\\Users\\Agung

Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
d-----         9/26/2026   9:45 PM                Documents
d-----         9/26/2026   9:45 PM                Downloads
d-----         9/26/2026   9:45 PM                Projects
-a----         9/26/2026   9:48 PM           3240 README_RECRUITER.txt
-a----         9/26/2026   9:48 PM           2150 biodata.txt
-a----         9/26/2026   9:48 PM           1890 skills.txt
-a----         9/26/2026   9:48 PM         245600 resume.pdf
`;
        break;

      case 'neofetch':
      case 'winfetch':
        output = `
         ,,..                     agung@windows11-portfolio
      .ck000000kc.                -------------------------
     .d0000000000d.               OS       : Windows 11 Pro 24H2 (Portfolio Edition)
    .d000000000000d.              Host     : Developer Workstation
   .d00000000000000d.             Kernel   : React 19.x + Vite 8.x
  .d0000000000000000d.            Uptime   : 99.9% Always Ready to Work
 .d000000000000000000d.           Shell    : Windows PowerShell v7.4
.d00000000000000000000d.          Role     : Full-Stack & Mobile Developer
:0000000000000000000000:          Primary  : Flutter, React, TypeScript, Node.js
:0000000000000000000000:          Memory   : 16384 MB / 32768 MB
.d00000000000000000000d.          Status   : Open to Work (Hire Me!)
 .d000000000000000000d.           
`;
        break;

      default:
        if (cleanCmd.startsWith('cat ') || cleanCmd.startsWith('type ')) {
          const fileTarget = cleanCmd.replace('cat ', '').replace('type ', '').trim();
          output = `Isi file ${fileTarget}:\n${RECRUITER_SUMMARY.headline}\nSpesialisasi: ${RECRUITER_SUMMARY.specialization}\nSilakan buka aplikasi Notepad untuk membaca versi lengkap!`;
        } else {
          output = `'${cmd}' tidak dikenali sebagai perintah internal atau eksternal. Ketik 'help' untuk bantuan.`;
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
    <div
      onClick={() => inputRef.current?.focus()}
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#0c1021',
        color: '#f8fafc',
        fontFamily: 'Cascadia Code, Consolas, monospace',
        fontSize: '13px',
        padding: '16px',
        overflowY: 'auto',
        position: 'relative'
      }}
    >
      {isMatrixActive && (
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0, 20, 0, 0.95)',
          color: '#22c55e',
          fontFamily: 'monospace',
          fontSize: '12px',
          padding: '20px',
          overflow: 'hidden',
          zIndex: 50,
          pointerEvents: 'none',
          whiteSpace: 'pre'
        }}>
          {Array.from({ length: 25 }).map((_, i) => (
            <div key={i} style={{ opacity: Math.random() }}>
              01010100 01100101 01101101 01110101 01101001 01101110 00100000 01000100 01101111 01101101 01110000 01100101 01110100 01010001 00100000 01000001 01100111 01110101 01101110 01100111
            </div>
          ))}
        </div>
      )}

      {history.map((item, idx) => (
        <div key={idx} style={{ marginBottom: '8px', whiteSpace: 'pre-wrap', lineHeight: '1.45' }}>
          {item.type === 'input' ? (
            <span style={{ color: '#60a5fa', fontWeight: 'bold' }}>{item.text}</span>
          ) : (
            <span style={{ color: '#e2e8f0' }}>{item.text}</span>
          )}
        </div>
      ))}

      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
        <span style={{ color: '#60a5fa', fontWeight: 'bold', whiteSpace: 'nowrap' }}>
          PS C:\Users\Agung&gt;
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
            color: '#f8fafc',
            fontFamily: 'inherit',
            fontSize: 'inherit'
          }}
        />
      </div>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '6px',
        marginTop: '16px',
        paddingTop: '10px',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)'
      }}>
        {['help', 'whoami', 'skills', 'projects', 'resume', 'contact', 'neofetch', 'matrix', 'clear'].map((cmd) => (
          <button
            key={cmd}
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              executeCommand(cmd);
            }}
            style={{
              backgroundColor: 'rgba(96, 165, 250, 0.15)',
              border: '1px solid rgba(96, 165, 250, 0.3)',
              color: '#93c5fd',
              borderRadius: '4px',
              padding: '3px 8px',
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
  );
};
