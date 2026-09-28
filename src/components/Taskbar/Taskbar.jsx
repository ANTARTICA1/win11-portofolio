import React, { useState, useEffect } from 'react';
import { 
  Wifi, Volume2, Battery, ChevronUp, Sun, CloudSun,
  LayoutGrid, Activity, Sliders, Monitor
} from 'lucide-react';
import { WinIcon } from '../Common/WinIcon';
import { StartMenu } from './StartMenu';
import { QuickSettings } from './QuickSettings';
import { CalendarFlyout } from './CalendarFlyout';
import { SystemTrayFlyout } from './SystemTrayFlyout';
import { playClickSound, playWindowSound } from '../../utils/sound';
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
  accentColor
}) => {
  const [startOpen, setStartOpen] = useState(false);
  const [quickSettingsOpen, setQuickSettingsOpen] = useState(false);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [systemTrayOpen, setSystemTrayOpen] = useState(false);
  const [taskbarMenu, setTaskbarMenu] = useState(null);

  const [timeStr, setTimeStr] = useState('');
  const [dateStr, setDateStr] = useState('');

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

  const handleToggleStart = () => {
    playClickSound();
    setStartOpen(!startOpen);
    setQuickSettingsOpen(false);
    setCalendarOpen(false);
    setSystemTrayOpen(false);
    setTaskbarMenu(null);
  };

  const handleToggleQuickSettings = () => {
    playClickSound();
    setQuickSettingsOpen(!quickSettingsOpen);
    setStartOpen(false);
    setCalendarOpen(false);
    setSystemTrayOpen(false);
    setTaskbarMenu(null);
  };

  const handleToggleCalendar = () => {
    playClickSound();
    setCalendarOpen(!calendarOpen);
    setStartOpen(false);
    setQuickSettingsOpen(false);
    setSystemTrayOpen(false);
    setTaskbarMenu(null);
  };

  const handleToggleSystemTray = (e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    playClickSound();
    setSystemTrayOpen(!systemTrayOpen);
    setStartOpen(false);
    setQuickSettingsOpen(false);
    setCalendarOpen(false);
    setTaskbarMenu(null);
  };

  const handleTaskbarContextMenu = (e) => {
    e.preventDefault();
    playClickSound();
    setTaskbarMenu({ x: e.clientX, y: e.clientY - 120 });
  };

  const defaultTaskbarApps = [
    { id: 'explorer', name: 'File Explorer', icon: 'explorer' },
    { id: 'chrome', name: 'Google Chrome', icon: 'chrome' },
    { id: 'antigravity', name: 'Antigravity', icon: 'antigravity' },
    { id: 'browser', name: 'Microsoft Edge', icon: 'edge' }
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
            onClick={() => {
              playClickSound();
              alert('Cuaca: 79°F (26°C) Berawan Sebagian — Lokasi: Indonesia. Siap untuk produktivitas!');
            }}
          >
            <CloudSun size={20} color="#f59e0b" />
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.15 }}>
              <span className="weather-temp">79°F</span>
              <span className="weather-condition">Mostly cloudy</span>
            </div>
          </div>
        </div>

        <div className="taskbar-center">
          <button
            className={`taskbar-icon-btn ${startOpen ? 'is-active' : ''}`}
            onClick={handleToggleStart}
            title="Start"
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
            title="Show desktop"
          />
        </div>
      </div>

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
              onLaunchApp('taskmgr');
              setTaskbarMenu(null);
            }}
            style={{ padding: '6px 12px', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', borderRadius: '4px' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            <Activity size={15} color="#38bdf8" />
            <span>Task Manager</span>
          </div>

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
