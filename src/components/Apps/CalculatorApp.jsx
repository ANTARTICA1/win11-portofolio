import React, { useState, useEffect } from 'react';
import { Delete } from 'lucide-react';
import { playClickSound, playStartupChime } from '../../utils/sound';

export const CalculatorApp = () => {
  const [display, setDisplay] = useState('0');
  const [equation, setEquation] = useState('');
  const [resetNext, setResetNext] = useState(false);

  const triggerEasterEgg = () => {
    playStartupChime();
    window.open('https://www.youtube.com/watch?v=QDia3e12czc', '_blank', 'noopener,noreferrer');
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

    if (nextDisplay === '6969') {
      setTimeout(() => triggerEasterEgg(), 250);
    }
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
    if (display === '6969') {
      triggerEasterEgg();
      return;
    }

    if (!equation) return;
    try {
      const fullExpr = equation + display;
      const sanitized = fullExpr.replace(/×/g, '*').replace(/÷/g, '/');
      const result = Function(`'use strict'; return (${sanitized})`)();
      
      if (Number(result) === 6969 || String(result) === '6969') {
        setDisplay(String(result));
        setTimeout(() => triggerEasterEgg(), 250);
        return;
      }

      setDisplay(String(result));
      setEquation('');
      setResetNext(true);
    } catch {
      setDisplay('Error');
      setResetNext(true);
    }
  };

  // Keyboard navigation support
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
      userSelect: 'none'
    }}>
      <div style={{
        height: '80px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        padding: '0 8px 12px 8px'
      }}>
        <div style={{ fontSize: '12px', color: '#9ca3af', minHeight: '16px' }}>{equation}</div>
        <div style={{ fontSize: '36px', fontWeight: 600, letterSpacing: '-0.5px' }}>{display}</div>
      </div>

      <div style={{
        flex: 1,
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '4px'
      }}>
        <button onClick={handleClear} style={calcBtnStyle('#323232')}>C</button>
        <button onClick={handleBackspace} style={calcBtnStyle('#323232')}><Delete size={16} /></button>
        <button onClick={() => handleOperator('%')} style={calcBtnStyle('#323232')}>%</button>
        <button onClick={() => handleOperator('÷')} style={calcBtnStyle('#323232')}>÷</button>

        <button onClick={() => handleDigit('7')} style={calcBtnStyle('#3b3b3b')}>7</button>
        <button onClick={() => handleDigit('8')} style={calcBtnStyle('#3b3b3b')}>8</button>
        <button onClick={() => handleDigit('9')} style={calcBtnStyle('#3b3b3b')}>9</button>
        <button onClick={() => handleOperator('×')} style={calcBtnStyle('#323232')}>×</button>

        <button onClick={() => handleDigit('4')} style={calcBtnStyle('#3b3b3b')}>4</button>
        <button onClick={() => handleDigit('5')} style={calcBtnStyle('#3b3b3b')}>5</button>
        <button onClick={() => handleDigit('6')} style={calcBtnStyle('#3b3b3b')}>6</button>
        <button onClick={() => handleOperator('-')} style={calcBtnStyle('#323232')}>-</button>

        <button onClick={() => handleDigit('1')} style={calcBtnStyle('#3b3b3b')}>1</button>
        <button onClick={() => handleDigit('2')} style={calcBtnStyle('#3b3b3b')}>2</button>
        <button onClick={() => handleDigit('3')} style={calcBtnStyle('#3b3b3b')}>3</button>
        <button onClick={() => handleOperator('+')} style={calcBtnStyle('#323232')}>+</button>

        <button onClick={() => handleDigit('0')} style={{ ...calcBtnStyle('#3b3b3b'), gridColumn: 'span 2' }}>0</button>
        <button onClick={() => handleDigit('.')} style={calcBtnStyle('#3b3b3b')}>.</button>
        <button onClick={handleEquals} style={{ ...calcBtnStyle('#0078d4'), color: '#fff', fontWeight: 600 }}>=</button>
      </div>
    </div>
  );
};

const calcBtnStyle = (bg) => ({
  backgroundColor: bg,
  border: '1px solid rgba(255, 255, 255, 0.05)',
  borderRadius: '4px',
  color: '#ffffff',
  fontSize: '15px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'background-color 0.1s'
});
