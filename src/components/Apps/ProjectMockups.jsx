import React from 'react';
import {
  Shield, ShieldAlert, BatteryCharging, Radio, QrCode, Search, Gamepad2, Heart,
  Trash2, Sparkles, Calendar, Users, Bot, TrendingUp, PieChart, Filter, Check,
  AlertTriangle, Monitor, Smartphone, CheckCircle2, Lock, SkipBack, Pause,
  SkipForward, Send, ShieldCheck, Download, Plus, X, ArrowLeft, ArrowRight,
  ExternalLink, ZoomIn, Info, Code2, Layers, Cpu, CreditCard, DollarSign, FileText,
  Clock, Brain, ChevronDown, ChevronRight
} from 'lucide-react';

const renderSigapPhoneMockup = (type) => {
  const renderPhoneScreenContent = () => {
    switch (type) {
      case 'sigap-home':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '8px', borderBottom: '1px solid #1f2937' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Shield size={16} color="#38bdf8" />
                <span style={{ fontSize: '13px', fontWeight: 800, color: '#f8fafc', letterSpacing: '0.5px' }}>SIGAP</span>
              </div>
              <span style={{ fontSize: '9px', backgroundColor: '#334155', color: '#cbd5e1', padding: '2px 6px', borderRadius: '4px', fontWeight: 600 }}>v1.0 Local</span>
            </div>

            <div style={{ backgroundColor: '#111827', border: '1px solid #1f2937', borderRadius: '12px', padding: '12px', textAlign: 'center', margin: '8px 0' }}>
              <div style={{ fontSize: '9.5px', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>Status Pengamanan</div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', backgroundColor: 'rgba(148, 163, 184, 0.1)', border: '1px solid #475569', padding: '3px 10px', borderRadius: '12px' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#94a3b8' }}></span>
                <span style={{ fontSize: '11px', fontWeight: 700, color: '#e2e8f0' }}>DISARMED (NONAKTIF)</span>
              </div>
              <div style={{ fontSize: '10px', color: '#64748b', marginTop: '6px' }}>Perangkat aman digunakan</div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', margin: '4px 0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#0f172a', padding: '7px 10px', borderRadius: '8px', border: '1px solid #1e293b' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Radio size={13} color="#38bdf8" />
                  <span style={{ fontSize: '10px', color: '#cbd5e1', fontWeight: 600 }}>Deteksi Gerakan (XYZ)</span>
                </div>
                <span style={{ fontSize: '9px', color: '#38bdf8', fontWeight: 700 }}>ON (Δ 2.0)</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#0f172a', padding: '7px 10px', borderRadius: '8px', border: '1px solid #1e293b' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <BatteryCharging size={13} color="#22c55e" />
                  <span style={{ fontSize: '10px', color: '#cbd5e1', fontWeight: 600 }}>Deteksi Cabut Charger</span>
                </div>
                <span style={{ fontSize: '9px', color: '#22c55e', fontWeight: 700 }}>ON</span>
              </div>
            </div>

            <div style={{ margin: '8px 0', textAlign: 'center' }}>
              <div style={{
                backgroundColor: '#2563eb',
                color: '#ffffff',
                borderRadius: '12px',
                padding: '10px 14px',
                fontSize: '12px',
                fontWeight: 800,
                letterSpacing: '0.5px',
                boxShadow: '0 4px 14px rgba(37, 99, 235, 0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px'
              }}>
                <Lock size={14} />
                <span>AKTIFKAN SISTEM</span>
              </div>
              <div style={{ fontSize: '9px', color: '#64748b', marginTop: '4px' }}>Ada jeda peletakan 5 detik setelah ditekan</div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-around', paddingTop: '8px', borderTop: '1px solid #1f2937' }}>
              <div style={{ textAlign: 'center', color: '#38bdf8', fontSize: '9px', fontWeight: 700 }}>Beranda</div>
              <div style={{ textAlign: 'center', color: '#64748b', fontSize: '9px' }}>Riwayat (0)</div>
              <div style={{ textAlign: 'center', color: '#64748b', fontSize: '9px' }}>Pengaturan</div>
            </div>
          </div>
        );

      case 'sigap-countdown':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', alignItems: 'center', textAlign: 'center' }}>
            <div style={{ paddingTop: '8px' }}>
              <div style={{ fontSize: '12px', fontWeight: 700, color: '#f59e0b', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Masa Jeda Penempatan
              </div>
              <div style={{ fontSize: '10px', color: '#94a3b8', marginTop: '4px', maxWidth: '210px' }}>
                Segera letakkan smartphone di atas meja datar sebelum sensor aktif.
              </div>
            </div>

            <div style={{
              width: '110px',
              height: '110px',
              borderRadius: '50%',
              border: '4px solid #f59e0b',
              boxShadow: '0 0 20px rgba(245, 158, 11, 0.3)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'radial-gradient(circle, rgba(245,158,11,0.15) 0%, rgba(15,23,42,0) 70%)'
            }}>
              <span style={{ fontSize: '38px', fontWeight: 900, color: '#ffffff', lineHeight: 1 }}>05</span>
              <span style={{ fontSize: '9px', color: '#f59e0b', fontWeight: 700, textTransform: 'uppercase', marginTop: '2px' }}>Detik</span>
            </div>

            <div style={{ width: '100%' }}>
              <div style={{ backgroundColor: '#1e293b', padding: '6px 10px', borderRadius: '6px', fontSize: '9.5px', color: '#cbd5e1', marginBottom: '8px' }}>
                Sensor mengunci baseline XYZ saat waktu habis
              </div>
              <div style={{ backgroundColor: '#334155', color: '#ffffff', padding: '8px', borderRadius: '8px', fontSize: '10.5px', fontWeight: 700 }}>
                Batal (Verifikasi PIN)
              </div>
            </div>
          </div>
        );

      case 'sigap-armed':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', textAlign: 'center' }}>
            <div style={{ paddingTop: '6px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', backgroundColor: 'rgba(34, 197, 94, 0.15)', border: '1px solid #22c55e', padding: '3px 12px', borderRadius: '14px' }}>
                <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#22c55e' }}></span>
                <span style={{ fontSize: '11px', fontWeight: 800, color: '#4ade80', letterSpacing: '0.5px' }}>SISTEM AKTIF (ARMED)</span>
              </div>
              <div style={{ fontSize: '10px', color: '#94a3b8', marginTop: '6px' }}>Smartphone dalam pengawasan penuh</div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <div style={{
                width: '74px',
                height: '74px',
                borderRadius: '50%',
                backgroundColor: 'rgba(34, 197, 94, 0.12)',
                border: '2px solid #22c55e',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 16px rgba(34, 197, 94, 0.25)'
              }}>
                <ShieldCheck size={38} color="#4ade80" />
              </div>
              <span style={{ fontSize: '11px', fontWeight: 700, color: '#ffffff' }}>Sensor Gerak &amp; Charger Aktif</span>
            </div>

            <div style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px', padding: '8px 10px', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '9px', color: '#94a3b8' }}>
                <span>Baseline Kalibrasi:</span>
                <span style={{ color: '#4ade80', fontWeight: 600 }}>Terkunci (X:0.1, Y:0.2, Z:9.8)</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '9px', color: '#94a3b8' }}>
                <span>Status Charger:</span>
                <span style={{ color: '#38bdf8', fontWeight: 600 }}>Terhubung (98% ⚡)</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '9px', color: '#94a3b8' }}>
                <span>Watchdog Volume:</span>
                <span style={{ color: '#e2e8f0', fontWeight: 600 }}>Siaga 100% Locked</span>
              </div>
            </div>

            <div>
              <div style={{ backgroundColor: '#1e293b', border: '1px solid #475569', color: '#ffffff', padding: '8px', borderRadius: '8px', fontSize: '10.5px', fontWeight: 700 }}>
                Nonaktifkan Sistem (PIN)
              </div>
            </div>
          </div>
        );

      case 'sigap-alert':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', textAlign: 'center', background: 'radial-gradient(circle, rgba(239,68,68,0.2) 0%, rgba(15,23,42,0) 80%)' }}>
            <div style={{ paddingTop: '6px' }}>
              <div style={{ backgroundColor: '#ef4444', color: '#ffffff', padding: '4px 10px', borderRadius: '6px', fontSize: '11px', fontWeight: 900, letterSpacing: '0.8px', display: 'inline-block' }}>
                🚨 PERINGATAN ALARM!
              </div>
              <div style={{ fontSize: '11px', fontWeight: 700, color: '#fca5a5', marginTop: '6px' }}>
                GERAKAN MENCURIGAKAN TERDETEKSI
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <div style={{
                width: '74px',
                height: '74px',
                borderRadius: '50%',
                backgroundColor: 'rgba(239, 68, 68, 0.25)',
                border: '2px solid #ef4444',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 24px rgba(239, 68, 68, 0.6)'
              }}>
                <ShieldAlert size={40} color="#ef4444" />
              </div>
              <div style={{ fontSize: '10px', color: '#fecaca', fontWeight: 600 }}>
                Volume terkunci 100% • Alarm looping
              </div>
            </div>

            <div style={{ backgroundColor: 'rgba(15, 23, 42, 0.8)', border: '1px solid #ef4444', borderRadius: '8px', padding: '8px', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '3px' }}>
              <div style={{ fontSize: '9px', color: '#cbd5e1' }}>📸 Kamera Depan: <b style={{ color: '#4ade80' }}>Foto Tertangkap</b></div>
              <div style={{ fontSize: '9px', color: '#cbd5e1' }}>📍 GPS Darurat: <b style={{ color: '#4ade80' }}>-6.2088, 106.8456</b></div>
              <div style={{ fontSize: '9px', color: '#cbd5e1' }}>🔒 Immersive Mode: <b style={{ color: '#38bdf8' }}>Navigasi Diblokir</b></div>
            </div>

            <div>
              <div style={{ backgroundColor: '#ffffff', color: '#0f172a', padding: '9px', borderRadius: '8px', fontSize: '11px', fontWeight: 900, letterSpacing: '0.5px' }}>
                MASUKKAN PIN UNTUK MATIKAN
              </div>
            </div>
          </div>
        );

      case 'sigap-pin':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', textAlign: 'center' }}>
            <div style={{ paddingTop: '4px' }}>
              <div style={{ fontSize: '12px', fontWeight: 800, color: '#f8fafc' }}>Verifikasi PIN Keamanan</div>
              <div style={{ fontSize: '9.5px', color: '#94a3b8', marginTop: '2px' }}>
                Masukkan PIN lokal untuk menonaktifkan sistem
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', margin: '6px 0' }}>
              <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#38bdf8' }}></span>
              <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#38bdf8' }}></span>
              <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#38bdf8' }}></span>
              <span style={{ width: '12px', height: '12px', borderRadius: '50%', border: '2px solid #64748b' }}></span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '6px', maxWidth: '180px', margin: '0 auto' }}>
              {['1', '2', '3', '4', '5', '6', '7', '8', '9', 'C', '0', '✓'].map((keyVal) => (
                <div
                  key={keyVal}
                  style={{
                    backgroundColor: keyVal === '✓' ? '#2563eb' : keyVal === 'C' ? '#334155' : '#1e293b',
                    color: '#ffffff',
                    height: '32px',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '12px',
                    fontWeight: 700,
                    border: '1px solid #334155'
                  }}
                >
                  {keyVal}
                </div>
              ))}
            </div>

            <div style={{ fontSize: '9px', color: '#f59e0b' }}>
              Toleransi: 3 kali salah input sebelum dicatat sebagai insiden
            </div>
          </div>
        );

      case 'sigap-settings':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
            <div style={{ borderBottom: '1px solid #1f2937', paddingBottom: '6px' }}>
              <div style={{ fontSize: '12px', fontWeight: 800, color: '#f8fafc' }}>Pengaturan Keamanan</div>
              <div style={{ fontSize: '9px', color: '#94a3b8' }}>Konfigurasi parameter lokal SIGAP</div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', margin: '4px 0' }}>
              <div style={{ backgroundColor: '#111827', padding: '7px 8px', borderRadius: '6px', border: '1px solid #1f2937' }}>
                <div style={{ fontSize: '10px', fontWeight: 700, color: '#e2e8f0' }}>Ubah PIN Lokal</div>
                <div style={{ fontSize: '8.5px', color: '#64748b' }}>Wajib memasukkan PIN lama sebelum diganti</div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#111827', padding: '7px 8px', borderRadius: '6px', border: '1px solid #1f2937' }}>
                <div>
                  <div style={{ fontSize: '10px', fontWeight: 700, color: '#e2e8f0' }}>Auto-Capture Kamera</div>
                  <div style={{ fontSize: '8.5px', color: '#64748b' }}>Ambil 1 foto depan saat alarm</div>
                </div>
                <span style={{ fontSize: '9px', color: '#4ade80', fontWeight: 700 }}>AKTIF</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#111827', padding: '7px 8px', borderRadius: '6px', border: '1px solid #1f2937' }}>
                <div>
                  <div style={{ fontSize: '10px', fontWeight: 700, color: '#e2e8f0' }}>Snapshot Lokasi GPS</div>
                  <div style={{ fontSize: '8.5px', color: '#64748b' }}>Simpan koordinat latitude &amp; longitude</div>
                </div>
                <span style={{ fontSize: '9px', color: '#4ade80', fontWeight: 700 }}>AKTIF</span>
              </div>
              <div style={{ backgroundColor: '#111827', padding: '7px 8px', borderRadius: '6px', border: '1px solid #1f2937' }}>
                <div style={{ fontSize: '10px', fontWeight: 700, color: '#e2e8f0' }}>Kontak Darurat (WhatsApp/SMS)</div>
                <div style={{ fontSize: '8.5px', color: '#38bdf8' }}>+62 812-3456-7890</div>
              </div>
            </div>

            <div style={{ backgroundColor: '#2563eb', color: '#ffffff', textAlign: 'center', padding: '7px', borderRadius: '6px', fontSize: '10px', fontWeight: 700 }}>
              Simpan Konfigurasi
            </div>
          </div>
        );

      case 'sigap-evidence':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
            <div style={{ borderBottom: '1px solid #1f2937', paddingBottom: '6px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '12px', fontWeight: 800, color: '#f8fafc' }}>Riwayat Bukti Insiden</span>
                <span style={{ fontSize: '8.5px', backgroundColor: '#1e293b', color: '#94a3b8', padding: '1px 6px', borderRadius: '4px' }}>Maks 50 Log</span>
              </div>
              <div style={{ fontSize: '8.5px', color: '#64748b', marginTop: '2px' }}>Tersimpan aman di SharedPreferences lokal</div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', overflowY: 'auto' }}>
              <div style={{ backgroundColor: '#111827', border: '1px solid #334155', borderRadius: '6px', padding: '6px 8px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '9px', fontWeight: 800, color: '#ef4444' }}>GERAKAN TERDETEKSI</span>
                  <span style={{ fontSize: '8.5px', color: '#64748b' }}>Hari ini, 10:24 WIB</span>
                </div>
                <div style={{ fontSize: '8.5px', color: '#94a3b8', marginTop: '3px' }}>
                  📍 -6.2088, 106.8456 • Foto Tersimpan
                </div>
                <div style={{ display: 'flex', gap: '4px', marginTop: '4px' }}>
                  <span style={{ fontSize: '8px', backgroundColor: '#1e3a8a', color: '#93c5fd', padding: '2px 5px', borderRadius: '3px' }}>Buka Maps</span>
                  <span style={{ fontSize: '8px', backgroundColor: '#14532d', color: '#86efac', padding: '2px 5px', borderRadius: '3px' }}>Lihat Foto Depan</span>
                </div>
              </div>

              <div style={{ backgroundColor: '#111827', border: '1px solid #334155', borderRadius: '6px', padding: '6px 8px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '9px', fontWeight: 800, color: '#f59e0b' }}>CHARGER DICABUT</span>
                  <span style={{ fontSize: '8.5px', color: '#64748b' }}>Kemarin, 15:40 WIB</span>
                </div>
                <div style={{ fontSize: '8.5px', color: '#94a3b8', marginTop: '3px' }}>
                  📍 -6.2101, 106.8402 • Foto Gagal (Ditolak)
                </div>
                <div style={{ display: 'flex', gap: '4px', marginTop: '4px' }}>
                  <span style={{ fontSize: '8px', backgroundColor: '#1e3a8a', color: '#93c5fd', padding: '2px 5px', borderRadius: '3px' }}>Buka Maps</span>
                </div>
              </div>
            </div>

            <div style={{ fontSize: '8.5px', color: '#64748b', textAlign: 'center', borderTop: '1px solid #1f2937', paddingTop: '4px' }}>
              Data tersimpan lokal, tanpa kirim ke server cloud
            </div>
          </div>
        );

      case 'sigap-tutorial':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
            <div style={{ borderBottom: '1px solid #1f2937', paddingBottom: '4px' }}>
              <div style={{ fontSize: '12px', fontWeight: 800, color: '#f8fafc' }}>Tutorial Operasional</div>
              <div style={{ fontSize: '8.5px', color: '#94a3b8' }}>4 Langkah mengamankan smartphone</div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
              <div style={{ backgroundColor: '#111827', padding: '5px 8px', borderRadius: '6px', borderLeft: '3px solid #38bdf8' }}>
                <div style={{ fontSize: '9.5px', fontWeight: 700, color: '#f1f5f9' }}>1. Colok Charger (Opsional)</div>
                <div style={{ fontSize: '8px', color: '#94a3b8' }}>Aktifkan sakelar proteksi kabel charger.</div>
              </div>
              <div style={{ backgroundColor: '#111827', padding: '5px 8px', borderRadius: '6px', borderLeft: '3px solid #22c55e' }}>
                <div style={{ fontSize: '9.5px', fontWeight: 700, color: '#f1f5f9' }}>2. Tekan "Aktifkan Sistem"</div>
                <div style={{ fontSize: '8px', color: '#94a3b8' }}>Tombol utama akan memulai hitung mundur 5 detik.</div>
              </div>
              <div style={{ backgroundColor: '#111827', padding: '5px 8px', borderRadius: '6px', borderLeft: '3px solid #f59e0b' }}>
                <div style={{ fontSize: '9.5px', fontWeight: 700, color: '#f1f5f9' }}>3. Letakkan HP di Meja Datar</div>
                <div style={{ fontSize: '8px', color: '#94a3b8' }}>Jangan sentuh selama kalibrasi baseline sensor.</div>
              </div>
              <div style={{ backgroundColor: '#111827', padding: '5px 8px', borderRadius: '6px', borderLeft: '3px solid #a855f7' }}>
                <div style={{ fontSize: '9.5px', fontWeight: 700, color: '#f1f5f9' }}>4. Masukkan PIN saat Kembali</div>
                <div style={{ fontSize: '8px', color: '#94a3b8' }}>Verifikasi PIN sebelum ponsel dipindahkan.</div>
              </div>
            </div>

            <div style={{ backgroundColor: '#1e293b', color: '#ffffff', textAlign: 'center', padding: '6px', borderRadius: '6px', fontSize: '9.5px', fontWeight: 700 }}>
              Mengerti &amp; Tutup Panduan
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="sigap-phone-frame">
      <div className="sigap-phone-notch">
        <div className="sigap-notch-lens"></div>
      </div>
      <div className="sigap-phone-statusbar">
        <span>09:41</span>
        <div className="sigap-statusbar-right">
          <span>4G</span>
          <span>98% ⚡</span>
        </div>
      </div>
      <div className="sigap-phone-body">
        {renderPhoneScreenContent()}
      </div>
      <div className="sigap-home-indicator"></div>
    </div>
  );
};

const renderTemuinPhoneMockup = (type) => {
  const renderScreen = () => {
    switch (type) {
      case 'temuin-home':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #1f2937', paddingBottom: '6px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <QrCode size={16} color="#10b981" />
                <span style={{ fontSize: '13px', fontWeight: 800, color: '#f8fafc', letterSpacing: '0.5px' }}>Temuin</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <span style={{ fontSize: '9px', backgroundColor: '#065f46', color: '#6ee7b7', padding: '2px 6px', borderRadius: '4px', fontWeight: 700 }}>Online</span>
              </div>
            </div>

            <div style={{ backgroundColor: '#111827', border: '1px solid #1f2937', borderRadius: '10px', padding: '8px 10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '9px', color: '#94a3b8', textTransform: 'uppercase' }}>Inventaris Terdaftar</div>
                <div style={{ fontSize: '14px', fontWeight: 800, color: '#ffffff' }}>2 Barang Fisik</div>
              </div>
              <div style={{ display: 'flex', gap: '4px' }}>
                <span style={{ fontSize: '8.5px', backgroundColor: '#14532d', color: '#86efac', padding: '2px 6px', borderRadius: '4px', fontWeight: 700 }}>1 Safe</span>
                <span style={{ fontSize: '8.5px', backgroundColor: '#7f1d1d', color: '#fca5a5', padding: '2px 6px', borderRadius: '4px', fontWeight: 700 }}>1 Lost</span>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px', padding: '7px 9px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: '10px', fontWeight: 700, color: '#f1f5f9' }}>Kunci Motor Honda Vario</div>
                  <div style={{ fontSize: '8.5px', color: '#64748b' }}>QR: TEMUIN-ITEM-8924</div>
                </div>
                <span style={{ fontSize: '8.5px', backgroundColor: 'rgba(34, 197, 94, 0.15)', color: '#4ade80', border: '1px solid #22c55e', padding: '2px 6px', borderRadius: '4px', fontWeight: 700 }}>SAFE</span>
              </div>
              <div style={{ backgroundColor: '#0f172a', border: '1px solid #7f1d1d', borderRadius: '8px', padding: '7px 9px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: '10px', fontWeight: 700, color: '#f1f5f9' }}>Dompet Kulit Cokelat</div>
                  <div style={{ fontSize: '8.5px', color: '#f87171' }}>Status: Dilaporkan Hilang</div>
                </div>
                <span style={{ fontSize: '8.5px', backgroundColor: '#ef4444', color: '#ffffff', padding: '2px 6px', borderRadius: '4px', fontWeight: 700 }}>LOST</span>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
              <div style={{ backgroundColor: '#10b981', color: '#ffffff', padding: '7px', borderRadius: '8px', textAlign: 'center', fontSize: '10px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
                <Plus size={12} />
                <span>Tambah Item</span>
              </div>
              <div style={{ backgroundColor: '#2563eb', color: '#ffffff', padding: '7px', borderRadius: '8px', textAlign: 'center', fontSize: '10px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
                <QrCode size={12} />
                <span>Pindai QR</span>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-around', paddingTop: '6px', borderTop: '1px solid #1f2937' }}>
              <div style={{ textAlign: 'center', color: '#10b981', fontSize: '8.5px', fontWeight: 700 }}>Beranda</div>
              <div style={{ textAlign: 'center', color: '#64748b', fontSize: '8.5px' }}>Barang Saya</div>
              <div style={{ textAlign: 'center', color: '#64748b', fontSize: '8.5px' }}>Notifikasi (1)</div>
              <div style={{ textAlign: 'center', color: '#64748b', fontSize: '8.5px' }}>Profil</div>
            </div>
          </div>
        );

      case 'temuin-qr':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', alignItems: 'center', textAlign: 'center' }}>
            <div style={{ width: '100%', borderBottom: '1px solid #1f2937', paddingBottom: '4px' }}>
              <div style={{ fontSize: '12px', fontWeight: 800, color: '#f8fafc' }}>QR Code Identitas Barang</div>
              <div style={{ fontSize: '9px', color: '#94a3b8' }}>Stiker Digital Penghubung Barang Fisik</div>
            </div>

            <div style={{ backgroundColor: '#ffffff', padding: '12px', borderRadius: '12px', display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: '0 4px 16px rgba(0,0,0,0.5)' }}>
              <div style={{ width: '100px', height: '100px', position: 'relative', display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '3px', padding: '4px', backgroundColor: '#ffffff' }}>
                <div style={{ backgroundColor: '#0f172a', borderRadius: '2px', gridColumn: '1 / 3', gridRow: '1 / 3' }}></div>
                <div style={{ backgroundColor: '#0f172a', borderRadius: '2px', gridColumn: '4 / 6', gridRow: '1 / 3' }}></div>
                <div style={{ backgroundColor: '#0f172a', borderRadius: '2px', gridColumn: '1 / 3', gridRow: '4 / 6' }}></div>
                <div style={{ backgroundColor: '#10b981', borderRadius: '2px', gridColumn: '3 / 4', gridRow: '3 / 4' }}></div>
                <div style={{ backgroundColor: '#0f172a', borderRadius: '1px', gridColumn: '4 / 5', gridRow: '4 / 5' }}></div>
                <div style={{ backgroundColor: '#0f172a', borderRadius: '1px', gridColumn: '3 / 4', gridRow: '1 / 2' }}></div>
                <div style={{ backgroundColor: '#0f172a', borderRadius: '1px', gridColumn: '5 / 6', gridRow: '4 / 5' }}></div>
                <div style={{ backgroundColor: '#0f172a', borderRadius: '1px', gridColumn: '4 / 5', gridRow: '5 / 6' }}></div>
              </div>
              <div style={{ fontSize: '10px', fontWeight: 800, color: '#0f172a', marginTop: '4px', letterSpacing: '0.5px' }}>
                TEMUIN-ITEM-8924
              </div>
              <div style={{ fontSize: '8px', color: '#64748b' }}>Kunci Motor Honda Vario</div>
            </div>

            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '5px' }}>
              <div style={{ backgroundColor: '#10b981', color: '#ffffff', padding: '7px', borderRadius: '6px', fontSize: '9.5px', fontWeight: 700 }}>
                Unduh Stiker QR / Cetak Label
              </div>
              <div style={{ fontSize: '8px', color: '#94a3b8' }}>
                Tempelkan stiker ini di kunci, helm, atau barang Anda
              </div>
            </div>
          </div>
        );

      case 'temuin-scanner':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', textAlign: 'center' }}>
            <div style={{ paddingTop: '2px' }}>
              <div style={{ fontSize: '12px', fontWeight: 800, color: '#f8fafc' }}>Pemindai QR Penemu</div>
              <div style={{ fontSize: '8.5px', color: '#94a3b8' }}>Arahkan kamera ke stiker QR barang</div>
            </div>

            <div style={{
              width: '130px',
              height: '130px',
              margin: '0 auto',
              borderRadius: '12px',
              border: '2px dashed #10b981',
              backgroundColor: 'rgba(16, 185, 129, 0.05)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative'
            }}>
              <div style={{ width: '100%', height: '2px', backgroundColor: '#10b981', position: 'absolute', top: '50%', boxShadow: '0 0 8px #10b981' }}></div>
              <QrCode size={44} color="rgba(255, 255, 255, 0.4)" />
              <span style={{ fontSize: '8.5px', color: '#4ade80', fontWeight: 700, marginTop: '6px' }}>Scanning...</span>
            </div>

            <div style={{ backgroundColor: '#111827', border: '1px solid #1f2937', borderRadius: '8px', padding: '8px' }}>
              <div style={{ fontSize: '9.5px', fontWeight: 700, color: '#f8fafc' }}>QR Terbaca: TEMUIN-ITEM-8924</div>
              <div style={{ fontSize: '8px', color: '#94a3b8', margin: '3px 0 6px 0' }}>Barang terverifikasi di database Temuin</div>
              <div style={{ backgroundColor: '#2563eb', color: '#ffffff', padding: '6px', borderRadius: '6px', fontSize: '9.5px', fontWeight: 700 }}>
                Buat Laporan Penemuan
              </div>
            </div>
          </div>
        );

      case 'temuin-report-lost':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
            <div style={{ borderBottom: '1px solid #1f2937', paddingBottom: '4px' }}>
              <div style={{ fontSize: '12px', fontWeight: 800, color: '#ef4444' }}>Lapor Barang Hilang</div>
              <div style={{ fontSize: '8.5px', color: '#94a3b8' }}>Ubah status barang menjadi Lost</div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', margin: '4px 0' }}>
              <div style={{ backgroundColor: '#111827', padding: '6px 8px', borderRadius: '6px', border: '1px solid #1f2937' }}>
                <div style={{ fontSize: '8.5px', color: '#94a3b8' }}>Barang:</div>
                <div style={{ fontSize: '10px', fontWeight: 700, color: '#f8fafc' }}>Dompet Kulit Cokelat</div>
              </div>

              <div style={{ backgroundColor: '#111827', padding: '6px 8px', borderRadius: '6px', border: '1px solid #1f2937' }}>
                <div style={{ fontSize: '8.5px', color: '#94a3b8' }}>Perkiraan Lokasi Terakhir:</div>
                <div style={{ fontSize: '9.5px', color: '#cbd5e1' }}>Area Parkir Barat / Gedung B</div>
              </div>

              <div style={{ backgroundColor: 'rgba(245, 158, 11, 0.1)', border: '1px solid #f59e0b', borderRadius: '6px', padding: '6px 8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: '9px', fontWeight: 700, color: '#fbbf24' }}>Boost Postingan</div>
                  <div style={{ fontSize: '8px', color: '#fde68a' }}>Rp15.000 via Midtrans Snap</div>
                </div>
                <span style={{ fontSize: '8px', backgroundColor: '#f59e0b', color: '#0f172a', fontWeight: 800, padding: '2px 5px', borderRadius: '3px' }}>AKTIF</span>
              </div>
            </div>

            <div style={{ backgroundColor: '#dc2626', color: '#ffffff', textAlign: 'center', padding: '7px', borderRadius: '6px', fontSize: '10px', fontWeight: 700 }}>
              Publikasikan Laporan Hilang
            </div>
          </div>
        );

      case 'temuin-report-found':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
            <div style={{ borderBottom: '1px solid #1f2937', paddingBottom: '4px' }}>
              <div style={{ fontSize: '12px', fontWeight: 800, color: '#10b981' }}>Form Laporan Penemu</div>
              <div style={{ fontSize: '8.5px', color: '#94a3b8' }}>Catat lokasi GPS &amp; unggah foto bukti</div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
              <div style={{ backgroundColor: '#111827', padding: '6px 8px', borderRadius: '6px', border: '1px solid #1f2937' }}>
                <div style={{ fontSize: '8.5px', color: '#94a3b8' }}>📍 Titik GPS (geolocator):</div>
                <div style={{ fontSize: '9.5px', fontWeight: 700, color: '#38bdf8' }}>-6.2088, 106.8456 (Akurat)</div>
                <div style={{ fontSize: '7.5px', color: '#64748b' }}>Tercatat saat laporan dibuat</div>
              </div>

              <div style={{ backgroundColor: '#111827', padding: '6px 8px', borderRadius: '6px', border: '1px solid #1f2937' }}>
                <div style={{ fontSize: '8.5px', color: '#94a3b8' }}>📸 Foto Bukti (image_picker):</div>
                <div style={{ fontSize: '9px', color: '#4ade80', fontWeight: 600 }}>1 Foto Terlampir (bukti.jpg)</div>
              </div>

              <div style={{ backgroundColor: '#111827', padding: '6px 8px', borderRadius: '6px', border: '1px solid #1f2937' }}>
                <div style={{ fontSize: '8.5px', color: '#94a3b8' }}>Catatan Penemu:</div>
                <div style={{ fontSize: '8.5px', color: '#cbd5e1' }}>"Dititipkan di Pos Satpam Utama"</div>
              </div>
            </div>

            <div style={{ backgroundColor: '#059669', color: '#ffffff', textAlign: 'center', padding: '7px', borderRadius: '6px', fontSize: '10px', fontWeight: 700 }}>
              Kirim Laporan ke Pemilik
            </div>
          </div>
        );

      case 'temuin-notif':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
            <div style={{ borderBottom: '1px solid #1f2937', paddingBottom: '4px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ fontSize: '12px', fontWeight: 800, color: '#f8fafc' }}>Notifikasi In-App</div>
              <span style={{ fontSize: '8px', backgroundColor: '#ef4444', color: '#ffffff', padding: '1px 5px', borderRadius: '3px', fontWeight: 700 }}>1 Baru</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div style={{ backgroundColor: '#111827', border: '1px solid #10b981', borderRadius: '8px', padding: '8px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '9.5px', fontWeight: 800, color: '#4ade80' }}>BARANG DITEMUKAN!</span>
                  <span style={{ fontSize: '7.5px', color: '#64748b' }}>5 mnt lalu</span>
                </div>
                <div style={{ fontSize: '9px', color: '#f1f5f9', marginTop: '3px' }}>
                  Seseorang menemukan <b>Kunci Motor Honda Vario</b> Anda.
                </div>
                <div style={{ fontSize: '8px', color: '#94a3b8', marginTop: '2px' }}>
                  Lokasi: Kampus Utama • Dititipkan di Pos Satpam
                </div>
                <div style={{ marginTop: '5px' }}>
                  <span style={{ fontSize: '8px', backgroundColor: '#065f46', color: '#a7f3d0', padding: '2px 6px', borderRadius: '3px', fontWeight: 700 }}>
                    Buka Detail &amp; Lokasi
                  </span>
                </div>
              </div>
            </div>

            <div style={{ fontSize: '8px', color: '#64748b', textAlign: 'center', borderTop: '1px solid #1f2937', paddingTop: '4px' }}>
              Notifikasi tersimpan di database temuin_db
            </div>
          </div>
        );

      case 'temuin-detail':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
            <div style={{ borderBottom: '1px solid #1f2937', paddingBottom: '4px' }}>
              <div style={{ fontSize: '12px', fontWeight: 800, color: '#f8fafc' }}>Detail Penemuan Barang</div>
              <div style={{ fontSize: '8.5px', color: '#4ade80', fontWeight: 700 }}>STATUS: FOUND (DITEMUKAN)</div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
              <div style={{ height: '70px', backgroundColor: '#1e293b', borderRadius: '6px', border: '1px solid #334155', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ position: 'absolute', top: '4px', left: '6px', fontSize: '8px', color: '#38bdf8', fontWeight: 700 }}>
                  📍 GPS: -6.2088, 106.8456
                </div>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ef4444', border: '2px solid #ffffff' }}></div>
              </div>

              <div style={{ backgroundColor: '#111827', padding: '6px 8px', borderRadius: '6px', border: '1px solid #1f2937' }}>
                <div style={{ fontSize: '8px', color: '#94a3b8' }}>Keterangan Penemu:</div>
                <div style={{ fontSize: '8.5px', color: '#e2e8f0' }}>"Barang ada di Pos Satpam Gerbang Barat."</div>
              </div>
            </div>

            <div style={{ backgroundColor: '#2563eb', color: '#ffffff', textAlign: 'center', padding: '7px', borderRadius: '6px', fontSize: '10px', fontWeight: 700 }}>
              Konfirmasi Pengambilan (Claimed)
            </div>
          </div>
        );

      case 'temuin-boost':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', textAlign: 'center' }}>
            <div style={{ borderBottom: '1px solid #1f2937', paddingBottom: '4px' }}>
              <div style={{ fontSize: '12px', fontWeight: 800, color: '#f59e0b' }}>Midtrans Snap Payment</div>
              <div style={{ fontSize: '8.5px', color: '#94a3b8' }}>Boost Prioritas Postingan Barang</div>
            </div>

            <div style={{ backgroundColor: '#111827', border: '1px solid #f59e0b', borderRadius: '10px', padding: '10px', margin: '6px 0' }}>
              <div style={{ fontSize: '9px', color: '#fbbf24', textTransform: 'uppercase' }}>Biaya Layanan Boost</div>
              <div style={{ fontSize: '18px', fontWeight: 900, color: '#ffffff', margin: '4px 0' }}>Rp 15.000</div>
              <div style={{ fontSize: '8px', color: '#94a3b8' }}>Status is_premium = 1 setelah settlement</div>
            </div>

            <div style={{ backgroundColor: '#0f172a', padding: '6px 8px', borderRadius: '6px', border: '1px solid #1e293b', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '3px' }}>
              <div style={{ fontSize: '8.5px', color: '#cbd5e1' }}>Metode: <b>QRIS / GoPay / VA Bank</b></div>
              <div style={{ fontSize: '8px', color: '#64748b' }}>Webhook SHA-512 Verifikasi Server</div>
            </div>

            <div style={{ backgroundColor: '#10b981', color: '#ffffff', padding: '8px', borderRadius: '6px', fontSize: '10.5px', fontWeight: 700 }}>
              Bayar Rp15.000 Sekarang
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="sigap-phone-frame">
      <div className="sigap-phone-notch">
        <div className="sigap-notch-lens"></div>
      </div>
      <div className="sigap-phone-statusbar">
        <span>09:41</span>
        <div className="sigap-statusbar-right">
          <span>4G</span>
          <span>100%</span>
        </div>
      </div>
      <div className="sigap-phone-body">
        {renderScreen()}
      </div>
      <div className="sigap-home-indicator"></div>
    </div>
  );
};

const renderBingkaiMockup = (type) => {
  const renderScreen = () => {
    switch (type) {
      case 'bingkai-home':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: '8px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#0f172a', padding: '6px 10px', borderRadius: '6px', border: '1px solid #1e293b' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: '#94a3b8' }}>
                <Search size={13} color="#38bdf8" />
                <span style={{ color: '#cbd5e1' }}>Folder: <b style={{ color: '#f8fafc' }}>D:/Photos</b></span>
                <span style={{ fontSize: '9px', backgroundColor: '#1e293b', color: '#38bdf8', padding: '1px 5px', borderRadius: '3px' }}>3.420 Foto</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '9.5px' }}>
                <span style={{ backgroundColor: '#064e3b', color: '#6ee7b7', padding: '2px 6px', borderRadius: '4px', fontWeight: 600 }}>WebP Cache 100%</span>
                <span style={{ color: '#94a3b8' }}>Urut: Terbaru ▼</span>
              </div>
            </div>

            <div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '6px', overflow: 'hidden' }}>
              {[
                { title: 'Pantai Kuta Sunset', date: '14 Jul 2024', size: '4.2 MB', fav: true, color: 'linear-gradient(135deg, #f97316, #db2777)' },
                { title: 'Wisuda Kampus', date: '20 Jun 2024', size: '3.8 MB', fav: true, color: 'linear-gradient(135deg, #2563eb, #7c3aed)' },
                { title: 'Kopi & Setup Kerja', date: '02 Mei 2024', size: '2.9 MB', fav: false, color: 'linear-gradient(135deg, #059669, #0d9488)' },
                { title: 'Gunung Bromo Pagi', date: '18 Apr 2024', size: '5.1 MB', fav: true, color: 'linear-gradient(135deg, #0284c7, #4f46e5)' },
                { title: 'Jalan Santai Sore', date: '10 Mar 2024', size: '3.1 MB', fav: false, color: 'linear-gradient(135deg, #d97706, #b45309)' },
                { title: 'Makan Malam Ultah', date: '28 Feb 2024', size: '3.5 MB', fav: false, color: 'linear-gradient(135deg, #dc2626, #9333ea)' }
              ].map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    borderRadius: '6px',
                    overflow: 'hidden',
                    backgroundColor: '#111827',
                    border: '1px solid #1f2937',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative'
                  }}
                >
                  <div style={{ flex: 1, background: item.color, minHeight: '62px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontSize: '20px', opacity: 0.85 }}>📷</span>
                    {item.fav && (
                      <div style={{ position: 'absolute', top: '4px', right: '4px', backgroundColor: 'rgba(0,0,0,0.6)', borderRadius: '50%', width: '18px', height: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Heart size={10} color="#f43f5e" fill="#f43f5e" />
                      </div>
                    )}
                    <span style={{ position: 'absolute', bottom: '3px', left: '4px', fontSize: '8px', backgroundColor: 'rgba(0,0,0,0.6)', color: '#e2e8f0', padding: '1px 4px', borderRadius: '2px' }}>
                      WebP
                    </span>
                  </div>
                  <div style={{ padding: '4px 6px', backgroundColor: '#0f172a' }}>
                    <div style={{ fontSize: '9px', fontWeight: 600, color: '#f1f5f9', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.title}</div>
                    <div style={{ fontSize: '8px', color: '#64748b', display: 'flex', justifyContent: 'space-between', marginTop: '1px' }}>
                      <span>{item.date}</span>
                      <span>{item.size}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#0b1120', padding: '5px 8px', borderRadius: '4px', fontSize: '9px', color: '#94a3b8' }}>
              <span style={{ color: '#10b981' }}>● 100% Offline (Local-First) • Tidak ada foto yang diunggah ke cloud</span>
              <span style={{ color: '#f59e0b', fontWeight: 600 }}>Tekan [A] di Gamepad untuk Rebahan Mode 🎮</span>
            </div>
          </div>
        );

      case 'bingkai-rebahan':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: '8px' }}>
            <div style={{ flex: 1, backgroundColor: '#020617', borderRadius: '8px', border: '1px solid #1e293b', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '10px' }}>
              <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at bottom, #ea580c 0%, #7c2d12 40%, #0c0a09 100%)', opacity: 0.9 }}></div>
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0.15, pointerEvents: 'none' }}>
                <Gamepad2 size={160} color="#ffffff" />
              </div>

              <div style={{ position: 'relative', zIndex: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', backgroundColor: 'rgba(15, 23, 42, 0.85)', backdropFilter: 'blur(6px)', padding: '4px 10px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <Gamepad2 size={13} color="#38bdf8" />
                  <span style={{ fontSize: '10px', fontWeight: 700, color: '#f8fafc' }}>Xbox Controller Aktif (Bluetooth)</span>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#22c55e' }}></span>
                </div>
                <div style={{ backgroundColor: 'rgba(15, 23, 42, 0.85)', backdropFilter: 'blur(6px)', padding: '4px 10px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)', fontSize: '10px', color: '#fbbf24', fontWeight: 600 }}>
                  Foto 142 dari 3.420
                </div>
              </div>

              <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', margin: 'auto 0' }}>
                <div style={{ fontSize: '14px', fontWeight: 800, color: '#ffffff', textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}>Sunset di Pantai Kuta, Bali</div>
                <div style={{ fontSize: '10px', color: '#cbd5e1', textShadow: '0 1px 4px rgba(0,0,0,0.8)', marginTop: '2px' }}>D:/Photos/Liburan/IMG_0842.JPG • 4000 × 3000 • 4.2 MB</div>
              </div>

              <div style={{ position: 'relative', zIndex: 2, display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap' }}>
                <div style={{ backgroundColor: 'rgba(15, 23, 42, 0.9)', border: '1px solid rgba(255,255,255,0.15)', padding: '3px 8px', borderRadius: '14px', fontSize: '9px', color: '#e2e8f0', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span style={{ backgroundColor: '#22c55e', color: '#000', borderRadius: '50%', width: '13px', height: '13px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '8.5px' }}>A</span>
                  <span>Simpan Favorit</span>
                </div>
                <div style={{ backgroundColor: 'rgba(15, 23, 42, 0.9)', border: '1px solid rgba(255,255,255,0.15)', padding: '3px 8px', borderRadius: '14px', fontSize: '9px', color: '#e2e8f0', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span style={{ backgroundColor: '#ef4444', color: '#fff', borderRadius: '50%', width: '13px', height: '13px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '8.5px' }}>B</span>
                  <span>Tong Sampah</span>
                </div>
                <div style={{ backgroundColor: 'rgba(15, 23, 42, 0.9)', border: '1px solid rgba(255,255,255,0.15)', padding: '3px 8px', borderRadius: '14px', fontSize: '9px', color: '#e2e8f0', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span style={{ backgroundColor: '#3b82f6', color: '#fff', borderRadius: '50%', width: '13px', height: '13px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '8.5px' }}>X</span>
                  <span>Zoom In</span>
                </div>
                <div style={{ backgroundColor: 'rgba(15, 23, 42, 0.9)', border: '1px solid rgba(255,255,255,0.15)', padding: '3px 8px', borderRadius: '14px', fontSize: '9px', color: '#e2e8f0', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span style={{ backgroundColor: '#eab308', color: '#000', borderRadius: '50%', width: '13px', height: '13px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '8.5px' }}>Y</span>
                  <span>Slideshow Otomatis</span>
                </div>
              </div>
            </div>

            <div style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '6px', padding: '6px 10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '9.5px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#cbd5e1' }}>
                <Smartphone size={13} color="#10b981" />
                <span><b>Remote HP Wi-Fi:</b> Buka <code style={{ color: '#38bdf8', backgroundColor: '#1e293b', padding: '1px 4px', borderRadius: '3px' }}>http://192.168.1.15:8000</code> di browser HP</span>
              </div>
              <span style={{ color: '#10b981', fontWeight: 600 }}>Tersambung (0ms Lag)</span>
            </div>
          </div>
        );

      case 'bingkai-swipe':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%', alignItems: 'center', justifyContent: 'space-between', gap: '6px' }}>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #1e293b', paddingBottom: '6px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ fontSize: '13px' }}>⚡</span>
                <span style={{ fontSize: '11px', fontWeight: 700, color: '#f1f5f9' }}>Mode Swipe Kurasi (Tinder untuk Foto)</span>
              </div>
              <span style={{ fontSize: '9.5px', color: '#fbbf24', backgroundColor: 'rgba(251, 191, 36, 0.1)', padding: '2px 6px', borderRadius: '4px', border: '1px solid rgba(251, 191, 36, 0.2)' }}>
                Tersisa 142 Foto Belum Disortir
              </span>
            </div>

            <div style={{ position: 'relative', width: '220px', height: '170px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ position: 'absolute', width: '190px', height: '140px', backgroundColor: '#1e293b', borderRadius: '12px', border: '1px solid #334155', transform: 'rotate(5deg) translateY(-8px)', opacity: 0.4 }}></div>
              <div style={{ position: 'absolute', width: '200px', height: '150px', backgroundColor: '#1e293b', borderRadius: '12px', border: '1px solid #334155', transform: 'rotate(-3deg) translateY(-4px)', opacity: 0.7 }}></div>
              <div style={{
                position: 'relative',
                width: '210px',
                height: '160px',
                borderRadius: '12px',
                border: '2px solid #38bdf8',
                boxShadow: '0 10px 25px rgba(0,0,0,0.6)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                background: 'linear-gradient(145deg, #1e3a8a, #0f172a)'
              }}>
                <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                  <span style={{ fontSize: '36px' }}>🏖️</span>
                  <div style={{ position: 'absolute', top: '8px', left: '8px', backgroundColor: 'rgba(16, 185, 129, 0.9)', color: '#ffffff', fontSize: '9px', fontWeight: 800, padding: '2px 6px', borderRadius: '4px', textTransform: 'uppercase' }}>
                    FAVORIT →
                  </div>
                </div>
                <div style={{ backgroundColor: '#090d16', padding: '6px 10px', borderTop: '1px solid #1e293b' }}>
                  <div style={{ fontSize: '10px', fontWeight: 700, color: '#f8fafc' }}>DSC_0842_Pantai.JPG</div>
                  <div style={{ fontSize: '8.5px', color: '#94a3b8' }}>14 Juli 2024 • 3.4 MB • D:/Photos</div>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3px' }}>
                <button type="button" style={{ width: '42px', height: '42px', borderRadius: '50%', backgroundColor: '#ef4444', border: 'none', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 4px 12px rgba(239, 68, 68, 0.4)' }}>
                  <Trash2 size={18} />
                </button>
                <span style={{ fontSize: '8.5px', color: '#fca5a5' }}>[B] Swipe Kiri</span>
              </div>

              <div style={{ fontSize: '9.5px', color: '#64748b', textAlign: 'center', maxWidth: '140px' }}>
                Geser kanan simpan, geser kiri buang
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3px' }}>
                <button type="button" style={{ width: '42px', height: '42px', borderRadius: '50%', backgroundColor: '#10b981', border: 'none', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 4px 12px rgba(16, 185, 129, 0.4)' }}>
                  <Heart size={18} fill="#ffffff" />
                </button>
                <span style={{ fontSize: '8.5px', color: '#86efac' }}>[A] Swipe Kanan</span>
              </div>
            </div>

            <div style={{ fontSize: '9px', color: '#94a3b8', backgroundColor: '#0f172a', padding: '4px 8px', borderRadius: '4px', textAlign: 'center', width: '100%' }}>
              💡 <b>Tips Santai:</b> Bersihkan puluhan foto sambil rebahan di sofa menggunakan Stick Gamepad atau usap layar HP.
            </div>
          </div>
        );

      case 'bingkai-duplicate':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: '8px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #1e293b', paddingBottom: '6px' }}>
              <div>
                <div style={{ fontSize: '11px', fontWeight: 700, color: '#f8fafc' }}>Pendeteksi Foto Kembar Identik (Duplicate Finder)</div>
                <div style={{ fontSize: '9px', color: '#94a3b8' }}>Ditemukan 18 foto kembar • Potensi hemat memori laptop: <b>142 MB</b></div>
              </div>
              <span style={{ fontSize: '9px', backgroundColor: '#581c87', color: '#d8b4fe', padding: '2px 6px', borderRadius: '4px', fontWeight: 700 }}>
                100% Identik
              </span>
            </div>

            <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
              <div style={{ backgroundColor: '#0f172a', border: '1px solid #22c55e', borderRadius: '8px', padding: '8px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '9px', backgroundColor: '#064e3b', color: '#6ee7b7', padding: '1px 6px', borderRadius: '3px', fontWeight: 700 }}>File Asli (Pertahankan)</span>
                  <span style={{ fontSize: '8.5px', color: '#94a3b8' }}>3.8 MB</span>
                </div>
                <div style={{ flex: 1, backgroundColor: '#1e293b', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '80px', background: 'linear-gradient(135deg, #1e3a8a, #0369a1)' }}>
                  <span style={{ fontSize: '28px' }}>🏔️</span>
                </div>
                <div style={{ fontSize: '9px', color: '#cbd5e1' }}>
                  <div style={{ fontWeight: 600, color: '#f1f5f9' }}>IMG_2024_Bromo.jpg</div>
                  <div style={{ color: '#64748b', fontSize: '8px' }}>Lokasi: D:/Photos/Liburan/2024</div>
                  <div style={{ color: '#64748b', fontSize: '8px' }}>Dimensi: 4000 × 3000 • 12 Ags 2024</div>
                </div>
                <div style={{ padding: '4px', backgroundColor: '#064e3b', borderRadius: '4px', fontSize: '8.5px', color: '#a7f3d0', textAlign: 'center', fontWeight: 600 }}>
                  ✓ Disimpan di Galeri Utama
                </div>
              </div>

              <div style={{ backgroundColor: '#0f172a', border: '1px solid #ef4444', borderRadius: '8px', padding: '8px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '9px', backgroundColor: '#7f1d1d', color: '#fca5a5', padding: '1px 6px', borderRadius: '3px', fontWeight: 700 }}>Salinan Duplikat</span>
                  <span style={{ fontSize: '8.5px', color: '#94a3b8' }}>3.8 MB</span>
                </div>
                <div style={{ flex: 1, backgroundColor: '#1e293b', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '80px', background: 'linear-gradient(135deg, #1e3a8a, #0369a1)' }}>
                  <span style={{ fontSize: '28px' }}>🏔️</span>
                </div>
                <div style={{ fontSize: '9px', color: '#cbd5e1' }}>
                  <div style={{ fontWeight: 600, color: '#f1f5f9' }}>IMG_2024_Bromo (1).jpg</div>
                  <div style={{ color: '#64748b', fontSize: '8px' }}>Lokasi: D:/Downloads/WhatsApp</div>
                  <div style={{ color: '#64748b', fontSize: '8px' }}>Dimensi: 4000 × 3000 • 14 Ags 2024</div>
                </div>
                <button type="button" style={{ padding: '4px', backgroundColor: '#dc2626', border: 'none', borderRadius: '4px', fontSize: '8.5px', color: '#ffffff', textAlign: 'center', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
                  <Trash2 size={10} />
                  <span>Hapus Salinan Ini (+3.8 MB)</span>
                </button>
              </div>
            </div>

            <div style={{ fontSize: '9px', color: '#94a3b8', backgroundColor: '#0b1120', padding: '5px 8px', borderRadius: '4px', display: 'flex', justifyContent: 'space-between' }}>
              <span>🛡️ File yang dihapus dipindahkan ke Tong Sampah Bingkai, tidak langsung hilang permanen.</span>
              <span style={{ color: '#38bdf8', cursor: 'pointer', fontWeight: 600 }}>Hapus Duplikat &rarr;</span>
            </div>
          </div>
        );

      case 'bingkai-album':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: '8px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #1e293b', paddingBottom: '6px' }}>
              <div>
                <div style={{ fontSize: '11px', fontWeight: 700, color: '#f8fafc' }}>Album Virtual (Tanpa Makan Memori)</div>
                <div style={{ fontSize: '9px', color: '#94a3b8' }}>Kelompokkan foto ke dalam album tanpa menggandakan file fisik di harddisk</div>
              </div>
              <button type="button" style={{ backgroundColor: '#2563eb', color: '#ffffff', border: 'none', padding: '3px 8px', borderRadius: '4px', fontSize: '9px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer' }}>
                <Plus size={10} />
                <span>Buat Album Baru</span>
              </button>
            </div>

            <div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
              {[
                { title: 'Liburan Bali 2024', count: '124 Foto', icon: '🏖️', color: 'linear-gradient(135deg, #0284c7, #0369a1)', badge: '0 KB Duplikasi' },
                { title: 'Wisuda & Kuliah', count: '85 Foto', icon: '🎓', color: 'linear-gradient(135deg, #7c3aed, #581c87)', badge: '0 KB Duplikasi' },
                { title: 'Keluarga Besar', count: '210 Foto', icon: '👨‍👩‍👧‍👦', color: 'linear-gradient(135deg, #059669, #065f46)', badge: '0 KB Duplikasi' }
              ].map((album, idx) => (
                <div key={idx} style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ flex: 1, background: album.color, display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '80px', position: 'relative' }}>
                    <span style={{ fontSize: '32px' }}>{album.icon}</span>
                    <span style={{ position: 'absolute', top: '4px', right: '4px', fontSize: '8px', backgroundColor: 'rgba(0,0,0,0.6)', color: '#4ade80', padding: '1px 5px', borderRadius: '3px', fontWeight: 700 }}>
                      {album.badge}
                    </span>
                  </div>
                  <div style={{ padding: '6px 8px', backgroundColor: '#090d16' }}>
                    <div style={{ fontSize: '9.5px', fontWeight: 700, color: '#f1f5f9' }}>{album.title}</div>
                    <div style={{ fontSize: '8.5px', color: '#64748b', marginTop: '2px' }}>{album.count} • Referensi Tagging</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ backgroundColor: '#0b1120', border: '1px solid #1e293b', borderRadius: '6px', padding: '8px 10px', fontSize: '9px', color: '#cbd5e1', display: 'flex', gap: '8px', alignItems: 'center' }}>
              <Sparkles size={16} color="#10b981" style={{ flexShrink: 0 }} />
              <div>
                <b>Keunggulan Album Virtual:</b> Foto tetap berada di lokasi aslinya (misal: <code>D:/Photos</code>). Bingkai hanya menyimpan catatan referensi ringan di SQLite tanpa menggandakan ukuran byte file di SSD komputermu.
              </div>
            </div>
          </div>
        );

      case 'bingkai-trash':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: '8px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #1e293b', paddingBottom: '6px' }}>
              <div>
                <div style={{ fontSize: '11px', fontWeight: 700, color: '#f8fafc' }}>Tong Sampah Anti-Panik (Safe Trash)</div>
                <div style={{ fontSize: '9px', color: '#94a3b8' }}>14 foto dihapus sementara • File aman dan bisa dikembalikan kapan saja</div>
              </div>
              <button type="button" style={{ backgroundColor: '#334155', color: '#f87171', border: '1px solid #475569', padding: '3px 8px', borderRadius: '4px', fontSize: '8.5px', fontWeight: 600 }}>
                Kosongkan Sampah
              </button>
            </div>

            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px', overflowY: 'auto' }}>
              {[
                { name: 'IMG_0412_Blur.jpg', origin: 'D:/Photos/Liburan/2024', time: '2 menit lalu', size: '3.4 MB' },
                { name: 'WA_Screenshot_20240812.png', origin: 'D:/Photos/Screenshots', time: '15 menit lalu', size: '1.2 MB' },
                { name: 'DSC_0119_Gelap.jpg', origin: 'D:/Photos/Kamera', time: '1 jam lalu', size: '4.8 MB' }
              ].map((item, idx) => (
                <div key={idx} style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '6px', padding: '6px 10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '28px', height: '28px', backgroundColor: '#1e293b', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px' }}>
                      🖼️
                    </div>
                    <div>
                      <div style={{ fontSize: '9.5px', fontWeight: 600, color: '#f1f5f9' }}>{item.name}</div>
                      <div style={{ fontSize: '8px', color: '#64748b' }}>Asal: {item.origin} • {item.size} • Dihapus {item.time}</div>
                    </div>
                  </div>
                  <button type="button" style={{ backgroundColor: '#064e3b', color: '#6ee7b7', border: '1px solid #059669', padding: '3px 8px', borderRadius: '4px', fontSize: '8.5px', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '3px' }}>
                    <span>↺</span>
                    <span>Restore (Kembalikan)</span>
                  </button>
                </div>
              ))}
            </div>

            <div style={{ backgroundColor: '#0b1120', border: '1px solid #065f46', borderRadius: '6px', padding: '6px 10px', fontSize: '9px', color: '#a7f3d0', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span>🛡️</span>
              <span><b>Bebas Rasa Panik:</b> Salah pencet tombol hapus? File tidak langsung lenyap dari komputermu. Cukup klik Restore dan foto akan kembali ke folder aslinya dalam sekejap!</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div style={{
      width: '100%',
      maxWidth: '100%',
      flex: 1,
      backgroundColor: '#090d16',
      borderRadius: '12px',
      border: '1px solid #1e293b',
      boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.05)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      userSelect: 'none',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <div style={{
        height: '32px',
        backgroundColor: '#0f172a',
        borderBottom: '1px solid #1e293b',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 12px',
        fontSize: '11px',
        color: '#94a3b8'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <div style={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: '#ef4444' }}></div>
          <div style={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: '#f59e0b' }}></div>
          <div style={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: '#10b981' }}></div>
          <span style={{ marginLeft: '6px', fontWeight: 600, color: '#f1f5f9' }}>Bingkai — D:/Photos</span>
          <span style={{ fontSize: '9px', backgroundColor: '#064e3b', color: '#6ee7b7', padding: '1px 6px', borderRadius: '4px', fontWeight: 600 }}>100% Offline</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '10px' }}>
          <span style={{ color: '#38bdf8' }}>🎮 Gamepad Siap</span>
          <span style={{ color: '#64748b' }}>v1.2</span>
        </div>
      </div>

      <div style={{ display: 'flex', minHeight: '340px' }}>
        <div style={{
          width: '135px',
          backgroundColor: '#0b1120',
          borderRight: '1px solid #1e293b',
          padding: '10px 8px',
          display: 'flex',
          flexDirection: 'column',
          gap: '3px',
          fontSize: '10px'
        }}>
          <div style={{ fontSize: '8.5px', color: '#64748b', textTransform: 'uppercase', padding: '2px 6px', fontWeight: 700 }}>Menu Galeri</div>
          <div style={{ padding: '5px 7px', borderRadius: '5px', backgroundColor: type === 'bingkai-home' ? '#1e293b' : 'transparent', color: type === 'bingkai-home' ? '#38bdf8' : '#94a3b8', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '5px' }}>
            <span>📷</span> Semua Foto
          </div>
          <div style={{ padding: '5px 7px', borderRadius: '5px', backgroundColor: type === 'bingkai-rebahan' ? '#1e293b' : 'transparent', color: type === 'bingkai-rebahan' ? '#f59e0b' : '#94a3b8', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '5px' }}>
            <span>🎮</span> Rebahan Mode
          </div>
          <div style={{ padding: '5px 7px', borderRadius: '5px', backgroundColor: type === 'bingkai-swipe' ? '#1e293b' : 'transparent', color: type === 'bingkai-swipe' ? '#ec4899' : '#94a3b8', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '5px' }}>
            <span>⚡</span> Swipe Kurasi
          </div>
          <div style={{ padding: '5px 7px', borderRadius: '5px', backgroundColor: type === 'bingkai-duplicate' ? '#1e293b' : 'transparent', color: type === 'bingkai-duplicate' ? '#a855f7' : '#94a3b8', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '5px' }}>
            <span>🔍</span> Foto Kembar
          </div>
          <div style={{ padding: '5px 7px', borderRadius: '5px', backgroundColor: type === 'bingkai-album' ? '#1e293b' : 'transparent', color: type === 'bingkai-album' ? '#10b981' : '#94a3b8', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '5px' }}>
            <span>📁</span> Album Virtual
          </div>
          <div style={{ padding: '5px 7px', borderRadius: '5px', backgroundColor: type === 'bingkai-trash' ? '#1e293b' : 'transparent', color: type === 'bingkai-trash' ? '#ef4444' : '#94a3b8', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '5px' }}>
            <span>🗑️</span> Tong Sampah
          </div>

          <div style={{ marginTop: 'auto', padding: '6px', backgroundColor: '#030712', borderRadius: '6px', fontSize: '8.5px', color: '#64748b', textAlign: 'center' }}>
            <div>Folder D:/Photos</div>
            <div style={{ color: '#38bdf8', fontWeight: 700 }}>3.420 Item • 24.8 GB</div>
          </div>
        </div>

        <div style={{ flex: 1, padding: '10px 12px', backgroundColor: '#090d16', display: 'flex', flexDirection: 'column' }}>
          {renderScreen()}
        </div>
      </div>
    </div>
  );
};

const renderTatagihMockup = (type) => {
  const renderScreen = () => {
    switch (type) {
      case 'tatagih-dashboard':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', height: '100%', overflowY: 'auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '6px' }}>
              <div style={{ backgroundColor: '#131b2e', border: '1px solid #1e293b', borderRadius: '6px', padding: '8px' }}>
                <div style={{ fontSize: '8.5px', color: '#94a3b8', textTransform: 'uppercase', display: 'flex', justifyContent: 'space-between' }}>
                  <span>Total Bulanan</span>
                  <span style={{ color: '#10b981', fontWeight: 700 }}>-2.05%</span>
                </div>
                <div style={{ fontSize: '13.5px', fontWeight: 800, color: '#ffffff', marginTop: '2px' }}>Rp 320.000</div>
              </div>
              <div style={{ backgroundColor: '#131b2e', border: '1px solid #1e293b', borderRadius: '6px', padding: '8px' }}>
                <div style={{ fontSize: '8.5px', color: '#94a3b8', textTransform: 'uppercase' }}>Estimasi Tahunan</div>
                <div style={{ fontSize: '13.5px', fontWeight: 800, color: '#818cf8', marginTop: '2px' }}>Rp 3.840.000</div>
              </div>
              <div style={{ backgroundColor: '#131b2e', border: '1px solid #1e293b', borderRadius: '6px', padding: '8px' }}>
                <div style={{ fontSize: '8.5px', color: '#94a3b8', textTransform: 'uppercase' }}>Langganan Aktif</div>
                <div style={{ fontSize: '13.5px', fontWeight: 800, color: '#38bdf8', marginTop: '2px' }}>6 Layanan</div>
              </div>
              <div style={{ backgroundColor: '#131b2e', border: '1px solid #7c2d12', borderRadius: '6px', padding: '8px' }}>
                <div style={{ fontSize: '8.5px', color: '#f59e0b', textTransform: 'uppercase', display: 'flex', justifyContent: 'space-between' }}>
                  <span>Tagihan Terdekat</span>
                  <span style={{ backgroundColor: '#7c2d12', color: '#fdba74', padding: '1px 4px', borderRadius: '3px', fontSize: '7.5px', fontWeight: 700 }}>H-3</span>
                </div>
                <div style={{ fontSize: '12px', fontWeight: 800, color: '#ffffff', marginTop: '2px' }}>Netflix (20 Okt)</div>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '6px', flex: 1, minHeight: '120px' }}>
              <div style={{ backgroundColor: '#131b2e', border: '1px solid #1e293b', borderRadius: '6px', padding: '8px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                  <div style={{ fontSize: '9.5px', fontWeight: 700, color: '#f1f5f9', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <TrendingUp size={11} color="#818cf8" />
                    <span>Tren Pengeluaran 6 Bulan (Chart.js)</span>
                  </div>
                  <span style={{ fontSize: '8px', color: '#94a3b8', backgroundColor: '#1e293b', padding: '1px 5px', borderRadius: '3px' }}>Bulan Mei - Okt</span>
                </div>
                <div style={{ flex: 1, position: 'relative', display: 'flex', alignItems: 'flex-end', paddingTop: '8px' }}>
                  <svg viewBox="0 0 280 80" style={{ width: '100%', height: '70px', overflow: 'visible' }}>
                    <defs>
                      <linearGradient id="tatagihChartGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#818cf8" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#818cf8" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    <path d="M 10 65 Q 50 50, 75 42 T 130 55 T 180 30 T 235 25 T 270 20 L 270 75 L 10 75 Z" fill="url(#tatagihChartGrad)" />
                    <path d="M 10 65 Q 50 50, 75 42 T 130 55 T 180 30 T 235 25 T 270 20" fill="none" stroke="#818cf8" strokeWidth="2.2" strokeLinecap="round" />
                    <circle cx="10" cy="65" r="2.5" fill="#38bdf8" />
                    <circle cx="75" cy="42" r="2.5" fill="#38bdf8" />
                    <circle cx="130" cy="55" r="2.5" fill="#38bdf8" />
                    <circle cx="180" cy="30" r="2.5" fill="#38bdf8" />
                    <circle cx="235" cy="25" r="2.5" fill="#38bdf8" />
                    <circle cx="270" cy="20" r="3.5" fill="#ffffff" stroke="#818cf8" strokeWidth="2" />
                    <rect x="195" y="0" width="75" height="15" rx="3" fill="#1e1b4b" stroke="#818cf8" strokeWidth="0.8" />
                    <text x="232" y="11" fill="#f8fafc" fontSize="7.5" textAnchor="middle" fontWeight="bold">Rp 320k / bln</text>
                  </svg>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '8px', color: '#64748b', marginTop: '2px' }}>
                  <span>Mei</span><span>Jun</span><span>Jul</span><span>Ags</span><span>Sep</span><span style={{ color: '#38bdf8', fontWeight: 700 }}>Okt</span>
                </div>
              </div>

              <div style={{ backgroundColor: '#131b2e', border: '1px solid #1e293b', borderRadius: '6px', padding: '8px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <div style={{ fontSize: '9.5px', fontWeight: 700, color: '#f1f5f9', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <PieChart size={11} color="#a855f7" />
                  <span>Distribusi Kategori</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', flex: 1, justifyContent: 'center' }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '8.5px', color: '#cbd5e1' }}>
                      <span>Hiburan (Netflix & YT)</span>
                      <span style={{ fontWeight: 600 }}>58% (Rp 245k)</span>
                    </div>
                    <div style={{ height: '4px', backgroundColor: '#1e293b', borderRadius: '3px', overflow: 'hidden', marginTop: '1px' }}>
                      <div style={{ width: '58%', height: '100%', backgroundColor: '#ec4899' }}></div>
                    </div>
                  </div>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '8.5px', color: '#cbd5e1' }}>
                      <span>AI & Produktivitas</span>
                      <span style={{ fontWeight: 600 }}>22% (Rp 310k)</span>
                    </div>
                    <div style={{ height: '4px', backgroundColor: '#1e293b', borderRadius: '3px', overflow: 'hidden', marginTop: '1px' }}>
                      <div style={{ width: '22%', height: '100%', backgroundColor: '#8b5cf6' }}></div>
                    </div>
                  </div>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '8.5px', color: '#cbd5e1' }}>
                      <span>Musik (Spotify Family)</span>
                      <span style={{ fontWeight: 600 }}>12% (Rp 87k)</span>
                    </div>
                    <div style={{ height: '4px', backgroundColor: '#1e293b', borderRadius: '3px', overflow: 'hidden', marginTop: '1px' }}>
                      <div style={{ width: '12%', height: '100%', backgroundColor: '#10b981' }}></div>
                    </div>
                  </div>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '8.5px', color: '#cbd5e1' }}>
                      <span>Cloud Storage & Tools</span>
                      <span style={{ fontWeight: 600 }}>8% (Rp 25k)</span>
                    </div>
                    <div style={{ height: '4px', backgroundColor: '#1e293b', borderRadius: '3px', overflow: 'hidden', marginTop: '1px' }}>
                      <div style={{ width: '8%', height: '100%', backgroundColor: '#06b6d4' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ backgroundColor: '#131b2e', border: '1px solid #1e293b', borderRadius: '6px', padding: '6px 10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Calendar size={13} color="#f59e0b" />
                <span style={{ fontSize: '9px', fontWeight: 700, color: '#f8fafc' }}>Kalender Jatuh Tempo Oktober 2024:</span>
                <div style={{ display: 'flex', gap: '4px' }}>
                  <span style={{ fontSize: '8px', backgroundColor: '#1e293b', color: '#94a3b8', padding: '1px 5px', borderRadius: '3px' }}>15 Okt (Spotify ✓)</span>
                  <span style={{ fontSize: '8px', backgroundColor: '#7c2d12', color: '#fdba74', padding: '1px 5px', borderRadius: '3px', fontWeight: 700 }}>20 Okt (Netflix H-3)</span>
                  <span style={{ fontSize: '8px', backgroundColor: '#1e293b', color: '#94a3b8', padding: '1px 5px', borderRadius: '3px' }}>25 Okt (ChatGPT)</span>
                </div>
              </div>
              <span style={{ fontSize: '8.5px', color: '#10b981', backgroundColor: '#064e3b', padding: '2px 6px', borderRadius: '4px', fontWeight: 600 }}>Auto-Renewal: 4 Aktif</span>
            </div>
          </div>
        );

      case 'tatagih-ai-assistant':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', height: '100%', overflowY: 'auto' }}>
            <div style={{ backgroundColor: '#131b2e', border: '1px solid rgba(168, 85, 247, 0.4)', borderRadius: '8px', padding: '10px 12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'conic-gradient(#10b981 0% 88%, #334155 88% 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '4px' }}>
                  <div style={{ width: '100%', height: '100%', borderRadius: '50%', backgroundColor: '#0f172a', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontSize: '13px', fontWeight: 800, color: '#10b981', lineHeight: 1 }}>88</span>
                    <span style={{ fontSize: '6.5px', color: '#94a3b8' }}>/100</span>
                  </div>
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ fontSize: '11px', fontWeight: 800, color: '#f8fafc' }}>Financial Health Score</span>
                    <span style={{ fontSize: '8px', backgroundColor: '#14532d', color: '#86efac', padding: '1px 5px', borderRadius: '3px', fontWeight: 700 }}>SANGAT SEHAT</span>
                  </div>
                  <div style={{ fontSize: '9px', color: '#94a3b8', marginTop: '2px' }}>
                    Dianalisis oleh <b>Tata Asisten</b> menggunakan model <b>Google Gemini AI</b>.
                  </div>
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '8px', color: '#94a3b8', textTransform: 'uppercase' }}>Potensi Penghematan</div>
                <div style={{ fontSize: '13px', fontWeight: 800, color: '#4ade80' }}>Hemat Rp 145.000/bln</div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', flex: 1 }}>
              <div style={{ fontSize: '9.5px', fontWeight: 700, color: '#c084fc', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Sparkles size={11} color="#c084fc" />
                <span>Rekomendasi Cerdas Gemini AI untuk Anda:</span>
              </div>

              <div style={{ backgroundColor: '#131b2e', border: '1px solid #1e293b', borderRadius: '6px', padding: '7px 9px', display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '12px' }}>💡</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '9.5px', fontWeight: 700, color: '#f8fafc' }}>Optimasi Paket Patungan Spotify Family</div>
                  <div style={{ fontSize: '8.5px', color: '#94a3b8', lineHeight: 1.35, marginTop: '2px' }}>
                    Anda saat ini membayar Rp 86.900/bln. Dengan membagi tagihan ke 5 teman kost via fitur Patungan, Anda menghemat <b>Rp 38.000/bln</b> per anggota.
                  </div>
                </div>
                <span style={{ fontSize: '8px', color: '#4ade80', fontWeight: 700 }}>+Hemat 44%</span>
              </div>

              <div style={{ backgroundColor: '#131b2e', border: '1px solid #7f1d1d', borderRadius: '6px', padding: '7px 9px', display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '12px' }}>⚠️</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '9.5px', fontWeight: 700, color: '#fca5a5' }}>Overlapping Video Streaming (Netflix &amp; Disney+)</div>
                  <div style={{ fontSize: '8.5px', color: '#94a3b8', lineHeight: 1.35, marginTop: '2px' }}>
                    Terdeteksi 2 layanan streaming video aktif bersamaan. Jam tonton Disney+ tercatat di bawah 3 jam/bulan. Pertimbangkan jeda langganan Disney+.
                  </div>
                </div>
                <span style={{ fontSize: '8px', color: '#f87171', fontWeight: 700 }}>Hemat Rp 65k</span>
              </div>

              <div style={{ backgroundColor: '#131b2e', border: '1px solid #1e293b', borderRadius: '6px', padding: '7px 9px', display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '12px' }}>🩸</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '9.5px', fontWeight: 700, color: '#f8fafc' }}>Vampire Spending: 3 Layanan Mikro Terakumulasi</div>
                  <div style={{ fontSize: '8.5px', color: '#94a3b8', lineHeight: 1.35, marginTop: '2px' }}>
                    Terdapat 3 langganan mikro di bawah Rp 30.000 yang jarang digunakan. Jika digabungkan, biayanya mencapai <b>Rp 708.000/tahun</b>.
                  </div>
                </div>
                <span style={{ fontSize: '8px', color: '#f59e0b', fontWeight: 700 }}>Hemat Rp 42k</span>
              </div>
            </div>

            <div style={{ backgroundColor: '#4f46e5', color: '#ffffff', padding: '6px', borderRadius: '6px', textAlign: 'center', fontSize: '9.5px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
              <Sparkles size={12} />
              <span>Terapkan Rekomendasi Efisiensi &amp; Sinkronkan Jadwal</span>
            </div>
          </div>
        );

      case 'tatagih-ai-chat':
        return (
          <div style={{ display: 'grid', gridTemplateColumns: '110px 1fr', gap: '8px', height: '100%', overflow: 'hidden' }}>
            <div style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '6px', padding: '6px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <div style={{ fontSize: '8px', color: '#64748b', textTransform: 'uppercase', fontWeight: 700 }}>Sesi Percakapan</div>
              <div style={{ padding: '4px 6px', borderRadius: '4px', backgroundColor: '#1e293b', borderLeft: '2px solid #818cf8', fontSize: '8px', color: '#f8fafc', fontWeight: 700 }}>
                ● Evaluasi Streaming
              </div>
              <div style={{ padding: '4px 6px', borderRadius: '4px', fontSize: '8px', color: '#94a3b8' }}>
                ○ Simulasi Patungan
              </div>
              <div style={{ padding: '4px 6px', borderRadius: '4px', fontSize: '8px', color: '#94a3b8' }}>
                ○ Audit Vampire Cost
              </div>
              <div style={{ marginTop: 'auto', padding: '4px', backgroundColor: '#0284c7', borderRadius: '4px', textAlign: 'center', fontSize: '8px', color: '#ffffff', fontWeight: 600 }}>
                + Sesi Baru
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: '6px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #1e293b', paddingBottom: '4px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <Bot size={13} color="#818cf8" />
                  <span style={{ fontSize: '10px', fontWeight: 800, color: '#f8fafc' }}>Tata AI Assistant</span>
                </div>
                <span style={{ fontSize: '8px', backgroundColor: '#064e3b', color: '#86efac', padding: '1px 5px', borderRadius: '3px' }}>● Gemini Connected</span>
              </div>

              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px', overflowY: 'auto' }}>
                <div style={{ alignSelf: 'flex-end', maxWidth: '85%', backgroundColor: '#312e81', color: '#e0e7ff', padding: '6px 8px', borderRadius: '8px 8px 0 8px', fontSize: '8.5px', lineHeight: 1.35 }}>
                  Berapa total pengeluaran streaming saya dan bagaimana cara optimasinya?
                </div>

                <div style={{ alignSelf: 'flex-start', maxWidth: '92%', backgroundColor: '#131b2e', border: '1px solid #1e293b', color: '#f1f5f9', padding: '7px 9px', borderRadius: '8px 8px 8px 0', fontSize: '8.5px', lineHeight: 1.4 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '3px', color: '#c084fc', fontWeight: 700, fontSize: '8px' }}>
                    <Sparkles size={9} />
                    <span>Tata AI (Context Aware):</span>
                  </div>
                  Total pengeluaran streaming Anda saat ini <b>Rp 245.000/bulan</b> (Netflix Rp 186.000 &amp; YouTube Rp 59.000).<br />
                  <b>Saran Cerdas:</b><br />
                  1. Manfaatkan fitur <b>Patungan Tatagih</b> untuk Spotify &amp; Netflix Family (potensi hemat Rp 95.000/bln).<br />
                  2. Aktifkan reminder bot H-3 agar saldo rekening siap tepat waktu.<br />
                  <span style={{ color: '#4ade80', fontWeight: 700 }}>Estimasi Efisiensi: Rp 1.140.000 / tahun!</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '4px' }}>
                <input
                  type="text"
                  readOnly
                  value="Tunjukkan simulasi patungan Netflix 4 orang..."
                  style={{ flex: 1, backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '4px', padding: '5px 7px', fontSize: '8px', color: '#94a3b8' }}
                />
                <div style={{ backgroundColor: '#4f46e5', color: '#ffffff', padding: '5px 8px', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Send size={11} />
                </div>
              </div>
            </div>
          </div>
        );

      case 'tatagih-leak':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', height: '100%', overflowY: 'auto' }}>
            <div style={{ backgroundColor: '#7f1d1d', border: '1px solid #dc2626', borderRadius: '6px', padding: '6px 10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <AlertTriangle size={13} color="#fca5a5" />
                <span style={{ fontSize: '9.5px', fontWeight: 700, color: '#ffffff' }}>Pendeteksi Kebocoran Dana: 2 Pola Tidak Efisien Ditemukan</span>
              </div>
              <span style={{ fontSize: '8.5px', backgroundColor: '#991b1b', color: '#fee2e2', padding: '2px 6px', borderRadius: '4px', fontWeight: 700 }}>Potensi Hemat Rp 145.000/bln</span>
            </div>

            <div style={{ backgroundColor: '#131b2e', border: '1px solid #334155', borderRadius: '6px', padding: '8px 10px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '10px', fontWeight: 700, color: '#f59e0b' }}>1. Overlapping Subscription (Fungsi Mirip)</span>
                <span style={{ fontSize: '8px', backgroundColor: '#78350f', color: '#fde68a', padding: '1px 5px', borderRadius: '3px' }}>Film &amp; Seri</span>
              </div>
              <div style={{ fontSize: '8.5px', color: '#cbd5e1', lineHeight: 1.35 }}>
                Anda memiliki <b>Netflix Premium (Rp 186.000)</b> dan <b>Disney+ Hotstar (Rp 65.000)</b> secara bersamaan. Kedua layanan memiliki katalog tontonan serupa, namun utilisasi Disney+ hanya 12% dalam 30 hari terakhir.
              </div>
              <div style={{ display: 'flex', gap: '6px', marginTop: '2px' }}>
                <div style={{ flex: 1, backgroundColor: '#047857', color: '#ffffff', textAlign: 'center', padding: '4px', borderRadius: '4px', fontSize: '8.5px', fontWeight: 700 }}>
                  Jeda Disney+ (Hemat Rp 65.000/bln)
                </div>
                <div style={{ flex: 1, backgroundColor: '#1e293b', color: '#94a3b8', textAlign: 'center', padding: '4px', borderRadius: '4px', fontSize: '8.5px' }}>
                  Tetap Langganan Keduanya
                </div>
              </div>
            </div>

            <div style={{ backgroundColor: '#131b2e', border: '1px solid #334155', borderRadius: '6px', padding: '8px 10px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '10px', fontWeight: 700, color: '#ec4899' }}>2. Vampire Spending (Pengeluaran Mikro Tak Disadari)</span>
                <span style={{ fontSize: '8px', backgroundColor: '#831843', color: '#fbcfe8', padding: '1px 5px', borderRadius: '3px' }}>Mikro SaaS</span>
              </div>
              <div style={{ fontSize: '8.5px', color: '#cbd5e1', lineHeight: 1.35 }}>
                Terdeteksi 3 tagihan mikro berulang: <b>Cloud Addon 50GB (Rp 15.000)</b>, <b>Icon Pack Pro (Rp 19.000)</b>, dan <b>Gaming Addon (Rp 25.000)</b>. Terakumulasi menjadi <b>Rp 708.000 / tahun</b> tanpa penggunaan aktif.
              </div>
              <div style={{ display: 'flex', gap: '6px', marginTop: '2px' }}>
                <div style={{ flex: 1, backgroundColor: '#9333ea', color: '#ffffff', textAlign: 'center', padding: '4px', borderRadius: '4px', fontSize: '8.5px', fontWeight: 700 }}>
                  Batalkan 2 Layanan Mikro (Hemat Rp 44.000/bln)
                </div>
                <div style={{ flex: 1, backgroundColor: '#1e293b', color: '#94a3b8', textAlign: 'center', padding: '4px', borderRadius: '4px', fontSize: '8.5px' }}>
                  Audit Detail Layanan
                </div>
              </div>
            </div>
          </div>
        );

      case 'tatagih-patungan':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', height: '100%', overflowY: 'auto' }}>
            <div style={{ backgroundColor: '#131b2e', border: '1px solid #1e293b', borderRadius: '6px', padding: '8px 10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '11px', fontWeight: 800, color: '#f8fafc' }}>Spotify Family Kost Melati</div>
                <div style={{ fontSize: '8.5px', color: '#94a3b8' }}>Total Tagihan: <b>Rp 86.900/bln</b> • 5 Anggota (Rp 17.380 / orang)</div>
              </div>
              <span style={{ fontSize: '8px', backgroundColor: '#1e293b', color: '#38bdf8', padding: '2px 6px', borderRadius: '4px', fontWeight: 600 }}>Siklus Otomatis Aktif</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', flex: 1 }}>
              {[
                { tag: '@krisna#2024', role: 'Pemilik (Host)', status: 'Lunas', color: '#10b981', action: null },
                { tag: '@budi#1102', role: 'Anggota', status: 'Lunas (BCA 14 Okt)', color: '#10b981', action: null },
                { tag: '@rani#4091', role: 'Anggota', status: 'Bukti Diunggah (Perlu Verifikasi)', color: '#f59e0b', action: 'approve' },
                { tag: '@dimas#3321', role: 'Anggota', status: 'Belum Bayar (Reminder Terkirim)', color: '#ef4444', action: 'remind' },
                { tag: '@putri#9021', role: 'Anggota', status: 'Lunas (QRIS 15 Okt)', color: '#10b981', action: null }
              ].map((m, idx) => (
                <div key={idx} style={{ backgroundColor: '#131b2e', border: '1px solid #1e293b', borderRadius: '5px', padding: '6px 8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <div style={{ width: '18px', height: '18px', borderRadius: '50%', backgroundColor: '#1e293b', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '8px', color: '#ffffff', fontWeight: 700 }}>
                      {m.tag.substring(1, 3).toUpperCase()}
                    </div>
                    <div>
                      <div style={{ fontSize: '9px', fontWeight: 700, color: '#ffffff' }}>{m.tag} <span style={{ fontSize: '7.5px', color: '#64748b' }}>({m.role})</span></div>
                      <div style={{ fontSize: '8px', color: m.color, fontWeight: 600 }}>{m.status}</div>
                    </div>
                  </div>

                  {m.action === 'approve' ? (
                    <div style={{ display: 'flex', gap: '4px' }}>
                      <span style={{ fontSize: '7.5px', backgroundColor: '#065f46', color: '#6ee7b7', padding: '2px 5px', borderRadius: '3px', fontWeight: 700 }}>✓ Terima Bukti</span>
                      <span style={{ fontSize: '7.5px', backgroundColor: '#7f1d1d', color: '#fca5a5', padding: '2px 5px', borderRadius: '3px' }}>✕ Tolak</span>
                    </div>
                  ) : m.action === 'remind' ? (
                    <span style={{ fontSize: '7.5px', backgroundColor: '#7c2d12', color: '#fdba74', padding: '2px 6px', borderRadius: '3px', fontWeight: 600 }}>Kirim Bot Reminder</span>
                  ) : (
                    <span style={{ fontSize: '7.5px', color: '#10b981', fontWeight: 700 }}>Rp 17.380 ✓</span>
                  )}
                </div>
              ))}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
              <div style={{ backgroundColor: '#4f46e5', color: '#ffffff', textAlign: 'center', padding: '6px', borderRadius: '4px', fontSize: '9px', fontWeight: 700 }}>
                + Undang Teman via User Tag
              </div>
              <div style={{ backgroundColor: '#1e293b', color: '#cbd5e1', textAlign: 'center', padding: '6px', borderRadius: '4px', fontSize: '9px' }}>
                Perbarui Periode Tagihan Baru
              </div>
            </div>
          </div>
        );

      case 'tatagih-templates':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', height: '100%', overflowY: 'auto' }}>
            <div style={{ fontSize: '9.5px', fontWeight: 700, color: '#f8fafc', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>Pilih Template Populer (1-Klik Isi Form):</span>
              <span style={{ fontSize: '8px', color: '#38bdf8' }}>Smart Templates</span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '4px' }}>
              {[
                { name: 'Netflix', price: '186k', color: '#e50914' },
                { name: 'Spotify', price: '86k', color: '#1db954' },
                { name: 'ChatGPT+', price: '310k', color: '#10a37f' },
                { name: 'YouTube', price: '59k', color: '#ff0000' },
                { name: 'Google One', price: '135k', color: '#4285f4' },
                { name: 'Copilot', price: '155k', color: '#6e40c9' }
              ].map((t, idx) => (
                <div key={idx} style={{ backgroundColor: '#131b2e', border: '1px solid #1e293b', borderRadius: '5px', padding: '5px 4px', textAlign: 'center' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: t.color, margin: '0 auto 2px auto' }}></div>
                  <div style={{ fontSize: '8px', fontWeight: 700, color: '#ffffff' }}>{t.name}</div>
                  <div style={{ fontSize: '7.5px', color: '#94a3b8' }}>{t.price}</div>
                </div>
              ))}
            </div>

            <div style={{ backgroundColor: '#131b2e', border: '1px solid #1e293b', borderRadius: '6px', padding: '8px', display: 'flex', flexDirection: 'column', gap: '6px', flex: 1 }}>
              <div style={{ fontSize: '9.5px', fontWeight: 700, color: '#38bdf8' }}>Form Tambah / Edit Subscription</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '6px' }}>
                <div style={{ backgroundColor: '#0f172a', padding: '5px 7px', borderRadius: '4px', fontSize: '8.5px', color: '#94a3b8' }}>
                  Layanan: <span style={{ color: '#ffffff', fontWeight: 600 }}>ChatGPT Plus</span>
                </div>
                <div style={{ backgroundColor: '#0f172a', padding: '5px 7px', borderRadius: '4px', fontSize: '8.5px', color: '#94a3b8' }}>
                  Kategori: <span style={{ color: '#c084fc', fontWeight: 600 }}>AI &amp; Productivity</span>
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
                <div style={{ backgroundColor: '#0f172a', padding: '5px 7px', borderRadius: '4px', fontSize: '8.5px', color: '#94a3b8' }}>
                  Nominal: <span style={{ color: '#ffffff', fontWeight: 700 }}>Rp 310.000</span>
                </div>
                <div style={{ backgroundColor: '#0f172a', padding: '5px 7px', borderRadius: '4px', fontSize: '8.5px', color: '#94a3b8' }}>
                  Siklus: <span style={{ color: '#38bdf8', fontWeight: 600 }}>Bulanan (Auto-Renew)</span>
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
                <div style={{ backgroundColor: '#0f172a', padding: '5px 7px', borderRadius: '4px', fontSize: '8.5px', color: '#94a3b8' }}>
                  Jatuh Tempo: <span style={{ color: '#ffffff' }}>25 Oktober 2024</span>
                </div>
                <div style={{ backgroundColor: '#0f172a', padding: '5px 7px', borderRadius: '4px', fontSize: '8.5px', color: '#94a3b8' }}>
                  Reminder: <span style={{ color: '#4ade80', fontWeight: 600 }}>Telegram Bot (H-3 &amp; H-1)</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '6px', marginTop: 'auto' }}>
                <div style={{ flex: 1, backgroundColor: '#2563eb', color: '#ffffff', textAlign: 'center', padding: '6px', borderRadius: '4px', fontSize: '9px', fontWeight: 700 }}>
                  Simpan Langganan
                </div>
                <div style={{ backgroundColor: '#065f46', color: '#a7f3d0', padding: '6px 10px', borderRadius: '4px', fontSize: '9px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Download size={11} />
                  <span>Ekspor CSV</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'tatagih-compare':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', height: '100%', overflowY: 'auto' }}>
            <div style={{ fontSize: '9.5px', fontWeight: 700, color: '#f8fafc', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>Perbandingan Paket Netflix (Tier Analysis):</span>
              <span style={{ fontSize: '8px', color: '#38bdf8' }}>Smart Comparison Matrix</span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '6px' }}>
              <div style={{ backgroundColor: '#131b2e', border: '1px solid #1e293b', borderRadius: '6px', padding: '8px' }}>
                <div style={{ fontSize: '9px', fontWeight: 700, color: '#94a3b8' }}>Mobile Plan</div>
                <div style={{ fontSize: '12px', fontWeight: 800, color: '#ffffff', marginTop: '2px' }}>Rp 54.000<span style={{ fontSize: '7.5px', color: '#64748b' }}>/bln</span></div>
                <div style={{ fontSize: '8px', color: '#94a3b8', marginTop: '4px', lineHeight: 1.4 }}>
                  • 1 Layar HP/Tablet<br />
                  • Kualitas HD (720p)<br />
                  • Nilai: Kurang fleksibel
                </div>
              </div>

              <div style={{ backgroundColor: '#131b2e', border: '1px solid #1e293b', borderRadius: '6px', padding: '8px' }}>
                <div style={{ fontSize: '9px', fontWeight: 700, color: '#38bdf8' }}>Standard Plan</div>
                <div style={{ fontSize: '12px', fontWeight: 800, color: '#ffffff', marginTop: '2px' }}>Rp 120.000<span style={{ fontSize: '7.5px', color: '#64748b' }}>/bln</span></div>
                <div style={{ fontSize: '8px', color: '#94a3b8', marginTop: '4px', lineHeight: 1.4 }}>
                  • 2 Layar Bersamaan<br />
                  • Kualitas Full HD (1080p)<br />
                  • Nilai: Cocok personal + TV
                </div>
              </div>

              <div style={{ backgroundColor: '#131b2e', border: '1px solid #818cf8', borderRadius: '6px', padding: '8px', position: 'relative' }}>
                <span style={{ position: 'absolute', top: '-6px', right: '6px', backgroundColor: '#4f46e5', color: '#ffffff', fontSize: '6.5px', padding: '1px 5px', borderRadius: '3px', fontWeight: 800 }}>REKOMENDASI PATUNGAN</span>
                <div style={{ fontSize: '9px', fontWeight: 700, color: '#c084fc' }}>Premium 4K</div>
                <div style={{ fontSize: '12px', fontWeight: 800, color: '#4ade80', marginTop: '2px' }}>Rp 186.000<span style={{ fontSize: '7.5px', color: '#64748b' }}>/bln</span></div>
                <div style={{ fontSize: '8px', color: '#94a3b8', marginTop: '4px', lineHeight: 1.4 }}>
                  • 4 Layar 4K Ultra HD<br />
                  • Audio Spasial<br />
                  • <b>Rp 46.500/orang (Patungan 4)</b>
                </div>
              </div>
            </div>

            <div style={{ backgroundColor: '#131b2e', border: '1px solid #1e293b', borderRadius: '6px', padding: '8px', display: 'flex', flexDirection: 'column', gap: '4px', flex: 1 }}>
              <div style={{ fontSize: '9px', fontWeight: 700, color: '#f8fafc' }}>Riwayat Pembayaran Terbaru:</div>
              {[
                { name: 'Netflix Premium', date: '20 Sep 2024', price: 'Rp 186.000', cat: 'Hiburan', status: 'Berhasil' },
                { name: 'Spotify Family Plan', date: '15 Sep 2024', price: 'Rp 86.900', cat: 'Musik', status: 'Berhasil' },
                { name: 'ChatGPT Plus', date: '25 Ags 2024', price: 'Rp 310.000', cat: 'AI', status: 'Berhasil' }
              ].map((tx, idx) => (
                <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#0f172a', padding: '4px 6px', borderRadius: '4px', fontSize: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <CheckCircle2 size={10} color="#10b981" />
                    <div>
                      <span style={{ color: '#ffffff', fontWeight: 600 }}>{tx.name}</span>
                      <span style={{ color: '#64748b', marginLeft: '6px' }}>{tx.date}</span>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ color: '#94a3b8' }}>{tx.cat}</span>
                    <span style={{ color: '#4ade80', fontWeight: 700 }}>{tx.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'tatagih-bot':
        return (
          <div style={{ width: '100%', height: '100%', backgroundColor: '#0e1621', borderRadius: '6px', border: '1px solid #242f3d', padding: '10px 12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', borderBottom: '1px solid #17212b', paddingBottom: '6px' }}>
              <div style={{ width: '22px', height: '22px', borderRadius: '50%', backgroundColor: '#2b5278', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', fontSize: '9px', fontWeight: 700 }}>
                TB
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '10.5px', fontWeight: 700, color: '#ffffff' }}>Tatagih Reminder Bot</div>
                <div style={{ fontSize: '8px', color: '#4ade80' }}>bot verified • webhook connected</div>
              </div>
              <span style={{ fontSize: '7.5px', backgroundColor: '#182533', color: '#38bdf8', padding: '2px 5px', borderRadius: '3px' }}>Queue Worker: Active</span>
            </div>

            <div style={{ alignSelf: 'flex-start', maxWidth: '92%', backgroundColor: '#182533', padding: '9px 11px', borderRadius: '8px 8px 8px 0', border: '1px solid #2b5278' }}>
              <div style={{ fontSize: '9.5px', color: '#f59e0b', fontWeight: 700, marginBottom: '3px' }}>🔔 Peringatan Tagihan H-3 (Tatagih Reminder)</div>
              <div style={{ fontSize: '9px', color: '#e2e8f0', lineHeight: 1.4 }}>
                Halo <b>Krisna</b>! Langganan <b>Netflix Premium</b> sebesar <b>Rp 186.000</b> akan jatuh tempo dalam 3 hari (<b>20 Oktober 2024</b>).<br />
                Status Auto-Renewal: <span style={{ color: '#4ade80', fontWeight: 700 }}>Aktif (Debit Mandiri)</span><br />
                Pastikan saldo Anda mencukupi agar layanan tidak terputus otomatis.
              </div>
              <div style={{ fontSize: '7.5px', color: '#64748b', textAlign: 'right', marginTop: '4px' }}>08:00 WIB • Dispatched via Laravel Queue Job</div>
            </div>

            <div style={{ display: 'flex', gap: '6px', marginTop: 'auto' }}>
              <div style={{ flex: 1, backgroundColor: '#2b5278', color: '#ffffff', textAlign: 'center', padding: '6px', borderRadius: '4px', fontSize: '9px', fontWeight: 600 }}>
                Sudah Dibayar ✓
              </div>
              <div style={{ flex: 1, backgroundColor: '#182533', border: '1px solid #2b5278', color: '#cbd5e1', textAlign: 'center', padding: '6px', borderRadius: '4px', fontSize: '9px' }}>
                Snooze (H-1)
              </div>
              <div style={{ flex: 1, backgroundColor: '#182533', border: '1px solid #2b5278', color: '#38bdf8', textAlign: 'center', padding: '6px', borderRadius: '4px', fontSize: '9px' }}>
                Buka Web Tatagih ↗
              </div>
            </div>
          </div>
        );

      case 'tatagih-admin':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', height: '100%', overflowY: 'auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '6px' }}>
              <div style={{ backgroundColor: '#131b2e', border: '1px solid #1e293b', borderRadius: '6px', padding: '7px' }}>
                <div style={{ fontSize: '8px', color: '#94a3b8', textTransform: 'uppercase' }}>Total Pengguna</div>
                <div style={{ fontSize: '13px', fontWeight: 800, color: '#ffffff', marginTop: '2px' }}>1.428 <span style={{ fontSize: '8px', color: '#10b981' }}>+18%</span></div>
              </div>
              <div style={{ backgroundColor: '#131b2e', border: '1px solid #1e293b', borderRadius: '6px', padding: '7px' }}>
                <div style={{ fontSize: '8px', color: '#94a3b8', textTransform: 'uppercase' }}>Subscriptions</div>
                <div style={{ fontSize: '13px', fontWeight: 800, color: '#818cf8', marginTop: '2px' }}>4.850 Item</div>
              </div>
              <div style={{ backgroundColor: '#131b2e', border: '1px solid #1e293b', borderRadius: '6px', padding: '7px' }}>
                <div style={{ fontSize: '8px', color: '#94a3b8', textTransform: 'uppercase' }}>Reminder Terkirim</div>
                <div style={{ fontSize: '13px', fontWeight: 800, color: '#38bdf8', marginTop: '2px' }}>14.280 Bot Msg</div>
              </div>
              <div style={{ backgroundColor: '#131b2e', border: '1px solid #1e293b', borderRadius: '6px', padding: '7px' }}>
                <div style={{ fontSize: '8px', color: '#94a3b8', textTransform: 'uppercase' }}>Kategori Populer</div>
                <div style={{ fontSize: '11px', fontWeight: 800, color: '#ec4899', marginTop: '3px' }}>Hiburan (42%)</div>
              </div>
            </div>

            <div style={{ backgroundColor: '#131b2e', border: '1px solid #1e293b', borderRadius: '6px', padding: '8px', display: 'flex', flexDirection: 'column', gap: '4px', flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2px' }}>
                <span style={{ fontSize: '9px', fontWeight: 700, color: '#f8fafc' }}>Pendaftaran Pengguna Terbaru (Admin Audit):</span>
                <span style={{ fontSize: '8px', color: '#10b981', backgroundColor: '#064e3b', padding: '1px 5px', borderRadius: '3px' }}>Sistem Normal</span>
              </div>
              {[
                { tag: '@arya#3021', name: 'Arya Wiguna', subs: '4 Active', telegram: 'Connected', joined: 'Hari ini' },
                { tag: '@dina#7712', name: 'Dina Lestari', subs: '6 Active', telegram: 'Connected', joined: 'Kemarin' },
                { tag: '@rizky#1004', name: 'Rizky Pratama', subs: '2 Active', telegram: 'Pending', joined: '2 hari lalu' }
              ].map((u, idx) => (
                <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#0f172a', padding: '4px 7px', borderRadius: '4px', fontSize: '8px' }}>
                  <div>
                    <span style={{ color: '#ffffff', fontWeight: 700 }}>{u.name}</span>
                    <span style={{ color: '#64748b', marginLeft: '6px' }}>{u.tag}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ color: '#38bdf8' }}>{u.subs}</span>
                    <span style={{ color: u.telegram === 'Connected' ? '#10b981' : '#f59e0b' }}>Bot: {u.telegram}</span>
                    <span style={{ color: '#64748b' }}>{u.joined}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div style={{
      width: '100%',
      maxWidth: '100%', flex: 1,
      backgroundColor: '#0b0f19',
      borderRadius: '12px',
      border: '1px solid #1e293b',
      boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.05)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      userSelect: 'none',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <div style={{
        height: '32px',
        backgroundColor: '#0f172a',
        borderBottom: '1px solid #1e293b',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 12px',
        fontSize: '11px',
        color: '#94a3b8'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <div style={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: '#ef4444' }}></div>
          <div style={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: '#f59e0b' }}></div>
          <div style={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: '#10b981' }}></div>
          <span style={{ marginLeft: '6px', fontWeight: 800, color: '#f1f5f9', letterSpacing: '0.4px' }}>Tatagih</span>
          <span style={{ fontSize: '8px', backgroundColor: '#312e81', color: '#c7d2fe', padding: '1px 6px', borderRadius: '3px', fontWeight: 700 }}>Laravel 13 • Tailwind</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '9px' }}>
          <span style={{ color: '#c084fc', display: 'flex', alignItems: 'center', gap: '3px' }}>
            <Sparkles size={10} /> Gemini AI
          </span>
          <span style={{ color: '#4ade80' }}>● Telegram Bot</span>
          <span style={{ color: '#64748b' }}>v2.4</span>
        </div>
      </div>

      <div style={{ padding: '10px 12px', backgroundColor: '#0b0f19', minHeight: '340px', display: 'flex', flexDirection: 'column' }}>
        {renderScreen()}
      </div>
    </div>
  );
};

const renderNenaCareMockup = (type) => {
  const renderScreen = () => {
    switch (type) {
      case 'nenacare-dashboard':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', height: '100%', overflowY: 'auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '6px' }}>
              <div style={{ backgroundColor: '#064e3b', border: '1px solid #059669', borderRadius: '6px', padding: '8px' }}>
                <div style={{ fontSize: '8px', color: '#a7f3d0', textTransform: 'uppercase', fontWeight: 600 }}>Total Laporan</div>
                <div style={{ fontSize: '14px', fontWeight: 800, color: '#ffffff', marginTop: '2px' }}>24 Insiden</div>
              </div>
              <div style={{ backgroundColor: '#131b2e', border: '1px solid #1e293b', borderRadius: '6px', padding: '8px' }}>
                <div style={{ fontSize: '8px', color: '#f59e0b', textTransform: 'uppercase', fontWeight: 600 }}>Menunggu</div>
                <div style={{ fontSize: '14px', fontWeight: 800, color: '#fbbf24', marginTop: '2px' }}>3 Laporan</div>
              </div>
              <div style={{ backgroundColor: '#131b2e', border: '1px solid #1e293b', borderRadius: '6px', padding: '8px' }}>
                <div style={{ fontSize: '8px', color: '#38bdf8', textTransform: 'uppercase', fontWeight: 600 }}>Diproses</div>
                <div style={{ fontSize: '14px', fontWeight: 800, color: '#38bdf8', marginTop: '2px' }}>6 Tindakan</div>
              </div>
              <div style={{ backgroundColor: '#131b2e', border: '1px solid #1e293b', borderRadius: '6px', padding: '8px' }}>
                <div style={{ fontSize: '8px', color: '#4ade80', textTransform: 'uppercase', fontWeight: 600 }}>Selesai Aman</div>
                <div style={{ fontSize: '14px', fontWeight: 800, color: '#4ade80', marginTop: '2px' }}>15 Kasus</div>
              </div>
              <div style={{ backgroundColor: '#450a0a', border: '1px solid #dc2626', borderRadius: '6px', padding: '8px' }}>
                <div style={{ fontSize: '8px', color: '#fca5a5', textTransform: 'uppercase', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '3px' }}>
                  <AlertTriangle size={10} color="#ef4444" />
                  <span>Prioritas Tinggi</span>
                </div>
                <div style={{ fontSize: '14px', fontWeight: 800, color: '#ef4444', marginTop: '2px' }}>4 Alert</div>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1.45fr 1fr', gap: '8px', flex: 1, minHeight: '140px' }}>
              <div style={{ backgroundColor: '#111827', border: '1px solid #1f2937', borderRadius: '6px', padding: '8px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                  <div style={{ fontSize: '9.5px', fontWeight: 700, color: '#f8fafc', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Shield size={12} color="#10b981" />
                    <span>Live Monitoring Feed K3 Nena Cafe</span>
                  </div>
                  <span style={{ fontSize: '8px', color: '#10b981', backgroundColor: '#064e3b', padding: '1px 5px', borderRadius: '3px' }}>Real-time Feed</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', overflowY: 'auto', flex: 1 }}>
                  <div style={{ backgroundColor: '#1f2937', padding: '6px 8px', borderRadius: '4px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div style={{ fontSize: '9px', fontWeight: 700, color: '#ffffff', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <span>#2312 Bau Gas Menyengat di Kitchen</span>
                        <span style={{ fontSize: '7.5px', backgroundColor: '#7f1d1d', color: '#fca5a5', padding: '1px 4px', borderRadius: '2px' }}>Tinggi (AI)</span>
                      </div>
                      <div style={{ fontSize: '8px', color: '#9ca3af', marginTop: '1px' }}>Kategori: Api &amp; Gas • Pelapor: Anonim • 5 mnt lalu</div>
                    </div>
                    <span style={{ fontSize: '8px', backgroundColor: '#78350f', color: '#fde68a', padding: '2px 6px', borderRadius: '3px', fontWeight: 600 }}>Menunggu</span>
                  </div>

                  <div style={{ backgroundColor: '#1f2937', padding: '6px 8px', borderRadius: '4px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div style={{ fontSize: '9px', fontWeight: 700, color: '#ffffff', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <span>#2311 Kabel Terkelupas Dekat Kasir Bar</span>
                        <span style={{ fontSize: '7.5px', backgroundColor: '#1e3a5f', color: '#93c5fd', padding: '1px 4px', borderRadius: '2px' }}>Normal (AI)</span>
                      </div>
                      <div style={{ fontSize: '8px', color: '#9ca3af', marginTop: '1px' }}>Kategori: Kelistrikan • Staf Kafe (Andi) • 25 mnt lalu</div>
                    </div>
                    <span style={{ fontSize: '8px', backgroundColor: '#1e3a8a', color: '#bfdbfe', padding: '2px 6px', borderRadius: '3px', fontWeight: 600 }}>Diproses</span>
                  </div>

                  <div style={{ backgroundColor: '#1f2937', padding: '6px 8px', borderRadius: '4px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div style={{ fontSize: '9px', fontWeight: 700, color: '#ffffff', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <span>#2310 Tumpahan Sirup &amp; Lantai Licin</span>
                        <span style={{ fontSize: '7.5px', backgroundColor: '#14532d', color: '#86efac', padding: '1px 4px', borderRadius: '2px' }}>Rendah</span>
                      </div>
                      <div style={{ fontSize: '8px', color: '#9ca3af', marginTop: '1px' }}>Kategori: Lingkungan • Customer • 1 jam lalu</div>
                    </div>
                    <span style={{ fontSize: '8px', backgroundColor: '#064e3b', color: '#86efac', padding: '2px 6px', borderRadius: '3px', fontWeight: 600 }}>Selesai</span>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div style={{ backgroundColor: '#1e1b4b', border: '1px solid #4338ca', borderRadius: '6px', padding: '8px' }}>
                  <div style={{ fontSize: '9px', fontWeight: 700, color: '#c7d2fe', display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '3px' }}>
                    <Sparkles size={11} color="#a855f7" />
                    <span>Rekomendasi Cepat AI Gemini (#2312):</span>
                  </div>
                  <div style={{ fontSize: '8.5px', color: '#e0e7ff', lineHeight: 1.4 }}>
                    "Segera isolasi regulator tabung LPG, buka exhaust dan pintu darurat dapur. Evakuasi personel dan jangan menyalakan saklar listrik."
                  </div>
                </div>

                <div style={{ backgroundColor: '#111827', border: '1px solid #1f2937', borderRadius: '6px', padding: '8px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '4px' }}>
                  <div style={{ fontSize: '8.5px', fontWeight: 700, color: '#9ca3af', display: 'flex', justifyContent: 'space-between' }}>
                    <span>Distribusi Kategori (Chart.js)</span>
                    <span style={{ color: '#10b981' }}>24 Total</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', marginTop: '2px' }}>
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '8px', color: '#cbd5e1' }}>
                        <span>Kelistrikan (10)</span><span>42%</span>
                      </div>
                      <div style={{ height: '4px', backgroundColor: '#1f2937', borderRadius: '2px', overflow: 'hidden' }}>
                        <div style={{ width: '42%', height: '100%', backgroundColor: '#38bdf8' }}></div>
                      </div>
                    </div>
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '8px', color: '#cbd5e1' }}>
                        <span>Api &amp; Gas (7)</span><span>29%</span>
                      </div>
                      <div style={{ height: '4px', backgroundColor: '#1f2937', borderRadius: '2px', overflow: 'hidden' }}>
                        <div style={{ width: '29%', height: '100%', backgroundColor: '#f97316' }}></div>
                      </div>
                    </div>
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '8px', color: '#cbd5e1' }}>
                        <span>Lingkungan &amp; Kebersihan (5)</span><span>21%</span>
                      </div>
                      <div style={{ height: '4px', backgroundColor: '#1f2937', borderRadius: '2px', overflow: 'hidden' }}>
                        <div style={{ width: '21%', height: '100%', backgroundColor: '#10b981' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'nenacare-ai-analyst':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', height: '100%', overflowY: 'auto' }}>
            <div style={{ backgroundColor: '#131b2e', border: '1px solid rgba(168, 85, 247, 0.4)', borderRadius: '8px', padding: '10px 12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#581c87', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Sparkles size={18} color="#c084fc" />
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ fontSize: '12px', fontWeight: 800, color: '#ffffff' }}>Google Gemini 2.5 Flash-Lite AI Analyst</span>
                    <span style={{ fontSize: '8px', backgroundColor: '#3b0764', color: '#d8b4fe', padding: '1px 5px', borderRadius: '3px', fontWeight: 700 }}>AUDITOR K3 F&amp;B</span>
                  </div>
                  <div style={{ fontSize: '9px', color: '#94a3b8' }}>
                    Mengevaluasi laporan insiden secara kontekstual: Kategori + Lokasi + Kronologi Kejadian.
                  </div>
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span style={{ fontSize: '8.5px', backgroundColor: '#7f1d1d', color: '#fca5a5', padding: '3px 8px', borderRadius: '4px', fontWeight: 700 }}>
                  PRIORITAS: TINGGI (URGENT)
                </span>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', flex: 1 }}>
              <div style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '6px', padding: '8px' }}>
                <div style={{ fontSize: '9.5px', fontWeight: 700, color: '#38bdf8', marginBottom: '6px' }}>Input Laporan Pengguna:</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '8.5px', color: '#cbd5e1' }}>
                  <div><b>Kategori:</b> Api &amp; Gas (Kitchen Nena Cafe)</div>
                  <div><b>Lokasi:</b> Dapur Utama - Kompor 4 Tungku</div>
                  <div><b>Pelapor:</b> <span style={{ color: '#4ade80' }}>Anonim (Identitas Dirahasiakan)</span></div>
                  <div><b>Deskripsi Masalah:</b> "Saat pergantian shift siang jam 12:15, tercium aroma gas LPG pekat di bawah meja kompor utama. Terdengar desisan halus pada selang regulator."</div>
                </div>
              </div>

              <div style={{ backgroundColor: '#090d16', border: '1px solid #1e293b', borderRadius: '6px', padding: '8px' }}>
                <div style={{ fontSize: '9.5px', fontWeight: 700, color: '#c084fc', marginBottom: '6px' }}>Output Terstruktur JSON (AI Result):</div>
                <pre style={{ margin: 0, fontSize: '8px', color: '#a7f3d0', fontFamily: 'monospace', lineHeight: 1.4, backgroundColor: '#022c22', padding: '6px', borderRadius: '4px', overflowX: 'auto' }}>
{`{
  "status_analisis": "VALID",
  "tingkat_prioritas": "Tinggi",
  "skor_risiko": 95,
  "potensi_bahaya": "Kebakaran / Ledakan Gas LPG di Dapur",
  "saran_tindakan": [
    "Matikan sumber api dan cabut regulator tabung LPG segera.",
    "Buka pintu dapur dan exhaust fan untuk ventilasi.",
    "Evakuasi staf dari area kompor sampai bau gas hilang.",
    "Periksa klem dan ganti selang karet yang bocor."
  ]
}`}
                </pre>
              </div>
            </div>
          </div>
        );

      case 'nenacare-report-form':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', height: '100%', overflowY: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #1e293b', paddingBottom: '6px' }}>
              <div style={{ fontSize: '11px', fontWeight: 800, color: '#ffffff' }}>Formulir Pelaporan Bahaya &amp; Insiden K3</div>
              <span style={{ fontSize: '8px', color: '#94a3b8' }}>Nena Cafe Safety Portal</span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '8px', flex: 1 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div>
                  <div style={{ fontSize: '8.5px', color: '#94a3b8', marginBottom: '2px' }}>Tipe Pelapor</div>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    <span style={{ fontSize: '8px', backgroundColor: '#065f46', color: '#a7f3d0', padding: '3px 8px', borderRadius: '3px', fontWeight: 600 }}>● Staf Kafe</span>
                    <span style={{ fontSize: '8px', backgroundColor: '#1e293b', color: '#94a3b8', padding: '3px 8px', borderRadius: '3px' }}>○ Customer / Pengunjung</span>
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: '8.5px', color: '#94a3b8', marginBottom: '2px' }}>Kategori Insiden</div>
                  <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '8px', backgroundColor: '#9a3412', color: '#ffedd5', padding: '2px 6px', borderRadius: '3px', fontWeight: 600 }}>Api &amp; Gas</span>
                    <span style={{ fontSize: '8px', backgroundColor: '#1e293b', color: '#94a3b8', padding: '2px 6px', borderRadius: '3px' }}>Kelistrikan</span>
                    <span style={{ fontSize: '8px', backgroundColor: '#1e293b', color: '#94a3b8', padding: '2px 6px', borderRadius: '3px' }}>Lingkungan</span>
                    <span style={{ fontSize: '8px', backgroundColor: '#1e293b', color: '#94a3b8', padding: '2px 6px', borderRadius: '3px' }}>Ergonomi &amp; APD</span>
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: '8.5px', color: '#94a3b8', marginBottom: '2px' }}>Lokasi Kejadian</div>
                  <div style={{ backgroundColor: '#1e293b', color: '#ffffff', padding: '4px 8px', borderRadius: '4px', fontSize: '8.5px' }}>Dapur Utama / Area Kompor LPG</div>
                </div>

                <div>
                  <div style={{ fontSize: '8.5px', color: '#94a3b8', marginBottom: '2px' }}>Deskripsi Kejadian</div>
                  <div style={{ backgroundColor: '#1e293b', color: '#cbd5e1', padding: '6px 8px', borderRadius: '4px', fontSize: '8px', minHeight: '36px' }}>
                    Tercium bau gas menyengat di dekat kompor utama saat shift siang...
                  </div>
                </div>
              </div>

              <div style={{ backgroundColor: '#022c22', border: '1px solid #059669', borderRadius: '6px', padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#34d399', fontWeight: 700, fontSize: '9.5px', marginBottom: '4px' }}>
                    <ShieldCheck size={14} color="#34d399" />
                    <span>Mode Laporan Anonim</span>
                  </div>
                  <div style={{ fontSize: '8px', color: '#a7f3d0', lineHeight: 1.4 }}>
                    Mencentang <b>"Laporkan Secara Anonim"</b> akan menghapus seluruh data nama dan identitas pelapor pada database MySQL. Identitas tidak akan tercatat dalam log audit demi menjamin kebebasan dan rasa aman pelapor.
                  </div>
                  <div style={{ marginTop: '8px', backgroundColor: '#064e3b', padding: '4px 6px', borderRadius: '3px', fontSize: '8px', color: '#ffffff', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Check size={11} color="#34d399" />
                    <span>[✔] Identitas Dirahasiakan Sepenuhnya</span>
                  </div>
                </div>

                <div style={{ backgroundColor: '#059669', color: '#ffffff', textAlign: 'center', padding: '6px', borderRadius: '4px', fontSize: '9px', fontWeight: 700 }}>
                  Kirim Laporan &amp; Jalankan Analisis AI ➔
                </div>
              </div>
            </div>
          </div>
        );

      case 'nenacare-telegram-remote':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', height: '100%', overflowY: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #1e293b', paddingBottom: '4px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Bot size={14} color="#38bdf8" />
                <span style={{ fontSize: '10.5px', fontWeight: 700, color: '#f8fafc' }}>Telegram Bot Integration — NenaCare HSE Alert</span>
              </div>
              <span style={{ fontSize: '8px', color: '#38bdf8' }}>Webhook &amp; Inline Keyboard Callback</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', flex: 1, backgroundColor: '#0e1621', borderRadius: '8px', padding: '10px', border: '1px solid #17212b' }}>
              <div style={{ backgroundColor: '#182533', padding: '10px 12px', borderRadius: '8px 8px 8px 0', border: '1px solid #243547', maxWidth: '85%' }}>
                <div style={{ fontSize: '10px', fontWeight: 700, color: '#ef4444', marginBottom: '4px' }}>
                  🚨 LAPORAN K3 BARU MASUK! #2312
                </div>
                <div style={{ fontSize: '8.5px', color: '#e2e8f0', lineHeight: 1.45 }}>
                  📍 <b>Lokasi:</b> Dapur / Kitchen Nena Cafe<br />
                  🏷️ <b>Kategori:</b> Api &amp; Gas (Anonim)<br />
                  📝 <b>Deskripsi:</b> Tercium bau gas menyengat di dekat kompor utama.<br />
                  🤖 <b>Analisis AI Gemini:</b> <span style={{ color: '#ef4444', fontWeight: 700 }}>PRIORITAS TINGGI</span><br />
                  💡 <b>Saran Mitigasi:</b> Segera matikan kompor, cabut regulator LPG, dan evakuasi dapur.
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', marginTop: '8px' }}>
                  <div style={{ backgroundColor: '#2b5278', color: '#ffffff', textAlign: 'center', padding: '4px', borderRadius: '4px', fontSize: '8px', fontWeight: 700 }}>
                    🚀 Proses
                  </div>
                  <div style={{ backgroundColor: '#1e3b2e', color: '#86efac', textAlign: 'center', padding: '4px', borderRadius: '4px', fontSize: '8px', fontWeight: 700 }}>
                    ✅ Selesai
                  </div>
                </div>
              </div>

              <div style={{ alignSelf: 'flex-start', backgroundColor: '#1c2d3d', padding: '6px 10px', borderRadius: '6px', fontSize: '8px', color: '#a7f3d0', border: '1px solid #065f46' }}>
                ✓ <i>Status laporan #2312 berhasil diperbarui menjadi: <b>DIPROSES</b> via Telegram Bot oleh Admin @rian_hse</i>
              </div>
            </div>
          </div>
        );

      case 'nenacare-detail-notes':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', height: '100%', overflowY: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #1e293b', paddingBottom: '4px' }}>
              <div style={{ fontSize: '10.5px', fontWeight: 800, color: '#ffffff' }}>Detail Insiden #2311 &amp; Catatan Investigasi Admin</div>
              <span style={{ fontSize: '8px', backgroundColor: '#1e3a8a', color: '#bfdbfe', padding: '2px 6px', borderRadius: '3px', fontWeight: 600 }}>Status: Diproses</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', backgroundColor: '#111827', padding: '6px 10px', borderRadius: '6px', border: '1px solid #1f2937' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '7.5px', color: '#94a3b8' }}>09:15 WIB</div>
                <div style={{ fontSize: '8.5px', color: '#a7f3d0', fontWeight: 700 }}>✓ Menunggu</div>
              </div>
              <span style={{ color: '#4ade80' }}>➔</span>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '7.5px', color: '#94a3b8' }}>09:22 WIB (Telegram)</div>
                <div style={{ fontSize: '8.5px', color: '#60a5fa', fontWeight: 700 }}>● Diproses (Aktif)</div>
              </div>
              <span style={{ color: '#64748b' }}>➔</span>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '7.5px', color: '#64748b' }}>Estimasi 10:00</div>
                <div style={{ fontSize: '8.5px', color: '#64748b' }}>○ Selesai</div>
              </div>
            </div>

            <div style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '6px', padding: '8px', flex: 1, display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <div style={{ fontSize: '9px', fontWeight: 700, color: '#f8fafc', display: 'flex', justifyContent: 'space-between' }}>
                <span>Catatan Lapangan Admin (catatan_admin):</span>
                <span style={{ fontSize: '7.5px', color: '#38bdf8' }}>+ Tambah Catatan</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '8px' }}>
                <div style={{ backgroundColor: '#1e293b', padding: '5px 8px', borderRadius: '4px', color: '#cbd5e1' }}>
                  <b style={{ color: '#38bdf8' }}>Admin Rian (09:25):</b> Teknisi listrik eksternal sudah dipanggil untuk membungkus isolasi kabel kasir bar.
                </div>
                <div style={{ backgroundColor: '#1e293b', padding: '5px 8px', borderRadius: '4px', color: '#cbd5e1' }}>
                  <b style={{ color: '#34d399' }}>Manajer Dimas (09:40):</b> Jalur stopkontak cadangan sudah disiapkan agar operasional POS kasir tidak terhenti.
                </div>
              </div>
            </div>
          </div>
        );

      case 'nenacare-export-pdf':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', height: '100%', overflowY: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #1e293b', paddingBottom: '4px' }}>
              <div style={{ fontSize: '10.5px', fontWeight: 800, color: '#ffffff' }}>Generator Dokumen Laporan K3 — Ekspor PDF (Dompdf)</div>
              <span style={{ fontSize: '8px', backgroundColor: '#065f46', color: '#a7f3d0', padding: '2px 6px', borderRadius: '3px' }}>A4 Landscape</span>
            </div>

            <div style={{ backgroundColor: '#f8fafc', color: '#0f172a', borderRadius: '6px', padding: '10px 14px', flex: 1, border: '1px solid #cbd5e1', display: 'flex', flexDirection: 'column', gap: '6px', fontFamily: 'serif' }}>
              <div style={{ borderBottom: '2px solid #0f172a', paddingBottom: '4px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: '11px', fontWeight: 900, letterSpacing: '0.5px' }}>NENA CAFE — HSE &amp; K3 INCIDENT AUDIT REPORT</div>
                  <div style={{ fontSize: '7.5px', color: '#475569' }}>Laporan Resmi Rekapitulasi Keselamatan &amp; Kesehatan Kerja</div>
                </div>
                <div style={{ fontSize: '7.5px', textAlign: 'right', color: '#475569' }}>
                  Tanggal Cetak: 30 Okt 2024<br />Oleh: Admin HSE (@rian)
                </div>
              </div>

              <div style={{ fontSize: '7.5px', backgroundColor: '#e2e8f0', padding: '3px 6px', borderRadius: '3px' }}>
                <b>Filter Laporan:</b> Status: Semua • Kategori: Semua • Rentang: 01 Okt 2024 - 30 Okt 2024 • Total Data: 24 Insiden
              </div>

              <div style={{ fontSize: '7px', display: 'flex', flexDirection: 'column', gap: '2px', border: '1px solid #94a3b8' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '30px 65px 70px 1fr 50px 45px', backgroundColor: '#cbd5e1', fontWeight: 700, padding: '3px 4px' }}>
                  <span>ID</span><span>Kategori</span><span>Lokasi</span><span>Deskripsi &amp; Rekomendasi AI</span><span>Prioritas</span><span>Status</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '30px 65px 70px 1fr 50px 45px', padding: '3px 4px', borderTop: '1px solid #e2e8f0' }}>
                  <span>#2312</span><span>Api &amp; Gas</span><span>Kitchen</span><span>Bau gas LPG kompor. Matikan regulator.</span><span style={{ color: '#dc2626', fontWeight: 700 }}>Tinggi</span><span>Menunggu</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '30px 65px 70px 1fr 50px 45px', padding: '3px 4px', borderTop: '1px solid #e2e8f0' }}>
                  <span>#2311</span><span>Kelistrikan</span><span>Kasir Bar</span><span>Kabel terkelupas. Bungkus isolasi karet.</span><span>Normal</span><span>Diproses</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '30px 65px 70px 1fr 50px 45px', padding: '3px 4px', borderTop: '1px solid #e2e8f0' }}>
                  <span>#2310</span><span>Lingkungan</span><span>Selasar</span><span>Lantai licin tumpahan air. Pasang wet sign.</span><span>Rendah</span><span style={{ color: '#16a34a', fontWeight: 700 }}>Selesai</span>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div style={{
      width: '100%',
      maxWidth: '100%',
      flex: 1,
      backgroundColor: '#0a0f18',
      borderRadius: '12px',
      border: '1px solid #1e293b',
      boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.05)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      userSelect: 'none',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <div style={{
        height: '32px',
        backgroundColor: '#0f172a',
        borderBottom: '1px solid #1e293b',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 12px',
        fontSize: '11px',
        color: '#94a3b8'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <div style={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: '#ef4444' }}></div>
          <div style={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: '#f59e0b' }}></div>
          <div style={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: '#10b981' }}></div>
          <span style={{ marginLeft: '6px', fontWeight: 800, color: '#f8fafc', letterSpacing: '0.4px' }}>NenaCare K3</span>
          <span style={{ fontSize: '8px', backgroundColor: '#064e3b', color: '#a7f3d0', padding: '1px 6px', borderRadius: '3px', fontWeight: 700 }}>PHP OOP • MySQL</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '9px' }}>
          <span style={{ color: '#c084fc', display: 'flex', alignItems: 'center', gap: '3px' }}>
            <Sparkles size={10} /> Gemini 2.5 Flash-Lite
          </span>
          <span style={{ color: '#38bdf8' }}>● Telegram Bot</span>
          <span style={{ color: '#4ade80' }}>v1.4 Production</span>
        </div>
      </div>

      <div style={{ padding: '10px 12px', backgroundColor: '#0a0f18', minHeight: '340px', display: 'flex', flexDirection: 'column' }}>
        {renderScreen()}
      </div>
    </div>
  );
};


const renderTheoTownMockup = (type) => {
  const renderScreen = () => {
    switch (type) {
      case 'theotown-ingame':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', height: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#0f172a', padding: '6px 12px', borderRadius: '6px', border: '1px solid #1e293b', fontSize: '11px', fontFamily: 'monospace' }}>
              <div style={{ display: 'flex', gap: '12px', color: '#94a3b8' }}>
                <span>🕒 10:30 AM</span>
                <span>📅 Oct 12, 2024</span>
                <span style={{ color: '#38bdf8' }}>👥 Pop: 14,870</span>
              </div>
              <div style={{ display: 'flex', gap: '14px' }}>
                <span style={{ color: '#22c55e', fontWeight: 700 }}>💵 §235,100</span>
                <span style={{ color: '#fbbf24' }}>😊 Happ: 85%</span>
                <span style={{ backgroundColor: '#0284c7', color: '#fff', padding: '1px 6px', borderRadius: '3px', fontSize: '10px' }}>Speed: 1x</span>
              </div>
            </div>

            <div style={{ position: 'relative', height: '240px', backgroundColor: '#14532d', borderRadius: '8px', overflow: 'hidden', border: '2px solid #1e293b', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(22, 163, 74, 0.4) 0%, rgba(20, 83, 45, 0.9) 100%)', opacity: 0.9 }} />
              
              <div style={{ position: 'absolute', width: '140%', height: '36px', backgroundColor: '#334155', transform: 'rotate(-26.5deg) translateY(-40px)', borderTop: '2px dashed #94a3b8', borderBottom: '2px solid #1e293b' }} />
              <div style={{ position: 'absolute', width: '140%', height: '36px', backgroundColor: '#334155', transform: 'rotate(26.5deg) translateY(60px)', borderTop: '2px dashed #94a3b8', borderBottom: '2px solid #1e293b' }} />

              <div style={{ position: 'absolute', width: '180px', height: '110px', backgroundColor: 'rgba(14, 165, 233, 0.25)', border: '2px solid #38bdf8', transform: 'rotateX(60deg) rotateZ(45deg)', borderRadius: '4px', boxShadow: '0 0 25px rgba(56, 189, 248, 0.4)' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gridTemplateRows: 'repeat(5, 1fr)', width: '100%', height: '100%' }}>
                  {Array.from({ length: 25 }).map((_, i) => (
                    <div key={i} style={{ border: '1px solid rgba(56, 189, 248, 0.3)' }} />
                  ))}
                </div>
              </div>

              <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ width: '84px', height: '84px', backgroundColor: 'rgba(15, 23, 42, 0.85)', backdropFilter: 'blur(4px)', border: '2px solid #f59e0b', borderRadius: '12px', padding: '6px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 24px rgba(0,0,0,0.6)' }}>
                  <img src="/icons/theotown.svg" alt="ITB STIKOM" style={{ width: '48px', height: '48px', objectFit: 'contain' }} />
                  <span style={{ fontSize: '9px', fontWeight: 800, color: '#fde047', marginTop: '2px', textAlign: 'center', letterSpacing: '0.3px' }}>ITB STIKOM</span>
                </div>
                <div style={{ marginTop: '6px', backgroundColor: '#0284c7', color: '#ffffff', fontSize: '9.5px', fontWeight: 700, padding: '2px 8px', borderRadius: '12px', border: '1px solid #38bdf8', boxShadow: '0 2px 8px rgba(2, 132, 199, 0.5)' }}>
                  Lot: 5 × 5 Tile Isometric
                </div>
              </div>

              <div style={{ position: 'absolute', bottom: '10px', right: '10px', zIndex: 20, backgroundColor: 'rgba(15, 23, 42, 0.95)', border: '1px solid #38bdf8', borderRadius: '8px', padding: '10px 12px', width: '220px', boxShadow: '0 6px 20px rgba(0,0,0,0.7)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #334155', paddingBottom: '4px', marginBottom: '6px' }}>
                  <span style={{ fontSize: '11px', fontWeight: 800, color: '#f8fafc' }}>🏛️ ITB STIKOM BALI</span>
                  <span style={{ fontSize: '8.5px', backgroundColor: '#0369a1', color: '#e0f2fe', padding: '1px 5px', borderRadius: '3px' }}>LVL 4</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', fontSize: '9.5px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: '#94a3b8' }}>
                    <span>Tipe Bangunan:</span>
                    <span style={{ color: '#38bdf8', fontWeight: 600 }}>education (Univ)</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: '#94a3b8' }}>
                    <span>Kapasitas Mahasiswa:</span>
                    <span style={{ color: '#4ade80', fontWeight: 700 }}>2,410 / 2,500</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: '#94a3b8' }}>
                    <span>Radius Pengaruh:</span>
                    <span style={{ color: '#facc15', fontWeight: 600 }}>700 Tile (Tinggi)</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: '#94a3b8' }}>
                    <span>Biaya Bulanan:</span>
                    <span style={{ color: '#ef4444' }}>-§1,200 / bln</span>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
              <div style={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '6px', padding: '8px', textAlign: 'center' }}>
                <div style={{ fontSize: '10px', color: '#94a3b8' }}>Status Ground</div>
                <div style={{ fontSize: '11px', fontWeight: 700, color: '#4ade80', marginTop: '2px' }}>draw ground: true</div>
              </div>
              <div style={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '6px', padding: '8px', textAlign: 'center' }}>
                <div style={{ fontSize: '10px', color: '#94a3b8' }}>Education Aspect</div>
                <div style={{ fontSize: '11px', fontWeight: 700, color: '#38bdf8', marginTop: '2px' }}>1000 — 2500</div>
              </div>
              <div style={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '6px', padding: '8px', textAlign: 'center' }}>
                <div style={{ fontSize: '10px', color: '#94a3b8' }}>Ukuran Lot</div>
                <div style={{ fontSize: '11px', fontWeight: 700, color: '#f59e0b', marginTop: '2px' }}>5 × 5 Tiles</div>
              </div>
              <div style={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '6px', padding: '8px', textAlign: 'center' }}>
                <div style={{ fontSize: '10px', color: '#94a3b8' }}>Identitas Plugin</div>
                <div style={{ fontSize: '11px', fontWeight: 700, color: '#c084fc', marginTop: '2px' }}>Author: Gekaaaaa</div>
              </div>
            </div>
          </div>
        );

      case 'theotown-pixelart':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', height: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#0f172a', padding: '8px 12px', borderRadius: '6px', border: '1px solid #1e293b' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '14px' }}>🎨</span>
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#f8fafc' }}>StikomBali.png — Isometric Pixel Art Sprite Studio</span>
              </div>
              <span style={{ fontSize: '10px', backgroundColor: '#0369a1', color: '#bae6fd', padding: '2px 8px', borderRadius: '4px', fontWeight: 600 }}>Proyeksi Isometrik 2:1 (26.565°)</span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '10px' }}>
              <div style={{ backgroundColor: '#020617', border: '1px solid #334155', borderRadius: '8px', padding: '12px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                <div style={{ width: '160px', height: '160px', border: '1px solid #475569', borderRadius: '8px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'radial-gradient(circle at 50% 50%, #1e293b 0%, #0f172a 100%)' }}>
                  <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '8px 8px' }} />
                  
                  <img src="/icons/theotown.svg" alt="Pixel Sprite Preview" style={{ width: '100px', height: '100px', objectFit: 'contain', zIndex: 2, imageRendering: 'pixelated' }} />
                </div>
                <div style={{ marginTop: '8px', fontSize: '10px', color: '#94a3b8', textAlign: 'center' }}>
                  Resolusi Frame Asli: <b>160 × 160 px</b> • 32-bit RGBA Alpha
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '6px', padding: '10px' }}>
                  <div style={{ fontSize: '11px', fontWeight: 700, color: '#f59e0b', marginBottom: '4px' }}>🏛️ Atap Bertingkat Khas Bali (Meru Tumpang)</div>
                  <div style={{ fontSize: '10px', color: '#cbd5e1', lineHeight: '1.4' }}>
                    Struktur atap tradisional berlapis yang mencerminkan identitas arsitektur kampus ITB STIKOM Bali Renon, disesuaikan dengan kemiringan atap 2.5D.
                  </div>
                </div>

                <div style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '6px', padding: '10px' }}>
                  <div style={{ fontSize: '11px', fontWeight: 700, color: '#38bdf8', marginBottom: '4px' }}>⛩️ Gerbang Candi Bentar &amp; Fasad Bata Merah</div>
                  <div style={{ fontSize: '10px', color: '#cbd5e1', lineHeight: '1.4' }}>
                    Detail gerbang masuk terbelah khas Bali dengan tekstur bata merah terakota dan jendela kaca perkuliahan yang modern.
                  </div>
                </div>

                <div style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '6px', padding: '10px' }}>
                  <div style={{ fontSize: '10px', color: '#94a3b8', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Palet Warna Terkurasi:</div>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    {[
                      { name: 'Terracotta', color: '#c2410c' },
                      { name: 'Bali Gold', color: '#f59e0b' },
                      { name: 'Sandstone', color: '#fef3c7' },
                      { name: 'Sky Cyan', color: '#0284c7' },
                      { name: 'Tropical Green', color: '#15803d' },
                    ].map((p, idx) => (
                      <div key={idx} style={{ flex: 1, textAlign: 'center' }}>
                        <div style={{ height: '18px', backgroundColor: p.color, borderRadius: '3px', border: '1px solid rgba(255,255,255,0.2)' }} />
                        <div style={{ fontSize: '8px', color: '#94a3b8', marginTop: '2px' }}>{p.name}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'theotown-config-json':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', height: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#0f172a', padding: '8px 12px', borderRadius: '6px', border: '1px solid #1e293b' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '13px', color: '#38bdf8' }}>📄</span>
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#f8fafc' }}>code.json — Engine Plugin Object Specification</span>
              </div>
              <span style={{ fontSize: '10px', color: '#4ade80', backgroundColor: '#064e3b', padding: '2px 8px', borderRadius: '4px', fontWeight: 600 }}>JSON Schema Validated</span>
            </div>

            <div style={{ backgroundColor: '#020617', border: '1px solid #334155', borderRadius: '8px', padding: '12px', fontFamily: 'Consolas, monospace', fontSize: '11px', color: '#e2e8f0', lineHeight: '1.5', overflowX: 'auto' }}>
              <div><span style={{ color: '#94a3b8' }}>[</span></div>
              <div style={{ paddingLeft: '16px' }}><span style={{ color: '#94a3b8' }}>{'{'}</span></div>
              <div style={{ paddingLeft: '32px' }}>
                <span style={{ color: '#7dd3fc' }}>"id"</span>: <span style={{ color: '#fde047' }}>"$stikom_bali_renon_01"</span>,
              </div>
              <div style={{ paddingLeft: '32px' }}>
                <span style={{ color: '#7dd3fc' }}>"type"</span>: <span style={{ color: '#4ade80' }}>"education"</span>,
              </div>
              <div style={{ paddingLeft: '32px' }}>
                <span style={{ color: '#7dd3fc' }}>"author"</span>: <span style={{ color: '#fde047' }}>"Gekaaaaa"</span>,
              </div>
              <div style={{ paddingLeft: '32px' }}>
                <span style={{ color: '#7dd3fc' }}>"width"</span>: <span style={{ color: '#fb923c' }}>5</span>,
              </div>
              <div style={{ paddingLeft: '32px' }}>
                <span style={{ color: '#7dd3fc' }}>"height"</span>: <span style={{ color: '#fb923c' }}>5</span>,
              </div>
              <div style={{ paddingLeft: '32px' }}>
                <span style={{ color: '#7dd3fc' }}>"frames"</span>: <span style={{ color: '#94a3b8' }}>[</span>{'{'} <span style={{ color: '#7dd3fc' }}>"bmp"</span>: <span style={{ color: '#fde047' }}>"StikomBali.png"</span> {'}'}<span style={{ color: '#94a3b8' }}>]</span>,
              </div>
              <div style={{ paddingLeft: '32px' }}>
                <span style={{ color: '#7dd3fc' }}>"draw ground"</span>: <span style={{ color: '#c084fc' }}>true</span>,
              </div>
              <div style={{ paddingLeft: '32px' }}>
                <span style={{ color: '#7dd3fc' }}>"education influence low"</span>: <span style={{ color: '#fb923c' }}>700</span>,
              </div>
              <div style={{ paddingLeft: '32px' }}>
                <span style={{ color: '#7dd3fc' }}>"education influence high"</span>: <span style={{ color: '#fb923c' }}>700</span>,
              </div>
              <div style={{ paddingLeft: '32px' }}>
                <span style={{ color: '#7dd3fc' }}>"education aspect low"</span>: <span style={{ color: '#fb923c' }}>1000</span>,
              </div>
              <div style={{ paddingLeft: '32px' }}>
                <span style={{ color: '#7dd3fc' }}>"education aspect high"</span>: <span style={{ color: '#fb923c' }}>2500</span>,
              </div>
              <div style={{ paddingLeft: '32px' }}>
                <span style={{ color: '#7dd3fc' }}>"education capacity low"</span>: <span style={{ color: '#fb923c' }}>2500</span>,
              </div>
              <div style={{ paddingLeft: '32px' }}>
                <span style={{ color: '#7dd3fc' }}>"education capacity high"</span>: <span style={{ color: '#fb923c' }}>2500</span>
              </div>
              <div style={{ paddingLeft: '16px' }}><span style={{ color: '#94a3b8' }}>{'}'}</span></div>
              <div><span style={{ color: '#94a3b8' }}>]</span></div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', fontSize: '9.5px' }}>
              <div style={{ backgroundColor: '#0f172a', padding: '8px', borderRadius: '6px', border: '1px solid #1e293b' }}>
                <span style={{ color: '#38bdf8', fontWeight: 700 }}>type: education</span>
                <p style={{ color: '#94a3b8', margin: '3px 0 0 0' }}>Diintegrasikan langsung ke sistem sekolah/kampus game, bukan sekadar dekorasi pasif.</p>
              </div>
              <div style={{ backgroundColor: '#0f172a', padding: '8px', borderRadius: '6px', border: '1px solid #1e293b' }}>
                <span style={{ color: '#4ade80', fontWeight: 700 }}>influence: 700</span>
                <p style={{ color: '#94a3b8', margin: '3px 0 0 0' }}>Jangkauan radius pendidikan luas yang mencakup seluruh distrik perumahan kota.</p>
              </div>
              <div style={{ backgroundColor: '#0f172a', padding: '8px', borderRadius: '6px', border: '1px solid #1e293b' }}>
                <span style={{ color: '#c084fc', fontWeight: 700 }}>draw ground: true</span>
                <p style={{ color: '#94a3b8', margin: '3px 0 0 0' }}>Memastikan tekstur tanah (rumput/paving) menyatu alami dengan map TheoTown.</p>
              </div>
            </div>
          </div>
        );

      case 'theotown-manifest':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', height: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#0f172a', padding: '8px 12px', borderRadius: '6px', border: '1px solid #1e293b' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '13px', color: '#c084fc' }}>🏷️</span>
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#f8fafc' }}>plugin.manifest — Metadata Mod Resmi TheoTown</span>
              </div>
              <span style={{ fontSize: '10px', color: '#38bdf8', backgroundColor: '#0c4a6e', padding: '2px 8px', borderRadius: '4px', fontWeight: 600 }}>TheoTown Plugin Manager Compatible</span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '10px' }}>
              <div style={{ backgroundColor: '#020617', border: '1px solid #334155', borderRadius: '8px', padding: '14px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #1e293b', paddingBottom: '8px' }}>
                  <span style={{ fontSize: '11px', color: '#94a3b8' }}>Plugin Title:</span>
                  <span style={{ fontSize: '12px', fontWeight: 800, color: '#fde047' }}>ITB STIKOM BALI</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #1e293b', paddingBottom: '8px' }}>
                  <span style={{ fontSize: '11px', color: '#94a3b8' }}>Author:</span>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: '#38bdf8' }}>Gekaaaaa</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #1e293b', paddingBottom: '8px' }}>
                  <span style={{ fontSize: '11px', color: '#94a3b8' }}>Version:</span>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: '#4ade80' }}>1.0.0</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <span style={{ fontSize: '11px', color: '#94a3b8' }}>Description:</span>
                  <span style={{ fontSize: '11px', color: '#e2e8f0', backgroundColor: '#0f172a', padding: '8px 10px', borderRadius: '4px', border: '1px solid #1e293b' }}>
                    Plugin Gedung Stikom Bali Renon — Menambahkan bangunan edukasi kampus ITB STIKOM Bali ke dalam game TheoTown.
                  </span>
                </div>
              </div>

              <div style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px', padding: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ fontSize: '11px', fontWeight: 700, color: '#cbd5e1', borderBottom: '1px solid #334155', paddingBottom: '4px' }}>
                  📦 Struktur Berkas Plugin:
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', fontSize: '10px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#4ade80' }}>
                    <span>✓</span>
                    <span style={{ color: '#e2e8f0' }}>plugin.manifest</span>
                    <span style={{ color: '#64748b', fontSize: '9px' }}>(Metadata info)</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#4ade80' }}>
                    <span>✓</span>
                    <span style={{ color: '#e2e8f0' }}>code.json</span>
                    <span style={{ color: '#64748b', fontSize: '9px' }}>(Parameter 5x5 education)</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#4ade80' }}>
                    <span>✓</span>
                    <span style={{ color: '#e2e8f0' }}>StikomBali.png</span>
                    <span style={{ color: '#64748b', fontSize: '9px' }}>(Sprite pixel art)</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#4ade80' }}>
                    <span>✓</span>
                    <span style={{ color: '#e2e8f0' }}>preview.png</span>
                    <span style={{ color: '#64748b', fontSize: '9px' }}>(Screenshot game)</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#4ade80' }}>
                    <span>✓</span>
                    <span style={{ color: '#e2e8f0' }}>README.md</span>
                    <span style={{ color: '#64748b', fontSize: '9px' }}>(Panduan bilingual ID/EN)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'theotown-education-stats':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', height: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#0f172a', padding: '8px 12px', borderRadius: '6px', border: '1px solid #1e293b' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '13px', color: '#4ade80' }}>📊</span>
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#f8fafc' }}>Simulasi Dampak Edukasi &amp; Ekosistem Perkotaan</span>
              </div>
              <span style={{ fontSize: '10px', color: '#fde047', backgroundColor: '#713f12', padding: '2px 8px', borderRadius: '4px', fontWeight: 600 }}>In-Game City Stats</span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
              <div style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px', padding: '12px', textAlign: 'center' }}>
                <div style={{ fontSize: '10px', color: '#94a3b8' }}>Tingkat Okupansi Kampus</div>
                <div style={{ fontSize: '18px', fontWeight: 800, color: '#4ade80', margin: '4px 0' }}>96.4%</div>
                <div style={{ fontSize: '9.5px', color: '#cbd5e1' }}>2.410 / 2.500 Mahasiswa</div>
              </div>

              <div style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px', padding: '12px', textAlign: 'center' }}>
                <div style={{ fontSize: '10px', color: '#94a3b8' }}>Radius Cakupan Kota</div>
                <div style={{ fontSize: '18px', fontWeight: 800, color: '#38bdf8', margin: '4px 0' }}>700 Tile</div>
                <div style={{ fontSize: '9.5px', color: '#cbd5e1' }}>Melayani 8 Zona Residensial</div>
              </div>

              <div style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px', padding: '12px', textAlign: 'center' }}>
                <div style={{ fontSize: '10px', color: '#94a3b8' }}>Peningkatan Literasi Kota</div>
                <div style={{ fontSize: '18px', fontWeight: 800, color: '#f59e0b', margin: '4px 0' }}>+24.8%</div>
                <div style={{ fontSize: '9.5px', color: '#cbd5e1' }}>Education Index: 88/100</div>
              </div>
            </div>

            <div style={{ backgroundColor: '#020617', border: '1px solid #334155', borderRadius: '8px', padding: '12px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div style={{ fontSize: '10.5px', fontWeight: 700, color: '#e2e8f0', marginBottom: '2px' }}>Dampak Nyata terhadap Gameplay Simulasi:</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '9.5px', padding: '4px 8px', backgroundColor: '#0f172a', borderRadius: '4px' }}>
                <span style={{ color: '#94a3b8' }}>Kepuasan Warga Sekitar (Happiness):</span>
                <span style={{ color: '#4ade80', fontWeight: 700 }}>+12% Kepuasan Penduduk</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '9.5px', padding: '4px 8px', backgroundColor: '#0f172a', borderRadius: '4px' }}>
                <span style={{ color: '#94a3b8' }}>Pertumbuhan Zona Komersial (Kafe &amp; Fotokopi):</span>
                <span style={{ color: '#38bdf8', fontWeight: 700 }}>+§14,500 Pajak Komersial Sekitar</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '9.5px', padding: '4px 8px', backgroundColor: '#0f172a', borderRadius: '4px' }}>
                <span style={{ color: '#94a3b8' }}>Nilai Tanah Properti Sekitar (Land Value):</span>
                <span style={{ color: '#facc15', fontWeight: 700 }}>Meningkat ke Tier High-Class</span>
              </div>
            </div>
          </div>
        );

      case 'theotown-install-guide':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', height: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#0f172a', padding: '8px 12px', borderRadius: '6px', border: '1px solid #1e293b' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '13px', color: '#38bdf8' }}>📥</span>
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#f8fafc' }}>Panduan Instalasi Multiplatform &amp; Dokumentasi Bilingual</span>
              </div>
              <span style={{ fontSize: '10px', color: '#4ade80', backgroundColor: '#064e3b', padding: '2px 8px', borderRadius: '4px', fontWeight: 600 }}>Android &amp; PC Ready</span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              <div style={{ backgroundColor: '#020617', border: '1px solid #334155', borderRadius: '8px', padding: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', fontWeight: 800, color: '#4ade80' }}>
                  <span>📱</span>
                  <span>Instalasi di Android (Mobile)</span>
                </div>
                <div style={{ backgroundColor: '#0f172a', padding: '8px', borderRadius: '4px', fontSize: '9px', fontFamily: 'monospace', color: '#94a3b8', wordBreak: 'break-all', border: '1px solid #1e293b' }}>
                  Android/data/info.flowersoft.theotown.theotown/files/plugins/ITB_STIKOM_Bali/
                </div>
                <div style={{ fontSize: '9.5px', color: '#cbd5e1', lineHeight: '1.4' }}>
                  1. Salin folder plugin ke direktori data TheoTown.<br />
                  2. Buka aplikasi TheoTown di smartphone.<br />
                  3. Buka menu <b>Pendidikan</b> &amp; tempatkan gedung.
                </div>
              </div>

              <div style={{ backgroundColor: '#020617', border: '1px solid #334155', borderRadius: '8px', padding: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', fontWeight: 800, color: '#38bdf8' }}>
                  <span>💻</span>
                  <span>Instalasi di PC Windows (Steam/Standalone)</span>
                </div>
                <div style={{ backgroundColor: '#0f172a', padding: '8px', borderRadius: '4px', fontSize: '9px', fontFamily: 'monospace', color: '#94a3b8', wordBreak: 'break-all', border: '1px solid #1e293b' }}>
                  C:/Users/[Username]/TheoTown/plugins/ITB_STIKOM_Bali/
                </div>
                <div style={{ fontSize: '9.5px', color: '#cbd5e1', lineHeight: '1.4' }}>
                  1. Ekstrak folder plugin ke direktori plugins PC.<br />
                  2. Jalankan TheoTown via Steam atau desktop.<br />
                  3. Mod langsung aktif tanpa perlu restart game.
                </div>
              </div>
            </div>

            <div style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '6px', padding: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '14px' }}>🌐</span>
                <span style={{ fontSize: '10.5px', color: '#e2e8f0' }}>Dokumentasi README tersedia dalam <b>Bahasa Indonesia</b> &amp; <b>English</b></span>
              </div>
              <span style={{ fontSize: '9.5px', color: '#38bdf8', fontWeight: 700 }}>README.md Terverifikasi</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div style={{
      width: '100%',
      minHeight: '410px',
      backgroundColor: '#050a14',
      borderRadius: '8px',
      border: '1px solid #1e293b',
      boxShadow: '0 12px 36px rgba(0, 0, 0, 0.6)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <div style={{
        height: '38px',
        backgroundColor: '#0c1424',
        borderBottom: '1px solid #1e293b',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 12px',
        userSelect: 'none'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#0284c7' }} />
          <span style={{ fontSize: '12px', fontWeight: 800, color: '#f8fafc', letterSpacing: '0.4px' }}>
            ITB STIKOM Bali — TheoTown Plugin Studio
          </span>
          <span style={{ fontSize: '9.5px', backgroundColor: '#0369a1', color: '#e0f2fe', padding: '1px 6px', borderRadius: '4px', fontWeight: 600 }}>
            Isometric Mod
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '10px' }}>
          <span style={{ color: '#4ade80' }}>● Plugin Active</span>
          <span style={{ color: '#f59e0b' }}>v1.0.0</span>
        </div>
      </div>

      <div style={{ padding: '10px 12px', backgroundColor: '#060c18', minHeight: '340px', display: 'flex', flexDirection: 'column' }}>
        {renderScreen()}
      </div>
    </div>
  );
};



