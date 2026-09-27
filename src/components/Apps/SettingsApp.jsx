import React, { useState, useEffect } from 'react';
import { 
  Laptop, Palette, Volume2, Shield, Moon, Sun, 
  Check, Info, Sparkles 
} from 'lucide-react';
import { playClickSound, setSoundEnabled, isSoundEnabled } from '../../utils/sound';

export const SettingsApp = ({
  currentWallpaper,
  onSelectWallpaper,
  accentColor,
  onSelectAccentColor,
  isDarkTheme,
  onToggleTheme
}) => {
  const [activeTab, setActiveTab] = useState('system');
  const [soundActive, setSoundActive] = useState(isSoundEnabled());
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth <= 768 : false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const wallpapers = [
    { id: 'win11_bloom_light', name: 'Windows 11 Bloom (Default)', path: '/wallpapers/win11_bloom_light.jpg' },
    { id: 'win11_bloom_dark', name: 'Windows 11 Bloom (Dark)', path: '/wallpapers/win11_bloom_dark.jpg' },
    { id: 'win11_glow', name: 'Windows 11 Glow', path: '/wallpapers/win11_glow.jpg' },
    { id: 'win11_motion', name: 'Windows 11 Captured Motion', path: '/wallpapers/win11_motion.jpg' },
    { id: 'win11_sunrise', name: 'Windows 11 Sunrise', path: '/wallpapers/win11_sunrise.jpg' },
    { id: 'win11_flow', name: 'Windows 11 Flow', path: '/wallpapers/win11_flow.jpg' }
  ];

  const accentColors = [
    { name: 'Windows Blue', color: '#0078d4' },
    { name: 'Royal Purple', color: '#8b5cf6' },
    { name: 'Emerald Green', color: '#10b981' },
    { name: 'Sunset Amber', color: '#f59e0b' },
    { name: 'Crimson Rose', color: '#f43f5e' }
  ];

  const handleSoundToggle = () => {
    const nextVal = !soundActive;
    setSoundActive(nextVal);
    setSoundEnabled(nextVal);
    if (nextVal) playClickSound();
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      height: '100%',
      width: '100%',
      backgroundColor: '#202020',
      color: '#ffffff',
      fontFamily: 'Segoe UI, sans-serif'
    }}>
      <div style={{
        width: isMobile ? '100%' : '210px',
        backgroundColor: '#1b1b1b',
        borderRight: isMobile ? 'none' : '1px solid rgba(255, 255, 255, 0.08)',
        borderBottom: isMobile ? '1px solid rgba(255, 255, 255, 0.08)' : 'none',
        padding: isMobile ? '8px 12px' : '16px 8px',
        display: 'flex',
        flexDirection: isMobile ? 'row' : 'column',
        gap: '6px',
        overflowX: isMobile ? 'auto' : 'visible'
      }}>
        {!isMobile && (
          <div style={{ padding: '0 12px 14px 12px', fontSize: '15px', fontWeight: 600 }}>
            Settings
          </div>
        )}

        <button
          onClick={() => { playClickSound(); setActiveTab('system'); }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 12px',
            backgroundColor: activeTab === 'system' ? 'rgba(255, 255, 255, 0.12)' : 'transparent',
            border: 'none',
            borderRadius: '6px',
            color: activeTab === 'system' ? '#ffffff' : '#9ca3af',
            fontSize: '12.5px',
            cursor: 'pointer',
            textAlign: 'left',
            whiteSpace: 'nowrap'
          }}
        >
          <Laptop size={16} color={accentColor} />
          <span>System & About</span>
        </button>

        <button
          onClick={() => { playClickSound(); setActiveTab('personalization'); }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 12px',
            backgroundColor: activeTab === 'personalization' ? 'rgba(255, 255, 255, 0.12)' : 'transparent',
            border: 'none',
            borderRadius: '6px',
            color: activeTab === 'personalization' ? '#ffffff' : '#9ca3af',
            fontSize: '12.5px',
            cursor: 'pointer',
            textAlign: 'left',
            whiteSpace: 'nowrap'
          }}
        >
          <Palette size={16} color="#c084fc" />
          <span>Personalization</span>
        </button>

        <button
          onClick={() => { playClickSound(); setActiveTab('sound'); }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 12px',
            backgroundColor: activeTab === 'sound' ? 'rgba(255, 255, 255, 0.12)' : 'transparent',
            border: 'none',
            borderRadius: '6px',
            color: activeTab === 'sound' ? '#ffffff' : '#9ca3af',
            fontSize: '12.5px',
            cursor: 'pointer',
            textAlign: 'left',
            whiteSpace: 'nowrap'
          }}
        >
          <Volume2 size={16} color="#34d399" />
          <span>Sound</span>
        </button>
      </div>

      <div style={{
        flex: 1,
        padding: isMobile ? '16px' : '24px 32px',
        overflowY: 'auto',
        backgroundColor: '#202020'
      }}>
        {activeTab === 'system' && (
          <div>
            <h2 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '6px' }}>About System</h2>
            <p style={{ fontSize: '12.5px', color: '#9ca3af', marginBottom: '20px' }}>
              Device specifications and developer environment info.
            </p>

            <div style={{
              backgroundColor: '#282828',
              borderRadius: '8px',
              padding: '16px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              marginBottom: '20px'
            }}>
              <h3 style={{ fontSize: '14px', fontWeight: 600, marginBottom: '14px', color: '#38bdf8' }}>
                Device Specifications
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '160px 1fr', gap: '8px', fontSize: '12.5px' }}>
                <span style={{ color: '#9ca3af' }}>Device name:</span>
                <span>AGUNG-PC</span>
                <span style={{ color: '#9ca3af' }}>Developer:</span>
                <span style={{ fontWeight: 600, color: '#4ade80' }}>Agung Krisna (Full-Stack & Mobile)</span>
                <span style={{ color: '#9ca3af' }}>Processor:</span>
                <span>AMD Ryzen 7 5800H with Radeon Graphics 3.20 GHz</span>
                <span style={{ color: '#9ca3af' }}>Installed RAM:</span>
                <span>16.0 GB (3200 MHz DDR4)</span>
                <span style={{ color: '#9ca3af' }}>System type:</span>
                <span>64-bit OS, x64-based workstation</span>
              </div>
            </div>

            <div style={{
              backgroundColor: '#282828',
              borderRadius: '8px',
              padding: '16px',
              border: '1px solid rgba(255, 255, 255, 0.08)'
            }}>
              <h3 style={{ fontSize: '14px', fontWeight: 600, marginBottom: '14px', color: '#a855f7' }}>
                Windows Specifications
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '160px 1fr', gap: '8px', fontSize: '12.5px' }}>
                <span style={{ color: '#9ca3af' }}>Edition:</span>
                <span>Windows 11 Pro (Portfolio Edition)</span>
                <span style={{ color: '#9ca3af' }}>Version:</span>
                <span>24H2</span>
                <span style={{ color: '#9ca3af' }}>Architecture:</span>
                <span>React 19 + Vite Client Static SPA (Zero Backend)</span>
                <span style={{ color: '#9ca3af' }}>Deployment:</span>
                <span>Vercel Edge Global CDN</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'personalization' && (
          <div>
            <h2 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '6px' }}>Personalization</h2>
            <p style={{ fontSize: '12.5px', color: '#9ca3af', marginBottom: '20px' }}>
              Pilih wallpaper favorit dan warna aksen Windows 11 Anda.
            </p>

            <h3 style={{ fontSize: '14px', fontWeight: 600, marginBottom: '12px' }}>Pilih Wallpaper</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '14px', marginBottom: '28px' }}>
              {wallpapers.map((wp) => (
                <div
                  key={wp.id}
                  onClick={() => { playClickSound(); onSelectWallpaper(wp.path); }}
                  style={{
                    borderRadius: '8px',
                    overflow: 'hidden',
                    border: currentWallpaper === wp.path ? `2px solid ${accentColor}` : '2px solid transparent',
                    cursor: 'pointer',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                    position: 'relative'
                  }}
                >
                  <img src={wp.path} alt={wp.name} style={{ width: '100%', height: '100px', objectFit: 'cover' }} />
                  <div style={{
                    padding: '8px 10px',
                    backgroundColor: '#282828',
                    fontSize: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}>
                    <span>{wp.name}</span>
                    {currentWallpaper === wp.path && <Check size={14} color={accentColor} />}
                  </div>
                </div>
              ))}
            </div>

            <h3 style={{ fontSize: '14px', fontWeight: 600, marginBottom: '12px' }}>Warna Aksen (Accent Color)</h3>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '28px' }}>
              {accentColors.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => { playClickSound(); onSelectAccentColor(item.color); }}
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    backgroundColor: item.color,
                    border: accentColor === item.color ? '3px solid #ffffff' : 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.4)'
                  }}
                  title={item.name}
                >
                  {accentColor === item.color && <Check size={18} color="#fff" />}
                </button>
              ))}
            </div>

            <h3 style={{ fontSize: '14px', fontWeight: 600, marginBottom: '12px' }}>Mode Tema</h3>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <button
                onClick={() => { playClickSound(); if (!isDarkTheme) onToggleTheme(); }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 16px',
                  borderRadius: '6px',
                  backgroundColor: isDarkTheme ? accentColor : '#282828',
                  color: '#fff',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '12.5px'
                }}
              >
                <Moon size={15} />
                <span>Dark Mode</span>
              </button>

              <button
                onClick={() => { playClickSound(); if (isDarkTheme) onToggleTheme(); }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 16px',
                  borderRadius: '6px',
                  backgroundColor: !isDarkTheme ? accentColor : '#282828',
                  color: '#fff',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '12.5px'
                }}
              >
                <Sun size={15} />
                <span>Light Mode</span>
              </button>
            </div>
          </div>
        )}

        {activeTab === 'sound' && (
          <div>
            <h2 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '6px' }}>Sound & Effects</h2>
            <p style={{ fontSize: '12.5px', color: '#9ca3af', marginBottom: '20px' }}>
              Pengaturan efek audio sintetis Windows 11.
            </p>

            <div style={{
              backgroundColor: '#282828',
              borderRadius: '8px',
              padding: '16px 20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              border: '1px solid rgba(255, 255, 255, 0.08)'
            }}>
              <div>
                <h4 style={{ fontSize: '14px', fontWeight: 500, marginBottom: '4px' }}>Efek Suara Sistem (Audio Cues)</h4>
                <p style={{ fontSize: '12px', color: '#9ca3af' }}>Mainkan nada klik dan startup audio Windows sintetis</p>
              </div>

              <button
                onClick={handleSoundToggle}
                style={{
                  padding: '6px 14px',
                  borderRadius: '6px',
                  backgroundColor: soundActive ? accentColor : '#3f3f46',
                  color: '#fff',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '12.5px'
                }}
              >
                {soundActive ? 'Aktif' : 'Mute'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
