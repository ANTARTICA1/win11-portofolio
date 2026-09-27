import React, { useState } from 'react';
import { 
  Briefcase, Send, Download, Mail, Phone, MapPin, 
  CheckCircle2, Sparkles, Star, ExternalLink,
  Code2, Smartphone, Database, Copy, Check
} from 'lucide-react';
import { WinIcon } from '../Common/WinIcon';
import { INITIAL_USER, RECRUITER_SUMMARY } from '../../data/fileSystem';
import { playClickSound } from '../../utils/sound';

export const RecruiterHubApp = ({ onOpenFile, onOpenApp }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    playClickSound();
    navigator.clipboard.writeText(INITIAL_USER.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleDownloadCV = () => {
    playClickSound();
    const cvText = `================================================================
CURRICULUM VITAE — AGUNG KRISNA
Full-Stack Web & Mobile Developer
================================================================
Kontak:
- Email    : ${INITIAL_USER.email}
- WhatsApp : ${INITIAL_USER.phone}
- LinkedIn : ${INITIAL_USER.linkedin}
- GitHub   : ${INITIAL_USER.github}

RINGKASAN PROFESIONAL:
Software developer berorientasi hasil dengan 3+ tahun pengalaman dalam
membangun aplikasi mobile berskala komersial (Flutter, React Native) dan
platform web performa tinggi (React, Next.js, Node.js).

KEAHLIAN UTAMA:
- Mobile Development : Flutter, Dart, React Native, State Management (Riverpod, BLoC)
- Frontend Web       : React.js, Next.js, TypeScript, TailwindCSS
- Backend & Cloud    : Node.js, Express, Go, PostgreSQL, MongoDB, Docker, CI/CD

PENGALAMAN KERJA:
1. Full-Stack & Mobile Developer (Freelance / Project-Based) | 2023 - Sekarang
   - Mengembangkan aplikasi fintech DompetQ dengan integrasi QRIS & analitik.
   - Merancang platform crowdsourcing geofencing 'Temuin' berbasis Google Maps API.
   - Membangun antarmuka AI 'Makalah Generator' dengan Next.js 14 dan OpenAI API.

2. Mobile App Developer Intern | 2022 - 2023
   - Mengoptimalkan responsivitas UI dan konsumsi memori aplikasi hingga 35%.
   - Mengintegrasikan caching offline menggunakan SQLite & Hive.

PENDIDIKAN:
- S1 Teknik Informatika (IPK: 3.84)
  Prestasi: Juara 2 Hackathon Mobile Application Kampus 2023

Status: TERSEDIA UNTUK PENAWARAN KERJA (Full-Time / Remote / Onsite)
================================================================`;

    const blob = new Blob([cvText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Agung_Krisna_Curriculum_Vitae.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      width: '100%',
      backgroundColor: '#13141f',
      color: '#f8fafc',
      overflowY: 'auto',
      padding: '24px',
      fontFamily: 'Segoe UI, Inter, sans-serif'
    }}>
      <div style={{
        backgroundColor: '#1b1d2e',
        border: '1px solid rgba(139, 92, 246, 0.35)',
        borderRadius: '12px',
        padding: '20px',
        marginBottom: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '16px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            backgroundColor: '#8b5cf6',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontSize: '22px',
            fontWeight: 700,
            boxShadow: '0 4px 16px rgba(139, 92, 246, 0.4)'
          }}>
            AK
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
              <h2 style={{ fontSize: '20px', fontWeight: 700 }}>{INITIAL_USER.name}</h2>
              <span style={{
                backgroundColor: 'rgba(34, 197, 94, 0.2)',
                color: '#4ade80',
                padding: '2px 8px',
                borderRadius: '12px',
                fontSize: '11px',
                fontWeight: 600,
                border: '1px solid rgba(34, 197, 94, 0.4)'
              }}>
                ● Siap Direkrut
              </span>
            </div>
            <p style={{ color: '#a78bfa', fontSize: '13.5px', fontWeight: 500 }}>
              {INITIAL_USER.role} — {RECRUITER_SUMMARY.experienceYears} Pengalaman
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <button
            onClick={handleDownloadCV}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: '#0078d4',
              color: '#fff',
              border: 'none',
              padding: '8px 14px',
              borderRadius: '6px',
              fontSize: '12.5px',
              fontWeight: 600,
              cursor: 'pointer'
            }}
          >
            <Download size={15} />
            Download Resume (CV)
          </button>

          <a
            href={INITIAL_USER.whatsapp}
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: '#22c55e',
              color: '#fff',
              border: 'none',
              padding: '8px 14px',
              borderRadius: '6px',
              fontSize: '12.5px',
              fontWeight: 600,
              textDecoration: 'none'
            }}
          >
            <Send size={15} />
            WhatsApp Cepat
          </a>
        </div>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '16px',
        marginBottom: '24px'
      }}>
        <div style={{ backgroundColor: '#1a1b26', padding: '16px', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
          <h3 style={{ fontSize: '14px', fontWeight: 600, color: '#38bdf8', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Star size={16} /> Keunggulan Utama
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {RECRUITER_SUMMARY.highlights.map((h, i) => (
              <li key={i} style={{ fontSize: '12.5px', color: '#cbd5e1', marginBottom: '8px', display: 'flex', gap: '8px', lineHeight: '1.45' }}>
                <CheckCircle2 size={15} color="#22c55e" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>

        <div style={{ backgroundColor: '#1a1b26', padding: '16px', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
          <h3 style={{ fontSize: '14px', fontWeight: 600, color: '#a855f7', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Code2 size={16} /> Keahlian Teknis Paling Mahir
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {RECRUITER_SUMMARY.topSkills.map((skill, i) => (
              <span
                key={i}
                style={{
                  fontSize: '11.5px',
                  backgroundColor: 'rgba(168, 85, 247, 0.15)',
                  color: '#e9d5ff',
                  padding: '4px 10px',
                  borderRadius: '6px',
                  border: '1px solid rgba(168, 85, 247, 0.3)'
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div style={{
        backgroundColor: '#1a1b26',
        padding: '16px 20px',
        borderRadius: '10px',
        border: '1px solid rgba(255, 255, 255, 0.08)'
      }}>
        <h3 style={{ fontSize: '14px', fontWeight: 600, marginBottom: '12px' }}>
          Informasi Kontak & Portofolio Eksternal
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '12.5px', color: '#cbd5e1' }}>
            <Mail size={16} color="#0078d4" />
            <span>{INITIAL_USER.email}</span>
            <button
              onClick={handleCopyEmail}
              style={{ background: 'none', border: 'none', color: '#9ca3af', cursor: 'pointer', display: 'flex' }}
              title="Salin email"
            >
              {copiedEmail ? <Check size={14} color="#10b981" /> : <Copy size={14} />}
            </button>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '12.5px', color: '#cbd5e1' }}>
            <Phone size={16} color="#22c55e" />
            <span>{INITIAL_USER.phone}</span>
          </div>

          <a
            href={INITIAL_USER.linkedin}
            target="_blank"
            rel="noreferrer"
            style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12.5px', color: '#60a5fa', textDecoration: 'none' }}
          >
            <WinIcon name="linkedin" size={16} />
            <span>Profil LinkedIn</span>
            <ExternalLink size={12} />
          </a>

          <a
            href={INITIAL_USER.github}
            target="_blank"
            rel="noreferrer"
            style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12.5px', color: '#cbd5e1', textDecoration: 'none' }}
          >
            <WinIcon name="github" size={16} />
            <span>Repositori GitHub</span>
            <ExternalLink size={12} />
          </a>
        </div>
      </div>
    </div>
  );
};
