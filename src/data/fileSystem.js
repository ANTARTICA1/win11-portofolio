export const INITIAL_USER = {
  name: "Agung Krisna",
  handle: "agung",
  role: "Full-Stack Web & Mobile Developer",
  status: "Open to Work (Full-Time / Freelance)",
  location: "Indonesia",
  email: "agungkrisna.dev@gmail.com",
  phone: "+62 812-3456-7890",
  whatsapp: "https://wa.me/6281234567890?text=Halo%20Agung,%20kami%20tertarik%20dengan%20profil%20portfolio%20Anda",
  github: "https://github.com/agungkrisna",
  linkedin: "https://linkedin.com/in/agungkrisna",
  avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=AgungKrisna"
};

export const RECRUITER_SUMMARY = {
  headline: "Agung Krisna — Full-Stack & Mobile Developer",
  experienceYears: "3+ Tahun",
  specialization: "Mobile Development (Flutter, React Native) & Modern Web (React, Next.js, Node.js)",
  highlights: [
    "Berpengalaman mengembangkan aplikasi mobile berskala komersial (Fintech, Crowdsourcing, IoT Sensor)",
    "Mahir merancang arsitektur clean-code, RESTful APIs, dan integrasi Payment / Maps API",
    "Fokus tinggi pada performa, estetika UI/UX premium, dan responsivitas lintas platform",
    "Siap berkontribusi secara langsung (Full-time Onsite / Remote / Hybrid)"
  ],
  topSkills: [
    "Flutter / Dart", "React.js & Next.js", "React Native", "TypeScript",
    "Node.js & Express", "Go / Golang", "PostgreSQL & MongoDB", "Tailwind / Vanilla CSS", "Docker & CI/CD"
  ]
};

export const PROJECTS_ITEMS = [
  {
    name: "Tatagih.exe",
    type: "executable",
    extension: "exe",
    appId: "tatagih",
    projectId: "tatagih",
    icon: "tatagih",
    fileType: "Application",
    size: "14.2 MB",
    modified: "10/14/2024 14:28",
    description: "Tatagih - Subscription and Bill Manager"
  },
  {
    name: "Lintas.exe",
    type: "executable",
    extension: "exe",
    appId: "lintas",
    projectId: "lintas",
    icon: "lintas",
    fileType: "Application",
    size: "28.6 MB",
    modified: "11/02/2024 09:15",
    description: "Lintas - Phone-to-PC Companion Utility"
  },
  {
    name: "NeuroFly.exe",
    type: "executable",
    extension: "exe",
    appId: "neurofly",
    projectId: "neurofly",
    icon: "neurofly",
    fileType: "Application",
    size: "42.1 MB",
    modified: "12/18/2024 16:40",
    description: "NeuroFly - Drosophila Connectome x Pong"
  }
];

