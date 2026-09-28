import React, { useState, useEffect, useRef } from 'react';
import { Search, ChevronDown, User, Moon, Power, RotateCcw } from 'lucide-react';
import { WinIcon } from '../Common/WinIcon';
import { playClickSound } from '../../utils/sound';

export const StartMenu = ({ isOpen, onClose, onLaunchApp, onOpenFile, onRestart, onShutDown, onSleep }) => {
  const [search, setSearch] = useState('');
  const [showPowerMenu, setShowPowerMenu] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (isOpen && menuRef.current && !menuRef.current.contains(e.target)) {
        if (!e.target.closest('.start-btn')) {
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

  const pinnedApps = [
    { id: 'whatsapp', name: 'WhatsApp', icon: 'whatsapp' },
    { id: 'browser', name: 'Microsoft Edge', icon: 'edge' },
    { id: 'ms-store', name: 'Microsoft Store', icon: 'ms-store' },
    { id: 'xbox', name: 'XBOX', icon: 'xbox' },
    { id: 'todo', name: 'To Do', icon: 'todo' },
    { id: 'calculator', name: 'Calculator', icon: 'calculator' },
    { id: 'clock', name: 'Clock', icon: 'clock' },
    { id: 'paint', name: 'Paint', icon: 'paint' },
    { id: 'onenote', name: 'OneNote', icon: 'onenote' },
    { id: 'explorer', name: 'File Explorer', icon: 'explorer' },
    { id: 'chrome', name: 'Google Chrome', icon: 'chrome' },
    { id: 'antigravity', name: 'Antigravity', icon: 'antigravity' },
    { id: 'ldplayer', name: 'LDPlayer 14', icon: 'ldplayer' }
  ];

  const categoryGroups = [
    {
      name: 'Productivity',
      icons: ['chrome', 'folder', 'whatsapp', 'edge'],
      appToLaunch: 'chrome'
    },
    {
      name: 'Creativity',
      icons: ['vlc', 'gallery', 'video-editor', 'paint'],
      appToLaunch: 'paint'
    },
    {
      name: 'Utilities & Tools',
      icons: ['snipping-tool', 'settings', 'download-manager', 'winrar'],
      appToLaunch: 'settings'
    },
    {
      name: 'Developer',
      icons: ['antigravity', 'mail', 'vscode', 'terminal'],
      appToLaunch: 'antigravity'
    },
    {
      name: 'Coding & Terminal',
      icons: ['vscode', 'terminal', 'powershell', 'notepad'],
      appToLaunch: 'terminal'
    },
    {
      name: 'Media & Play',
      icons: ['media-player', 'xbox', 'whatsapp', 'chrome'],
      appToLaunch: 'whatsapp'
    }
  ];

  const filteredApps = pinnedApps.filter(a => a.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div
      ref={menuRef}
      className="anim-start-menu"
      style={{
        position: 'fixed',
        bottom: 'calc(var(--taskbar-height) + 12px)',
        left: 0,
        right: 0,
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '600px',
        maxWidth: 'calc(100vw - 24px)',
        height: '660px',
        maxHeight: 'calc(100vh - var(--taskbar-height) - 32px)',
        backgroundColor: 'rgba(28, 28, 36, 0.94)',
        backdropFilter: 'blur(35px) saturate(160%)',
        WebkitBackdropFilter: 'blur(35px) saturate(160%)',
        borderRadius: '12px',
        border: '1px solid rgba(255, 255, 255, 0.12)',
        boxShadow: '0 24px 60px rgba(0, 0, 0, 0.7), 0 4px 20px rgba(0, 0, 0, 0.4)',
        zIndex: 10001,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden'
      }}
      onClick={(e) => e.stopPropagation()}
    >
      <div style={{ padding: '24px 28px 16px 28px' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.06)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          borderRadius: '24px',
          padding: '8px 16px',
          gap: '10px'
        }}>
          <Search size={16} color="#9ca3af" />
          <input
            type="text"
            className="selectable"
            placeholder="Search for apps, settings, and documents"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            autoFocus
            style={{
              flex: 1,
              background: 'transparent',
              border: 'none',
              outline: 'none',
              color: '#ffffff',
              fontSize: '13px'
            }}
          />
          <WinIcon name="mobile-device" size={16} />
        </div>
      </div>

      <div style={{ flex: 1, padding: '0 28px', overflowY: 'auto' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '14px'
        }}>
          <span style={{ fontSize: '13px', fontWeight: 600, color: '#ffffff' }}>Pinned</span>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(6, 1fr)',
          gap: '8px 4px',
          marginBottom: '26px'
        }}>
          {filteredApps.map((app) => (
            <div
              key={app.id}
              onClick={() => {
                playClickSound();
                onLaunchApp(app.id);
                onClose();
              }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                padding: '10px 4px',
                borderRadius: '6px',
                cursor: 'pointer',
                transition: 'background-color 0.12s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              <div style={{ marginBottom: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <WinIcon name={app.icon} size={38} />
              </div>
              <span style={{
                fontSize: '11px',
                color: '#f1f5f9',
                lineHeight: 1.2,
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }}>
                {app.name}
              </span>
            </div>
          ))}
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '14px'
        }}>
          <span style={{ fontSize: '13px', fontWeight: 600, color: '#ffffff' }}>All</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '11.5px', color: '#9ca3af', cursor: 'pointer' }}>
            <span>View: Category</span>
            <ChevronDown size={13} />
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '14px',
          marginBottom: '20px'
        }}>
          {categoryGroups.map((group, idx) => (
            <div
              key={idx}
              onClick={() => {
                playClickSound();
                onLaunchApp(group.appToLaunch);
                onClose();
              }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                cursor: 'pointer'
              }}
            >
              <div
                style={{
                  width: '100%',
                  aspectRatio: '1.2',
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.07)',
                  borderRadius: '10px',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gridTemplateRows: 'repeat(2, 1fr)',
                  padding: '12px',
                  placeItems: 'center',
                  gap: '8px',
                  transition: 'background-color 0.15s, transform 0.1s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.09)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.04)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {group.icons.map((iconName, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <WinIcon name={iconName} size={22} />
                  </div>
                ))}
              </div>
              <span style={{
                marginTop: '8px',
                fontSize: '11px',
                color: '#e2e8f0',
                textAlign: 'center',
                fontWeight: 500
              }}>
                {group.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div style={{
        backgroundColor: 'rgba(22, 22, 28, 0.95)',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '12px 28px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative'
      }}>
        <div
          onClick={() => {
            playClickSound();
            onLaunchApp('recruiter');
            onClose();
          }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            cursor: 'pointer',
            padding: '4px 8px',
            borderRadius: '6px'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          <div style={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            backgroundColor: '#475569',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <User size={18} />
          </div>
          <span style={{ fontSize: '13px', color: '#f1f5f9', fontWeight: 500, fontFamily: 'Segoe UI, sans-serif' }}>
            agung krisna
          </span>
        </div>

        <button
          onClick={() => {
            playClickSound();
            setShowPowerMenu(!showPowerMenu);
          }}
          style={{
            width: '36px',
            height: '36px',
            borderRadius: '6px',
            backgroundColor: 'transparent',
            border: 'none',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          title="Power Options"
        >
          <WinIcon name="power" size={18} />
        </button>

        {showPowerMenu && (
          <div
            className="anim-flyout"
            style={{
              position: 'absolute',
              bottom: '56px',
              right: '24px',
              backgroundColor: '#282828',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: '8px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
              padding: '6px',
              zIndex: 10002,
              minWidth: '150px'
            }}
          >
            <button
              onClick={() => {
                setShowPowerMenu(false);
                onClose();
                if (onSleep) onSleep();
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '8px 12px',
                fontSize: '12.5px',
                color: '#ffffff',
                cursor: 'pointer',
                borderRadius: '5px',
                background: 'transparent',
                border: 'none',
                width: '100%',
                textAlign: 'left',
                transition: 'background-color 0.1s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              <Moon size={15} color="#94a3b8" />
              <span>Sleep</span>
            </button>
            <button
              onClick={() => {
                setShowPowerMenu(false);
                onClose();
                if (onShutDown) onShutDown();
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '8px 12px',
                fontSize: '12.5px',
                color: '#ffffff',
                cursor: 'pointer',
                borderRadius: '5px',
                background: 'transparent',
                border: 'none',
                width: '100%',
                textAlign: 'left',
                transition: 'background-color 0.1s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              <Power size={15} color="#ef4444" />
              <span>Shut down</span>
            </button>
            <button
              onClick={() => {
                setShowPowerMenu(false);
                onClose();
                if (onRestart) onRestart();
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '8px 12px',
                fontSize: '12.5px',
                color: '#ffffff',
                cursor: 'pointer',
                borderRadius: '5px',
                background: 'transparent',
                border: 'none',
                width: '100%',
                textAlign: 'left',
                transition: 'background-color 0.1s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              <RotateCcw size={15} color="#38bdf8" />
              <span>Restart</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
