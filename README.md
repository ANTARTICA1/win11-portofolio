# Windows 11 Web Desktop Portfolio

An interactive, browser-based operating system simulator built with React 19 and Vite. Designed as a tribute to Microsoft Windows 11, this platform serves as an interactive developer workspace and portfolio showcase featuring authentic window management, desktop shell components, and functional built-in desktop utilities.

## Overview

This project recreates the visual language, motion physics, and user interface workflows of Windows 11 on the modern open web. Users can manipulate multi-window workspaces, interact with desktop shell elements (Start Menu, Taskbar, Quick Settings, System Tray), and launch functional software applications directly inside the browser sandbox.

## System Architecture and Features

### 1. Window Management System
- Complete Window Controls: Minimize, maximize, restore, and terminate window instances.
- Spatial Interactions: Drag-and-drop window repositioning, border-edge resizing, and auto-centering.
- Z-Index Focus Controller: Dynamic elevation of active windows upon pointer interaction using React Context.

### 2. Desktop Shell and Navigation
- Centered Taskbar: Pinned application shortcuts, active process indicators, and start launcher.
- Start Menu: Pinned application grid, recommended documents, and global system search.
- Quick Settings Flyout: Network status, volume gain control, brightness adjustment, and battery metrics.
- Action Center & Calendar: Integrated digital clock and monthly calendar flyout.
- Desktop Context Menu: Right-click context menus for view customization, sorting, and display configurations.
- Run Dialog: Functional `Win + R` command launcher supporting registered application aliases.

### 3. Integrated Application Suite
- File Explorer: Virtual hierarchical file system displaying directory trees, projects, and documents.
- Terminal App: Interactive command-line interface supporting commands (`help`, `whoami`, `projects`, `skills`, `clear`, `cat`, `exit`).
- Browser App: Sandboxed embedded web navigator with navigation bar and URL dispatching.
- Notepad: Text editing interface for inspecting source code files and personal notes.
- Calculator: Functional arithmetic evaluator with history and clearing logic.
- Photos App: Digital image inspector with zoom, panning, and metadata display.
- Recruiter Hub: Streamlined hiring overview presenting technical competencies, resume viewer, and contact channels.
- WhatsApp Chat Simulator: Direct communication interface for initiating immediate contact.
- Settings: Customization suite for wallpapers, interface appearance, and audio preferences.
- Embedded Games: Chrome Dinosaur running game and NeuroFly 3D Pong biological neural controller simulator.

### 4. Audio and Visual Feedback
- Windows 11 system sounds (startup chime, window snaps, notifications) powered by Web Audio API.
- Fluent Design System aesthetics (Mica effect, acrylic translucency, rounded geometry, and drop shadows).

## Technology Stack

- Core Framework: React 19.2
- Build System & Bundler: Vite 8.3
- Iconography: Lucide React
- Linter: Oxlint
- Styling: Modern CSS3 (CSS Variables, Flexbox, CSS Grid, Backdrop Filters)
- Deployment: Vercel Ready

## Project Structure

```
win11-portofolio/
├── public/                  # Static assets, wallpapers, avatars, and audio files
├── src/
│   ├── assets/              # Logos and SVG vector art
│   ├── components/
│   │   ├── Apps/            # Standalone desktop application components
│   │   │   ├── BrowserApp.jsx
│   │   │   ├── CalculatorApp.jsx
│   │   │   ├── ChromeDinoGame.jsx
│   │   │   ├── FileExplorerApp.jsx
│   │   │   ├── NeuroFlyApp.jsx
│   │   │   ├── NotepadApp.jsx
│   │   │   ├── PhotosApp.jsx
│   │   │   ├── RecruiterHubApp.jsx
│   │   │   ├── SettingsApp.jsx
│   │   │   ├── TerminalApp.jsx
│   │   │   └── WhatsAppApp.jsx
│   │   ├── Common/          # Shared components (Toasts, Run Dialog, Phone Mockups)
│   │   ├── Desktop/         # Desktop layout, icon grids, and context menu handlers
│   │   ├── Taskbar/         # Start menu, taskbar icons, system tray, and calendar flyouts
│   │   └── Windows/         # Window container, titlebar controls, and WindowContext
│   ├── data/
│   │   ├── fileSystem.js    # Virtual folder structure and file hierarchy
│   │   └── projectsData.js  # Project catalog and case study datasets
│   ├── utils/
│   │   ├── device.js        # Mobile/desktop responsive viewport detector
│   │   └── sound.js         # Web Audio API sound trigger routines
│   ├── App.jsx              # Main application shell and window provider
│   ├── main.jsx             # React DOM root initialization
│   └── index.css            # Base stylesheet and Fluent design variables
├── package.json             # Node dependencies and build scripts
├── vite.config.js           # Vite development server configuration
└── README.md                # Technical documentation
```

## Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm 9.0 or higher

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ANTARTICA1/win11-portofolio.git
   cd win11-portofolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Launch development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

5. Preview production build locally:
   ```bash
   npm run preview
   ```

## Author

Anak Agung Ngurah Krisna Artha Wibawa ([ANTARTICA1](https://github.com/ANTARTICA1))

## License

This project is licensed under the MIT License.