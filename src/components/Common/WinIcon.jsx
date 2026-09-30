import React from 'react';

const ICON_MAP = {
  'win-start': '/icons/win-start.png',
  'explorer': '/icons/explorer.png',
  'win-explorer': '/icons/explorer.png',
  'edge': '/icons/edge.png',
  'browser': '/icons/edge.png',
  'chrome': '/icons/chrome.svg',
  'google-chrome': '/icons/chrome.svg',
  'chrome-badged': '/icons/chrome.svg',
  'antigravity': '/icons/antigravity.svg',
  'ldplayer': '/icons/ldplayer.svg',
  'store': '/icons/store.png',
  'ms-store': '/icons/store.png',
  'xbox': '/icons/xbox.png',
  'todo': '/icons/todo.png',
  'calculator': '/icons/calculator.png',
  'calc': '/icons/calculator.png',
  'clock': '/icons/clock.png',
  'alarm': '/icons/clock.png',
  'paint': '/icons/paint.png',
  'onenote': '/icons/onenote.png',
  'notepad': '/icons/notepad.png',
  'settings': '/icons/settings.png',
  'terminal': '/icons/terminal.png',
  'powershell': '/icons/terminal.png',
  'code': '/icons/code.png',
  'vscode': '/icons/code.png',
  'photos': '/icons/photos.png',
  'image': '/icons/photos.png',
  'snip': '/icons/snip.png',
  'snipping-tool': '/icons/snip.png',
  'whatsapp': '/icons/whatsapp.svg',
  'discord': '/icons/whatsapp.svg',
  'linkedin': '/icons/linkedin.svg',
  'krisnaartha': '/icons/krisnaartha.svg',
  'krisnaartha_web': '/icons/krisnaartha.svg',
  'dino': '/icons/dino.svg',
  'chrome_dino': '/icons/chrome_dino.svg',
  'vlc': '/icons/vlc.svg',
  'media-player': '/icons/media-player.png',
  'movies': '/icons/media-player.png',
  'mail': '/icons/mail.png',
  'taskmanager': '/icons/taskmanager.png',
  'taskmgr': '/icons/taskmanager.png',
  'onedrive': '/icons/onedrive.png',
  'folder': '/icons/folder.png',
  'win-folder': '/icons/folder.png',
  'folder3d': '/icons/folder3d.png',
  'downloads': '/icons/downloads.png',
  'download-folder': '/icons/downloads.png',
  'documents': '/icons/documents.png',
  'gallery': '/icons/gallery.png',
  'home': '/icons/home.svg',
  'this-pc': '/icons/thispc.png',
  'computer': '/icons/thispc.png',
  'disk': '/icons/disk.png',
  'drive-c': '/icons/disk.png',
  'drive-d': '/icons/disk.png',
  'hard-drive': '/icons/disk.png',
  'network': '/icons/network.png',
  'network-pc': '/icons/network.png',
  'ftp-laptop': '/icons/network.png',
  'shared-folder': '/icons/folder.png',
  'network-folder': '/icons/folder.png',
  'pin': '/icons/pin.png',
  'cut': '/icons/cut.png',
  'scissors': '/icons/cut.png',
  'copy': '/icons/copy.png',
  'paste': '/icons/paste.png',
  'rename': '/icons/rename.png',
  'share': '/icons/share.png',
  'delete': '/icons/delete.png',
  'trash': '/icons/bin0.png',
  'recycle-bin': '/icons/bin0.png',
  'bin': '/icons/bin0.png',
  'bin0': '/icons/bin0.png',
  'bin1': '/icons/bin1.png',
  'recycle-bin-full': '/icons/bin0.png',
  'recycle-bin-empty': '/icons/bin1.png',
  'sort': '/icons/sort.png',
  'view': '/icons/view.png',
  'view-grid': '/icons/view.png',
  'preview': '/icons/preview.png',
  'preview-pane': '/icons/preview.png',
  'power': '/icons/power.png',
  'pdf': '/icons/documents.png',
  'briefcase': '/icons/store.png',
  'recruiter': '/icons/store.png',
  'tatagih': '/icons/tatagih.svg',
  'temuin': '/icons/temuin.svg',
  'lintas': '/icons/lintas.svg',
  'neurofly': '/icons/antigravity.svg',
  'dompetq': '/icons/code.png',
  'makalah': '/icons/notepad.png',
  'sigap': '/icons/sigap.svg',
  'bingkai': '/icons/bingkai.svg',
  'nenacare': '/icons/nenacare.svg',
  'theotown': '/icons/theotown.svg',
  'theotown-stikom': '/icons/theotown.svg',
  'stikom': '/icons/theotown.svg'
};

export const WinIcon = ({ name, size = 32, className = '' }) => {
  const iconSrc = ICON_MAP[name] || '/icons/folder.png';

  return (
    <div
      className={className}
      style={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: size,
        height: size,
        flexShrink: 0
      }}
    >
      <img
        src={iconSrc}
        alt={name}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          pointerEvents: 'none',
          userSelect: 'none'
        }}
        draggable={false}
      />
    </div>
  );
};
