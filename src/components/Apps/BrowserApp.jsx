import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, ArrowRight, RotateCw, Lock, Star, ExternalLink, 
  Send, ShieldCheck, Download, Code2, Layers, Cpu,
  CheckCircle2, AlertCircle, Clock, Smartphone, Monitor, Brain,
  ChevronRight, ChevronDown, Plus, X, ZoomIn, Info, FolderGit2, BookOpen, Share2,
  SkipBack, Pause, SkipForward
} from 'lucide-react';
import { WinIcon } from '../Common/WinIcon';
import { playClickSound } from '../../utils/sound';
import { useWindow } from '../Windows/WindowContext';
import './BrowserApp.css';

const PROJECTS_DATA = {
  tatagih: {
    id: 'tatagih',
    name: 'Tatagih',
    tagline: 'Subscription & Recurring Bill Manager',
    fullTitle: 'Tatagih — Automated Subscription & Recurring Bill Tracker',
    category: 'Financial / Productivity SaaS',
    status: 'Portfolio Project Showcase',
    period: '2024',
    liveUrl: 'https://tatagih.demo.agungkrisna.dev',
    githubUrl: 'https://github.com/agungkrisna/tatagih',
    stack: ['Laravel 10', 'PHP 8.2', 'MySQL', 'Bootstrap 5', 'Telegram Bot API', 'REST API'],
    stats: [
      { label: 'Total Monthly Tracked', value: 'Rp 320.000' },
      { label: 'Upcoming Bills', value: '3 Active' },
      { label: 'Reminder Precision', value: 'H-3 & H-1 via Telegram' },
      { label: 'Cycle Support', value: 'Monthly & Yearly' }
    ],
    photos: [
      {
        id: 'tatagih-dash',
        title: 'Dashboard Ringkasan Pengeluaran & Tagihan Bulanan',
        caption: 'Halaman beranda utama menampilkan total komitmen bulanan (Rp 320.000) dan daftar tagihan terdekat (Netflix Rp 186.000, YouTube Premium Rp 59.000, Game Pass Rp 75.000) serta status jatuh tempo.',
        mockupType: 'tatagih-dashboard',
        imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80'
      },
      {
        id: 'tatagih-bot',
        title: 'Integrasi Telegram Bot Reminder Otomatis',
        caption: 'Workflow pengingat terjadwal yang mengirimkan notifikasi interaktif ke smartphone pengguna melalui Telegram Bot H-3 dan H-1 sebelum tanggal pendebitan saldo.',
        mockupType: 'tatagih-bot',
        imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80'
      },
      {
        id: 'tatagih-subs',
        title: 'Formulir Manajemen Langganan & Siklus Billing',
        caption: 'Antarmuka terperinci untuk menambahkan langganan baru, menentukan siklus penagihan (Bulanan/Tahunan), kategori pengeluaran, serta tanggal jatuh tempo.',
        mockupType: 'tatagih-table',
        imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80'
      },
      {
        id: 'tatagih-analytics',
        title: 'Analitik Distribusi Pengeluaran & Kategori',
        caption: 'Visualisasi grafik pengeluaran berdasarkan proporsi kategori (Entertainment, Productivity, Utilities) dan estimasi proyeksi biaya langganan tahunan.',
        mockupType: 'tatagih-analytics',
        imageUrl: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&q=80'
      }
    ],
    problem: 'Banyak pengguna modern berlangganan berbagai layanan digital (streaming film, musik, cloud storage, software produktivitas) tanpa pencatatan terpusat. Akibatnya, saldo debit/kredit sering terpotong otomatis tanpa persiapan dana, dan langganan masa uji coba (trial) lupa dibatalkan sehingga membebani keuangan pribadi.',
    solution: 'Tatagih hadir sebagai aplikasi pengelola tagihan dan subscription berulang yang memusatkan seluruh informasi dalam satu tempat terstruktur. Tatagih secara otomatis menghitung total pengeluaran bulanan dan mengirimkan peringatan H-3 dan H-1 langsung ke akun Telegram pengguna tanpa mengharuskan pengguna membuka web setiap hari.',
    keyFeatures: [
      {
        title: 'Pencatatan Langganan Fleksibel',
        desc: 'Mendukung pencatatan berbagai penyedia layanan dengan nominal biaya, siklus tagihan bulanan atau tahunan, dan tanggal jatuh tempo yang teratur.'
      },
      {
        title: 'Notifikasi Terjadwal Telegram Bot',
        desc: 'Mengirimkan pesan peringatan otomatis pada H-3 dan H-1 sebelum tanggal tagihan jatuh tempo ke akun Telegram pengguna.'
      },
      {
        title: 'Analitik Pengeluaran Real-time',
        desc: 'Menghitung total pengeluaran per bulan secara instan sehingga pengguna memiliki gambaran akurat mengenai pengeluaran rutin digital mereka.'
      },
      {
        title: 'Kategorisasi & Filter Pintar',
        desc: 'Pengelompokan tagihan ke dalam kategori Entertainment, Productivity, Utilities, dan Work untuk analisis keuangan yang lebih jernih.'
      },
      {
        title: 'Sistem Autentikasi Aman',
        desc: 'Dilengkapi manajemen akun pengguna berbasis Laravel Authentication dengan isolasi data akun yang ketat.'
      }
    ],
    architecture: 'Dibangun menggunakan Laravel 10 dengan arsitektur Model-View-Controller (MVC) yang solid dan PHP 8.2. Database relasional MySQL dirancang dengan tabel terindeks untuk query tanggal jatuh tempo yang cepat. Sistem penjadwalan (Laravel Scheduler / Cron Job) mengotomatisasi pemeriksaan tagihan setiap pagi dan memicu webhook Telegram Bot API.'
  },

  lintas: {
    id: 'lintas',
    name: 'Lintas',
    tagline: 'Phone-to-PC Low-Latency Companion Utility',
    fullTitle: 'Lintas — Wireless Phone-to-PC Control Companion',
    category: 'Desktop Utility & Device Connectivity',
    status: 'Portfolio Project Showcase',
    period: '2024',
    liveUrl: 'https://lintas.demo.agungkrisna.dev',
    githubUrl: 'https://github.com/agungkrisna/lintas',
    stack: ['Flutter', 'Dart', 'Bluetooth Low Energy', 'LAN Socket', 'Windows Win32 API', 'UDP Discovery'],
    stats: [
      { label: 'Protokol Koneksi', value: 'Zero-Config LAN & BLE' },
      { label: 'Latensi Input', value: '< 12ms (Local Wi-Fi)' },
      { label: 'Target Platform', value: 'Android & Windows 10/11' },
      { label: 'Fitur Kendali', value: 'Trackpad, Media, Lock, Clipboard' }
    ],
    photos: [
      {
        id: 'lintas-connection',
        title: 'Dashboard Status Koneksi & Pairing Perangkat',
        caption: 'Antarmuka pairing mendeteksi smartphone (Oppo A53) terhubung ke PC melalui Local Area Network (LAN) dengan monitoring latensi dan status enkripsi koneksi.',
        mockupType: 'lintas-dash',
        imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80'
      },
      {
        id: 'lintas-touchpad',
        title: 'Virtual Precision Trackpad & Gesture Support',
        caption: 'Area sentuh layar penuh pada smartphone yang mengubah layar ponsel menjadi trackpad nirkabel responsif dengan gesture scroll dua jari dan klik tombol kanan/kiri.',
        mockupType: 'lintas-touchpad',
        imageUrl: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=1200&q=80'
      },
      {
        id: 'lintas-media',
        title: 'Media Remote Controller & Windows Quick Actions',
        caption: 'Panel kendali pemutar multimedia (Play/Pause, Next, Volume slider) serta tombol pintas cepat One-Tap Lock PC dan Sleep untuk kenyamanan saat presentasi.',
        mockupType: 'lintas-media',
        imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80'
      },
      {
        id: 'lintas-clipboard',
        title: 'Sinkronisasi Clipboard Dua Arah & File Beam',
        caption: 'Fitur sinkronisasi teks clipboard instan antara smartphone dan PC serta pengiriman file lokal berkecepatan tinggi tanpa bergantung pada cloud pihak ketiga.',
        mockupType: 'lintas-sync',
        imageUrl: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80'
      }
    ],
    problem: 'Saat presentasi, menonton dari kejauhan, atau bersantai di meja kerja, pengguna sering kali harus menjangkau mouse dan keyboard fisik hanya untuk menjeda video, mengatur volume, mengunci komputer saat beranjak, atau memindahkan teks dari smartphone ke komputer. Aplikasi remote yang ada di pasar seringkali sarat iklan, membutuhkan server cloud, atau memiliki jeda input yang lambat.',
    solution: 'Lintas menjembatani smartphone Android dan Windows PC melalui protokol jaringan lokal (LAN) dan Bluetooth berlatensi sangat rendah (<12ms). Smartphone diubah menjadi perangkat kendali multifungsi: touchpad virtual berpresisi tinggi, pengendali multimedia, tombol pengunci PC instan, dan sinkronisasi clipboard lokal yang aman.',
    keyFeatures: [
      {
        title: 'Virtual Touchpad Berpresisi Tinggi',
        desc: 'Mendukung gerakan kursor halus, akselerasi adaptif, ketukan satu jari untuk klik kiri, ketukan dua jari untuk klik kanan, dan scroll halaman.'
      },
      {
        title: 'Remote Kontrol Multimedia Native',
        desc: 'Mengendalikan pemutar audio/video Windows (Spotify, YouTube, VLC) termasuk penyesuaian volume suara dan navigasi playlist.'
      },
      {
        title: 'One-Tap Lock PC',
        desc: 'Tombol darurat untuk segera mengunci layar Windows PC dari ponsel saat pengguna meninggalkan meja kerja.'
      },
      {
        title: 'Sinkronisasi Clipboard Lokal',
        desc: 'Menyalin teks di ponsel dan langsung dapat di-paste di PC secara instan tanpa lewat chat WhatsApp atau email.'
      },
      {
        title: 'Zero-Cloud & Privasi Terjaga',
        desc: 'Seluruh transmisi data dilakukan murni dalam subnet jaringan lokal tanpa ada data yang diunggah ke server internet publik.'
      }
    ],
    architecture: 'Aplikasi mobile dikembangkan dengan Flutter & Dart untuk memastikan UI 60fps yang responsif terhadap input sentuhan. Companion pada Windows diimplementasikan sebagai background service ringan yang mendengarkan paket UDP untuk auto-discovery dan TCP untuk streaming input. Sinyal kursor dan tombol diinjeksikan secara native melalui Windows Win32 SendInput API.'
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
    tagline: 'Lost & Found Crowdsourcing Platform',
    fullTitle: 'Temuin — Location-Based Lost & Found Community Platform',
    category: 'Crowdsourcing & Geo-Mapping',
    status: 'Portfolio Project Showcase',
    period: '2023 - 2024',
    liveUrl: 'https://temuin.vercel.app',
    githubUrl: 'https://github.com/agungkrisna/temuin-mobile',
    stack: ['React Native', 'Expo', 'Express.js', 'MongoDB', 'Google Maps API', 'Cloudinary'],
    stats: [
      { label: 'Pencarian Lokasi', value: 'Google Maps Radius' },
      { label: 'Verifikasi Klaim', value: 'Multi-Step Ownership' },
      { label: 'Target Platform', value: 'Android & iOS (Mobile)' },
      { label: 'Privasi Pengguna', value: 'In-App Secure Chat' }
    ],
    photos: [
      {
        id: 'temuin-map',
        title: 'Peta Sebaran Laporan Barang Hilang & Ditemukan',
        caption: 'Antarmuka peta geolokasi interaktif yang menampilkan pin laporan kehilangan dan penemuan barang berdasarkan radius lokasi pengguna.',
        mockupType: 'temuin-map',
        imageUrl: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80'
      },
      {
        id: 'temuin-detail',
        title: 'Formulir Laporan & Verifikasi Bukti Kepemilikan',
        caption: 'Sistem formulir pelaporan dengan fitur unggah foto bukti, deskripsi detail, serta pertanyaan rahasia untuk memvalidasi kepemilikan sah.',
        mockupType: 'temuin-detail',
        imageUrl: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80'
      },
      {
        id: 'temuin-chat',
        title: 'Saluran Chat Aman Antara Penemu dan Pemilik',
        caption: 'Ruang obrolan langsung terenkripsi di dalam aplikasi untuk memfasilitasi serah terima barang tanpa perlu membagikan nomor telepon pribadi.',
        mockupType: 'temuin-chat',
        imageUrl: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&w=1200&q=80'
      },
      {
        id: 'temuin-history',
        title: 'Dashboard Riwayat Klaim & Status Penemuan',
        caption: 'Panel pantau status laporan (Diverifikasi, Proses Serah Terima, Selesai) dengan riwayat aktivitas pelaporan lengkap.',
        mockupType: 'temuin-history',
        imageUrl: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1200&q=80'
      }
    ],
    problem: 'Kehilangan barang berharga di ruang publik (kunci motor, dompet, dokumen identitas) sering kali berujung tanpa kejelasan karena tidak adanya wadah terpusat antara pihak yang menemukan dengan pihak yang mencari.',
    solution: 'Temuin menghubungkan masyarakat penemu dan pencari barang melalui platform mobile berbasis geolokasi Google Maps. Dilengkapi fitur verifikasi kepemilikan ketat dan chat in-app yang menjaga kerahasiaan nomor kontak pengguna.',
    keyFeatures: [
      {
        title: 'Pemetaan Lokasi GPS Terintegrasi',
        desc: 'Menampilkan titik lokasi barang hilang atau ditemukan secara real-time pada peta interaktif dengan filter radius kilometer.'
      },
      {
        title: 'Verifikasi Bertingkat',
        desc: 'Penemu dapat menyertakan pertanyaan kepemilikan rahasia (misal: warna gantungan kunci atau nomor seri) sebelum klaim disetujui.'
      },
      {
        title: 'In-App Chat Privat',
        desc: 'Komunikasi langsung yang aman antara penemu dan pemilik tanpa mengekspos nomor WhatsApp atau media sosial pribadi.'
      },
      {
        title: 'Kategorisasi Barang Cerdas',
        desc: 'Pemisahan kategori barang (Dokumen, Elektronik, Kunci, Dompet, Kendaraan) untuk mempermudah penyaringan pencarian.'
      }
    ],
    architecture: 'Aplikasi mobile dibangun dengan React Native dan Expo untuk kompatibilitas cross-platform Android dan iOS. Backend API dibangun menggunakan Express.js dan database MongoDB dengan indeks spasial geospatial query 2dsphere untuk pencarian radius lokasi efisien. Gambar barang disimpan secara terenkripsi di Cloudinary CDN.'
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
        mockupType: 'dompetq-dash',
        imageUrl: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=1200&q=80'
      },
      {
        id: 'dompetq-split',
        title: 'Fitur Split Bill Komunitas Otomatis',
        caption: 'Kalkulator cerdas pembagian tagihan makan atau liburan bersama teman secara adil lengkap dengan pengingat pembayaran.',
        mockupType: 'tatagih-dashboard',
        imageUrl: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=80'
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
        mockupType: 'makalah-dash',
        imageUrl: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1200&q=80'
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
  }
};

