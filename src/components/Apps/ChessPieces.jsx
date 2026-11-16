import React from 'react';

/**
 * Standard vector SVG Chess Pieces (Clean, high-definition, responsive)
 */
export const ChessPiece = ({ type, color, size = 48, className = '' }) => {
  const isWhite = color === 'w';
  const strokeColor = isWhite ? '#1e293b' : '#f8fafc';
  const fillColor = isWhite ? '#ffffff' : '#1e293b';
  const accentFill = isWhite ? '#f1f5f9' : '#0f172a';

  switch (type) {
    case 'p': // Pawn
      return (
        <svg viewBox="0 0 45 45" width={size} height={size} className={className} style={{ display: 'block' }}>
          <path
            d="m 22.5,9 a 4,4 0 1 1 -0.1,0 z M 20,15 a 3.5,3.5 0 0 1 5,0 3.5,3.5 0 0 1 0,1.5 c 0,1 -2.5,2.5 -2.5,2.5 0,0 -2.5,-1.5 -2.5,-2.5 a 3.5,3.5 0 0 1 0,-1.5 z M 19,20 c 0,2 1,4 1,6 -1,0.5 -3,1.5 -3,3.5 0,2 2,3 5.5,3 3.5,0 5.5,-1 5.5,-3 0,-2 -2,-3 -3,-3.5 0,-2 1,-4 1,-6 z M 11.5,37 c 0,1.5 2.5,3 11,3 8.5,0 11,-1.5 11,-3 0,-1.5 -2.5,-2.5 -11,-2.5 -8.5,0 -11,1 -11,2.5 z"
            fill={fillColor}
            stroke={strokeColor}
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      );

    case 'n': // Knight
      return (
        <svg viewBox="0 0 45 45" width={size} height={size} className={className} style={{ display: 'block' }}>
          <g fill={fillColor} stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M 22,10 C 32.5,11 38.5,18 38,39 L 15,39 C 15,30 25,32.5 23,18" />
            <path d="M 24,18 C 24.38,20.91 18.45,25.37 16,27 C 13,29 13.18,31.34 11,31 C 9.958,30.06 12.41,27.96 11,28 C 10,28 11.19,29.23 10,30 C 9,30 5.997,31 6,26 C 6,24 12,14 12,14 C 12,14 13.89,12.1 14,10.5 C 13.27,9.506 13.5,8.5 13.5,7.5 C 14.5,6.5 16.5,10 16.5,10 L 18.5,10 C 18.5,10 19.28,8.008 21,7 C 22,7 22,10 22,10 Z" />
            <circle cx="15.5" cy="15.5" r="1.5" fill={isWhite ? strokeColor : '#ffffff'} />
          </g>
        </svg>
      );

    case 'b': // Bishop
      return (
        <svg viewBox="0 0 45 45" width={size} height={size} className={className} style={{ display: 'block' }}>
          <g fill={fillColor} stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M 9,36 C 12.39,35.03 19.11,36.43 22.5,34 C 25.89,36.43 32.61,35.03 36,36 C 36,36 37.65,36.54 39,38 C 38.32,38.97 37.35,38.99 36,38.5 C 32.61,37.53 25.89,38.96 22.5,37.5 C 19.11,38.96 12.39,37.53 9,38.5 C 7.646,38.99 6.677,38.97 6,38 C 7.354,36.54 9,36 9,36 z" />
            <path d="M 15,32 C 17.5,34.5 27.5,34.5 30,32 C 30.5,30.5 30,30 30,30 C 30,27.5 27.5,26 27.5,26 C 33,24.5 33.5,14.5 22.5,10.5 C 11.5,14.5 12,24.5 17.5,26 C 17.5,26 15,27.5 15,30 C 15,30 14.5,30.5 15,32 z" />
            <path d="M 25 8 A 2.5 2.5 0 1 1 20,8 A 2.5 2.5 0 1 1 25 8 z" />
            <path d="M 17.5,26 L 27.5,26 M 15,30 L 30,30 M 22.5,15.5 L 22.5,20.5 M 20,18 L 25,18" />
          </g>
        </svg>
      );

    case 'r': // Rook
      return (
        <svg viewBox="0 0 45 45" width={size} height={size} className={className} style={{ display: 'block' }}>
          <g fill={fillColor} stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M 9,39 L 36,39 L 36,36 L 9,36 z" />
            <path d="M 12,36 L 12,32 L 33,32 L 33,36 z" />
            <path d="M 11,14 L 11,9 L 15,9 L 15,11 L 20,11 L 20,9 L 25,9 L 25,11 L 30,11 L 30,9 L 34,9 L 34,14 z" />
            <path d="M 12,32 L 12,14 L 33,14 L 33,32 z" />
            <path d="M 14,29.5 L 31,29.5 M 14,16.5 L 31,16.5" />
          </g>
        </svg>
      );

    case 'q': // Queen
      return (
        <svg viewBox="0 0 45 45" width={size} height={size} className={className} style={{ display: 'block' }}>
          <g fill={fillColor} stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M 9,26 C 17.5,24.5 30,24.5 36,26 L 38.5,13.5 L 31,25 L 30.7,10.5 L 25.5,24.5 L 22.5,10 L 19.5,24.5 L 14.3,10.5 L 14,25 L 6.5,13.5 z" />
            <path d="M 9,26 C 9,28 10.5,28 11.5,30 C 12.5,31.5 12.5,31 12,33.5 C 10.5,34.5 11,36 11,36 C 11.5,36.5 18,36 22.5,36 C 27,36 33.5,36.5 34,36 C 34,36 34.5,34.5 33,33.5 C 32.5,31 32.5,31.5 33.5,30 C 34.5,28 36,28 36,26 C 27.5,24.5 17.5,24.5 9,26 z" />
            <path d="M 11.5,30 C 15,29 30,29 33.5,30 M 12,33.5 C 18,32.5 27,32.5 33,33.5" />
            <circle cx="6" cy="12" r="2" />
            <circle cx="14" cy="9" r="2" />
            <circle cx="22.5" cy="8" r="2" />
            <circle cx="31" cy="9" r="2" />
            <circle cx="39" cy="12" r="2" />
          </g>
        </svg>
      );

    case 'k': // King
      return (
        <svg viewBox="0 0 45 45" width={size} height={size} className={className} style={{ display: 'block' }}>
          <g fill={fillColor} stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M 22.5,11.63 L 22.5,6" />
            <path d="M 20,8 L 25,8" />
            <path d="M 22.5,25 C 22.5,25 27,17.5 25.5,14.5 C 24,11.5 21,11.5 22.5,11.5 C 24,11.5 21,11.5 19.5,14.5 C 18,17.5 22.5,25 22.5,25" />
            <path d="M 11.5,37 C 17,40.5 28,40.5 33.5,37 C 36.5,30 36.5,28.5 36.5,24 C 36.5,18.5 30.5,16.5 22.5,16.5 C 14.5,16.5 8.5,18.5 8.5,24 C 8.5,28.5 8.5,30 11.5,37 z" />
            <path d="M 20,27.5 L 25,27.5 M 19,30.5 L 26,30.5 M 11.5,37 L 33.5,37" />
          </g>
        </svg>
      );

    default:
      return null;
  }
};
