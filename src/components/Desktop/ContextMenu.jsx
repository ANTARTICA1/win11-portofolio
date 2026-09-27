import React from 'react';
import { 
  RefreshCw, LayoutGrid, ArrowUpDown, Plus, 
  Monitor, Palette, Terminal, FolderPlus, FilePlus 
} from 'lucide-react';
import { playClickSound } from '../../utils/sound';

export const ContextMenu = ({
  x,
  y,
  onClose,
  onRefresh,
  onOpenSettings,
  onOpenTerminal,
  onNewTextFile,
  accentColor
}) => {
  const safeX = Math.min(x, window.innerWidth - 230);
  const safeY = Math.min(y, window.innerHeight - 280);

  return (
    <div
      className="win-context-menu anim-flyout"
      style={{ top: `${safeY}px`, left: `${safeX}px` }}
      onClick={(e) => e.stopPropagation()}
    >
      <div 
        className="context-menu-item"
        onClick={() => { playClickSound(); onClose(); }}
      >
        <div className="context-menu-item-left">
          <LayoutGrid size={15} color="#9ca3af" />
          <span>View</span>
        </div>
        <span style={{ color: '#6b7280' }}>&gt;</span>
      </div>

      <div 
        className="context-menu-item"
        onClick={() => { playClickSound(); onClose(); }}
      >
        <div className="context-menu-item-left">
          <ArrowUpDown size={15} color="#9ca3af" />
          <span>Sort by</span>
        </div>
        <span style={{ color: '#6b7280' }}>&gt;</span>
      </div>

      <div 
        className="context-menu-item"
        onClick={() => {
          playClickSound();
          onRefresh();
          onClose();
        }}
      >
        <div className="context-menu-item-left">
          <RefreshCw size={15} color="#9ca3af" />
          <span>Refresh</span>
        </div>
      </div>

      <div className="context-menu-divider" />

      <div 
        className="context-menu-item"
        onClick={() => {
          playClickSound();
          if (onNewTextFile) onNewTextFile();
          onClose();
        }}
      >
        <div className="context-menu-item-left">
          <FilePlus size={15} color="#38bdf8" />
          <span>New Text Document</span>
        </div>
      </div>

      <div className="context-menu-divider" />

      <div 
        className="context-menu-item"
        onClick={() => {
          playClickSound();
          onOpenSettings('system');
          onClose();
        }}
      >
        <div className="context-menu-item-left">
          <Monitor size={15} color="#9ca3af" />
          <span>Display settings</span>
        </div>
      </div>

      <div 
        className="context-menu-item"
        onClick={() => {
          playClickSound();
          onOpenSettings('personalization');
          onClose();
        }}
      >
        <div className="context-menu-item-left">
          <Palette size={15} color="#c084fc" />
          <span>Personalize</span>
        </div>
      </div>

      <div className="context-menu-divider" />

      <div 
        className="context-menu-item"
        onClick={() => {
          playClickSound();
          onOpenTerminal();
          onClose();
        }}
      >
        <div className="context-menu-item-left">
          <Terminal size={15} color="#60a5fa" />
          <span>Open in Terminal</span>
        </div>
      </div>
    </div>
  );
};
