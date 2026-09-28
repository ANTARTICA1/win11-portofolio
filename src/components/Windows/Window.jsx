import React, { useRef, useState, useEffect } from 'react';
import { Minus, Square, Copy, X } from 'lucide-react';
import { WinIcon } from '../Common/WinIcon';
import { playClickSound, playWindowSound } from '../../utils/sound';
import { WindowContext } from './WindowContext';
import './Window.css';

export const WindowControls = ({
  onMinimize,
  onMaximize,
  onClose,
  isMaximized,
  isMobile,
  showSnapLayouts,
  setShowSnapLayouts,
  snapWindow,
  className = ''
}) => {
  return (
    <div className={`win-controls ${className}`}>
      <button
        type="button"
        className="win-ctrl-btn"
        title="Minimize"
        onPointerDown={(e) => e.stopPropagation()}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          playWindowSound('min');
          onMinimize();
        }}
      >
        <Minus size={14} />
      </button>

      {!isMobile && (
        <div
          style={{ position: 'relative', height: '100%' }}
          onMouseEnter={() => setShowSnapLayouts(true)}
          onMouseLeave={() => setShowSnapLayouts(false)}
        >
          <button
            type="button"
            className="win-ctrl-btn"
            title={isMaximized ? "Restore" : "Maximize"}
            onPointerDown={(e) => e.stopPropagation()}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              playClickSound();
              setShowSnapLayouts(false);
              onMaximize();
            }}
          >
            {isMaximized ? <Copy size={13} style={{ transform: 'rotate(180deg)' }} /> : <Square size={13} />}
          </button>

          {showSnapLayouts && (
            <div className="snap-layouts-flyout anim-flyout">
              <div className="snap-card" title="Snap Left 50%" onClick={() => snapWindow('left')}>
                <div className="snap-zone" />
                <div style={{ flex: 1 }} />
              </div>
              <div className="snap-card" title="Snap Right 50%" onClick={() => snapWindow('right')}>
                <div style={{ flex: 1 }} />
                <div className="snap-zone" />
              </div>
            </div>
          )}
        </div>
      )}

      <button
        type="button"
        className="win-ctrl-btn close-btn"
        title="Close"
        onPointerDown={(e) => e.stopPropagation()}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          playClickSound();
          onClose();
        }}
      >
        <X size={15} />
      </button>
    </div>
  );
};