const renderLintasMockup = (type) => {
  const renderScreen = () => {
    switch (type) {
      case 'lintas-companion':
      case 'lintas-dash':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', height: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#0f172a', padding: '6px 12px', borderRadius: '6px', border: '1px solid #1e293b', fontSize: '11px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#22c55e', boxShadow: '0 0 8px #22c55e' }} />
                <span style={{ fontWeight: 700, color: '#f8fafc' }}>Local Server Active • Port 8945 (HTTP &amp; WS)</span>
                <span style={{ color: '#38bdf8', fontFamily: 'monospace' }}>192.168.1.12</span>
              </div>
              <div style={{ display: 'flex', gap: '8px', fontSize: '10px' }}>
                <span style={{ backgroundColor: '#0c4a6e', color: '#38bdf8', padding: '2px 8px', borderRadius: '4px' }}>Clients: 1 Connected</span>
                <span style={{ backgroundColor: '#064e3b', color: '#4ade80', padding: '2px 8px', borderRadius: '4px' }}>NearLock: ARMED</span>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr 1.1fr', gap: '10px' }}>
              <div style={{ backgroundColor: '#020617', border: '1px solid #334155', borderRadius: '8px', padding: '12px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <div style={{ fontSize: '10.5px', fontWeight: 700, color: '#f8fafc', marginBottom: '6px' }}>Scan to Pair (Android)</div>
                <div style={{ width: '110px', height: '110px', backgroundColor: '#ffffff', borderRadius: '6px', padding: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.5)' }}>
                  <div style={{ width: '100%', height: '100%', border: '2px solid #0f172a', display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gridTemplateRows: 'repeat(5, 1fr)', gap: '2px', padding: '2px' }}>
                    {Array.from({ length: 25 }).map((_, i) => (
                      <div key={i} style={{ backgroundColor: (i % 2 === 0 || i % 7 === 0 || i === 0 || i === 4 || i === 20 || i === 24) ? '#0f172a' : 'transparent', borderRadius: '1px' }} />
                    ))}
                  </div>
                </div>
                <div style={{ marginTop: '8px', fontSize: '9px', color: '#94a3b8' }}>
                  Expires in: <b style={{ color: '#f59e0b' }}>14m 52s</b> • Nonce: <span style={{ fontFamily: 'monospace' }}>x7f9a2</span>
                </div>
                <div style={{ fontSize: '8.5px', color: '#64748b', marginTop: '2px' }}>Auto-Discovery broadcast running</div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '6px', padding: '10px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                    <span style={{ fontSize: '11px', fontWeight: 700, color: '#f8fafc' }}>📱 Oppo A53 (Android 13)</span>
                    <span style={{ fontSize: '9px', backgroundColor: '#14532d', color: '#86efac', padding: '1px 6px', borderRadius: '3px', fontWeight: 600 }}>TRUSTED</span>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px', fontSize: '9px', color: '#94a3b8' }}>
                    <div>IP: <span style={{ color: '#cbd5e1' }}>192.168.1.18</span></div>
                    <div>Latensi: <span style={{ color: '#4ade80', fontWeight: 700 }}>4 ms (Wi-Fi)</span></div>
                    <div>WebSocket: <span style={{ color: '#38bdf8' }}>ESTABLISHED</span></div>
                    <div>Win32 Input: <span style={{ color: '#facc15' }}>Ready (SendInput)</span></div>
                  </div>
                </div>

                <div style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '6px', padding: '10px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                    <span style={{ fontSize: '10.5px', fontWeight: 700, color: '#38bdf8' }}>🛡️ NearLock Proximity Status</span>
                    <span style={{ fontSize: '9px', color: '#4ade80', fontWeight: 700 }}>🟢 DEKAT (~1.2m)</span>
                  </div>
                  <div style={{ width: '100%', height: '6px', backgroundColor: '#1e293b', borderRadius: '3px', overflow: 'hidden', margin: '4px 0' }}>
                    <div style={{ width: '85%', height: '100%', backgroundColor: '#22c55e', borderRadius: '3px' }} />
                  </div>
                  <div style={{ fontSize: '8.5px', color: '#94a3b8' }}>
                    Sinyal: <b>-42 dBm</b> • Grace Period: <b>15 detik</b> • Auto-lock: <b>Aktif</b>
                  </div>
                </div>
              </div>

              <div style={{ backgroundColor: '#020617', border: '2px dashed #0284c7', borderRadius: '8px', padding: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                <span style={{ fontSize: '20px' }}>📥</span>
                <span style={{ fontSize: '10.5px', fontWeight: 700, color: '#f8fafc', marginTop: '4px' }}>Lintas Drop Zone</span>
                <span style={{ fontSize: '9px', color: '#94a3b8', margin: '2px 0 6px 0' }}>Tarik berkas PC ke sini untuk kirim instan ke smartphone</span>
                <button style={{ backgroundColor: '#0284c7', color: '#ffffff', border: 'none', padding: '4px 10px', borderRadius: '4px', fontSize: '9px', fontWeight: 600, cursor: 'pointer' }}>
                  Pilih Berkas PC
                </button>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '6px', fontSize: '9.5px', textAlign: 'center' }}>
              <div style={{ backgroundColor: '#0f172a', padding: '6px', borderRadius: '4px', border: '1px solid #1e293b', color: '#cbd5e1' }}>
                🖱️ Touchpad Latency: <b>&lt; 5ms</b>
              </div>
              <div style={{ backgroundColor: '#0f172a', padding: '6px', borderRadius: '4px', border: '1px solid #1e293b', color: '#cbd5e1' }}>
                📋 Clipboard: <b>Bidirectional Sync</b>
              </div>
              <div style={{ backgroundColor: '#0f172a', padding: '6px', borderRadius: '4px', border: '1px solid #1e293b', color: '#cbd5e1' }}>
                🔐 File Hash: <b>SHA-256 Validated</b>
              </div>
              <div style={{ backgroundColor: '#0f172a', padding: '6px', borderRadius: '4px', border: '1px solid #1e293b', color: '#cbd5e1' }}>
                🌐 Zero-Cloud: <b>Subnet LAN Only</b>
              </div>
            </div>
          </div>
        );

      case 'lintas-touchpad':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', height: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#0f172a', padding: '6px 12px', borderRadius: '6px', border: '1px solid #1e293b' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ fontSize: '12px' }}>📱</span>
                <span style={{ fontSize: '11px', fontWeight: 700, color: '#f8fafc' }}>Remote Touchpad &amp; Keyboard</span>
              </div>
              <span style={{ fontSize: '9.5px', color: '#4ade80', backgroundColor: '#064e3b', padding: '1px 6px', borderRadius: '3px' }}>Connected (3ms)</span>
            </div>

            <div style={{ height: '180px', backgroundColor: '#020617', border: '1px solid #334155', borderRadius: '8px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', cursor: 'crosshair' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', border: '2px dashed #38bdf8', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#38bdf8', opacity: 0.6 }}>
                👆
              </div>
              <span style={{ fontSize: '10.5px', color: '#cbd5e1', fontWeight: 600, marginTop: '8px' }}>Area Sentuh Trackpad Nirkabel</span>
              <div style={{ display: 'flex', gap: '12px', marginTop: '6px', fontSize: '9px', color: '#64748b' }}>
                <span>1 Jari: Klik Kiri</span>
                <span>•</span>
                <span>2 Jari: Klik Kanan / Scroll</span>
                <span>•</span>
                <span>Tahan: Drag</span>
              </div>

              <div style={{ position: 'absolute', bottom: '6px', width: '92%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
                <div style={{ backgroundColor: '#1e293b', border: '1px solid #334155', padding: '6px', borderRadius: '4px', textAlign: 'center', fontSize: '9.5px', color: '#e2e8f0', fontWeight: 700 }}>
                  KLIK KIRI
                </div>
                <div style={{ backgroundColor: '#1e293b', border: '1px solid #334155', padding: '6px', borderRadius: '4px', textAlign: 'center', fontSize: '9.5px', color: '#e2e8f0', fontWeight: 700 }}>
                  KLIK KANAN
                </div>
              </div>
            </div>

            <div style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '6px', padding: '8px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div style={{ fontSize: '9.5px', color: '#94a3b8', display: 'flex', justifyContent: 'space-between' }}>
                <span>Tombol Pintas Modifier Windows:</span>
                <span style={{ color: '#38bdf8' }}>Native SendInput API</span>
              </div>
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                {['Ctrl', 'Alt', 'Shift', 'Win Key', 'Tab', 'Esc', 'Enter', 'Backspace', 'Space'].map((k, idx) => (
                  <div key={idx} style={{ backgroundColor: '#1e293b', border: '1px solid #475569', color: '#f8fafc', padding: '4px 10px', borderRadius: '4px', fontSize: '9.5px', fontWeight: 600, cursor: 'pointer' }}>
                    {k}
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'lintas-drop':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', height: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#0f172a', padding: '8px 12px', borderRadius: '6px', border: '1px solid #1e293b' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '14px' }}>⚡</span>
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#f8fafc' }}>Instant Drop — Transfer File Berkecepatan Tinggi (LAN)</span>
              </div>
              <span style={{ fontSize: '10px', color: '#38bdf8', backgroundColor: '#0c4a6e', padding: '2px 8px', borderRadius: '4px', fontWeight: 600 }}>Kecepatan: 28.4 MB/s</span>
            </div>

            <div style={{ backgroundColor: '#020617', border: '1px solid #334155', borderRadius: '8px', padding: '14px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '36px', height: '36px', backgroundColor: '#1e293b', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px' }}>
                    🎬
                  </div>
                  <div>
                    <div style={{ fontSize: '11.5px', fontWeight: 700, color: '#f8fafc' }}>Recording_Project_Demo.mp4</div>
                    <div style={{ fontSize: '9.5px', color: '#94a3b8' }}>148.5 MB • Mengirim: <b>Android ➔ Windows PC</b></div>
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '14px', fontWeight: 800, color: '#38bdf8' }}>78%</div>
                  <div style={{ fontSize: '9px', color: '#4ade80' }}>Sisa waktu: ~1.1 detik</div>
                </div>
              </div>

              <div style={{ width: '100%', height: '8px', backgroundColor: '#1e293b', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{ width: '78%', height: '100%', backgroundColor: '#0284c7', borderRadius: '4px' }} />
              </div>

              <div style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '6px', padding: '10px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '10px', fontWeight: 700, color: '#facc15' }}>🔒 Verifikasi Integritas SHA-256:</span>
                  <span style={{ fontSize: '9px', color: '#4ade80', fontWeight: 700 }}>✓ MATCHED &amp; VERIFIED</span>
                </div>
                <div style={{ fontSize: '9px', fontFamily: 'monospace', color: '#94a3b8', wordBreak: 'break-all', backgroundColor: '#020617', padding: '4px 6px', borderRadius: '3px' }}>
                  Source: 8f4e2b19a0d876c1...9c2e4f71a0b3
                </div>
                <div style={{ fontSize: '9px', fontFamily: 'monospace', color: '#4ade80', wordBreak: 'break-all', backgroundColor: '#020617', padding: '4px 6px', borderRadius: '3px' }}>
                  Dest  : 8f4e2b19a0d876c1...9c2e4f71a0b3
                </div>
                <div style={{ fontSize: '8.5px', color: '#64748b' }}>
                  Checksum dihitung otomatis sebelum dan sesudah transmisi untuk menjamin data tidak rusak.
                </div>
              </div>
            </div>
          </div>
        );

      case 'lintas-clipboard':
      case 'lintas-sync':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', height: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#0f172a', padding: '8px 12px', borderRadius: '6px', border: '1px solid #1e293b' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '13px' }}>📋</span>
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#f8fafc' }}>Universal Clipboard — Sinkronisasi Teks &amp; Deteksi URL</span>
              </div>
              <span style={{ fontSize: '10px', color: '#4ade80', backgroundColor: '#064e3b', padding: '2px 8px', borderRadius: '4px', fontWeight: 600 }}>Auto-Sync ON</span>
            </div>

            <div style={{ backgroundColor: '#020617', border: '1px solid #334155', borderRadius: '8px', padding: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '10px', color: '#94a3b8' }}>Clipboard Aktif (Tersinkronisasi ke Windows &amp; Android):</span>
                <span style={{ fontSize: '9px', color: '#38bdf8', backgroundColor: '#0c4a6e', padding: '1px 6px', borderRadius: '3px' }}>Baru saja</span>
              </div>
              <div style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', padding: '10px', borderRadius: '6px', fontSize: '11px', color: '#f8fafc', fontFamily: 'monospace' }}>
                https://github.com/agungkrisna/lintas-cross-device
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '9px', color: '#4ade80', fontWeight: 600 }}>🌐 Tautan Web Terdeteksi (Bisa langsung dibuka di Chrome PC)</span>
                <button style={{ backgroundColor: '#0284c7', color: '#fff', border: 'none', padding: '3px 8px', borderRadius: '3px', fontSize: '9px', cursor: 'pointer' }}>
                  Buka di PC
                </button>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div style={{ fontSize: '10px', color: '#94a3b8', fontWeight: 700 }}>Riwayat Clipboard Terakhir:</div>
              <div style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '4px', padding: '6px 10px', fontSize: '9.5px', color: '#cbd5e1', display: 'flex', justifyContent: 'space-between' }}>
                <span>Token OTP verifikasi: <b>892401</b></span>
                <span style={{ color: '#64748b', fontSize: '8.5px' }}>Dari Android • 2 menit lalu</span>
              </div>
              <div style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '4px', padding: '6px 10px', fontSize: '9.5px', color: '#cbd5e1', display: 'flex', justifyContent: 'space-between' }}>
                <span>Snippet JSON konfigurasi WebSocket port 8945</span>
                <span style={{ color: '#64748b', fontSize: '8.5px' }}>Dari Windows PC • 5 menit lalu</span>
              </div>
            </div>
          </div>
        );

      case 'lintas-nearlock':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', height: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#0f172a', padding: '8px 12px', borderRadius: '6px', border: '1px solid #1e293b' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '14px' }}>🛡️</span>
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#f8fafc' }}>NearLock — Penguncian PC Otomatis Berdasarkan Jarak Ponsel</span>
              </div>
              <span style={{ fontSize: '10px', color: '#4ade80', backgroundColor: '#064e3b', padding: '2px 8px', borderRadius: '4px', fontWeight: 600 }}>Status: ARMED</span>
            </div>

            <div style={{ backgroundColor: '#020617', border: '1px solid #334155', borderRadius: '8px', padding: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <div style={{ fontSize: '11px', color: '#94a3b8', marginBottom: '8px' }}>Jarak Smartphone ke Komputer Windows:</div>
              <div style={{ fontSize: '24px', fontWeight: 800, color: '#4ade80', letterSpacing: '0.5px' }}>~1.2 Meter</div>
              <div style={{ fontSize: '10px', color: '#38bdf8', marginTop: '2px' }}>Ponsel Terdeteksi Dekat (Sinyal Wi-Fi: -42 dBm)</div>

              <div style={{ width: '100%', maxWidth: '380px', margin: '14px 0 6px 0' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '4px' }}>
                  <div style={{ height: '8px', backgroundColor: '#22c55e', borderRadius: '2px' }} title="Dekat" />
                  <div style={{ height: '8px', backgroundColor: '#1e293b', borderRadius: '2px' }} title="Sinyal Melemah" />
                  <div style={{ height: '8px', backgroundColor: '#1e293b', borderRadius: '2px' }} title="Menjauh" />
                  <div style={{ height: '8px', backgroundColor: '#1e293b', borderRadius: '2px' }} title="Grace Period" />
                  <div style={{ height: '8px', backgroundColor: '#1e293b', borderRadius: '2px' }} title="Terkunci" />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '8px', color: '#64748b', marginTop: '4px' }}>
                  <span style={{ color: '#4ade80', fontWeight: 700 }}>Dekat</span>
                  <span>Melemah</span>
                  <span>Menjauh</span>
                  <span>Grace Period</span>
                  <span style={{ color: '#ef4444' }}>Kunci PC</span>
                </div>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', fontSize: '9.5px' }}>
              <div style={{ backgroundColor: '#0f172a', padding: '8px 10px', borderRadius: '6px', border: '1px solid #1e293b' }}>
                <span style={{ color: '#facc15', fontWeight: 700 }}>Grace Period: 15 Detik</span>
                <p style={{ color: '#94a3b8', margin: '3px 0 0 0' }}>Jeda waktu verifikasi ulang sebelum Windows LockWorkStation dieksekusi.</p>
              </div>
              <div style={{ backgroundColor: '#0f172a', padding: '8px 10px', borderRadius: '6px', border: '1px solid #1e293b' }}>
                <span style={{ color: '#38bdf8', fontWeight: 700 }}>Action: Win32 Lock</span>
                <p style={{ color: '#94a3b8', margin: '3px 0 0 0' }}>Mengunci sesi Windows secara native tanpa mematikan aplikasi yang berjalan.</p>
              </div>
            </div>
          </div>
        );

      case 'lintas-presentation':
      case 'lintas-media':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', height: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#0f172a', padding: '8px 12px', borderRadius: '6px', border: '1px solid #1e293b' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '13px' }}>📽️</span>
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#f8fafc' }}>Presentation Remote &amp; Speaker Timer</span>
              </div>
              <span style={{ fontSize: '10px', color: '#facc15', backgroundColor: '#713f12', padding: '2px 8px', borderRadius: '4px', fontWeight: 600 }}>Slide 14 / 28</span>
            </div>

            <div style={{ backgroundColor: '#020617', border: '1px solid #334155', borderRadius: '8px', padding: '14px', textAlign: 'center' }}>
              <div style={{ fontSize: '10px', color: '#94a3b8' }}>DURASI PRESENTASI BERJALAN:</div>
              <div style={{ fontSize: '26px', fontWeight: 800, color: '#f8fafc', fontFamily: 'monospace', margin: '4px 0' }}>12:45 <span style={{ fontSize: '14px', color: '#64748b' }}>/ 20:00</span></div>
              <div style={{ fontSize: '9.5px', color: '#4ade80' }}>● Kecepatan Ideal (On Pace)</div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginTop: '14px' }}>
                <button style={{ backgroundColor: '#1e293b', border: '1px solid #475569', color: '#ffffff', padding: '14px', borderRadius: '6px', fontSize: '12px', fontWeight: 700, cursor: 'pointer' }}>
                  ◀ Slide Sebelumnya
                </button>
                <button style={{ backgroundColor: '#0284c7', border: '1px solid #38bdf8', color: '#ffffff', padding: '14px', borderRadius: '6px', fontSize: '12px', fontWeight: 800, cursor: 'pointer' }}>
                  Slide Berikutnya ▶
                </button>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
              <button style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', color: '#e2e8f0', padding: '8px', borderRadius: '4px', fontSize: '9.5px', fontWeight: 600, cursor: 'pointer' }}>
                ▶️ Mulai Show (F5)
              </button>
              <button style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', color: '#e2e8f0', padding: '8px', borderRadius: '4px', fontSize: '9.5px', fontWeight: 600, cursor: 'pointer' }}>
                ⬛ Layar Hitam (B)
              </button>
              <button style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', color: '#ef4444', padding: '8px', borderRadius: '4px', fontSize: '9.5px', fontWeight: 600, cursor: 'pointer' }}>
                ⏹️ Keluar (Esc)
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div style={{
      width: '100%',
      minHeight: '410px',
      backgroundColor: '#050a14',
      borderRadius: '8px',
      border: '1px solid #1e293b',
      boxShadow: '0 12px 36px rgba(0, 0, 0, 0.6)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <div style={{
        height: '38px',
        backgroundColor: '#0c1424',
        borderBottom: '1px solid #1e293b',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 12px',
        userSelect: 'none'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#06b6d4' }} />
          <span style={{ fontSize: '12px', fontWeight: 800, color: '#f8fafc', letterSpacing: '0.4px' }}>
            Lintas — Cross-Device Ecosystem
          </span>
          <span style={{ fontSize: '9.5px', backgroundColor: '#0891b2', color: '#e0f2fe', padding: '1px 6px', borderRadius: '4px', fontWeight: 600 }}>
            LAN Port 8945
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '10px' }}>
          <span style={{ color: '#4ade80' }}>● WebSocket Connected</span>
          <span style={{ color: '#38bdf8' }}>v2.0 Companion</span>
        </div>
      </div>

      <div style={{ padding: '10px 12px', backgroundColor: '#060c18', minHeight: '340px', display: 'flex', flexDirection: 'column' }}>
        {renderScreen()}
      </div>
    </div>
  );
};


