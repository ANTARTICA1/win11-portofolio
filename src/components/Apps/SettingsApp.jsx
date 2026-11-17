import React, { useState, useEffect } from 'react';
import { 
  Laptop, Palette, Volume2, Moon, Sun, 
  Check, Copy, ExternalLink 
} from 'lucide-react';
import { playClickSound, setSoundEnabled, isSoundEnabled } from '../../utils/sound';
import { INITIAL_USER } from '../../data/fileSystem';

export const SettingsApp = ({
  currentWallpaper,
  onSelectWallpaper,
  accentColor,
  onSelectAccentColor,
  isDarkTheme,
  onToggleTheme,
  onLaunchApp
}) => {
  const [activeTab, setActiveTab] = useState('system');
  const [soundActive, setSoundActive] = useState(isSoundEnabled());
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth <= 768 : false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const wallpapers = [
    { id: 'win11_bloom_dark', name: 'Windows 11 Bloom (Dark / Default)', path: '/wallpapers/win11_bloom_dark.jpg' },
    { id: 'win11_bloom_light', name: 'Windows 11 Bloom (Light)', path: '/wallpapers/win11_bloom_light.jpg' },
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

  const handleCopySystemInfo = () => {
    playClickSound();
    const info = `AGUNG-PC SPECIFICATIONS:
Developer: Agung Krisna (Full-Stack & Mobile)
Processor: AMD Ryzen 7 5800H with Radeon Graphics 3.20 GHz
Installed RAM: 16.0 GB (3200 MHz DDR4)
System type: 64-bit OS, x64-based workstation
Edition: Windows 11 Pro (Portfolio Edition)
Version: 24H2
Architecture: React 19 + Vite Client Static SPA (Zero Backend)
Deployment: Vercel Edge Global CDN
Location: Denpasar, Bali, Indonesia
Portfolio Site: https://portofolio.krisnaartha.my.id
GitHub: https://github.com/ANTARTICA1`;

    navigator.clipboard.writeText(info).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }).catch(() => {});
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      height: '100%',
      width: '100%',
      backgroundColor: '#202020',
      color: '#ffffff',
      fontFamily: 'Segoe UI, -apple-system, sans-serif'
    }}>
      {/* Sidebar Navigation */}
      <div style={{
        width: isMobile ? '100%' : '220px',
        backgroundColor: '#1b1b1b',
        borderRight: isMobile ? 'none' : '1px solid rgba(255, 255, 255, 0.08)',
        borderBottom: isMobile ? '1px solid rgba(255, 255, 255, 0.08)' : 'none',
        padding: isMobile ? '8px 12px' : '16px 8px',
        display: 'flex',
        flexDirection: isMobile ? 'row' : 'column',
        gap: '6px',
        overflowX: isMobile ? 'auto' : 'visible',
        flexShrink: 0
      }}>
        {!isMobile && (
          <div style={{ padding: '0 12px 14px 12px', fontSize: '15px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Laptop size={18} color={accentColor} />
            <span>Settings</span>
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

      {/* Main Content Area */}
      <div style={{
        flex: 1,
        padding: isMobile ? '16px' : '24px 32px',
        overflowY: 'auto',
        backgroundColor: '#202020'
      }}>
        {/* ================= TAB 1: ABOUT SYSTEM ================= */}
        {activeTab === 'system' && (
          <div style={{ maxWidth: '880px' }}>
            <h1 style={{ fontSize: '24px', fontWeight: 600, margin: '0 0 4px 0', color: '#ffffff' }}>
              About System
            </h1>
            <p style={{ fontSize: '13px', color: '#9ca3af', margin: '0 0 24px 0' }}>
              Device specifications and developer environment info.
            </p>

            {/* Card 1: Device Specifications */}
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
              borderRadius: '8px',
              padding: '24px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              marginBottom: '20px'
            }}>
              <h3 style={{ fontSize: '15px', fontWeight: 600, color: '#38bdf8', margin: '0 0 18px 0' }}>
                Device Specifications
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13px' }}>
                <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row' }}>
                  <span style={{ color: '#9ca3af', width: '200px', flexShrink: 0 }}>Device name:</span>
                  <span style={{ color: '#ffffff', fontWeight: 500 }}>AGUNG-PC</span>
                </div>

                <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row' }}>
                  <span style={{ color: '#9ca3af', width: '200px', flexShrink: 0 }}>Developer:</span>
                  <span style={{ color: '#4ade80', fontWeight: 500 }}>Agung Krisna (Full-Stack &amp; Mobile)</span>
                </div>

                <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row' }}>
                  <span style={{ color: '#9ca3af', width: '200px', flexShrink: 0 }}>Processor:</span>
                  <span style={{ color: '#ffffff' }}>AMD Ryzen 7 5800H with Radeon Graphics 3.20 GHz</span>
                </div>

                <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row' }}>
                  <span style={{ color: '#9ca3af', width: '200px', flexShrink: 0 }}>Installed RAM:</span>
                  <span style={{ color: '#ffffff' }}>16.0 GB (3200 MHz DDR4)</span>
                </div>

                <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row' }}>
                  <span style={{ color: '#9ca3af', width: '200px', flexShrink: 0 }}>System type:</span>
                  <span style={{ color: '#ffffff' }}>64-bit OS, x64-based workstation</span>
                </div>

                <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row' }}>
                  <span style={{ color: '#9ca3af', width: '200px', flexShrink: 0 }}>Pen and touch:</span>
                  <span style={{ color: '#ffffff' }}>No pen or touch input is available for this display</span>
                </div>
              </div>

              <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'flex-start' }}>
                <button
                  type="button"
                  onClick={handleCopySystemInfo}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    color: '#ffffff',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    borderRadius: '4px',
                    padding: '6px 20px',
                    fontSize: '12px',
                    fontWeight: 500,
                    cursor: 'pointer',
                    transition: 'background-color 0.12s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.14)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)'}
                >
                  {copied ? <Check size={13} color="#22c55e" /> : <Copy size={13} />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* Card 2: Windows Specifications */}
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
              borderRadius: '8px',
              padding: '24px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              marginBottom: '20px'
            }}>
              <h3 style={{ fontSize: '15px', fontWeight: 600, color: '#c084fc', margin: '0 0 18px 0' }}>
                Windows Specifications
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13px' }}>
                <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row' }}>
                  <span style={{ color: '#9ca3af', width: '200px', flexShrink: 0 }}>Edition:</span>
                  <span style={{ color: '#ffffff' }}>Windows 11 Pro (Portfolio Edition)</span>
                </div>

                <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row' }}>
                  <span style={{ color: '#9ca3af', width: '200px', flexShrink: 0 }}>Version:</span>
                  <span style={{ color: '#ffffff' }}>24H2</span>
                </div>

                <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row' }}>
                  <span style={{ color: '#9ca3af', width: '200px', flexShrink: 0 }}>Architecture:</span>
                  <span style={{ color: '#ffffff' }}>React 19 + Vite Client Static SPA (Zero Backend)</span>
                </div>

                <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row' }}>
                  <span style={{ color: '#9ca3af', width: '200px', flexShrink: 0 }}>Deployment:</span>
                  <span style={{ color: '#ffffff' }}>Vercel Edge Global CDN</span>
                </div>

                <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row' }}>
                  <span style={{ color: '#9ca3af', width: '200px', flexShrink: 0 }}>Location:</span>
                  <span style={{ color: '#ffffff' }}>Denpasar, Bali, Indonesia</span>
                </div>

                <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row' }}>
                  <span style={{ color: '#9ca3af', width: '200px', flexShrink: 0 }}>Experience:</span>
                  <span style={{ color: '#ffffff' }}>Windows Feature Experience Pack 1000.26100.1000.0</span>
                </div>
              </div>

              <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'flex-start' }}>
                <button
                  type="button"
                  onClick={handleCopySystemInfo}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    color: '#ffffff',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    borderRadius: '4px',
                    padding: '6px 20px',
                    fontSize: '12px',
                    fontWeight: 500,
                    cursor: 'pointer',
                    transition: 'background-color 0.12s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.14)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)'}
                >
                  {copied ? <Check size={13} color="#22c55e" /> : <Copy size={13} />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* Card 3: Related Links (Windows 11 Authentic Style) */}
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              borderRadius: '8px',
              padding: '16px 20px',
              border: '1px solid rgba(255, 255, 255, 0.06)'
            }}>
              <h4 style={{ fontSize: '13px', fontWeight: 600, color: '#9ca3af', margin: '0 0 12px 0' }}>
                Related links
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div 
                  onClick={() => { playClickSound(); if (onLaunchApp) onLaunchApp('recruiter'); }}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#60a5fa', fontSize: '13px', cursor: 'pointer', padding: '6px 0' }}
                >
                  <span>Curriculum Vitae (Resume)</span>
                  <ExternalLink size={13} />
                </div>
                <div 
                  onClick={() => { playClickSound(); if (onLaunchApp) onLaunchApp('whatsapp'); }}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#60a5fa', fontSize: '13px', cursor: 'pointer', padding: '6px 0' }}
                >
                  <span>WhatsApp Portfolio</span>
                  <ExternalLink size={13} />
                </div>
                <div 
                  onClick={() => { playClickSound(); window.open('https://github.com/ANTARTICA1', '_blank', 'noopener,noreferrer'); }}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#60a5fa', fontSize: '13px', cursor: 'pointer', padding: '6px 0' }}
                >
                  <span>GitHub Repository</span>
                  <ExternalLink size={13} />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= TAB 2: PERSONALIZATION ================= */}
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
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  title={item.name}
                >
                  {accentColor === item.color && <Check size={16} color="#ffffff" />}
                </button>
              ))}
            </div>

            <h3 style={{ fontSize: '14px', fontWeight: 600, marginBottom: '12px' }}>Tema Sistem (Dark / Light)</h3>
            <button
              onClick={() => { playClickSound(); onToggleTheme(); }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: '6px',
                color: '#ffffff',
                fontSize: '13px',
                cursor: 'pointer'
              }}
            >
              {isDarkTheme ? <Sun size={16} color="#f59e0b" /> : <Moon size={16} color="#c084fc" />}
              <span>Beralih ke {isDarkTheme ? 'Mode Terang' : 'Mode Gelap'}</span>
            </button>
          </div>
        )}

        {/* ================= TAB 3: SOUND ================= */}
        {activeTab === 'sound' && (
          <div>
            <h2 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '6px' }}>Sound Settings</h2>
            <p style={{ fontSize: '12.5px', color: '#9ca3af', marginBottom: '20px' }}>
              Atur efek suara interaktif sistem Windows 11.
            </p>

            <div style={{
              backgroundColor: '#282828',
              borderRadius: '8px',
              padding: '16px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '20px'
            }}>
              <div>
                <div style={{ fontSize: '14px', fontWeight: 600, color: '#f8fafc' }}>Efek Suara Sistem (UI Sound Effects)</div>
                <div style={{ fontSize: '12px', color: '#9ca3af', marginTop: '2px' }}>
                  Memutar suara vintage saat mengklik tombol, membuka jendela, dan interaksi game.
                </div>
              </div>

              <button
                onClick={handleSoundToggle}
                style={{
                  padding: '6px 14px',
                  backgroundColor: soundActive ? accentColor : 'rgba(255, 255, 255, 0.1)',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '6px',
                  fontSize: '12.5px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'background-color 0.15s'
                }}
              >
                {soundActive ? 'Aktif' : 'Mati'}
              </button>
            </div>

            <button
              onClick={() => playClickSound()}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '6px',
                color: '#ffffff',
                fontSize: '12.5px',
                cursor: 'pointer'
              }}
            >
              <Volume2 size={16} />
              <span>Uji Suara Klik Sistem</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
