import React, { useState, useEffect } from 'react';
import { Activity, Cpu, HardDrive, ShieldCheck, RefreshCw, Sparkles, CheckCircle } from 'lucide-react';
import { playClickSound } from '../../utils/sound';

export const TaskManagerApp = () => {
  const [activeTab, setActiveTab] = useState('processes');
  const [cpuUsage, setCpuUsage] = useState(14);
  const [ramUsage, setRamUsage] = useState(8.2);
  const [selectedProcess, setSelectedProcess] = useState('p1');
  const [endTaskNotice, setEndTaskNotice] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      setCpuUsage(Math.floor(12 + Math.random() * 8));
      setRamUsage(Number((8.1 + Math.random() * 0.3).toFixed(1)));
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const processes = [
    { id: 'p1', name: 'AgungKrisna_Portfolio_Core.exe', status: 'Running (60 FPS)', cpu: '2.4%', memory: '54.2 MB', disk: '0.1 MB/s' },
    { id: 'p2', name: 'Flutter_Mobile_Engine.dll', status: 'Running', cpu: '1.8%', memory: '42.8 MB', disk: '0 MB/s' },
    { id: 'p3', name: 'React19_Vite_VirtualOS.sys', status: 'Optimal', cpu: '3.1%', memory: '68.5 MB', disk: '0.2 MB/s' },
    { id: 'p4', name: 'Recruiter_Instant_Hire_Daemon.exe', status: '🟢 Ready to Work', cpu: '0.5%', memory: '18.4 MB', disk: '0 MB/s' },
    { id: 'p5', name: 'DompetQ_Fintech_Service.exe', status: 'Background', cpu: '0.2%', memory: '24.1 MB', disk: '0 MB/s' },
    { id: 'p6', name: 'Temuin_Crowdsourcing_Maps.exe', status: 'Idle', cpu: '0.1%', memory: '29.3 MB', disk: '0 MB/s' },
    { id: 'p7', name: 'Windows_PowerShell_v7.exe', status: 'Running', cpu: '0.8%', memory: '22.0 MB', disk: '0 MB/s' }
  ];

  const handleEndTask = () => {
    playClickSound();
    setEndTaskNotice('Proses tidak dapat dihentikan: Agung Krisna siap bekerja 100% tanpa henti! 😊');
    setTimeout(() => setEndTaskNotice(''), 3500);
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      width: '100%',
      backgroundColor: '#1f1f1f',
      color: '#f8fafc',
      fontFamily: 'Segoe UI, sans-serif',
      fontSize: '12.5px'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        padding: '6px 12px',
        backgroundColor: '#262626',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
      }}>
        <button
          onClick={() => { playClickSound(); setActiveTab('processes'); }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '6px 14px',
            backgroundColor: activeTab === 'processes' ? 'rgba(255, 255, 255, 0.12)' : 'transparent',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '12px',
            fontWeight: 500
          }}
        >
          <Activity size={14} color="#0078d4" />
          <span>Processes</span>
        </button>

        <button
          onClick={() => { playClickSound(); setActiveTab('performance'); }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '6px 14px',
            backgroundColor: activeTab === 'performance' ? 'rgba(255, 255, 255, 0.12)' : 'transparent',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '12px',
            fontWeight: 500
          }}
        >
          <Cpu size={14} color="#a855f7" />
          <span>Performance</span>
        </button>

        <button
          onClick={handleEndTask}
          style={{
            marginLeft: 'auto',
            padding: '5px 14px',
            backgroundColor: '#dc2626',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '11.5px',
            fontWeight: 600
          }}
        >
          End Task
        </button>
      </div>

      {endTaskNotice && (
        <div style={{
          backgroundColor: '#064e3b',
          color: '#34d399',
          padding: '8px 16px',
          fontSize: '12px',
          fontWeight: 500,
          borderBottom: '1px solid #059669',
          textAlign: 'center'
        }}>
          {endTaskNotice}
        </div>
      )}

      {activeTab === 'processes' ? (
        <div style={{ flex: 1, overflowY: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ backgroundColor: '#232323', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', color: '#9ca3af', fontSize: '11.5px' }}>
                <th style={{ padding: '8px 16px', fontWeight: 500 }}>Name</th>
                <th style={{ padding: '8px 12px', fontWeight: 500 }}>Status</th>
                <th style={{ padding: '8px 12px', fontWeight: 500 }}>CPU</th>
                <th style={{ padding: '8px 12px', fontWeight: 500 }}>Memory</th>
                <th style={{ padding: '8px 12px', fontWeight: 500 }}>Disk</th>
              </tr>
            </thead>
            <tbody>
              {processes.map((proc) => {
                const isSelected = selectedProcess === proc.id;
                return (
                  <tr
                    key={proc.id}
                    onClick={() => setSelectedProcess(proc.id)}
                    style={{
                      backgroundColor: isSelected ? 'rgba(0, 120, 212, 0.25)' : 'transparent',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.04)',
                      cursor: 'pointer'
                    }}
                  >
                    <td style={{ padding: '8px 16px', color: '#ffffff', fontWeight: 500 }}>{proc.name}</td>
                    <td style={{ padding: '8px 12px', color: proc.status.includes('Ready') ? '#4ade80' : '#cbd5e1' }}>{proc.status}</td>
                    <td style={{ padding: '8px 12px', color: '#cbd5e1' }}>{proc.cpu}</td>
                    <td style={{ padding: '8px 12px', color: '#cbd5e1' }}>{proc.memory}</td>
                    <td style={{ padding: '8px 12px', color: '#cbd5e1' }}>{proc.disk}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <div style={{ flex: 1, padding: '20px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ backgroundColor: '#252525', borderRadius: '8px', padding: '16px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ fontWeight: 600, color: '#38bdf8' }}>CPU — AMD Ryzen 7 5800H</span>
              <span style={{ fontWeight: 700 }}>{cpuUsage}%</span>
            </div>
            <div style={{ width: '100%', height: '8px', backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '4px', overflow: 'hidden' }}>
              <div style={{ width: `${cpuUsage}%`, height: '100%', backgroundColor: '#0078d4', transition: 'width 0.4s' }} />
            </div>
            <div style={{ marginTop: '10px', fontSize: '11.5px', color: '#9ca3af' }}>
              Base speed: 3.20 GHz | Sockets: 1 | Cores: 8 | Logical processors: 16
            </div>
          </div>

          <div style={{ backgroundColor: '#252525', borderRadius: '8px', padding: '16px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ fontWeight: 600, color: '#a855f7' }}>Memory — DDR4 3200MHz</span>
              <span style={{ fontWeight: 700 }}>{ramUsage} GB / 16.0 GB (51%)</span>
            </div>
            <div style={{ width: '100%', height: '8px', backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '4px', overflow: 'hidden' }}>
              <div style={{ width: '51%', height: '100%', backgroundColor: '#8b5cf6' }} />
            </div>
            <div style={{ marginTop: '10px', fontSize: '11.5px', color: '#9ca3af' }}>
              Speed: 3200 MHz | Slots used: 2 of 2 | Form factor: SODIMM
            </div>
          </div>
        </div>
      )}

      <div style={{
        padding: '6px 14px',
        backgroundColor: '#1a1a1a',
        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontSize: '11px',
        color: '#9ca3af'
      }}>
        <span>Processes: {processes.length}</span>
        <span>CPU Usage: {cpuUsage}%</span>
        <span>Physical Memory: 51%</span>
      </div>
    </div>
  );
};
