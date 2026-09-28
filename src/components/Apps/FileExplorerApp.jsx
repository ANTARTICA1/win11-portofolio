import React, { useState } from 'react';
import { 
  ArrowLeft, ArrowRight, ArrowUp, RefreshCw, Search,
  Plus, ChevronRight, ChevronDown, LayoutGrid, List, RotateCcw, X
} from 'lucide-react';
import { WinIcon } from '../Common/WinIcon';
import { DATA_D_ITEMS, PROJECTS_ITEMS, RECYCLE_BIN_ITEMS } from '../../data/fileSystem';
import { playClickSound } from '../../utils/sound';
import { useWindow } from '../Windows/WindowContext';
import './FileExplorer.css';

const getItemIconName = (item) => {
  if (item.isDrive) {
    if (item.name.includes('(C:)')) return 'drive-c';
    if (item.name.includes('(D:)')) return 'drive-d';
    return 'shared-folder';
  }
  if (item.type === 'folder') return 'folder';
  if (item.type === 'executable' || item.extension === 'exe') return item.projectId || item.icon || 'chrome';
  if (item.extension === 'pdf') return 'pdf';
  if (item.extension === 'jpg' || item.extension === 'png') return 'photos';
  if (item.extension === 'txt') return 'notepad';
  return item.icon || 'notepad';
};

