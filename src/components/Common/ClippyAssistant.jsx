import React, { useState } from 'react';
import { X, Sparkles } from 'lucide-react';
import { playClippySound, playClickSound } from '../../utils/sound';

const CLIPPY_QUOTES = [
  'Kelihatannya Anda sedang mencari Full-Stack Developer berbakat! Mau kubantu download CV Agung Krisna?',
  'Tahukah Anda? Agung membangun 10+ proyek web & mobile dari nol dengan arsitektur clean-code.',
  'Butuh developer yang paham mobile (Flutter) sekaligus backend (Laravel)? Agung solusinya!',
  'Psst... coba buka Recycle Bin di desktop. Ada "FILE RAHASIA.txt" yang mencurigakan di sana 😉',
  'Ingin melihat simulasi crash? Coba ketik "bsod" di Run dialog (Alt+R) atau ketuk logo Windows 5x!',
  'Para gamer sejati: coba tekan tombol panah Konami Code (↑ ↑ ↓ ↓ ← → ← → B A) di desktop!',
  'Ketik "matrix" di Command Prompt kalau mau pura-pura sibuk di depan bos.'
];

export const ClippyAssistant = ({ onClose, onOpenRecruiter, onOpenWhatsApp }) => {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [isWiggling, setIsWiggling] = useState(false);

  const handlePokeClippy = () => {
    playClippySound();
    setIsWiggling(true);
    setTimeout(() => setIsWiggling(false), 500);
    setQuoteIndex((prev) => (prev + 1) % CLIPPY_QUOTES.length);
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
        fontFamily: "'Segoe UI', sans-serif"
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
          width: '270px',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',
          position: 'relative',
          marginBottom: '10px',
          fontSize: '12.5px',
          lineHeight: 1.45,
          animation: 'fadeIn 0.25s ease-out'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px', borderBottom: '1px solid #cbd5e1', paddingBottom: '4px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '11px', fontWeight: 700, color: '#0369a1' }}>
            <Sparkles size={13} color="#f59e0b" />
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
              alignItems: 'center'
            }}
            title="Tutup Clippy"
          >
            <X size={14} />
          </button>
        </div>

        <p style={{ margin: '6px 0 10px', fontWeight: 500 }}>
          {CLIPPY_QUOTES[quoteIndex]}
        </p>

        <div style={{ display: 'flex', gap: '6px', marginTop: '8px' }}>
          <button
            onClick={() => {
              playClickSound();
              if (onOpenRecruiter) onOpenRecruiter();
            }}
            style={{
              flex: 1,
              backgroundColor: '#0284c7',
              color: '#ffffff',
              border: 'none',
              borderRadius: '4px',
              padding: '5px 8px',
              fontSize: '11px',
              fontWeight: 600,
              cursor: 'pointer'
            }}
          >
            Buka CV
          </button>
          <button
            onClick={handlePokeClippy}
            style={{
              flex: 1,
              backgroundColor: '#e2e8f0',
              color: '#1e293b',
              border: '1px solid #94a3b8',
              borderRadius: '4px',
              padding: '5px 8px',
              fontSize: '11px',
              cursor: 'pointer'
            }}
          >
            Tip Lainnya ❯
          </button>
        </div>

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

      {/* Clippy Paperclip Avatar */}
      <div
        onClick={handlePokeClippy}
        style={{
          cursor: 'pointer',
          transform: isWiggling ? 'scale(1.15) rotate(10deg)' : 'scale(1) rotate(0deg)',
          transition: 'transform 0.15s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          userSelect: 'none',
          paddingRight: '16px'
        }}
        title="Klik Clippy untuk tip rahasia lainnya!"
      >
        <svg width="68" height="74" viewBox="0 0 100 110" fill="none">
          {/* Paperclip wire loops */}
          <path
            d="M50 15 C30 15, 20 30, 20 60 C20 85, 35 100, 55 100 C75 100, 85 85, 85 55 C85 30, 75 10, 50 10 C30 10, 30 40, 30 65 C30 80, 40 85, 52 85 C62 85, 70 78, 70 60 C70 42, 65 35, 50 35"
            stroke="#94a3b8"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
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
          {/* Big Googly Eyes */}
          <circle cx="41" cy="48" r="9" fill="#ffffff" stroke="#1e293b" strokeWidth="2.5" />
          <circle cx="63" cy="48" r="9" fill="#ffffff" stroke="#1e293b" strokeWidth="2.5" />
          {/* Pupils */}
          <circle cx="43" cy="48" r="4.2" fill="#0f172a" />
          <circle cx="44.5" cy="46.5" r="1.5" fill="#ffffff" />
          <circle cx="65" cy="48" r="4.2" fill="#0f172a" />
          <circle cx="66.5" cy="46.5" r="1.5" fill="#ffffff" />
        </svg>
      </div>
    </div>
  );
};
