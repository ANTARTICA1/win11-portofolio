import React, { useState, useEffect } from 'react';
import { Delete } from 'lucide-react';
import { playClickSound, playStartupChime, playClippySound } from '../../utils/sound';

export const CalculatorApp = ({ onLaunchApp, onTriggerClippy, onTriggerBSOD }) => {
  const [display, setDisplay] = useState('0');
  const [equation, setEquation] = useState('');
  const [resetNext, setResetNext] = useState(false);
  const [easterEggNotice, setEasterEggNotice] = useState(null);

  const triggerEasterEgg = () => {
    playStartupChime();
    window.open('https://www.youtube.com/watch?v=QDia3e12czc', '_blank', 'noopener,noreferrer');
  };

  const checkSpecialCode = (code) => {
    if (code === '6969') {
      setEasterEggNotice('Nice! Membuka frekuensi rahasia...');
      setTimeout(() => triggerEasterEgg(), 400);
    } else if (code === '1337') {
      playStartupChime();
      setDisplay('LEET 1337');
      setEasterEggNotice('Leet Hacker! Coba periksa petunjuk tersembunyi di folder Documents dan Downloads.');
      if (onTriggerClippy) {
        setTimeout(() => onTriggerClippy(), 600);
      }
    } else if (code === '404') {
      setDisplay('404 NOT FOUND');
      setEasterEggNotice('Halaman tidak ditemukan, tapi Agung Krisna siap di-hire!');
    } else if (code === '42') {
      setEasterEggNotice('Jawaban atas Kehidupan, Semesta, dan Segala Sesuatu.');
    }
  };

  const handleDigit = (digit) => {
    playClickSound();
    let nextDisplay;
    if (display === '0' || resetNext) {
      nextDisplay = digit;
      setDisplay(digit);
      setResetNext(false);
    } else {
      nextDisplay = display + digit;
      setDisplay(nextDisplay);
    }

    checkSpecialCode(nextDisplay);
  };

  const handleOperator = (op) => {
    playClickSound();
    setEquation(`${display} ${op} `);
    setResetNext(true);
  };

  const handleClear = () => {
    playClickSound();
    setDisplay('0');
    setEquation('');
    setResetNext(false);
    setEasterEggNotice(null);
  };

  const handleBackspace = () => {
    playClickSound();
    if (display.length > 1) {
      setDisplay(display.slice(0, -1));
    } else {
      setDisplay('0');
    }
  };

  const handleEquals = () => {
    playClickSound();
    checkSpecialCode(display);

    if (!equation) return;
    try {
      const fullExpr = equation + display;
      const sanitized = fullExpr.replace(/×/g, '*').replace(/÷/g, '/');
      const result = Function(`'use strict'; return (${sanitized})`)();
      const strRes = String(result);
      
      checkSpecialCode(strRes);

      setDisplay(strRes);
      setEquation('');
      setResetNext(true);
    } catch {
      setDisplay('Error');
      setResetNext(true);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (['0','1','2','3','4','5','6','7','8','9'].includes(e.key)) {
        handleDigit(e.key);
      } else if (e.key === 'Enter' || e.key === '=') {
        e.preventDefault();
        handleEquals();
      } else if (e.key === 'Backspace') {
        handleBackspace();
      } else if (e.key === 'Escape' || e.key.toLowerCase() === 'c') {
        handleClear();
      } else if (['+', '-', '*', '/'].includes(e.key)) {
        const opMap = { '*': '×', '/': '÷', '+': '+', '-': '-' };
        handleOperator(opMap[e.key]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [display, equation, resetNext]);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      width: '100%',
      backgroundColor: '#202020',
      color: '#ffffff',
      padding: '16px',
      userSelect: 'none',
      fontFamily: 'Segoe UI, sans-serif'
    }}>
      {/* Display Screen */}
      <div style={{
        backgroundColor: 'rgba(0, 0, 0, 0.25)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '8px',
        padding: '12px 14px',
        textAlign: 'right',
        marginBottom: '12px',
        minHeight: '80px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}>
        <div style={{ fontSize: '12px', color: '#9ca3af', height: '16px' }}>
          {equation}
        </div>
        <div style={{ fontSize: '28px', fontWeight: 600, overflowX: 'auto', whiteSpace: 'nowrap' }}>
          {display}
        </div>
      </div>

      {easterEggNotice && (
        <div style={{
          backgroundColor: 'rgba(56, 189, 248, 0.15)',
          border: '1px solid rgba(56, 189, 248, 0.3)',
          borderRadius: '6px',
          padding: '6px 10px',
          fontSize: '11px',
          color: '#38bdf8',
          marginBottom: '10px',
          textAlign: 'center',
          animation: 'fadeIn 0.2s ease-in'
        }}>
          {easterEggNotice}
        </div>
      )}

      {/* Calculator Buttons Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '6px',
        flex: 1
      }}>
        <button className="calc-btn calc-fn" onClick={handleClear}>C</button>
        <button className="calc-btn calc-fn" onClick={handleBackspace}><Delete size={16} /></button>
        <button className="calc-btn calc-fn" onClick={() => handleOperator('÷')}>÷</button>
        <button className="calc-btn calc-op" onClick={() => handleOperator('×')}>×</button>

        <button className="calc-btn" onClick={() => handleDigit('7')}>7</button>
        <button className="calc-btn" onClick={() => handleDigit('8')}>8</button>
        <button className="calc-btn" onClick={() => handleDigit('9')}>9</button>
        <button className="calc-btn calc-op" onClick={() => handleOperator('-')}>-</button>

        <button className="calc-btn" onClick={() => handleDigit('4')}>4</button>
        <button className="calc-btn" onClick={() => handleDigit('5')}>5</button>
        <button className="calc-btn" onClick={() => handleDigit('6')}>6</button>
        <button className="calc-btn calc-op" onClick={() => handleOperator('+')}>+</button>

        <button className="calc-btn" onClick={() => handleDigit('1')}>1</button>
        <button className="calc-btn" onClick={() => handleDigit('2')}>2</button>
        <button className="calc-btn" onClick={() => handleDigit('3')}>3</button>
        <button className="calc-btn calc-eq" onClick={handleEquals} style={{ gridRow: 'span 2' }}>=</button>

        <button className="calc-btn" onClick={() => handleDigit('0')} style={{ gridColumn: 'span 2' }}>0</button>
        <button className="calc-btn" onClick={() => {
          if (!display.includes('.')) handleDigit('.');
        }}>.</button>
      </div>

      <style>{`
        .calc-btn {
          background-color: #323232;
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 6px;
          font-size: 15px;
          font-weight: 500;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color 0.1s;
        }
        .calc-btn:hover {
          background-color: #3c3c3c;
        }
        .calc-btn:active {
          background-color: #4a4a4a;
        }
        .calc-op, .calc-fn {
          background-color: #282828;
          color: #38bdf8;
        }
        .calc-eq {
          background-color: #0078d4;
          color: #ffffff;
        }
        .calc-eq:hover {
          background-color: #106ebe;
        }
      `}</style>
    </div>
  );
};
