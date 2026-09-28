import React, { useState, useEffect } from 'react';
import { Desktop } from './components/Desktop/Desktop';
import { Taskbar } from './components/Taskbar/Taskbar';
import { Window } from './components/Windows/Window';
import { FileExplorerApp } from './components/Apps/FileExplorerApp';
import { NotepadApp } from './components/Apps/NotepadApp';
import { TerminalApp } from './components/Apps/TerminalApp';
import { BrowserApp } from './components/Apps/BrowserApp';
import { PhotosApp } from './components/Apps/PhotosApp';
import { RecruiterHubApp } from './components/Apps/RecruiterHubApp';
import { SettingsApp } from './components/Apps/SettingsApp';
import { CalculatorApp } from './components/Apps/CalculatorApp';
import { TaskManagerApp } from './components/Apps/TaskManagerApp';

import { NotificationToast } from './components/Common/NotificationToast';
import { RunDialog } from './components/Common/RunDialog';
import { WinIcon } from './components/Common/WinIcon';
import { DESKTOP_ITEMS } from './data/fileSystem';
import { playWindowSound, playStartupChime, playClickSound } from './utils/sound';

const PROJECT_TITLES = {
  tatagih: 'Tatagih — Subscription & Bill Manager',
  temuin: 'Temuin — Lost & Found Platform',
  lintas: 'Lintas — Phone-to-PC Companion Utility',
  neurofly: 'NeuroFly — Drosophila Connectome x Pong',
  dompetq: 'DompetQ — Fintech E-Wallet Mobile App',
  makalah: 'Makalah Generator — AI Academic Assistant'
};

