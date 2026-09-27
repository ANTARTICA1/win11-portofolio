import React, { useState, useEffect } from 'react';
import { X, Sparkles, Send, FileText, CheckCircle } from 'lucide-react';
import { playWindowSound, playClickSound } from '../../utils/sound';

export const NotificationToast = ({ onOpenRecruiter, onOpenExplorer }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
      playWindowSound('open');
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div
      className="anim-flyout"
      style={{
        position: 'fixed',
        bottom: 'calc(var(--taskbar-height) + 16px)',
        right: '16px',
        width: '360px',
        maxWidth: '92vw',
        backgroundColor: 'rgba(32, 32, 38, 0.96)',
        backdropFilter: 'blur(28px) saturate(150%)',
        WebkitBackdropFilter: 'blur(28px) saturate(150%)',
        border: '1px solid rgba(139, 92, 246, 0.4)',
        borderRadius: '12px',
        boxShadow: '0 16px 36px rgba(0, 0, 0, 0.65)',
        padding: '16px',
        zIndex: 15000,
        color: '#ffffff',
        fontFamily: 'Segoe UI, sans-serif'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{
            width: '22px',
            height: '22px',
            borderRadius: '50%',
            backgroundColor: '#8b5cf6',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Sparkles size={12} color="#fff" />
          </div>
          <span style={{ fontSize: '12px', fontWeight: 600, color: '#e9d5ff' }}>
            Agung Krisna — Portfolio OS
          </span>
        </div>

        <button
          onClick={() => { playClickSound(); setShow(false); }}
          style={{ background: 'none', border: 'none', color: '#9ca3af', cursor: 'pointer', padding: '2px' }}
        >
          <X size={15} />
        </button>
      </div>

      <div style={{ fontSize: '13px', fontWeight: 600, marginBottom: '4px' }}>
        👋 Selamat Datang, Rekruter!
      </div>
      <p style={{ fontSize: '12px', color: '#94a3b8', lineHeight: '1.45', marginBottom: '14px' }}>
        Portfolio ini dirancang 1:1 mirip Windows 11. Butuh CV atau info kontak cepat? Klik tombol di bawah ini.
      </p>

      <div style={{ display: 'flex', gap: '8px' }}>
        <button
          onClick={() => {
            playClickSound();
            onOpenRecruiter();
            setShow(false);
          }}
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
            padding: '7px 12px',
            backgroundColor: '#8b5cf6',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            fontSize: '12px',
            fontWeight: 600,
            cursor: 'pointer'
          }}
        >
          <FileText size={14} />
          Buka Resume (CV)
        </button>

        <button
          onClick={() => {
            playClickSound();
            onOpenExplorer();
            setShow(false);
          }}
          style={{
            flex: 1,
            padding: '7px 12px',
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
            color: '#cbd5e1',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            borderRadius: '6px',
            fontSize: '12px',
            cursor: 'pointer'
          }}
        >
          Jelajahi Proyek
        </button>
      </div>
    </div>
  );
};
