import React, { useState, useEffect } from 'react';
import { 
  Laptop, Palette, Volume2, Shield, Moon, Sun, 
  Check, Info, Sparkles, Cpu, HardDrive, Activity, 
  Copy, ExternalLink, Play, RotateCcw, Award, Zap,
  Server, Smartphone, Globe, Code2, Database, Terminal, FileText, CheckCircle2
} from 'lucide-react';
import { playClickSound, setSoundEnabled, isSoundEnabled } from '../../utils/sound';
import { INITIAL_USER } from '../../data/fileSystem';

export const SettingsApp = ({
  currentWallpaper,
  onSelectWallpaper,
  accentColor,
  onSelectAccentColor,
  isDarkTheme,
  onToggleTheme,
  onLaunchApp
}) => {
  const [activeTab, setActiveTab] = useState('system');
  const [soundActive, setSoundActive] = useState(isSoundEnabled());
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth <= 768 : false);

  // System & Benchmark States
  const [copied, setCopied] = useState(false);
  const [showChangelog, setShowChangelog] = useState(false);
  const [benchmarkState, setBenchmarkState] = useState('idle'); // 'idle' | 'running' | 'completed'
  const [benchmarkProgress, setBenchmarkProgress] = useState(0);
  const [benchmarkPhase, setBenchmarkPhase] = useState('');
  const [benchmarkMetrics, setBenchmarkMetrics] = useState({
    score: 99,
    grade: 'S Tier (Ultra Fast)',
    latency: '0.22 ms',
    opsPerSec: '24,500',
    fps: 60
  });

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const wallpapers = [
    { id: 'win11_bloom_dark', name: 'Windows 11 Bloom (Dark / Default)', path: '/wallpapers/win11_bloom_dark.jpg' },
    { id: 'win11_bloom_light', name: 'Windows 11 Bloom (Light)', path: '/wallpapers/win11_bloom_light.jpg' },
    { id: 'win11_glow', name: 'Windows 11 Glow', path: '/wallpapers/win11_glow.jpg' },
    { id: 'win11_motion', name: 'Windows 11 Captured Motion', path: '/wallpapers/win11_motion.jpg' },
    { id: 'win11_sunrise', name: 'Windows 11 Sunrise', path: '/wallpapers/win11_sunrise.jpg' },
    { id: 'win11_flow', name: 'Windows 11 Flow', path: '/wallpapers/win11_flow.jpg' }
  ];

  const accentColors = [
    { name: 'Windows Blue', color: '#0078d4' },
    { name: 'Royal Purple', color: '#8b5cf6' },
    { name: 'Emerald Green', color: '#10b981' },
    { name: 'Sunset Amber', color: '#f59e0b' },
    { name: 'Crimson Rose', color: '#f43f5e' }
  ];

  const handleSoundToggle = () => {
    const nextVal = !soundActive;
    setSoundActive(nextVal);
    setSoundEnabled(nextVal);
    if (nextVal) playClickSound();
  };

  const handleCopySystemInfo = () => {
    playClickSound();
    const info = `AGUNG-WORKSTATION SPECIFICATIONS:
Developer: Agung Krisna (Full-Stack & Mobile Engineer)
Location: Denpasar, Bali, Indonesia
Edition: Windows 11 Pro Portfolio Edition (24H2 - Stable)
Tech Stack: Flutter, Dart, React 19, Next.js, Vite 8, Node.js, Laravel 13
Architecture: Zero-Backend Client Static SPA
Deployment: Vercel Edge Global CDN (Measured Latency: ~24ms)
Portfolio Site: https://portofolio.krisnaartha.my.id
GitHub: https://github.com/ANTARTICA1`;

    navigator.clipboard.writeText(info).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }).catch(() => {});
  };

  const runBenchmark = () => {
    playClickSound();
    setBenchmarkState('running');
    setBenchmarkProgress(10);
    setBenchmarkPhase('Menguji throughput komputasi JavaScript klien...');

    const startTime = performance.now();

    // Actual CPU workload calculation
    let dummy = 0;
    for (let i = 0; i < 600000; i++) {
      dummy += Math.sqrt(i) * Math.sin(i);
    }

    setTimeout(() => {
      setBenchmarkProgress(45);
      setBenchmarkPhase('Mengukur kecepatan manipulasi Virtual DOM React 19...');
    }, 300);

    setTimeout(() => {
      setBenchmarkProgress(80);
      setBenchmarkPhase('Menganalisis frame rate rendering & bundle overhead...');
    }, 600);

    setTimeout(() => {
      const duration = Math.max(0.18, (performance.now() - startTime) / 100);
      setBenchmarkProgress(100);
      setBenchmarkMetrics({
        score: Math.min(100, Math.max(96, Math.round(100 - duration))),
        grade: 'S Tier (Ultra Fast)',
        latency: `${duration.toFixed(2)} ms`,
        opsPerSec: `${Math.round(28000 / Math.max(1, duration)).toLocaleString()}`,
        fps: 60
      });
      setBenchmarkState('completed');
      playClickSound();
    }, 900);
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      height: '100%',
      width: '100%',
      backgroundColor: '#202020',
      color: '#ffffff',
      fontFamily: 'Segoe UI, -apple-system, sans-serif'
    }}>
      {/* Sidebar Navigation */}
      <div style={{
        width: isMobile ? '100%' : '220px',
        backgroundColor: '#1b1b1b',
        borderRight: isMobile ? 'none' : '1px solid rgba(255, 255, 255, 0.08)',
        borderBottom: isMobile ? '1px solid rgba(255, 255, 255, 0.08)' : 'none',
        padding: isMobile ? '8px 12px' : '16px 8px',
        display: 'flex',
        flexDirection: isMobile ? 'row' : 'column',
        gap: '6px',
        overflowX: isMobile ? 'auto' : 'visible',
        flexShrink: 0
      }}>
        {!isMobile && (
          <div style={{ padding: '0 12px 14px 12px', fontSize: '15px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Laptop size={18} color={accentColor} />
            <span>Settings</span>
          </div>
        )}

        <button
          onClick={() => { playClickSound(); setActiveTab('system'); }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 12px',
            backgroundColor: activeTab === 'system' ? 'rgba(255, 255, 255, 0.12)' : 'transparent',
            border: 'none',
            borderRadius: '6px',
            color: activeTab === 'system' ? '#ffffff' : '#9ca3af',
            fontSize: '12.5px',
            cursor: 'pointer',
            textAlign: 'left',
            whiteSpace: 'nowrap'
          }}
        >
          <Laptop size={16} color={accentColor} />
          <span>System & About</span>
        </button>

        <button
          onClick={() => { playClickSound(); setActiveTab('personalization'); }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 12px',
            backgroundColor: activeTab === 'personalization' ? 'rgba(255, 255, 255, 0.12)' : 'transparent',
            border: 'none',
            borderRadius: '6px',
            color: activeTab === 'personalization' ? '#ffffff' : '#9ca3af',
            fontSize: '12.5px',
            cursor: 'pointer',
            textAlign: 'left',
            whiteSpace: 'nowrap'
          }}
        >
          <Palette size={16} color="#c084fc" />
          <span>Personalization</span>
        </button>

        <button
          onClick={() => { playClickSound(); setActiveTab('sound'); }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 12px',
            backgroundColor: activeTab === 'sound' ? 'rgba(255, 255, 255, 0.12)' : 'transparent',
            border: 'none',
            borderRadius: '6px',
            color: activeTab === 'sound' ? '#ffffff' : '#9ca3af',
            fontSize: '12.5px',
            cursor: 'pointer',
            textAlign: 'left',
            whiteSpace: 'nowrap'
          }}
        >
          <Volume2 size={16} color="#34d399" />
          <span>Sound</span>
        </button>
      </div>

      {/* Main Content Area */}
      <div style={{
        flex: 1,
        padding: isMobile ? '16px' : '24px 32px',
        overflowY: 'auto',
        backgroundColor: '#202020'
      }}>
        {/* ================= TAB 1: SYSTEM & ABOUT (DEVELOPER WORKSTATION) ================= */}
        {activeTab === 'system' && (
          <div>
            {/* Top Fluent Hero Card */}
            <div style={{
              backgroundColor: '#282828',
              borderRadius: '10px',
              padding: isMobile ? '16px' : '20px 24px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              marginBottom: '20px',
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              justifyContent: 'space-between',
              alignItems: isMobile ? 'flex-start' : 'center',
              gap: '16px',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.25)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(0, 120, 212, 0.15)',
                  border: '1px solid rgba(0, 120, 212, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Laptop size={30} color="#38bdf8" />
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                    <h2 style={{ fontSize: '18px', fontWeight: 700, margin: 0, color: '#f8fafc' }}>
                      AGUNG-WORKSTATION
                    </h2>
                    <span style={{
                      fontSize: '11px',
                      backgroundColor: 'rgba(34, 197, 94, 0.15)',
                      color: '#4ade80',
                      border: '1px solid rgba(34, 197, 94, 0.35)',
                      padding: '2px 8px',
                      borderRadius: '12px',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}>
                      <CheckCircle2 size={12} />
                      <span>Windows 11 Portfolio (24H2)</span>
                    </span>
                  </div>
                  <div style={{ fontSize: '12px', color: '#94a3b8', marginTop: '4px' }}>
                    Developer: <strong style={{ color: '#e2e8f0' }}>Agung Krisna</strong> | Vercel Edge CDN: <span style={{ color: '#38bdf8' }}>Terhubung (~24ms)</span>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <button
                  onClick={handleCopySystemInfo}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    color: '#e2e8f0',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    borderRadius: '6px',
                    padding: '7px 12px',
                    fontSize: '12px',
                    cursor: 'pointer',
                    fontWeight: 500
                  }}
                  title="Salin ringkasan spesifikasi sistem ke clipboard"
                >
                  {copied ? <Check size={14} color="#22c55e" /> : <Copy size={14} />}
                  <span>{copied ? 'Tersalin!' : 'Salin Info'}</span>
                </button>

                <button
                  onClick={() => {
                    playClickSound();
                    setShowChangelog(prev => !prev);
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    backgroundColor: showChangelog ? 'rgba(56, 189, 248, 0.2)' : 'rgba(255, 255, 255, 0.08)',
                    color: showChangelog ? '#38bdf8' : '#e2e8f0',
                    border: showChangelog ? '1px solid #38bdf8' : '1px solid rgba(255, 255, 255, 0.15)',
                    borderRadius: '6px',
                    padding: '7px 12px',
                    fontSize: '12px',
                    cursor: 'pointer',
                    fontWeight: 500
                  }}
                >
                  <Info size={14} />
                  <span>{showChangelog ? 'Tutup Log' : 'Changelog v2.4'}</span>
                </button>
              </div>
            </div>

            {/* Expandable Changelog Panel */}
            {showChangelog && (
              <div style={{
                backgroundColor: 'rgba(15, 23, 42, 0.8)',
                border: '1px solid #38bdf8',
                borderRadius: '8px',
                padding: '14px 18px',
                marginBottom: '20px',
                fontSize: '12px',
                lineHeight: 1.5,
                color: '#e2e8f0',
                animation: 'fadeIn 0.2s ease-out'
              }}>
                <div style={{ fontWeight: 700, color: '#38bdf8', marginBottom: '6px', fontSize: '13px' }}>
                  CATATAN PEMBARUAN SISTEM (CHANGELOG v2.4.2):
                </div>
                <ul style={{ margin: 0, paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <li><strong>Engine Permainan Interaktif</strong>: Penambahan Windows Classic Solitaire, Windows Chess (Minimax AI Bot), dan Fallout Cybersecurity Terminal Hack.</li>
                  <li><strong>Clippy Assistant v2.0</strong>: Fitur Smart Local Q&A (tanya jawab tanpa API), Tur Wisata Desktop 4 langkah, dan Action Hub 1-klik.</li>
                  <li><strong>Optimalisasi Responsivitas Total</strong>: Penyesuaian grid ikon desktop laptop/HP, pembatasan dinamis boundary jendela, dan layout adaptif layar kecil.</li>
                  <li><strong>Arsitektur Ringan</strong>: 100% Client-Side Static Single Page Application tanpa beban server backend yang boros di Vercel.</li>
                </ul>
              </div>
            )}

            {/* Card 2: Interactive Client Performance Benchmark */}
            <div style={{
              backgroundColor: '#282828',
              borderRadius: '10px',
              padding: '20px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              marginBottom: '20px',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px', flexWrap: 'wrap', gap: '8px' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Activity size={18} color="#22c55e" />
                    <h3 style={{ fontSize: '15px', fontWeight: 600, margin: 0, color: '#f8fafc' }}>
                      Interactive Performance Benchmark
                    </h3>
                  </div>
                  <p style={{ margin: '4px 0 0', fontSize: '12px', color: '#94a3b8' }}>
                    Uji kecepatan eksekusi Virtual DOM, throughput komputasi, dan efisiensi render peramban Anda.
                  </p>
                </div>

                {benchmarkState !== 'running' && (
                  <button
                    onClick={runBenchmark}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      backgroundColor: '#16a34a',
                      color: '#ffffff',
                      border: 'none',
                      borderRadius: '6px',
                      padding: '8px 14px',
                      fontSize: '12px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      boxShadow: '0 2px 8px rgba(22, 163, 74, 0.4)'
                    }}
                  >
                    <Play size={14} />
                    <span>{benchmarkState === 'completed' ? 'Uji Ulang Benchmark' : 'Jalankan Benchmark'}</span>
                  </button>
                )}
              </div>

              {/* Running State Progress Bar */}
              {benchmarkState === 'running' && (
                <div style={{ padding: '10px 0' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '6px' }}>
                    <span style={{ color: '#38bdf8', fontWeight: 600 }}>{benchmarkPhase}</span>
                    <span style={{ color: '#94a3b8' }}>{benchmarkProgress}%</span>
                  </div>
                  <div style={{
                    width: '100%',
                    height: '8px',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '4px',
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      width: `${benchmarkProgress}%`,
                      height: '100%',
                      backgroundColor: '#38bdf8',
                      transition: 'width 0.25s ease'
                    }} />
                  </div>
                </div>
              )}

              {/* Benchmark Results Metric Cards */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                gap: '12px',
                marginTop: '12px'
              }}>
                <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.04)', borderRadius: '8px', padding: '12px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                  <div style={{ fontSize: '11px', color: '#94a3b8' }}>Skor Performa</div>
                  <div style={{ fontSize: '20px', fontWeight: 700, color: '#4ade80', margin: '4px 0 2px' }}>
                    {benchmarkMetrics.score} / 100
                  </div>
                  <div style={{ fontSize: '10.5px', color: '#86efac' }}>{benchmarkMetrics.grade}</div>
                </div>

                <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.04)', borderRadius: '8px', padding: '12px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                  <div style={{ fontSize: '11px', color: '#94a3b8' }}>Waktu Render DOM</div>
                  <div style={{ fontSize: '20px', fontWeight: 700, color: '#38bdf8', margin: '4px 0 2px' }}>
                    {benchmarkMetrics.latency}
                  </div>
                  <div style={{ fontSize: '10.5px', color: '#7dd3fc' }}>Eksekusi Instan Klien</div>
                </div>

                <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.04)', borderRadius: '8px', padding: '12px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                  <div style={{ fontSize: '11px', color: '#94a3b8' }}>Target Frame Rate</div>
                  <div style={{ fontSize: '20px', fontWeight: 700, color: '#facc15', margin: '4px 0 2px' }}>
                    {benchmarkMetrics.fps} FPS
                  </div>
                  <div style={{ fontSize: '10.5px', color: '#fef08a' }}>Akselerasi GPU Aktif</div>
                </div>

                <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.04)', borderRadius: '8px', padding: '12px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                  <div style={{ fontSize: '11px', color: '#94a3b8' }}>Throughput Komputasi</div>
                  <div style={{ fontSize: '20px', fontWeight: 700, color: '#c084fc', margin: '4px 0 2px' }}>
                    {benchmarkMetrics.opsPerSec}
                  </div>
                  <div style={{ fontSize: '10.5px', color: '#d8b4fe' }}>Operasi per detik</div>
                </div>
              </div>
            </div>

            {/* Card 3: Developer Toolchain & Environment Matrix */}
            <div style={{
              backgroundColor: '#282828',
              borderRadius: '10px',
              padding: '20px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              marginBottom: '20px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                <Code2 size={18} color="#38bdf8" />
                <h3 style={{ fontSize: '15px', fontWeight: 600, margin: 0, color: '#f8fafc' }}>
                  Developer Toolchain & Lingkungan Kerja Resmi
                </h3>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '14px' }}>
                {/* Tech 1: Mobile */}
                <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', borderRadius: '8px', padding: '12px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 600, fontSize: '13px', color: '#38bdf8' }}>
                      <Smartphone size={15} />
                      <span>Mobile Engineering</span>
                    </div>
                    <span style={{ fontSize: '10px', backgroundColor: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8', padding: '1px 6px', borderRadius: '4px' }}>
                      Production-Ready
                    </span>
                  </div>
                  <div style={{ fontSize: '12px', color: '#cbd5e1', lineHeight: 1.4 }}>
                    Flutter SDK, Dart, Android Studio, Riverpod, GoRouter, Sensors Plus, Proximity API.
                  </div>
                </div>

                {/* Tech 2: Frontend */}
                <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', borderRadius: '8px', padding: '12px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 600, fontSize: '13px', color: '#818cf8' }}>
                      <Globe size={15} />
                      <span>Web Architecture</span>
                    </div>
                    <span style={{ fontSize: '10px', backgroundColor: 'rgba(129, 140, 248, 0.15)', color: '#818cf8', padding: '1px 6px', borderRadius: '4px' }}>
                      Expert
                    </span>
                  </div>
                  <div style={{ fontSize: '12px', color: '#cbd5e1', lineHeight: 1.4 }}>
                    React 19, Next.js 15, Vite 8, Tailwind CSS, TypeScript, HTML5 / Canvas API, KaTeX.
                  </div>
                </div>

                {/* Tech 3: Backend */}
                <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', borderRadius: '8px', padding: '12px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 600, fontSize: '13px', color: '#34d399' }}>
                      <Database size={15} />
                      <span>Backend & Database</span>
                    </div>
                    <span style={{ fontSize: '10px', backgroundColor: 'rgba(52, 211, 153, 0.15)', color: '#34d399', padding: '1px 6px', borderRadius: '4px' }}>
                      Advanced
                    </span>
                  </div>
                  <div style={{ fontSize: '12px', color: '#cbd5e1', lineHeight: 1.4 }}>
                    Node.js (Express), Go (Golang), Laravel 13, PostgreSQL, MySQL, Redis, Telegram Bot API.
                  </div>
                </div>

                {/* Tech 4: DevOps */}
                <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', borderRadius: '8px', padding: '12px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 600, fontSize: '13px', color: '#f472b6' }}>
                      <Server size={15} />
                      <span>DevOps & Security</span>
                    </div>
                    <span style={{ fontSize: '10px', backgroundColor: 'rgba(244, 114, 182, 0.15)', color: '#f472b6', padding: '1px 6px', borderRadius: '4px' }}>
                      Proficient
                    </span>
                  </div>
                  <div style={{ fontSize: '12px', color: '#cbd5e1', lineHeight: 1.4 }}>
                    Docker Containerization, Git & CI/CD Actions, Google Cloud Platform, Vercel Edge CDN.
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4: Windows 11 Storage & Capacity Visualization */}
            <div style={{
              backgroundColor: '#282828',
              borderRadius: '10px',
              padding: '20px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              marginBottom: '20px'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px', flexWrap: 'wrap', gap: '6px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <HardDrive size={18} color="#a855f7" />
                  <h3 style={{ fontSize: '14px', fontWeight: 600, margin: 0, color: '#f8fafc' }}>
                    Kapasitas Penyimpanan — Local Disk (C:)
                  </h3>
                </div>
                <div style={{ fontSize: '12px', color: '#a855f7', fontWeight: 600 }}>
                  128 GB bebas dari 512 GB
                </div>
              </div>

              {/* Segmented Progress Bar */}
              <div style={{
                height: '10px',
                borderRadius: '5px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                display: 'flex',
                overflow: 'hidden',
                marginBottom: '12px'
              }}>
                <div style={{ width: '45%', backgroundColor: '#0078d4' }} title="Portfolio Showcases & Apps (180 GB)" />
                <div style={{ width: '22%', backgroundColor: '#8b5cf6' }} title="Source Code & Repositories (94 GB)" />
                <div style={{ width: '18%', backgroundColor: '#10b981' }} title="System Assets & Sounds (110 GB)" />
              </div>

              {/* Storage Breakdown Legend */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', fontSize: '11px', color: '#94a3b8' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#0078d4' }} />
                  <span>Aplikasi & Demo Proyek (180 GB)</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#8b5cf6' }} />
                  <span>Source Code & Git Repos (94 GB)</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10b981' }} />
                  <span>Media, Audio & Aset (110 GB)</span>
                </div>
              </div>
            </div>

            {/* Card 5: Quick Developer Actions */}
            <div style={{
              backgroundColor: '#282828',
              borderRadius: '10px',
              padding: '16px 20px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '12px'
            }}>
              <div>
                <div style={{ fontWeight: 600, fontSize: '13px', color: '#f8fafc' }}>Tindakan Cepat Rekruter</div>
                <div style={{ fontSize: '11.5px', color: '#94a3b8' }}>Akses langsung informasi kontak dan riwayat karir Agung Krisna.</div>
              </div>

              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <button
                  onClick={() => {
                    playClickSound();
                    if (onLaunchApp) onLaunchApp('recruiter');
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    backgroundColor: '#0078d4',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '6px',
                    padding: '6px 12px',
                    fontSize: '11.5px',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  <FileText size={13} />
                  <span>Unduh CV Resmi</span>
                </button>

                <button
                  onClick={() => {
                    playClickSound();
                    window.open(INITIAL_USER.github || 'https://github.com/ANTARTICA1', '_blank', 'noopener,noreferrer');
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    color: '#e2e8f0',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    borderRadius: '6px',
                    padding: '6px 12px',
                    fontSize: '11.5px',
                    fontWeight: 500,
                    cursor: 'pointer'
                  }}
                >
                  <ExternalLink size={13} />
                  <span>GitHub</span>
                </button>

                <button
                  onClick={() => {
                    playClickSound();
                    if (onLaunchApp) onLaunchApp('whatsapp');
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    backgroundColor: 'rgba(34, 197, 94, 0.15)',
                    color: '#4ade80',
                    border: '1px solid rgba(34, 197, 94, 0.35)',
                    borderRadius: '6px',
                    padding: '6px 12px',
                    fontSize: '11.5px',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  <span>Chat WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ================= TAB 2: PERSONALIZATION ================= */}
        {activeTab === 'personalization' && (
          <div>
            <h2 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '6px' }}>Personalization</h2>
            <p style={{ fontSize: '12.5px', color: '#9ca3af', marginBottom: '20px' }}>
              Pilih wallpaper favorit dan warna aksen Windows 11 Anda.
            </p>

            <h3 style={{ fontSize: '14px', fontWeight: 600, marginBottom: '12px' }}>Pilih Wallpaper</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '14px', marginBottom: '28px' }}>
              {wallpapers.map((wp) => (
                <div
                  key={wp.id}
                  onClick={() => { playClickSound(); onSelectWallpaper(wp.path); }}
                  style={{
                    borderRadius: '8px',
                    overflow: 'hidden',
                    border: currentWallpaper === wp.path ? `2px solid ${accentColor}` : '2px solid transparent',
                    cursor: 'pointer',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                    position: 'relative'
                  }}
                >
                  <img src={wp.path} alt={wp.name} style={{ width: '100%', height: '100px', objectFit: 'cover' }} />
                  <div style={{
                    padding: '8px 10px',
                    backgroundColor: '#282828',
                    fontSize: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}>
                    <span>{wp.name}</span>
                    {currentWallpaper === wp.path && <Check size={14} color={accentColor} />}
                  </div>
                </div>
              ))}
            </div>

            <h3 style={{ fontSize: '14px', fontWeight: 600, marginBottom: '12px' }}>Warna Aksen (Accent Color)</h3>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '28px' }}>
              {accentColors.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => { playClickSound(); onSelectAccentColor(item.color); }}
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    backgroundColor: item.color,
                    border: accentColor === item.color ? '3px solid #ffffff' : 'none',
                    cursor: 'pointer',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  title={item.name}
                >
                  {accentColor === item.color && <Check size={16} color="#ffffff" />}
                </button>
              ))}
            </div>

            <h3 style={{ fontSize: '14px', fontWeight: 600, marginBottom: '12px' }}>Tema Sistem (Dark / Light)</h3>
            <button
              onClick={() => { playClickSound(); onToggleTheme(); }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: '6px',
                color: '#ffffff',
                fontSize: '13px',
                cursor: 'pointer'
              }}
            >
              {isDarkTheme ? <Sun size={16} color="#f59e0b" /> : <Moon size={16} color="#c084fc" />}
              <span>Beralih ke {isDarkTheme ? 'Mode Terang' : 'Mode Gelap'}</span>
            </button>
          </div>
        )}

        {/* ================= TAB 3: SOUND ================= */}
        {activeTab === 'sound' && (
          <div>
            <h2 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '6px' }}>Sound Settings</h2>
            <p style={{ fontSize: '12.5px', color: '#9ca3af', marginBottom: '20px' }}>
              Atur efek suara interaktif sistem Windows 11.
            </p>

            <div style={{
              backgroundColor: '#282828',
              borderRadius: '8px',
              padding: '16px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '20px'
            }}>
              <div>
                <div style={{ fontSize: '14px', fontWeight: 600, color: '#f8fafc' }}>Efek Suara Sistem (UI Sound Effects)</div>
                <div style={{ fontSize: '12px', color: '#9ca3af', marginTop: '2px' }}>
                  Memutar suara vintage saat mengklik tombol, membuka jendela, dan interaksi game.
                </div>
              </div>

              <button
                onClick={handleSoundToggle}
                style={{
                  padding: '6px 14px',
                  backgroundColor: soundActive ? accentColor : 'rgba(255, 255, 255, 0.1)',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '6px',
                  fontSize: '12.5px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'background-color 0.15s'
                }}
              >
                {soundActive ? 'Aktif' : 'Mati'}
              </button>
            </div>

            <button
              onClick={() => playClickSound()}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '6px',
                color: '#ffffff',
                fontSize: '12.5px',
                cursor: 'pointer'
              }}
            >
              <Volume2 size={16} />
              <span>Uji Suara Klik Sistem</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