export function App() {
  const [wallpaper, setWallpaper] = useState('/wallpapers/win11_bloom_light.jpg');
  const [accentColor, setAccentColor] = useState('#0078d4');
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [topZIndex, setTopZIndex] = useState(100);
  const [activeWindowId, setActiveWindowId] = useState('win-explorer-initial');
  const [runDialogOpen, setRunDialogOpen] = useState(false);
  const [powerScreen, setPowerScreen] = useState(null);

  const [windows, setWindows] = useState([
    {
      id: 'win-explorer-initial',
      appId: 'explorer',
      title: 'Projects',
      icon: 'explorer',
      isMinimized: false,
      isMaximized: false,
      zIndex: 101,
      initialPosition: { x: 70, y: 35 },
      initialSize: { width: 880, height: 560 },
      data: { path: 'Projects' }
    }
  ]);

  useEffect(() => {
    document.documentElement.style.setProperty('--accent-color', accentColor);
    document.documentElement.setAttribute('data-theme', isDarkTheme ? 'dark' : 'light');

    const handleFirstUserClick = () => {
      playStartupChime();
      window.removeEventListener('pointerdown', handleFirstUserClick);
    };
    window.addEventListener('pointerdown', handleFirstUserClick);

    const handleKeyDown = (e) => {
      if ((e.altKey && e.key.toLowerCase() === 'r') || (e.metaKey && e.key.toLowerCase() === 'r')) {
        e.preventDefault();
        setRunDialogOpen(prev => !prev);
      } else if (e.ctrlKey && e.shiftKey && e.key === 'Escape') {
        e.preventDefault();
        launchApp('taskmgr');
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('pointerdown', handleFirstUserClick);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty('--accent-color', accentColor);
  }, [accentColor]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDarkTheme ? 'dark' : 'light');
  }, [isDarkTheme]);

  const focusWindow = (id) => {
    const nextZ = topZIndex + 1;
    setTopZIndex(nextZ);
    setActiveWindowId(id);
    setWindows(prev => prev.map(w => w.id === id ? { ...w, zIndex: nextZ, isMinimized: false } : w));
  };

  const launchApp = (appId, customData = null) => {
    playWindowSound('open');
    const existing = windows.find(w => w.appId === appId);

    if (existing) {
      const nextZ = topZIndex + 1;
      setTopZIndex(nextZ);
      setActiveWindowId(existing.id);
      setWindows(prev => prev.map(w => w.id === existing.id ? { 
        ...w, 
        isMinimized: false, 
        zIndex: nextZ,
        data: customData ? { ...w.data, ...customData } : w.data,
        title: (appId === 'chrome' || appId === 'browser') && customData?.projectId
          ? `${PROJECT_TITLES[customData.projectId] || 'Project Showcase'} - Google Chrome`
          : w.title
      } : w));
      return;
    }

    const nextZ = topZIndex + 1;
    setTopZIndex(nextZ);
    const newId = `win-${appId}-${Date.now()}`;

    const appConfigs = {
      explorer: {
        title: customData?.path || 'Data (D:)',
        icon: 'explorer',
        initialSize: { width: 880, height: 560 },
        initialPosition: { x: 80 + (windows.length % 5) * 25, y: 40 + (windows.length % 5) * 20 }
      },
      notepad: {
        title: customData?.name || 'README_RECRUITER.txt - Notepad',
        icon: 'notepad',
        initialSize: { width: 720, height: 500 },
        initialPosition: { x: 120 + (windows.length % 5) * 25, y: 60 + (windows.length % 5) * 20 }
      },
      terminal: {
        title: 'Windows PowerShell',
        icon: 'powershell',
        initialSize: { width: 760, height: 480 },
        initialPosition: { x: 140 + (windows.length % 5) * 25, y: 70 + (windows.length % 5) * 20 }
      },
      browser: {
        title: 'Agung Krisna — Projects Showcase - Microsoft Edge',
        icon: 'edge',
        initialSize: { width: 920, height: 600 },
        initialPosition: { x: 60 + (windows.length % 5) * 25, y: 30 + (windows.length % 5) * 20 }
      },
      photos: {
        title: customData?.title || 'Photos - Certificate & Gallery',
        icon: 'image',
        initialSize: { width: 780, height: 540 },
        initialPosition: { x: 100 + (windows.length % 5) * 25, y: 50 + (windows.length % 5) * 20 }
      },
      recruiter: {
        title: 'Recruiter Hub ⚡ — Fast-Track Portfolio & Resume',
        icon: 'briefcase',
        initialSize: { width: 840, height: 560 },
        initialPosition: { x: 90 + (windows.length % 5) * 25, y: 45 + (windows.length % 5) * 20 }
      },
      settings: {
        title: 'Settings',
        icon: 'settings',
        initialSize: { width: 780, height: 520 },
        initialPosition: { x: 110 + (windows.length % 5) * 25, y: 55 + (windows.length % 5) * 20 }
      },
      calculator: {
        title: 'Calculator',
        icon: 'calculator',
        initialSize: { width: 340, height: 460 },
        initialPosition: { x: 200 + (windows.length % 5) * 25, y: 80 + (windows.length % 5) * 20 }
      },
      taskmgr: {
        title: 'Task Manager',
        icon: 'calculator',
        initialSize: { width: 680, height: 460 },
        initialPosition: { x: 130 + (windows.length % 5) * 25, y: 65 + (windows.length % 5) * 20 }
      },
      antigravity: {
        title: 'Antigravity AI Agent Terminal',
        icon: 'antigravity',
        initialSize: { width: 760, height: 480 },
        initialPosition: { x: 150 + (windows.length % 5) * 25, y: 75 + (windows.length % 5) * 20 }
      },
            tatagih: {
        title: 'Tatagih',
        icon: 'tatagih',
        initialSize: { width: 920, height: 600 },
        initialPosition: { x: 70 + (windows.length % 5) * 25, y: 35 + (windows.length % 5) * 20 }
      },
      lintas: {
        title: 'Lintas',
        icon: 'lintas',
        initialSize: { width: 780, height: 560 },
        initialPosition: { x: 90 + (windows.length % 5) * 25, y: 45 + (windows.length % 5) * 20 }
      },
      neurofly: {
        title: 'NeuroFly',
        icon: 'neurofly',
        initialSize: { width: 920, height: 620 },
        initialPosition: { x: 80 + (windows.length % 5) * 25, y: 40 + (windows.length % 5) * 20 }
      },
      chrome: {
        title: customData?.projectId 
          ? `${PROJECT_TITLES[customData.projectId] || 'Project Showcase'} - Google Chrome`
          : 'Google Chrome',
        icon: 'chrome',
        initialSize: { width: 980, height: 640 },
        initialPosition: { x: 70 + (windows.length % 5) * 25, y: 35 + (windows.length % 5) * 20 }
      },
      'ms-store': {
        title: 'Microsoft Store',
        icon: 'ms-store',
        initialSize: { width: 880, height: 580 },
        initialPosition: { x: 80 + (windows.length % 5) * 25, y: 40 + (windows.length % 5) * 20 }
      },
      xbox: {
        title: 'XBOX',
        icon: 'xbox',
        initialSize: { width: 840, height: 540 },
        initialPosition: { x: 90 + (windows.length % 5) * 25, y: 45 + (windows.length % 5) * 20 }
      },
      todo: {
        title: 'Microsoft To Do',
        icon: 'todo',
        initialSize: { width: 720, height: 500 },
        initialPosition: { x: 100 + (windows.length % 5) * 25, y: 50 + (windows.length % 5) * 20 }
      },
      clock: {
        title: 'Clock',
        icon: 'clock',
        initialSize: { width: 480, height: 420 },
        initialPosition: { x: 150 + (windows.length % 5) * 25, y: 70 + (windows.length % 5) * 20 }
      },
      paint: {
        title: 'Paint',
        icon: 'paint',
        initialSize: { width: 840, height: 560 },
        initialPosition: { x: 80 + (windows.length % 5) * 25, y: 40 + (windows.length % 5) * 20 }
      },
      onenote: {
        title: 'OneNote',
        icon: 'onenote',
        initialSize: { width: 800, height: 520 },
        initialPosition: { x: 90 + (windows.length % 5) * 25, y: 45 + (windows.length % 5) * 20 }
      },
      ldplayer: {
        title: 'LDPlayer 14',
        icon: 'ldplayer',
        initialSize: { width: 880, height: 560 },
        initialPosition: { x: 80 + (windows.length % 5) * 25, y: 40 + (windows.length % 5) * 20 }
      }
    };

    const cfg = appConfigs[appId] || {
      title: 'Application',
      icon: 'folder',
      initialSize: { width: 700, height: 500 },
      initialPosition: { x: 100, y: 60 }
    };

    const newWindow = {
      id: newId,
      appId,
      title: cfg.title,
      icon: cfg.icon,
      isMinimized: false,
      isMaximized: false,
      zIndex: nextZ,
      initialPosition: cfg.initialPosition,
      initialSize: cfg.initialSize,
      data: customData
    };

    setWindows(prev => [...prev, newWindow]);
    setActiveWindowId(newId);
  };

  const openFile = (fileItem) => {
    if (fileItem.projectId) {
      launchApp('chrome', { projectId: fileItem.projectId });
      return;
    }
    if (fileItem.appId === 'chrome' || fileItem.name === 'Google Chrome') {
      launchApp('chrome', fileItem.projectId ? { projectId: fileItem.projectId } : null);
      return;
    }
    if (fileItem.name && fileItem.name.toLowerCase().includes('tatagih')) {
      launchApp('chrome', { projectId: 'tatagih' });
      return;
    }
    if (fileItem.name && fileItem.name.toLowerCase().includes('temuin')) {
      launchApp('chrome', { projectId: 'temuin' });
      return;
    }
    if (fileItem.name && fileItem.name.toLowerCase().includes('lintas')) {
      launchApp('chrome', { projectId: 'lintas' });
      return;
    }
    if (fileItem.name && fileItem.name.toLowerCase().includes('neurofly')) {
      launchApp('chrome', { projectId: 'neurofly' });
      return;
    }
    if (fileItem.name && fileItem.name.toLowerCase().includes('dompetq')) {
      launchApp('chrome', { projectId: 'dompetq' });
      return;
    }
    if (fileItem.name && fileItem.name.toLowerCase().includes('makalah')) {
      launchApp('chrome', { projectId: 'makalah' });
      return;
    }
    if (fileItem.extension === 'txt' || fileItem.content) {
      launchApp('notepad', {
        name: fileItem.name,
        content: fileItem.content
      });
    } else if (fileItem.extension === 'pdf') {
      launchApp('recruiter', {
        downloadCV: true
      });
    } else if (fileItem.extension === 'jpg' || fileItem.extension === 'png' || fileItem.imageUrl) {
      launchApp('photos', {
        imageUrl: fileItem.imageUrl || fileItem.previewImage,
        title: fileItem.title || fileItem.name
      });
    } else {
      launchApp('notepad', {
        name: fileItem.name,
        content: fileItem.content || `File: ${fileItem.name}`
      });
    }
  };

  const closeWindow = (id) => {
    setWindows(prev => prev.filter(w => w.id !== id));
    if (activeWindowId === id) {
      const remaining = windows.filter(w => w.id !== id && !w.isMinimized);
      if (remaining.length > 0) {
        setActiveWindowId(remaining[remaining.length - 1].id);
      } else {
        setActiveWindowId(null);
      }
    }
  };

  const minimizeWindow = (id) => {
    setWindows(prev => prev.map(w => w.id === id ? { ...w, isMinimized: true } : w));
    if (activeWindowId === id) {
      const remaining = windows.filter(w => w.id !== id && !w.isMinimized);
      if (remaining.length > 0) {
        setActiveWindowId(remaining[remaining.length - 1].id);
      } else {
        setActiveWindowId(null);
      }
    }
  };

  const maximizeWindow = (id) => {
    setWindows(prev => prev.map(w => w.id === id ? { ...w, isMaximized: !w.isMaximized } : w));
  };

  const toggleWindow = (id) => {
    const win = windows.find(w => w.id === id);
    if (!win) return;

    if (win.isMinimized) {
      playWindowSound('open');
      focusWindow(id);
    } else if (activeWindowId === id) {
      playWindowSound('min');
      minimizeWindow(id);
    } else {
      focusWindow(id);
    }
  };

  const toggleMinimizeAll = () => {
    const anyOpen = windows.some(w => !w.isMinimized);
    if (anyOpen) {
      setWindows(prev => prev.map(w => ({ ...w, isMinimized: true })));
      setActiveWindowId(null);
    } else {
      setWindows(prev => prev.map(w => ({ ...w, isMinimized: false })));
      if (windows.length > 0) {
        setActiveWindowId(windows[windows.length - 1].id);
      }
    }
  };

  const restartOS = () => {
    playWindowSound('min');
    setPowerScreen('restarting');
    setTimeout(() => {
      playStartupChime();
      setWindows([]);
      setPowerScreen(null);
      setTimeout(() => {
        launchApp('explorer', { path: 'Data (D:)' });
      }, 350);
    }, 1200);
  };

  const shutDownOS = () => {
    playWindowSound('min');
    setPowerScreen('shutting_down');
    setTimeout(() => {
      setWindows([]);
      setPowerScreen('off');
    }, 1200);
  };

  const sleepOS = () => {
    setPowerScreen('sleep');
  };

  const renderAppContent = (win) => {
    switch (win.appId) {
      case 'explorer':
        return (
          <FileExplorerApp
            initialPath={win.data?.path || 'Data (D:)'}
            onOpenFile={openFile}
            onOpenFolder={(folder) => {}}
            onLaunchApp={launchApp}
          />
        );
      case 'notepad':
      case 'todo':
      case 'onenote':
        return (
          <NotepadApp
            initialContent={win.data?.content || DESKTOP_ITEMS.find(d => d.id === 'readme_recruiter')?.content}
            fileName={win.data?.name || (win.appId === 'todo' ? 'To_Do_List.txt' : win.appId === 'onenote' ? 'Catatan_OneNote.txt' : 'README_RECRUITER.txt')}
          />
        );
      case 'terminal':
      case 'antigravity':
        return <TerminalApp onLaunchApp={launchApp} />;
      case 'tatagih':
      case 'temuin':
      case 'lintas':
      case 'neurofly':
      case 'dompetq':
      case 'makalah':
      case 'browser':
      case 'chrome':
      case 'ldplayer':
        return (
          <BrowserApp
            onOpenFile={openFile}
            initialProject={win.data?.projectId || (['tatagih', 'temuin', 'lintas', 'neurofly', 'dompetq', 'makalah'].includes(win.appId) ? win.appId : 'tatagih')}
            initialUrl={win.data?.url}
            onLaunchApp={launchApp}
          />
        );
      case 'photos':
      case 'paint':
        return (
          <PhotosApp
            initialImage={win.data?.imageUrl || '/certificates/cert_fullstack.jpg'}
            initialTitle={win.data?.title || (win.appId === 'paint' ? 'Paint Studio Showcase' : 'Photos - Certificate & Gallery')}
          />
        );
      case 'recruiter':
      case 'ms-store':
      case 'xbox':
        return <RecruiterHubApp onOpenFile={openFile} onOpenApp={launchApp} />;
      case 'settings':
      case 'clock':
        return (
          <SettingsApp
            currentWallpaper={wallpaper}
            onSelectWallpaper={setWallpaper}
            accentColor={accentColor}
            onSelectAccentColor={setAccentColor}
            isDarkTheme={isDarkTheme}
            onToggleTheme={() => setIsDarkTheme(!isDarkTheme)}
          />
        );
      case 'calculator':
        return <CalculatorApp />;
      case 'taskmgr':
        return <TaskManagerApp />;
      default:
        return (
          <div style={{ padding: '24px', color: '#fff' }}>
            <h3>{win.title}</h3>
            <p>Aplikasi ini siap digunakan.</p>
          </div>
        );
    }
  };

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <Desktop
        wallpaper={wallpaper}
        onLaunchApp={launchApp}
        onOpenFile={openFile}
        onOpenSettings={(tab) => launchApp('settings')}
        accentColor={accentColor}
      />

      {windows.map((win) => (
        <Window
          key={win.id}
          id={win.id}
          title={win.title}
          icon={win.icon}
          isActive={activeWindowId === win.id}
          isMinimized={win.isMinimized}
          isMaximized={win.isMaximized}
          zIndex={win.zIndex}
          initialPosition={win.initialPosition}
          initialSize={win.initialSize}
          onFocus={() => focusWindow(win.id)}
          onMinimize={() => minimizeWindow(win.id)}
          onMaximize={() => maximizeWindow(win.id)}
          onClose={() => closeWindow(win.id)}
        >
          {renderAppContent(win)}
        </Window>
      ))}

      <Taskbar
        openWindows={windows}
        activeWindowId={activeWindowId}
        onToggleWindow={toggleWindow}
        onLaunchApp={launchApp}
        onToggleMinimizeAll={toggleMinimizeAll}
        onOpenSettings={() => launchApp('settings')}
        onRestart={restartOS}
        onShutDown={shutDownOS}
        onSleep={sleepOS}
        accentColor={accentColor}
      />

      <NotificationToast
        onOpenRecruiter={() => launchApp('recruiter')}
        onOpenExplorer={() => launchApp('explorer', { path: 'Data (D:)' })}
      />

      <RunDialog
        isOpen={runDialogOpen}
        onClose={() => setRunDialogOpen(false)}
        onRunCommand={(cmd) => {
          if (cmd === 'resume' || cmd === 'cv') launchApp('recruiter');
          else if (cmd === 'cmd' || cmd === 'powershell') launchApp('terminal');
          else if (cmd === 'explorer') launchApp('explorer');
          else if (cmd === 'notepad') launchApp('notepad');
          else if (cmd === 'taskmgr') launchApp('taskmgr');
          else if (cmd === 'calc') launchApp('calculator');
          else if (cmd === 'settings') launchApp('settings');
          else launchApp(cmd);
        }}
      />

      {powerScreen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 999999,
            backgroundColor: '#000000',
            color: '#ffffff',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'Segoe UI, -apple-system, sans-serif',
            userSelect: 'none',
            cursor: powerScreen === 'sleep' || powerScreen === 'off' ? 'pointer' : 'default'
          }}
          onClick={() => {
            if (powerScreen === 'sleep') {
              setPowerScreen(null);
            } else if (powerScreen === 'off') {
              playStartupChime();
              setPowerScreen(null);
              setTimeout(() => {
                launchApp('explorer', { path: 'Data (D:)' });
              }, 400);
            }
          }}
        >
          {powerScreen === 'restarting' && (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  border: '3px solid rgba(255, 255, 255, 0.2)',
                  borderTopColor: '#38bdf8',
                  animation: 'spin 1s linear infinite'
                }}
              />
              <span style={{ fontSize: '18px', fontWeight: 400, letterSpacing: '0.5px' }}>
                Restarting
              </span>
            </div>
          )}

          {powerScreen === 'shutting_down' && (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  border: '3px solid rgba(255, 255, 255, 0.2)',
                  borderTopColor: '#38bdf8',
                  animation: 'spin 1s linear infinite'
                }}
              />
              <span style={{ fontSize: '18px', fontWeight: 400, letterSpacing: '0.5px' }}>
                Shutting down
              </span>
            </div>
          )}

          {powerScreen === 'off' && (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 24px rgba(56, 189, 248, 0.2)'
                }}
              >
                <WinIcon name="power" size={26} />
              </div>
              <span style={{ fontSize: '14px', color: '#94a3b8' }}>
                Komputer dimatikan. Klik di mana saja untuk menyalakan kembali.
              </span>
            </div>
          )}

          {powerScreen === 'sleep' && (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px' }}>
              <span style={{ fontSize: '14px', color: '#64748b' }}>
                Sleep mode. Klik di mana saja untuk melanjutkan sesi.
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
