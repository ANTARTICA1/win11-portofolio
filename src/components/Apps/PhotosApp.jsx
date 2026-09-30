import React, { useState } from 'react';
import { ZoomIn, ZoomOut, RotateCw, Download, ChevronLeft, ChevronRight, Info } from 'lucide-react';
import { playClickSound } from '../../utils/sound';

export const PhotosApp = ({ 
  initialImage = '/certificates/cert_fullstack.jpg',
  initialTitle = 'Certificate: Mobile & Full Stack Development'
}) => {
  const images = [
    { url: '/certificates/cert_fullstack.jpg', title: 'Certificate: Mobile & Full Stack Development', date: 'October 26, 2024', size: '612 KB' },
    { url: '/projects/theotown.jpg', title: 'ITB STIKOM Bali — TheoTown Custom Building Plugin Gameplay', date: 'November 2024', size: '620 KB' },
    { url: '/projects/lintas.jpg', title: 'Lintas — Cross-Device Productivity Ecosystem (Android & Windows)', date: 'November 2024', size: '610 KB' },
    { url: '/projects/nenacare.jpg', title: 'NenaCare — AI-Powered K3 Incident Reporting & Monitoring System', date: 'October 2024', size: '580 KB' },
    { url: '/projects/tatagih.jpg', title: 'Tatagih — Smart Subscription Manager Web App (Laravel 13 & AI)', date: 'November 2024', size: '540 KB' },
    { url: '/projects/dompetq.jpg', title: 'DompetQ Mobile App Dashboard', date: 'September 2024', size: '482 KB' },
    { url: '/projects/temuin.jpg', title: 'Temuin Crowdsourcing Mobile Interface', date: 'August 2024', size: '520 KB' },
    { url: '/projects/makalah.jpg', title: 'Makalah Generator Web Dashboard', date: 'July 2024', size: '410 KB' }
  ];

  const initialIndex = images.findIndex(img => img.url === initialImage);
  const [currentIndex, setCurrentIndex] = useState(initialIndex >= 0 ? initialIndex : 0);
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);

  const currentImg = images[currentIndex] || images[0];

  const handlePrev = () => {
    playClickSound();
    setCurrentIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));
    setZoom(1);
    setRotation(0);
  };

  const handleNext = () => {
    playClickSound();
    setCurrentIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
    setZoom(1);
    setRotation(0);
  };

  const handleZoomIn = () => {
    playClickSound();
    setZoom(prev => Math.min(prev + 0.25, 3));
  };

  const handleZoomOut = () => {
    playClickSound();
    setZoom(prev => Math.max(prev - 0.25, 0.5));
  };

  const handleRotate = () => {
    playClickSound();
    setRotation(prev => (prev + 90) % 360);
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      width: '100%',
      backgroundColor: '#181818',
      color: '#ffffff',
      overflow: 'hidden'
    }}>
      <div style={{
        height: '42px',
        backgroundColor: '#202020',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '12px',
        padding: '0 16px'
      }}>
        <button
          onClick={handleZoomOut}
          style={{ background: 'none', border: 'none', color: '#cbd5e1', cursor: 'pointer', padding: '6px' }}
          title="Zoom Out"
        >
          <ZoomOut size={16} />
        </button>

        <span style={{ fontSize: '12px', color: '#94a3b8', minWidth: '45px', textAlign: 'center' }}>
          {Math.round(zoom * 100)}%
        </span>

        <button
          onClick={handleZoomIn}
          style={{ background: 'none', border: 'none', color: '#cbd5e1', cursor: 'pointer', padding: '6px' }}
          title="Zoom In"
        >
          <ZoomIn size={16} />
        </button>

        <div style={{ width: '1px', height: '18px', backgroundColor: 'rgba(255, 255, 255, 0.12)' }} />

        <button
          onClick={handleRotate}
          style={{ background: 'none', border: 'none', color: '#cbd5e1', cursor: 'pointer', padding: '6px' }}
          title="Rotate"
        >
          <RotateCw size={16} />
        </button>

        <a
          href={currentImg.url}
          download={currentImg.title}
          style={{ background: 'none', border: 'none', color: '#cbd5e1', cursor: 'pointer', padding: '6px', display: 'flex' }}
          title="Download Image"
        >
          <Download size={16} />
        </a>
      </div>

      <div style={{
        flex: 1,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        padding: '20px',
        backgroundColor: '#121212'
      }}>
        <button
          onClick={handlePrev}
          style={{
            position: 'absolute',
            left: '16px',
            zIndex: 10,
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
        >
          <ChevronLeft size={20} />
        </button>

        <button
          onClick={handleNext}
          style={{
            position: 'absolute',
            right: '16px',
            zIndex: 10,
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
        >
          <ChevronRight size={20} />
        </button>

        <div style={{
          transition: 'transform 0.15s ease-out',
          transform: `scale(${zoom}) rotate(${rotation}deg)`,
          maxWidth: '90%',
          maxHeight: '85%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 30px rgba(0, 0, 0, 0.8)'
        }}>
          <img
            src={currentImg.url}
            alt={currentImg.title}
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              objectFit: 'contain',
              borderRadius: '6px'
            }}
          />
        </div>
      </div>

      <div style={{
        height: '32px',
        backgroundColor: '#1c1c1c',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 16px',
        fontSize: '11.5px',
        color: '#9ca3af'
      }}>
        <span>{currentImg.title}</span>
        <div style={{ display: 'flex', gap: '14px' }}>
          <span>{currentIndex + 1} of {images.length}</span>
          <span>{currentImg.size}</span>
        </div>
      </div>
    </div>
  );
};
