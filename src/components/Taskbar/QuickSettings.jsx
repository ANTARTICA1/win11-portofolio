import React, { useState, useEffect, useRef } from 'react';
import { 
  Wifi, Bluetooth, Moon, Volume2, Sun, Battery, 
  Plane, Sliders 
} from 'lucide-react';
import { playClickSound, setMasterVolume, setSoundEnabled } from '../../utils/sound';

export const QuickSettings = ({ 
  isOpen, 
  onClose, 
  accentColor, 
  onOpenSettings,
  brightness = 100,
  setBrightness,
  nightLight = false,
  setNightLight,
  volume = 80,
  setVolume
}) => {
  const [wifiActive, setWifiActive] = useState(true);
  const [btActive, setBtActive] = useState(true);
  const flyoutRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (isOpen && flyoutRef.current && !flyoutRef.current.contains(e.target)) {
        if (!e.target.closest('.tray-btn')) {
          onClose();
        }
      }
    };

    if (isOpen) {
      document.addEventListener('pointerdown', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('pointerdown', handleOutsideClick);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const toggleButtons = [
    { label: 'Wi-Fi', sub: 'Home-Fiber-5G', icon: Wifi, active: wifiActive, toggle: () => setWifiActive(!wifiActive) },
    { label: 'Bluetooth', sub: 'AirPods Connected', icon: Bluetooth, active: btActive, toggle: () => setBtActive(!btActive) },
    { 
      label: 'Night light', 
      sub: nightLight ? 'On' : 'Off', 
      icon: Moon, 
      active: nightLight, 
      toggle: () => setNightLight ? setNightLight(!nightLight) : null 
    },
    { label: 'Airplane mode', sub: 'Off', icon: Plane, active: false, toggle: () => {} },
    { label: 'Battery saver', sub: 'Off', icon: Battery, active: false, toggle: () => {} },
    { label: 'Accessibility', sub: 'Ready', icon: Sliders, active: false, toggle: () => {} }
  ];

  const handleVolumeChange = (newVal) => {
    const num = Number(newVal);
    if (setVolume) setVolume(num);
    setMasterVolume(num / 100);
    if (num === 0) {
      setSoundEnabled(false);
    } else {
      setSoundEnabled(true);
    }
  };

  return (
    <div
      ref={flyoutRef}
      className="anim-flyout"
      style={{
        position: 'fixed',
        bottom: 'calc(var(--taskbar-height) + 12px)',
        right: '12px',
        width: '360px',
        backgroundColor: 'rgba(32, 32, 32, 0.94)',
        backdropFilter: 'blur(30px) saturate(150%)',
        WebkitBackdropFilter: 'blur(30px) saturate(150%)',
        borderRadius: '12px',
        border: '1px solid rgba(255, 255, 255, 0.12)',
        boxShadow: '0 16px 40px rgba(0, 0, 0, 0.6)',
        padding: '20px',
        zIndex: 10001,
        color: '#ffffff'
      }}
      onClick={(e) => e.stopPropagation()}
    >
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '10px',
        marginBottom: '20px'
      }}>
        {toggleButtons.map((btn, idx) => {
          const Icon = btn.icon;
          return (
            <div
              key={idx}
              onClick={() => {
                playClickSound();
                btn.toggle();
              }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '12px 6px',
                borderRadius: '8px',
                backgroundColor: btn.active ? accentColor : 'rgba(255, 255, 255, 0.08)',
                color: btn.active ? '#ffffff' : '#cbd5e1',
                cursor: 'pointer',
                transition: 'background-color 0.12s',
                textAlign: 'center'
              }}
            >
              <Icon size={18} style={{ marginBottom: '6px' }} />
              <span style={{ fontSize: '11px', fontWeight: 600 }}>{btn.label}</span>
              <span style={{ fontSize: '9.5px', opacity: 0.75 }}>{btn.sub}</span>
            </div>
          );
        })}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Sun size={17} color="#9ca3af" />
          <input
            type="range"
            min="30"
            max="100"
            value={brightness}
            onChange={(e) => setBrightness && setBrightness(Number(e.target.value))}
            style={{ flex: 1, accentColor: accentColor }}
            title={`Brightness: ${brightness}%`}
          />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Volume2 size={17} color="#9ca3af" />
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={(e) => handleVolumeChange(e.target.value)}
            style={{ flex: 1, accentColor: accentColor }}
            title={`Volume: ${volume}%`}
          />
        </div>
      </div>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: '14px',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        fontSize: '11.5px',
        color: '#9ca3af'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Battery size={16} color="#22c55e" />
          <span style={{ color: '#ffffff', fontWeight: 500 }}>98% (Battery Healthy)</span>
        </div>

        <span
          onClick={() => {
            playClickSound();
            onOpenSettings();
            onClose();
          }}
          style={{ cursor: 'pointer', color: '#60a5fa' }}
        >
          All Settings &gt;
        </span>
      </div>
    </div>
  );
};
