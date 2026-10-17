import React from 'react';
import './PhoneMockup.css';

export const PhoneMockup = ({
  src,
  alt = 'Mobile App Screen',
  projectName = '',
  className = '',
  style = {},
  onClick
}) => {
  return (
    <div
      className={`phone-mockup-wrapper ${projectName ? `project-${projectName}` : ''} ${className}`}
      style={style}
      onClick={onClick}
    >
      {/* Ambient project backlight glow */}
      <div className={`phone-ambient-glow glow-${projectName || 'default'}`} />

      {/* Realistic Smartphone Chassis */}
      <div className="phone-mockup-device">
        {/* Hardware side buttons */}
        <div className="phone-btn-vol-up" title="Volume Up" />
        <div className="phone-btn-vol-down" title="Volume Down" />
        <div className="phone-btn-power" title="Power" />

        {/* Outer Titanium / Obsidian Rim */}
        <div className="phone-bezel-rim">
          {/* Top Speaker Earpiece Slit */}
          <div className="phone-speaker-slit" />

          {/* Centered Android Hole-Punch Front Camera */}
          <div className="phone-punch-cam">
            <div className="phone-punch-lens" />
          </div>

          {/* Screen Display Area */}
          <div className="phone-screen-display">
            <img
              src={src}
              alt={alt}
              className="phone-screen-image"
              loading="lazy"
            />
            {/* Subtle Glass Surface Glare Reflection */}
            <div className="phone-glass-glare" />
          </div>

          {/* Bottom Gestural Pill Indicator */}
          <div className="phone-bottom-nav-bar" />
        </div>
      </div>
    </div>
  );
};