export const DATA_D_ITEMS = [
  {
    name: "Projects",
    type: "folder",
    description: "Executable Applications Portfolio",
    badge: "Applications",
    items: PROJECTS_ITEMS
  },
  {
    name: "dompetq",
    type: "folder",
    description: "Fintech E-Wallet Mobile Application",
    previewImage: "/projects/dompetq.jpg",
    badge: "Mobile App",
    items: [
      {
        name: "project_overview.txt",
        type: "file",
        extension: "txt",
        size: "3.2 KB",
        content: `=====================================================
PROYEK: DOMPETQ - FINTECH MOBILE APP
=====================================================
Platform   : Android & iOS
Framework  : Flutter (Dart)
State Mgmt : Riverpod & BLoC Pattern
Backend    : Node.js (Express), PostgreSQL, Redis Cache
Keamanan   : JWT Authentication, Biometric Fingerprint / FaceID, PIN Encryption

DESKRIPSI:
DompetQ adalah aplikasi dompet digital modern yang mempermudah pengguna
dalam melacak keuangan harian, pembayaran via QRIS, transfer antar bank,
dan split-bill dengan sistem analitik grafik interaktif.

FITUR UTAMA:
✓ Dashboard saldo real-time dengan grafik arus kas bulanan
✓ Simulasi pembayaran QRIS dinamis & statis
✓ Riwayat transaksi dengan filter kategori & ekspor PDF laporan
✓ Keamanan biometrik & notifikasi push transaksi instan
✓ Dukungan multi-akun & kantong tabungan terencana (Saving Goals)
`
      },
      {
        name: "dompetq_preview.jpg",
        type: "file",
        extension: "jpg",
        size: "482 KB",
        imageUrl: "/projects/dompetq.jpg",
        title: "DompetQ Mobile UI Dashboard"
      },
      {
        name: "tech_stack.txt",
        type: "file",
        extension: "txt",
        size: "1.1 KB",
        content: `TECH STACK DOMPETQ:
- Client: Flutter 3.22, Dart
- UI/UX: Material 3, Custom Dark Violet Theme
- Local DB: Hive & SecureStorage
- Network: Dio with interceptors & retry policy
- Testing: Mocktail, Golden UI Tests
`
      }
    ]
  },
  {
    name: "project temuin",
    type: "folder",
    description: "Lost & Found Crowdsourcing Platform",
    previewImage: "/projects/temuin.jpg",
    badge: "Full-Stack Mobile",
    items: [
      {
        name: "tentang_temuin.txt",
        type: "file",
        extension: "txt",
        size: "2.8 KB",
        content: `=====================================================
PROYEK: TEMUIN - TEMUKAN & LAPORKAN BARANG HILANG
=====================================================
Kategori : Mobile & Cloud Crowdsourcing Platform
Tech     : React Native (Expo), Node.js, Express, MongoDB, Google Maps API

DESKRIPSI:
Platform komunitas berbasis lokasi untuk membantu masyarakat menemukan kembali
barang bawaan yang tertinggal atau tercecer (seperti dompet, kunci, laptop, dll).

HIGHLIGHTS:
- Peta Interaktif (Google Maps): Memetakan lokasi barang hilang & barang ditemukan di sekitar pengguna
- Sistem Verifikasi Kepemilikan: Kuis verifikasi ciri khusus barang sebelum klaim dibuka
- Chat Terenkripsi: Komunikasi langsung antara penemu dan pemilik tanpa mengekspos nomor pribadi
- Notifikasi Radius: Alert otomatis jika ada barang dilaporkan hilang di dekat Anda
`
      },
      {
        name: "temuin_mockup.jpg",
        type: "file",
        extension: "jpg",
        size: "520 KB",
        imageUrl: "/projects/temuin.jpg",
        title: "Temuin Mobile Maps & Feed"
      }
    ]
  },
  {
    name: "Makalah Generator",
    type: "folder",
    description: "AI Academic Paper & Essay Assistant",
    previewImage: "/projects/makalah.jpg",
    badge: "Web App & AI",
    items: [
      {
        name: "makalah_generator_readme.txt",
        type: "file",
        extension: "txt",
        size: "2.5 KB",
        content: `=====================================================
PROYEK: MAKALAH GENERATOR (AI ACADEMIC ASSISTANT)
=====================================================
Tech: Next.js 14, TypeScript, TailwindCSS, OpenAI API, LaTeX to PDF Engine

DESKRIPSI:
Aplikasi berbasis web untuk membantu mahasiswa & peneliti dalam menyusun draf
makalah akademik terstruktur dengan sitasi otomatis standar APA & IEEE.

FITUR:
- Pembuatan outline bab otomatis (Pendahuluan, Tinjauan Pustaka, Metodologi, dsb)
- Manajemen sitasi terintegrasi Google Scholar & CrossRef
- Ekspor satu klik ke format Microsoft Word (.docx) dan LaTeX PDF
`
      },
      {
        name: "makalah_dashboard.jpg",
        type: "file",
        extension: "jpg",
        size: "410 KB",
        imageUrl: "/projects/makalah.jpg",
        title: "Makalah Generator Web Dashboard"
      }
    ]
  },
  {
    name: "mybiodata",
    type: "folder",
    description: "Profil Lengkap, Riwayat Pendidikan & Kontak",
    badge: "Profile",
    items: [
      {
        name: "biodata_agung.txt",
        type: "file",
        extension: "txt",
        size: "2.1 KB",
        content: `=====================================================
BIODATA & PROFIL DEVELOPER
=====================================================
Nama Lengkap    : Agung Krisna
Profesi         : Full-Stack Web & Mobile Developer
Pendidikan      : S1 Teknik Informatika / Ilmu Komputer (IPK: 3.84)
Domisili        : Indonesia
Status Kerja    : Siap Kerja (Full-time / Kontrak / Remote)

RINGKASAN:
Software developer berdedikasi tinggi dengan ketertarikan kuat dalam membangun
antarmuka pengguna yang memukau (pixel-perfect) dan backend yang tangguh.
Berpengalaman dalam ekosistem JavaScript/TypeScript dan Flutter.

PENGALAMAN:
- Frontend & Mobile Developer (Freelance) (2023 - Sekarang)
  Membangun lebih dari 10+ aplikasi web & mobile untuk berbagai klien UMKM dan instansi.
- Mobile App Developer Intern (2022 - 2023)
  Mengembangkan fitur dompet digital, optimasi caching lokal, dan integrasi payment gateway.
`
      },
      {
        name: "pendidikan_sertifikasi.txt",
        type: "file",
        extension: "txt",
        size: "1.8 KB",
        content: `RIWAYAT PENDIDIKAN & PRESTASI:
- Sarjana Komputer (S.Kom) - Teknik Informatika
  Fokus Penelitian: Sistem Rekomendasi & Mobile Application Security
- Juara 2 Hackathon Inovasi Aplikasi Mobile Kampus 2023
- Juara Harapan Web Design Competition Nasional 2024
`
      }
    ]
  },
  {
    name: "Sertifikat",
    type: "folder",
    description: "Sertifikasi Resmi & Penghargaan",
    previewImage: "/certificates/cert_fullstack.jpg",
    badge: "Certificates",
    items: [
      {
        name: "sertifikat_fullstack.jpg",
        type: "file",
        extension: "jpg",
        size: "612 KB",
        imageUrl: "/certificates/cert_fullstack.jpg",
        title: "Certificate: Mobile & Full Stack Development"
      },
      {
        name: "daftar_sertifikasi.txt",
        type: "file",
        extension: "txt",
        size: "1.4 KB",
        content: `DAFTAR LISENSI & SERTIFIKASI:
1. Mobile & Full Stack Web Application Development (Issued by Tech Institute)
2. Cloud Architecture & Google Cloud Foundations
3. Flutter Expert: Advanced Clean Architecture & Riverpod
4. Cyber Security Awareness & Secure Coding Best Practices
`
      }
    ]
  },
  {
    name: "kontak",
    type: "folder",
    description: "Informasi Kontak, WhatsApp, LinkedIn, GitHub",
    badge: "Contact",
    items: [
      {
        name: "hubungi_saya.txt",
        type: "file",
        extension: "txt",
        size: "1.2 KB",
        content: `INFORMASI KONTAK RESMI:
--------------------------------------------
Email       : agungkrisna.dev@gmail.com
WhatsApp    : +62 812-3456-7890
LinkedIn    : https://linkedin.com/in/agungkrisna
GitHub      : https://github.com/agungkrisna
Telegram    : @agungkrisna
Portfolio   : https://agungkrisna.vercel.app

Tertarik untuk berkolaborasi atau merekrut saya?
Silakan klik link WhatsApp atau kirim pesan email langsung!
`
      }
    ]
  },
  {
    name: "radiusapp",
    type: "folder",
    description: "Location-based Geofencing Mobile Tool",
    badge: "Mobile App",
    items: [
      {
        name: "radiusapp_info.txt",
        type: "file",
        extension: "txt",
        size: "1.6 KB",
        content: `RADIUS APP - GEOFENCING UTILITY
Aplikasi Android untuk mendeteksi radius perimeter dan mengirim broadcast alert
saat perangkat memasuki atau meninggalkan zona geofencing yang telah ditentukan.
`
      }
    ]
  },
  {
    name: "myapps",
    type: "folder",
    description: "Kumpulan Repositori Aplikasi Pribadi",
    badge: "Projects",
    items: [
      {
        name: "daftar_aplikasi.txt",
        type: "file",
        extension: "txt",
        size: "1.9 KB",
        content: `KATALOG APLIKASI YANG PERNAH DIBANGUN:
1. DompetQ (Mobile E-Wallet Fintech)
2. Temuin (Lost and Found Location Platform)
3. Makalah Generator (Academic AI Suite)
4. RadiusApp (Geofencing & Proximity Sensor)
5. KuisMobile (Gamified Learning Quiz)
6. Tatagih (Invoicing & Accounts Receivable SaaS)
`
      }
    ]
  },
  {
    name: "Screenshots",
    type: "folder",
    description: "Galeri Tangkapan Layar Proyek",
    badge: "Gallery",
    items: [
      { name: "dompetq_screen.jpg", type: "file", extension: "jpg", size: "482 KB", imageUrl: "/projects/dompetq.jpg", title: "DompetQ Screen" },
      { name: "temuin_screen.jpg", type: "file", extension: "jpg", size: "520 KB", imageUrl: "/projects/temuin.jpg", title: "Temuin Screen" },
      { name: "makalah_screen.jpg", type: "file", extension: "jpg", size: "410 KB", imageUrl: "/projects/makalah.jpg", title: "Makalah Screen" }
    ]
  },
  {
    name: "sensormobile",
    type: "folder",
    description: "Eksperimen Sensor Akselerometer & Giroskop",
    badge: "Mobile IoT",
    items: [
      {
        name: "sensor_notes.txt",
        type: "file",
        extension: "txt",
        size: "1.1 KB",
        content: `SENSOR MOBILE PROJECT:
Eksperimen pemanfaatan hardware accelerometer, pedometer, dan barometer pada Android
untuk penghitungan langkah kaki dan orientasi 3D real-time.
`
      }
    ]
  },
  {
    name: "kuismobile",
    type: "folder",
    description: "Gamified Quiz App Android",
    badge: "Mobile App",
    items: [
      {
        name: "kuis_info.txt",
        type: "file",
        extension: "txt",
        size: "1.2 KB",
        content: `KUIS MOBILE:
Aplikasi kuis trivia interaktif dengan timer, papan skor (leaderboard) Firebase,
dan animasi perayaan saat menjawab benar.
`
      }
    ]
  },
  {
    name: "UTS_240040075",
    type: "folder",
    description: "Proyek Ujian Tengah Semester & Riset Akademik",
    badge: "Academic",
    items: [
      {
        name: "laporan_uts.txt",
        type: "file",
        extension: "txt",
        size: "2.3 KB",
        content: `LAPORAN UTS KOMPUTASI MOBILE:
Analisis perbandingan performa antara Flutter vs Native Kotlin dalam pemrosesan grafis 60fps.
Hasil: Flutter mencapai frame render 59.4 fps dengan konsumsi memori optimal.
`
      }
    ]
  },
  {
    name: "tugas4",
    type: "folder",
    description: "Tugas Pengembangan Web Lanjutan",
    items: [
      { name: "readme.txt", type: "file", extension: "txt", size: "850 B", content: "Implementasi REST API & Microservice Authentication." }
    ]
  },
  {
    name: "latihan",
    type: "folder",
    description: "Latihan & Algoritma Dasar",
    items: [
      { name: "algoritma.txt", type: "file", extension: "txt", size: "750 B", content: "Koleksi algoritma sorting, binary search, dan dynamic programming." }
    ]
  },
  {
    name: "latihan3",
    type: "folder",
    description: "Eksplorasi State Management",
    items: [
      { name: "state_comparison.txt", type: "file", extension: "txt", size: "900 B", content: "Perbandingan Zustand, Redux Toolkit, dan MobX." }
    ]
  },
  {
    name: "utsmobile",
    type: "folder",
    description: "Source Code Aplikasi Mobile UTS",
    items: [
      { name: "main.dart", type: "file", extension: "txt", size: "3.5 KB", content: "void main() => runApp(const MobileUTSApp());" }
    ]
  },
  {
    name: "LDPlayer",
    type: "folder",
    description: "Konfigurasi Android Virtual Emulator",
    items: [
      { name: "devices.cfg", type: "file", extension: "txt", size: "400 B", content: "Device profile: Pixel 7 Pro, Android 13, API 33" }
    ]
  },
  {
    name: "Riot Games",
    type: "folder",
    description: "Game Folder & Gaming Benchmarks",
    items: [
      { name: "gaming_profile.txt", type: "file", extension: "txt", size: "620 B", content: "Competitive gamer hobbyist: Valorant Diamond Rank, Team Strategy Enthusiast." }
    ]
  },
  {
    name: "Steam",
    type: "folder",
    description: "Steam Client Assets & Game Mods",
    items: [
      { name: "steam_apps.txt", type: "file", extension: "txt", size: "500 B", content: "Game library & development sandbox." }
    ]
  },
  {
    name: "SteamLibrary",
    type: "folder",
    description: "Secondary Game Library Drive",
    items: [
      { name: "library_cache.txt", type: "file", extension: "txt", size: "300 B", content: "Steam cache & config files." }
    ]
  },
  {
    name: "SPOTIFY",
    type: "folder",
    description: "Coding Playlist & Music Preferences",
    items: [
      {
        name: "coding_playlist.txt",
        type: "file",
        extension: "txt",
        size: "1.1 KB",
        content: `CODING & DEEP WORK PLAYLIST:
- Synthwave / Retrowave Chill
- Lofi Beats to Code / Relax to
- Hans Zimmer Film Scores
- Neo-Classical Piano
`
      }
    ]
  }
];

