import React, { useState, useEffect } from 'react';
import { 
  Delete, Sparkles, Lock, Unlock, Terminal, CheckCircle2,
  Folder, Trophy, Trash2, KeyRound
} from 'lucide-react';
import { playClickSound, playStartupChime, playNotificationSound } from '../../utils/sound';

export const CalculatorApp = ({ onLaunchApp }) => {
  const [display, setDisplay] = useState('0');
  const [equation, setEquation] = useState('');
  const [resetNext, setResetNext] = useState(false);

  // Easter Egg States
  const [isSecretUnlocked, setIsSecretUnlocked] = useState(false);
  const [activeTab, setActiveTab] = useState('dossier'); // 'dossier' | 'terminal' | 'achievements'
  const [terminalLogs, setTerminalLogs] = useState([
    '[INIT] System integrity check... OK',
    '[AUTH] Code 6969 verified by user.',
    '[VAULT] Trashed memory cluster reconstructed from Recycle Bin.',
    '[STATUS] Access Level 5 Granted — Welcome to Developer Secret Vault!'
  ]);
  const [isScanning, setIsScanning] = useState(false);

  const triggerSecretVault = () => {
    playStartupChime();
    setIsSecretUnlocked(true);
  };

  const handleDigit = (digit) => {
    playClickSound();
    let nextDisplay;
    if (display === '0' || resetNext) {
      nextDisplay = digit;
      setDisplay(digit);
      setResetNext(false);
    } else {
      nextDisplay = display + digit;
      setDisplay(nextDisplay);
    }

    if (nextDisplay === '6969') {
      setTimeout(() => triggerSecretVault(), 150);
    }
  };

  const handleOperator = (op) => {
    playClickSound();
    setEquation(`${display} ${op} `);
    setResetNext(true);
  };

  const handleClear = () => {
    playClickSound();
    setDisplay('0');
    setEquation('');
    setResetNext(false);
  };

  const handleBackspace = () => {
    playClickSound();
    if (display.length > 1) {
      setDisplay(display.slice(0, -1));
    } else {
      setDisplay('0');
    }
  };

  const handleEquals = () => {
    playClickSound();
    if (display === '6969') {
      triggerSecretVault();
      return;
    }

    if (!equation) return;
    try {
      const fullExpr = equation + display;
      const sanitized = fullExpr.replace(/×/g, '*').replace(/÷/g, '/');
      const result = Function(`'use strict'; return (${sanitized})`)();
      
      if (Number(result) === 6969 || String(result) === '6969') {
        setDisplay(String(result));
        setTimeout(() => triggerSecretVault(), 200);
        return;
      }

      setDisplay(String(result));
      setEquation('');
      setResetNext(true);
    } catch {
      setDisplay('Error');
      setResetNext(true);
    }
  };

  const handleLockVault = () => {
    playClickSound();
    setIsSecretUnlocked(false);
    setDisplay('0');
    setEquation('');
    setResetNext(false);
  };

  const runDecryptionScan = () => {
    if (isScanning) return;
    playNotificationSound();
    setIsScanning(true);
    setTerminalLogs(prev => [
      ...prev,
      `[SCAN @ ${new Date().toLocaleTimeString()}] Memulai rekursi memori kernel...`
    ]);

    setTimeout(() => {
      setTerminalLogs(prev => [
        ...prev,
        '  > Decrypting buffer: [catatan_rahasia_terbuang.txt]... 100%',
        '  > Hash SHA-256: e8b9c... OK',
        '  > Secret Developer Message: "Terima kasih sudah mencoba dan menjelajahi setiap sudut Windows 11 ini!"'
      ]);
      setIsScanning(false);
    }, 900);
  };

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isSecretUnlocked) {
        if (e.key === 'Escape') {
          handleLockVault();
        }
        return;
      }

      if (['0','1','2','3','4','5','6','7','8','9'].includes(e.key)) {
        handleDigit(e.key);
      } else if (e.key === 'Enter' || e.key === '=') {
        e.preventDefault();
        handleEquals();
      } else if (e.key === 'Backspace') {
        handleBackspace();
      } else if (e.key === 'Escape' || e.key.toLowerCase() === 'c') {
        handleClear();
      } else if (['+', '-', '*', '/'].includes(e.key)) {
        const opMap = { '*': '×', '/': '÷', '+': '+', '-': '-' };
        handleOperator(opMap[e.key]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [display, equation, resetNext, isSecretUnlocked]);

  // If secret vault is unlocked, render the Easter Egg Page (zero emojis)
  if (isSecretUnlocked) {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        backgroundColor: '#0f172a',
        color: '#f8fafc',
        fontFamily: "'Segoe UI', -apple-system, sans-serif",
        overflowY: 'auto',
        position: 'relative',
        userSelect: 'none'
      }}>
        {/* Top Header Bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '10px 14px',
          backgroundColor: 'rgba(15, 23, 42, 0.85)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          position: 'sticky',
          top: 0,
          zIndex: 10
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#10b981',
              boxShadow: '0 0 10px #10b981'
            }} />
            <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.8px', color: '#38bdf8' }}>
              VAULT 6969 UNLOCKED
            </span>
          </div>

          <button
            onClick={handleLockVault}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: '6px',
              color: '#e2e8f0',
              padding: '4px 10px',
              fontSize: '11px',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.15s ease'
            }}
            title="Kembali ke Kalkulator Standar"
          >
            <Lock size={12} color="#f59e0b" />
            <span>Kunci & Kembali</span>
          </button>
        </div>

        {/* Content Body */}
        <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
          
          {/* Banner Hero */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(30, 58, 138, 0.7) 0%, rgba(88, 28, 135, 0.7) 100%)',
            border: '1px solid rgba(147, 197, 253, 0.3)',
            borderRadius: '12px',
            padding: '16px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
              <div style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                backgroundColor: 'rgba(56, 189, 248, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid rgba(56, 189, 248, 0.4)',
                boxShadow: '0 0 16px rgba(56, 189, 248, 0.3)'
              }}>
                <Unlock size={20} color="#38bdf8" />
              </div>
              <div>
                <h3 style={{ margin: 0, fontSize: '15px', fontWeight: 700, color: '#ffffff' }}>
                  DEVELOPER SECRET VAULT
                </h3>
                <span style={{ fontSize: '11.5px', color: '#93c5fd' }}>
                  Petunjuk Recycle Bin berhasil diverifikasi
                </span>
              </div>
            </div>
            <p style={{ margin: 0, fontSize: '12px', lineHeight: 1.5, color: '#cbd5e1' }}>
              Selamat! Anda berhasil menemukan kode <strong>6969</strong> dari catatan terbuang di Recycle Bin. Ini adalah arsip rahasia pengembang Windows 11 Portfolio ini.
            </p>
          </div>

          {/* Tab Selector */}
          <div style={{
            display: 'flex',
            backgroundColor: 'rgba(255, 255, 255, 0.04)',
            borderRadius: '8px',
            padding: '3px',
            border: '1px solid rgba(255, 255, 255, 0.06)'
          }}>
            <button
              onClick={() => { playClickSound(); setActiveTab('dossier'); }}
              style={{
                flex: 1,
                padding: '6px 0',
                border: 'none',
                borderRadius: '6px',
                backgroundColor: activeTab === 'dossier' ? '#2563eb' : 'transparent',
                color: activeTab === 'dossier' ? '#ffffff' : '#94a3b8',
                fontSize: '11px',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '5px',
                transition: 'all 0.15s ease'
              }}
            >
              <Folder size={12} />
              <span>Dossier</span>
            </button>
            <button
              onClick={() => { playClickSound(); setActiveTab('terminal'); }}
              style={{
                flex: 1,
                padding: '6px 0',
                border: 'none',
                borderRadius: '6px',
                backgroundColor: activeTab === 'terminal' ? '#2563eb' : 'transparent',
                color: activeTab === 'terminal' ? '#ffffff' : '#94a3b8',
                fontSize: '11px',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '5px',
                transition: 'all 0.15s ease'
              }}
            >
              <Terminal size={12} />
              <span>Cyber Log</span>
            </button>
            <button
              onClick={() => { playClickSound(); setActiveTab('achievements'); }}
              style={{
                flex: 1,
                padding: '6px 0',
                border: 'none',
                borderRadius: '6px',
                backgroundColor: activeTab === 'achievements' ? '#2563eb' : 'transparent',
                color: activeTab === 'achievements' ? '#ffffff' : '#94a3b8',
                fontSize: '11px',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '5px',
                transition: 'all 0.15s ease'
              }}
            >
              <Trophy size={12} />
              <span>Pencapaian</span>
            </button>
          </div>

          {/* Tab 1: Dossier Content */}
          {activeTab === 'dossier' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{
                backgroundColor: 'rgba(30, 41, 59, 0.7)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '10px',
                padding: '12px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    CREATOR PROFILE
                  </span>
                  <span style={{ fontSize: '10px', backgroundColor: 'rgba(16, 185, 129, 0.2)', color: '#10b981', padding: '2px 6px', borderRadius: '4px', fontWeight: 600 }}>
                    ACTIVE VERIFIED
                  </span>
                </div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#f8fafc' }}>
                  Agung Krisna
                </div>
                <span style={{ fontSize: '11.5px', color: '#38bdf8' }}>
                  Full-Stack Software Engineer & Creative UI Specialist
                </span>
                <div style={{ fontSize: '11.5px', color: '#cbd5e1', lineHeight: 1.4 }}>
                  "Membangun antarmuka desktop web yang hidup, responsif, dan penuh detail interaktif bagi setiap pengunjung."
                </div>
              </div>

              {/* Secret Shortcuts */}
              <div style={{
                backgroundColor: 'rgba(30, 41, 59, 0.5)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                borderRadius: '10px',
                padding: '12px'
              }}>
                <div style={{ fontSize: '11px', fontWeight: 600, color: '#94a3b8', marginBottom: '8px' }}>
                  SHORTCUT APLIKASI:
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
                  <button
                    onClick={() => {
                      playClickSound();
                      if (onLaunchApp) onLaunchApp('chrome', { projectId: 'neurofly' });
                    }}
                    style={secretBtnStyle}
                  >
                    NeuroFly
                  </button>
                  <button
                    onClick={() => {
                      playClickSound();
                      if (onLaunchApp) onLaunchApp('chrome', { projectId: 'tatagih' });
                    }}
                    style={secretBtnStyle}
                  >
                    Tatagih
                  </button>
                  <button
                    onClick={() => {
                      playClickSound();
                      if (onLaunchApp) onLaunchApp('recruiter');
                    }}
                    style={secretBtnStyle}
                  >
                    Recruiter Hub
                  </button>
                  <button
                    onClick={() => {
                      playClickSound();
                      if (onLaunchApp) onLaunchApp('terminal');
                    }}
                    style={secretBtnStyle}
                  >
                    Terminal
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Cyber Terminal Matrix */}
          {activeTab === 'terminal' && (
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px'
            }}>
              <div style={{
                backgroundColor: '#020617',
                border: '1px solid rgba(34, 197, 94, 0.3)',
                borderRadius: '8px',
                padding: '10px',
                fontFamily: "'Courier New', Courier, monospace",
                fontSize: '11px',
                color: '#4ade80',
                minHeight: '130px',
                maxHeight: '170px',
                overflowY: 'auto',
                lineHeight: 1.45,
                boxShadow: 'inset 0 0 12px rgba(34, 197, 94, 0.1)'
              }}>
                {terminalLogs.map((log, idx) => (
                  <div key={idx} style={{ marginBottom: '3px' }}>{log}</div>
                ))}
                {isScanning && <div style={{ color: '#facc15' }}>&gt; Memindai register kernel... [||||||....]</div>}
              </div>

              <button
                onClick={runDecryptionScan}
                disabled={isScanning}
                style={{
                  backgroundColor: '#15803d',
                  border: 'none',
                  borderRadius: '6px',
                  color: '#ffffff',
                  padding: '7px 12px',
                  fontSize: '11px',
                  fontWeight: 600,
                  cursor: isScanning ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  opacity: isScanning ? 0.7 : 1
                }}
              >
                <Terminal size={14} />
                <span>{isScanning ? 'Scanning...' : 'Jalankan Scan Dekripsi Ulang'}</span>
              </button>
            </div>
          )}

          {/* Tab 3: Achievements */}
          {activeTab === 'achievements' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={achievementCardStyle}>
                <div style={badgeIconStyle('#10b981')}>
                  <Trash2 size={15} color="#10b981" />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: '#f8fafc' }}>
                    Trash Detective
                  </div>
                  <div style={{ fontSize: '11px', color: '#94a3b8' }}>
                    Membuka Recycle Bin & membaca catatan terbuang.
                  </div>
                </div>
                <CheckCircle2 size={16} color="#10b981" />
              </div>

              <div style={achievementCardStyle}>
                <div style={badgeIconStyle('#3b82f6')}>
                  <KeyRound size={15} color="#3b82f6" />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: '#f8fafc' }}>
                    Codebreaker 6969
                  </div>
                  <div style={{ fontSize: '11px', color: '#94a3b8' }}>
                    Memasukkan kode rahasia 6969 ke kalkulator.
                  </div>
                </div>
                <CheckCircle2 size={16} color="#3b82f6" />
              </div>

              <div style={achievementCardStyle}>
                <div style={badgeIconStyle('#a855f7')}>
                  <Sparkles size={15} color="#a855f7" />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: '#f8fafc' }}>
                    Curious Adventurer
                  </div>
                  <div style={{ fontSize: '11px', color: '#94a3b8' }}>
                    Menemukan rahasia tersembunyi portfolio Krisna.
                  </div>
                </div>
                <CheckCircle2 size={16} color="#a855f7" />
              </div>
            </div>
          )}

          {/* Sound Effect Trigger Button */}
          <button
            onClick={() => {
              playStartupChime();
            }}
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '8px',
              color: '#f8fafc',
              padding: '8px',
              fontSize: '11.5px',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              transition: 'background-color 0.15s ease'
            }}
          >
            <Sparkles size={14} color="#f59e0b" />
            <span>Putar Efek Suara Chime</span>
          </button>
        </div>
      </div>
    );
  }

  // Regular Calculator View
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      width: '100%',
      backgroundColor: '#202020',
      color: '#ffffff',
      padding: '16px',
      userSelect: 'none'
    }}>
      <div style={{
        height: '80px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        padding: '0 8px 12px 8px'
      }}>
        <div style={{ fontSize: '12px', color: '#9ca3af', minHeight: '16px' }}>{equation}</div>
        <div style={{ fontSize: '36px', fontWeight: 600, letterSpacing: '-0.5px' }}>{display}</div>
      </div>

      <div style={{
        flex: 1,
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '4px'
      }}>
        <button onClick={handleClear} style={calcBtnStyle('#323232')}>C</button>
        <button onClick={handleBackspace} style={calcBtnStyle('#323232')}><Delete size={16} /></button>
        <button onClick={() => handleOperator('%')} style={calcBtnStyle('#323232')}>%</button>
        <button onClick={() => handleOperator('÷')} style={calcBtnStyle('#323232')}>÷</button>

        <button onClick={() => handleDigit('7')} style={calcBtnStyle('#3b3b3b')}>7</button>
        <button onClick={() => handleDigit('8')} style={calcBtnStyle('#3b3b3b')}>8</button>
        <button onClick={() => handleDigit('9')} style={calcBtnStyle('#3b3b3b')}>9</button>
        <button onClick={() => handleOperator('×')} style={calcBtnStyle('#323232')}>×</button>

        <button onClick={() => handleDigit('4')} style={calcBtnStyle('#3b3b3b')}>4</button>
        <button onClick={() => handleDigit('5')} style={calcBtnStyle('#3b3b3b')}>5</button>
        <button onClick={() => handleDigit('6')} style={calcBtnStyle('#3b3b3b')}>6</button>
        <button onClick={() => handleOperator('-')} style={calcBtnStyle('#323232')}>-</button>

        <button onClick={() => handleDigit('1')} style={calcBtnStyle('#3b3b3b')}>1</button>
        <button onClick={() => handleDigit('2')} style={calcBtnStyle('#3b3b3b')}>2</button>
        <button onClick={() => handleDigit('3')} style={calcBtnStyle('#3b3b3b')}>3</button>
        <button onClick={() => handleOperator('+')} style={calcBtnStyle('#323232')}>+</button>

        <button onClick={() => handleDigit('0')} style={{ ...calcBtnStyle('#3b3b3b'), gridColumn: 'span 2' }}>0</button>
        <button onClick={() => handleDigit('.')} style={calcBtnStyle('#3b3b3b')}>.</button>
        <button onClick={handleEquals} style={{ ...calcBtnStyle('#0078d4'), color: '#fff', fontWeight: 600 }}>=</button>
      </div>
    </div>
  );
};

const calcBtnStyle = (bg) => ({
  backgroundColor: bg,
  border: '1px solid rgba(255, 255, 255, 0.05)',
  borderRadius: '4px',
  color: '#ffffff',
  fontSize: '15px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'background-color 0.1s'
});

const secretBtnStyle = {
  backgroundColor: 'rgba(255, 255, 255, 0.06)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '6px',
  color: '#f8fafc',
  padding: '6px 8px',
  fontSize: '11px',
  fontWeight: 600,
  cursor: 'pointer',
  textAlign: 'center',
  transition: 'background-color 0.1s ease'
};

const achievementCardStyle = {
  backgroundColor: 'rgba(30, 41, 59, 0.6)',
  border: '1px solid rgba(255, 255, 255, 0.06)',
  borderRadius: '8px',
  padding: '8px 10px',
  display: 'flex',
  alignItems: 'center',
  gap: '10px'
};

const badgeIconStyle = (color) => ({
  width: '28px',
  height: '28px',
  borderRadius: '6px',
  backgroundColor: `${color}20`,
  border: `1px solid ${color}40`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
});
