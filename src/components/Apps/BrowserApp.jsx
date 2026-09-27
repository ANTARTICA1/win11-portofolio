import React, { useState } from 'react';
import { 
  ArrowLeft, ArrowRight, RotateCw, Lock, Star, ExternalLink, 
  Smartphone, Globe, Sparkles, Send, ShieldCheck, Download
} from 'lucide-react';
import { WinIcon } from '../Common/WinIcon';
import { INITIAL_USER, RECRUITER_SUMMARY, DATA_D_ITEMS } from '../../data/fileSystem';
import { playClickSound } from '../../utils/sound';

export const BrowserApp = ({ onOpenFile }) => {
  const [activeTab, setActiveTab] = useState('portfolio');
  const [url, setUrl] = useState('https://agungkrisna.dev/projects');

  const projects = [
    {
      title: "DompetQ — Fintech Mobile App",
      category: "Mobile Application",
      description: "Aplikasi dompet digital dengan pelacakan keuangan real-time, transaksi QRIS, split-bill, dan analitik pengeluaran interaktif.",
      image: "/projects/dompetq.jpg",
      tags: ["Flutter", "Riverpod", "Node.js", "PostgreSQL", "Biometric Auth"],
      liveDemo: "https://demo.dompetq.app",
      github: "https://github.com/agungkrisna/dompetq"
    },
    {
      title: "Temuin — Lost & Found Platform",
      category: "Crowdsourcing & Geo-Mapping",
      description: "Platform komunitas berbasis lokasi (Google Maps API) untuk melacak, melaporkan, dan mengklaim barang hilang dengan aman.",
      image: "/projects/temuin.jpg",
      tags: ["React Native", "Expo", "Express.js", "MongoDB", "Google Maps"],
      liveDemo: "https://temuin.vercel.app",
      github: "https://github.com/agungkrisna/temuin-mobile"
    },
    {
      title: "Makalah Generator — AI Assistant",
      category: "Web Application & AI",
      description: "Asisten cerdas pembuatan draf riset dan makalah akademik berbasis OpenAI API dengan manajemen sitasi standar APA/IEEE.",
      image: "/projects/makalah.jpg",
      tags: ["Next.js 14", "TypeScript", "TailwindCSS", "OpenAI GPT-4", "LaTeX"],
      liveDemo: "https://makalah-gen.vercel.app",
      github: "https://github.com/agungkrisna/makalah-generator"
    }
  ];

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      width: '100%',
      backgroundColor: '#1f1f1f',
      color: '#f8fafc',
      fontFamily: 'Segoe UI, Inter, sans-serif'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#2b2b2b',
        padding: '6px 12px 0 12px',
        gap: '6px',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          backgroundColor: '#1f1f1f',
          padding: '6px 16px',
          borderRadius: '8px 8px 0 0',
          fontSize: '12px',
          fontWeight: 500,
          color: '#ffffff',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderBottom: 'none'
        }}>
          <Sparkles size={14} color="#38bdf8" />
          <span>Agung Krisna — Projects Showcase</span>
          <span style={{ marginLeft: '10px', opacity: 0.6, cursor: 'pointer' }}>×</span>
        </div>
      </div>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        padding: '6px 12px',
        backgroundColor: '#1f1f1f',
        gap: '8px',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
      }}>
        <button style={{ background: 'none', border: 'none', color: '#9ca3af', cursor: 'pointer', padding: '4px' }}>
          <ArrowLeft size={16} />
        </button>
        <button style={{ background: 'none', border: 'none', color: '#9ca3af', cursor: 'pointer', padding: '4px' }}>
          <ArrowRight size={16} />
        </button>
        <button 
          style={{ background: 'none', border: 'none', color: '#9ca3af', cursor: 'pointer', padding: '4px' }}
          onClick={() => playClickSound()}
        >
          <RotateCw size={14} />
        </button>

        <div style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#2b2b2b',
          borderRadius: '20px',
          padding: '4px 14px',
          gap: '8px',
          fontSize: '12.5px',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <Lock size={13} color="#22c55e" />
          <span style={{ color: '#22c55e', fontWeight: 500 }}>https://</span>
          <span style={{ color: '#e2e8f0' }}>agungkrisna.dev/showcase</span>
        </div>

        <Star size={16} color="#9ca3af" style={{ cursor: 'pointer' }} />
      </div>

      <div style={{
        flex: 1,
        overflowY: 'auto',
        backgroundColor: '#090a0f',
        padding: '32px 24px',
        color: '#f8fafc'
      }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <div style={{
            background: 'linear-gradient(135deg, rgba(88, 28, 135, 0.4) 0%, rgba(15, 23, 42, 0.7) 100%)',
            border: '1px solid rgba(168, 85, 247, 0.3)',
            borderRadius: '16px',
            padding: '28px',
            marginBottom: '32px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)'
          }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: 'rgba(34, 197, 94, 0.15)',
              color: '#4ade80',
              padding: '4px 12px',
              borderRadius: '20px',
              fontSize: '12px',
              fontWeight: 600,
              marginBottom: '14px',
              border: '1px solid rgba(34, 197, 94, 0.3)'
            }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#22c55e', display: 'inline-block' }}></span>
              SIAP DIREKRUT: FULL-TIME / KONTRAK / REMOTE
            </div>

            <h1 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '8px', letterSpacing: '-0.5px' }}>
              Agung Krisna
            </h1>
            <p style={{ fontSize: '16px', color: '#c084fc', marginBottom: '14px', fontWeight: 500 }}>
              Full-Stack Web & Mobile Developer
            </p>
            <p style={{ fontSize: '14px', color: '#94a3b8', lineHeight: '1.6', maxWidth: '680px', marginBottom: '20px' }}>
              Membangun aplikasi mobile berskala produksi dengan Flutter & React Native, serta platform web modern berkinerja tinggi. Fokus pada arsitektur bersih, keamanan, dan UX yang intuitif.
            </p>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a
                href={INITIAL_USER.whatsapp}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: '#22c55e',
                  color: '#ffffff',
                  padding: '10px 18px',
                  borderRadius: '8px',
                  fontWeight: 600,
                  fontSize: '13px',
                  textDecoration: 'none'
                }}
              >
                <Send size={15} />
                Hubungi via WhatsApp
              </a>

              <a
                href={INITIAL_USER.github}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: '#ffffff',
                  padding: '10px 18px',
                  borderRadius: '8px',
                  fontWeight: 500,
                  fontSize: '13px',
                  textDecoration: 'none',
                  border: '1px solid rgba(255, 255, 255, 0.15)'
                }}
              >
                <WinIcon name="github" size={15} />
                GitHub Profile
              </a>
            </div>
          </div>

          <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Sparkles size={20} color="#a855f7" />
            Katalog Proyek Unggulan
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px', marginBottom: '40px' }}>
            {projects.map((proj, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#12141c',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s, border-color 0.2s'
                }}
              >
                <div style={{ height: '160px', overflow: 'hidden', backgroundColor: '#1e293b' }}>
                  <img
                    src={proj.image}
                    alt={proj.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>

                <div style={{ padding: '18px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '11px', color: '#a855f7', fontWeight: 600, textTransform: 'uppercase', marginBottom: '4px' }}>
                    {proj.category}
                  </span>
                  <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '8px' }}>{proj.title}</h3>
                  <p style={{ fontSize: '12.5px', color: '#94a3b8', lineHeight: '1.5', marginBottom: '14px', flex: 1 }}>
                    {proj.description}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
                    {proj.tags.map((t, i) => (
                      <span
                        key={i}
                        style={{
                          fontSize: '11px',
                          backgroundColor: 'rgba(255, 255, 255, 0.06)',
                          color: '#cbd5e1',
                          padding: '2px 8px',
                          borderRadius: '4px',
                          border: '1px solid rgba(255, 255, 255, 0.08)'
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div style={{ display: 'flex', gap: '8px' }}>
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        flex: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px',
                        padding: '8px',
                        backgroundColor: 'rgba(255, 255, 255, 0.08)',
                        color: '#ffffff',
                        borderRadius: '6px',
                        fontSize: '12px',
                        textDecoration: 'none',
                        border: '1px solid rgba(255, 255, 255, 0.12)'
                      }}
                    >
                      <WinIcon name="github" size={14} />
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '16px' }}>
            Spesialisasi & Tech Stack
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '16px',
            marginBottom: '40px'
          }}>
            <div style={{ backgroundColor: '#13151f', padding: '16px', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
              <h4 style={{ color: '#38bdf8', marginBottom: '8px', fontSize: '14px', fontWeight: 600 }}>Mobile Engineering</h4>
              <p style={{ fontSize: '12.5px', color: '#94a3b8', lineHeight: '1.6' }}>
                Flutter, Dart, React Native, BLoC, Riverpod, Local Storage (Hive), Map Integrations.
              </p>
            </div>
            <div style={{ backgroundColor: '#13151f', padding: '16px', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
              <h4 style={{ color: '#a855f7', marginBottom: '8px', fontSize: '14px', fontWeight: 600 }}>Frontend Web</h4>
              <p style={{ fontSize: '12.5px', color: '#94a3b8', lineHeight: '1.6' }}>
                React.js, Next.js 14, TypeScript, TailwindCSS, CSS Variables, Responsive Design.
              </p>
            </div>
            <div style={{ backgroundColor: '#13151f', padding: '16px', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
              <h4 style={{ color: '#34d399', marginBottom: '8px', fontSize: '14px', fontWeight: 600 }}>Backend & API</h4>
              <p style={{ fontSize: '12.5px', color: '#94a3b8', lineHeight: '1.6' }}>
                Node.js, Express, Go (Golang), PostgreSQL, MongoDB, Redis, JWT & OAuth2.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
