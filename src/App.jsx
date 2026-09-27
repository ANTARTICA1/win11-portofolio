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
import { DESKTOP_ITEMS } from './data/fileSystem';
import { playWindowSound, playStartupChime, playClickSound } from './utils/sound';

export function App() {
  const [wallpaper, setWallpaper] = useState('/wallpapers/purple_ribbon.jpg');
  const [accentColor, setAccentColor] = useState('#0078d4');
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [topZIndex, setTopZIndex] = useState(100);
  const [activeWindowId, setActiveWindowId] = useState('win-explorer-initial');
  const [runDialogOpen, setRunDialogOpen] = useState(false);

  const [windows, setWindows] = useState([
    {
      id: 'win-explorer-initial',
      appId: 'explorer',
      title: 'Data (D:)',
      icon: 'explorer',
      isMinimized: false,
      isMaximized: false,
      zIndex: 101,
      initialPosition: { x: 70, y: 35 },
      initialSize: { width: 880, height: 560 },
      data: { path: 'Data (D:)' }
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

    if (existing && !customData) {
      const nextZ = topZIndex + 1;
      setTopZIndex(nextZ);
      setActiveWindowId(existing.id);
      setWindows(prev => prev.map(w => w.id === existing.id ? { ...w, isMinimized: false, zIndex: nextZ } : w));
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
        icon: 'calc',
        initialSize: { width: 340, height: 460 },
        initialPosition: { x: 200 + (windows.length % 5) * 25, y: 80 + (windows.length % 5) * 20 }
      },
      taskmgr: {
        title: 'Task Manager',
        icon: 'calc',
        initialSize: { width: 680, height: 460 },
        initialPosition: { x: 130 + (windows.length % 5) * 25, y: 65 + (windows.length % 5) * 20 }
      },
      antigravity: {
        title: 'Antigravity AI Agent Terminal',
        icon: 'sparkles',
        initialSize: { width: 760, height: 480 },
        initialPosition: { x: 150 + (windows.length % 5) * 25, y: 75 + (windows.length % 5) * 20 }
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
    playStartupChime();
    setWindows([]);
    setTimeout(() => {
      launchApp('explorer', { path: 'Data (D:)' });
    }, 400);
  };

  const renderAppContent = (win) => {
    switch (win.appId) {
      case 'explorer':
        return (
          <FileExplorerApp
            initialPath={win.data?.path || 'Data (D:)'}
            onOpenFile={openFile}
            onOpenFolder={(folder) => {}}
          />
        );
      case 'notepad':
        return (
          <NotepadApp
            initialContent={win.data?.content || DESKTOP_ITEMS.find(d => d.id === 'readme_recruiter')?.content}
            fileName={win.data?.name || 'README_RECRUITER.txt'}
          />
        );
      case 'terminal':
      case 'antigravity':
        return <TerminalApp onLaunchApp={launchApp} />;
      case 'browser':
        return <BrowserApp onOpenFile={openFile} />;
      case 'photos':
        return (
          <PhotosApp
            initialImage={win.data?.imageUrl || '/certificates/cert_fullstack.jpg'}
            initialTitle={win.data?.title || 'Certificate: Mobile & Full Stack Development'}
          />
        );
      case 'recruiter':
        return <RecruiterHubApp onOpenFile={openFile} onOpenApp={launchApp} />;
      case 'settings':
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
            <p>Aplikasi ini siap dikembangkan lebih lanjut.</p>
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
    </div>
  );
}

export default App;
