import React from 'react';

export const WinIcon = ({ name, size = 32, className = '' }) => {
  switch (name) {
    case 'win-start':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
          <rect x="5" y="5" width="17" height="17" rx="1.5" fill="#0078D4" />
          <rect x="26" y="5" width="17" height="17" rx="1.5" fill="#0078D4" />
          <rect x="5" y="26" width="17" height="17" rx="1.5" fill="#0078D4" />
          <rect x="26" y="26" width="17" height="17" rx="1.5" fill="#0078D4" />
        </svg>
      );

    case 'folder':
    case 'win-folder':
      return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
          <path d="M6 16C6 13.7909 7.79086 12 10 12H24.5C26.3565 12 28.0835 12.9868 29.0279 14.5913L31.2 18.2826C31.6722 19.0848 32.5358 19.5781 33.4642 19.5781H54C56.2091 19.5781 58 21.369 58 23.5781V46C58 48.2091 56.2091 50 54 50H10C7.79086 50 6 48.2091 6 46V16Z" fill="#F4B400" />
          <rect x="14" y="16" width="36" height="26" rx="2" fill="#FFFFFF" opacity="0.9" />
          <line x1="18" y1="22" x2="36" y2="22" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" />
          <line x1="18" y1="27" x2="44" y2="27" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" />
          <line x1="18" y1="32" x2="30" y2="32" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" />
          <path d="M6 24C6 21.7909 7.79086 20 10 20H54C56.2091 20 58 21.7909 58 24V47C58 49.2091 56.2091 51 54 51H10C7.79086 51 6 49.2091 6 47V24Z" fill="#FFC83B" />
          <path d="M6 26H58V27H6V26Z" fill="#FFE082" opacity="0.6" />
        </svg>
      );

    case 'explorer':
    case 'win-explorer':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
          <path d="M4 12C4 10.3431 5.34315 9 7 9H18.5C19.8924 9 21.1876 9.74011 21.8959 10.9442L23.5 13.6708C23.8542 14.2729 24.5018 14.6429 25.1979 14.6429H41C42.6569 14.6429 44 15.986 44 17.6429V36C44 37.6569 42.6569 39 41 39H7C5.34315 39 4 37.6569 4 36V12Z" fill="#F2A900" />
          <path d="M4 18C4 16.3431 5.34315 15 7 15H41C42.6569 15 44 16.3431 44 18V36C44 37.6569 42.6569 39 41 39H7C5.34315 39 4 37.6569 4 36V18Z" fill="#FFCA28" />
          <rect x="10" y="24" width="28" height="6" rx="3" fill="#0078D4" />
        </svg>
      );

    case 'computer':
    case 'this-pc':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
          <rect x="6" y="8" width="36" height="25" rx="3" fill="#1E293B" stroke="#475569" strokeWidth="2" />
          <rect x="9" y="11" width="30" height="19" rx="1" fill="#0EA5E9" opacity="0.85" />
          <path d="M19 33H29V37H19V33Z" fill="#94A3B8" />
          <rect x="14" y="37" width="20" height="3" rx="1.5" fill="#CBD5E1" />
        </svg>
      );

    case 'trash':
    case 'recycle-bin':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
          <path d="M14 14L16 40C16.1 41.1 17 42 18.1 42H29.9C31 42 31.9 41.1 32 40L34 14" fill="#0284C7" fillOpacity="0.4" stroke="#38BDF8" strokeWidth="2" />
          <path d="M10 14H38" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M20 14V10C20 9.4 20.4 9 21 9H27C27.6 9 28 9.4 28 10V14" stroke="#38BDF8" strokeWidth="2" />
          <path d="M20 22L24 26L28 22" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M24 34V26" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    case 'notepad':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
          <rect x="9" y="6" width="30" height="36" rx="4" fill="#0284C7" />
          <rect x="12" y="9" width="24" height="30" rx="2" fill="#F8FAFC" />
          <line x1="16" y1="15" x2="32" y2="15" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
          <line x1="16" y1="21" x2="32" y2="21" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
          <line x1="16" y1="27" x2="28" y2="27" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
          <line x1="16" y1="33" x2="24" y2="33" stroke="#0284C7" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    case 'terminal':
    case 'powershell':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
          <rect x="6" y="8" width="36" height="32" rx="4" fill="#012456" stroke="#1D4ED8" strokeWidth="1.5" />
          <path d="M13 18L19 24L13 30" stroke="#60A5FA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="22" y1="30" x2="32" y2="30" stroke="#60A5FA" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );

    case 'edge':
    case 'browser':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
          <circle cx="24" cy="24" r="18" fill="url(#edgeGrad)" />
          <path d="M24 10C31.7 10 38 16.3 38 24C38 31.7 31.7 38 24 38C16.3 38 10 31.7 10 24C10 18.5 13.2 13.7 17.8 11.5C18.8 14.8 21.6 18.5 25.5 20C28.2 21 31.5 20.8 33.5 19C33.8 20.5 34 22.2 34 24C34 29.5 29.5 34 24 34C18.5 34 14 29.5 14 24C14 21.5 15 19.2 16.5 17.5" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" opacity="0.9" />
          <defs>
            <linearGradient id="edgeGrad" x1="6" y1="6" x2="42" y2="42" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0078D4" />
              <stop offset="0.5" stopColor="#00BCF2" />
              <stop offset="1" stopColor="#00D287" />
            </linearGradient>
          </defs>
        </svg>
      );

    case 'settings':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
          <rect x="6" y="6" width="36" height="36" rx="8" fill="#334155" />
          <path d="M24 16C19.58 16 16 19.58 16 24C16 28.42 19.58 32 24 32C28.42 32 32 28.42 32 24C32 19.58 28.42 16 24 16ZM24 28C21.79 28 20 26.21 20 24C20 21.79 21.79 20 24 20C26.21 20 28 21.79 28 24C28 26.21 26.21 28 24 28Z" fill="#94A3B8" />
          <path d="M34.5 22.5H32.8C32.6 21.7 32.2 21 31.8 20.3L33 19.1C33.4 18.7 33.4 18 33 17.6L30.4 15C30 14.6 29.3 14.6 28.9 15L27.7 16.2C27 15.8 26.3 15.4 25.5 15.2V13.5C25.5 12.9 25.1 12.5 24.5 12.5H23.5C22.9 12.5 22.5 12.9 22.5 13.5V15.2C21.7 15.4 21 15.8 20.3 16.2L19.1 15C18.7 14.6 18 14.6 17.6 15L15 17.6C14.6 18 14.6 18.7 15 19.1L16.2 20.3C15.8 21 15.4 21.7 15.2 22.5H13.5C12.9 22.5 12.5 22.9 12.5 23.5V24.5C12.5 25.1 12.9 25.5 13.5 25.5H15.2C15.4 26.3 15.8 27 16.2 27.7L15 28.9C14.6 29.3 14.6 30 15 30.4L17.6 33C18 33.4 18.7 33.4 19.1 33L20.3 31.8C21 32.2 21.7 32.6 22.5 32.8V34.5C22.5 35.1 22.9 35.5 23.5 35.5H24.5C25.1 35.5 25.5 35.1 25.5 34.5V32.8C26.3 32.6 27 32.2 27.7 31.8L28.9 33C29.3 33.4 30 33.4 30.4 33L33 30.4C33.4 30 33.4 29.3 33 28.9L31.8 27.7C32.2 27 32.6 26.3 32.8 25.5H34.5C35.1 25.5 35.5 25.1 35.5 24.5V23.5C35.5 22.9 35.1 22.5 34.5 22.5Z" fill="#CBD5E1" />
        </svg>
      );

    case 'pdf':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
          <rect x="9" y="6" width="30" height="36" rx="4" fill="#E11D48" />
          <path d="M29 6V15H38" fill="#BE123C" />
          <path d="M16 28V20H20C21.1 20 22 20.9 22 22C22 23.1 21.1 24 20 24H18V28H16ZM18 22.5H19.8C20.2 22.5 20.5 22.2 20.5 21.8C20.5 21.4 20.2 21.1 19.8 21.1H18V22.5ZM24 28V20H27.5C29.4 20 31 21.6 31 23.5C31 25.4 29.4 27 27.5 27H25.5V28H24ZM25.5 25.5H27.5C28.6 25.5 29.5 24.6 29.5 23.5C29.5 22.4 28.6 21.5 27.5 21.5H25.5V25.5Z" fill="#FFFFFF" />
        </svg>
      );

    case 'image':
    case 'photos':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
          <rect x="6" y="8" width="36" height="32" rx="4" fill="#0284C7" />
          <circle cx="17" cy="18" r="4" fill="#FDE047" />
          <path d="M6 34L18 22L28 32L34 26L42 34V36C42 38.2 40.2 40 38 40H10C7.8 40 6 38.2 6 36V34Z" fill="#38BDF8" />
        </svg>
      );

    case 'calc':
    case 'calculator':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
          <rect x="8" y="6" width="32" height="36" rx="4" fill="#1E293B" stroke="#475569" strokeWidth="2" />
          <rect x="13" y="11" width="22" height="8" rx="2" fill="#38BDF8" opacity="0.3" />
          <circle cx="16" cy="25" r="2.5" fill="#94A3B8" />
          <circle cx="24" cy="25" r="2.5" fill="#94A3B8" />
          <circle cx="32" cy="25" r="2.5" fill="#F59E0B" />
          <circle cx="16" cy="33" r="2.5" fill="#94A3B8" />
          <circle cx="24" cy="33" r="2.5" fill="#94A3B8" />
          <circle cx="32" cy="33" r="2.5" fill="#10B981" />
        </svg>
      );

    case 'briefcase':
    case 'recruiter':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
          <rect x="6" y="14" width="36" height="26" rx="4" fill="#8B5CF6" />
          <path d="M18 14V11C18 9.9 18.9 9 20 9H28C29.1 9 30 9.9 30 11V14" stroke="#A78BFA" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="6" y1="24" x2="42" y2="24" stroke="#C4B5FD" strokeWidth="2" />
          <rect x="21" y="21" width="6" height="6" rx="1" fill="#FBBF24" />
        </svg>
      );

    case 'sparkles':
    case 'antigravity':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
          <rect x="6" y="6" width="36" height="36" rx="10" fill="#4C1D95" stroke="#A855F7" strokeWidth="1.5" />
          <path d="M24 11L27.5 20.5L37 24L27.5 27.5L24 37L20.5 27.5L11 24L20.5 20.5L24 11Z" fill="#C084FC" />
          <circle cx="34" cy="14" r="2.5" fill="#F472B6" />
        </svg>
      );

    case 'code':
    case 'vscode':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
          <rect x="6" y="6" width="36" height="36" rx="8" fill="#1E293B" />
          <path d="M33 13L24 22L17 16L13 19L22 27L13 35L17 38L24 32L33 41L37 39V15L33 13Z" fill="#007ACC" />
        </svg>
      );

    case 'github':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
          <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
      );

    case 'linkedin':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      );

    default:
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
          <rect x="10" y="8" width="28" height="32" rx="3" fill="#64748B" />
          <line x1="16" y1="16" x2="28" y2="16" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
          <line x1="16" y1="22" x2="32" y2="22" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
          <line x1="16" y1="28" x2="24" y2="28" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
  }
};
