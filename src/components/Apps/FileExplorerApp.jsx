import React, { useState } from 'react';
import { 
  ArrowLeft, ArrowRight, ArrowUp, RefreshCw, Search,
  Plus, ChevronRight, ChevronDown, LayoutGrid, List
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
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const getCurrentItems = () => {
    if (currentPath === 'This PC') {
      return [
        { name: 'Local Disk (C:)', type: 'drive', isDrive: true, total: '256 GB', free: '142 GB' },
        { name: 'Data (D:)', type: 'drive', isDrive: true, total: '512 GB', free: '380 GB' },
        { name: 'FTP.Handphone', type: 'network_drive', isDrive: true, total: '128 GB', free: '64 GB' }
      ];
    }

    if (currentPath === 'Home') {
      return [
        { name: 'Downloads', type: 'folder', size: '3 items' },
        { name: 'Documents', type: 'folder', size: '3 items' },
        { name: 'tatagih file', type: 'folder', size: '2 items' },
        { name: 'Curriculum_Vitae.pdf', type: 'file', extension: 'pdf', size: '240 KB' },
        { name: 'README_RECRUITER.txt', type: 'file', extension: 'txt', size: '3.4 KB' }
      ];
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
        { name: 'invoice_client.pdf', type: 'file', extension: 'pdf', size: '120 KB' },
        { name: 'rekap_pembayaran.txt', type: 'file', extension: 'txt', size: '1.4 KB' }
      ];
    }

    if (currentPath === 'shortcut') {
      return [
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

    if (currentPath.startsWith('Data (D:) > ')) {
      const folderName = currentPath.replace('Data (D:) > ', '');
      const folder = DATA_D_ITEMS.find(f => f.name.toLowerCase() === folderName.toLowerCase());
      return folder?.items || [];
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
    } else if (currentPath === 'Data (D:)' || currentPath === 'Downloads' || currentPath === 'Documents' || currentPath === 'Home' || currentPath === 'Gallery' || currentPath === 'Local Disk (C:)') {
      navigateTo('This PC');
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
      if (currentPath === 'Data (D:)') {
        navigateTo(`Data (D:) > ${item.name}`);
      } else if (currentPath === 'Home' || currentPath === 'This PC') {
        navigateTo(item.name);
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

  const getTabIcon = () => {
    if (currentPath === 'Downloads') return 'downloads';
    if (currentPath === 'Documents') return 'documents';
    if (currentPath === 'Gallery') return 'gallery';
    if (currentPath === 'Home') return 'home';
    if (currentPath === 'This PC') return 'this-pc';
    if (currentPath.includes('(C:)')) return 'drive-c';
    if (currentPath.includes('(D:)')) return 'drive-d';
    return 'folder';
  };

  return (
    <div className="explorer-container">
      <div className="explorer-tabs-bar">
        <div className="explorer-tab">
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <WinIcon name={getTabIcon()} size={16} />
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
            <WinIcon name="folder" size={14} />
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
          <WinIcon name="this-pc" size={16} />
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
            <WinIcon name="home" size={16} />
            <span>Home</span>
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
                    ) : item.extension === 'pdf' ? (
                      <WinIcon name="pdf" size={48} />
                    ) : item.extension === 'jpg' || item.extension === 'png' ? (
                      <WinIcon name="photos" size={48} />
                    ) : item.extension === 'txt' ? (
                      <WinIcon name="notepad" size={48} />
                    ) : (
                      <WinIcon name="document" size={48} />
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