export const Window = ({
  id,
  title,
  icon,
  isActive,
  isMinimized,
  isMaximized,
  zIndex,
  initialPosition = { x: 100, y: 50 },
  initialSize = { width: 840, height: 560 },
  onFocus,
  onMinimize,
  onMaximize,
  onClose,
  hideTitlebar = false,
  children
}) => {
  const [pos, setPos] = useState(initialPosition);
  const [size, setSize] = useState(initialSize);
  const [showSnapLayouts, setShowSnapLayouts] = useState(false);
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth <= 768 : false);

  const windowRef = useRef(null);
  const dragRef = useRef({ isDragging: false, startX: 0, startY: 0, initX: 0, initY: 0 });
  const resizeRef = useRef({ isResizing: false, direction: '', startX: 0, startY: 0, initW: 0, initH: 0, initX: 0, initY: 0 });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleTitlePointerDown = (e) => {
    if (isMobile || isMaximized) return;
    if (e.target.closest('.win-controls, button, .chrome-tab, .chrome-tab-close, .chrome-newtab-btn, .chrome-tab-search-btn, input, a')) return;

    onFocus();
    const target = e.currentTarget;
    try {
      target.setPointerCapture(e.pointerId);
    } catch {}

    dragRef.current = {
      isDragging: true,
      startX: e.clientX,
      startY: e.clientY,
      initX: pos.x,
      initY: pos.y
    };
  };

  const handleTitlePointerMove = (e) => {
    if (!dragRef.current.isDragging || isMobile) return;
    const dx = e.clientX - dragRef.current.startX;
    const dy = e.clientY - dragRef.current.startY;

    const newX = Math.max(-size.width + 120, Math.min(window.innerWidth - 80, dragRef.current.initX + dx));
    const newY = Math.max(0, Math.min(window.innerHeight - 100, dragRef.current.initY + dy));

    setPos({ x: newX, y: newY });
  };

  const handleTitlePointerUp = (e) => {
    if (dragRef.current.isDragging) {
      dragRef.current.isDragging = false;
      try {
        e.currentTarget.releasePointerCapture(e.pointerId);
      } catch {}
    }
  };

  const handleResizePointerDown = (e, direction) => {
    if (isMobile || isMaximized) return;
    e.stopPropagation();
    onFocus();
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {}

    resizeRef.current = {
      isResizing: true,
      direction,
      startX: e.clientX,
      startY: e.clientY,
      initW: size.width,
      initH: size.height,
      initX: pos.x,
      initY: pos.y
    };
  };

  const handleResizePointerMove = (e) => {
    if (!resizeRef.current.isResizing || isMobile) return;
    const { direction, startX, startY, initW, initH, initX, initY } = resizeRef.current;
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;

    let newW = initW;
    let newH = initH;
    let newX = initX;
    let newY = initY;

    if (direction.includes('e')) newW = Math.max(360, initW + dx);
    if (direction.includes('s')) newH = Math.max(260, initH + dy);
    if (direction.includes('w')) {
      const tentativeW = initW - dx;
      if (tentativeW >= 360) {
        newW = tentativeW;
        newX = initX + dx;
      }
    }
    if (direction.includes('n')) {
      const tentativeH = initH - dy;
      if (tentativeH >= 260) {
        newH = tentativeH;
        newY = initY + dy;
      }
    }

    setSize({ width: newW, height: newH });
    setPos({ x: newX, y: newY });
  };

  const handleResizePointerUp = (e) => {
    if (resizeRef.current.isResizing) {
      resizeRef.current.isResizing = false;
      try {
        e.currentTarget.releasePointerCapture(e.pointerId);
      } catch {}
    }
  };

  const snapWindow = (side) => {
    playClickSound();
    setShowSnapLayouts(false);
    if (side === 'left') {
      setPos({ x: 0, y: 0 });
      setSize({ width: window.innerWidth / 2, height: window.innerHeight - 48 });
    } else if (side === 'right') {
      setPos({ x: window.innerWidth / 2, y: 0 });
      setSize({ width: window.innerWidth / 2, height: window.innerHeight - 48 });
    }
  };

  const getStyle = () => {
    if (isMinimized) {
      return {
        display: 'none',
        zIndex: -1
      };
    }
    if (isMobile) {
      return {
        top: 0,
        left: 0,
        width: '100vw',
        height: 'calc(100vh - var(--taskbar-height))',
        zIndex
      };
    }
    if (isMaximized) {
      return {
        top: 0,
        left: 0,
        width: '100vw',
        height: 'calc(100vh - var(--taskbar-height))',
        zIndex
      };
    }
    return {
      top: `${pos.y}px`,
      left: `${pos.x}px`,
      width: `${size.width}px`,
      height: `${size.height}px`,
      zIndex
    };
  };

  const windowContextValue = {
    isMaximized,
    isMobile,
    onMinimize,
    onMaximize,
    onClose,
    handleTitlePointerDown,
    handleTitlePointerMove,
    handleTitlePointerUp,
    snapWindow,
    showSnapLayouts,
    setShowSnapLayouts,
    WindowControls
  };

  return (
    <div
      ref={windowRef}
      className={`win-window anim-window ${isActive ? 'is-active' : ''} ${isMinimized ? 'is-minimized' : ''} ${isMaximized ? 'is-maximized' : ''}`}
      style={getStyle()}
      onPointerDown={() => {
        if (!isActive) onFocus();
      }}
    >
      {!hideTitlebar && (
        <div
          className="win-titlebar"
          onPointerDown={handleTitlePointerDown}
          onPointerMove={handleTitlePointerMove}
          onPointerUp={handleTitlePointerUp}
          onDoubleClick={() => {
            if (!isMobile) {
              playClickSound();
              onMaximize();
            }
          }}
        >
          <div className="win-title-left">
            <div className="win-title-icon">
              <WinIcon name={icon} size={18} />
            </div>
            <span className="win-title-text">{title}</span>
          </div>

          <WindowControls
            onMinimize={onMinimize}
            onMaximize={onMaximize}
            onClose={onClose}
            isMaximized={isMaximized}
            isMobile={isMobile}
            showSnapLayouts={showSnapLayouts}
            setShowSnapLayouts={setShowSnapLayouts}
            snapWindow={snapWindow}
          />
        </div>
      )}

      <div className="win-body">
        <WindowContext.Provider value={windowContextValue}>
          {children}
        </WindowContext.Provider>
      </div>

      {!isMaximized && !isMobile && (
        <>
          {['n', 's', 'w', 'e', 'nw', 'ne', 'sw', 'se'].map((dir) => (
            <div
              key={dir}
              className={`win-resize-handle resize-${dir}`}
              onPointerDown={(e) => handleResizePointerDown(e, dir)}
              onPointerMove={handleResizePointerMove}
              onPointerUp={handleResizePointerUp}
            />
          ))}
        </>
      )}
    </div>
  );
};
