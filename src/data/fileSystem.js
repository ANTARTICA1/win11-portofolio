export const INITIAL_USER = {
  name: "Agung Krisna",
  fullName: "Anak Agung Ngurah Krisna Artha Wibawa",
  handle: "krisnaartha",
  role: "Full-Stack Web & Mobile Developer",
  status: "Open to Work (Full-Time / Freelance)",
  institution: "Institut Teknologi dan Bisnis STIKOM Bali",
  degree: "Information Technology",
  location: "Denpasar, Bali, Indonesia",
  email: "agungkrisna.dev@gmail.com",
  phone: "+62 812-3456-7890",
  whatsapp: "https://wa.me/6281234567890?text=Halo%20Agung,%20kami%20tertarik%20dengan%20profil%20portfolio%20Anda",
  github: "https://github.com/agungkrisna",
  linkedin: "https://linkedin.com/in/krisnaartha",
  website: "https://krisnaartha.my.id",
  avatar: "/avatars/gungkrisna_avatar.svg"
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
    name: "TheoTown_STIKOM.exe",
    type: "executable",
    extension: "exe",
    appId: "theotown",
    projectId: "theotown",
    icon: "theotown",
    fileType: "Application",
    size: "8.4 MB",
    modified: "11/12/2024 10:20",
    description: "ITB STIKOM Bali - Building Plugin for TheoTown (Educational Mod)"
  },
  {
    name: "NenaCare.exe",
    type: "executable",
    extension: "exe",
    appId: "nenacare",
    projectId: "nenacare",
    icon: "nenacare",
    fileType: "Application",
    size: "16.8 MB",
    modified: "10/30/2024 16:45",
    description: "NenaCare - AI-Powered K3 Incident Reporting & Monitoring System"
  },
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
    description: "Tatagih - Smart Subscription Manager & AI Financial Assistant (Laravel 13)"
  },
  {
    name: "Temuin.exe",
    type: "executable",
    extension: "exe",
    appId: "temuin",
    projectId: "temuin",
    icon: "temuin",
    fileType: "Application",
    size: "18.5 MB",
    modified: "08/20/2024 11:10",
    description: "Temuin - QR Code Lost & Found Platform"
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
  },
  {
    name: "DompetQ.exe",
    type: "executable",
    extension: "exe",
    appId: "dompetq",
    projectId: "dompetq",
    icon: "code",
    fileType: "Application",
    size: "22.4 MB",
    modified: "05/12/2024 16:30",
    description: "DompetQ - Fintech Mobile Wallet"
  },
  {
    name: "MakalahGenerator.exe",
    type: "executable",
    extension: "exe",
    appId: "makalah",
    projectId: "makalah",
    icon: "code",
    fileType: "Application",
    size: "12.8 MB",
    modified: "09/01/2024 10:05",
    description: "Makalah Generator - AI Academic Assistant"
  },
  {
    name: "Sigap.exe",
    type: "executable",
    extension: "exe",
    appId: "sigap",
    projectId: "sigap",
    icon: "sigap",
    fileType: "Application",
    size: "16.8 MB",
    modified: "11/20/2024 10:45",
    description: "SIGAP - Sistem Gerak Aman dari Pencurian (Flutter)"
  },
  {
    name: "Bingkai.exe",
    type: "executable",
    extension: "exe",
    appId: "bingkai",
    projectId: "bingkai",
    icon: "bingkai",
    fileType: "Application",
    size: "14.2 MB",
    modified: "10/15/2024 14:20",
    description: "Bingkai - Galeri Foto Komputer Lokal (Python & Alpine.js)"
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
    name: "theotown",
    type: "folder",
    description: "ITB STIKOM Bali — Building Plugin for TheoTown",
    badge: "Game Modding / Plugin",
    items: [
      {
        name: "TheoTown_STIKOM.exe",
        type: "executable",
        extension: "exe",
        appId: "theotown",
        projectId: "theotown",
        icon: "theotown",
        fileType: "Application",
        size: "8.4 MB",
        description: "Buka ITB STIKOM Bali TheoTown Showcase"
      },
      {
        name: "code.json",
        type: "file",
        extension: "json",
        size: "1.2 KB",
        content: `[
  {
    "id": "$stikom_bali_renon_01",
    "type": "education",
    "author": "Gekaaaaa",
    "width": 5,
    "height": 5,
    "frames": [{ "bmp": "StikomBali.png" }],
    "draw ground": true,
    "title": "ITB STIKOM BALI",
    "text": "Kampus ITB STIKOM Bali Renon - Gedung Pendidikan Tinggi",
    "education influence low": 700,
    "education influence high": 700,
    "education aspect low": 1000,
    "education aspect high": 2500,
    "education capacity low": 2500,
    "education capacity high": 2500,
    "price": 85000,
    "monthly price": 1200
  }
]`
      },
      {
        name: "plugin.manifest",
        type: "file",
        extension: "manifest",
        size: "340 B",
        content: `id: $stikom_bali_renon_plugin
version: 1.0.0
title: ITB STIKOM BALI
description: Plugin Gedung Stikom Bali Renon
author: Gekaaaaa
category: education
min_game_version: 1.11.0`
      },
      {
        name: "StikomBali.png",
        type: "image",
        extension: "png",
        imageUrl: "/projects/theotown.jpg",
        size: "48.2 KB",
        description: "Custom Pixel Art Isometric Sprite Frame (160x160)"
      },
      {
        name: "theotown_overview.txt",
        type: "file",
        extension: "txt",
        size: "2.4 KB",
        content: `=====================================================
PROYEK: ITB STIKOM BALI PLUGIN FOR THEOTOWN
=====================================================
Nama Mod     : ITB STIKOM Bali Building Plugin
Kategori     : Game Modding / Educational Building
Game Target  : TheoTown (Android & PC)
Author       : Gekaaaaa
Dimensi      : 5 x 5 Tile Isometric Grid
Tipe Objek   : Type: education

DESKRIPSI:
Plugin custom untuk game simulasi tata kota TheoTown yang menambahkan gedung
kampus ITB STIKOM Bali ke dalam game sebagai fasilitas pendidikan fungsional.
Dibuat dengan gaya pixel art isometrik yang memadukan arsitektur modern dan
ornamen Bali (atap meru tumpang & gerbang candi bentar).

FITUR GAMEPLAY & TEKNIS:
1. Gedung Edukasi Fungsional (Kapasitas: 2.500 Mahasiswa)
2. Radius Pengaruh Pendidikan (Influence: 700 Tile)
3. Ground Rendering Terbuka (draw ground: true)
4. Konfigurasi code.json & plugin.manifest standar engine
5. Kompatibel Multiplatform (Android APK Data & PC Windows Steam)
6. Dokumentasi Lengkap README.md dwibahasa (ID/EN)
=====================================================`
      }
    ]
  },
  {
    name: "bingkai",
    type: "folder",
    description: "Galeri Foto Komputer Lokal (Python & Alpine.js)",
    badge: "Desktop App / Local-First",
    items: [
      {
        name: "Bingkai.exe",
        type: "executable",
        extension: "exe",
        appId: "bingkai",
        projectId: "bingkai",
        icon: "bingkai",
        fileType: "Application",
        size: "14.2 MB",
        description: "Buka Bingkai Showcase di Chrome"
      },
      {
        name: "bingkai_overview.txt",
        type: "file",
        extension: "txt",
        size: "2.8 KB",
        content: `=====================================================
PROYEK: BINGKAI - GALERI FOTO KOMPUTER LOKAL
=====================================================
Tagline     : Membantu yang berserakan kembali beraturan.
Platform    : Desktop (Local-First Windows/Linux/macOS)
Tech Stack  : Python, FastAPI, SQLite, Alpine.js, Tailwind CSS, Pillow-WebP
Kontrol     : Gamepad (PS/Xbox) & Smartphone Wi-Fi Remote

DESKRIPSI:
Aplikasi galeri foto lokal untuk komputer yang dirancang dengan privasi penuh.
Kelola ribuan kenanganmu dengan cepat, dan nikmati dari layar monitor sambil
rebahan menggunakan Smartphone atau Stick Gamepad.

FITUR JAGOAN:
1. Rebahan Mode (Gamepad & Remote Support)
   Hubungkan Stick Game (PlayStation/Xbox) ke PC, atau buka IP komputermu di
   browser HP (Wi-Fi). Kamu bisa menggeser foto, zoom, dan merapikan galeri di
   layar monitor langsung dari sofa.
2. Tinder untuk Foto (Swipe Mode)
   Merapikan foto semudah main Tinder. Swipe kanan (atau tombol A gamepad) untuk
   simpan ke Favorit. Swipe kiri untuk buang ke Tong Sampah.
3. Pendeteksi Foto Kembar (Duplicate Finder)
   Deteksi foto kembar identik secara otomatis untuk menghemat ruang penyimpanan.
4. Album Virtual (Tanpa Makan Memori)
   Kelompokkan foto ke album tanpa menggandakan atau memindahkan file aslinya.
5. Tong Sampah Anti-Panik (Safe Trash)
   Foto yang dihapus tidak langsung hilang. Salah hapus? Tinggal Restore kembali.
6. Pemindaian Kilat (Pillow-WebP)
   Membuat thumbnail kecil berformat WebP agar ribuan foto terbuka tanpa lag.
=====================================================`
      }
    ]
  },
  {
    name: "sigap",
    type: "folder",
    description: "Sistem Gerak Aman dari Pencurian (Flutter)",
    badge: "Mobile Security / Flutter",
    items: [
      {
        name: "Sigap.exe",
        type: "executable",
        extension: "exe",
        appId: "sigap",
        projectId: "sigap",
        icon: "sigap",
        fileType: "Application",
        size: "16.8 MB",
        description: "Buka SIGAP Showcase di Chrome"
      },
      {
        name: "sigap_overview.txt",
        type: "file",
        extension: "txt",
        size: "3.2 KB",
        content: `=====================================================
PROYEK: SIGAP - SISTEM GERAK AMAN DARI PENCURIAN
=====================================================
Platform    : Android Mobile Application
Tech Stack  : Flutter, Dart, Provider
Hardware    : Accelerometer, Battery Status, Front Camera, GPS, Vibration, Audio

DESKRIPSI:
SIGAP adalah sistem keamanan perangkat bergerak berbasis Flutter yang dirancang
untuk melindungi smartphone dari pengambilan atau pemindahan tanpa izin ketika
ditinggalkan di meja, ruangan, atau area publik.

KONSEP UTAMA:
Detect -> Alert -> Lock -> Record -> Review

4 STATE SISTEM:
1. Disarmed  : Sistem siaga/idle, sensor belum memicu alarm.
2. Countdown : Hitung mundur 5 detik untuk penempatan stabil sebelum armed.
3. Armed     : Sensor accelerometer dipantau (baseline awal, threshold 2.0),
               status charger dipantau, wakelock aktif agar layar tidak tidur.
4. Alert     : Pemicu (gerakan mencurigakan > 2.0, charger dicabut paksa,
               atau PIN salah 3x). Respons darurat: alarm suara loop,
               watchdog volume 100%, getaran, layar immersiveSticky,
               snapshot GPS, foto kamera depan, dan log insiden lokal.

PERSISTENSI & KEAMANAN:
- Konfigurasi PIN lokal (4-8 digit) via SharedPreferences.
- Bukti foto disimpan secara lokal di internal storage aplikasi.
- Riwayat mencatat hingga 50 security event terbaru secara lokal.
`
      },
      {
        name: "sigap_architecture.txt",
        type: "file",
        extension: "txt",
        size: "2.4 KB",
        content: `STRUKTUR DIREKTORI & ARSITEKTUR KODE SIGAP:
- lib/main.dart               : Entry point & konfigurasi MultiProvider
- lib/models/security_event.dart : Model insiden keamanan (timestamp, trigger, GPS, foto)
- lib/providers/security_provider.dart : Pusat state machine & orkestrasi hardware
- lib/screens/                : Home, Alarm Lock, Evidence, Settings, Tutorial, PIN Dialog
- lib/services/camera_evidence_service.dart   : Capture foto penyusup kamera depan
- lib/services/emergency_location_service.dart: Snapshot koordinat GPS & Google Maps URL
- lib/services/security_storage_service.dart  : Local storage SharedPreferences
- lib/utils/                  : Constants, themes, motion threshold 2.0, countdown 5s
`
      }
    ]
  },
  {
    name: "nenacare",
    type: "folder",
    description: "AI-Powered K3 Incident Reporting & Monitoring System (PHP OOP & Gemini)",
    previewImage: "/projects/nenacare.jpg",
    badge: "Full-Stack Web App / AI Automation",
    items: [
      {
        name: "NenaCare.exe",
        type: "executable",
        extension: "exe",
        appId: "nenacare",
        projectId: "nenacare",
        icon: "nenacare",
        fileType: "Application",
        size: "16.8 MB",
        description: "Buka NenaCare Showcase di Chrome"
      },
      {
        name: "nenacare_overview.txt",
        type: "file",
        extension: "txt",
        size: "3.6 KB",
        content: `=====================================================
PROYEK: NENACARE — AI-POWERED K3 INCIDENT REPORTING
=====================================================
Tagline     : Pelaporan, Analisis Risiko AI & Monitoring Keselamatan Kerja Kafe
Tipe        : Full-Stack Web Application & K3 Safety Automation
Tech Stack  : PHP (OOP), MySQL & MySQLi, Google Gemini 2.5 Flash-Lite, Telegram Bot API
Pelaporan   : Form Publik + Opsi Pelaporan 100% Anonim
Visualisasi : Chart.js (Doughnut & Bar Chart)
Dokumen     : Dompdf (Cetak Laporan PDF A4 Landscape)

DESKRIPSI LENGKAP:
NenaCare adalah aplikasi web pelaporan dan monitoring keselamatan & kesehatan kerja (K3)
di lingkungan Nena Cafe. Aplikasi ini mengubah proses pelaporan manual yang lambat
dan enggan dilakukan staf menjadi workflow digital terstruktur:
Pelaporan ──▶ Analisis AI ──▶ Penentuan Prioritas ──▶ Notifikasi Telegram ──▶ Remote Action ──▶ Monitoring ──▶ Reporting PDF.

FITUR UTAMA:
1. Pelaporan Insiden K3 Cepat:
   - Input kategori insiden: Api & Gas, Kelistrikan, Lingkungan & Kebersihan, Ergonomi & APD.
   - Pilihan tipe pelapor: Staf Kafe atau Customer (Pengunjung).
2. Mode Laporan Anonim Berstandar Privasi:
   - Pengguna dapat memilih "Laporkan Secara Anonim". Sistem benar-benar mengosongkan nama
     dan tipe pelapor di database MySQL demi perlindungan privasi sejati.
3. AI Analyst (Google Gemini 2.5 Flash-Lite):
   - Bertindak sebagai auditor K3 spesialis F&B.
   - Menganalisis risiko kejadian secara kontekstual (Kategori + Lokasi + Deskripsi).
   - Menghasilkan tingkat prioritas (Tinggi, Normal, Rendah) dan rekomendasi langkah mitigasi.
   - Format output JSON terstruktur yang otomatis diparsing backend PHP.
4. Telegram Bot Integration & Remote Control:
   - Notifikasi seketika ke ponsel admin saat laporan baru dibuat.
   - Tombol inline [🚀 Proses] dan [✅ Selesai] memungkinkan admin mengubah status
     laporan langsung dari Telegram tanpa membuka browser.
5. Live Monitoring Feed & Status Workflow:
   - Feed real-time transparan dengan badge status: Menunggu ──▶ Diproses ──▶ Selesai.
6. Admin Dashboard & Visualisasi Chart.js:
   - Doughnut Chart untuk distribusi status dan Bar Chart untuk kategori insiden.
   - Indikator khusus untuk memantau akumulasi laporan Prioritas Tinggi.
7. Query-Level Multi-Parameter Filter:
   - Filter berdasarkan status, kategori, prioritas, dan rentang tanggal.
8. Halaman Detail & Catatan Internal Admin:
   - Timeline audit insiden dan form catatan investigasi tim operasional.
9. Ekspor Laporan Resmi ke PDF (Dompdf):
   - Dokumen format A4 landscape lengkap dengan header kafe, rekapitulasi, dan tabel audit.
`
      },
      {
        name: "nenacare_spec.txt",
        type: "file",
        extension: "txt",
        size: "2.5 KB",
        content: `SPESIFIKASI TEKNIS & ARSITEKTUR NENACARE:

1. BASIS DATA (db_nena_k3):
   - users         : id, username, password (hash), role ('admin', 'manajer')
   - laporan_k3    : id, pelapor, tipe_pelapor, is_anonim, kategori, lokasi,
                     deskripsi, prioritas, ai_saran, status, telegram_msg_id, created_at
   - catatan_admin : id, laporan_id, user_id, isi_catatan, created_at

2. STRUKTUR PROGRAM BERBASIS OOP (PHP):
   - AuthManager   : Login, Session PHP, Password Hashing, Role Validation, Logout
   - ReportManager : Input Validation, Gemini AI Client, Query Filtering,
                     Statistics Aggregation, Status Workflow, Telegram Webhook/API
   - Facility (Abstract Class):
     * ElectronicFacility (mesin kopi espresso, grinder, chiller, blender, pos)
     * FurnitureFacility (meja bar, kursi dining, kitchen counter, rak bahan)

3. INTEGRASI API:
   - Google Gemini 2.5 Flash-Lite: Temperature 0.2, structured JSON output
   - Telegram Bot API: sendMessage, editMessageText, inline_keyboard callback_data
   - Dompdf: Renderer HTML to PDF A4 Landscape support CSS print
`
      },
      {
        name: "laporan_k3_nena_cafe.csv",
        type: "file",
        extension: "csv",
        size: "1.2 KB",
        content: `ID,Tanggal,Kategori,Lokasi,Pelapor,Prioritas,Status,Saran AI
2312,2024-10-30 12:15,Api & Gas,Dapur Utama,Anonim,Tinggi,Menunggu,"Cabut regulator LPG dan buka ventilasi"
2311,2024-10-30 11:45,Kelistrikan,Area Bar POS,Staf Kafe,Normal,Diproses,"Bungkus isolasi karet dan matikan jalur listrik"
2310,2024-10-30 10:20,Lingkungan,Selasar Depan,Customer,Rendah,Selesai,"Bersihkan tumpahan sirup dan pasang wet floor sign"
2309,2024-10-29 18:30,Ergonomi & APD,Kitchen Cook,Staf Kafe,Normal,Selesai,"Sediakan sarung tangan tahan panas untuk oven"
`
      }
    ]
  },
  {
    name: "tatagih",
    type: "folder",
    description: "Smart Subscription Manager & AI Financial Assistant (Laravel 13)",
    previewImage: "/projects/tatagih.jpg",
    badge: "Full-Stack Web App / AI SaaS",
    items: [
      {
        name: "Tatagih.exe",
        type: "executable",
        extension: "exe",
        appId: "tatagih",
        projectId: "tatagih",
        icon: "tatagih",
        fileType: "Application",
        size: "14.2 MB",
        description: "Buka Tatagih Showcase di Chrome"
      },
      {
        name: "tatagih_overview.txt",
        type: "file",
        extension: "txt",
        size: "3.8 KB",
        content: `=====================================================
PROYEK: TATAGIH — SMART SUBSCRIPTION MANAGER
=====================================================
Tagline    : Kelola Langganan Lebih Cerdas, Temukan Kebocoran Finansial
Tipe       : Full-Stack Web Application & Financial SaaS
Tech Stack : PHP, Laravel 13, Laravel Blade, Tailwind CSS, Vite, JavaScript
Database   : MySQL
Visualisasi: Chart.js
AI Engine  : Google Gemini API (dengan Local Fallback Engine)
Notifikasi : Telegram Bot API (Webhook + Scheduler & Queue)
Testing    : PHPUnit & Feature Test Suite

DESKRIPSI:
Tatagih adalah aplikasi web Smart Subscription Manager yang dibuat untuk membantu
pengguna mengelola berbagai layanan berlangganan seperti streaming hiburan,
aplikasi produktivitas, cloud storage, layanan AI, dan langganan digital lainnya.

Tujuan utama project ini adalah membantu pengguna mengetahui berapa banyak uang
yang mereka keluarkan untuk subscription, mengingatkan jadwal pembayaran,
menemukan pengeluaran yang kurang efisien, serta memberikan insight mendalam
agar pengguna dapat mengelola langganan dengan lebih bijak.

FITUR-FITUR UTAMA:
1. Manajemen Subscription
   - Tambah, ubah, lihat, dan hapus data langganan.
   - Field lengkap: nama layanan, kategori, harga, siklus pembayaran,
     tanggal pembayaran, status, dan toggle auto-renewal.
   - Catat pembayaran yang sudah diselesaikan.
   - Pencarian instan dan filter berdasarkan kategori maupun status aktif/nonaktif.
   - Ekspor data subscription ke format CSV.

2. Dashboard Keuangan
   - Menampilkan jumlah subscription aktif dan estimasi pengeluaran bulanan/tahunan.
   - Menampilkan daftar pembayaran yang akan datang (upcoming bills).
   - Menampilkan riwayat pengeluaran interaktif dalam bentuk grafik (Chart.js).
   - Menampilkan distribusi pengeluaran berdasarkan proporsi kategori.
   - Kalender visual yang membantu melihat jadwal jatuh tempo pembayaran.

3. Tata Asisten — Analisis Keuangan Berbasis AI
   - Menganalisis pola subscription dan pengeluaran pengguna.
   - Menghasilkan Financial Health Score (skor kesehatan finansial).
   - Memberikan rekomendasi cerdas berdasarkan kebiasaan berlangganan.
   - Menghitung estimasi potensi penghematan.
   - Mempertimbangkan jumlah layanan, biaya bulanan, kategori, penggunaan paket,
     serta kemungkinan adanya subscription yang tumpang tindih.
   - Menggunakan integrasi AI Google Gemini.

4. Tata AI Chat
   - Interaksi percakapan langsung dengan Tata AI asisten finansial.
   - Context-aware: AI memahami konteks pengeluaran pengguna (total biaya,
     daftar langganan aktif, biaya terbesar, financial health score, potensi hemat).
   - Multi-session chat: percakapan dapat disimpan dalam beberapa sesi.
   - Mekanisme fallback offline/lokal jika API AI sedang tidak tersedia.

5. Pendeteksi Kebocoran Dana (Leak Detector)
   - Deteksi Overlapping Subscription (layanan dengan fungsi serupa/mirip).
   - Deteksi Vampire Spending (pengeluaran kecil yang sering terlupakan).
   - Estimasi potensi penghematan dan rekomendasi tindakan solutif.

6. Perbandingan Paket Subscription
   - Membandingkan pilihan paket subscription sebelum memutuskan berlangganan.
   - Menampilkan fitur, kuota, dan nilai dari masing-masing paket.

7. Smart Subscription Templates
   - Template siap pakai untuk layanan populer (Netflix, Spotify, ChatGPT Plus,
     YouTube Premium, Google One, GitHub Copilot, dll.) untuk input cepat 1-klik.

8. Fitur Patungan Subscription (Shared Bill)
   - Kelola subscription bersama teman (misal: paket Family).
   - Pembagian tagihan otomatis ke beberapa anggota.
   - Monitoring status pembayaran masing-masing anggota.
   - Anggota dapat mengunggah bukti pembayaran/transfer.
   - Pemilik subscription dapat memeriksa, menerima, atau menolak bukti bayar.
   - Sistem undangan grup patungan dan pembaruan siklus otomatis.

9. Sistem Pertemanan
   - Tambah teman via User Tag unik.
   - Daftar teman, permintaan pertemanan, dan pengelolaan relasi untuk patungan.

10. Notifikasi Telegram Bot
    - Terhubung dengan akun Telegram pengguna melalui bot Tatagih.
    - Reminder otomatis sebelum tanggal pembayaran (H-3 dan H-1).
    - Informasi nama layanan, nominal, tanggal, dan status auto-renewal.
    - Sistem webhook Telegram Bot API + background Laravel Scheduler & Queue.

11. Riwayat Pembayaran
    - Rekap seluruh transaksi pembayaran subscription.
    - Analisis jumlah transaksi, total pengeluaran, waktu, dan kategori.
    - Terintegrasi dengan statistik dan grafik keuangan.

12. Autentikasi dan Pengelolaan Akun
    - Sistem autentikasi Laravel (registrasi, login, lupa & reset password).
    - Manajemen profil, ganti password, hubungkan akun Telegram & nomor rekening.

13. Admin Dashboard
    - Dashboard pemantauan statistik jumlah pengguna, total subscription,
      subscription aktif, reminder terkirim, kategori populer, dan grafik pertumbuhan.
`
      },
      {
        name: "tatagih_spec.txt",
        type: "file",
        extension: "txt",
        size: "2.1 KB",
        content: `SPESIFIKASI TEKNIS & ARSITEKTUR TATAGIH:
=====================================================
Framework    : Laravel 13 (PHP 8.3+)
Frontend     : Laravel Blade, Tailwind CSS, Vite, JavaScript
Database     : MySQL 8.0 Relational
Visualisasi  : Chart.js
AI Service   : Google Gemini API (REST) + Local Rule Fallback Engine
Notifikasi   : Telegram Bot API (Webhook + Bot Secret)
Background   : Laravel Scheduler (Cron) & Laravel Queue Worker
Testing      : PHPUnit & Feature Test

ASPEK TEKNIS & ARSITEKTUR:
1. Controller Layer:
   SubscriptionController, DashboardController, SharedBillController,
   TataAiChatController, FriendController, TelegramWebhookController, AdminController.
2. Service Layer:
   - AiFinancialService: Engine analisis Gemini & contextual prompt injection.
   - LeakDetectionService: Heuristik overlapping & vampire spending.
   - TelegramNotificationService: Queue dispatcher notifikasi H-3 & H-1.
   - BillSplitService: Kalkulasi pembagian biaya & transisi siklus periode baru.
3. Middleware & Security:
   - Laravel Authentication & Session Guards.
   - AdminMiddleware untuk proteksi route Admin Dashboard.
   - TelegramWebhookSignature middleware.
4. Policy & Authorization:
   - SubscriptionPolicy & SharedBillPolicy memastikan data isolation antar akun.
5. Scheduled Jobs & Queue:
   - CheckUpcomingBillsCommand: Dicek tiap pagi via Laravel Scheduler.
   - SendSubscriptionReminderJob: Diproses di background queue.
6. Local Fallback Mechanism:
   - Saat Google Gemini API mengalami timeout/rate limit, sistem otomatis
     menghasilkan analisis finansial berbasis engine analitik data lokal.
`
      },
      {
        name: "tatagih_subscriptions_export.csv",
        type: "file",
        extension: "csv",
        size: "1.2 KB",
        content: `id,service_name,category,price,billing_cycle,due_date,auto_renewal,status,shared_group
1,Netflix Premium,Entertainment,186000,monthly,2024-10-20,true,active,Family Group (4 Members)
2,Spotify Family,Music & Audio,86900,monthly,2024-10-15,true,active,Teman Kampus (5 Members)
3,ChatGPT Plus,AI & Productivity,310000,monthly,2024-10-25,true,active,Personal
4,YouTube Premium,Entertainment,59000,monthly,2024-11-05,true,active,Personal
5,Google One 2TB,Cloud Storage,135000,monthly,2024-11-12,true,active,Personal
6,GitHub Copilot,Developer Tools,155000,monthly,2024-10-28,true,active,Personal
7,Adobe Creative Cloud,Design & Creative,620000,monthly,2024-11-01,false,active,Personal
`
      }
    ]
  },
  {
    name: "lintas",
    type: "folder",
    description: "Cross-Device Productivity Ecosystem (Android & Windows)",
    badge: "Cross-Device / Flutter",
    items: [
      {
        name: "Lintas.exe",
        type: "executable",
        extension: "exe",
        appId: "lintas",
        projectId: "lintas",
        icon: "lintas",
        fileType: "Application",
        size: "28.6 MB",
        description: "Buka Lintas Cross-Device Showcase di Chrome"
      },
      {
        name: "lintas_overview.txt",
        type: "file",
        extension: "txt",
        size: "3.2 KB",
        content: `=====================================================
PROYEK: LINTAS - CROSS-DEVICE PRODUCTIVITY ECOSYSTEM
=====================================================
Platform    : Android (Mobile Controller) & Windows (Companion Host)
Tech Stack  : Flutter, Dart, C++ Runner, Riverpod, GoRouter
Protokol    : Local HTTP & WebSocket Server (Port 8945)
Keamanan    : QR Code (Nonce, Expiration, Fingerprint) & SHA-256 Checksum

DESKRIPSI:
Lintas adalah ekosistem produktivitas lintas perangkat yang menghubungkan smartphone
Android dengan komputer Windows melalui jaringan lokal (LAN) secara langsung tanpa
ketergantungan server cloud pihak ketiga.

FITUR UTAMA:
1. Pairing Cepat via QR Code & LAN Auto-Discovery:
   Windows Companion menampilkan dynamic QR Code ber-token expiration & nonce.
   Ponsel Android memindai QR atau menggunakan auto-discovery jaringan lokal.
2. Remote Touchpad & Virtual Keyboard:
   Layar sentuh smartphone berubah menjadi trackpad presisi berlatensi ultra-rendah
   (<5ms via WebSocket) dan keyboard virtual lengkap dengan modifier (Ctrl/Alt/Shift/Win).
3. Instant Drop - Transfer File 2 Arah:
   Kirim file instan antara Android dan Windows dalam subnet LAN berkecepatan tinggi,
   dilengkapi Drop Zone Windows dan verifikasi integritas hash SHA-256 otomatis.
4. Universal Clipboard & URL Detector:
   Sinkronisasi teks clipboard dua arah secara real-time dengan pengenalan URL otomatis.
5. NearLock Security:
   Sistem penguncian PC otomatis ketika ponsel terdeteksi menjauh melewati grace period.
6. Presentation Mode:
   Remote kontrol slide nirkabel (Next, Prev, Black Screen, Timer) untuk kebutuhan meeting.
=====================================================`
      },
      {
        name: "lintas_spec.txt",
        type: "file",
        extension: "txt",
        size: "2.5 KB",
        content: `SPESIFIKASI TEKNIS & ARSITEKTUR LINTAS:
=====================================================
1. Core & Architecture:
   - Framework  : Flutter (Dart) & Native C++ Windows Runner
   - State Mgmt : Flutter Riverpod (StateNotifier & Provider)
   - Navigation : GoRouter dengan deep-linking per platform
   - Linting    : flutter_lints dengan standar static analysis ketat

2. Network & Communications:
   - Server Host: Windows Companion menjalankan server HTTP & WebSocket pada Port 8945
   - Client     : Android Controller terhubung melalui persistent WebSocket
   - Discovery  : UDP Broadcast lokal untuk Auto-Discovery tanpa ketik IP

3. Native Windows Win32 API Integration:
   - SendInput API : Menginjeksikan pergerakan mouse kursor dan ketukan keyboard
   - LockWorkStation : Mengunci sesi Windows secara native saat NearLock aktif

4. Security & Data Integrity:
   - Dynamic QR Payload: Berisi token kedaluwarsa, nonce acak, dan device fingerprint
   - File Hash Checksum: Verifikasi SHA-256 sebelum dan sesudah transfer
   - Zero-Cloud: Seluruh transmisi terisolasi di dalam subnet Wi-Fi lokal pengguna
=====================================================`
      },
      {
        name: "lintas_activity_log.txt",
        type: "file",
        extension: "txt",
        size: "1.4 KB",
        content: `[2024-11-02 09:14:20] [SERVER] Windows Companion started on 192.168.1.12:8945
[2024-11-02 09:14:22] [SECURITY] Generated Pairing QR Code (Nonce: x7f9a2, Exp: 15m)
[2024-11-02 09:14:35] [PAIRING] Device detected: Oppo A53 (Android 13) via QR Scan
[2024-11-02 09:14:36] [AUTH] Token verified. Device marked as TRUSTED client.
[2024-11-02 09:14:37] [WS] WebSocket established. Roundtrip latency: 3.8 ms.
[2024-11-02 09:16:10] [CLIPBOARD] Synced text from Android -> Windows clipboard.
[2024-11-02 09:18:42] [DROP] Receiving "Project_Demo.mp4" (148.5 MB) via LAN.
[2024-11-02 09:18:48] [DROP] SHA-256 Checksum MATCHED: e3b0c44298fc1c149afb...
[2024-11-02 09:22:15] [NEARLOCK] Phone proximity checked: -42 dBm (State: DEKAT).`
      }
    ]
  },
  {
    name: "neurofly",
    type: "folder",
    description: "Drosophila Connectome x Pong Simulation",
    badge: "AI & Simulation",
    items: [
      {
        name: "NeuroFly.exe",
        type: "executable",
        extension: "exe",
        appId: "neurofly",
        projectId: "neurofly",
        icon: "neurofly",
        fileType: "Application",
        size: "42.1 MB",
        description: "Buka NeuroFly Showcase di Chrome"
      },
      {
        name: "neurofly_overview.txt",
        type: "file",
        extension: "txt",
        size: "2.3 KB",
        content: `=====================================================
PROYEK: NEUROFLY - CONNECTOME BIOLOGICAL AI
=====================================================
Platform   : Web & WebGL
Stack      : TypeScript, Three.js, Leaky Integrate-and-Fire (LIF) Network

DESKRIPSI:
Simulasi biologis interaktif yang menghubungkan arsitektur sirkuit saraf mata
lalat buah (Drosophila Melanogaster) dengan gameplay Pong retro secara real-time.
`
      }
    ]
  },
  {
    name: "dompetq",
    type: "folder",
    description: "Fintech E-Wallet Mobile Application",
    previewImage: "/projects/dompetq.jpg",
    badge: "Mobile App",
    items: [
      {
        name: "DompetQ.exe",
        type: "executable",
        extension: "exe",
        appId: "dompetq",
        projectId: "dompetq",
        icon: "code",
        fileType: "Application",
        size: "22.4 MB",
        description: "Buka DompetQ Showcase di Chrome"
      },
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
    description: "Lost & Found Platform Berbasis QR Code",
    previewImage: "/projects/temuin.jpg",
    badge: "Full-Stack Mobile",
    items: [
      {
        name: "Temuin.exe",
        type: "executable",
        extension: "exe",
        appId: "temuin",
        projectId: "temuin",
        icon: "temuin",
        fileType: "Application",
        size: "18.5 MB",
        description: "Buka Temuin Showcase di Chrome"
      },
      {
        name: "tentang_temuin.txt",
        type: "file",
        extension: "txt",
        size: "2.8 KB",
        content: `=====================================================
PROYEK: TEMUIN - IDENTIFIKASI & PENEMU BARANG HILANG
=====================================================
Kategori : Mobile Application / Lost & Found Platform
Platform : Android & iOS (Flutter + Dart)
Backend  : PHP Native + PDO (REST API HTTP/JSON)
Database : MySQL / MariaDB (temuin_db)
Payment  : Midtrans Snap API (Rp15.000 Boost Postingan)
Auth     : BCRYPT + Custom HMAC-SHA256 Bearer Token

DESKRIPSI:
Temuin menghubungkan pemilik barang dan penemu melalui identitas barang berbasis QR Code.
Setiap barang memiliki stiker QR unik. Ketika ditemukan di area publik, QR dipindai
untuk mengirim laporan penemuan lengkap dengan snapshot lokasi GPS dan foto bukti langsung
ke notifikasi akun pemilik.

HIGHLIGHTS:
- QR Code Unik Tiap Item (qr_flutter & mobile_scanner)
- Pencatatan Titik Lokasi GPS saat Laporan dibuat (geolocator)
- Unggah Foto Bukti Penemuan Kamera Depan/Belakang (image_picker)
- Siklus Status Barang: Safe -> Lost -> Found -> Claimed
- Validasi Server Anti Self-Claim (Pemilik dilarang lapor temuan sendiri)
- Monetisasi Boost Postingan Rp15.000 via Midtrans Snap (SHA-512 Webhook)
- Web Admin Dashboard PHP untuk monitoring data pengguna & laporan
`
      },
      {
        name: "temuin_mockup.jpg",
        type: "file",
        extension: "jpg",
        size: "520 KB",
        imageUrl: "/projects/temuin.jpg",
        title: "Temuin Mobile QR & Found Report"
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
        name: "MakalahGenerator.exe",
        type: "executable",
        extension: "exe",
        appId: "makalah",
        projectId: "makalah",
        icon: "code",
        fileType: "Application",
        size: "12.8 MB",
        description: "Buka Makalah Generator Showcase di Chrome"
      },
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
LinkedIn    : https://linkedin.com/in/krisnaartha
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
6. Tatagih (Smart Subscription Manager & AI Financial Assistant — Laravel 13)
7. NenaCare (AI-Powered K3 Incident Reporting & Monitoring System — PHP OOP & Gemini)
8. ITB STIKOM Bali Plugin for TheoTown (Custom Isometric Pixel Art Educational Building)
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
      { name: "lintas_screen.jpg", type: "file", extension: "jpg", size: "610 KB", imageUrl: "/projects/lintas.jpg", title: "Lintas Cross-Device Ecosystem" },
      { name: "theotown_screen.jpg", type: "file", extension: "jpg", size: "620 KB", imageUrl: "/projects/theotown.jpg", title: "ITB STIKOM Bali TheoTown Gameplay" },
      { name: "nenacare_screen.jpg", type: "file", extension: "jpg", size: "580 KB", imageUrl: "/projects/nenacare.jpg", title: "NenaCare K3 Incident Dashboard" },
      { name: "tatagih_screen.jpg", type: "file", extension: "jpg", size: "540 KB", imageUrl: "/projects/tatagih.jpg", title: "Tatagih Web App Dashboard" },
      { name: "dompetq_screen.jpg", type: "file", extension: "jpg", size: "482 KB", imageUrl: "/projects/dompetq.jpg", title: "DompetQ Screen" },
      { name: "temuin_screen.jpg", type: "file", extension: "jpg", size: "520 KB", imageUrl: "/projects/temuin.jpg", title: "Temuin Screen" },
      { name: "makalah_screen.jpg", type: "file", extension: "jpg", size: "410 KB", imageUrl: "/projects/makalah.jpg", title: "Makalah Screen" }
    ]
  }
];

