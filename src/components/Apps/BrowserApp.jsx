import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, ArrowRight, RotateCw, Lock, Star, ExternalLink, 
  Sparkles, Send, ShieldCheck, Download, Code2, Layers, Cpu,
  CheckCircle2, AlertCircle, Clock, Smartphone, Monitor, Brain,
  ChevronRight, X, ZoomIn, Info, FolderGit2, BookOpen, Share2
} from 'lucide-react';
import { WinIcon } from '../Common/WinIcon';
import { playClickSound } from '../../utils/sound';
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
        mockupType: 'tatagih-dashboard'
      },
      {
        id: 'tatagih-bot',
        title: 'Integrasi Telegram Bot Reminder Otomatis',
        caption: 'Workflow pengingat terjadwal yang mengirimkan notifikasi interaktif ke smartphone pengguna melalui Telegram Bot H-3 dan H-1 sebelum tanggal pendebitan saldo.',
        mockupType: 'tatagih-bot'
      },
      {
        id: 'tatagih-subs',
        title: 'Formulir Manajemen Langganan & Siklus Billing',
        caption: 'Antarmuka terperinci untuk menambahkan langganan baru, menentukan siklus penagihan (Bulanan/Tahunan), kategori pengeluaran, serta tanggal jatuh tempo.',
        mockupType: 'tatagih-table'
      },
      {
        id: 'tatagih-analytics',
        title: 'Analitik Distribusi Pengeluaran & Kategori',
        caption: 'Visualisasi grafik pengeluaran berdasarkan proporsi kategori (Entertainment, Productivity, Utilities) dan estimasi proyeksi biaya langganan tahunan.',
        mockupType: 'tatagih-analytics'
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
        mockupType: 'lintas-dash'
      },
      {
        id: 'lintas-touchpad',
        title: 'Virtual Precision Trackpad & Gesture Support',
        caption: 'Area sentuh layar penuh pada smartphone yang mengubah layar ponsel menjadi trackpad nirkabel responsif dengan gesture scroll dua jari dan klik tombol kanan/kiri.',
        mockupType: 'lintas-touchpad'
      },
      {
        id: 'lintas-media',
        title: 'Media Remote Controller & Windows Quick Actions',
        caption: 'Panel kendali pemutar multimedia (Play/Pause, Next, Volume slider) serta tombol pintas cepat One-Tap Lock PC dan Sleep untuk kenyamanan saat presentasi.',
        mockupType: 'lintas-media'
      },
      {
        id: 'lintas-clipboard',
        title: 'Sinkronisasi Clipboard Dua Arah & File Beam',
        caption: 'Fitur sinkronisasi teks clipboard instan antara smartphone dan PC serta pengiriman file lokal berkecepatan tinggi tanpa bergantung pada cloud pihak ketiga.',
        mockupType: 'lintas-sync'
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
        mockupType: 'neurofly-graph'
      },
      {
        id: 'neurofly-pathway',
        title: 'Sirkuit Deteksi Gerak Elementer (T4, T5, Mi1, Tm3)',
        caption: 'Pemodelan skema interneuron medula (Mi1, Tm3) yang menyediakan delay temporal untuk sel deteksi gerak terarah T4 dan T5 sebelum menuju lobula.',
        mockupType: 'neurofly-circuit'
      },
      {
        id: 'neurofly-pong',
        title: 'Simulasi Autopilot Pong Berbasis Sinyal Neuromorfik',
        caption: 'Antarmuka simulasi Pong interaktif di mana paddle dikendalikan oleh akumulasi potensial aksi dari sirkuit saraf visual biologis untuk melacak posisi bola.',
        mockupType: 'neurofly-sim'
      },
      {
        id: 'neurofly-metrics',
        title: 'Matriks Bobot Sinapsis & Pelacakan Objek LC11',
        caption: 'Distribusi kuantitatif kekuatan sinapsis dan vektor pemrosesan neuron proyeksi lobula LC11 dalam mendeteksi objek kecil yang bergerak cepat.',
        mockupType: 'neurofly-matrix'
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
        mockupType: 'temuin-map'
      },
      {
        id: 'temuin-detail',
        title: 'Formulir Laporan & Verifikasi Bukti Kepemilikan',
        caption: 'Sistem formulir pelaporan dengan fitur unggah foto bukti, deskripsi detail, serta pertanyaan rahasia untuk memvalidasi kepemilikan sah.',
        mockupType: 'temuin-detail'
      },
      {
        id: 'temuin-chat',
        title: 'Saluran Chat Aman Antara Penemu dan Pemilik',
        caption: 'Ruang obrolan langsung terenkripsi di dalam aplikasi untuk memfasilitasi serah terima barang tanpa perlu membagikan nomor telepon pribadi.',
        mockupType: 'temuin-chat'
      },
      {
        id: 'temuin-history',
        title: 'Dashboard Riwayat Klaim & Status Penemuan',
        caption: 'Panel pantau status laporan (Diverifikasi, Proses Serah Terima, Selesai) dengan riwayat aktivitas pelaporan lengkap.',
        mockupType: 'temuin-history'
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
        mockupType: 'dompetq-dash'
      },
      {
        id: 'dompetq-split',
        title: 'Fitur Split Bill Komunitas Otomatis',
        caption: 'Kalkulator cerdas pembagian tagihan makan atau liburan bersama teman secara adil lengkap dengan pengingat pembayaran.',
        mockupType: 'tatagih-dashboard'
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
        mockupType: 'makalah-dash'
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
        <div style={{ width: '92%', height: '88%', backgroundColor: '#0f172a', borderRadius: '8px', border: '1px solid #334155', padding: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #1e293b', paddingBottom: '6px' }}>
            <span style={{ fontSize: '11px', fontWeight: 700, color: '#38bdf8' }}>💳 TATAGIH FINANCIAL DASHBOARD</span>
            <span style={{ fontSize: '10px', color: '#4ade80', backgroundColor: 'rgba(74, 222, 128, 0.1)', padding: '2px 6px', borderRadius: '4px' }}>Demo Data</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
            <div style={{ backgroundColor: '#1e293b', padding: '6px 8px', borderRadius: '6px' }}>
              <div style={{ fontSize: '9px', color: '#94a3b8' }}>TOTAL BULAN INI</div>
              <div style={{ fontSize: '14px', fontWeight: 800, color: '#ffffff' }}>Rp 320.000</div>
            </div>
            <div style={{ backgroundColor: '#1e293b', padding: '6px 8px', borderRadius: '6px' }}>
              <div style={{ fontSize: '9px', color: '#94a3b8' }}>TAGIHAN TERDEKAT</div>
              <div style={{ fontSize: '11px', fontWeight: 700, color: '#f59e0b' }}>Netflix (H-2)</div>
            </div>
          </div>
          <div style={{ flex: 1, backgroundColor: '#1e293b', borderRadius: '6px', padding: '6px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '9.5px', color: '#e2e8f0', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '3px' }}>
              <span>🍿 Netflix Premium</span>
              <span style={{ fontWeight: 600 }}>Rp 186.000</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '9.5px', color: '#e2e8f0', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '3px' }}>
              <span>📺 YouTube Premium</span>
              <span style={{ fontWeight: 600 }}>Rp 59.000</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '9.5px', color: '#e2e8f0' }}>
              <span>🎮 Xbox Game Pass</span>
              <span style={{ fontWeight: 600 }}>Rp 75.000</span>
            </div>
          </div>
        </div>
      );

    case 'tatagih-bot':
      return (
        <div style={{ width: '92%', height: '88%', backgroundColor: '#0e1621', borderRadius: '8px', border: '1px solid #242f3d', padding: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', borderBottom: '1px solid #17212b', paddingBottom: '6px' }}>
            <div style={{ width: '22px', height: '22px', borderRadius: '50%', backgroundColor: '#2b5278', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px' }}>🤖</div>
            <div>
              <div style={{ fontSize: '11px', fontWeight: 600, color: '#ffffff' }}>Tatagih Reminder Bot</div>
              <div style={{ fontSize: '9px', color: '#4ade80' }}>bot verified</div>
            </div>
          </div>
          <div style={{ alignSelf: 'flex-start', maxWidth: '90%', backgroundColor: '#182533', padding: '8px 10px', borderRadius: '8px 8px 8px 0', border: '1px solid #2b5278' }}>
            <div style={{ fontSize: '10px', color: '#f59e0b', fontWeight: 700, marginBottom: '2px' }}>⚠️ Peringatan Tagihan H-3</div>
            <div style={{ fontSize: '9.5px', color: '#e2e8f0', lineHeight: 1.4 }}>
              Tagihan <b>Netflix Premium</b> sebesar <b>Rp 186.000</b> akan jatuh tempo pada 18 Oktober.
            </div>
            <div style={{ fontSize: '8px', color: '#64748b', textAlign: 'right', marginTop: '4px' }}>08:00 WIB</div>
          </div>
          <div style={{ display: 'flex', gap: '6px', marginTop: 'auto' }}>
            <div style={{ flex: 1, backgroundColor: '#2b5278', color: '#ffffff', textAlign: 'center', padding: '4px', borderRadius: '4px', fontSize: '9px', fontWeight: 600 }}>Sudah Dibayar</div>
            <div style={{ flex: 1, backgroundColor: 'rgba(255,255,255,0.06)', color: '#94a3b8', textAlign: 'center', padding: '4px', borderRadius: '4px', fontSize: '9px' }}>Snooze (H-1)</div>
          </div>
        </div>
      );

    case 'tatagih-table':
      return (
        <div style={{ width: '92%', height: '88%', backgroundColor: '#0f172a', borderRadius: '8px', border: '1px solid #334155', padding: '12px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, color: '#ffffff' }}>➕ Tambah Subscription Baru</div>
          <div style={{ backgroundColor: '#1e293b', padding: '6px 8px', borderRadius: '4px', fontSize: '9.5px', color: '#94a3b8' }}>
            Nama Layanan: <span style={{ color: '#ffffff', fontWeight: 600 }}>Spotify Family Plan</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
            <div style={{ backgroundColor: '#1e293b', padding: '6px 8px', borderRadius: '4px', fontSize: '9.5px', color: '#94a3b8' }}>
              Biaya: <span style={{ color: '#ffffff', fontWeight: 600 }}>Rp 86.900</span>
            </div>
            <div style={{ backgroundColor: '#1e293b', padding: '6px 8px', borderRadius: '4px', fontSize: '9.5px', color: '#94a3b8' }}>
              Siklus: <span style={{ color: '#38bdf8', fontWeight: 600 }}>Bulanan</span>
            </div>
          </div>
          <div style={{ backgroundColor: '#1e293b', padding: '6px 8px', borderRadius: '4px', fontSize: '9.5px', color: '#94a3b8' }}>
            Reminder: <span style={{ color: '#4ade80', fontWeight: 600 }}>Aktif (Telegram Bot H-3, H-1)</span>
          </div>
          <div style={{ marginTop: 'auto', backgroundColor: '#2563eb', color: '#ffffff', textAlign: 'center', padding: '5px', borderRadius: '4px', fontSize: '10px', fontWeight: 700 }}>
            Simpan Langganan
          </div>
        </div>
      );

    case 'tatagih-analytics':
      return (
        <div style={{ width: '92%', height: '88%', backgroundColor: '#0f172a', borderRadius: '8px', border: '1px solid #334155', padding: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, color: '#a855f7' }}>📊 Analisis Pengeluaran Per Kategori</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', margin: '4px 0' }}>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '9px', marginBottom: '2px' }}>
                <span>Entertainment (58%)</span>
                <span>Rp 186.000</span>
              </div>
              <div style={{ height: '6px', backgroundColor: '#334155', borderRadius: '3px', overflow: 'hidden' }}>
                <div style={{ width: '58%', height: '100%', backgroundColor: '#ec4899' }}></div>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', margin: '4px 0' }}>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '9px', marginBottom: '2px' }}>
                <span>Gaming / Hobby (24%)</span>
                <span>Rp 75.000</span>
              </div>
              <div style={{ height: '6px', backgroundColor: '#334155', borderRadius: '3px', overflow: 'hidden' }}>
                <div style={{ width: '24%', height: '100%', backgroundColor: '#3b82f6' }}></div>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', margin: '4px 0' }}>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '9px', marginBottom: '2px' }}>
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
        <div style={{ width: '92%', height: '88%', backgroundColor: '#111827', borderRadius: '8px', border: '1px solid #374151', padding: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #1f2937', paddingBottom: '6px' }}>
            <span style={{ fontSize: '11px', fontWeight: 700, color: '#60a5fa' }}>📱 LINTAS COMPANION DAEMON</span>
            <span style={{ fontSize: '9px', color: '#22c55e', backgroundColor: 'rgba(34,197,94,0.1)', padding: '2px 6px', borderRadius: '4px' }}>CONNECTED</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', backgroundColor: '#1f2937', padding: '8px', borderRadius: '6px' }}>
            <div style={{ fontSize: '20px' }}>📱</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '11px', fontWeight: 700, color: '#ffffff' }}>Oppo A53 (Android 12)</div>
              <div style={{ fontSize: '9px', color: '#9ca3af' }}>IP: 192.168.1.14 • Port: 8089</div>
            </div>
            <div style={{ fontSize: '10px', fontWeight: 600, color: '#4ade80' }}>8 ms</div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
            <div style={{ backgroundColor: '#1f2937', padding: '6px', borderRadius: '4px', textAlign: 'center', fontSize: '9.5px', color: '#e5e7eb' }}>Trackpad Active</div>
            <div style={{ backgroundColor: '#1f2937', padding: '6px', borderRadius: '4px', textAlign: 'center', fontSize: '9.5px', color: '#e5e7eb' }}>Clipboard Synced</div>
          </div>
        </div>
      );

    case 'lintas-touchpad':
      return (
        <div style={{ width: '92%', height: '88%', backgroundColor: '#09090b', borderRadius: '8px', border: '1px solid #27272a', padding: '10px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '10px', color: '#a1a1aa' }}>
            <span>VIRTUAL TOUCHPAD</span>
            <span>Sensitivity: 1.2x</span>
          </div>
          <div style={{ flex: 1, border: '1px dashed #3f3f46', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '4px' }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#3b82f6', opacity: 0.8 }}></div>
            <div style={{ fontSize: '9px', color: '#71717a' }}>Tap or drag to control cursor</div>
          </div>
          <div style={{ display: 'flex', gap: '6px' }}>
            <div style={{ flex: 1, backgroundColor: '#27272a', textAlign: 'center', padding: '6px', borderRadius: '4px', fontSize: '9.5px', color: '#ffffff' }}>Left Click</div>
            <div style={{ flex: 1, backgroundColor: '#27272a', textAlign: 'center', padding: '6px', borderRadius: '4px', fontSize: '9.5px', color: '#ffffff' }}>Right Click</div>
          </div>
        </div>
      );

    case 'lintas-media':
      return (
        <div style={{ width: '92%', height: '88%', backgroundColor: '#111827', borderRadius: '8px', border: '1px solid #374151', padding: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, color: '#f59e0b' }}>🎵 Windows Media Controller</div>
          <div style={{ backgroundColor: '#1f2937', padding: '8px', borderRadius: '6px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <div style={{ fontSize: '10px', fontWeight: 600, color: '#ffffff' }}>Bohemian Rhapsody — Queen</div>
            <div style={{ height: '4px', backgroundColor: '#374151', borderRadius: '2px', overflow: 'hidden' }}>
              <div style={{ width: '64%', height: '100%', backgroundColor: '#f59e0b' }}></div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', fontSize: '14px', color: '#ffffff' }}>
              <span>⏮️</span>
              <span>⏸️</span>
              <span>⏭️</span>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '6px', marginTop: 'auto' }}>
            <div style={{ flex: 1, backgroundColor: '#dc2626', color: '#ffffff', textAlign: 'center', padding: '5px', borderRadius: '4px', fontSize: '9.5px', fontWeight: 600 }}>🔒 Lock PC</div>
            <div style={{ flex: 1, backgroundColor: '#374151', color: '#ffffff', textAlign: 'center', padding: '5px', borderRadius: '4px', fontSize: '9.5px', fontWeight: 600 }}>Vol: 72%</div>
          </div>
        </div>
      );

    case 'lintas-sync':
      return (
        <div style={{ width: '92%', height: '88%', backgroundColor: '#111827', borderRadius: '8px', border: '1px solid #374151', padding: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, color: '#38bdf8' }}>📋 Real-Time Clipboard Sync</div>
          <div style={{ backgroundColor: '#1f2937', padding: '8px', borderRadius: '6px', borderLeft: '3px solid #38bdf8' }}>
            <div style={{ fontSize: '8.5px', color: '#9ca3af', marginBottom: '2px' }}>COPIED FROM PHONE (10:14 AM)</div>
            <div style={{ fontSize: '9.5px', color: '#ffffff', fontFamily: 'monospace' }}>https://github.com/agungkrisna/lintas</div>
          </div>
          <div style={{ backgroundColor: '#1f2937', padding: '8px', borderRadius: '6px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '8.5px', color: '#9ca3af', marginBottom: '3px' }}>
              <span>LAN File Beam: presentation.pdf</span>
              <span>100%</span>
            </div>
            <div style={{ height: '4px', backgroundColor: '#374151', borderRadius: '2px', overflow: 'hidden' }}>
              <div style={{ width: '100%', height: '100%', backgroundColor: '#22c55e' }}></div>
            </div>
          </div>
        </div>
      );

    case 'neurofly-graph':
      return (
        <div style={{ width: '92%', height: '88%', backgroundColor: '#030712', borderRadius: '8px', border: '1px solid #1f2937', padding: '10px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: '#818cf8', fontWeight: 700 }}>
            <span>🧠 CONNECTOME TOPOLOGY</span>
            <span style={{ color: '#38bdf8', fontSize: '9px' }}>438 NEURONS</span>
          </div>
          <div style={{ flex: 1, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ position: 'absolute', width: '70px', height: '70px', borderRadius: '50%', border: '1px dashed rgba(129,140,248,0.3)' }}></div>
            <div style={{ position: 'absolute', top: '15px', left: '25px', backgroundColor: '#f43f5e', color: '#ffffff', fontSize: '8px', padding: '2px 5px', borderRadius: '3px' }}>LC11</div>
            <div style={{ position: 'absolute', top: '20px', right: '30px', backgroundColor: '#3b82f6', color: '#ffffff', fontSize: '8px', padding: '2px 5px', borderRadius: '3px' }}>T4a</div>
            <div style={{ position: 'absolute', bottom: '25px', left: '35px', backgroundColor: '#10b981', color: '#ffffff', fontSize: '8px', padding: '2px 5px', borderRadius: '3px' }}>Mi1</div>
            <div style={{ position: 'absolute', bottom: '20px', right: '25px', backgroundColor: '#a855f7', color: '#ffffff', fontSize: '8px', padding: '2px 5px', borderRadius: '3px' }}>Tm3</div>
            <div style={{ width: '14px', height: '14px', borderRadius: '50%', backgroundColor: '#fbbf24' }}></div>
          </div>
          <div style={{ fontSize: '8.5px', color: '#64748b', textAlign: 'center' }}>2,199 Directed Synaptic Contacts Mapped</div>
        </div>
      );

    case 'neurofly-circuit':
      return (
        <div style={{ width: '92%', height: '88%', backgroundColor: '#030712', borderRadius: '8px', border: '1px solid #1f2937', padding: '10px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <div style={{ fontSize: '10px', color: '#ec4899', fontWeight: 700 }}>⚡ MOTION DETECTOR DELAY LINE</div>
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 8px' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '8.5px', color: '#94a3b8' }}>Photoreceptor</div>
              <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: '#334155', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9px', margin: '3px auto' }}>R1-6</div>
            </div>
            <div style={{ color: '#64748b', fontSize: '10px' }}>➔</div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '8.5px', color: '#94a3b8' }}>Delay Mi1</div>
              <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: '#1e3a8a', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9px', margin: '3px auto' }}>τ_1</div>
            </div>
            <div style={{ color: '#64748b', fontSize: '10px' }}>➔</div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '8.5px', color: '#94a3b8' }}>Motion T4/T5</div>
              <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: '#065f46', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9px', margin: '3px auto' }}>EMD</div>
            </div>
          </div>
          <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '4px', borderRadius: '4px', fontSize: '8.5px', color: '#cbd5e1', textAlign: 'center' }}>
            Hassenstein-Reichardt Correlator Simulation
          </div>
        </div>
      );

    case 'neurofly-sim':
      return (
        <div style={{ width: '92%', height: '88%', backgroundColor: '#090d16', borderRadius: '8px', border: '1px solid #1e293b', padding: '10px', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '9.5px', color: '#94a3b8', borderBottom: '1px solid #1e293b', paddingBottom: '4px', marginBottom: '6px' }}>
            <span>AUTOPILOT PONG PADDLE</span>
            <span style={{ color: '#4ade80' }}>NEURAL FIRE: UP (0.84)</span>
          </div>
          <div style={{ flex: 1, border: '1px solid #1e293b', position: 'relative', overflow: 'hidden', backgroundColor: '#020617' }}>
            <div style={{ position: 'absolute', top: '24px', left: '8px', width: '5px', height: '36px', backgroundColor: '#38bdf8', borderRadius: '2px' }}></div>
            <div style={{ position: 'absolute', top: '38px', left: '120px', width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#f43f5e' }}></div>
            <div style={{ position: 'absolute', top: '10px', right: '8px', width: '5px', height: '42px', backgroundColor: '#a855f7', borderRadius: '2px' }}></div>
            <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, borderTop: '1px dashed rgba(255,255,255,0.1)' }}></div>
          </div>
        </div>
      );

    case 'neurofly-matrix':
      return (
        <div style={{ width: '92%', height: '88%', backgroundColor: '#030712', borderRadius: '8px', border: '1px solid #1f2937', padding: '10px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <div style={{ fontSize: '10px', color: '#38bdf8', fontWeight: 700 }}>📊 neuPrint MaleCNS v1.0 Synapse Matrix</div>
          <div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '3px', backgroundColor: '#0b1120', padding: '4px', borderRadius: '4px' }}>
            {[1, 0.4, 0.8, 0.2, 0.9, 0.5, 0.3, 0.7, 0.1, 0.9, 0.4, 0.6, 0.8, 0.2, 0.5, 1, 0.3, 0.7, 0.6, 0.9, 0.4, 0.2, 0.8, 0.1].map((v, i) => (
              <div key={i} style={{ backgroundColor: `rgba(56, 189, 248, ${v})`, borderRadius: '2px', height: '100%' }}></div>
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '8.5px', color: '#94a3b8' }}>
            <span>LC11 Target Tracking</span>
            <span>12,282 Total Contacts</span>
          </div>
        </div>
      );

    case 'temuin-map':
      return (
        <div style={{ width: '92%', height: '88%', backgroundColor: '#064e3b', borderRadius: '8px', border: '1px solid #059669', padding: '10px', display: 'flex', flexDirection: 'column', gap: '6px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: '#6ee7b7', fontWeight: 700 }}>
            <span>📍 TEMUIN GEOLOCATION MAP</span>
            <span style={{ backgroundColor: 'rgba(5,150,105,0.4)', padding: '2px 6px', borderRadius: '4px' }}>Radius: 3 KM</span>
          </div>
          <div style={{ flex: 1, backgroundColor: '#022c22', borderRadius: '6px', border: '1px dashed #059669', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ position: 'absolute', top: '15px', left: '25px', backgroundColor: '#ef4444', color: '#ffffff', fontSize: '8px', padding: '2px 6px', borderRadius: '4px', fontWeight: 700 }}>❗ Dompet Hilang</div>
            <div style={{ position: 'absolute', bottom: '20px', right: '30px', backgroundColor: '#10b981', color: '#ffffff', fontSize: '8px', padding: '2px 6px', borderRadius: '4px', fontWeight: 700 }}>✓ Kunci Ditemukan</div>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#3b82f6', border: '2px solid #ffffff' }}></div>
          </div>
        </div>
      );

    case 'temuin-detail':
      return (
        <div style={{ width: '92%', height: '88%', backgroundColor: '#064e3b', borderRadius: '8px', border: '1px solid #059669', padding: '10px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, color: '#a7f3d0' }}>🔍 Verifikasi Klaim Barang</div>
          <div style={{ backgroundColor: '#022c22', padding: '6px 8px', borderRadius: '4px', fontSize: '9px', color: '#d1fae5' }}>
            Barang: <b>Dompet Kulit Cokelat (BCA, KTP)</b>
          </div>
          <div style={{ backgroundColor: '#022c22', padding: '6px 8px', borderRadius: '4px', fontSize: '9px', color: '#6ee7b7' }}>
            Pertanyaan Verifikasi: <i>Apa merek gantungan di dompet?</i>
          </div>
          <div style={{ marginTop: 'auto', backgroundColor: '#10b981', color: '#ffffff', textAlign: 'center', padding: '5px', borderRadius: '4px', fontSize: '9.5px', fontWeight: 700 }}>
            Ajukan Bukti Kepemilikan
          </div>
        </div>
      );

    case 'temuin-chat':
      return (
        <div style={{ width: '92%', height: '88%', backgroundColor: '#064e3b', borderRadius: '8px', border: '1px solid #059669', padding: '10px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <div style={{ fontSize: '10.5px', fontWeight: 700, color: '#6ee7b7', borderBottom: '1px solid #059669', paddingBottom: '4px' }}>💬 Chat Penemu & Pemilik (Aman)</div>
          <div style={{ alignSelf: 'flex-start', backgroundColor: '#022c22', padding: '6px', borderRadius: '6px', fontSize: '9px', color: '#d1fae5', maxWidth: '85%' }}>
            Halo, kunci motor Beat Anda sudah saya titipkan di pos satpam kampus ya.
          </div>
          <div style={{ alignSelf: 'flex-end', backgroundColor: '#10b981', padding: '6px', borderRadius: '6px', fontSize: '9px', color: '#ffffff', maxWidth: '85%' }}>
            Terima kasih banyak mas! Segera saya ambil siang ini.
          </div>
        </div>
      );

    case 'temuin-history':
      return (
        <div style={{ width: '92%', height: '88%', backgroundColor: '#064e3b', borderRadius: '8px', border: '1px solid #059669', padding: '10px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, color: '#6ee7b7' }}>📋 Status Laporan Penemuan</div>
          <div style={{ backgroundColor: '#022c22', padding: '6px 8px', borderRadius: '4px', display: 'flex', justifyContent: 'space-between', fontSize: '9px', color: '#d1fae5' }}>
            <span>KTM Universitas</span>
            <span style={{ color: '#34d399', fontWeight: 700 }}>SELESAI (KLAIMED)</span>
          </div>
          <div style={{ backgroundColor: '#022c22', padding: '6px 8px', borderRadius: '4px', display: 'flex', justifyContent: 'space-between', fontSize: '9px', color: '#d1fae5' }}>
            <span>Kunci Motor Honda</span>
            <span style={{ color: '#fbbf24', fontWeight: 700 }}>PROSES SERAH TERIMA</span>
          </div>
        </div>
      );

    case 'dompetq-dash':
      return (
        <div style={{ width: '92%', height: '88%', backgroundColor: '#1e1b4b', borderRadius: '8px', border: '1px solid #4338ca', padding: '10px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: '#818cf8', fontWeight: 700 }}>
            <span>💳 DOMPETQ FINTECH WALLET</span>
            <span style={{ color: '#4ade80' }}>ACTIVE</span>
          </div>
          <div style={{ backgroundColor: '#312e81', padding: '8px', borderRadius: '6px' }}>
            <div style={{ fontSize: '8.5px', color: '#c7d2fe' }}>SALDO UTAMA</div>
            <div style={{ fontSize: '14px', fontWeight: 800, color: '#ffffff' }}>Rp 1.450.000</div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px', fontSize: '9px', textAlign: 'center' }}>
            <div style={{ backgroundColor: '#4338ca', color: '#ffffff', padding: '4px', borderRadius: '4px' }}>Scan QRIS</div>
            <div style={{ backgroundColor: '#4338ca', color: '#ffffff', padding: '4px', borderRadius: '4px' }}>Split Bill</div>
          </div>
        </div>
      );

    case 'makalah-dash':
      return (
        <div style={{ width: '92%', height: '88%', backgroundColor: '#1c1917', borderRadius: '8px', border: '1px solid #44403c', padding: '10px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <div style={{ fontSize: '10.5px', fontWeight: 700, color: '#fbbf24' }}>🤖 Makalah Generator — AI Research Assistant</div>
          <div style={{ backgroundColor: '#292524', padding: '6px', borderRadius: '4px', fontSize: '9px', color: '#e7e5e4' }}>
            Topik: <b>Implementasi Convolutional Neural Network pada Citra Medis</b>
          </div>
          <div style={{ backgroundColor: '#292524', padding: '6px', borderRadius: '4px', fontSize: '8.5px', color: '#a8a29e' }}>
            Format: APA 7th Edition • Bab 1 & 2 Draf Siap Diekspor ke LaTeX/PDF
          </div>
        </div>
      );

    default:
      return null;
  }
};

export const BrowserApp = ({ onOpenFile, initialProject = 'tatagih', initialUrl = null, onLaunchApp }) => {
  const [activeProjectId, setActiveProjectId] = useState(initialProject || 'tatagih');
  const [selectedPhotoModal, setSelectedPhotoModal] = useState(null);
  const [isBookmarked, setIsBookmarked] = useState(true);
  const [isReloading, setIsReloading] = useState(false);

  useEffect(() => {
    if (initialProject && PROJECTS_DATA[initialProject]) {
      setActiveProjectId(initialProject);
    }
  }, [initialProject]);

  const currentProject = PROJECTS_DATA[activeProjectId] || PROJECTS_DATA.tatagih;
  const currentUrl = `https://agungkrisna.dev/projects/${currentProject.id}`;

  const handleSelectProject = (projectId) => {
    playClickSound();
    setActiveProjectId(projectId);
  };

  const handleReload = () => {
    playClickSound();
    setIsReloading(true);
    setTimeout(() => {
      setIsReloading(false);
    }, 400);
  };

  const projectKeys = Object.keys(PROJECTS_DATA);
  const currentIndex = projectKeys.indexOf(activeProjectId);
  const prevProjectKey = projectKeys[(currentIndex - 1 + projectKeys.length) % projectKeys.length];
  const nextProjectKey = projectKeys[(currentIndex + 1) % projectKeys.length];

  return (
    <div className="chrome-browser">
      <div className="chrome-tabstrip">
        {projectKeys.map((pKey) => {
          const p = PROJECTS_DATA[pKey];
          const isActive = pKey === activeProjectId;
          return (
            <div
              key={pKey}
              className={`chrome-tab ${isActive ? 'active' : ''}`}
              onClick={() => handleSelectProject(pKey)}
            >
              <WinIcon name={p.id} size={15} />
              <span className="chrome-tab-title">{p.name} — Showcase</span>
              <span className="chrome-tab-close">
                <X size={12} />
              </span>
            </div>
          );
        })}
        <div
          className="chrome-newtab-btn"
          title="New Tab"
          onClick={() => handleSelectProject('tatagih')}
        >
          +
        </div>
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
          <span>💳 Tatagih (Bill Manager)</span>
        </div>
        <div
          className={`chrome-bookmark-item ${activeProjectId === 'lintas' ? 'active' : ''}`}
          onClick={() => handleSelectProject('lintas')}
        >
          <WinIcon name="lintas" size={13} />
          <span>📱 Lintas (Companion Utility)</span>
        </div>
        <div
          className={`chrome-bookmark-item ${activeProjectId === 'neurofly' ? 'active' : ''}`}
          onClick={() => handleSelectProject('neurofly')}
        >
          <WinIcon name="neurofly" size={13} />
          <span>🧠 NeuroFly (Drosophila × Pong)</span>
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
          <div className="project-nav-pills">
            <span style={{ fontSize: '12px', color: '#64748b', fontWeight: 600, marginRight: '4px' }}>
              PILIH PROYEK:
            </span>
            {projectKeys.map((pKey) => {
              const p = PROJECTS_DATA[pKey];
              const isActive = pKey === activeProjectId;
              return (
                <button
                  key={pKey}
                  className={`project-nav-pill ${isActive ? 'active' : ''}`}
                  onClick={() => handleSelectProject(pKey)}
                >
                  <WinIcon name={p.id} size={14} />
                  <span>{p.name}</span>
                </button>
              );
            })}
          </div>

          <div className="showcase-hero">
            <div className="hero-badge-row">
              <span className="hero-category-tag">{currentProject.category}</span>
              <span className="hero-status-tag">
                <span className="hero-status-dot"></span>
                {currentProject.status}
              </span>
              <span style={{ fontSize: '11px', color: '#94a3b8' }}>
                Tahun Rilis: {currentProject.period}
              </span>
            </div>

            <h1 className="hero-title">{currentProject.fullTitle}</h1>
            <p className="hero-subtitle">{currentProject.solution}</p>

            <div className="hero-stack-pills">
              {currentProject.stack.map((item, idx) => (
                <span key={idx} className="hero-stack-pill">{item}</span>
              ))}
            </div>

            <div className="hero-actions-row">
              <a
                href={currentProject.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="hero-action-btn-primary"
              >
                <FolderGit2 size={16} />
                <span>Lihat Source Code (GitHub)</span>
              </a>
              <a
                href={currentProject.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="hero-action-btn-secondary"
              >
                <ExternalLink size={15} />
                <span>Kunjungi Live Demo</span>
              </a>
            </div>
          </div>

          <div className="stats-grid">
            {currentProject.stats.map((stat, idx) => (
              <div key={idx} className="stat-card">
                <div className="stat-label">{stat.label}</div>
                <div className="stat-value">{stat.value}</div>
              </div>
            ))}
          </div>

          <div className="section-heading-row">
            <h2 className="section-title">
              <Sparkles size={20} color="#3b82f6" />
              <span>Galeri Tangkapan Layar & Mockup UI</span>
            </h2>
            <span className="section-badge-note">
              Klik gambar untuk memperbesar preview
            </span>
          </div>

          <div className="gallery-grid">
            {currentProject.photos.map((photo) => (
              <div
                key={photo.id}
                className="mockup-card"
                onClick={() => setSelectedPhotoModal(photo)}
              >
                <div className="mockup-screen-container">
                  {renderMockupVisual(photo.mockupType)}
                </div>
                <div className="mockup-card-body">
                  <div className="mockup-card-title">{photo.title}</div>
                  <p className="mockup-card-caption">{photo.caption}</p>
                  <div className="mockup-card-zoom-hint">
                    <ZoomIn size={13} />
                    <span>Perbesar Gambar & Detail</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="section-heading-row">
            <h2 className="section-title">
              <Info size={20} color="#8b5cf6" />
              <span>Detail Penjelasan & Latar Belakang Aplikasi</span>
            </h2>
          </div>

          <div className="deepdive-grid">
            <div className="deepdive-box">
              <div className="deepdive-box-title">
                <AlertCircle size={18} color="#f59e0b" />
                <span>Latar Belakang & Masalah (Problem Statement)</span>
              </div>
              <p className="deepdive-box-text">{currentProject.problem}</p>
            </div>

            <div className="deepdive-box">
              <div className="deepdive-box-title">
                <CheckCircle2 size={18} color="#22c55e" />
                <span>Solusi & Pendekatan yang Diterapkan</span>
              </div>
              <p className="deepdive-box-text">{currentProject.solution}</p>
            </div>
          </div>

          <div className="section-heading-row">
            <h2 className="section-title">
              <Layers size={20} color="#06b6d4" />
              <span>Fitur-Fitur Utama (Key Features)</span>
            </h2>
          </div>

          <div className="features-list">
            {currentProject.keyFeatures.map((feat, idx) => (
              <div key={idx} className="feature-item-row">
                <div className="feature-icon-badge">
                  <CheckCircle2 size={18} />
                </div>
                <div className="feature-item-content">
                  <div className="feature-item-title">{feat.title}</div>
                  <p className="feature-item-desc">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="section-heading-row">
            <h2 className="section-title">
              <Cpu size={20} color="#ec4899" />
              <span>Arsitektur Sistem & Spesifikasi Teknis</span>
            </h2>
          </div>

          <div className="deepdive-box" style={{ marginBottom: '32px' }}>
            <p className="deepdive-box-text" style={{ fontSize: '13.5px', lineHeight: '1.7' }}>
              {currentProject.architecture}
            </p>
          </div>

          <div className="bottom-project-switch-bar">
            <div>
              <div style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', marginBottom: '3px' }}>
                Jelajahi Proyek Lainnya
              </div>
              <div style={{ fontSize: '14px', fontWeight: 600, color: '#ffffff' }}>
                Beralih ke dokumentasi aplikasi berikutnya
              </div>
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                className="switch-nav-btn"
                onClick={() => handleSelectProject(prevProjectKey)}
              >
                <ArrowLeft size={14} />
                <span>{PROJECTS_DATA[prevProjectKey].name}</span>
              </button>
              <button
                className="switch-nav-btn"
                onClick={() => handleSelectProject(nextProjectKey)}
              >
                <span>{PROJECTS_DATA[nextProjectKey].name}</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
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
                {renderMockupVisual(selectedPhotoModal.mockupType)}
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
