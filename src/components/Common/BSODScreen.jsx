import React, { useState, useEffect } from 'react';
import { playBSODSound, playStartupChime, playClickSound } from '../../utils/sound';
import { INITIAL_USER } from '../../data/fileSystem';

export const BSODScreen = ({ onClose, onOpenRecruiter }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    playBSODSound();

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const jump = Math.floor(Math.random() * 24) + 12;
        return Math.min(100, prev + jump);
      });
    }, 450);

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' || e.key === 'Enter') {
        handleRestart();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearInterval(interval);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleRestart = () => {
    playClickSound();
    playStartupChime();
    onClose();
  };

  // WhatsApp link with custom message
  const waUrl = `https://wa.me/6282247846546?text=Halo%20Agung%20Krisna,%20saya%20terkena%20BSOD%20(Recruiter%20Exception)%20di%20portfolio%20Anda%20dan%20tertarik%20untuk%20diskusi!`;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999999,
        backgroundColor: '#0078d7',
        color: '#ffffff',
        fontFamily: "'Segoe UI', -apple-system, sans-serif",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '8vw 12vw',
        userSelect: 'none',
        overflow: 'auto',
        animation: 'fadeIn 0.2s ease-in'
      }}
      onClick={(e) => {
        if (e.target.tagName !== 'BUTTON' && e.target.tagName !== 'A') {
          // don't restart immediately on text click
        }
      }}
    >
      <div style={{ fontSize: 'clamp(64px, 10vw, 110px)', lineHeight: 1, marginBottom: '24px' }}>
        :(
      </div>

      <h1 style={{ fontSize: 'clamp(20px, 2.5vw, 32px)', fontWeight: 300, lineHeight: 1.35, marginBottom: '24px', maxWidth: '850px' }}>
        Perangkat Anda mengalami kendala fatal: <strong>Sangat butuh merekrut Agung Krisna sekarang juga.</strong>
      </h1>

      <p style={{ fontSize: 'clamp(14px, 1.4vw, 18px)', fontWeight: 300, lineHeight: 1.5, marginBottom: '32px', opacity: 0.95, maxWidth: '800px' }}>
        Kami baru saja mengumpulkan bukti portofolio yang luar biasa. Sistem ini akan otomatis membuka jalur komunikasi agar Anda tidak melewatkan kandidat terbaik.
      </p>

      <div style={{ fontSize: 'clamp(16px, 1.8vw, 22px)', fontWeight: 400, marginBottom: '36px' }}>
        {progress}% selesai mengagumi portofolio...
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '32px', marginBottom: '40px' }}>
        {/* Simulated QR Code SVG */}
        <div style={{
          backgroundColor: '#ffffff',
          padding: '10px',
          borderRadius: '6px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          boxShadow: '0 8px 24px rgba(0,0,0,0.25)'
        }}>
          <svg width="108" height="108" viewBox="0 0 24 24" fill="#000000">
            <path d="M2 2h8v8H2V2zm2 2v4h4V4H4zm10-2h8v8h-8V2zm2 2v4h4V4h-4zM2 14h8v8H2v-8zm2 2v4h4v-4H4zm8-2h2v2h-2v-2zm2 2h2v2h-2v-2zm-2 2h2v2h-2v-2zm4-4h2v2h-2v-2zm2 2h2v2h-2v-2zm-2 2h2v2h-2v-2zm2 2h2v2h-2v-2zm-4 0h2v2h-2v-2zm-6-2h2v2h-2v-2zm0-4h2v2h-2v-2z" />
          </svg>
          <span style={{ fontSize: '9px', color: '#334155', fontWeight: 700, marginTop: '4px' }}>SCAN WA AGUNG</span>
        </div>

        <div style={{ fontSize: 'clamp(12px, 1.1vw, 14.5px)', lineHeight: 1.6, opacity: 0.95 }}>
          <div>Untuk info lebih lanjut tentang crash luar biasa ini dan perbaikan segera:</div>
          <div style={{ marginTop: '8px' }}>
            Kunjungi: <span style={{ textDecoration: 'underline', fontWeight: 600 }}>https://portofolio.krisnaartha.my.id</span>
          </div>
          <div style={{ marginTop: '4px' }}>
            Stop code: <strong style={{ color: '#fed7aa', letterSpacing: '0.5px' }}>RECRUITER_IMPRESSED_EXCEPTION</strong>
          </div>
          <div>
            What failed: <strong style={{ color: '#fed7aa', letterSpacing: '0.5px' }}>GUNGKRISNA_TOO_CREATIVE.SYS</strong>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: '#22c55e',
            color: '#ffffff',
            padding: '12px 24px',
            borderRadius: '6px',
            fontSize: '13.5px',
            fontWeight: 600,
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
            transition: 'transform 0.1s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
          Hubungi via WhatsApp
        </a>

        <button
          onClick={() => {
            playClickSound();
            onClose();
            if (onOpenRecruiter) onOpenRecruiter();
          }}
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            color: '#ffffff',
            border: '1px solid rgba(255, 255, 255, 0.4)',
            padding: '12px 22px',
            borderRadius: '6px',
            fontSize: '13.5px',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'background-color 0.15s, transform 0.1s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          Buka Resume & CV Agung
        </button>

        <button
          onClick={handleRestart}
          style={{
            backgroundColor: 'transparent',
            color: '#ffffff',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            padding: '12px 20px',
            borderRadius: '6px',
            fontSize: '13.5px',
            fontWeight: 400,
            cursor: 'pointer',
            transition: 'background-color 0.15s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          Restart Windows (Esc)
        </button>
      </div>
    </div>
  );
};

