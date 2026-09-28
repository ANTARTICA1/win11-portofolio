import React, { useState, useEffect, useRef } from 'react';
import { 
  ShieldCheck, Bluetooth, RefreshCw, Volume2, Zap, 
  CheckCircle2, Box, Cpu, Headphones, ExternalLink, Sparkles
} from 'lucide-react';
import { WinIcon } from '../Common/WinIcon';
import { playClickSound } from '../../utils/sound';

export const SystemTrayFlyout = ({ 
  isOpen, 
  onClose, 
  onLaunchApp, 
  onOpenSettings,
  onOpenQuickSettings,
  accentColor 
}) => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const flyoutRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (isOpen && flyoutRef.current && !flyoutRef.current.contains(e.target)) {
        if (!e.target.closest('.tray-btn')) {
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

  const trayIcons = [
    {
      id: 'security',
      name: 'Windows Security',
      status: 'No actions needed - Protected',
      iconType: 'lucide',
      lucideIcon: ShieldCheck,
      color: '#22c55e',
      action: () => {
        if (onOpenSettings) onOpenSettings();
      }
    },
    {
      id: 'onedrive',
      name: 'Microsoft OneDrive',
      status: 'Up to date - Cloud Synced',
      iconType: 'win',
      winIcon: 'onedrive',
      action: () => {
        if (onLaunchApp) onLaunchApp('explorer', { path: 'OneDrive' });
      }
    },
    {
      id: 'bluetooth',
      name: 'Bluetooth Devices',
      status: 'Oppo A53 (Connected via Lintas)',
      iconType: 'lucide',
      lucideIcon: Bluetooth,
      color: '#38bdf8',
      action: () => {
        if (onLaunchApp) onLaunchApp('chrome', { projectId: 'lintas' });
      }
    },
    {
      id: 'antigravity',
      name: 'Antigravity AI Agent',
      status: 'Agent Companion: Standing by',
      iconType: 'win',
      winIcon: 'antigravity',
      action: () => {
        if (onLaunchApp) onLaunchApp('antigravity');
      }
    },
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      status: 'Online — Chat with Gungkrisna',
      iconType: 'win',
      winIcon: 'whatsapp',
      action: () => {
        if (onLaunchApp) onLaunchApp('whatsapp');
      }
    },
    {
      id: 'audio',
      name: 'Realtek HD Audio',
      status: 'Stereo Output (100%)',
      iconType: 'lucide',
      lucideIcon: Headphones,
      color: '#a855f7',
      action: () => {
        if (onOpenQuickSettings) onOpenQuickSettings();
      }
    },
    {
      id: 'update',
      name: 'Windows Update',
      status: "You're up to date",
      iconType: 'lucide',
      lucideIcon: CheckCircle2,
      color: '#38bdf8',
      action: () => {
        if (onOpenSettings) onOpenSettings();
      }
    },
    {
      id: 'performance',
      name: 'Power & Performance',
      status: 'Mode: Best Performance (100%)',
      iconType: 'lucide',
      lucideIcon: Zap,
      color: '#f59e0b',
      action: () => {
        if (onOpenSettings) onOpenSettings();
      }
    },
    {
      id: 'docker',
      name: 'Docker Desktop Engine',
      status: 'Engine Running (v4.32)',
      iconType: 'lucide',
      lucideIcon: Box,
      color: '#0ea5e9',
      action: () => {
        if (onLaunchApp) onLaunchApp('terminal');
      }
    }
  ];

  const handleIconClick = (item) => {
    playClickSound();
    if (item.action) {
      item.action();
    }
    onClose();
  };

  return (
    <div
      ref={flyoutRef}
      className="anim-flyout"
      style={{
        position: 'fixed',
        bottom: 'calc(var(--taskbar-height) + 10px)',
        right: '128px',
        width: '210px',
        backgroundColor: 'rgba(32, 32, 32, 0.94)',
        backdropFilter: 'blur(30px) saturate(150%)',
        WebkitBackdropFilter: 'blur(30px) saturate(150%)',
        borderRadius: '10px',
        border: '1px solid rgba(255, 255, 255, 0.12)',
        boxShadow: '0 12px 32px rgba(0, 0, 0, 0.55)',
        padding: '10px',
        zIndex: 10002,
        color: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px'
      }}
      onClick={(e) => e.stopPropagation()}
    >
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '4px'
      }}>
        {trayIcons.map((item) => {
          const LucideComp = item.lucideIcon;
          const isHovered = hoveredItem?.id === item.id;
          return (
            <button
              key={item.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: '48px',
                borderRadius: '6px',
                border: 'none',
                backgroundColor: isHovered ? 'rgba(255, 255, 255, 0.12)' : 'transparent',
                cursor: 'pointer',
                transition: 'background-color 0.12s ease',
                position: 'relative',
                padding: '4px'
              }}
              onMouseEnter={() => setHoveredItem(item)}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={() => handleIconClick(item)}
              title={`${item.name} — ${item.status}`}
            >
              {item.iconType === 'win' ? (
                <WinIcon name={item.winIcon} size={22} />
              ) : (
                <LucideComp size={21} color={item.color || '#e2e8f0'} />
              )}
            </button>
          );
        })}
      </div>

      <div style={{
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        paddingTop: '6px',
        minHeight: '28px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontSize: '11px',
        color: '#94a3b8',
        paddingLeft: '4px',
        paddingRight: '4px'
      }}>
        {hoveredItem ? (
          <div style={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', width: '100%' }}>
            <span style={{ color: '#ffffff', fontWeight: 600 }}>{hoveredItem.name}</span>
            <div style={{ fontSize: '10px', color: '#94a3b8', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {hoveredItem.status}
            </div>
          </div>
        ) : (
          <span style={{ fontSize: '10.5px', color: '#64748b' }}>
            Windows System Tray
          </span>
        )}
      </div>
    </div>
  );
};
