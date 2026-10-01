export const PROJECTS_DATA = {
  theotown: {
    id: 'theotown',
    name: 'ITB STIKOM Bali TheoTown',
    tagline: 'Custom Isometric Pixel Art Educational Building Plugin for TheoTown',
    fullTitle: 'ITB STIKOM Bali — Building Plugin for TheoTown (Educational Mod)',
    category: 'Game Modding / Plugin Development / Isometric Pixel Art & Simulation',
    status: 'Game Plugin Showcase',
    period: '2024',
    liveUrl: 'https://forum.theotown.com',
    githubUrl: 'https://github.com/agungkrisna/theotown-stikom-bali',
    stack: [
      'TheoTown Plugin API',
      'JSON (code.json)',
      'Plugin Manifest (plugin.manifest)',
      'Pixel Art Graphics',
      'Isometric Projection (2.5D)',
      'Graphic Rendering (draw ground)',
      'Android & PC Cross-Platform',
      'Bilingual Documentation (ID/EN)'
    ],
    stats: [
      { label: 'Dimensi Bangunan', value: '5 × 5 Tile Isometric' },
      { label: 'Tipe Objek Game', value: 'Type: education' },
      { label: 'Kapasitas Mahasiswa', value: '2.500 Mahasiswa (High)' },
      { label: 'Radius Pengaruh', value: '700 Tile (City-Wide)' }
    ],
    photos: [
      {
        id: 'theo-ingame',
        title: 'Gameplay TheoTown: Penempatan Gedung Kampus ITB STIKOM Bali di Tengah Kota',
        caption: 'Representasi gedung kampus ITB STIKOM Bali Renon yang berdiri megah di atas lahan 5 × 5 tile dalam game simulasi kota TheoTown. Bangunan menyatu secara harmonis dengan jaringan jalan raya isometrik, pepohonan tropis, kendaraan piksel, dan pejalan kaki mahasiswa. Dilengkapi HUD info panel game yang menampilkan status aktif, tipe pendidikan tingkat universitas, kapasitas 2.500 mahasiswa, dan radius pengaruh edukasi 700 tile.',
        imageUrl: '/projects/theotown.jpg'
      },
      {
        id: 'theo-pixelart',
        title: 'Desain Asset Pixel Art Isometrik & Detail Arsitektur Bali (StikomBali.png)',
        caption: 'Asset visual utama StikomBali.png yang dibuat dengan pendekatan pixel art presisi sesuai standar proyeksi isometrik 2.5D TheoTown. Memadukan arsitektur modern kampus dengan ornamen tradisional Bali (atap tumpang bergaya kukul/meru, gerbang candi bentar, dan detail fasad jendela), dirancang proporsional agar tidak mengalami distorsi visual saat diputar atau diperbesar di dalam game.',
        imageUrl: '/projects/theotown-stikom.jpg'
      }
    ],
    problem: 'Dalam game simulasi tata kota TheoTown, katalog bangunan institusi pendidikan tinggi default sangat terbatas dan didominasi arsitektur bergaya barat generik. Permasalahan yang melatarbelakangi pembuatan plugin ini:\\n1. Minimnya Representasi Arsitektur Indonesia: Pemain yang ingin membangun kota virtual bernuansa Indonesia tidak memiliki gedung universitas lokal yang khas dengan ornamen arsitektur nusantara (seperti gaya Bali).\\n2. Kebanyakan Mod Sekadar Objek Dekorasi Pasif: Banyak modder hanya membuat bangunan bertipe dekorasi ("park" atau "decoration") yang bersifat kosmetik tanpa fungsi gameplay, sehingga tidak berkontribusi terhadap kebutuhan simulasi pendidikan kota.\\n3. Ketiadaan Panduan Cross-Platform yang Rapi: Komunitas pemain TheoTown terbagi antara pengguna Android (mobile) dan PC Windows. Banyak mod tidak menyertakan struktur manifest yang tepat atau dokumentasi instalasi yang jelas, menyebabkan mod gagal dimuat atau crash.',
    solution: 'ITB STIKOM Bali Building Plugin hadir sebagai game modification resmi berkualitas tinggi yang memadukan keindahan visual dengan fungsionalitas gameplay simulasi:\\n1. Custom Isometric Pixel Art (StikomBali.png): Menghadirkan representasi kampus ITB STIKOM Bali Renon dengan sentuhan arsitektur khas Bali (atap tumpang, ornamen kukul, gerbang candi), dioptimalkan untuk sudut pandang isometrik TheoTown.\\n2. Tipe Edukasi Fungsional (Type: education): Bukan sekadar pajangan, gedung dikonfigurasi langsung ke engine simulasi pendidikan dengan kapasitas 2.500 mahasiswa dan radius pengaruh 700 tile untuk meningkatkan skor edukasi kota.\\n3. Konfigurasi Standar code.json & plugin.manifest: Menggunakan skema JSON resmi TheoTown dengan ukuran 5 × 5 tile dan fitur ground rendering aktif (draw ground: true) agar pekarangan gedung menyatu mulus dengan tekstur tanah game.\\n4. Struktur Terstandarisasi & Multiplatform: Mendukung instalasi instan di perangkat Android maupun PC Windows, dilengkapi dokumentasi bilingual lengkap (Indonesia & Inggris) untuk komunitas global.',
    keyFeatures: [
      {
        title: 'Custom ITB STIKOM Bali Building (5 × 5 Tile)',
        desc: 'Menghadirkan representasi arsitektur kampus ITB STIKOM Bali Renon ke dalam dunia virtual TheoTown dengan ukuran tapak tanah 5 × 5 tile yang proporsional.'
      },
      {
        title: 'Fungsi Edukasi Fungsional (Type: education)',
        desc: 'Bangunan terdaftar secara resmi sebagai fasilitas pendidikan tinggi di engine TheoTown, memberikan kontribusi nyata terhadap pemenuhan kebutuhan edukasi kota.'
      },
      {
        title: 'Parameter Kapasitas 2.500 Mahasiswa',
        desc: 'Dikonfigurasi dengan education capacity low/high 2500, mampu menampung ribuan mahasiswa virtual untuk mengurangi angka putus sekolah dalam simulasi.'
      },
      {
        title: 'Radius Pengaruh Luas (Influence: 700 Tile)',
        desc: 'Memiliki parameter education influence 700 yang mencakup wilayah perkotaan luas, meningkatkan indeks literasi dan nilai tanah properti sekitar.'
      },
      {
        title: 'Desain Pixel Art Isometrik Presisi (StikomBali.png)',
        desc: 'Asset visual StikomBali.png digambar tangan dengan teknik pixel art yang mematuhi sudut proyeksi 2.5D isometrik khas TheoTown.'
      },
      {
        title: 'Identitas Budaya & Nuansa Arsitektur Bali',
        desc: 'Menampilkan ciri khas arsitektur Bali seperti atap bertingkat (tumpang), ornamen kukul, dan gerbang candi bentar yang menghadirkan atmosfer khas Indonesia.'
      },
      {
        title: 'Ground Rendering Aktif (draw ground: true)',
        desc: 'Mengaktifkan rendering tanah dasar agar pekarangan kampus, tanaman, dan trotoar berbaur sempurna dengan medan tanah di peta permainan.'
      },
      {
        title: 'Engine Configuration via code.json',
        desc: 'File konfigurasi berbasis JSON yang mengatur ID unik, frame grafis, dimensi lot, tipe objek, dan bobot statistik gameplay secara terstruktur.'
      },
      {
        title: 'Metadata Terverifikasi via plugin.manifest',
        desc: 'Menyimpan identitas resmi mod: Title "ITB STIKOM BALI", Author "Gekaaaaa", Versioning, dan deskripsi mod untuk integrasi ke Plugin Manager game.'
      },
      {
        title: 'Simulasi Aspek Edukasi Dinamis (Aspect 1000–2500)',
        desc: 'Parameter education aspect dinamis yang mempengaruhi efisiensi penyerapan ilmu dan kepuasan warga terhadap fasilitas pendidikan perkotaan.'
      },
      {
        title: 'Dokumentasi Lengkap Bilingual (README.md ID/EN)',
        desc: 'Disertai dokumentasi lengkap dalam dua bahasa (Bahasa Indonesia dan Bahasa Inggris) yang memuat deskripsi, fitur, screenshot, dan panduan instalasi.'
      },
      {
        title: 'Dukungan Instalasi Multiplatform (Android & PC)',
        desc: 'Dapat dipasang dengan mudah baik di smartphone Android (direktori files/plugins) maupun PC Windows (TheoTown/plugins).'
      }
    ]
  },
  nenacare: {
    id: 'nenacare',
    name: 'NenaCare',
    tagline: 'AI-Powered K3 Incident Reporting & Monitoring System',
    fullTitle: 'NenaCare — AI-Powered K3 Incident Reporting & Monitoring System',
    category: 'Full-Stack Web App / AI Automation / K3 Safety & Incident Management',
    status: 'Production Showcase',
    period: '2024',
    liveUrl: 'https://nenacare.demo.agungkrisna.dev',
    githubUrl: 'https://github.com/agungkrisna/nenacare',
    stack: [
      'PHP (OOP)',
      'MySQL & MySQLi',
      'Google Gemini 2.5 Flash-Lite API',
      'Telegram Bot API',
      'Chart.js',
      'Dompdf',
      'JavaScript',
      'HTML5 & CSS3',
      'Bootstrap Icons',
      'Composer'
    ],
    stats: [
      { label: 'Analisis AI Gemini', value: 'Prioritas & Tindakan Otomatis' },
      { label: 'Remote Notifikasi', value: 'Telegram Bot Interactive Action' },
      { label: 'Mode Pelaporan', value: 'Identitas Publik / 100% Anonim' },
      { label: 'Audit & Pelaporan', value: 'Ekspor PDF Landscape & Chart.js' }
    ],
    photos: [
      {
        id: 'nena-dash',
        title: 'Admin Live Monitoring Feed, Status Workflow & Statistik K3',
        caption: 'Pusat kendali dan monitoring insiden K3 Nena Cafe secara real-time. Menampilkan ringkasan KPI (Total Insiden, Menunggu, Diproses, Selesai, dan Prioritas Tinggi terdeteksi AI), Live Feed laporan insiden lengkap dengan kategori (Api & Gas, Kelistrikan, Lingkungan & Kebersihan, Ergonomi & APD), badge prioritas AI, serta visualisasi Chart.js status distribusi dan frekuensi kategori insiden.',
        imageUrl: '/projects/nenacare.jpg'
      }
    ],
    problem: 'Di lingkungan kafe dan industri F&B yang dinamis (seperti Nena Cafe), potensi bahaya keselamatan kerja (K3)—mulai dari kebocoran gas LPG, kompor dapur, kabel kelistrikan terbuka, lantai licin, hingga isu ergonomi—sering kali terlambat dilaporkan karena proses manual yang rumit. Selain itu, staf maupun pelanggan kerap enggan melapor karena khawatir identitasnya terekspos, sementara pihak pengelola kesulitan memilah mana insiden berisiko tinggi yang membutuhkan penanganan darurat tanpa adanya standarisasi prioritas.',
    solution: 'NenaCare mentransformasi penanganan keselamatan kerja menjadi sistem digital terpadu end-to-end: Pelaporan Mudah & Opsional Anonim → Analisis Risiko Otomatis berbasis Google Gemini 2.5 Flash-Lite → Notifikasi Cepat & Remote Control Status via Telegram Bot → Live Monitoring Dashboard dengan Visualisasi Chart.js → Dokumentasi Audit & Ekspor PDF Dompdf. Pengelola kafe mendapatkan peringatan dini seketika dengan rekomendasi tindakan mitigasi terukur, meminimalkan downtime dan menjaga keamanan operasional kafe secara proaktif.',
    keyFeatures: [
      {
        title: 'Sistem Pelaporan Insiden K3 F&B',
        desc: 'Formulir pelaporan responsif yang mencakup nama pelapor, tipe pelapor (Customer atau Staf Kafe), 4 kategori insiden (Api & Gas, Kelistrikan, Lingkungan & Kebersihan, Ergonomi & APD), lokasi kejadian, dan detail kronologi.'
      },
      {
        title: 'Mode Laporan Anonim Berstandar Privasi',
        desc: 'Fitur perlindungan identitas yang secara sistematis mengosongkan nama dan tipe pelapor di database MySQL, sehingga pelapor merasa aman untuk melaporkan kondisi bahaya tanpa takut diintimidasi.'
      },
      {
        title: 'AI Analyst Berbasis Google Gemini 2.5 Flash-Lite',
        desc: 'Setiap insiden diproses oleh AI dengan sistem prompt auditor K3 spesialis F&B untuk mengevaluasi risiko kejadian, menentukan skor prioritas (Tinggi, Normal, Rendah), dan menghasilkan saran tindakan mitigasi cepat.'
      },
      {
        title: 'Pemrosesan Output Terstruktur JSON',
        desc: 'AI mengembalikan data terstruktur format JSON yang secara otomatis diparsing oleh backend PHP dan disimpan ke database relasional untuk konsumsi dashboard dan bot Telegram.'
      },
      {
        title: 'Live Monitoring Feed & Visual Cards',
        desc: 'Halaman feed utama yang menampilkan aliran laporan insiden secara transparan dengan lencana kategori, indikator urgensi, status penanganan, dan ringkasan insight AI.'
      },
      {
        title: 'Status Workflow Terstandarisasi',
        desc: 'Manajemen siklus hidup laporan yang ketat dan teratur: Menunggu (laporan masuk) → Diproses (sedang ditangani) → Selesai (kondisi aman terkendali) dengan validasi status terpusat.'
      },
      {
        title: 'Manajemen Skala Prioritas & Alert Bahaya',
        desc: 'Pengelompokan prioritas insiden (Tinggi, Normal, Rendah) yang membantu manajemen memprioritaskan penanganan insiden darurat, didukung widget khusus untuk memantau akumulasi bahaya berprioritas tinggi.'
      },
      {
        title: 'Pusat Analitik & Visualisasi Chart.js',
        desc: 'Admin dashboard interaktif dengan Doughnut Chart untuk distribusi status laporan serta Bar Chart untuk perbandingan volume insiden per kategori fasilitas kafe.'
      },
      {
        title: 'Multi-Parameter Query-Level Filtering',
        desc: 'Fitur pencarian dan filter mendalam berdasarkan kombinasi status, kategori, prioritas, serta rentang tanggal awal dan akhir langsung pada kueri database MySQL.'
      },
      {
        title: 'Halaman Detail & Catatan Investigasi Admin',
        desc: 'Ruang investigasi mendalam per kasus insiden yang memungkinkan admin menulis catatan perkembangan lapangan (internal notes) dengan pencatatan ID admin dan timestamp.'
      },
      {
        title: 'Telegram Bot Notification & Remote Control Action',
        desc: 'Integrasi Telegram Bot dua arah: mengirim notifikasi instan laporan baru ke ponsel admin dan menerima respon tombol inline (🚀 Proses & ✅ Selesai) untuk mengubah status tanpa harus membuka web.'
      },
      {
        title: 'Ekspor Dokumen Laporan Resmi ke PDF (Dompdf)',
        desc: 'Pembuatan arsip laporan K3 berformat PDF A4 landscape otomatis sesuai filter yang dipilih, memuat header kafe, rangkuman statistik, analisis AI, dan tabel insiden komprehensif.'
      },
      {
        title: 'Autentikasi Session & Role-Based Access (Admin & Manajer)',
        desc: 'Sistem keamanan login terproteksi session PHP dengan verifikasi password hashing aman, membedakan hak akses operasional antara Admin kafe dan Manajer.'
      },
      {
        title: 'Arsitektur Bersih Berbasis OOP & Model Fasilitas Kafe',
        desc: 'Penerapan prinsip Object-Oriented Programming (OOP) dengan AuthManager, ReportManager, serta hierarki abstract class Facility (ElectronicFacility, FurnitureFacility) yang terstruktur dan mudah dikembangkan.'
      }
    ]
  },
  tatagih: {
    id: 'tatagih',
    name: 'Tatagih',
    tagline: 'Smart Subscription Manager & AI Financial Assistant',
    fullTitle: 'Tatagih — Smart Subscription Manager & AI Financial Assistant',
    category: 'Financial SaaS / AI Financial Analytics / Full-Stack Web App',
    status: 'Full-Stack Showcase',
    period: '2024',
    liveUrl: 'https://tatagih.demo.agungkrisna.dev',
    githubUrl: 'https://github.com/agungkrisna/tatagih',
    stack: [
      'PHP',
      'Laravel 13',
      'Laravel Blade',
      'Tailwind CSS',
      'Vite',
      'JavaScript',
      'MySQL',
      'Chart.js',
      'Google Gemini API',
      'Telegram Bot API',
      'Laravel Scheduler',
      'Laravel Queue',
      'PHPUnit & Feature Test'
    ],
    stats: [
      { label: 'Langganan Aktif', value: 'Streaming, AI, Cloud & Tools' },
      { label: 'Tata Asisten AI', value: 'Financial Health Score (Gemini)' },
      { label: 'Deteksi Kebocoran', value: 'Overlapping & Vampire Spending' },
      { label: 'Patungan / Split Bill', value: 'Auto-Split & Verifikasi Bukti' }
    ],
    photos: [
      {
        id: 'tatagih-dash',
        title: 'Dashboard Keuangan, Visualisasi Chart.js & Kalender Pembayaran',
        caption: 'Halaman dashboard utama menampilkan ringkasan subscription aktif, total pengeluaran bulanan (Rp 320.000) dan tahunan, daftar pembayaran terdekat (Netflix H-3, YouTube, ChatGPT), visualisasi grafik riwayat pengeluaran 6 bulan menggunakan Chart.js, diagram distribusi pengeluaran per kategori, serta kalender interaktif jadwal pembayaran.',
        imageUrl: '/projects/tatagih.jpg'
      }
    ],
    problem: 'Di era digital modern, hampir setiap orang memiliki banyak layanan berlangganan: streaming film dan musik, aplikasi produktivitas, cloud storage, layanan AI, software pekerjaan, hingga gym. Masalah utama yang sering dialami pengguna adalah:\\n1. Terlalu banyak subscription aktif yang tersebar sehingga sulit mengetahui total riil uang yang dikeluarkan setiap bulan maupun setahun.\\n2. Sulit mengingat tanggal pembayaran beragam layanan yang berbeda-beda, berisiko saldo rekening/kartu terpotong otomatis tanpa persiapan dana atau kelupaan membatalkan masa uji coba (trial).\\n3. Terjadinya inefisiensi finansial yang tersembunyi: overlapping subscriptions (memiliki beberapa layanan dengan fungsi serupa, seperti berlangganan 2-3 platform video streaming sekaligus padahal jam tonton sedikit) dan vampire spending (pengeluaran langganan kecil Rp20.000–Rp40.000 yang terasa sepele namun membengkak jika diakumulasikan bertahun-tahun).\\n4. Kerumitan mengelola langganan yang dipakai bersama teman (Family Plan), mulai dari pembagian tagihan yang sering manual, menagih satu per satu, memeriksa bukti transfer, hingga memperbarui siklus tiap bulan.',
    solution: 'Tatagih hadir sebagai Smart Subscription Manager berbasis web yang komprehensif untuk mengubah cara pengguna mengelola pengeluaran digital:\\n1. Sentralisasi Manajemen Subscription: Menyimpan seluruh langganan di satu tempat rapi dengan siklus bulanan/tahunan, status auto-renewal, pencatatan pembayaran, filter kategori, serta ekspor CSV.\\n2. Dashboard Finansial & Kalender: Visualisasi real-time pengeluaran bulanan dan tahunan, grafik riwayat pengeluaran Chart.js, distribusi kategori, serta kalender tanggal jatuh tempo.\\n3. Tata Asisten Berbasis AI Gemini: Menganalisis pola kebiasaan berlangganan, mengkalkulasi Financial Health Score, dan memberikan rekomendasi penghematan konkret hingga ratusan ribu rupiah.\\n4. Tata AI Chat Multi-Sesi: Chat interaktif yang paham konteks keuangan pengguna (total pengeluaran, tagihan termahal, skor kesehatan), dengan sesi percakapan tersimpan dan fallback lokal jika API AI gangguan.\\n5. Pendeteksi Kebocoran Dana: Algoritma cerdas yang mendeteksi overlapping services dan vampire spending secara otomatis dengan rekomendasi aksi.\\n6. Fitur Patungan & Split Bill: Membagi tagihan otomatis ke anggota, verifikasi bukti transfer pembayaran oleh pemilik, undangan via User Tag, dan auto-renewal siklus baru.\\n7. Notifikasi Proaktif Telegram Bot: Otomatisasi pengingat tagihan H-3 dan H-1 ke Telegram pengguna melalui Laravel Scheduler dan Queue tanpa membebani server.',
    keyFeatures: [
      {
        title: 'Manajemen Subscription Fleksibel & Ekspor CSV',
        desc: 'Pengguna dapat menambah, mengedit, melihat, dan menghapus langganan dengan field nama layanan, kategori, harga, siklus, tanggal jatuh tempo, toggle auto-renewal, riwayat bayar, pencarian, filter, dan unduh data CSV.'
      },
      {
        title: 'Dashboard Keuangan & Kalender Pembayaran (Chart.js)',
        desc: 'Menampilkan total langganan aktif, estimasi biaya bulanan/tahunan, upcoming bills, visualisasi tren pengeluaran 6 bulan via Chart.js, proporsi kategori, serta kalender tanggal jatuh tempo.'
      },
      {
        title: 'Tata Asisten — Analisis AI Gemini & Financial Health Score',
        desc: 'Menganalisis kebiasaan berlangganan untuk menghasilkan Financial Health Score (0-100), menghitung potensi penghematan dana, dan memberikan rekomendasi cerdas berbasis Google Gemini API.'
      },
      {
        title: 'Tata AI Chat Interaktif & Multi-Sesi',
        desc: 'Chat asisten finansial kontekstual yang memahami total biaya, langganan termahal, dan skor pengguna. Dilengkapi penyimpanan sesi percakapan serta fallback engine lokal saat API AI offline.'
      },
      {
        title: 'Pendeteksi Kebocoran Dana (Overlapping & Vampire Spending)',
        desc: 'Mendeteksi otomatis layanan dengan fungsi yang mirip/tumpang tindih serta pengeluaran kecil berulang yang tidak disadari, lengkap dengan kalkulasi potensi efisiensi.'
      },
      {
        title: 'Perbandingan Paket Subscription',
        desc: 'Menyajikan komparasi komprehensif fitur, harga, dan nilai dari berbagai opsi paket langganan sebelum pengguna memutuskan memilih layanan.'
      },
      {
        title: 'Smart Subscription Templates',
        desc: 'Menyediakan template siap pakai untuk layanan populer (Netflix, Spotify, ChatGPT Plus, YouTube, Google One, dll.) sehingga input langganan dapat dilakukan instan dalam 1 klik.'
      },
      {
        title: 'Fitur Patungan Subscription & Split Bill',
        desc: 'Membagi biaya paket Family secara merata/otomatis ke anggota, memantau status bayar, memfasilitasi upload dan verifikasi bukti transfer oleh pemilik, serta pembaruan siklus tagihan otomatis.'
      },
      {
        title: 'Sistem Pertemanan Berbasis User Tag',
        desc: 'Mempermudah pencarian dan penambahan teman menggunakan format User Tag unik (@krisna#2024), daftar teman, serta konfirmasi pertemanan untuk mendukung grup patungan.'
      },
      {
        title: 'Notifikasi Proaktif Telegram Bot (Scheduler & Queue)',
        desc: 'Mengirimkan pengingat tagihan H-3 dan H-1 langsung ke ponsel via Telegram Bot API dengan detail nominal dan auto-renewal, diproses via Laravel Scheduler dan background Queue.'
      },
      {
        title: 'Riwayat Pembayaran & Audit Transaksi',
        desc: 'Rekap seluruh pembayaran yang telah dilakukan berdasarkan jumlah transaksi, nominal, tanggal, dan kategori yang tersinkronisasi ke grafik analitik.'
      },
      {
        title: 'Autentikasi Aman & Pengelolaan Profil Akun',
        desc: 'Registrasi, login, lupa/reset password berbasis Laravel Auth, pengelolaan profil, penggantian password, serta integrasi Telegram ID dan info rekening pembayaran untuk patungan.'
      },
      {
        title: 'Admin Dashboard & Monitoring Operasional',
        desc: 'Panel kontrol administrator untuk melihat statistik total pengguna, subscription terdaftar, subscription aktif, jumlah reminder terkirim, kategori populer, dan laju pertumbuhan pengguna.'
      }
    ],
    architecture: 'Tatagih dikembangkan dengan arsitektur Laravel 13 yang memisahkan Controller, Model, Service Layer, Middleware, Policy, Request Validation, Job, dan Database Migration secara terstruktur. Frontend dibangun menggunakan Laravel Blade yang diintegrasikan dengan Tailwind CSS dan Vite untuk kompilasi aset yang cepat, serta Chart.js untuk visualisasi data interaktif. Database MySQL dirancang dengan relasi komprehensif antara users, subscriptions, categories, payments, friendships, subscription_shares, notifications, telegram_connections, dan ai_chat_sessions. Logika bisnis kompleks diisolasi ke Service Layer (AiFinancialService, LeakDetectionService, TelegramNotificationService, BillSplitService). Sistem otorisasi diamankan menggunakan Laravel Policies untuk memastikan data pengguna terisolasi secara ketat. Proses pengiriman reminder dijalankan secara terjadwal menggunakan Laravel Scheduler dan diproses secara asynchronous di background menggunakan Laravel Queue Worker agar tidak menghambat response time web. Fitur AI mengintegrasikan Google Gemini API dengan mekanisme fallback lokal berbasis aturan data sehingga aplikasi tetap responsif saat layanan eksternal mengalami gangguan.',
    asciiDiagram: `┌────────────────────────────────────────────────────────────────────────┐
│                   TATAGIH - SISTEM ARSITEKTUR FULL-STACK               │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
    ┌───────────────────────────────┴───────────────────────────────┐
    │ Frontend Layer (Laravel Blade + Tailwind CSS + Vite + JS)      │
    │ ├─ Financial Dashboard & Calendar View (Chart.js Visualization)│
    │ ├─ Tata Asisten & Tata AI Chat UI (Multi-Session Interface)   │
    │ ├─ Leak Detector View (Overlapping & Vampire Spending Alerts) │
    │ ├─ Subscription Sharing View (Split Bill & Transfer Proof)    │
    │ └─ Admin Dashboard (User Stats, Metrics, & Category Trends)   │
    └───────────────────────────────┬───────────────────────────────┘
                                    │ HTTP / CSRF / Session Auth
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│ Laravel 13 Backend Architecture                                        │
│                                                                        │
│ ┌────────────────────────────────────────────────────────────────────┐ │
│ │ Controller & Request Validation Layer                              │ │
│ │ ├─ SubscriptionController, DashboardController, SharedBillController│ │
│ │ ├─ TataAiChatController, FriendController, AdminController         │ │
│ │ └─ TelegramWebhookController (Webhook Secret Verification)          │ │
│ └──────────────────────────────────┬─────────────────────────────────┘ │
│                                    │                                   │
│ ┌──────────────────────────────────┴─────────────────────────────────┐ │
│ │ Middleware & Policy Authorization (Data Isolation Guard)          │ │
│ └──────────────────────────────────┬─────────────────────────────────┘ │
│                                    │                                   │
│ ┌──────────────────────────────────┴─────────────────────────────────┐ │
│ │ Service Layer (Business Logic & Heuristics)                        │ │
│ │ ├─ AiFinancialService (Gemini API Client + Fallback Engine)        │ │
│ │ ├─ LeakDetectionService (Overlapping & Vampire Heuristics)         │ │
│ │ ├─ TelegramNotificationService (Message Builder & Webhook Handler) │ │
│ │ └─ BillSplitService (Group Cost Allocation & Cycle Rotator)        │ │
│ └──────────────┬───────────────────┬───────────────────┬─────────────┘ │
│                │                   │                   │               │
│                ▼                   ▼                   ▼               │
│ ┌────────────────────────┐ ┌────────────────┐ ┌──────────────────────┐ │
│ │ Laravel Scheduler      │ │ Laravel Queue  │ │ Fallback AI Engine   │ │
│ │ (Daily Cron 08:00 WIB) │ │ Worker (Async) │ │ (Local Rule-based)   │ │
│ └──────────────┬─────────┘ └───────┬────────┘ └──────────────────────┘ │
└────────────────┼───────────────────┼───────────────────────────────────┘
                 │                   │
                 ▼                   ▼
    ┌────────────────────────┐ ┌────────────────────────────────────────┐
    │ Telegram Bot API       │ │ Google Gemini API (REST)               │
    │ (H-3 & H-1 Reminders)  │ │ (Context-Aware Financial Analysis)     │
    └────────────────────────┘ └────────────────────────────────────────┘
                 │
                 ▼
┌────────────────────────────────────────────────────────────────────────┐
│ MySQL Database Schema (tatagih_db)                                     │
│ ├─ users (auth, profile, user_tag, role: user/admin)                   │
│ ├─ subscriptions (user_id, name, category, price, cycle, due_date)    │
│ ├─ payments (subscription_id, amount, paid_at, receipt_file)           │
│ ├─ subscription_shares (sub_id, owner_id, member_id, split_cost, proof)│
│ ├─ friendships (user_id, friend_id, status: pending/accepted)         │
│ ├─ telegram_connections (user_id, chat_id, is_active, webhook_meta)   │
│ └─ ai_chat_sessions & messages (session_id, user_id, role, content)   │
└────────────────────────────────────────────────────────────────────────┘`
  },

  lintas: {
    id: 'lintas',
    name: 'Lintas',
    tagline: 'Cross-Device Productivity Ecosystem (Android Mobile & Windows Companion)',
    fullTitle: 'Lintas — Cross-Device Productivity Ecosystem',
    category: 'Cross-Device System / Local Networking / Flutter & Native Windows Integration',
    status: 'Production Showcase',
    period: '2024',
    liveUrl: 'https://lintas.demo.agungkrisna.dev',
    githubUrl: 'https://github.com/agungkrisna/lintas',
    stack: [
      'Flutter & Dart',
      'C++ / Windows Runner',
      'Flutter Riverpod',
      'GoRouter',
      'Local HTTP & WebSocket (Port 8945)',
      'SHA-256 Checksum (crypto)',
      'QR Code (qr_flutter & mobile_scanner)',
      'Native Windows Win32 API',
      'file_picker & open_filex',
      'shared_preferences'
    ],
    stats: [
      { label: 'Arsitektur Sistem', value: 'Local Client-Server (Zero Cloud)' },
      { label: 'Port Komunikasi', value: 'Port 8945 (HTTP & WebSocket)' },
      { label: 'Verifikasi Integritas', value: 'SHA-256 Checksum Matching' },
      { label: 'Proteksi NearLock', value: 'Auto-Lock PC by Phone Proximity' }
    ],
    photos: [
      {
        id: 'lintas-companion',
        title: 'Windows Companion Host — Status Server Port 8945, Pairing QR Code & Drop Zone',
        caption: 'Dashboard pusat kendali Lintas di Windows 11. Menampilkan status local server aktif pada port 8945 (HTTP & WebSocket), alamat IP lokal 192.168.1.12, dynamic QR Code ber-token expiration untuk pairing cepat Android, daftar trusted client yang terhubung, indikator status NearLock, serta Drop Zone pengiriman berkas langsung dari PC.',
        imageUrl: '/projects/lintas.jpg'
      }
    ],
    problem: 'Dalam aktivitas kerja sehari-hari dan meeting profesional, pengguna laptop Windows sering kali harus bolak-balik antara smartphone dan komputer secara terpisah:\\n1. Ketergantungan Server Cloud untuk Hal Sepele: Mengirim foto, dokumen, atau menyalin sebaris teks dari HP ke PC biasanya harus melewati aplikasi chat (WhatsApp/Telegram) atau cloud storage (Google Drive). Hal ini memakan kuota internet, memperlambat proses, dan mengorbankan privasi data lokal.\\n2. Inefisiensi Kontrol Jarak Jauh: Ketika laptop terhubung ke proyektor saat presentasi atau terhubung ke TV saat menonton video dari sofa, pengguna terpaksa harus terus berdiri di depan mouse dan keyboard fisik PC.\\n3. Kerentanan Keamanan Saat Meninggalkan Meja: Pengguna sering lupa menekan shortcut Win + L untuk mengunci komputer saat beranjak dari meja kerja di kantor atau kafe, meninggalkan data dan sesi kerja terbuka untuk orang lain.\\n4. Aplikasi Pihak Ketiga Penuh Iklan & Lag: Solusi komersial yang beredar di pasar umumnya berbayar, sarat iklan, mewajibkan akun cloud pihak ketiga, atau memiliki jeda input WebSocket yang lambat.',
    solution: 'Lintas hadir sebagai ekosistem produktivitas lintas perangkat yang menghubungkan smartphone Android dan komputer Windows secara langsung melalui jaringan Wi-Fi lokal (LAN) tanpa server pihak ketiga:\\n1. Server Lokal & Pairing QR Cepat: Windows Companion menjalankan server lokal HTTP dan WebSocket berlatensi rendah pada port 8945. Pairing dilakukan instan dengan memindai QR Code ber-token expiration, nonce, dan device fingerprint, atau via LAN Auto-Discovery.\\n2. Remote Touchpad & Virtual Keyboard: Mengubah layar smartphone menjadi trackpad presisi (klik kiri/kanan, scroll, drag-and-drop) dan keyboard virtual lengkap dengan tombol modifier (Ctrl, Alt, Shift, Win key) via Windows Input API.\\n3. Instant Drop 2 Arah & Integritas SHA-256: Mengirim berkas antara Android dan Windows dalam subnet LAN berkecepatan tinggi, disertai Drop Zone Windows dan verifikasi checksum SHA-256 otomatis sebelum dan sesudah transfer demi mencegah kerusakan file.\\n4. Universal Clipboard & URL Detector: Sinkronisasi teks clipboard dua arah secara real-time dengan pengenalan format tautan web yang dapat langsung dibuka di browser tujuan.\\n5. NearLock PC Security: Memantau kedekatan smartphone pengguna. Ketika sinyal melemah dan ponsel berada di luar jangkauan melewati grace period, sistem otomatis mengunci Windows workstation.\\n6. Presentation Mode & Activity History: Remote kontrol slide (Next, Prev, Black Screen, Timer) untuk kebutuhan meeting, serta catatan aktivitas riwayat dan manajemen trusted devices.',
    keyFeatures: [
      {
        title: 'Pairing Cepat via QR Code & Token Kedaluwarsa',
        desc: 'Mekanisme pairing instan dengan memindai QR Code dari layar Windows yang berisi alamat IP lokal, port 8945, session identifier, nonce, dan token ber-expiration.'
      },
      {
        title: 'LAN Auto-Discovery Bebas Ketik IP Manual',
        desc: 'Fitur pemindaian otomatis perangkat di jaringan Wi-Fi lokal yang sama, menghubungkan Android dan PC tanpa mengharuskan pengguna menghafal alamat IP.'
      },
      {
        title: 'Remote Touchpad Berpresisi Tinggi & Multi-Touch Gesture',
        desc: 'Mengubah layar ponsel menjadi touchpad nirkabel responsif dengan dukungan pergerakan kursor halus, klik kiri/kanan, scroll dua jari, dan drag-and-drop.'
      },
      {
        title: 'Virtual Keyboard Lengkap dengan Tombol Modifier',
        desc: 'Keyboard virtual ponsel yang mendukung input teks, Enter, Backspace, Tab, tombol panah navigasi, serta kombinasi modifier Ctrl, Alt, Shift, dan Windows Key.'
      },
      {
        title: 'Instant Drop — Transfer File 2 Arah Jaringan Lokal',
        desc: 'Transfer file dua arah (Android ➔ Windows & Windows ➔ Android) melalui jaringan lokal tanpa internet, dilengkapi Drop Zone dan informasi speed serta ETA.'
      },
      {
        title: 'Verifikasi Integritas File Berbasis Hash SHA-256',
        desc: 'Sistem menghitung hash SHA-256 sebelum dan sesudah pengiriman berkas, memvalidasi integritas data agar file yang diterima 100% identik tanpa korupsi.'
      },
      {
        title: 'Universal Clipboard & Deteksi URL Cerdas',
        desc: 'Sinkronisasi riwayat clipboard dua arah secara real-time antar perangkat dengan kemampuan mendeteksi tautan web (URL) untuk dibuka langsung di browser.'
      },
      {
        title: 'NearLock — Penguncian PC Otomatis Berdasarkan Jarak',
        desc: 'Memantau kedekatan smartphone pengguna dan secara otomatis mengunci sistem Windows (LockWorkStation) saat ponsel terdeteksi menjauh melewati grace period.'
      },
      {
        title: 'Mode Presentasi & Timer Durasi Presentasi',
        desc: 'Mengubah smartphone menjadi remote presentasi nirkabel (Next/Prev slide, Start/Exit, Black Screen) yang dilengkapi stopwatch timer pemantau durasi bicara.'
      },
      {
        title: 'Remote PC Control via Low-Latency WebSocket',
        desc: 'Protokol komunikasi real-time dua arah yang memungkinkan pengiriman instruksi mouse, keyboard, lock, dan volume dengan jeda transmisi minimal (<12ms).'
      },
      {
        title: 'Windows Companion Dashboard & Lintas Drop Zone',
        desc: 'Aplikasi desktop Windows yang menyajikan status server lokal, monitoring client terhubung, display QR pairing, toggle NearLock, dan area drag-and-drop file.'
      },
      {
        title: 'Device Management & Trusted Devices List',
        desc: 'Pengelolaan daftar perangkat yang pernah dipasangkan dengan rincian nama perangkat, sistem operasi, status online/offline, IP, dan timestamp koneksi terakhir.'
      },
      {
        title: 'Auto Reconnect dengan Exponential Backoff',
        desc: 'Algoritma pemulihan koneksi otomatis saat jaringan terputus sementara, mengurangi kebutuhan pengguna untuk melakukan pairing ulang secara manual.'
      },
      {
        title: 'Integrasi Native Windows API (SendInput & LockWorkStation)',
        desc: 'Menghubungkan aplikasi Flutter secara langsung dengan Windows API melalui C++ runner untuk mengeksekusi kontrol kursor mouse dan keamanan workstation.'
      }
    ]
  },

  neurofly: {
    id: 'neurofly',
    name: 'NeuroFly',
    tagline: 'Drosophila Visual Connectome × Pong System',
    fullTitle: 'NeuroFly — Drosophila Visual Neural Circuit in Pong Control',
    category: 'Computational Neuroscience & Experimental Systems',
    status: 'Research & Experimental Showcase',
    period: '2024',
    liveUrl: 'https://neurofly.agungkrisna.dev',
    githubUrl: 'https://github.com/agungkrisna/neurofly',
    stack: ['Python', 'neuPrint API', 'Janelia MaleCNS v1.0', 'NumPy', 'NetworkX', 'HTML5 Canvas'],
    stats: [
      { label: 'Referensi Dataset', value: 'Janelia MaleCNS v1.0' },
      { label: 'Neuron Visual Lobe', value: '438 Teridentifikasi' },
      { label: 'Koneksi Sinaptik Terarah', value: '2.199 Terverifikasi' },
      { label: 'Kontak Sinapsis Total', value: '12.282 Hubungan' }
    ],
    photos: [
      {
        id: 'neurofly-circuit',
        title: 'Topologi Graf Konektom Visual Lobe Drosophila',
        caption: 'Visualisasi interkoneksi 438 neuron visual Drosophila beserta bobot kontak sinaptik hasil ekstraksi langsung dari database Janelia Research Campus via platform neuPrint.',
        mockupType: 'neurofly-graph',
        imageUrl: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=1200&q=80'
      },
      {
        id: 'neurofly-pathway',
        title: 'Sirkuit Deteksi Gerak Elementer (T4, T5, Mi1, Tm3)',
        caption: 'Pemodelan skema interneuron medula (Mi1, Tm3) yang menyediakan delay temporal untuk sel deteksi gerak terarah T4 dan T5 sebelum menuju lobula.',
        mockupType: 'neurofly-circuit',
        imageUrl: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80'
      },
      {
        id: 'neurofly-pong',
        title: 'Simulasi Autopilot Pong Berbasis Sinyal Neuromorfik',
        caption: 'Antarmuka simulasi Pong interaktif di mana paddle dikendalikan oleh akumulasi potensial aksi dari sirkuit saraf visual biologis untuk melacak posisi bola.',
        mockupType: 'neurofly-sim',
        imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80'
      },
      {
        id: 'neurofly-metrics',
        title: 'Matriks Bobot Sinapsis & Pelacakan Objek LC11',
        caption: 'Distribusi kuantitatif kekuatan sinapsis dan vektor pemrosesan neuron proyeksi lobula LC11 dalam mendeteksi objek kecil yang bergerak cepat.',
        mockupType: 'neurofly-matrix',
        imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80'
      }
    ],
    problem: 'Model kecerdasan buatan komersial saat ini memerlukan komputasi tensor berat dan energi yang sangat besar untuk mengenali gerak visual dan mengambil keputusan kontrol sederhana. Sebaliknya, sistem visual biologis serangga seperti lalat buah (Drosophila melanogaster) mampu mendeteksi gerak dan bermanuver secara lincah dalam hitungan milidetik dengan konsumsi daya hanya beberapa mikrowatt.',
    solution: 'NeuroFly mengeksplorasi representasi sirkuit saraf visual biologis Drosophila dari dataset konektom MaleCNS v1.0 Janelia Research Campus untuk mengendalikan paddle pada permainan klasik Pong. Dengan memetakan sirkuit deteksi gerak alami (T4, T5, LC11), proyek ini membuktikan bahwa jalur konektom terstruktur dapat memandu agen reaktif secara efisien tanpa memerlukan training artificial neural network berat.',
    keyFeatures: [
      {
        title: 'Konektom Biologis Riil',
        desc: 'Menggunakan dataset MaleCNS v1.0 hasil rekonstruksi mikroskop elektron Janelia dengan 438 neuron visual lobe kanan dan 12.282 kontak sinaptik.'
      },
      {
        title: 'Model Deteksi Gerak (EMD)',
        desc: 'Menerapkan komputasi Hassenstein-Reichardt correlator berdasarkan jalur neuron T4 (on-motion) dan T5 (off-motion).'
      },
      {
        title: 'Pelacakan Target LC11',
        desc: 'Memanfaatkan respons sel Lobula Columna 11 (LC11) yang secara biologis terspesialisasi mengenali objek kecil bergerak melawan latar belakang.'
      },
      {
        title: 'Transduksi Sinyal Motorik',
        desc: 'Mengonversi diferensial potensial aksi sinaptik menjadi sinyal translasi paddle atas dan bawah pada permainan Pong secara real-time.'
      },
      {
        title: 'Visualisasi Konektom Interaktif',
        desc: 'Menampilkan topologi jaringan dan jalur aliran sinyal antar neuron untuk kebutuhan edukasi dan analisis riset.'
      }
    ],
    architecture: 'Data konektivitas diekstraksi dari server neuPrint Janelia menggunakan Cypher query. Data diproses menggunakan Python, NumPy, dan NetworkX untuk membentuk adjacency matrix berbobot. Engine simulasi Pong membaca vektor keluaran neuron motorik untuk memperbarui posisi paddle dengan kecepatan 60fps.'
  },
  temuin: {
    id: 'temuin',
    name: 'Temuin',
    tagline: 'Platform Pelacak & Penemu Barang Hilang Berbasis QR Code',
    fullTitle: 'Temuin — Aplikasi Pelacak & Penemu Barang Hilang Berbasis QR Code',
    category: 'Mobile Application / Lost & Found Platform / Full-Stack Application',
    status: 'Production Prototype',
    period: '2024',
    liveUrl: 'https://github.com/agungkrisna/temuin',
    githubUrl: 'https://github.com/agungkrisna/temuin',
    stack: [
      'Flutter',
      'Dart',
      'Material 3',
      'PHP Native',
      'PDO',
      'MySQL',
      'Midtrans Snap',
      'qr_flutter',
      'mobile_scanner',
      'geolocator',
      'image_picker',
      'shared_preferences',
      'Custom Bearer Token'
    ],
    stats: [
      { label: 'Identitas Barang', value: 'QR Code Unik Tiap Item' },
      { label: 'Siklus Status', value: 'Safe → Lost → Found → Claimed' },
      { label: 'Pencatatan Temuan', value: 'GPS Snapshot & Foto Bukti' },
      { label: 'Monetisasi', value: 'Rp15.000 Boost via Midtrans' }
    ],
    photos: [
      {
        id: 'temuin-home',
        title: 'Home Screen — Feed Barang & Manajemen Inventaris',
        caption: 'Halaman utama menampilkan daftar barang milik pengguna beserta status keamanannya (Safe / Lost), ringkasan laporan aktif, tombol tambah barang baru, dan akses cepat ke pemindai QR.',
        imageUrl: '/projects/temuin.jpg'
      }
    ],
    problem: 'Barang berharga yang tertinggal atau tercecer di ruang publik (kunci motor, dompet, tas, dokumen) sering kali sulit dikembalikan karena penemu tidak memiliki saluran komunikasi langsung kepada pemilik sah tanpa mengekspos data pribadi. Selain itu, titik lokasi penemuan sering tidak terdokumentasi dengan akurat dan pemilik tidak memiliki sistem terstruktur untuk memantau status barang miliknya.',
    solution: 'Temuin menyediakan infrastruktur digital pelacak barang hilang melalui alur: Pemilik Barang → QR Code → Penemu → Laporan → Lokasi GPS → Notifikasi In-App → Pemilik. Setiap barang diberi stiker QR unik yang jika dipindai penemu akan membuka formulir pelaporan dengan snapshot lokasi GPS dan foto bukti, langsung memberitahu pemilik secara real-time.',
    keyFeatures: [
      {
        title: 'QR Code Unik Tiap Barang (qr_flutter)',
        desc: 'Menghasilkan stiker QR Code unik sebagai identitas digital penghubung barang fisik ke sistem tanpa menampilkan data kontak pribadi pemilik secara terbuka.'
      },
      {
        title: 'Pemindai Kamera Instan (mobile_scanner)',
        desc: 'Memanfaatkan kamera smartphone untuk membaca kode QR pada barang temuan secara cepat dan langsung memicu alur pelaporan penemuan.'
      },
      {
        title: 'Snapshot Titik Lokasi GPS (geolocator)',
        desc: 'Mencatat koordinat latitude dan longitude tepat pada saat laporan penemuan dibuat untuk membantu pemilik mengenali lokasi barang (bukan live tracking kontinu).'
      },
      {
        title: 'Dokumentasi Foto Bukti (image_picker)',
        desc: 'Penemu dapat menyertakan foto kondisi barang saat ditemukan sebagai bukti fisik autentik yang tersimpan di sistem.'
      },
      {
        title: 'Siklus Status Barang Terstruktur',
        desc: 'Mengelola siklus hidup status barang secara jelas dan bertahap: Safe (Aman) → Lost (Hilang) → Found (Ditemukan) → Claimed (Selesai/Diambil).'
      },
      {
        title: 'Validasi Server Anti Self-Claim',
        desc: 'Logika bisnis backend yang memvalidasi bahwa pemilik dilarang melaporkan barang miliknya sendiri sebagai barang yang ia temukan.'
      },
      {
        title: 'Sistem Notifikasi In-App Otomatis',
        desc: 'Server secara otomatis membuat record notifikasi saat laporan penemuan berhasil dibuat sehingga pemilik langsung menerima peringatan di aplikasinya.'
      },
      {
        title: 'Autentikasi Aman & Custom Bearer Token',
        desc: 'Password pengguna dienkripsi dengan BCRYPT dan otorisasi API menggunakan custom token bertanda tangan HMAC-SHA256 dengan secret key server.'
      },
      {
        title: 'Monetisasi Boost Postingan (Midtrans Snap)',
        desc: 'Dukungan pembayaran digital Rp15.000 untuk menaikkan prioritas barang hilang menjadi featured/premium dengan verifikasi signature SHA-512 webhook di server.'
      },
      {
        title: 'Web Admin Dashboard (PHP Native)',
        desc: 'Panel kontrol terpusat bagi administrator untuk memantau data pengguna, daftar inventaris barang terdaftar, dan audit rekapitulasi laporan kehilangan.'
      }
    ],
    architecture: 'Temuin dirancang dengan arsitektur Full-Stack yang memisahkan aplikasi mobile (Flutter & Dart dengan Material 3) dari backend server (PHP Native dengan PDO) dan database relasional (MySQL / MariaDB temuin_db). Komunikasi network ditangani secara terpusat oleh ApiClient class melalui REST API HTTP/JSON. Sistem pembayaran terintegrasi dengan Midtrans Snap API dan diamankan menggunakan verifikasi signature SHA-512 pada webhook backend sebelum mengubah status is_premium barang.',
    asciiDiagram: `Pemilik Barang                     Penemu Barang
      │                                  │
  [Daftar & QR]                     [Scan QR Code]
      │                                  │
      ▼                                  ▼
┌────────────────────────────────────────────────────────┐
│ Flutter Mobile App (Android & iOS)                     │
│ ├─ qr_flutter / mobile_scanner (QR Management)         │
│ ├─ geolocator (GPS Snapshot saat Laporan Dibuat)       │
│ ├─ image_picker (Foto Bukti Penemuan & Profil)         │
│ ├─ shared_preferences (Token & Local Cache Session)    │
│ └─ ApiClient (Network Layer HTTP/JSON REST API)        │
└───────────────────────────┬────────────────────────────┘
                            │
              HTTP / JSON Bearer Auth
                            │
                            ▼
┌────────────────────────────────────────────────────────┐
│ PHP REST API Backend (PDO & Architecture Services)     │
│ ├─ Auth Service (BCRYPT + Custom HMAC-SHA256 Token)    │
│ ├─ Items & Reports Service (Business Logic Validation) │
│ ├─ Notification Engine (In-App Alert ke Pemilik)       │
│ └─ Midtrans Payment Handler (Webhook SHA-512 Verify)   │
└─────────────┬───────────────────────────┬──────────────┘
              │                           │
              ▼                           ▼
┌───────────────────────────┐   ┌────────────────────────┐
│ MySQL Database (temuin_db)│   │ Midtrans Snap API      │
│ ├─ users                  │   │ (Payment Gateway)      │
│ ├─ items (safe/lost/found)│   │ Rp15.000 Boost Post    │
│ ├─ reports (lat, lng, pic)│   └────────────────────────┘
│ └─ notifications          │
└───────────────────────────┘
              ▲
              │
┌─────────────┴─────────────┐
│ Web Admin Dashboard (PHP) │
│ (Monitoring & Data Audit) │
└───────────────────────────┘`
  },
  dompetq: {
    id: 'dompetq',
    name: 'DompetQ',
    tagline: 'Fintech E-Wallet Mobile Application',
    fullTitle: 'DompetQ — Secure Digital Wallet & Financial Tracker',
    category: 'Mobile Application & Fintech',
    status: 'Portfolio Project Showcase',
    period: '2023',
    liveUrl: 'https://demo.dompetq.app',
    githubUrl: 'https://github.com/agungkrisna/dompetq',
    stack: ['Flutter', 'Riverpod', 'Node.js', 'PostgreSQL', 'Redis', 'Biometric Auth'],
    stats: [
      { label: 'Fitur Utama', value: 'QRIS & Split Bill' },
      { label: 'Keamanan', value: 'Biometric & PIN Encryption' },
      { label: 'Latency Transaksi', value: '< 200ms' },
      { label: 'Analitik Keuangan', value: 'Monthly Budget Breakdown' }
    ],
    photos: [
      {
        id: 'dompetq-dash',
        title: 'Dashboard Keuangan & Saldo Real-Time',
        caption: 'Tampilan saldo utama, aksi cepat transfer, scan QRIS, top-up saldo, dan rekap mutasi transaksi harian.',
        imageUrl: '/projects/dompetq.jpg'
      }
    ],
    problem: 'Pencatatan pengeluaran harian dan pengelolaan saldo e-wallet sering terpecah-pecah di berbagai aplikasi, menyulitkan pengguna dalam mengontrol batas anggaran bulanan.',
    solution: 'DompetQ memadukan dompet digital dengan pelacak keuangan cerdas, transaksi QRIS instan, dan fitur split-bill otomatis yang memudahkan pembagian beban tagihan bersama.',
    keyFeatures: [
      {
        title: 'Transaksi QRIS Instan',
        desc: 'Mendukung pembayaran merchant dan transfer antar pengguna dengan validasi PIN serta biometrik sidik jari.'
      },
      {
        title: 'Split-Bill Otomatis',
        desc: 'Membagi tagihan belanja bersama teman secara merata atau proporsional hanya dengan beberapa ketukan.'
      },
      {
        title: 'Analitik Budgeting Bulanan',
        desc: 'Visualisasi grafik pengeluaran berdasarkan kategori kebutuhan primer, sekunder, dan hiburan.'
      }
    ],
    architecture: 'Frontend dibangun menggunakan Flutter dengan manajemen state Riverpod. Backend microservices berbasis Node.js dan PostgreSQL dengan isolasi database transaksi ACID yang aman.'
  },
  makalah: {
    id: 'makalah',
    name: 'Makalah Generator',
    tagline: 'AI Academic Draft & Citation Assistant',
    fullTitle: 'Makalah Generator — Smart Research & Paper Assistant',
    category: 'Web Application & Generative AI',
    status: 'Portfolio Project Showcase',
    period: '2024',
    liveUrl: 'https://makalah-gen.vercel.app',
    githubUrl: 'https://github.com/agungkrisna/makalah-generator',
    stack: ['Next.js 14', 'TypeScript', 'TailwindCSS', 'OpenAI GPT-4', 'LaTeX Engine'],
    stats: [
      { label: 'Model AI', value: 'GPT-4 Academic Pipeline' },
      { label: 'Standar Sitasi', value: 'APA 7th, IEEE, Harvard' },
      { label: 'Format Ekspor', value: 'PDF & LaTeX Source' },
      { label: 'Waktu Draf', value: '< 45 Detik' }
    ],
    photos: [
      {
        id: 'makalah-dash',
        title: 'Editor AI Penulisan Draf Akademik & Sitasi',
        caption: 'Antarmuka pembuat kerangka riset dengan asisten AI yang merumuskan latar belakang, tinjauan pustaka, dan sitasi standar akademik.',
        imageUrl: '/projects/makalah.jpg'
      }
    ],
    problem: 'Penyusunan kerangka awal draf penelitian dan pengorganisasian daftar pustaka sering kali memakan waktu berhari-hari bagi mahasiswa dan peneliti.',
    solution: 'Makalah Generator mengotomatisasi penyusunan outline riset dan penataan referensi sitasi secara terstruktur sesuai kaidah penulisan ilmiah standar.',
    keyFeatures: [
      {
        title: 'AI Academic Prompting',
        desc: 'Memandu perumusan rumusan masalah, hipotesis, dan metode penelitian ilmiah.'
      },
      {
        title: 'Format Sitasi Otomatis',
        desc: 'Mendukung format sitasi standar APA edisi ke-7, IEEE, dan Harvard secara tepat.'
      }
    ],
    architecture: 'Dibangun di atas Next.js 14 App Router, TypeScript, dan integrasi streaming response OpenAI GPT-4 API dengan sanitasi teks ketat.'
  },
  sigap: {
    id: 'sigap',
    name: 'SIGAP',
    tagline: 'Sistem Gerak Aman dari Pencurian',
    fullTitle: 'SIGAP — Sistem Gerak Aman dari Pencurian (Mobile Security)',
    category: 'Mobile Application / Mobile Security / Flutter',
    status: 'Production Prototype',
    period: '2024',
    liveUrl: 'https://github.com/agungkrisna/sigap',
    githubUrl: 'https://github.com/agungkrisna/sigap',
    stack: [
      'Flutter',
      'Dart',
      'Provider',
      'Sensors Plus',
      'Battery Plus',
      'Camera',
      'Geolocator',
      'Shared Preferences',
      'Volume Controller',
      'Wakelock Plus',
      'Vibration',
      'Flutter Ringtone Player',
      'Permission Handler',
      'URL Launcher'
    ],
    stats: [
      { label: 'Konsep Sistem', value: 'Detect → Alert → Lock' },
      { label: 'Motion Threshold', value: 'Δ >= 2.0 (XYZ Stream)' },
      { label: 'Hardware Sensor', value: 'Accelerometer & Charger' },
      { label: 'Respons Darurat', value: '100% Vol Watchdog + Cam/GPS' }
    ],
    photos: [
      {
        id: 'sigap-home',
        title: 'Home Screen — Status Keamanan & Kontrol Utama',
        caption: 'Dashboard interaktif menampilkan status keamanan terkini (Disarmed / Armed), sakelar proteksi gerak & charger, tombol aktivasi utama, serta menu riwayat dan pengaturan.',
        imageUrl: '/projects/sigap.jpg'
      }
    ],
    problem: 'Pengguna dapat meninggalkan smartphone di suatu tempat, misalnya di meja, ruangan, atau area publik. Jika smartphone kemudian diangkat, dipindahkan, atau charger dilepas secara paksa ketika sistem sedang aktif, aplikasi dapat mendeteksi kondisi tersebut dan memberikan respons berupa alarm serta pengumpulan bukti insiden.',
    solution: 'SIGAP dirancang sebagai sistem keamanan smartphone lokal berbasis Flutter & Dart dengan siklus Detect → Alert → Lock → Record → Review. Memanfaatkan sensor gerak accelerometer, status charger baterai, ringtone alarm loop, volume watchdog 100%, getaran, layar darurat immersiveSticky, autentikasi PIN lokal, serta snapshot bukti kamera depan dan GPS.',
    keyFeatures: [
      { title: 'Motion Detection', desc: 'Mendeteksi pergerakan fisik perangkat dari stream accelerometer sumbu XYZ terhadap baseline awal dengan threshold 2.0.' },
      { title: 'Charger Removal Detection', desc: 'Memonitor status baterai dan memicu alarm darurat saat kabel charger dicabut paksa saat armed.' },
      { title: '5-Second Countdown', desc: 'Jeda penempatan 5 detik untuk meletakkan smartphone pada permukaan datar sebelum pemantauan aktif.' },
      { title: 'Loud Alarm Ringtone', desc: 'Memutar ringtone alarm terus-menerus secara looping melalui flutter_ringtone_player.' },
      { title: 'Volume Lock Watchdog', desc: 'Mengunci level volume pada 100% dan mengembalikannya otomatis jika volume ditekan turun di bawah 98%.' },
      { title: 'Vibration Alert', desc: 'Menghasilkan getaran darurat berulang via vibration package selama kondisi alert berlangsung.' },
      { title: 'Emergency PIN Lock', desc: 'Layar darurat immersiveSticky yang hanya dapat dinonaktifkan dengan memasukkan PIN lokal yang benar.' },
      { title: 'GPS Snapshot Evidence', desc: 'Mengambil koordinat latitude/longitude darurat berakurasi medium dalam 6 detik dan menghasilkan Google Maps URL.' },
      { title: 'Intruder Front Photo', desc: 'Mengambil satu foto otomatis kamera depan saat alarm terpicu dan menyimpannya secara lokal di direktori aplikasi.' },
      { title: 'Incident History Log', desc: 'Menyimpan riwayat hingga 50 security event terbaru secara lokal menggunakan SharedPreferences.' },
      { title: 'Emergency Contact Launcher', desc: 'Membuka aplikasi WhatsApp atau SMS perangkat untuk mengirim pesan peringatan darurat ke kerabat.' },
      { title: 'Interactive Tutorial', desc: 'Panduan 4 tahap operasional di dalam aplikasi untuk memandu pengguna dalam memanfaatkan sistem keamanan.' }
    ],
    architecture: 'Dibangun di atas Flutter & Dart menggunakan arsitektur MultiProvider untuk memisahkan logic keamanan (SecurityProvider) dari presentasi UI. Komponen hardware (sensors_plus, battery_plus, camera, geolocator, volume_controller, wakelock_plus, vibration) diorkestrasi melalui service terisolasi (CameraEvidenceService, EmergencyLocationService, SecurityStorageService) dan disimpan ke local persistence SharedPreferences.',
    asciiDiagram: `User
  │
  ▼
Home Screen / Alarm Lock Screen
  │
  ▼
SecurityProvider (State Management & Orchestration)
  │
  ▼
┌────────────────────────────────────────────────────────┐
│ Security State Machine                                 │
│ Disarmed ──(Countdown 5s)──▶ Armed ──────────────────┐ │
│   ▲                                 │ (Threshold 2.0)│ │
│   │ (PIN Verify)                    ▼                │ │
│   └───────────────────────────── Alert ◀─────────────┘ │
└────────────────────────────────────────────────────────┘
        │
        ├───────────────┬────────────────┬───────────────┐
        ▼               ▼                ▼               ▼
   Sensors Plus   Battery Plus        Alarm           Local PIN
  Accelerometer   Charger Unplug   Ringtone Loop    4-8 Digits
   (XYZ Delta)      Detection       100% Vol Lock     Verify
                                      Vibration
                                         │
                                         ▼
                                Evidence Processing
                                  ┌──────┴──────┐
                                  ▼             ▼
                             Geolocator       Camera
                           (GPS Snapshot) (Front Photo)
                                  │             │
                                  └──────┬──────┘
                                         ▼
                                   SecurityEvent
                                  (Model Instance)
                                         │
                                         ▼
                                Shared Preferences
                                  (Local Storage)
                                         │
                                         ▼
                               Evidence History View`,
    challenges: [
      {
        title: '1. Sensor Calibration',
        desc: 'Accelerometer menghasilkan fluktuasi data kontinu halus saat ponsel diam di atas meja.',
        solution: 'Countdown 5 detik memberi jeda stabilisasi, disusul pembacaan event awal sebagai baseline referensi dinamis dengan motionThreshold = 2.0.'
      },
      {
        title: '2. Hardware Permissions',
        desc: 'Akses kamera dan lokasi GPS memerlukan izin runtime yang berpotensi ditolak atau layanan GPS nonaktif.',
        solution: 'Menggunakan permission_handler dengan graceful fallback: alarm tetap beroperasi optimal dan status sensor yang tidak tersedia dicatat di log.'
      },
      {
        title: '3. Alarm Persistence',
        desc: 'Alarm berisiko dibungkam seketika dengan menekan tombol volume fisik turun atau tombol back.',
        solution: 'Kombinasi ringtone looping, getaran, volume watchdog (otomatis kembali ke 100% jika < 98%), dan UI mode immersiveSticky.'
      },
      {
        title: '4. State Management',
        desc: 'Listener sensor yang berjalan di luar jam proteksi dapat memboroskan baterai dan memicu false-alarm.',
        solution: 'Mengisolasi stream subscription di SecurityProvider sehingga sensor hanya memantau saat state tepat di kondisi Armed.'
      },
      {
        title: '5. Evidence Processing',
        desc: 'Pengambilan GPS, foto kamera depan, dan pembuatan log harus berjalan simultan saat alarm tanpa membekukan UI.',
        solution: 'Menjalankan eksekusi bukti async: capture kamera depan resolusi medium, timeout GPS 6 detik (fallback last known position), dan pembuatan SecurityEvent.'
      },
      {
        title: '6. Local Persistence',
        desc: 'Riwayat insiden dan bukti foto harus tetap tersedia saat aplikasi ditutup tanpa backend cloud.',
        solution: 'Menyimpan foto di direktori aplikasi internal dan serialisasi JSON maksimal 50 SecurityEvent ke SharedPreferences.'
      }
    ],
    outcome: 'SIGAP menghasilkan prototipe sistem keamanan perangkat yang mengintegrasikan sensor gerak, status charger, alarm, autentikasi PIN, GPS, kamera, dan pencatatan insiden dalam satu aplikasi mobile.'
  },
  bingkai: {
    id: 'bingkai',
    name: 'Bingkai',
    tagline: 'Membantu yang berserakan kembali beraturan.',
    fullTitle: 'Bingkai — Aplikasi Galeri Foto Komputer Lokal (Privasi Penuh)',
    category: 'Desktop Utility / Local-First Photo Gallery / Python & Alpine.js',
    status: 'Production Prototype',
    period: '2024',
    liveUrl: 'https://github.com/agungkrisna/bingkai',
    githubUrl: 'https://github.com/agungkrisna/bingkai',
    stack: [
      'Python',
      'FastAPI',
      'SQLite',
      'Alpine.js',
      'Tailwind CSS',
      'Pillow-WebP',
      'Gamepad API',
      'Local Wi-Fi Remote'
    ],
    stats: [
      { label: 'Privasi Data', value: '100% Offline (Local-First)' },
      { label: 'Kontrol Jarak Jauh', value: 'Stick Gamepad & HP Wi-Fi' },
      { label: 'Kurasi Foto', value: 'Swipe Mode (Tinder-Style)' },
      { label: 'Optimasi Memori', value: 'Pendeteksi Foto Kembar' }
    ],
    photos: [
      {
        id: 'bingkai-home',
        title: 'Galeri Utama — Tampilan Foto Cepat & Folder Lokal Terhubung',
        caption: 'Halaman beranda Bingkai menyajikan seluruh foto dari folder D:/Photos dalam grid modern yang rapi. Foto dimuat secepat kilat berkat caching thumbnail WebP tanpa membebani memori laptop.',
        imageUrl: '/projects/bingkai.jpg'
      }
    ],
    problem: 'Kita semua punya folder D:/Photos atau Pictures di laptop yang isinya ribuan foto tak beraturan. Merapikannya terasa melelahkan karena harus klik satu per satu di depan meja kerja. Ingin pakai layanan Cloud seperti Google Photos, tapi takut privasi bocor atau malas menunggu upload berjam-jam untuk file bergiga-giga. Ditambah lagi, melihat foto di depan monitor pakai mouse terasa kaku dan kurang santai.',
    solution: 'Bingkai bekerja 100% di dalam komputer pengguna secara offline (Local-First). Foto tidak dipindah, tidak diduplikasi, dan sama sekali tidak diunggah ke internet. Bingkai hanya "membaca" folder tersebut dan menyajikannya dalam tampilan galeri modern yang super cepat. Pengguna juga bisa mengontrol galeri foto komputernya dari jarak jauh—cukup rebahan di sofa sambil menikmati kenangan menggunakan Smartphone atau Stick Gamepad (PlayStation/Xbox).',
    keyFeatures: [
      {
        title: 'Rebahan Mode (Gamepad & Remote Support)',
        desc: 'Hubungkan Stick Game (PlayStation/Xbox) ke PC, atau buka IP komputermu di browser HP (Wi-Fi). Kamu bisa menggeser foto, zoom, dan merapikan galeri di layar monitor langsung dari sofa.'
      },
      {
        title: 'Tinder untuk Foto (Swipe Mode)',
        desc: 'Merapikan foto semudah main Tinder. Swipe kanan (atau tekan tombol A di gamepad) untuk simpan ke Favorit. Swipe kiri untuk buang ke Tong Sampah. Bersih-bersih galeri jadi sangat menyenangkan.'
      },
      {
        title: 'Pendeteksi Foto Kembar (Duplicate Finder)',
        desc: 'Sering nyimpen foto yang sama berkali-kali? Bingkai bisa mendeteksi foto yang kembar identik dan membantumu menghapus salah satunya agar memori laptop tidak penuh.'
      },
      {
        title: 'Album Virtual (Tanpa Makan Memori)',
        desc: 'Kamu bisa mengelompokkan foto liburan ke dalam sebuah "Album" tanpa harus menggandakan atau memindahkan file aslinya. Hemat penyimpanan.'
      },
      {
        title: 'Tong Sampah Anti-Panik (Safe Trash)',
        desc: 'Foto yang dihapus tidak langsung hilang. Semuanya masuk ke Tong Sampah bawaan aplikasi. Salah hapus? Tinggal Restore (kembalikan), foto akan kembali ke folder aslinya.'
      },
      {
        title: 'Pemindaian Kilat (Pillow-WebP Caching)',
        desc: 'Bingkai memindai foto dan membuat thumbnail kecil agar galeri bisa dibuka secepat kilat (tanpa lag).'
      }
    ],
    architecture: 'Meskipun tampilannya seperti aplikasi web modern (Single Page Application) yang mulus, Bingkai sebenarnya berjalan secara lokal 100% di komputermu. Menggunakan backend Python & FastAPI yang sangat cepat dan ringan, database SQLite yang menyimpan seluruh metadata rapi di dalam satu file lokal, antarmuka glassmorphism modern Alpine.js & Tailwind CSS tanpa loading ulang halaman, serta image processing pipeline Pillow-WebP yang mengubah foto besar menjadi pratinjau kecil super cepat.',
    asciiDiagram: `┌────────────────────────────────────────────────────────┐
│            Laptop / Komputer Pengguna                  │
│  Folder Asli: D:/Photos (100% Offline & Aman)          │
└───────────────────────────┬────────────────────────────┘
                            │ (Hanya Membaca Folder)
                            ▼
┌────────────────────────────────────────────────────────┐
│ Python & FastAPI Local Backend (Ringan & Cepat)        │
│ ├─ Pillow-WebP Engine: Buat Thumbnail Kilat (Anti-Lag) │
│ ├─ SQLite Database: Simpan Album Virtual & Metadata    │
│ ├─ Duplicate Finder: Temukan Foto Kembar Identik       │
│ └─ Local Wi-Fi HTTP Server (Akses Remote dari HP)      │
└───────────────────────────┬────────────────────────────┘
                            │
               WebSocket / HTTP Jaringan Lokal
                            │
      ┌─────────────────────┴─────────────────────┐
      ▼                                           ▼
┌───────────────────────────┐   ┌────────────────────────┐
│ Layar Monitor PC          │   │ Kendali Dari Sofa      │
│ (Alpine.js + Tailwind)    │   │ ├─ Stick Gamepad       │
│ ├─ Galeri Foto Modern     │   │ │  (PlayStation/Xbox)  │
│ ├─ Tinder Swipe Mode      │   │ └─ Smartphone via Wi-Fi│
│ └─ Tong Sampah Anti-Panik │   │    (Remote Web App)    │
└───────────────────────────┘   └────────────────────────┘`
  },
  dino: {
    id: 'dino',
    name: 'chrome://dino',
    isDino: true,
    tagline: 'T-Rex Offline Runner Game',
    fullTitle: 'chrome://dino — Chrome T-Rex Dinosaur Game',
    category: 'Built-in Mini Game',
    status: 'Playable Arcade Game',
    period: 'Arcade',
    liveUrl: 'chrome://dino',
    githubUrl: 'https://github.com/chromium/chromium',
    stack: ['HTML5 Canvas', 'Vanilla JavaScript', 'Web Audio API', 'Retro Pixel Art'],
    stats: [
      { label: 'Kontrol', value: 'Spasi / Panah Atas / Bawah' },
      { label: 'Mode', value: 'Siklus Siang & Malam' },
      { label: 'Audio', value: '8-bit Synthesizer Sound' },
      { label: 'Fisika', value: 'Gravitasi & Kecepatan Adaptif' }
    ],
    photos: []
  },
  krisnaartha: {
    id: 'krisnaartha',
    name: 'portofolio.krisnaartha.my.id',
    isExternalIframe: true,
    iframeUrl: 'https://portofolio.krisnaartha.my.id',
    tagline: 'Personal Portfolio & Showcase',
    fullTitle: 'portofolio.krisnaartha.my.id — Personal Portfolio',
    category: 'Live Portfolio Web',
    status: 'Live Website',
    period: '2024',
    liveUrl: 'https://portofolio.krisnaartha.my.id',
    githubUrl: 'https://github.com/agungkrisna',
    stack: ['Portfolio Web', 'Full Stack', 'Cloud & DevOps'],
    stats: [],
    photos: []
  }
};
