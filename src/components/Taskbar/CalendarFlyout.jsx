import React, { useState } from 'react';
import { ChevronUp, ChevronDown, Bell, Calendar as CalIcon } from 'lucide-react';
import { playClickSound } from '../../utils/sound';

export const CalendarFlyout = ({ isOpen, onClose, accentColor }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  if (!isOpen) return null;

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const daysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const totalDays = new Date(year, month + 1, 0).getDate();

  const handlePrevMonth = () => {
    playClickSound();
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    playClickSound();
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const today = new Date();
  const isCurrentMonth = today.getFullYear() === year && today.getMonth() === month;

  return (
    <div
      className="anim-flyout"
      style={{
        position: 'fixed',
        bottom: 'calc(var(--taskbar-height) + 12px)',
        right: '12px',
        width: '340px',
        backgroundColor: 'rgba(32, 32, 32, 0.94)',
        backdropFilter: 'blur(30px) saturate(150%)',
        WebkitBackdropFilter: 'blur(30px) saturate(150%)',
        borderRadius: '12px',
        border: '1px solid rgba(255, 255, 255, 0.12)',
        boxShadow: '0 16px 40px rgba(0, 0, 0, 0.6)',
        padding: '20px',
        zIndex: 10001,
        color: '#ffffff'
      }}
      onClick={(e) => e.stopPropagation()}
    >
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: '14px',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        marginBottom: '16px'
      }}>
        <div>
          <h3 style={{ fontSize: '15px', fontWeight: 600 }}>
            {monthNames[month]} {year}
          </h3>
          <span style={{ fontSize: '11px', color: '#9ca3af' }}>
            {today.toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </span>
        </div>

        <div style={{ display: 'flex', gap: '4px' }}>
          <button
            onClick={handlePrevMonth}
            style={{ background: 'none', border: 'none', color: '#cbd5e1', cursor: 'pointer', padding: '4px' }}
          >
            <ChevronUp size={16} />
          </button>
          <button
            onClick={handleNextMonth}
            style={{ background: 'none', border: 'none', color: '#cbd5e1', cursor: 'pointer', padding: '4px' }}
          >
            <ChevronDown size={16} />
          </button>
        </div>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(7, 1fr)',
        textAlign: 'center',
        fontSize: '11px',
        color: '#9ca3af',
        fontWeight: 600,
        marginBottom: '8px'
      }}>
        {daysOfWeek.map((day, i) => (
          <div key={i}>{day}</div>
        ))}
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(7, 1fr)',
        gap: '4px',
        textAlign: 'center',
        fontSize: '12px'
      }}>
        {Array.from({ length: firstDay }).map((_, i) => (
          <div key={`empty-${i}`} style={{ height: '32px' }} />
        ))}

        {Array.from({ length: totalDays }).map((_, i) => {
          const dayNum = i + 1;
          const isToday = isCurrentMonth && today.getDate() === dayNum;

          return (
            <div
              key={dayNum}
              style={{
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                backgroundColor: isToday ? accentColor : 'transparent',
                color: isToday ? '#ffffff' : '#e2e8f0',
                fontWeight: isToday ? 700 : 400,
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                if (!isToday) e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
              }}
              onMouseLeave={(e) => {
                if (!isToday) e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              {dayNum}
            </div>
          );
        })}
      </div>

      <div style={{
        marginTop: '16px',
        paddingTop: '12px',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
      }}>
        <Bell size={15} color="#22c55e" />
        <span style={{ fontSize: '11.5px', color: '#cbd5e1' }}>
          🟢 Siap untuk sesi wawancara (Interview Ready)
        </span>
      </div>
    </div>
  );
};