export const FileExplorerApp = ({ initialPath = 'Data (D:)', onOpenFile, onOpenFolder, onLaunchApp }) => {
  const winCtx = useWindow();
  const [tabs, setTabs] = useState(() => [
    {
      id: 'tab-1',
      path: initialPath,
      history: [initialPath],
      historyIndex: 0
    }
  ]);
  const [activeTabId, setActiveTabId] = useState('tab-1');

  const activeTab = tabs.find(t => t.id === activeTabId) || tabs[0] || {
    id: 'tab-1',
    path: initialPath,
    history: [initialPath],
    historyIndex: 0
  };

  const currentPath = activeTab.path;
  const history = activeTab.history;
  const historyIndex = activeTab.historyIndex;

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItemName, setSelectedItemName] = useState(null);
  const [viewMode, setViewMode] = useState(initialPath === 'Recycle Bin' ? 'list' : 'grid');
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [recycleBinItems, setRecycleBinItems] = useState(RECYCLE_BIN_ITEMS);

  const getCurrentItems = () => {
    if (currentPath === 'Recycle Bin') {
      return recycleBinItems;
    }

    if (currentPath === 'This PC') {
      return [
        { name: 'Local Disk (C:)', type: 'drive', isDrive: true, total: '256 GB', free: '142 GB' },
        { name: 'Data (D:)', type: 'drive', isDrive: true, total: '512 GB', free: '380 GB' },
        { name: 'FTP.Handphone', type: 'network_drive', isDrive: true, total: '128 GB', free: '64 GB' }
      ];
    }

    if (currentPath === 'Home') {
      return [
        { name: 'Projects', type: 'folder', badge: 'Applications', size: `${PROJECTS_ITEMS.length} items` },
        { name: 'Downloads', type: 'folder', size: '3 items' },
        { name: 'Documents', type: 'folder', size: '3 items' },
        { name: 'tatagih file', type: 'folder', size: '3 items' },
        { name: 'Curriculum_Vitae.pdf', type: 'file', extension: 'pdf', size: '240 KB' },
        { name: 'README_RECRUITER.txt', type: 'file', extension: 'txt', size: '3.4 KB' }
      ];
    }

    if (currentPath === 'Projects' || currentPath === 'Data (D:) > Projects' || currentPath.endsWith('> Projects')) {
      return PROJECTS_ITEMS;
    }

    if (currentPath === 'Gallery') {
      return [
        { name: 'dompetq_preview.jpg', type: 'file', extension: 'jpg', size: '1.2 MB' },
        { name: 'temuin_preview.jpg', type: 'file', extension: 'jpg', size: '980 KB' },
        { name: 'sertifikat_flutter.png', type: 'file', extension: 'png', size: '1.5 MB' },
        { name: 'sertifikat_react.png', type: 'file', extension: 'png', size: '1.4 MB' }
      ];
    }

    if (currentPath === 'Downloads') {
      return [
        { name: 'Agung_Krisna_Resume.pdf', type: 'file', extension: 'pdf', size: '240 KB' },
        { name: 'dompetq_release.apk', type: 'file', extension: 'apk', size: '24.5 MB' },
        { name: 'temuin_mobile_v1.apk', type: 'file', extension: 'apk', size: '18.2 MB' }
      ];
    }

    if (currentPath === 'Documents') {
      return [
        { name: 'biodata_lengkap.txt', type: 'file', extension: 'txt', size: '2.1 KB' },
        { name: 'pengalaman_kerja.txt', type: 'file', extension: 'txt', size: '1.8 KB' },
        { name: 'tatagih_spec.txt', type: 'file', extension: 'txt', size: '1.2 KB' }
      ];
    }

    if (currentPath === 'tatagih file') {
      return [
        {
          name: 'Tatagih.exe',
          type: 'executable',
          extension: 'exe',
          appId: 'tatagih',
          projectId: 'tatagih',
          icon: 'tatagih',
          fileType: 'Application',
          size: '14.2 MB',
          description: 'Tatagih Subscription Manager'
        },
        { name: 'invoice_client.pdf', type: 'file', extension: 'pdf', size: '120 KB' },
        { name: 'rekap_pembayaran.txt', type: 'file', extension: 'txt', size: '1.4 KB' }
      ];
    }

    if (currentPath === 'shortcut') {
      return [
        { name: 'Tatagih', type: 'file', extension: 'lnk', projectId: 'tatagih' },
        { name: 'Temuin', type: 'file', extension: 'lnk', projectId: 'temuin' },
        { name: 'Visual Studio Code', type: 'file', extension: 'lnk' },
        { name: 'Google Chrome', type: 'file', extension: 'lnk' },
        { name: 'Antigravity', type: 'file', extension: 'lnk' }
      ];
    }

    if (currentPath === 'TikTok') {
      return [
        { name: 'content_script.txt', type: 'file', extension: 'txt', size: '4.2 KB' },
        { name: 'video_teaser.mp4', type: 'file', extension: 'mp4', size: '14.8 MB' }
      ];
    }

    if (currentPath === 'Network') {
      return [
        { name: 'FTP.Laptop', type: 'network_drive', isDrive: true, total: '512 GB', free: '210 GB' },
        { name: '192.168.1.6', type: 'network_drive', isDrive: true, total: '1 TB', free: '620 GB' },
        { name: 'FTP.Handphone', type: 'network_drive', isDrive: true, total: '128 GB', free: '64 GB' }
      ];
    }

    if (currentPath === 'Local Disk (C:)') {
      return [
        { name: 'Program Files', type: 'folder' },
        { name: 'Program Files (x86)', type: 'folder' },
        { name: 'Users', type: 'folder' },
        { name: 'Windows', type: 'folder' }
      ];
    }

    if (currentPath === 'Data (D:)') {
      return DATA_D_ITEMS;
    }

    const pathParts = currentPath.split(' > ');
    const lastPart = pathParts[pathParts.length - 1];
    if (lastPart.toLowerCase() === 'projects') {
      return PROJECTS_ITEMS;
    }
    const matchedFolder = DATA_D_ITEMS.find(f => f.name.toLowerCase() === lastPart.toLowerCase());
    if (matchedFolder && matchedFolder.items) {
      return matchedFolder.items;
    }

    return DATA_D_ITEMS;
  };

  const rawItems = getCurrentItems();
  const filteredItems = rawItems.filter(item => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const selectedItem = rawItems.find(item => item.name === selectedItemName);

  const navigateTo = (newPath) => {
    playClickSound();
    setTabs(prev => prev.map(t => {
      if (t.id !== activeTabId) return t;
      const newHistory = t.history.slice(0, t.historyIndex + 1);
      newHistory.push(newPath);
      return {
        ...t,
        path: newPath,
        history: newHistory,
        historyIndex: newHistory.length - 1
      };
    }));
    setSelectedItemName(null);
    setSearchQuery('');
  };

  const handleBack = () => {
    if (historyIndex > 0) {
      playClickSound();
      setTabs(prev => prev.map(t => {
        if (t.id !== activeTabId) return t;
        const nextIdx = t.historyIndex - 1;
        return {
          ...t,
          historyIndex: nextIdx,
          path: t.history[nextIdx]
        };
      }));
      setSelectedItemName(null);
      setSearchQuery('');
    }
  };

  const handleForward = () => {
    if (historyIndex < history.length - 1) {
      playClickSound();
      setTabs(prev => prev.map(t => {
        if (t.id !== activeTabId) return t;
        const nextIdx = t.historyIndex + 1;
        return {
          ...t,
          historyIndex: nextIdx,
          path: t.history[nextIdx]
        };
      }));
      setSelectedItemName(null);
      setSearchQuery('');
    }
  };

  const handleUp = () => {
    playClickSound();
    if (currentPath.includes(' > ')) {
      const parts = currentPath.split(' > ');
      parts.pop();
      navigateTo(parts.join(' > '));
    } else if (currentPath === 'Projects' || currentPath === 'Data (D:)' || currentPath === 'Downloads' || currentPath === 'Documents' || currentPath === 'Home' || currentPath === 'Gallery' || currentPath === 'Local Disk (C:)') {
      navigateTo('This PC');
    }
  };

  const handleNewTab = () => {
    playClickSound();
    const newId = `tab-${Date.now()}`;
    const newPath = currentPath === 'Downloads' ? 'Data (D:)' : 'Downloads';
    setTabs(prev => [
      ...prev,
      {
        id: newId,
        path: newPath,
        history: [newPath],
        historyIndex: 0
      }
    ]);
    setActiveTabId(newId);
  };

  const handleCloseTab = (tabId, e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    playClickSound();
    if (tabs.length === 1) {
      if (winCtx?.onClose) {
        winCtx.onClose();
      }
      return;
    }
    const idx = tabs.findIndex(t => t.id === tabId);
    const newTabs = tabs.filter(t => t.id !== tabId);
    setTabs(newTabs);
    if (activeTabId === tabId) {
      const nextTab = newTabs[Math.max(0, idx - 1)];
      setActiveTabId(nextTab.id);
    }
  };

  const handleItemClick = (item) => {
    setSelectedItemName(item.name);
    if (typeof window !== 'undefined' && window.innerWidth <= 768) {
      handleItemDoubleClick(item);
    }
  };

  const handleItemDoubleClick = (item) => {
    playClickSound();
    setMobileSidebarOpen(false);
    if (item.type === 'drive') {
      navigateTo(item.name);
    } else if (item.type === 'folder') {
      if (item.name.toLowerCase() === 'projects') {
        navigateTo('Projects');
      } else if (currentPath === 'This PC' || currentPath === 'Home') {
        navigateTo(item.name);
      } else {
        navigateTo(`${currentPath} > ${item.name}`);
      }
    } else if (
      item.projectId || 
      item.type === 'executable' || 
      item.extension === 'exe' ||
      item.appId === 'tatagih' ||
      item.appId === 'temuin' ||
      item.appId === 'lintas' ||
      item.appId === 'neurofly' ||
      item.appId === 'dompetq' ||
      item.appId === 'makalah'
    ) {
      const lower = (item.name || '').toLowerCase();
      let targetProj = item.projectId;
      if (!targetProj) {
        if (lower.includes('tatagih')) targetProj = 'tatagih';
        else if (lower.includes('temuin')) targetProj = 'temuin';
        else if (lower.includes('lintas')) targetProj = 'lintas';
        else if (lower.includes('neurofly')) targetProj = 'neurofly';
        else if (lower.includes('dompetq')) targetProj = 'dompetq';
        else if (lower.includes('makalah')) targetProj = 'makalah';
        else targetProj = 'tatagih';
      }
      if (onLaunchApp) {
        onLaunchApp('chrome', { projectId: targetProj });
      } else if (onOpenFile) {
        onOpenFile({ ...item, appId: 'chrome', projectId: targetProj });
      }
    } else if (item.name && item.name.toLowerCase().includes('tatagih')) {
      if (onLaunchApp) onLaunchApp('chrome', { projectId: 'tatagih' });
      else if (onOpenFile) onOpenFile({ ...item, appId: 'chrome', projectId: 'tatagih' });
    } else if (item.name && item.name.toLowerCase().includes('temuin')) {
      if (onLaunchApp) onLaunchApp('chrome', { projectId: 'temuin' });
      else if (onOpenFile) onOpenFile({ ...item, appId: 'chrome', projectId: 'temuin' });
    } else if (item.name && item.name.toLowerCase().includes('lintas')) {
      if (onLaunchApp) onLaunchApp('chrome', { projectId: 'lintas' });
      else if (onOpenFile) onOpenFile({ ...item, appId: 'chrome', projectId: 'lintas' });
    } else if (item.name && item.name.toLowerCase().includes('neurofly')) {
      if (onLaunchApp) onLaunchApp('chrome', { projectId: 'neurofly' });
      else if (onOpenFile) onOpenFile({ ...item, appId: 'chrome', projectId: 'neurofly' });
    } else if (item.name && item.name.toLowerCase().includes('dompetq')) {
      if (onLaunchApp) onLaunchApp('chrome', { projectId: 'dompetq' });
      else if (onOpenFile) onOpenFile({ ...item, appId: 'chrome', projectId: 'dompetq' });
    } else if (item.name && item.name.toLowerCase().includes('makalah')) {
      if (onLaunchApp) onLaunchApp('chrome', { projectId: 'makalah' });
      else if (onOpenFile) onOpenFile({ ...item, appId: 'chrome', projectId: 'makalah' });
    } else {
      if (onOpenFile) {
        onOpenFile(item);
      }
    }
  };

  const getBreadcrumbs = () => {
    if (currentPath === 'Recycle Bin') return ['Recycle Bin'];
    const parts = ['This PC'];
    if (currentPath === 'This PC') return parts;
    if (currentPath === 'Projects') {
      parts.push('Projects');
      return parts;
    }
    if (currentPath.startsWith('Data (D:)')) {
      parts.push('Data (D:)');
      if (currentPath.includes(' > ')) {
        const sub = currentPath.split(' > ')[1];
        parts.push(sub);
      }
    } else if (currentPath.includes(' > ')) {
      const subParts = currentPath.split(' > ');
      parts.push(...subParts);
    } else {
      parts.push(currentPath);
    }
    return parts;
  };

  const getTabIcon = (path = currentPath) => {
    if (path === 'Recycle Bin') return 'trash';
    if (path === 'Projects' || path.endsWith('> Projects')) return 'folder';
    if (path === 'Downloads') return 'downloads';
    if (path === 'Documents') return 'documents';
    if (path === 'Gallery') return 'gallery';
    if (path === 'Home') return 'home';
    if (path === 'This PC') return 'this-pc';
    if (path.includes('(C:)')) return 'drive-c';
    if (path.includes('(D:)')) return 'drive-d';
    return 'folder';
  };

  return (
    <div className="explorer-container">
      {/* 1. Combined Windows 11 Tabs & Titlebar (Tabs + Window Controls in the EXACT SAME ROW) */}
      <div
        className="explorer-tabs-bar"
        onPointerDown={winCtx?.handleTitlePointerDown}
        onPointerMove={winCtx?.handleTitlePointerMove}
        onPointerUp={winCtx?.handleTitlePointerUp}
        onDoubleClick={() => {
          if (!winCtx?.isMobile && winCtx?.onMaximize) {
            playClickSound();
            winCtx.onMaximize();
          }
        }}
      >
        <div className="explorer-tabstrip">
          {tabs.map((tab) => {
            const isTabActive = tab.id === activeTabId;
            const tabName = tab.path.includes(' > ') ? tab.path.split(' > ').pop() : tab.path;
            return (
              <div
                key={tab.id}
                className={`explorer-tab ${isTabActive ? 'active' : 'inactive'}`}
                onClick={() => {
                  playClickSound();
                  setActiveTabId(tab.id);
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 7, overflow: 'hidden' }}>
                  <WinIcon name={getTabIcon(tab.path)} size={16} />
                  <span className="explorer-tab-title">{tabName}</span>
                </div>
                <button
                  type="button"
                  className="explorer-tab-close"
                  title="Close tab"
                  onPointerDown={(e) => e.stopPropagation()}
                  onClick={(e) => handleCloseTab(tab.id, e)}
                >
                  <X size={12} />
                </button>
              </div>
            );
          })}

          <button 
            type="button"
            className="explorer-new-tab-btn" 
            title="New Tab"
            onPointerDown={(e) => e.stopPropagation()}
            onClick={handleNewTab}
          >
            <Plus size={15} />
          </button>
        </div>

        {/* Empty draggable space */}
        <div className="explorer-titlebar-drag-spacer" />

        {/* Window controls (Minimize, Maximize, Close) in the SAME ROW */}
        {winCtx?.WindowControls && (
          <winCtx.WindowControls
            onMinimize={winCtx.onMinimize}
            onMaximize={winCtx.onMaximize}
            onClose={winCtx.onClose}
            isMaximized={winCtx.isMaximized}
            isMobile={winCtx.isMobile}
            showSnapLayouts={winCtx.showSnapLayouts}
            setShowSnapLayouts={winCtx.setShowSnapLayouts}
            snapWindow={winCtx.snapWindow}
            className="explorer-win-controls"
          />
        )}
      </div>

      {/* 2. Navigation & Address Bar Row */}
      <div className="explorer-address-bar-row">
        <div className="nav-buttons">
          <button 
            className="nav-btn" 
            disabled={historyIndex === 0}
            onClick={handleBack}
            title="Back"
          >
            <ArrowLeft size={16} />
          </button>
          <button 
            className="nav-btn" 
            disabled={historyIndex >= history.length - 1}
            onClick={handleForward}
            title="Forward"
          >
            <ArrowRight size={16} />
          </button>
          <button 
            className="nav-btn" 
            disabled={currentPath === 'This PC'}
            onClick={handleUp}
            title="Up to parent directory"
          >
            <ArrowUp size={16} />
          </button>
        </div>

        <div className="address-box">
          <WinIcon name={currentPath === 'Recycle Bin' ? 'trash' : 'this-pc'} size={16} />
          <div className="address-breadcrumbs">
            {getBreadcrumbs().map((part, index) => (
              <React.Fragment key={index}>
                <span 
                  className="breadcrumb-segment"
                  onClick={() => {
                    if (index === 0) navigateTo('This PC');
                    else if (part === 'Projects') navigateTo('Projects');
                    else if (part === 'Data (D:)') navigateTo('Data (D:)');
                  }}
                >
                  {part}
                </span>
                {index < getBreadcrumbs().length - 1 && <span className="breadcrumb-sep">&gt;</span>}
              </React.Fragment>
            ))}
          </div>
          <button className="refresh-btn" onClick={() => playClickSound()} title="Refresh">
            <RefreshCw size={13} />
          </button>
        </div>

        <div className="search-box">
          <Search size={14} color="#9ca3af" />
          <input
            type="text"
            className="search-input"
            placeholder={`Search ${currentPath.includes(' > ') ? currentPath.split(' > ').pop() : currentPath}`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* 3. Command Bar */}
      <div className="explorer-command-bar">
        <div className="command-bar-left">
          <button className="cmd-btn" onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)} style={{ backgroundColor: mobileSidebarOpen ? 'rgba(0,120,212,0.25)' : 'transparent' }}>
            <WinIcon name="folder" size={14} />
            <span>Sidebar</span>
          </button>
          <div className="cmd-divider" />
          {selectedItem && (
            <button 
              className="cmd-btn" 
              onClick={() => handleItemDoubleClick(selectedItem)}
              style={{ 
                backgroundColor: 'rgba(0, 120, 212, 0.28)', 
                color: '#60cdff', 
                border: '1px solid #0078d4',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                padding: '4px 12px',
                borderRadius: '4px'
              }}
            >
              <WinIcon name={selectedItem.projectId || 'chrome'} size={14} />
              <span>
                {selectedItem.type === 'executable' || selectedItem.projectId
                  ? `Buka ${selectedItem.name.replace('.exe', '')} di Chrome`
                  : `Buka ${selectedItem.name}`}
              </span>
            </button>
          )}
          {currentPath === 'Recycle Bin' ? (
            <>
              <button 
                className="cmd-btn" 
                onClick={() => {
                  playClickSound();
                  if (recycleBinItems.length === 0) {
                    alert('Recycle Bin sudah kosong.');
                  } else if (window.confirm('Apakah Anda yakin ingin mengosongkan Recycle Bin?')) {
                    setRecycleBinItems([]);
                    setSelectedItemName(null);
                  }
                }}
              >
                <WinIcon name="trash" size={15} />
                <span>Empty Recycle Bin</span>
              </button>
              <button 
                className="cmd-btn" 
                onClick={() => {
                  playClickSound();
                  setRecycleBinItems(RECYCLE_BIN_ITEMS);
                  alert('Semua item di Recycle Bin telah dipulihkan.');
                }}
              >
                <RotateCcw size={14} color="#0078d4" />
                <span>Restore all items</span>
              </button>
              <div className="cmd-divider" />
            </>
          ) : (
            <button className="cmd-btn" onClick={() => alert('Folder baru dibuat')}>
              <Plus size={15} color="#0078d4" />
              <span>New</span>
              <ChevronDown size={12} />
            </button>
          )}
          <div className="cmd-divider" />
          <button className="cmd-btn icon-only" title="Cut" disabled={!selectedItemName}>
            <WinIcon name="scissors" size={16} />
          </button>
          <button className="cmd-btn icon-only" title="Copy" disabled={!selectedItemName}>
            <WinIcon name="copy" size={16} />
          </button>
          <button className="cmd-btn icon-only" title="Paste" disabled={!selectedItemName}>
            <WinIcon name="paste" size={16} />
          </button>
          <button className="cmd-btn icon-only" title="Rename" disabled={!selectedItemName}>
            <WinIcon name="rename" size={16} />
          </button>
          <button className="cmd-btn icon-only" title="Share" disabled={!selectedItemName}>
            <WinIcon name="share" size={16} />
          </button>
          <button className="cmd-btn icon-only" title="Delete" disabled={!selectedItemName}>
            <WinIcon name="delete" size={16} />
          </button>
          <div className="cmd-divider" />
          <button className="cmd-btn" title="Sort options">
            <WinIcon name="sort" size={15} />
            <span>Sort</span>
            <ChevronDown size={12} />
          </button>
          <button className="cmd-btn" onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}>
            <WinIcon name="view-grid" size={15} />
            <span>View</span>
            <ChevronDown size={12} />
          </button>
          <button className="cmd-btn icon-only" title="See more">
            <span style={{ fontSize: '13px', letterSpacing: '1px', fontWeight: 'bold', color: '#9ca3af' }}>•••</span>
          </button>
        </div>

        <div className="command-bar-right">
          <button className="cmd-btn preview-btn" title="Preview pane">
            <WinIcon name="preview-pane" size={15} />
            <span>Preview</span>
          </button>
        </div>
      </div>

      <div className="explorer-main-area">
        <div className={`explorer-sidebar ${mobileSidebarOpen ? 'mobile-open' : ''}`}>
          <div 
            className={`sidebar-item ${currentPath === 'Home' ? 'selected' : ''}`}
            onClick={() => navigateTo('Home')}
          >
            <WinIcon name="home" size={16} />
            <span>Home</span>
          </div>
          <div 
            className={`sidebar-item ${currentPath === 'Projects' ? 'selected' : ''}`}
            onClick={() => navigateTo('Projects')}
          >
            <WinIcon name="folder" size={16} />
            <span style={{ fontWeight: 600, color: '#38bdf8' }}>Projects (Portfolio)</span>
            <span className="sidebar-pin"><WinIcon name="pin" size={12} /></span>
          </div>
          <div 
            className={`sidebar-item ${currentPath === 'Gallery' ? 'selected' : ''}`}
            onClick={() => navigateTo('Gallery')}
          >
            <WinIcon name="gallery" size={16} />
            <span>Gallery</span>
          </div>
          <div className="sidebar-item">
            <span className="sidebar-chevron"><ChevronRight size={12} /></span>
            <WinIcon name="onedrive" size={16} />
            <span>agung - Personal</span>
          </div>

          <div className="sidebar-divider" />

          <div 
            className={`sidebar-item ${currentPath === 'Downloads' ? 'selected' : ''}`}
            onClick={() => navigateTo('Downloads')}
          >
            <WinIcon name="downloads" size={16} />
            <span>Downloads</span>
            <span className="sidebar-pin"><WinIcon name="pin" size={12} /></span>
          </div>
          <div className="sidebar-item">
            <WinIcon name="ftp-laptop" size={16} />
            <span>FTP.Laptop</span>
            <span className="sidebar-pin"><WinIcon name="pin" size={12} /></span>
          </div>
          <div className="sidebar-item">
            <WinIcon name="shared-folder" size={16} />
            <span>192.168.1.6</span>
            <span className="sidebar-pin"><WinIcon name="pin" size={12} /></span>
          </div>
          <div 
            className={`sidebar-item ${currentPath === 'Documents' ? 'selected' : ''}`}
            onClick={() => navigateTo('Documents')}
          >
            <WinIcon name="documents" size={16} />
            <span>Documents</span>
          </div>
          <div 
            className={`sidebar-item ${currentPath === 'tatagih file' ? 'selected' : ''}`}
            onClick={() => navigateTo('tatagih file')}
          >
            <WinIcon name="folder" size={16} />
            <span>tatagih file</span>
          </div>
          <div 
            className={`sidebar-item ${currentPath === 'shortcut' ? 'selected' : ''}`}
            onClick={() => navigateTo('shortcut')}
          >
            <WinIcon name="folder" size={16} />
            <span>shortcut</span>
          </div>
          <div 
            className={`sidebar-item ${currentPath === 'TikTok' ? 'selected' : ''}`}
            onClick={() => navigateTo('TikTok')}
          >
            <WinIcon name="folder" size={16} />
            <span>TikTok</span>
          </div>
          <div 
            className={`sidebar-item ${currentPath === 'Recycle Bin' ? 'selected' : ''}`}
            onClick={() => navigateTo('Recycle Bin')}
          >
            <WinIcon name="trash" size={16} />
            <span>Recycle Bin</span>
          </div>

          <div className="sidebar-divider" />

          <div 
            className={`sidebar-item ${currentPath === 'This PC' ? 'selected' : ''}`}
            onClick={() => navigateTo('This PC')}
          >
            <span className="sidebar-chevron"><ChevronDown size={14} /></span>
            <WinIcon name="this-pc" size={16} />
            <span>This PC</span>
          </div>

          <div className="sidebar-item nested">
            <span className="sidebar-chevron"><ChevronRight size={12} /></span>
            <WinIcon name="shared-folder" size={16} />
            <span>FTP.Handphone</span>
          </div>
          <div 
            className={`sidebar-item nested ${currentPath === 'Local Disk (C:)' ? 'selected' : ''}`}
            onClick={() => navigateTo('Local Disk (C:)')}
          >
            <span className="sidebar-chevron"><ChevronRight size={12} /></span>
            <WinIcon name="drive-c" size={16} />
            <span>Local Disk (C:)</span>
          </div>
          <div 
            className={`sidebar-item nested ${currentPath.startsWith('Data (D:)') ? 'selected' : ''}`}
            onClick={() => navigateTo('Data (D:)')}
          >
            <span className="sidebar-chevron"><ChevronRight size={12} /></span>
            <WinIcon name="drive-d" size={16} />
            <span>Data (D:)</span>
          </div>

          <div 
            className={`sidebar-item ${currentPath === 'Network' ? 'selected' : ''}`}
            onClick={() => navigateTo('Network')}
          >
            <span className="sidebar-chevron"><ChevronRight size={12} /></span>
            <WinIcon name="network-pc" size={16} />
            <span>Network</span>
          </div>
        </div>

        <div className="explorer-content-view">
          {(viewMode === 'list' || currentPath === 'Recycle Bin') ? (
            <div className="explorer-details-table">
              <div className="details-header-row">
                <div className="details-col col-name">Name</div>
                <div className="details-col col-loc">Original Location</div>
                <div className="details-col col-date">Date Deleted</div>
                <div className="details-col col-size">Size</div>
                <div className="details-col col-type">Item type</div>
              </div>
              <div className="details-body">
                {filteredItems.map((item, index) => {
                  const isSelected = selectedItemName === item.name;

                  return (
                    <div
                      key={index}
                      className={`details-row ${isSelected ? 'selected' : ''}`}
                      onClick={() => handleItemClick(item)}
                      onDoubleClick={() => handleItemDoubleClick(item)}
                      onTouchEnd={() => {
                        const now = Date.now();
                        const lastTouch = item._lastTouch || 0;
                        if (now - lastTouch < 350) {
                          handleItemDoubleClick(item);
                        } else {
                          handleItemClick(item);
                        }
                        item._lastTouch = now;
                      }}
                    >
                      <div className="details-col col-name">
                        <WinIcon name={getItemIconName(item)} size={18} />
                        <span className="details-name-text">{item.name}</span>
                      </div>
                      <div className="details-col col-loc">{item.originalLocation || 'C:\\Users\\KRISNA'}</div>
                      <div className="details-col col-date">{item.dateDeleted || '9/27/2026 11:42 PM'}</div>
                      <div className="details-col col-size">{item.size || '-'}</div>
                      <div className="details-col col-type">
                        {item.itemType || (item.extension ? `${item.extension.toUpperCase()} File` : (item.type === 'folder' ? 'File folder' : 'Document'))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="explorer-grid">
              {filteredItems.map((item, index) => {
                const isSelected = selectedItemName === item.name;

                return (
                  <div
                    key={index}
                    className={`folder-card ${isSelected ? 'selected' : ''}`}
                    onClick={() => handleItemClick(item)}
                    onDoubleClick={() => handleItemDoubleClick(item)}
                    onTouchEnd={() => {
                      const now = Date.now();
                      const lastTouch = item._lastTouch || 0;
                      if (now - lastTouch < 350) {
                        handleItemDoubleClick(item);
                      } else {
                        handleItemClick(item);
                      }
                      item._lastTouch = now;
                    }}
                  >
                    <div className="folder-icon-wrapper">
                      {item.isDrive ? (
                        item.name.includes('(C:)') ? (
                          <WinIcon name="drive-c" size={52} />
                        ) : item.name.includes('(D:)') ? (
                          <WinIcon name="drive-d" size={52} />
                        ) : (
                          <WinIcon name="shared-folder" size={52} />
                        )
                      ) : item.type === 'folder' ? (
                        <>
                          <WinIcon name="folder" size={54} />
                          {item.previewImage && (
                            <div className="folder-inner-preview">
                              <img src={item.previewImage} alt="preview" />
                            </div>
                          )}
                        </>
                      ) : item.type === 'executable' || item.extension === 'exe' ? (
                        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <WinIcon name={item.projectId || item.icon || 'chrome'} size={50} />
                          <span style={{ position: 'absolute', bottom: -2, right: -4, backgroundColor: '#0078d4', color: '#fff', fontSize: '9px', fontWeight: 700, padding: '1px 4px', borderRadius: '3px', textTransform: 'uppercase', boxShadow: '0 2px 4px rgba(0,0,0,0.4)' }}>EXE</span>
                        </div>
                      ) : item.extension === 'pdf' ? (
                        <WinIcon name="pdf" size={48} />
                      ) : item.extension === 'jpg' || item.extension === 'png' ? (
                        <WinIcon name="photos" size={48} />
                      ) : item.extension === 'txt' ? (
                        <WinIcon name="notepad" size={48} />
                      ) : (
                        <WinIcon name={item.icon || 'document'} size={48} />
                      )}
                    </div>
                    <span className="folder-name">{item.name}</span>
                    {(item.type === 'executable' || item.extension === 'exe') && (
                      <span style={{ fontSize: '10px', color: '#38bdf8', marginTop: '2px', fontWeight: 600 }}>Aplikasi</span>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      <div className="explorer-status-bar">
        <div className="status-left">
          <span>{filteredItems.length} items</span>
          {selectedItemName && (
            <>
              <span>|</span>
              <span>1 item selected</span>
            </>
          )}
        </div>
        <div className="status-right">
          <span 
            style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
            onClick={() => setViewMode('grid')}
          >
            <LayoutGrid size={14} color={viewMode === 'grid' ? '#0078d4' : '#9ca3af'} />
          </span>
          <span 
            style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
            onClick={() => setViewMode('list')}
          >
            <List size={14} color={viewMode === 'list' ? '#0078d4' : '#9ca3af'} />
          </span>
        </div>
      </div>
    </div>
  );
};
