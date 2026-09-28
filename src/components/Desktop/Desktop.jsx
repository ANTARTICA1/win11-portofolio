import React, { useState, useRef } from 'react';
import { Sparkles, X, Send } from 'lucide-react';
import { WinIcon } from '../Common/WinIcon';
import { DESKTOP_ITEMS } from '../../data/fileSystem';
import { ContextMenu } from './ContextMenu';
import { playClickSound } from '../../utils/sound';
import './Desktop.css';

export const Desktop = ({
  wallpaper,
  onLaunchApp,
  onOpenFile,
  onOpenSettings,
  accentColor
}) => {
  const [selectedIconId, setSelectedIconId] = useState(null);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [contextMenu, setContextMenu] = useState(null);

  const [selectionBox, setSelectionBox] = useState(null);
  const selectionStartRef = useRef(null);

  const handleDesktopPointerDown = (e) => {
    if (e.target.closest('.win-context-menu') || e.target.closest('.desktop-icon-item')) {
      return;
    }

    setContextMenu(null);
    setSelectedIconId(null);

    selectionStartRef.current = { x: e.clientX, y: e.clientY };
    setSelectionBox({
      x: e.clientX,
      y: e.clientY,
      width: 0,
      height: 0
    });
  };

  const handleDesktopPointerMove = (e) => {
    if (!selectionStartRef.current) return;

    const startX = selectionStartRef.current.x;
    const startY = selectionStartRef.current.y;

    const currentX = e.clientX;
    const currentY = e.clientY;

    const x = Math.min(startX, currentX);
    const y = Math.min(startY, currentY);
    const width = Math.abs(currentX - startX);
    const height = Math.abs(currentY - startY);

    setSelectionBox({ x, y, width, height });
  };

  const handleDesktopPointerUp = () => {
    selectionStartRef.current = null;
    setSelectionBox(null);
  };

  const handleContextMenu = (e) => {
    e.preventDefault();
    playClickSound();
    setContextMenu({ x: e.clientX, y: e.clientY });
  };

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 200);
  };

  const handleIconClick = (e, item) => {
    e.stopPropagation();
    setSelectedIconId(item.id);
  };

  const handleIconDoubleClick = (e, item) => {
    e.stopPropagation();
    playClickSound();

    if (item.app === 'notepad' && item.content) {
      onOpenFile({
        name: item.name,
        type: 'file',
        extension: item.extension || 'txt',
        content: item.content
      });
    } else if (item.app === 'pdf_viewer') {
      onLaunchApp('recruiter');
    } else if (item.app === 'explorer') {
      onLaunchApp('explorer', item.path || 'Data (D:)');
    } else if (item.projectId) {
      onLaunchApp('chrome', { projectId: item.projectId });
    } else if (item.app === 'tatagih' || (item.name && item.name.toLowerCase().includes('tatagih'))) {
      onLaunchApp('chrome', { projectId: 'tatagih' });
    } else if (item.app === 'lintas' || (item.name && item.name.toLowerCase().includes('lintas'))) {
      onLaunchApp('chrome', { projectId: 'lintas' });
    } else if (item.app === 'neurofly' || (item.name && item.name.toLowerCase().includes('neurofly'))) {
      onLaunchApp('chrome', { projectId: 'neurofly' });
    } else if (item.app === 'recycle_bin' || item.id === 'recycle_bin') {
      onLaunchApp('explorer', { path: 'Recycle Bin' });
    } else {
      onLaunchApp(item.app || 'explorer');
    }
  };

  return (
    <div
      className={`desktop-area ${isRefreshing ? 'opacity-80' : ''}`}
      style={{
        backgroundImage: `url(${wallpaper})`,
        opacity: isRefreshing ? 0.75 : 1,
        transition: 'opacity 0.15s ease'
      }}
      onPointerDown={handleDesktopPointerDown}
      onPointerMove={handleDesktopPointerMove}
      onPointerUp={handleDesktopPointerUp}
      onContextMenu={handleContextMenu}
    >
      {selectionBox && selectionBox.width > 3 && selectionBox.height > 3 && (
        <div
          className="desktop-selection-box"
          style={{
            left: `${selectionBox.x}px`,
            top: `${selectionBox.y}px`,
            width: `${selectionBox.width}px`,
            height: `${selectionBox.height}px`
          }}
        />
      )}
      <div className="desktop-grid">
        {DESKTOP_ITEMS.map((item) => {
          const isSelected = selectedIconId === item.id;

          return (
            <div
              key={item.id}
              className={`desktop-icon-item ${isSelected ? 'is-selected' : ''}`}
              onClick={(e) => handleIconClick(e, item)}
              onDoubleClick={(e) => handleIconDoubleClick(e, item)}
              onTouchEnd={(e) => {
                const now = Date.now();
                const lastTouch = item._lastTouch || 0;
                if (now - lastTouch < 350) {
                  handleIconDoubleClick(e, item);
                } else {
                  handleIconClick(e, item);
                }
                item._lastTouch = now;
              }}
              title={item.name}
            >
              <div className="desktop-icon-img">
                <WinIcon name={item.icon} size={36} />
              </div>
              <span className="desktop-icon-label">{item.name}</span>
            </div>
          );
        })}
      </div>

      {contextMenu && (
        <ContextMenu
          x={contextMenu.x}
          y={contextMenu.y}
          onClose={() => setContextMenu(null)}
          onRefresh={handleRefresh}
          onOpenSettings={(tab) => onOpenSettings(tab)}
          onOpenTerminal={() => onLaunchApp('terminal')}
          onNewTextFile={() => {
            onOpenFile({
              name: 'New_Document.txt',
              type: 'file',
              extension: 'txt',
              content: 'Ketik catatan baru di sini...'
            });
          }}
          accentColor={accentColor}
        />
      )}
    </div>
  );
};
