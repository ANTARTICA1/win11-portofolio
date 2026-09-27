import React, { useState } from 'react';
import { 
  Search, Power, User, ArrowRight, Sparkles, FileText, 
  ExternalLink, Download, Clock 
} from 'lucide-react';
import { WinIcon } from '../Common/WinIcon';
import { INITIAL_USER } from '../../data/fileSystem';
import { playClickSound } from '../../utils/sound';

export const StartMenu = ({ isOpen, onClose, onLaunchApp, onOpenFile, onRestart }) => {
  const [search, setSearch] = useState('');
  const [showPowerMenu, setShowPowerMenu] = useState(false);

  if (!isOpen) return null;

  const pinnedApps = [
    { id: 'recruiter', name: 'Recruiter Hub', icon: 'briefcase', badge: 'Fast Track' },
    { id: 'explorer', name: 'File Explorer', icon: 'explorer' },
    { id: 'browser', name: 'Edge Showcase', icon: 'edge' },
    { id: 'terminal', name: 'PowerShell', icon: 'terminal' },
    { id: 'notepad', name: 'Notepad', icon: 'notepad' },
    { id: 'photos', name: 'Certificates', icon: 'image' },
    { id: 'settings', name: 'Settings', icon: 'settings' },
    { id: 'calculator', name: 'Calculator', icon: 'calc' }
  ];

  const recommendedFiles = [
    { name: 'README_RECRUITER.txt', subtitle: 'Catatan penting untuk Rekruter', icon: 'notepad', type: 'file' },
    { name: 'Curriculum_Vitae.pdf', subtitle: 'Download CV Terbaru', icon: 'pdf', type: 'file' },
    { name: 'dompetq_preview.jpg', subtitle: 'Preview Proyek Fintech', icon: 'image', type: 'file' },
    { name: 'temuin_preview.jpg', subtitle: 'Preview Proyek Crowdsourcing', icon: 'image', type: 'file' }
  ];

  const filteredApps = pinnedApps.filter(a => a.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div
      className="anim-flyout"
      style={{
        position: 'fixed',
        bottom: 'calc(var(--taskbar-height) + 12px)',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '540px',
        maxWidth: '94vw',
        height: '600px',
        maxHeight: '82vh',
        backgroundColor: 'rgba(32, 32, 32, 0.94)',
        backdropFilter: 'blur(30px) saturate(150%)',
        WebkitBackdropFilter: 'blur(30px) saturate(150%)',
        borderRadius: '12px',
        border: '1px solid rgba(255, 255, 255, 0.12)',
        boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), 0 4px 16px rgba(0, 0, 0, 0.4)',
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
          backgroundColor: 'rgba(255, 255, 255, 0.07)',
          border: '1px solid rgba(255, 255, 255, 0.14)',
          borderRadius: '24px',
          padding: '8px 16px',
          gap: '10px'
        }}>
          <Search size={16} color="#9ca3af" />
          <input
            type="text"
            className="selectable"
            placeholder="Type here to search (e.g. dompetq, resume, skills)..."
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
        </div>
      </div>

      <div style={{ flex: 1, padding: '0 28px', overflowY: 'auto' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '16px'
        }}>
          <span style={{ fontSize: '13px', fontWeight: 600, color: '#ffffff' }}>Pinned</span>
          <span style={{ fontSize: '11px', color: '#9ca3af', cursor: 'pointer' }}>All apps &gt;</span>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '12px',
          marginBottom: '24px'
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
                padding: '10px 6px',
                borderRadius: '6px',
                cursor: 'pointer',
                transition: 'background-color 0.12s',
                position: 'relative'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              {app.badge && (
                <span style={{
                  position: 'absolute',
                  top: '2px',
                  right: '2px',
                  backgroundColor: '#8b5cf6',
                  color: '#fff',
                  fontSize: '9px',
                  fontWeight: 700,
                  padding: '1px 5px',
                  borderRadius: '6px'
                }}>
                  {app.badge}
                </span>
              )}
              <div style={{ marginBottom: '6px' }}>
                <WinIcon name={app.icon} size={36} />
              </div>
              <span style={{ fontSize: '12px', color: '#f1f5f9' }}>{app.name}</span>
            </div>
          ))}
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '12px'
        }}>
          <span style={{ fontSize: '13px', fontWeight: 600, color: '#ffffff' }}>Recommended</span>
          <span style={{ fontSize: '11px', color: '#9ca3af' }}>More &gt;</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
          {recommendedFiles.map((file, idx) => (
            <div
              key={idx}
              onClick={() => {
                playClickSound();
                if (file.name.endsWith('.txt')) {
                  onLaunchApp('notepad');
                } else if (file.name.endsWith('.pdf')) {
                  onLaunchApp('recruiter');
                } else {
                  onLaunchApp('photos');
                }
                onClose();
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '8px 12px',
                borderRadius: '6px',
                cursor: 'pointer',
                transition: 'background-color 0.12s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              <WinIcon name={file.icon} size={28} />
              <div style={{ overflow: 'hidden' }}>
                <div style={{ fontSize: '12px', color: '#ffffff', textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}>
                  {file.name}
                </div>
                <div style={{ fontSize: '10.5px', color: '#9ca3af' }}>{file.subtitle}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{
        backgroundColor: 'rgba(25, 25, 25, 0.95)',
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
            gap: '10px',
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
            backgroundColor: '#8b5cf6',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 700,
            fontSize: '13px'
          }}>
            AK
          </div>
          <div>
            <div style={{ fontSize: '12.5px', fontWeight: 600, color: '#ffffff' }}>{INITIAL_USER.name}</div>
            <div style={{ fontSize: '10.5px', color: '#9ca3af' }}>{INITIAL_USER.role}</div>
          </div>
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
          <Power size={18} />
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
            <div
              onClick={() => {
                setShowPowerMenu(false);
                onRestart();
              }}
              style={{
                padding: '8px 12px',
                fontSize: '12px',
                color: '#ffffff',
                cursor: 'pointer',
                borderRadius: '4px'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              🔄 Restart OS
            </div>
            <div
              onClick={() => {
                setShowPowerMenu(false);
                alert('Shutting down session. Terima kasih telah mengunjungi portfolio Agung Krisna!');
              }}
              style={{
                padding: '8px 12px',
                fontSize: '12px',
                color: '#ef4444',
                cursor: 'pointer',
                borderRadius: '4px'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              🛑 Shut Down
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
