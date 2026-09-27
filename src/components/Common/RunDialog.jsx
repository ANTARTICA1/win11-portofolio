import React, { useState } from 'react';
import { X, Play } from 'lucide-react';
import { WinIcon } from './WinIcon';
import { playClickSound } from '../../utils/sound';

export const RunDialog = ({ isOpen, onClose, onRunCommand }) => {
  const [cmd, setCmd] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!cmd.trim()) return;
    playClickSound();
    onRunCommand(cmd.trim().toLowerCase());
    setCmd('');
    onClose();
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 'calc(var(--taskbar-height) + 20px)',
        left: '20px',
        width: '380px',
        maxWidth: '92vw',
        backgroundColor: '#282828',
        borderRadius: '8px',
        border: '1px solid rgba(255, 255, 255, 0.15)',
        boxShadow: '0 12px 30px rgba(0, 0, 0, 0.7)',
        zIndex: 15000,
        fontFamily: 'Segoe UI, sans-serif',
        overflow: 'hidden'
      }}
      onClick={(e) => e.stopPropagation()}
    >
      <div style={{
        height: '32px',
        backgroundColor: '#202020',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 10px',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        fontSize: '12px',
        color: '#ffffff'
      }}>
        <span>Run</span>
        <button
          onClick={onClose}
          style={{ background: 'none', border: 'none', color: '#9ca3af', cursor: 'pointer' }}
        >
          <X size={14} />
        </button>
      </div>

      <form onSubmit={handleSubmit} style={{ padding: '16px' }}>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '14px' }}>
          <WinIcon name="folder" size={32} />
          <p style={{ fontSize: '12px', color: '#cbd5e1', lineHeight: '1.4' }}>
            Type the name of a program, folder, or document to open:
            <br />
            <span style={{ color: '#9ca3af', fontSize: '11px' }}>
              (e.g., <strong>resume</strong>, <strong>explorer</strong>, <strong>notepad</strong>, <strong>cmd</strong>, <strong>calc</strong>)
            </span>
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
          <span style={{ fontSize: '12px', color: '#ffffff' }}>Open:</span>
          <input
            type="text"
            className="selectable"
            value={cmd}
            onChange={(e) => setCmd(e.target.value)}
            placeholder="Type command here..."
            autoFocus
            style={{
              flex: 1,
              backgroundColor: '#1c1c1c',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '4px',
              padding: '5px 8px',
              color: '#ffffff',
              fontSize: '12px',
              outline: 'none'
            }}
          />
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
          <button
            type="submit"
            style={{
              padding: '6px 16px',
              backgroundColor: '#0078d4',
              color: '#ffffff',
              border: 'none',
              borderRadius: '4px',
              fontSize: '12px',
              cursor: 'pointer'
            }}
          >
            OK
          </button>
          <button
            type="button"
            onClick={onClose}
            style={{
              padding: '6px 14px',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              color: '#ffffff',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '4px',
              fontSize: '12px',
              cursor: 'pointer'
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};
