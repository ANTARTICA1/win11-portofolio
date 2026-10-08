import React, { useRef } from 'react';
import { RotateCcw } from 'lucide-react';
import { WinIcon } from '../Common/WinIcon';

export const ChromeDinoGame = ({ isEmbedded = false }) => {
  const iframeRef = useRef(null);

  const handleRestart = () => {
    if (iframeRef.current) {
      iframeRef.current.src = '/dino/index.html?v=' + Date.now();
    }
  };

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: '#f7f7f7', color: '#333' }}>
      {!isEmbedded && (
        <div style={{
          height: '38px',
          backgroundColor: '#f1f3f4',
          borderBottom: '1px solid #e0e0e0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 14px',
          flexShrink: 0
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12.5px', color: '#5f6368' }}>
            <WinIcon name="dino" size={15} />
            <span style={{ fontWeight: 600, color: '#202124' }}>chrome://dino</span>
            <span style={{ fontSize: '11px', color: '#80868b' }}>- Chromium T-Rex Runner (Official Engine)</span>
          </div>
          <button
            onClick={handleRestart}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: '#ffffff',
              border: '1px solid #dadce0',
              borderRadius: '4px',
              padding: '4px 10px',
              fontSize: '12px',
              color: '#3c4043',
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
        src="/dino/index.html?v=3"
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
