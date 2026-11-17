import React, { useState, useEffect, useRef } from 'react';
import { 
  Wifi, Bluetooth, Moon, Volume2, VolumeX, Sun, Battery, BatteryCharging,
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
  setVolume,
  onShowTrayToast
}) => {
  const [wifiActive, setWifiActive] = useState(true);
  const [btActive, setBtActive] = useState(true);
  const [airplaneActive, setAirplaneActive] = useState(false);
  const [batterySaver, setBatterySaver] = useState(false);
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
    { 
      label: 'Wi-Fi', 
      sub: wifiActive ? 'Connection secured' : 'Disconnected', 
      icon: Wifi, 
      active: wifiActive, 
      toggle: () => {
        setWifiActive(!wifiActive);
        if (onShowTrayToast) {
          onShowTrayToast(<Wifi size={16} color="#38bdf8" />, 'Wi-Fi Network', 'Connection secured. Your secrets are not.');
        }
      } 
    },
    { 
      label: 'Bluetooth', 
      sub: btActive ? 'AirPods Connected' : 'Disconnected', 
      icon: Bluetooth, 
      active: btActive, 
      toggle: () => {
        setBtActive(!btActive);
        if (onShowTrayToast) {
          onShowTrayToast(
            <Bluetooth size={16} color="#3b82f6" />, 
            'Bluetooth Device', 
            btActive ? 'Device disconnected. Singing in public not recommended.' : 'Searching for coffee machine via Bluetooth 5.3...'
          );
        }
      } 
    },
    { 
      label: 'Night light', 
      sub: nightLight ? 'On' : 'Off', 
      icon: Moon, 
      active: nightLight, 
      toggle: () => {
        if (setNightLight) setNightLight(!nightLight);
        if (onShowTrayToast) {
          onShowTrayToast(
            <Moon size={16} color="#f59e0b" />, 
            'Night Light', 
            !nightLight ? 'Amber tint active. Sleep mode: still rejected by developer.' : 'Blue light returned. Back to coding!'
          );
        }
      } 
    },
    { 
      label: 'Airplane mode', 
      sub: airplaneActive ? 'On' : 'Off', 
      icon: Plane, 
      active: airplaneActive, 
      toggle: () => {
        setAirplaneActive(!airplaneActive);
        if (onShowTrayToast) {
          onShowTrayToast(
            <Plane size={16} color="#38bdf8" />, 
            'Airplane Mode', 
            !airplaneActive ? 'Fasten your seatbelts. This portfolio is ready for takeoff.' : 'Back on the ground. Welcome to Bali.'
          );
        }
      } 
    },
    { 
      label: 'Battery saver', 
      sub: batterySaver ? 'Active' : 'Off', 
      icon: BatteryCharging, 
      active: batterySaver, 
      toggle: () => {
        setBatterySaver(!batterySaver);
        if (onShowTrayToast) {
          onShowTrayToast(
            <BatteryCharging size={16} color="#22c55e" />, 
            'Battery Saver', 
            !batterySaver ? 'Developer running on 10% caffeine and 90% determination.' : 'Full performance mode unleashed.'
          );
        }
      } 
    },
    { 
      label: 'Accessibility', 
      sub: 'Ready', 
      icon: Sliders, 
      active: false, 
      toggle: () => {
        if (onShowTrayToast) {
          onShowTrayToast(
            <Sliders size={16} color="#a855f7" />, 
            'Accessibility', 
            'All systems accessible. Coffee cup refilled.'
          );
        }
      } 
    }
  ];

  const handleVolumeChange = (newVal) => {
    const num = Number(newVal);
    if (setVolume) setVolume(num);
    setMasterVolume(num / 100);
    if (num === 0) {
      setSoundEnabled(false);
      if (onShowTrayToast) {
        onShowTrayToast(<VolumeX size={16} color="#94a3b8" />, 'Audio Muted', 'Pure silence. Peaceful debugging session initiated.');
      }
    } else {
      setSoundEnabled(true);
      if (num === 100 && onShowTrayToast) {
        onShowTrayToast(<Volume2 size={16} color="#ef4444" />, 'Volume Alert', 'Your neighbors have filed a complaint.');
      }
    }
  };

  const handleBrightnessChange = (newVal) => {
    const num = Number(newVal);
    if (setBrightness) setBrightness(num);
    if (num === 100 && onShowTrayToast) {
      onShowTrayToast(<Sun size={16} color="#f59e0b" />, 'Display Warning', 'Flashbang deployed. Your eyes have left the chat.');
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
        maxWidth: 'calc(100vw - 24px)',
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
            onChange={(e) => handleBrightnessChange(e.target.value)}
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
        <div 
          onClick={() => {
            playClickSound();
            if (onShowTrayToast) {
              onShowTrayToast(<Battery size={16} color="#22c55e" />, 'Power & Battery', 'Battery: 100% (Optimism: 5%)');
            }
          }}
          style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}
          title="Battery: 100% (Optimism: 5%)"
        >
          <Battery size={16} color="#22c55e" />
          <span style={{ color: '#ffffff', fontWeight: 500 }}>Battery: 100% (Optimism: 5%)</span>
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
