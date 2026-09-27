import React, { useState } from 'react';
import { 
  ArrowLeft, ArrowRight, ArrowUp, RefreshCw, Search,
  Plus, Scissors, Copy, Edit3, Share2, Trash2, 
  ArrowUpDown, LayoutGrid, List, ChevronRight, ChevronDown,
  HardDrive, Folder, FileText, Image as ImageIcon, Home,
  FolderOpen, Cloud, Download, Laptop, Smartphone, Globe
} from 'lucide-react';
import { WinIcon } from '../Common/WinIcon';
import { DATA_D_ITEMS } from '../../data/fileSystem';
import { playClickSound } from '../../utils/sound';
import './FileExplorer.css';

export const FileExplorerApp = ({ initialPath = 'Data (D:)', onOpenFile, onOpenFolder }) => {
  const [currentPath, setCurrentPath] = useState(initialPath);
  const [history, setHistory] = useState([initialPath]);
  const [historyIndex, setHistoryIndex] = useState(0);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItemName, setSelectedItemName] = useState(null);
  const [viewMode, setViewMode] = useState('grid');

  const getCurrentItems = () => {
    if (currentPath === 'This PC') {
      return [
        { name: 'Local Disk (C:)', type: 'drive', isDrive: true, total: '256 GB', free: '142 GB' },
        { name: 'Data (D:)', type: 'drive', isDrive: true, total: '512 GB', free: '380 GB' },
        { name: 'FTP.Handphone', type: 'network_drive', isDrive: true, total: '128 GB', free: '64 GB' }
      ];
    }

    if (currentPath === 'Data (D:)') {
      return DATA_D_ITEMS;
    }

    if (currentPath.startsWith('Data (D:) > ')) {
      const folderName = currentPath.replace('Data (D:) > ', '');
      const folder = DATA_D_ITEMS.find(f => f.name.toLowerCase() === folderName.toLowerCase());
      return folder?.items || [];
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

    return DATA_D_ITEMS;
  };

  const rawItems = getCurrentItems();
  const filteredItems = rawItems.filter(item => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const navigateTo = (newPath) => {
    playClickSound();
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push(newPath);
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
    setCurrentPath(newPath);
    setSelectedItemName(null);
    setSearchQuery('');
  };

  const handleBack = () => {
    if (historyIndex > 0) {
      playClickSound();
      const newIdx = historyIndex - 1;
      setHistoryIndex(newIdx);
      setCurrentPath(history[newIdx]);
    }
  };

  const handleForward = () => {
    if (historyIndex < history.length - 1) {
      playClickSound();
      const newIdx = historyIndex + 1;
      setHistoryIndex(newIdx);
      setCurrentPath(history[newIdx]);
    }
  };

  const handleUp = () => {
    if (currentPath.startsWith('Data (D:) > ')) {
      navigateTo('Data (D:)');
    } else if (currentPath === 'Data (D:)' || currentPath === 'Downloads' || currentPath === 'Documents') {
      navigateTo('This PC');
    }
  };

  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

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
      if (currentPath === 'Data (D:)') {
        navigateTo(`Data (D:) > ${item.name}`);
      } else {
        navigateTo(`${currentPath} > ${item.name}`);
      }
    } else {
      if (onOpenFile) {
        onOpenFile(item);
      }
    }
  };

  const getBreadcrumbs = () => {
    const parts = ['This PC'];
    if (currentPath === 'This PC') return parts;
    if (currentPath.startsWith('Data (D:)')) {
      parts.push('Data (D:)');
      if (currentPath.includes(' > ')) {
        const sub = currentPath.split(' > ')[1];
        parts.push(sub);
      }
    } else {
      parts.push(currentPath);
    }
    return parts;
  };

  return (
    <div className="explorer-container">
      <div className="explorer-tabs-bar">
        <div className="explorer-tab">
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <WinIcon name="folder" size={16} />
            <span>{currentPath.includes(' > ') ? currentPath.split(' > ')[1] : currentPath}</span>
          </div>
          <span className="explorer-tab-close">×</span>
        </div>
        <button 
          className="explorer-new-tab-btn" 
          title="New Tab"
          onClick={() => navigateTo('This PC')}
        >
          <Plus size={15} />
        </button>
      </div>

      <div className="explorer-command-bar">
        <div className="command-bar-left">
          <button className="cmd-btn" onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)} style={{ backgroundColor: mobileSidebarOpen ? 'rgba(0,120,212,0.25)' : 'transparent' }}>
            <Folder size={14} color="#0078d4" />
            <span>Sidebar</span>
          </button>
          <div className="cmd-divider" />
          <button className="cmd-btn" onClick={() => alert('Folder baru dibuat')}>
            <Plus size={15} color="#0078d4" />
            <span>New</span>
            <ChevronDown size={12} />
          </button>
          <div className="cmd-divider" />
          <button className="cmd-btn icon-only" title="Cut" disabled={!selectedItemName}>
            <Scissors size={14} />
          </button>
          <button className="cmd-btn icon-only" title="Copy" disabled={!selectedItemName}>
            <Copy size={14} />
          </button>
          <button className="cmd-btn icon-only" title="Rename" disabled={!selectedItemName}>
            <Edit3 size={14} />
          </button>
          <button className="cmd-btn icon-only" title="Share" disabled={!selectedItemName}>
            <Share2 size={14} />
          </button>
          <button className="cmd-btn icon-only" title="Delete" disabled={!selectedItemName}>
            <Trash2 size={14} />
          </button>
          <div className="cmd-divider" />
          <button className="cmd-btn" title="Sort options">
            <ArrowUpDown size={14} />
            <span>Sort</span>
            <ChevronDown size={12} />
          </button>
          <button className="cmd-btn" onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}>
            {viewMode === 'grid' ? <LayoutGrid size={14} /> : <List size={14} />}
            <span>View</span>
            <ChevronDown size={12} />
          </button>
        </div>

        <div className="command-bar-right">
          <button className="cmd-btn icon-only" title="Details Pane">
            <List size={14} />
          </button>
        </div>
      </div>

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
          <WinIcon name="computer" size={16} />
          <div className="address-breadcrumbs">
            {getBreadcrumbs().map((part, index) => (
              <React.Fragment key={index}>
                <span 
                  className="breadcrumb-segment"
                  onClick={() => {
                    if (index === 0) navigateTo('This PC');
                    else if (index === 1 && part === 'Data (D:)') navigateTo('Data (D:)');
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
            placeholder={`Search ${currentPath.includes(' > ') ? currentPath.split(' > ')[1] : currentPath}`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="explorer-main-area">
        <div className={`explorer-sidebar ${mobileSidebarOpen ? 'mobile-open' : ''}`}>
          <div 
            className={`sidebar-item ${currentPath === 'Home' ? 'selected' : ''}`}
            onClick={() => navigateTo('Home')}
          >
            <Home size={16} color="#0284c7" />
            <span>Home</span>
          </div>
          <div className="sidebar-item">
            <ImageIcon size={16} color="#10b981" />
            <span>Gallery</span>
          </div>
          <div className="sidebar-item">
            <Cloud size={16} color="#3b82f6" />
            <span>agung - Personal</span>
          </div>

          <div className="sidebar-divider" />

          <div 
            className={`sidebar-item ${currentPath === 'Downloads' ? 'selected' : ''}`}
            onClick={() => navigateTo('Downloads')}
          >
            <Download size={16} color="#0078d4" />
            <span>Downloads</span>
          </div>
          <div className="sidebar-item">
            <Laptop size={16} color="#8b5cf6" />
            <span>FTP.Laptop</span>
          </div>
          <div className="sidebar-item">
            <Globe size={16} color="#10b981" />
            <span>192.168.1.6</span>
          </div>
          <div 
            className={`sidebar-item ${currentPath === 'Documents' ? 'selected' : ''}`}
            onClick={() => navigateTo('Documents')}
          >
            <FileText size={16} color="#f59e0b" />
            <span>Documents</span>
          </div>
          <div className="sidebar-item">
            <Folder size={16} color="#eab308" />
            <span>tatagih file</span>
          </div>
          <div className="sidebar-item">
            <Folder size={16} color="#eab308" />
            <span>shortcut</span>
          </div>

          <div className="sidebar-divider" />

          <div 
            className={`sidebar-item ${currentPath === 'This PC' ? 'selected' : ''}`}
            onClick={() => navigateTo('This PC')}
          >
            <span className="sidebar-chevron"><ChevronDown size={14} /></span>
            <WinIcon name="computer" size={16} />
            <span>This PC</span>
          </div>

          <div className="sidebar-item nested">
            <Smartphone size={15} color="#ec4899" />
            <span>FTP.Handphone</span>
          </div>
          <div className="sidebar-item nested">
            <HardDrive size={15} color="#0078d4" />
            <span>Local Disk (C:)</span>
          </div>
          <div 
            className={`sidebar-item nested ${currentPath.startsWith('Data (D:)') ? 'selected' : ''}`}
            onClick={() => navigateTo('Data (D:)')}
          >
            <HardDrive size={15} color="#0078d4" />
            <span>Data (D:)</span>
          </div>

          <div className="sidebar-item">
            <Globe size={16} color="#94a3b8" />
            <span>Network</span>
          </div>
        </div>

        <div className="explorer-content-view">
          <div className="explorer-grid">
            {filteredItems.map((item, index) => {
              const isSelected = selectedItemName === item.name;

              return (
                <div
                  key={index}
                  className={`folder-card ${isSelected ? 'selected' : ''}`}
                  onClick={() => handleItemClick(item)}
                  onDoubleClick={() => handleItemDoubleClick(item)}
                  onTouchEnd={(e) => {
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
                      <HardDrive size={46} color="#0078d4" />
                    ) : item.type === 'folder' ? (
                      <>
                        <WinIcon name="folder" size={54} />
                        {item.previewImage && (
                          <div className="folder-inner-preview">
                            <img src={item.previewImage} alt="preview" />
                          </div>
                        )}
                      </>
                    ) : item.extension === 'pdf' ? (
                      <WinIcon name="pdf" size={48} />
                    ) : item.extension === 'jpg' || item.extension === 'png' ? (
                      <WinIcon name="image" size={48} />
                    ) : (
                      <WinIcon name="notepad" size={48} />
                    )}
                  </div>
                  <span className="folder-name">{item.name}</span>
                </div>
              );
            })}
          </div>
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
          <LayoutGrid 
            size={14} 
            color={viewMode === 'grid' ? '#0078d4' : '#9ca3af'} 
            style={{ cursor: 'pointer' }}
            onClick={() => setViewMode('grid')}
          />
          <List 
            size={14} 
            color={viewMode === 'list' ? '#0078d4' : '#9ca3af'} 
            style={{ cursor: 'pointer' }}
            onClick={() => setViewMode('list')}
          />
        </div>
      </div>
    </div>
  );
};