const renderMockupVisual = (type) => {
  switch (type) {
    case 'tatagih-dashboard':
      return (
        <div style={{ width: '92%', height: '88%', backgroundColor: '#0f172a', borderRadius: '6px', border: '1px solid #334155', padding: '14px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #1e293b', paddingBottom: '8px' }}>
            <span style={{ fontSize: '11px', fontWeight: 700, color: '#38bdf8', letterSpacing: '0.5px' }}>TATAGIH FINANCIAL DASHBOARD</span>
            <span style={{ fontSize: '10px', color: '#4ade80', backgroundColor: '#14532d', padding: '2px 8px', borderRadius: '4px' }}>Demo Data</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
            <div style={{ backgroundColor: '#1e293b', padding: '8px 10px', borderRadius: '4px' }}>
              <div style={{ fontSize: '9.5px', color: '#94a3b8', textTransform: 'uppercase' }}>Total Bulan Ini</div>
              <div style={{ fontSize: '15px', fontWeight: 800, color: '#ffffff' }}>Rp 320.000</div>
            </div>
            <div style={{ backgroundColor: '#1e293b', padding: '8px 10px', borderRadius: '4px' }}>
              <div style={{ fontSize: '9.5px', color: '#94a3b8', textTransform: 'uppercase' }}>Tagihan Terdekat</div>
              <div style={{ fontSize: '12px', fontWeight: 700, color: '#f59e0b' }}>Netflix (H-2)</div>
            </div>
          </div>
          <div style={{ flex: 1, backgroundColor: '#1e293b', borderRadius: '4px', padding: '8px 10px', display: 'flex', flexDirection: 'column', gap: '6px', justifyContent: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: '#e2e8f0', borderBottom: '1px solid #334155', paddingBottom: '4px' }}>
              <span>Netflix Premium</span>
              <span style={{ fontWeight: 600 }}>Rp 186.000</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: '#e2e8f0', borderBottom: '1px solid #334155', paddingBottom: '4px' }}>
              <span>YouTube Premium</span>
              <span style={{ fontWeight: 600 }}>Rp 59.000</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: '#e2e8f0' }}>
              <span>Xbox Game Pass</span>
              <span style={{ fontWeight: 600 }}>Rp 75.000</span>
            </div>
          </div>
        </div>
      );

    case 'tatagih-bot':
      return (
        <div style={{ width: '92%', height: '88%', backgroundColor: '#0e1621', borderRadius: '6px', border: '1px solid #242f3d', padding: '14px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', borderBottom: '1px solid #17212b', paddingBottom: '8px' }}>
            <div style={{ width: '22px', height: '22px', borderRadius: '50%', backgroundColor: '#2b5278', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', fontSize: '10px', fontWeight: 700 }}>
              TB
            </div>
            <div>
              <div style={{ fontSize: '11px', fontWeight: 600, color: '#ffffff' }}>Tatagih Reminder Bot</div>
              <div style={{ fontSize: '9px', color: '#4ade80' }}>bot verified</div>
            </div>
          </div>
          <div style={{ alignSelf: 'flex-start', maxWidth: '90%', backgroundColor: '#182533', padding: '10px 12px', borderRadius: '8px 8px 8px 0', border: '1px solid #2b5278' }}>
            <div style={{ fontSize: '10px', color: '#f59e0b', fontWeight: 700, marginBottom: '4px' }}>Peringatan Tagihan H-3</div>
            <div style={{ fontSize: '10px', color: '#e2e8f0', lineHeight: 1.4 }}>
              Tagihan <b>Netflix Premium</b> sebesar <b>Rp 186.000</b> akan jatuh tempo pada 18 Oktober.
            </div>
            <div style={{ fontSize: '8.5px', color: '#64748b', textAlign: 'right', marginTop: '4px' }}>08:00 WIB</div>
          </div>
          <div style={{ display: 'flex', gap: '8px', marginTop: 'auto' }}>
            <div style={{ flex: 1, backgroundColor: '#2b5278', color: '#ffffff', textAlign: 'center', padding: '6px', borderRadius: '4px', fontSize: '9.5px', fontWeight: 600 }}>Sudah Dibayar</div>
            <div style={{ flex: 1, backgroundColor: '#1e293b', color: '#94a3b8', textAlign: 'center', padding: '6px', borderRadius: '4px', fontSize: '9.5px' }}>Snooze (H-1)</div>
          </div>
        </div>
      );

    case 'tatagih-table':
      return (
        <div style={{ width: '92%', height: '88%', backgroundColor: '#0f172a', borderRadius: '6px', border: '1px solid #334155', padding: '14px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, color: '#ffffff', borderBottom: '1px solid #1e293b', paddingBottom: '6px' }}>Tambah Subscription Baru</div>
          <div style={{ backgroundColor: '#1e293b', padding: '8px 10px', borderRadius: '4px', fontSize: '10px', color: '#94a3b8' }}>
            Nama Layanan: <span style={{ color: '#ffffff', fontWeight: 600 }}>Spotify Family Plan</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
            <div style={{ backgroundColor: '#1e293b', padding: '8px 10px', borderRadius: '4px', fontSize: '10px', color: '#94a3b8' }}>
              Biaya: <span style={{ color: '#ffffff', fontWeight: 600 }}>Rp 86.900</span>
            </div>
            <div style={{ backgroundColor: '#1e293b', padding: '8px 10px', borderRadius: '4px', fontSize: '10px', color: '#38bdf8', fontWeight: 600 }}>
              Siklus: Bulanan
            </div>
          </div>
          <div style={{ backgroundColor: '#1e293b', padding: '8px 10px', borderRadius: '4px', fontSize: '10px', color: '#94a3b8' }}>
            Reminder: <span style={{ color: '#4ade80', fontWeight: 600 }}>Aktif (Telegram Bot H-3, H-1)</span>
          </div>
          <div style={{ marginTop: 'auto', backgroundColor: '#2563eb', color: '#ffffff', textAlign: 'center', padding: '7px', borderRadius: '4px', fontSize: '10.5px', fontWeight: 700 }}>
            Simpan Langganan
          </div>
        </div>
      );

    case 'tatagih-analytics':
      return (
        <div style={{ width: '92%', height: '88%', backgroundColor: '#0f172a', borderRadius: '6px', border: '1px solid #334155', padding: '14px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, color: '#a855f7', borderBottom: '1px solid #1e293b', paddingBottom: '6px' }}>Analisis Pengeluaran Per Kategori</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1, justifyContent: 'center' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '9.5px', color: '#e2e8f0', marginBottom: '3px' }}>
                <span>Entertainment (58%)</span>
                <span>Rp 186.000</span>
              </div>
              <div style={{ height: '6px', backgroundColor: '#334155', borderRadius: '3px', overflow: 'hidden' }}>
                <div style={{ width: '58%', height: '100%', backgroundColor: '#ec4899' }}></div>
              </div>
            </div>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '9.5px', color: '#e2e8f0', marginBottom: '3px' }}>
                <span>Gaming / Hobby (24%)</span>
                <span>Rp 75.000</span>
              </div>
              <div style={{ height: '6px', backgroundColor: '#334155', borderRadius: '3px', overflow: 'hidden' }}>
                <div style={{ width: '24%', height: '100%', backgroundColor: '#3b82f6' }}></div>
              </div>
            </div>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '9.5px', color: '#e2e8f0', marginBottom: '3px' }}>
                <span>Productivity (18%)</span>
                <span>Rp 59.000</span>
              </div>
              <div style={{ height: '6px', backgroundColor: '#334155', borderRadius: '3px', overflow: 'hidden' }}>
                <div style={{ width: '18%', height: '100%', backgroundColor: '#10b981' }}></div>
              </div>
            </div>
          </div>
        </div>
      );

    case 'lintas-dash':
      return (
        <div style={{ width: '92%', height: '88%', backgroundColor: '#111827', borderRadius: '6px', border: '1px solid #374151', padding: '14px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #1f2937', paddingBottom: '6px' }}>
            <span style={{ fontSize: '11px', fontWeight: 700, color: '#60a5fa' }}>LINTAS COMPANION DAEMON</span>
            <span style={{ fontSize: '9.5px', color: '#22c55e', backgroundColor: '#064e3b', padding: '2px 8px', borderRadius: '4px', fontWeight: 600 }}>CONNECTED</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', backgroundColor: '#1f2937', padding: '10px', borderRadius: '6px' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '6px', backgroundColor: '#374151', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#60a5fa' }}>
              <Smartphone size={18} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '11.5px', fontWeight: 700, color: '#ffffff' }}>Oppo A53 (Android 12)</div>
              <div style={{ fontSize: '9.5px', color: '#9ca3af' }}>IP: 192.168.1.14 : 8089</div>
            </div>
            <div style={{ fontSize: '10.5px', fontWeight: 600, color: '#4ade80' }}>8 ms</div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
            <div style={{ backgroundColor: '#1f2937', padding: '8px', borderRadius: '4px', textAlign: 'center', fontSize: '10px', color: '#e5e7eb' }}>Trackpad Active</div>
            <div style={{ backgroundColor: '#1f2937', padding: '8px', borderRadius: '4px', textAlign: 'center', fontSize: '10px', color: '#e5e7eb' }}>Clipboard Synced</div>
          </div>
        </div>
      );

    case 'lintas-touchpad':
      return (
        <div style={{ width: '92%', height: '88%', backgroundColor: '#09090b', borderRadius: '6px', border: '1px solid #27272a', padding: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '10px', color: '#a1a1aa' }}>
            <span style={{ fontWeight: 600 }}>VIRTUAL TOUCHPAD</span>
            <span>Sensitivity: 1.2x</span>
          </div>
          <div style={{ flex: 1, border: '1px dashed #3f3f46', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '4px' }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#3b82f6', opacity: 0.8 }}></div>
            <div style={{ fontSize: '9.5px', color: '#71717a' }}>Tap or drag to control cursor</div>
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <div style={{ flex: 1, backgroundColor: '#27272a', textAlign: 'center', padding: '8px', borderRadius: '4px', fontSize: '10px', color: '#ffffff' }}>Left Click</div>
            <div style={{ flex: 1, backgroundColor: '#27272a', textAlign: 'center', padding: '8px', borderRadius: '4px', fontSize: '10px', color: '#ffffff' }}>Right Click</div>
          </div>
        </div>
      );

    case 'lintas-media':
      return (
        <div style={{ width: '92%', height: '88%', backgroundColor: '#111827', borderRadius: '6px', border: '1px solid #374151', padding: '14px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, color: '#f59e0b' }}>Windows Media Controller</div>
          <div style={{ backgroundColor: '#1f2937', padding: '10px', borderRadius: '6px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ fontSize: '10.5px', fontWeight: 600, color: '#ffffff' }}>Bohemian Rhapsody — Queen</div>
            <div style={{ height: '4px', backgroundColor: '#374151', borderRadius: '2px', overflow: 'hidden' }}>
              <div style={{ width: '64%', height: '100%', backgroundColor: '#f59e0b' }}></div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', fontSize: '12px', color: '#ffffff', alignItems: 'center', padding: '4px 0' }}>
              <SkipBack size={14} style={{ cursor: 'pointer' }} />
              <Pause size={16} style={{ cursor: 'pointer' }} />
              <SkipForward size={14} style={{ cursor: 'pointer' }} />
            </div>
          </div>
          <div style={{ display: 'flex', gap: '8px', marginTop: 'auto' }}>
            <div style={{ flex: 1, backgroundColor: '#dc2626', color: '#ffffff', textAlign: 'center', padding: '7px', borderRadius: '4px', fontSize: '10px', fontWeight: 600 }}>Lock PC</div>
            <div style={{ flex: 1, backgroundColor: '#374151', color: '#ffffff', textAlign: 'center', padding: '7px', borderRadius: '4px', fontSize: '10px', fontWeight: 600 }}>Vol: 72%</div>
          </div>
        </div>
      );

    case 'lintas-sync':
      return (
        <div style={{ width: '92%', height: '88%', backgroundColor: '#111827', borderRadius: '6px', border: '1px solid #374151', padding: '14px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, color: '#38bdf8' }}>Real-Time Clipboard Sync</div>
          <div style={{ backgroundColor: '#1f2937', padding: '10px', borderRadius: '6px', borderLeft: '3px solid #38bdf8' }}>
            <div style={{ fontSize: '8.5px', color: '#9ca3af', marginBottom: '3px', textTransform: 'uppercase' }}>Copied from phone (10:14 AM)</div>
            <div style={{ fontSize: '10px', color: '#ffffff', fontFamily: 'monospace' }}>https://github.com/agungkrisna/lintas</div>
          </div>
          <div style={{ backgroundColor: '#1f2937', padding: '10px', borderRadius: '6px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '9px', color: '#9ca3af', marginBottom: '4px' }}>
              <span>LAN File Beam: presentation.pdf</span>
              <span style={{ color: '#22c55e', fontWeight: 600 }}>100%</span>
            </div>
            <div style={{ height: '4px', backgroundColor: '#374151', borderRadius: '2px', overflow: 'hidden' }}>
              <div style={{ width: '100%', height: '100%', backgroundColor: '#22c55e' }}></div>
            </div>
          </div>
        </div>
      );

    case 'neurofly-graph':
      return (
        <div style={{ width: '92%', height: '88%', backgroundColor: '#030712', borderRadius: '6px', border: '1px solid #1f2937', padding: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10.5px', color: '#818cf8', fontWeight: 700 }}>
            <span>CONNECTOME TOPOLOGY</span>
            <span style={{ color: '#38bdf8', fontSize: '9.5px' }}>438 NEURONS</span>
          </div>
          <div style={{ flex: 1, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ position: 'absolute', width: '70px', height: '70px', borderRadius: '50%', border: '1px dashed #374151' }}></div>
            <div style={{ position: 'absolute', top: '15px', left: '25px', backgroundColor: '#e11d48', color: '#ffffff', fontSize: '8px', padding: '2px 5px', borderRadius: '3px', fontWeight: 700 }}>LC11</div>
            <div style={{ position: 'absolute', top: '20px', right: '30px', backgroundColor: '#2563eb', color: '#ffffff', fontSize: '8px', padding: '2px 5px', borderRadius: '3px', fontWeight: 700 }}>T4a</div>
            <div style={{ position: 'absolute', bottom: '25px', left: '35px', backgroundColor: '#059669', color: '#ffffff', fontSize: '8px', padding: '2px 5px', borderRadius: '3px', fontWeight: 700 }}>Mi1</div>
            <div style={{ position: 'absolute', bottom: '20px', right: '25px', backgroundColor: '#7c3aed', color: '#ffffff', fontSize: '8px', padding: '2px 5px', borderRadius: '3px', fontWeight: 700 }}>Tm3</div>
            <div style={{ width: '14px', height: '14px', borderRadius: '50%', backgroundColor: '#d97706' }}></div>
          </div>
          <div style={{ fontSize: '9px', color: '#64748b', textAlign: 'center' }}>2,199 Directed Synaptic Contacts Mapped</div>
        </div>
      );

    case 'neurofly-circuit':
      return (
        <div style={{ width: '92%', height: '88%', backgroundColor: '#030712', borderRadius: '6px', border: '1px solid #1f2937', padding: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ fontSize: '10.5px', color: '#ec4899', fontWeight: 700 }}>MOTION DETECTOR DELAY LINE</div>
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 8px' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '8.5px', color: '#94a3b8' }}>Photoreceptor</div>
              <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: '#334155', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9px', margin: '4px auto', color: '#ffffff' }}>R1-6</div>
            </div>
            <div style={{ color: '#64748b', fontSize: '11px' }}>&rarr;</div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '8.5px', color: '#94a3b8' }}>Delay Mi1</div>
              <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: '#1e3a8a', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9px', margin: '4px auto', color: '#ffffff' }}>&tau;_1</div>
            </div>
            <div style={{ color: '#64748b', fontSize: '11px' }}>&rarr;</div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '8.5px', color: '#94a3b8' }}>Motion T4/T5</div>
              <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: '#065f46', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9px', margin: '4px auto', color: '#ffffff' }}>EMD</div>
            </div>
          </div>
          <div style={{ backgroundColor: '#111827', padding: '5px', borderRadius: '4px', fontSize: '9px', color: '#cbd5e1', textAlign: 'center' }}>
            Hassenstein-Reichardt Correlator Simulation
          </div>
        </div>
      );

    case 'neurofly-sim':
      return (
        <div style={{ width: '92%', height: '88%', backgroundColor: '#090d16', borderRadius: '6px', border: '1px solid #1e293b', padding: '12px', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '9.5px', color: '#94a3b8', borderBottom: '1px solid #1e293b', paddingBottom: '4px', marginBottom: '8px' }}>
            <span>AUTOPILOT PONG PADDLE</span>
            <span style={{ color: '#4ade80', fontWeight: 600 }}>NEURAL FIRE: UP (0.84)</span>
          </div>
          <div style={{ flex: 1, border: '1px solid #1e293b', position: 'relative', overflow: 'hidden', backgroundColor: '#020617' }}>
            <div style={{ position: 'absolute', top: '24px', left: '8px', width: '5px', height: '36px', backgroundColor: '#38bdf8', borderRadius: '2px' }}></div>
            <div style={{ position: 'absolute', top: '38px', left: '120px', width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#f43f5e' }}></div>
            <div style={{ position: 'absolute', top: '10px', right: '8px', width: '5px', height: '42px', backgroundColor: '#a855f7', borderRadius: '2px' }}></div>
            <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, borderTop: '1px dashed #1e293b' }}></div>
          </div>
        </div>
      );

    case 'neurofly-matrix':
      return (
        <div style={{ width: '92%', height: '88%', backgroundColor: '#030712', borderRadius: '6px', border: '1px solid #1f2937', padding: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ fontSize: '10.5px', color: '#38bdf8', fontWeight: 700 }}>neuPrint MaleCNS v1.0 Synapse Matrix</div>
          <div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '3px', backgroundColor: '#0b1120', padding: '6px', borderRadius: '4px' }}>
            {[1, 0.4, 0.8, 0.2, 0.9, 0.5, 0.3, 0.7, 0.1, 0.9, 0.4, 0.6, 0.8, 0.2, 0.5, 1, 0.3, 0.7, 0.6, 0.9, 0.4, 0.2, 0.8, 0.1].map((v, i) => (
              <div key={i} style={{ backgroundColor: '#0284c7', opacity: v, borderRadius: '2px', height: '100%' }}></div>
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '9px', color: '#94a3b8' }}>
            <span>LC11 Target Tracking</span>
            <span>12,282 Total Contacts</span>
          </div>
        </div>
      );

    case 'temuin-map':
      return (
        <div style={{ width: '92%', height: '88%', backgroundColor: '#064e3b', borderRadius: '6px', border: '1px solid #059669', padding: '12px', display: 'flex', flexDirection: 'column', gap: '8px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10.5px', color: '#6ee7b7', fontWeight: 700 }}>
            <span>TEMUIN GEOLOCATION MAP</span>
            <span style={{ backgroundColor: '#065f46', padding: '2px 8px', borderRadius: '4px', fontSize: '9px' }}>Radius: 3 KM</span>
          </div>
          <div style={{ flex: 1, backgroundColor: '#022c22', borderRadius: '6px', border: '1px dashed #059669', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ position: 'absolute', top: '15px', left: '25px', backgroundColor: '#dc2626', color: '#ffffff', fontSize: '8px', padding: '2px 6px', borderRadius: '3px', fontWeight: 700 }}>[HILANG] Dompet</div>
            <div style={{ position: 'absolute', bottom: '20px', right: '30px', backgroundColor: '#059669', color: '#ffffff', fontSize: '8px', padding: '2px 6px', borderRadius: '3px', fontWeight: 700 }}>[TEMU] Kunci</div>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#2563eb', border: '2px solid #ffffff' }}></div>
          </div>
        </div>
      );

    case 'temuin-detail':
      return (
        <div style={{ width: '92%', height: '88%', backgroundColor: '#064e3b', borderRadius: '6px', border: '1px solid #059669', padding: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, color: '#a7f3d0' }}>Verifikasi Klaim Barang</div>
          <div style={{ backgroundColor: '#022c22', padding: '8px 10px', borderRadius: '4px', fontSize: '9.5px', color: '#d1fae5' }}>
            Barang: <b>Dompet Kulit Cokelat (BCA, KTP)</b>
          </div>
          <div style={{ backgroundColor: '#022c22', padding: '8px 10px', borderRadius: '4px', fontSize: '9.5px', color: '#6ee7b7' }}>
            Pertanyaan Verifikasi: <i>Apa merek gantungan di dompet?</i>
          </div>
          <div style={{ marginTop: 'auto', backgroundColor: '#10b981', color: '#ffffff', textAlign: 'center', padding: '6px', borderRadius: '4px', fontSize: '10px', fontWeight: 700 }}>
            Ajukan Bukti Kepemilikan
          </div>
        </div>
      );

    case 'temuin-chat':
      return (
        <div style={{ width: '92%', height: '88%', backgroundColor: '#064e3b', borderRadius: '6px', border: '1px solid #059669', padding: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ fontSize: '10.5px', fontWeight: 700, color: '#6ee7b7', borderBottom: '1px solid #059669', paddingBottom: '4px' }}>Chat Penemu & Pemilik (Aman)</div>
          <div style={{ alignSelf: 'flex-start', backgroundColor: '#022c22', padding: '8px', borderRadius: '6px', fontSize: '9.5px', color: '#d1fae5', maxWidth: '85%' }}>
            Halo, kunci motor Beat Anda sudah saya titipkan di pos satpam kampus ya.
          </div>
          <div style={{ alignSelf: 'flex-end', backgroundColor: '#059669', padding: '8px', borderRadius: '6px', fontSize: '9.5px', color: '#ffffff', maxWidth: '85%' }}>
            Terima kasih banyak mas! Segera saya ambil siang ini.
          </div>
        </div>
      );

    case 'temuin-history':
      return (
        <div style={{ width: '92%', height: '88%', backgroundColor: '#064e3b', borderRadius: '6px', border: '1px solid #059669', padding: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, color: '#6ee7b7' }}>Status Laporan Penemuan</div>
          <div style={{ backgroundColor: '#022c22', padding: '8px 10px', borderRadius: '4px', display: 'flex', justifyContent: 'space-between', fontSize: '9.5px', color: '#d1fae5' }}>
            <span>KTM Universitas</span>
            <span style={{ color: '#34d399', fontWeight: 700 }}>SELESAI (KLAIMED)</span>
          </div>
          <div style={{ backgroundColor: '#022c22', padding: '8px 10px', borderRadius: '4px', display: 'flex', justifyContent: 'space-between', fontSize: '9.5px', color: '#d1fae5' }}>
            <span>Kunci Motor Honda</span>
            <span style={{ color: '#fbbf24', fontWeight: 700 }}>PROSES SERAH TERIMA</span>
          </div>
        </div>
      );

    case 'dompetq-dash':
      return (
        <div style={{ width: '92%', height: '88%', backgroundColor: '#1e1b4b', borderRadius: '6px', border: '1px solid #4338ca', padding: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10.5px', color: '#818cf8', fontWeight: 700 }}>
            <span>DOMPETQ FINTECH WALLET</span>
            <span style={{ color: '#4ade80', backgroundColor: '#064e3b', padding: '2px 6px', borderRadius: '3px' }}>ACTIVE</span>
          </div>
          <div style={{ backgroundColor: '#312e81', padding: '10px', borderRadius: '6px' }}>
            <div style={{ fontSize: '9px', color: '#c7d2fe' }}>SALDO UTAMA</div>
            <div style={{ fontSize: '15px', fontWeight: 800, color: '#ffffff' }}>Rp 1.450.000</div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', fontSize: '9.5px', textAlign: 'center' }}>
            <div style={{ backgroundColor: '#4338ca', color: '#ffffff', padding: '6px', borderRadius: '4px' }}>Scan QRIS</div>
            <div style={{ backgroundColor: '#4338ca', color: '#ffffff', padding: '6px', borderRadius: '4px' }}>Split Bill</div>
          </div>
        </div>
      );

    case 'makalah-dash':
      return (
        <div style={{ width: '92%', height: '88%', backgroundColor: '#1c1917', borderRadius: '6px', border: '1px solid #44403c', padding: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, color: '#fbbf24' }}>Makalah Generator — AI Research Assistant</div>
          <div style={{ backgroundColor: '#292524', padding: '8px 10px', borderRadius: '4px', fontSize: '9.5px', color: '#e7e5e4' }}>
            Topik: <b>Implementasi Convolutional Neural Network pada Citra Medis</b>
          </div>
          <div style={{ backgroundColor: '#292524', padding: '8px 10px', borderRadius: '4px', fontSize: '9px', color: '#a8a29e' }}>
            Format: APA 7th Edition • Bab 1 & 2 Draf Siap Diekspor ke LaTeX/PDF
          </div>
        </div>
      );

    default:
      return null;
  }
};

export const BrowserApp = ({ onOpenFile, initialProject = 'tatagih', initialUrl = null, onLaunchApp }) => {
  const winCtx = useWindow();
  const [activeProjectId, setActiveProjectId] = useState(initialProject || 'tatagih');
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const [previewMode, setPreviewMode] = useState('photo');
  const [selectedPhotoModal, setSelectedPhotoModal] = useState(null);
  const [isBookmarked, setIsBookmarked] = useState(true);
  const [isReloading, setIsReloading] = useState(false);
  const [showTabSearch, setShowTabSearch] = useState(false);

  const projectKeys = Object.keys(PROJECTS_DATA);

  const [tabs, setTabs] = useState(() => {
    const initKey = initialProject || 'tatagih';
    const p = PROJECTS_DATA[initKey] || PROJECTS_DATA.tatagih;
    return [
      {
        id: p.id,
        projectId: p.id,
        title: `${p.name} — Showcase`,
        icon: 'chrome'
      }
    ];
  });

  const handleSelectProject = (projectId) => {
    playClickSound();
    setActiveProjectId(projectId);
    setActivePhotoIndex(0);
    setTabs((prev) => {
      const exists = prev.find((t) => (t.projectId || t.id) === projectId);
      if (exists) return prev;
      const p = PROJECTS_DATA[projectId];
      return [
        ...prev,
        {
          id: projectId,
          projectId: projectId,
          title: p ? `${p.name} — Showcase` : 'New Tab',
          icon: 'chrome'
        }
      ];
    });
  };

  useEffect(() => {
    if (initialProject && PROJECTS_DATA[initialProject]) {
      handleSelectProject(initialProject);
    }
  }, [initialProject]);

  const handleNewTab = () => {
    playClickSound();
    const availableKey = projectKeys.find((k) => !tabs.some((t) => (t.projectId || t.id) === k));
    if (availableKey) {
      handleSelectProject(availableKey);
    } else {
      const nextKey = projectKeys[tabs.length % projectKeys.length];
      const p = PROJECTS_DATA[nextKey];
      const newId = `${p.id}-${Date.now()}`;
      setTabs((prev) => [
        ...prev,
        {
          id: newId,
          projectId: p.id,
          title: `${p.name} — Showcase`,
          icon: 'chrome'
        }
      ]);
      setActiveProjectId(p.id);
    }
  };

  const handleCloseTab = (tabId, e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    playClickSound();
    if (tabs.length === 1) {
      if (winCtx?.onClose) {
        winCtx.onClose();
      }
      return;
    }
    const idx = tabs.findIndex((t) => t.id === tabId);
    const newTabs = tabs.filter((t) => t.id !== tabId);
    setTabs(newTabs);

    const closedTab = tabs[idx];
    const targetProjId = closedTab?.projectId || closedTab?.id;
    if (activeProjectId === targetProjId) {
      const fallbackTab = newTabs[Math.max(0, idx - 1)];
      setActiveProjectId(fallbackTab.projectId || fallbackTab.id);
    }
  };

  const currentProject = PROJECTS_DATA[activeProjectId] || PROJECTS_DATA.tatagih;
  const currentUrl = `https://agungkrisna.dev/projects/${currentProject.id}`;

  const handleReload = () => {
    playClickSound();
    setIsReloading(true);
    setTimeout(() => {
      setIsReloading(false);
    }, 400);
  };

  const currentIndex = projectKeys.indexOf(activeProjectId);
  const prevProjectKey = projectKeys[(currentIndex - 1 + projectKeys.length) % projectKeys.length];
  const nextProjectKey = projectKeys[(currentIndex + 1) % projectKeys.length];
  const activePhoto = currentProject.photos[activePhotoIndex] || currentProject.photos[0] || {};

  return (
    <div className="chrome-browser">
      {/* 1. Combined Chrome Titlebar (Tabs + Window Controls in the EXACT SAME ROW) */}
      <div
        className="chrome-titlebar"
        onPointerDown={winCtx?.handleTitlePointerDown}
        onPointerMove={winCtx?.handleTitlePointerMove}
        onPointerUp={winCtx?.handleTitlePointerUp}
        onDoubleClick={() => {
          if (!winCtx?.isMobile && winCtx?.onMaximize) {
            playClickSound();
            winCtx.onMaximize();
          }
        }}
      >
        {/* Tab Search Chevron button */}
        <div className="chrome-tab-search-wrapper" onPointerDown={(e) => e.stopPropagation()}>
          <button
            type="button"
            className="chrome-tab-search-btn"
            title="Tab search"
            onClick={(e) => {
              e.stopPropagation();
              playClickSound();
              setShowTabSearch(!showTabSearch);
            }}
          >
            <ChevronDown size={14} />
          </button>

          {showTabSearch && (
            <div className="chrome-tab-search-flyout anim-flyout">
              <div className="tab-search-header">Daftar Tab & Showcase</div>
              <div className="tab-search-list">
                {projectKeys.map((pKey) => {
                  const p = PROJECTS_DATA[pKey];
                  const isActive = pKey === activeProjectId;
                  return (
                    <div
                      key={pKey}
                      className={`tab-search-item ${isActive ? 'active' : ''}`}
                      onClick={() => {
                        handleSelectProject(pKey);
                        setShowTabSearch(false);
                      }}
                    >
                      <WinIcon name={p.id} size={16} />
                      <div className="tab-search-item-info">
                        <span className="tab-search-item-title">{p.name} — Showcase</span>
                        <span className="tab-search-item-sub">{p.category}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Tabstrip */}
        <div className="chrome-tabstrip">
          {tabs.map((tab) => {
            const isTabActive = (tab.projectId || tab.id) === activeProjectId;
            return (
              <div
                key={tab.id}
                className={`chrome-tab ${isTabActive ? 'active' : ''}`}
                onClick={() => {
                  playClickSound();
                  setActiveProjectId(tab.projectId || tab.id);
                }}
              >
                <WinIcon name="chrome" size={15} />
                <span className="chrome-tab-title">{tab.title}</span>
                <button
                  type="button"
                  className="chrome-tab-close"
                  title="Tutup Tab"
                  onPointerDown={(e) => e.stopPropagation()}
                  onClick={(e) => handleCloseTab(tab.id, e)}
                >
                  <X size={12} />
                </button>
              </div>
            );
          })}

          <button
            type="button"
            className="chrome-newtab-btn"
            title="Tab Baru"
            onPointerDown={(e) => e.stopPropagation()}
            onClick={(e) => {
              e.stopPropagation();
              handleNewTab();
            }}
          >
            <Plus size={15} />
          </button>
        </div>

        {/* Empty draggable area between tabs and window controls */}
        <div className="chrome-titlebar-drag-spacer" />

        {/* Window Controls (Minimize, Maximize, Close) in the SAME ROW */}
        {winCtx?.WindowControls && (
          <winCtx.WindowControls
            onMinimize={winCtx.onMinimize}
            onMaximize={winCtx.onMaximize}
            onClose={winCtx.onClose}
            isMaximized={winCtx.isMaximized}
            isMobile={winCtx.isMobile}
            showSnapLayouts={winCtx.showSnapLayouts}
            setShowSnapLayouts={winCtx.setShowSnapLayouts}
            snapWindow={winCtx.snapWindow}
            className="chrome-win-controls"
          />
        )}
      </div>

      <div className="chrome-toolbar">
        <button
          className="chrome-tool-btn"
          title="Back"
          onClick={() => handleSelectProject(prevProjectKey)}
        >
          <ArrowLeft size={16} />
        </button>
        <button
          className="chrome-tool-btn"
          title="Forward"
          onClick={() => handleSelectProject(nextProjectKey)}
        >
          <ArrowRight size={16} />
        </button>
        <button
          className={`chrome-tool-btn ${isReloading ? 'animate-spin' : ''}`}
          title="Reload"
          onClick={handleReload}
        >
          <RotateCw size={14} />
        </button>

        <div className="chrome-omnibox">
          <Lock size={13} color="#22c55e" />
          <span style={{ color: '#22c55e', fontWeight: 600 }}>https://</span>
          <span className="chrome-url-text">agungkrisna.dev/projects/{currentProject.id}</span>
          <Star
            size={15}
            color={isBookmarked ? '#f59e0b' : '#9ca3af'}
            fill={isBookmarked ? '#f59e0b' : 'none'}
            style={{ cursor: 'pointer' }}
            onClick={() => setIsBookmarked(!isBookmarked)}
          />
        </div>

        <div
          style={{
            width: '28px',
            height: '28px',
            borderRadius: '50%',
            backgroundColor: '#2563eb',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '11px',
            fontWeight: 700
          }}
          title="Agung Krisna Profile"
        >
          AK
        </div>
      </div>

      <div className="chrome-bookmarks-bar">
        <div
          className={`chrome-bookmark-item ${activeProjectId === 'tatagih' ? 'active' : ''}`}
          onClick={() => handleSelectProject('tatagih')}
        >
          <WinIcon name="tatagih" size={13} />
          <span>Tatagih (Bill Manager)</span>
        </div>
        <div
          className={`chrome-bookmark-item ${activeProjectId === 'lintas' ? 'active' : ''}`}
          onClick={() => handleSelectProject('lintas')}
        >
          <WinIcon name="lintas" size={13} />
          <span>Lintas (Companion Utility)</span>
        </div>
        <div
          className={`chrome-bookmark-item ${activeProjectId === 'neurofly' ? 'active' : ''}`}
          onClick={() => handleSelectProject('neurofly')}
        >
          <WinIcon name="neurofly" size={13} />
          <span>NeuroFly (Drosophila × Pong)</span>
        </div>
        <a
          href="https://github.com/agungkrisna"
          target="_blank"
          rel="noreferrer"
          className="chrome-bookmark-item"
          style={{ textDecoration: 'none' }}
        >
          <WinIcon name="github" size={13} />
          <span>GitHub</span>
        </a>
      </div>

      <div className="chrome-content-area">
        <div className="chrome-page-container">
          {/* Top Project Selector (Flat Button Row) */}
          <div className="project-nav-bar">
            <span className="project-nav-label">PROYEK:</span>
            {projectKeys.map((pKey) => {
              const p = PROJECTS_DATA[pKey];
              const isActive = pKey === activeProjectId;
              return (
                <button
                  key={pKey}
                  className={`project-nav-btn ${isActive ? 'active' : ''}`}
                  onClick={() => {
                    handleSelectProject(pKey);
                    setActivePhotoIndex(0);
                  }}
                >
                  <WinIcon name={p.id} size={14} />
                  <span>{p.name}</span>
                </button>
              );
            })}
          </div>

          {/* 1. Project Header & Overview (FLAT, NO CARD) */}
          <header className="project-header">
            <div className="project-meta-row">
              <span className="project-category-badge">{currentProject.category}</span>
              <span className="project-status-badge">
                <span className="status-bullet"></span>
                {currentProject.status}
              </span>
              <span className="project-year-badge">Tahun: {currentProject.period}</span>
            </div>

            <h1 className="project-main-title">{currentProject.fullTitle}</h1>
            <p className="project-lead-desc">{currentProject.solution}</p>

            <div className="project-stack-row">
              {currentProject.stack.map((item, idx) => (
                <span key={idx} className="project-stack-tag">{item}</span>
              ))}
            </div>

            <div className="project-actions-row">
              <a
                href={currentProject.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-github"
              >
                <FolderGit2 size={16} />
                <span>Source Code (GitHub)</span>
              </a>
              <a
                href={currentProject.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-live"
              >
                <ExternalLink size={15} />
                <span>Kunjungi Live Demo</span>
              </a>
            </div>
          </header>

          {/* 2. Key Metrics Row (FLAT, NO CARD - subtle borders only) */}
          <section className="project-metrics-row">
            {currentProject.stats.map((stat, idx) => (
              <div key={idx} className="metric-cell">
                <div className="metric-label">{stat.label}</div>
                <div className="metric-value">{stat.value}</div>
              </div>
            ))}
          </section>

          {/* 3. CARD 1: Interactive System Interface Previewer (CARD 1 OF 2) */}
          <section className="project-card preview-showcase-card">
            <div className="preview-card-header">
              <div className="preview-header-left">
                <span className="preview-card-title">Galeri Dokumentasi Antarmuka</span>
                <span className="preview-screen-count">
                  Foto {activePhotoIndex + 1} dari {currentProject.photos.length}
                </span>
              </div>

              {/* Mode Switcher & Tab Switcher */}
              <div className="preview-header-actions">
                <div className="preview-mode-switch">
                  <button
                    type="button"
                    className={`preview-mode-btn ${previewMode === 'photo' ? 'active' : ''}`}
                    onClick={() => {
                      playClickSound();
                      setPreviewMode('photo');
                    }}
                  >
                    Foto Screenshot
                  </button>
                  <button
                    type="button"
                    className={`preview-mode-btn ${previewMode === 'mockup' ? 'active' : ''}`}
                    onClick={() => {
                      playClickSound();
                      setPreviewMode('mockup');
                    }}
                  >
                    Skema UI
                  </button>
                </div>

                <div className="preview-tab-row">
                  {currentProject.photos.map((photo, idx) => (
                    <button
                      key={photo.id}
                      type="button"
                      className={`preview-tab-btn ${activePhotoIndex === idx ? 'active' : ''}`}
                      onClick={() => {
                        playClickSound();
                        setActivePhotoIndex(idx);
                      }}
                    >
                      <span>Foto {idx + 1}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Featured Photo Viewport */}
            <div
              className="preview-viewport-container"
              onClick={() => setSelectedPhotoModal(activePhoto)}
              title="Klik untuk memperbesar gambar"
            >
              {previewMode === 'photo' && activePhoto?.imageUrl ? (
                <div className="preview-photo-stage">
                  <img
                    src={activePhoto.imageUrl}
                    alt={activePhoto.title}
                    className="preview-featured-img"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  <div className="preview-zoom-badge">
                    <ZoomIn size={13} />
                    <span>Klik untuk memperbesar</span>
                  </div>
                </div>
              ) : (
                <div className="preview-mockup-stage">
                  {renderMockupVisual(activePhoto?.mockupType)}
                </div>
              )}
            </div>

            {/* Brief Explanation Underneath (Penjelasan Sekilas) */}
            <div className="preview-caption-bar">
              <div className="preview-caption-tag">Penjelasan Sekilas:</div>
              <div className="preview-caption-title">{activePhoto?.title}</div>
              <p className="preview-caption-text">{activePhoto?.caption}</p>
            </div>

            {/* Several Photos Reel (Koleksi Beberapa Foto Lengkap Dengan Ringkasan) */}
            {currentProject.photos.length > 1 && (
              <div className="preview-thumbnails-container">
                <div className="preview-thumbnails-label">
                  Koleksi Foto Proyek ({currentProject.photos.length} Tangkapan Layar):
                </div>
                <div className="preview-thumbnails-grid">
                  {currentProject.photos.map((photo, idx) => (
                    <div
                      key={photo.id}
                      className={`preview-thumb-box ${activePhotoIndex === idx ? 'active' : ''}`}
                      onClick={() => {
                        playClickSound();
                        setActivePhotoIndex(idx);
                      }}
                    >
                      <div className="thumb-img-wrapper">
                        {photo.imageUrl ? (
                          <img src={photo.imageUrl} alt={photo.title} className="thumb-preview-img" />
                        ) : (
                          <div className="thumb-placeholder-box">Foto {idx + 1}</div>
                        )}
                        <span className="thumb-index-badge">Foto {idx + 1}</span>
                      </div>
                      <div className="thumb-meta">
                        <div className="thumb-title">{photo.title}</div>
                        <div className="thumb-desc-snippet">{photo.caption}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>

          {/* 4. Problem & Solution Context (FLAT, NO CARD - Editorial 2-column) */}
          <section className="editorial-context-section">
            <div className="editorial-col">
              <h2 className="editorial-heading">Latar Belakang & Masalah</h2>
              <p className="editorial-body">{currentProject.problem}</p>
            </div>
            <div className="editorial-col">
              <h2 className="editorial-heading">Solusi & Pendekatan</h2>
              <p className="editorial-body">{currentProject.solution}</p>
            </div>
          </section>

          {/* 5. Key Features (FLAT, NO CARD - Clean checklist) */}
          <section className="key-features-section">
            <h2 className="editorial-heading" style={{ marginBottom: '16px' }}>Fitur-Fitur Utama</h2>
            <div className="features-checklist">
              {currentProject.keyFeatures.map((feat, idx) => (
                <div key={idx} className="feature-list-row">
                  <CheckCircle2 size={16} className="feature-check-icon" />
                  <div className="feature-text">
                    <span className="feature-name">{feat.title}:</span>
                    <span className="feature-desc"> {feat.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 6. CARD 2: System Architecture & Technical Specifications (CARD 2 OF 2) */}
          <section className="project-card architecture-spec-card">
            <div className="arch-card-header">
              <h2 className="arch-card-title">Arsitektur Sistem & Spesifikasi Teknis</h2>
            </div>
            <div className="arch-card-body">
              <p className="arch-narrative">{currentProject.architecture}</p>

              <div className="arch-specs-grid">
                <div className="spec-item">
                  <span className="spec-label">Core Tech Stack</span>
                  <span className="spec-value">{currentProject.stack.join(', ')}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Kategori Proyek</span>
                  <span className="spec-value">{currentProject.category}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Siklus Pengembangan</span>
                  <span className="spec-value">{currentProject.period} ({currentProject.status})</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Lisensi / Deployment</span>
                  <span className="spec-value">Live Production / Open Source Repository</span>
                </div>
              </div>
            </div>
          </section>

          {/* 7. Bottom Navigation (FLAT, NO CARD) */}
          <footer className="project-footer-nav">
            <div className="footer-nav-label">Jelajahi Proyek Lainnya:</div>
            <div className="footer-nav-links">
              <button
                className="footer-nav-btn"
                onClick={() => {
                  handleSelectProject(prevProjectKey);
                  setActivePhotoIndex(0);
                }}
              >
                <ArrowLeft size={14} />
                <span>{PROJECTS_DATA[prevProjectKey].name}</span>
              </button>
              <button
                className="footer-nav-btn"
                onClick={() => {
                  handleSelectProject(nextProjectKey);
                  setActivePhotoIndex(0);
                }}
              >
                <span>{PROJECTS_DATA[nextProjectKey].name}</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </footer>
        </div>
      </div>

      {selectedPhotoModal && (
        <div
          className="lightbox-overlay"
          onClick={() => setSelectedPhotoModal(null)}
        >
          <div
            className="lightbox-dialog"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="lightbox-header">
              <h3 className="lightbox-title">{selectedPhotoModal.title}</h3>
              <button
                className="lightbox-close-btn"
                onClick={() => setSelectedPhotoModal(null)}
              >
                <X size={18} />
              </button>
            </div>
            <div className="lightbox-body">
              <div className="lightbox-preview-frame">
                {selectedPhotoModal?.imageUrl ? (
                  <img
                    src={selectedPhotoModal.imageUrl}
                    alt={selectedPhotoModal.title}
                    style={{ maxWidth: '100%', maxHeight: '60vh', objectFit: 'contain', borderRadius: '4px' }}
                  />
                ) : (
                  renderMockupVisual(selectedPhotoModal.mockupType)
                )}
              </div>
              <div style={{ fontSize: '11px', color: '#64748b', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.5px' }}>
                Penjelasan Sekilas:
              </div>
              <p className="lightbox-caption-text">
                {selectedPhotoModal.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
