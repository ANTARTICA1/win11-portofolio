import React, { useRef } from 'react';
import { RotateCcw } from 'lucide-react';
import { WinIcon } from '../Common/WinIcon';

export const ChromeDinoGame = ({ isEmbedded = false }) => {
  const iframeRef = useRef(null);

  const handleRestart = () => {
    if (iframeRef.current) {
      iframeRef.current.src = '/dino/index.html';
    }
  };

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: '#f7f7f7', color: '#333' }}>
      {!isEmbedded && (
        <div style={{
          height: '40px',
          backgroundColor: '#ebebeb',
          borderBottom: '1px solid #d4d4d4',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 14px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#555' }}>
            <WinIcon name="dino" size={16} />
            <span style={{ fontWeight: 600, color: '#222' }}>chrome://dino</span>
            <span style={{ fontSize: '11px', color: '#888' }}>— Chromium T-Rex Runner (Official Engine)</span>
          </div>
          <button
            onClick={handleRestart}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: '#ffffff',
              border: '1px solid #d4d4d4',
              borderRadius: '4px',
              padding: '4px 10px',
              fontSize: '12px',
              color: '#333',
              cursor: 'pointer'
            }}
            title="Muat Ulang Game"
          >
            <RotateCcw size={13} />
            <span>Restart</span>
          </button>
        </div>
      )}
      <iframe
        ref={iframeRef}
        src="/dino/index.html"
        title="chrome://dino"
        style={{
          flex: 1,
          width: '100%',
          border: 'none',
          backgroundColor: '#f7f7f7'
        }}
      />
    </div>
  );
};

export default ChromeDinoGame;