export const INTRO_NOTE_CONTENT = `======================================================================
  SELAMAT DATANG DI PORTOFOLIO INTERAKTIF SAYA (WINDOWS 11 EDITION)
======================================================================

Halo! 
Terima kasih banyak sudah meluangkan waktu untuk berkunjung.

Saya Anak Agung Ngurah Krisna Artha Wibawa (Agung Krisna), seorang 
Full-Stack Web & Mobile Developer asal Bali, Indonesia.
Pendidikan: Institut Teknologi dan Bisnis STIKOM Bali (Teknologi Informasi).

Aplikasi portofolio ini dirancang menyerupai antarmuka desktop Windows 11 
agar Anda dapat mengeksplorasi riwayat karya, proyek komersial, dan 
kemampuan teknis saya dengan cara yang lebih interaktif dan menyenangkan.

----------------------------------------------------------------------
 PANDUAN EKSPLORASI PORTOFOLIO:
----------------------------------------------------------------------
1.  Google Chrome & Project Showcase
   - Buka Google Chrome di desktop atau taskbar untuk melihat demo interaktif 
     aplikasi unggulan saya (Tatagih, Temuin, Lintas, NeuroFly, DompetQ, dll).
   - Ingin hiburan ringan? Ketik 'chrome://dino' di browser atau klik icon 
     Dino di desktop untuk memainkan T-Rex game offline!

2.  File Explorer (This PC)
   - Buka 'This PC' atau 'File Explorer' untuk melihat susunan berkas, 
     dokumentasi arsitektur tiap proyek, serta berkas sertifikat keahlian.

3.  LinkedIn & WhatsApp
   - Ingin terkoneksi atau menawarkan peluang kerja sama? 
     Klik icon LinkedIn atau WhatsApp untuk langsung terhubung dengan saya.

4.  Website Portofolio Utama
   - Klik shortcut 'krisnaartha.my.id' di desktop untuk langsung mengakses 
     website portofolio personal saya.

5.  Easter Egg & Kustomisasi
   - Buka Calculator dan ketik kode rahasia: 6969 lalu tekan '=' untuk membuka kejutan video rahasia!
   - Buka Settings untuk mengubah wallpaper Windows 11 sesuai preferensi Anda.

----------------------------------------------------------------------
 INFORMASI KONTAK RESMI:
----------------------------------------------------------------------
• Email     : agungkrisna.dev@gmail.com
• WhatsApp  : +62 812-3456-7890
• LinkedIn  : https://linkedin.com/in/krisnaartha
• Website   : https://krisnaartha.my.id
• Status    : Open for Full-Time (Onsite / Remote / Hybrid) & Freelance

Selamat menjelajah, semoga Anda menikmati pengalaman interaktif ini! ✨
======================================================================`;

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
    id: "file_explorer",
    name: "File Explorer",
    type: "app",
    app: "explorer",
    path: "Projects",
    icon: "explorer"
  },
  {
    id: "theotown_app",
    name: "ITB STIKOM TheoTown",
    type: "app",
    app: "theotown",
    icon: "theotown"
  },
  {
    id: "nenacare_app",
    name: "NenaCare (K3 Incident AI)",
    type: "app",
    app: "nenacare",
    icon: "nenacare"
  },
  {
    id: "tatagih_app",
    name: "Tatagih (Subscription)",
    type: "app",
    app: "tatagih",
    icon: "tatagih"
  },
  {
    id: "lintas_app",
    name: "Lintas (Cross-Device)",
    type: "app",
    app: "lintas",
    icon: "lintas"
  },
  {
    id: "sigap_app",
    name: "SIGAP (Keamanan HP)",
    type: "app",
    app: "sigap",
    icon: "sigap"
  },
  {
    id: "temuin_app",
    name: "Temuin (Lost & Found)",
    type: "app",
    app: "temuin",
    icon: "temuin"
  },
  {
    id: "bingkai_app",
    name: "Bingkai (Galeri Foto)",
    type: "app",
    app: "bingkai",
    icon: "bingkai"
  },
  {
    id: "notepad",
    name: "Pengantar.txt",
    type: "file",
    extension: "txt",
    app: "notepad",
    icon: "notepad",
    content: INTRO_NOTE_CONTENT
  },
  {
    id: "chrome_app",
    name: "Google Chrome",
    type: "app",
    app: "chrome",
    icon: "chrome"
  },
  {
    id: "krisnaartha_site",
    name: "krisnaartha.my.id",
    type: "shortcut",
    app: "krisnaartha_site",
    url: "https://krisnaartha.my.id",
    icon: "krisnaartha"
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    type: "shortcut",
    app: "linkedin",
    url: "https://linkedin.com/in/krisnaartha",
    icon: "linkedin"
  },
  {
    id: "whatsapp",
    name: "WhatsApp",
    type: "app",
    app: "whatsapp",
    icon: "whatsapp"
  },
  {
    id: "chrome_dino",
    name: "chrome://dino",
    type: "app",
    app: "dino",
    icon: "chrome_dino"
  },
  {
    id: "certificates",
    name: "Certificates",
    type: "app",
    app: "photos",
    icon: "image"
  },
  {
    id: "calculator",
    name: "Calculator",
    type: "app",
    app: "calculator",
    icon: "calculator"
  },
  {
    id: "settings",
    name: "Settings",
    type: "app",
    app: "settings",
    icon: "settings"
  },
  {
    id: "terminal",
    name: "Command Prompt",
    type: "app",
    app: "terminal",
    icon: "terminal"
  },
  {
    id: "recycle_bin",
    name: "Recycle Bin",
    type: "system",
    app: "recycle_bin",
    icon: "recycle-bin-full"
  }
];