export const DESKTOP_ITEMS = [
  {
    id: "this_pc",
    name: "This PC",
    type: "system",
    app: "explorer",
    path: "This PC",
    icon: "computer"
  },
  {
    id: "user_files",
    name: "User Files",
    type: "system",
    app: "explorer",
    path: "Documents",
    icon: "folder"
  },
  {
    id: "file_explorer",
    name: "File Explorer",
    type: "app",
    app: "explorer",
    path: "Projects",
    icon: "explorer"
  },
  {
    id: "projects_folder",
    name: "Projects",
    type: "app",
    app: "explorer",
    path: "Projects",
    icon: "folder"
  },
  {
    id: "chrome_app",
    name: "Google Chrome",
    type: "app",
    app: "chrome",
    icon: "chrome"
  },
  {
    id: "recycle_bin",
    name: "Recycle Bin",
    type: "system",
    app: "recycle_bin",
    icon: "trash"
  },
  {
    id: "tatagih_app",
    name: "Tatagih.exe",
    type: "executable",
    app: "tatagih",
    icon: "tatagih"
  },
  {
    id: "lintas_app",
    name: "Lintas.exe",
    type: "executable",
    app: "lintas",
    icon: "lintas"
  },
  {
    id: "neurofly_app",
    name: "NeuroFly.exe",
    type: "executable",
    app: "neurofly",
    icon: "neurofly"
  },
  {
    id: "edge_browser",
    name: "Projects Showcase",
    type: "app",
    app: "browser",
    icon: "edge"
  },
  {
    id: "powershell",
    name: "PowerShell",
    type: "app",
    app: "terminal",
    icon: "terminal"
  },
  {
    id: "notepad",
    name: "Notepad",
    type: "app",
    app: "notepad",
    icon: "notepad"
  },
  {
    id: "certificates",
    name: "Certificates",
    type: "app",
    app: "photos",
    icon: "image"
  },
  {
    id: "settings",
    name: "Settings",
    type: "app",
    app: "settings",
    icon: "settings"
  },
  {
    id: "antigravity",
    name: "Antigravity AI",
    type: "app",
    app: "terminal",
    icon: "antigravity"
  },
  {
    id: "vscode",
    name: "Visual Studio Code",
    type: "app",
    app: "terminal",
    icon: "vscode"
  },
  {
    id: "discord",
    name: "Discord",
    type: "app",
    app: "recruiter",
    icon: "discord"
  },
  {
    id: "calculator",
    name: "Calculator",
    type: "app",
    app: "calculator",
    icon: "calculator"
  }
];