export const renderMockupVisual = (type) => {
  switch (type) {
    case 'lintas-companion':
    case 'lintas-touchpad':
    case 'lintas-drop':
    case 'lintas-clipboard':
    case 'lintas-nearlock':
    case 'lintas-presentation':
    case 'lintas-dash':
    case 'lintas-media':
    case 'lintas-sync':
      return renderLintasMockup(type);

    case 'theotown-ingame':
    case 'theotown-pixelart':
    case 'theotown-config-json':
    case 'theotown-manifest':
    case 'theotown-education-stats':
    case 'theotown-install-guide':
      return renderTheoTownMockup(type);

    case 'nenacare-dashboard':
    case 'nenacare-ai-analyst':
    case 'nenacare-report-form':
    case 'nenacare-telegram-remote':
    case 'nenacare-detail-notes':
    case 'nenacare-export-pdf':
      return renderNenaCareMockup(type);

    case 'tatagih-dashboard':
    case 'tatagih-ai-assistant':
    case 'tatagih-ai-chat':
    case 'tatagih-leak':
    case 'tatagih-patungan':
    case 'tatagih-templates':
    case 'tatagih-compare':
    case 'tatagih-bot':
    case 'tatagih-admin':
      return renderTatagihMockup(type);

    case 'temuin-home':
    case 'temuin-report':
    case 'temuin-qr-tag':
    case 'temuin-scanner':
    case 'nenacare-scanner':
    case 'temuin-chat':
    case 'temuin-admin':
      return renderTemuinPhoneMockup(type);

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

    case 'sigap-home':
    case 'sigap-countdown':
    case 'sigap-armed':
    case 'sigap-alert':
    case 'sigap-pin':
    case 'sigap-settings':
    case 'sigap-evidence':
    case 'sigap-tutorial':
      return renderSigapPhoneMockup(type);

    case 'bingkai-home':
    case 'bingkai-rebahan':
    case 'bingkai-swipe':
    case 'bingkai-duplicate':
    case 'bingkai-album':
    case 'bingkai-trash':
      return renderBingkaiMockup(type);

    default:
      return null;
  }
};
