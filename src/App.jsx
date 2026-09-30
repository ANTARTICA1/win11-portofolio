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
import { WhatsAppApp } from './components/Apps/WhatsAppApp';
import { ChromeDinoGame } from './components/Apps/ChromeDinoGame';
import { ExternalLink } from 'lucide-react';

import { NotificationToast } from './components/Common/NotificationToast';
import { RunDialog } from './components/Common/RunDialog';
import { WinIcon } from './components/Common/WinIcon';
import { DESKTOP_ITEMS, INTRO_NOTE_CONTENT, INITIAL_USER } from './data/fileSystem';
import { isMobileDevice } from './utils/device';
import { playWindowSound, playStartupChime, playClickSound } from './utils/sound';

const PROJECT_TITLES = {
  theotown: 'ITB STIKOM Bali — Building Plugin for TheoTown',
  nenacare: 'NenaCare — AI-Powered K3 Incident Reporting System',
  tatagih: 'Tatagih — Subscription & Bill Manager',
  temuin: 'Temuin — Lost & Found Platform',
  lintas: 'Lintas — Phone-to-PC Companion Utility',
  neurofly: 'NeuroFly — Drosophila Connectome x Pong',
  dompetq: 'DompetQ — Fintech E-Wallet Mobile App',
  makalah: 'Makalah Generator — AI Academic Assistant',
  sigap: 'SIGAP — Sistem Gerak Aman dari Pencurian',
  bingkai: 'Bingkai — Galeri Foto Komputer Lokal'
};

const getInitialWindows = () => {
  if (typeof window !== 'undefined' && isMobileDevice()) {
    return [];
  }

  const screenW = typeof window !== 'undefined' ? window.innerWidth : 1280;
  const screenH = typeof window !== 'undefined' ? window.innerHeight : 800;

  // Di laptop: posisi x pas di sebelah kanan 2 kolom icon desktop (~180px)
  const posX = Math.max(178, Math.min(195, Math.floor(screenW * 0.125)));
  const posY = Math.max(22, Math.min(36, Math.floor(screenH * 0.035)));
  // Lebar membentang penuh ke kanan layar (menyisakan margin tipis ~18px di kanan)
  const winW = Math.max(900, screenW - posX - 18);
  // Tinggi proporsional hingga di atas taskbar
  const winH = Math.max(540, screenH - posY - 60);

  return [
    {
      id: 'win-krisnaartha-initial',
      appId: 'krisnaartha_site',
      title: 'krisnaartha.my.id — Personal Portfolio Website',
      icon: 'krisnaartha',
      isMinimized: false,
      isMaximized: false,
      zIndex: 101,
      initialPosition: { x: posX, y: posY },
      initialSize: { width: winW, height: winH },
      data: { url: 'https://krisnaartha.my.id' }
    }
  ];
};

