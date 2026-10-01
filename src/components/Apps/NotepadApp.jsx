import React, { useState } from 'react';
import { Download, FileText, Check, Plus, X } from 'lucide-react';
import { WinIcon } from '../Common/WinIcon';
import { playClickSound } from '../../utils/sound';
import { useWindow } from '../Windows/WindowContext';

export const NotepadApp = ({ initialContent = '', fileName = 'Untitled.txt' }) => {
  const winCtx = useWindow();
  const [content, setContent] = useState(initialContent);
  const [savedNotice, setSavedNotice] = useState(false);

  const handleDownload = () => {
    playClickSound();
    const element = document.createElement('a');
    const file = new Blob([content], { type: 'text/plain;charset=utf-8' });
    element.href = URL.createObjectURL(file);
    element.download = fileName;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);

    setSavedNotice(true);
    setTimeout(() => setSavedNotice(false), 2000);
  };

  const lines = content.split('\n').length;
  const chars = content.length;

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      width: '100%',
      backgroundColor: '#202020',
      color: '#ffffff',
      fontFamily: 'Segoe UI, sans-serif'
    }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'stretch',
          backgroundColor: '#1f1f20',
          height: '40px',
          padding: '0 0 0 8px',
          position: 'relative',
          userSelect: 'none',
          cursor: 'default',
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
        }}
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
        <div style={{ display: 'flex', alignItems: 'flex-end', height: '100%', gap: '2px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: '#2b2b2b',
              color: '#ffffff',
              padding: '0 8px 0 12px',
              height: '34px',
              borderRadius: '8px 8px 0 0',
              fontSize: '12px',
              fontWeight: 500,
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderBottom: 'none',
              minWidth: '130px',
              maxWidth: '220px',
              justifyContent: 'space-between'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '7px', overflow: 'hidden' }}>
              <WinIcon name="notepad" size={15} />
              <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{fileName}</span>
            </div>
            <button
              type="button"
              title="Close Tab"
              style={{
                width: '18px',
                height: '18px',
                borderRadius: '4px',
                border: 'none',
                background: 'transparent',
                color: '#9ca3af',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              onPointerDown={(e) => e.stopPropagation()}
              onClick={(e) => {
                e.stopPropagation();
                if (winCtx?.onClose) winCtx.onClose();
              }}
            >
              <X size={12} />
            </button>
          </div>
          <button
            type="button"
            title="New Tab"
            style={{
              width: '28px',
              height: '28px',
              borderRadius: '4px',
              border: 'none',
              background: 'transparent',
              color: '#9ca3af',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '3px',
              marginLeft: '2px'
            }}
            onPointerDown={(e) => e.stopPropagation()}
            onClick={() => {
              playClickSound();
              setContent('');
            }}
          >
            <Plus size={15} />
          </button>
        </div>

        <div style={{ flex: 1, minWidth: '20px', height: '100%' }} />

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
            className="notepad-win-controls"
          />
        )}
      </div>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        padding: '4px 10px',
        backgroundColor: '#1f1f1f',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        fontSize: '12px',
        gap: '12px'
      }}>
        <span style={{ cursor: 'pointer', padding: '2px 6px', borderRadius: '4px' }}>File</span>
        <span style={{ cursor: 'pointer', padding: '2px 6px', borderRadius: '4px' }}>Edit</span>
        <span style={{ cursor: 'pointer', padding: '2px 6px', borderRadius: '4px' }}>View</span>
        <button
          onClick={handleDownload}
          style={{
            marginLeft: 'auto',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: '4px',
            color: '#fff',
            padding: '3px 10px',
            fontSize: '11.5px',
            cursor: 'pointer'
          }}
        >
          {savedNotice ? <Check size={13} color="#10b981" /> : <Download size={13} />}
          <span>{savedNotice ? 'Tersimpan!' : 'Download (.txt)'}</span>
        </button>
      </div>

      <textarea
        className="selectable"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        spellCheck={false}
        style={{
          flex: 1,
          width: '100%',
          backgroundColor: '#1b1b1b',
          color: '#e2e8f0',
          border: 'none',
          outline: 'none',
          padding: '16px',
          fontFamily: 'Cascadia Code, Consolas, Courier New, monospace',
          fontSize: '13.5px',
          lineHeight: '1.6',
          resize: 'none',
          overflowY: 'auto'
        }}
      />

      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '3px 14px',
        backgroundColor: '#1c1c1c',
        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
        fontSize: '11px',
        color: '#9ca3af'
      }}>
        <span>Ln {lines}, Col {chars}</span>
        <div style={{ display: 'flex', gap: '16px' }}>
          <span>100%</span>
          <span>Windows (CRLF)</span>
          <span>UTF-8</span>
        </div>
      </div>
    </div>
  );
};
