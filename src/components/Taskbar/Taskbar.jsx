import React, { useState, useEffect, useRef } from 'react';
import { 
  Wifi, Volume2, Battery, ChevronUp, Sun, CloudSun,
  LayoutGrid, Sliders, Monitor, MapPin, Wind, Droplets, Thermometer
} from 'lucide-react';
import { WinIcon } from '../Common/WinIcon';
import { StartMenu } from './StartMenu';
import { QuickSettings } from './QuickSettings';
import { CalendarFlyout } from './CalendarFlyout';
import { SystemTrayFlyout } from './SystemTrayFlyout';
import { playClickSound } from '../../utils/sound';
import './Taskbar.css';

export const Taskbar = ({
  openWindows,
  activeWindowId,
  onToggleWindow,
  onLaunchApp,
  onToggleMinimizeAll,
  onOpenSettings,
  onRestart,
  onShutDown,
  onSleep,
  accentColor,
  brightness = 100,
  setBrightness,
  nightLight = false,
  setNightLight,
  volume = 80,
  setVolume,
  closeFlyoutsSignal = 0
}) => {
  const [startOpen, setStartOpen] = useState(false);
  const [quickSettingsOpen, setQuickSettingsOpen] = useState(false);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [systemTrayOpen, setSystemTrayOpen] = useState(false);
  const [weatherFlyoutOpen, setWeatherFlyoutOpen] = useState(false);
  const [taskbarMenu, setTaskbarMenu] = useState(null);

  const [timeStr, setTimeStr] = useState('');
  const [dateStr, setDateStr] = useState('');
  const weatherRef = useRef(null);

  useEffect(() => {
    // When parent signals to close all flyouts (e.g. Esc or desktop click)
    if (closeFlyoutsSignal > 0) {
      setStartOpen(false);
      setQuickSettingsOpen(false);
      setCalendarOpen(false);
      setSystemTrayOpen(false);
      setWeatherFlyoutOpen(false);
      setTaskbarMenu(null);
    }
  }, [closeFlyoutsSignal]);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(now.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }));
      setDateStr(`${now.getMonth() + 1}/${now.getDate()}/${now.getFullYear()}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (weatherFlyoutOpen && weatherRef.current && !weatherRef.current.contains(e.target)) {
        if (!e.target.closest('.weather-widget')) {
          setWeatherFlyoutOpen(false);
        }
      }
    };
    if (weatherFlyoutOpen) {
      document.addEventListener('pointerdown', handleOutsideClick);
    }
    return () => document.removeEventListener('pointerdown', handleOutsideClick);
  }, [weatherFlyoutOpen]);

  const handleToggleStart = () => {
    playClickSound();
    setStartOpen(!startOpen);
    setQuickSettingsOpen(false);
    setCalendarOpen(false);
    setSystemTrayOpen(false);
    setWeatherFlyoutOpen(false);
    setTaskbarMenu(null);
  };

  const handleToggleQuickSettings = () => {
    playClickSound();
    setQuickSettingsOpen(!quickSettingsOpen);
    setStartOpen(false);
    setCalendarOpen(false);
    setSystemTrayOpen(false);
    setWeatherFlyoutOpen(false);
    setTaskbarMenu(null);
  };

  const handleToggleCalendar = () => {
    playClickSound();
    setCalendarOpen(!calendarOpen);
    setStartOpen(false);
    setQuickSettingsOpen(false);
    setSystemTrayOpen(false);
    setWeatherFlyoutOpen(false);
    setTaskbarMenu(null);
  };

  const handleToggleSystemTray = (e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    playClickSound();
    setSystemTrayOpen(!systemTrayOpen);
    setStartOpen(false);
    setQuickSettingsOpen(false);
    setCalendarOpen(false);
    setWeatherFlyoutOpen(false);
    setTaskbarMenu(null);
  };

  const handleToggleWeather = (e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    playClickSound();
    setWeatherFlyoutOpen(!weatherFlyoutOpen);
    setStartOpen(false);
    setQuickSettingsOpen(false);
    setCalendarOpen(false);
    setSystemTrayOpen(false);
    setTaskbarMenu(null);
  };

  const handleTaskbarContextMenu = (e) => {
    e.preventDefault();
    playClickSound();
    setTaskbarMenu({ x: e.clientX, y: e.clientY - 120 });
  };

  const defaultTaskbarApps = [
    { id: 'explorer', name: 'File Explorer', icon: 'explorer' },
    { id: 'chrome', name: 'Google Chrome', icon: 'chrome' }
  ];

  return (
    <>
      <div 
        className="win-taskbar"
        onContextMenu={handleTaskbarContextMenu}
        onClick={() => setTaskbarMenu(null)}
      >
        <div className="taskbar-left">
          <div 
            className="weather-widget"
            onClick={handleToggleWeather}
            title="Klik untuk melihat detail cuaca Denpasar, Bali"
          >
            <CloudSun size={20} color="#f59e0b" />
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.15 }}>
              <span className="weather-temp">29°C</span>
              <span className="weather-condition">Denpasar • Cerah Berawan</span>
            </div>
          </div>
        </div>

        <div className="taskbar-center">
          <button
            className={`taskbar-icon-btn ${startOpen ? 'is-active' : ''}`}
            onClick={handleToggleStart}
            title="Start (Ctrl + Esc / Win)"
          >
            <WinIcon name="win-start" size={24} />
          </button>

          {defaultTaskbarApps.map((app) => {
            const openWin = openWindows.find(w => w.appId === app.id);
            const isOpen = !!openWin;
            const isActive = isOpen && activeWindowId === openWin.id && !openWin.isMinimized;

            return (
              <button
                key={app.id}
                className={`taskbar-icon-btn ${isActive ? 'is-active' : ''}`}
                onClick={() => {
                  if (isOpen) {
                    onToggleWindow(openWin.id);
                  } else {
                    playClickSound();
                    onLaunchApp(app.id);
                  }
                }}
                title={app.name}
              >
                <WinIcon name={app.icon} size={25} />
                {isOpen && <span className="taskbar-pill" style={{ backgroundColor: accentColor }} />}
              </button>
            );
          })}

          {openWindows
            .filter(w => !defaultTaskbarApps.some(app => app.id === w.appId))
            .map((win) => {
              const isActive = activeWindowId === win.id && !win.isMinimized;
              return (
                <button
                  key={win.id}
                  className={`taskbar-icon-btn ${isActive ? 'is-active' : ''}`}
                  onClick={() => onToggleWindow(win.id)}
                  title={win.title}
                >
                  <WinIcon name={win.icon} size={25} />
                  <span className="taskbar-pill" style={{ backgroundColor: accentColor }} />
                </button>
              );
            })}
        </div>

        <div className="taskbar-right">
          <button 
            className={`tray-btn ${systemTrayOpen ? 'active' : ''}`} 
            title="Show hidden icons"
            onClick={handleToggleSystemTray}
          >
            <ChevronUp size={14} color={systemTrayOpen ? '#38bdf8' : '#9ca3af'} />
          </button>

          <div className="tray-btn" onClick={handleToggleQuickSettings} title="Internet, Sound & Battery">
            <Wifi size={15} />
            <Volume2 size={15} />
            <Battery size={16} />
          </div>

          <div className="tray-btn tray-clock" onClick={handleToggleCalendar} title="Date and Time">
            <span className="tray-clock-time">{timeStr}</span>
            <span className="tray-clock-date">{dateStr}</span>
          </div>

          <div
            className="desktop-peek-btn"
            onClick={() => {
              playClickSound();
              onToggleMinimizeAll();
            }}
            title="Show desktop (Win + D)"
          />
        </div>
      </div>

      {weatherFlyoutOpen && (
        <div
          ref={weatherRef}
          className="anim-flyout"
          style={{
            position: 'fixed',
            left: '12px',
            bottom: 'calc(var(--taskbar-height) + 12px)',
            width: '320px',
            backgroundColor: 'rgba(28, 28, 36, 0.94)',
            backdropFilter: 'blur(35px) saturate(160%)',
            WebkitBackdropFilter: 'blur(35px) saturate(160%)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            borderRadius: '12px',
            boxShadow: '0 20px 48px rgba(0, 0, 0, 0.65)',
            padding: '18px',
            zIndex: 10001,
            color: '#ffffff',
            fontFamily: 'Segoe UI, sans-serif'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: '#94a3b8' }}>
              <MapPin size={14} color="#38bdf8" />
              <span style={{ fontWeight: 600, color: '#f8fafc' }}>Denpasar, Bali</span>
            </div>
            <span style={{ fontSize: '11px', backgroundColor: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8', padding: '2px 8px', borderRadius: '12px', fontWeight: 600 }}>
              Live Report
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', padding: '10px 14px', backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: '10px' }}>
            <div>
              <div style={{ fontSize: '32px', fontWeight: 700, lineHeight: 1 }}>29°C</div>
              <div style={{ fontSize: '12px', color: '#cbd5e1', marginTop: '4px' }}>Sebagian Berawan</div>
              <div style={{ fontSize: '11px', color: '#94a3b8' }}>Terasa seperti 32°C</div>
            </div>
            <CloudSun size={48} color="#f59e0b" />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', textAlign: 'center', fontSize: '11px' }}>
            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.04)', padding: '8px', borderRadius: '8px' }}>
              <Droplets size={14} color="#38bdf8" style={{ margin: '0 auto 4px' }} />
              <div style={{ color: '#94a3b8' }}>Kelembapan</div>
              <div style={{ fontWeight: 600, marginTop: '2px' }}>74%</div>
            </div>
            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.04)', padding: '8px', borderRadius: '8px' }}>
              <Wind size={14} color="#22c55e" style={{ margin: '0 auto 4px' }} />
              <div style={{ color: '#94a3b8' }}>Angin</div>
              <div style={{ fontWeight: 600, marginTop: '2px' }}>14 km/j</div>
            </div>
            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.04)', padding: '8px', borderRadius: '8px' }}>
              <Thermometer size={14} color="#f43f5e" style={{ margin: '0 auto 4px' }} />
              <div style={{ color: '#94a3b8' }}>Indeks UV</div>
              <div style={{ fontWeight: 600, marginTop: '2px' }}>Sedang (5)</div>
            </div>
          </div>
        </div>
      )}

      {taskbarMenu && (
        <div
          className="anim-flyout"
          style={{
            position: 'fixed',
            left: `${taskbarMenu.x}px`,
            bottom: 'calc(var(--taskbar-height) + 6px)',
            backgroundColor: '#282828',
            border: '1px solid rgba(255, 255, 255, 0.14)',
            borderRadius: '8px',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.6)',
            padding: '6px',
            zIndex: 20000,
            color: '#fff',
            fontSize: '12px',
            minWidth: '160px'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div
            onClick={() => {
              playClickSound();
              onOpenSettings();
              setTaskbarMenu(null);
            }}
            style={{ padding: '6px 12px', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', borderRadius: '4px' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            <Sliders size={15} color="#c084fc" />
            <span>Taskbar settings</span>
          </div>

          <div
            onClick={() => {
              playClickSound();
              onToggleMinimizeAll();
              setTaskbarMenu(null);
            }}
            style={{ padding: '6px 12px', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', borderRadius: '4px' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            <Monitor size={15} color="#10b981" />
            <span>Show desktop</span>
          </div>
        </div>
      )}

      <StartMenu
        isOpen={startOpen}
        onClose={() => setStartOpen(false)}
        onLaunchApp={onLaunchApp}
        onRestart={onRestart}
        onShutDown={onShutDown}
        onSleep={onSleep}
      />

      <QuickSettings
        isOpen={quickSettingsOpen}
        onClose={() => setQuickSettingsOpen(false)}
        accentColor={accentColor}
        onOpenSettings={onOpenSettings}
        brightness={brightness}
        setBrightness={setBrightness}
        nightLight={nightLight}
        setNightLight={setNightLight}
        volume={volume}
        setVolume={setVolume}
      />

      <CalendarFlyout
        isOpen={calendarOpen}
        onClose={() => setCalendarOpen(false)}
        accentColor={accentColor}
      />

      <SystemTrayFlyout
        isOpen={systemTrayOpen}
        onClose={() => setSystemTrayOpen(false)}
        onLaunchApp={onLaunchApp}
        onOpenSettings={onOpenSettings}
        onOpenQuickSettings={handleToggleQuickSettings}
        accentColor={accentColor}
      />
    </>
  );
};