export function App() {
  const [wallpaper, setWallpaper] = useState('/wallpapers/win11_bloom_dark.jpg');
  const [accentColor, setAccentColor] = useState('#0078d4');
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [topZIndex, setTopZIndex] = useState(100);
  const [runDialogOpen, setRunDialogOpen] = useState(false);
  const [powerScreen, setPowerScreen] = useState(null);

  const [windows, setWindows] = useState(() => getInitialWindows());
  const [activeWindowId, setActiveWindowId] = useState(() => {
    const initWins = getInitialWindows();
    return initWins.length > 0 ? initWins[0].id : null;
  });

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
    if (appId === 'linkedin') {
      window.open(INITIAL_USER.linkedin || 'https://linkedin.com/in/krisnaartha', '_blank', 'noopener,noreferrer');
      return;
    }
    const projectKeys = ['theotown', 'nenacare', 'tatagih', 'temuin', 'lintas', 'neurofly', 'dompetq', 'makalah', 'sigap', 'bingkai'];
    if (projectKeys.includes(appId)) {
      launchApp('chrome', { projectId: appId, ...(typeof customData === 'object' ? customData : {}) });
      return;
    }
    playWindowSound('open');

    const normalizedData = typeof customData === 'string'
      ? { path: customData }
      : (customData ? { ...customData } : (appId === 'explorer' ? { path: 'This PC' } : null));

    const existing = windows.find(w => w.appId === appId);

    if (existing) {
      const nextZ = topZIndex + 1;
      setTopZIndex(nextZ);
      setActiveWindowId(existing.id);
      setWindows(prev => prev.map(w => w.id === existing.id ? { 
        ...w, 
        isMinimized: false, 
        zIndex: nextZ,
        data: normalizedData ? { ...w.data, ...normalizedData } : w.data,
        title: (appId === 'chrome' || appId === 'browser') && normalizedData?.projectId
          ? `${PROJECT_TITLES[normalizedData.projectId] || 'Project Showcase'} - Google Chrome`
          : (appId === 'explorer' && normalizedData?.path ? normalizedData.path : w.title)
      } : w));
      return;
    }

    const nextZ = topZIndex + 1;
    setTopZIndex(nextZ);
    const newId = `win-${appId}-${Date.now()}`;

    const appConfigs = {
      explorer: {
        title: normalizedData?.path || 'This PC',
        icon: (normalizedData?.path === 'Recycle Bin' || normalizedData?.path?.toLowerCase().includes('recycle')) ? 'trash' : 'explorer',
        initialSize: { width: 880, height: 560 },
        initialPosition: { x: 80 + (windows.length % 5) * 25, y: 40 + (windows.length % 5) * 20 }
      },
      recycle_bin: {
        title: 'Recycle Bin',
        icon: 'trash',
        initialSize: { width: 880, height: 560 },
        initialPosition: { x: 80 + (windows.length % 5) * 25, y: 40 + (windows.length % 5) * 20 }
      },
      notepad: {
        title: customData?.name ? `${customData.name} - Notepad` : 'Pengantar.txt - Notepad',
        icon: 'notepad',
        initialSize: { width: 720, height: 520 },
        initialPosition: { x: 120 + (windows.length % 5) * 25, y: 60 + (windows.length % 5) * 20 }
      },
      terminal: {
        title: 'Command Prompt',
        icon: 'terminal',
        initialSize: { width: 760, height: 480 },
        initialPosition: { x: 140 + (windows.length % 5) * 25, y: 70 + (windows.length % 5) * 20 }
      },
      cmd: {
        title: 'Command Prompt',
        icon: 'terminal',
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
      theotown: {
        title: 'ITB STIKOM Bali — Building Plugin for TheoTown',
        icon: 'theotown',
        initialSize: { width: 960, height: 620 },
        initialPosition: { x: 60 + (windows.length % 5) * 25, y: 25 + (windows.length % 5) * 20 }
      },
      nenacare: {
        title: 'NenaCare',
        icon: 'nenacare',
        initialSize: { width: 940, height: 600 },
        initialPosition: { x: 65 + (windows.length % 5) * 25, y: 30 + (windows.length % 5) * 20 }
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
      sigap: {
        title: 'SIGAP — Sistem Gerak Aman dari Pencurian',
        icon: 'sigap',
        initialSize: { width: 980, height: 640 },
        initialPosition: { x: 70 + (windows.length % 5) * 25, y: 35 + (windows.length % 5) * 20 }
      },
      bingkai: {
        title: 'Bingkai — Galeri Foto Komputer Lokal',
        icon: 'bingkai',
        initialSize: { width: 980, height: 640 },
        initialPosition: { x: 75 + (windows.length % 5) * 25, y: 35 + (windows.length % 5) * 20 }
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
      },
      whatsapp: {
        title: 'WhatsApp',
        icon: 'whatsapp',
        initialSize: { width: 920, height: 620 },
        initialPosition: { x: 70 + (windows.length % 5) * 25, y: 35 + (windows.length % 5) * 20 }
      },
      discord: {
        title: 'WhatsApp',
        icon: 'whatsapp',
        initialSize: { width: 920, height: 620 },
        initialPosition: { x: 70 + (windows.length % 5) * 25, y: 35 + (windows.length % 5) * 20 }
      },

      krisnaartha_site: {
        title: 'krisnaartha.my.id — Personal Portfolio Website',
        icon: 'krisnaartha',
        initialSize: { 
          width: typeof window !== 'undefined' ? Math.max(900, window.innerWidth - 200) : 1200, 
          height: typeof window !== 'undefined' ? Math.max(540, window.innerHeight - 95) : 720 
        },
        initialPosition: { 
          x: typeof window !== 'undefined' ? Math.max(178, Math.min(195, Math.floor(window.innerWidth * 0.125))) : 180, 
          y: 25 
        }
      },
      dino: {
        title: 'chrome://dino — T-Rex Dinosaur Game',
        icon: 'chrome_dino',
        initialSize: { width: 840, height: 480 },
        initialPosition: { x: 95 + (windows.length % 5) * 25, y: 45 + (windows.length % 5) * 20 }
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
      data: normalizedData
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
    if (fileItem.name && fileItem.name.toLowerCase().includes('theotown')) {
      launchApp('chrome', { projectId: 'theotown' });
      return;
    }
    if (fileItem.name && fileItem.name.toLowerCase().includes('stikom')) {
      launchApp('chrome', { projectId: 'theotown' });
      return;
    }
    if (fileItem.name && fileItem.name.toLowerCase().includes('nenacare')) {
      launchApp('chrome', { projectId: 'nenacare' });
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
    if (fileItem.name && fileItem.name.toLowerCase().includes('sigap')) {
      launchApp('chrome', { projectId: 'sigap' });
      return;
    }
    if (fileItem.name && fileItem.name.toLowerCase().includes('bingkai')) {
      launchApp('chrome', { projectId: 'bingkai' });
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
        launchApp('explorer', { path: 'This PC' });
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
      case 'recycle_bin':
        return (
          <FileExplorerApp
            initialPath={win.appId === 'recycle_bin' ? 'Recycle Bin' : (win.data?.path || 'This PC')}
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
            initialContent={win.data?.content || DESKTOP_ITEMS.find(d => d.id === 'notepad')?.content || INTRO_NOTE_CONTENT}
            fileName={win.data?.name || (win.appId === 'todo' ? 'To_Do_List.txt' : win.appId === 'onenote' ? 'Catatan_OneNote.txt' : 'Pengantar.txt')}
          />
        );
      case 'terminal':
      case 'antigravity':
        return <TerminalApp onLaunchApp={launchApp} />;
      case 'theotown':
      case 'nenacare':
      case 'tatagih':
      case 'temuin':
      case 'lintas':
      case 'neurofly':
      case 'dompetq':
      case 'makalah':
      case 'sigap':
      case 'bingkai':
      case 'browser':
      case 'chrome':
      case 'ldplayer':
        return (
          <BrowserApp
            onOpenFile={openFile}
            initialProject={win.data?.projectId || (['theotown', 'nenacare', 'tatagih', 'temuin', 'lintas', 'neurofly', 'dompetq', 'makalah', 'sigap', 'bingkai'].includes(win.appId) ? win.appId : 'theotown')}
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
      case 'whatsapp':
      case 'discord':
        return <WhatsAppApp onLaunchApp={launchApp} />;
      case 'krisnaartha_site':
        return (
          <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: '#0f172a', color: '#fff' }}>
            <div style={{ height: '44px', backgroundColor: '#1e293b', borderBottom: '1px solid #334155', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#94a3b8' }}>
                <span style={{ color: '#22c55e' }}>🔒</span>
                <span style={{ color: '#f8fafc', fontWeight: 600 }}>https://krisnaartha.my.id</span>
              </div>
            </div>
            <iframe 
              src="https://krisnaartha.my.id" 
              title="krisnaartha.my.id"
              style={{ flex: 1, width: '100%', border: 'none', backgroundColor: '#ffffff' }}
            />
          </div>
        );
      case 'dino':
        return <ChromeDinoGame />;
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
        return <CalculatorApp onLaunchApp={launchApp} />;
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
          hideTitlebar={[
            'chrome', 'browser', 'theotown', 'nenacare', 'tatagih', 'temuin', 'lintas',
            'neurofly', 'dompetq', 'makalah', 'sigap', 'bingkai', 'ldplayer',
            'explorer', 'recycle_bin', 'notepad', 'todo', 'onenote', 'terminal', 'antigravity', 'dino'
          ].includes(win.appId) || Boolean(win.data?.projectId)}
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
        onOpenExplorer={() => launchApp('explorer', { path: 'Projects' })}
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
          else if (cmd === 'linkedin') launchApp('linkedin');
          else if (cmd === 'wa' || cmd === 'whatsapp') launchApp('whatsapp');
          else if (cmd === 'web' || cmd === 'krisnaartha' || cmd === 'krisnaartha.my.id') launchApp('krisnaartha_site');
          else if (cmd === 'dino' || cmd === 'chrome://dino') launchApp('dino');
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
                launchApp('explorer', { path: 'This PC' });
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
