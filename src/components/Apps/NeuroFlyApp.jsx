import React from 'react';
import { NeuroFlyGame } from './NeuroFlyGame';

export const NeuroFlyApp = ({ onLaunchApp }) => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: '#06080d' }}>
      <NeuroFlyGame
        isEmbedded={false}
        onOpenExternal={null}
      />
    </div>
  );
};
