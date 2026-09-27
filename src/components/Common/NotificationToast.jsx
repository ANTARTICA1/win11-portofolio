import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { WinIcon } from './WinIcon';
import { playNotificationSound, playClickSound } from '../../utils/sound';

export const NotificationToast = ({ onOpenRecruiter, onOpenExplorer }) => {
  const [show, setShow] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
      playNotificationSound();
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  const handleClose = () => {
    playClickSound();
    setIsClosing(true);
    setTimeout(() => setShow(false), 240);
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 'calc(var(--taskbar-height) + 12px)',
        right: '12px',
        width: '360px',
        maxWidth: 'calc(100vw - 24px)',
        backgroundColor: 'rgba(32, 32, 32, 0.88)',
        backdropFilter: 'blur(30px) saturate(125%)',
        WebkitBackdropFilter: 'blur(30px) saturate(125%)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '8px',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.45), 0 2px 6px rgba(0, 0, 0, 0.25)',
        padding: '12px 14px 14px 14px',
        zIndex: 15000,
        color: '#ffffff',
        fontFamily: 'var(--font-family)',
        animation: isClosing ? 'winToastSlideOut 0.25s cubic-bezier(0.1, 0.9, 0.2, 1) forwards' : 'winToastSlideIn 0.3s cubic-bezier(0.1, 0.9, 0.2, 1) forwards'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <WinIcon name="win-start" size={16} />
          <span style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.75)', fontWeight: 400 }}>
            Windows Welcome
          </span>
          <span style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.45)' }}>•</span>
          <span style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.5)' }}>Baru saja</span>
        </div>

        <button
          onClick={handleClose}
          style={{
            background: 'transparent',
            border: 'none',
            borderRadius: '4px',
            color: 'rgba(255, 255, 255, 0.6)',
            cursor: 'pointer',
            padding: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background-color 0.1s, color 0.1s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
            e.currentTarget.style.color = '#ffffff';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)';
          }}
          title="Tutup notifikasi"
        >
          <X size={13} />
        </button>
      </div>

      <div style={{ fontSize: '13.5px', fontWeight: 600, color: '#ffffff', marginBottom: '3px' }}>
        Selamat Datang di Windows 11 Portfolio
      </div>
      <p style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.78)', lineHeight: '1.45', marginBottom: '14px' }}>
        Jelajahi karya, proyek, CV, & sertifikasi Agung Krisna. Klik tombol di bawah untuk membuka informasi cepat.
      </p>

      <div style={{ display: 'flex', gap: '8px' }}>
        <button
          onClick={() => {
            playClickSound();
            onOpenRecruiter();
            handleClose();
          }}
          style={{
            flex: 1,
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#0078d4',
            color: '#ffffff',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            borderRadius: '4px',
            fontSize: '12px',
            fontWeight: 500,
            cursor: 'pointer',
            transition: 'background-color 0.12s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#106ebe'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#0078d4'}
        >
          Buka Resume (CV)
        </button>

        <button
          onClick={() => {
            playClickSound();
            onOpenExplorer();
            handleClose();
          }}
          style={{
            flex: 1,
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.06)',
            color: '#ffffff',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '4px',
            fontSize: '12px',
            fontWeight: 400,
            cursor: 'pointer',
            transition: 'background-color 0.12s, border-color 0.12s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.14)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.06)';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
          }}
        >
          Jelajahi Proyek
        </button>
      </div>
    </div>
  );
};