export const RECYCLE_BIN_ITEMS = [
  {
    name: 'catatan_rahasia_terbuang.txt',
    type: 'file',
    extension: 'txt',
    size: '1.2 KB',
    originalLocation: 'C:\\Users\\KRISNA\\Documents',
    dateDeleted: '9/27/2026 11:42 PM',
    itemType: 'Text Document',
    content: `=======================================================
           [CATATAN RAHASIA // DEVELOPER HINT]
=======================================================

Status: Dibuang ke Recycle Bin
Prioritas: Rahasia

Catatan:
Jangan sampai lupa kode rahasia untuk membuka 
Easter Egg & Kejutan Spesial!

Petunjuk:
1. Buka aplikasi Kalkulator (Calculator) di desktop / taskbar.
2. Masukkan angka kode: 6969
3. Tekan '=' (atau tombol Enter).

Akan terbuka kejutan video rahasia pengembang!
=======================================================`
  },
  {
    name: '1. topologi.png',
    type: 'file',
    extension: 'png',
    size: '87 KB',
    originalLocation: 'C:\\Users\\KRISNA\\Downloads',
    dateDeleted: '9/11/2026 4:37 PM',
    itemType: 'PNG File',
    imageUrl: '/wallpapers/win11_bloom_light.jpg'
  },
  {
    name: '.trashed-1789969246-Screenshot_2026-07-12.jpg',
    type: 'file',
    extension: 'jpg',
    size: '497 KB',
    originalLocation: 'C:\\Users\\KRISNA\\Downloads\\file\\bbjd\\bb',
    dateDeleted: '9/16/2026 7:33 AM',
    itemType: 'JPG File',
    imageUrl: '/wallpapers/win11_bloom_dark.jpg'
  },
  {
    name: 'draft_desain_portofolio_v1.jpg',
    type: 'file',
    extension: 'jpg',
    size: '505 KB',
    originalLocation: 'C:\\Users\\KRISNA\\Downloads\\Archive\\portfolio',
    dateDeleted: '9/17/2026 1:24 PM',
    itemType: 'JPG File',
    imageUrl: '/wallpapers/win11_bloom_light.jpg'
  }
];

