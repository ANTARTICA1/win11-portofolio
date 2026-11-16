import React, { useState, useEffect, useMemo, useRef } from 'react';
import { playHackerKeySound, playHackerDenySound, playHackerSuccessSound, playClickSound } from '../../utils/sound';

const WORD_POOL = [
  'ACCESS', 'CIPHER', 'PACKET', 'SOCKET', 'KERNEL', 'ROUTER',
  'DEFEND', 'SYSTEM', 'SHADOW', 'BINARY', 'BUFFER', 'SERVER',
  'SYNTAX', 'VORTEX', 'VECTOR', 'SIGNAL', 'TUNNEL', 'ATTACK',
  'SECURE', 'BYPASS', 'FIREWL', 'UPLINK', 'CRYPTO', 'TROJAN',
  'NETWRK', 'RADIUS', 'MEMORY', 'CLIENT', 'LOGINS', 'DAEMON'
];

const GARBAGE_CHARS = '!@#$%^&*()_+{}[]:;<>?,./~|=';

const calculateLikeness = (word1, word2) => {
  if (!word1 || !word2) return 0;
  let matches = 0;
  const len = Math.min(word1.length, word2.length);
  for (let i = 0; i < len; i++) {
    if (word1[i] === word2[i]) matches++;
  }
  return matches;
};

export const TerminalHack = ({ onExit }) => {
  const [candidates, setCandidates] = useState([]);
  const [targetWord, setTargetWord] = useState('');
  const [dudsRemoved, setDudsRemoved] = useState(new Set());
  const [attemptsLeft, setAttemptsLeft] = useState(4);
  const [gameStatus, setGameStatus] = useState('playing'); // 'playing' | 'won' | 'lost'
  const [logs, setLogs] = useState([
    'ROBCO INDUSTRIES (TM) TERMLINK PROTOCOL',
    'KRISNA CYBERSECURITY VAULT - OVERRIDE SYSTEM v4.09',
    'ENTER PASSWORD TO OVERRIDE RESTRICTED ACCESS'
  ]);
  const [hoveredWord, setHoveredWord] = useState(null);
  const [inputGuess, setInputGuess] = useState('');
  const logEndRef = useRef(null);

  // Initialize a new hacking puzzle
  const initGame = () => {
    // Pick 12 random words from the pool
    const shuffled = [...WORD_POOL].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 12);
    const target = selected[Math.floor(Math.random() * selected.length)];
    
    setCandidates(selected);
    setTargetWord(target);
    setDudsRemoved(new Set());
    setAttemptsLeft(4);
    setGameStatus('playing');
    setLogs([
      'ROBCO INDUSTRIES (TM) TERMLINK PROTOCOL',
      'KRISNA CYBERSECURITY VAULT - OVERRIDE SYSTEM v4.09',
      'ENTER PASSWORD TO OVERRIDE RESTRICTED ACCESS',
      'ATTEMPTS REMAINING: [ ■ ■ ■ ■ ]'
    ]);
    setInputGuess('');
  };

  useEffect(() => {
    initGame();
  }, []);

  useEffect(() => {
    logEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  // Generate 16 rows of memory dump (2 columns of 8 rows)
  const memoryRows = useMemo(() => {
    if (!candidates.length) return [];
    
    const rows = [];
    let wordIndex = 0;
    const baseAddr = 0xf240;

    for (let i = 0; i < 16; i++) {
      const addrLeft = '0x' + (baseAddr + i * 12).toString(16).toUpperCase();
      const addrRight = '0x' + (baseAddr + (i + 16) * 12).toString(16).toUpperCase();

      const buildChunk = (wIdx) => {
        let chunk = [];
        const hasWord = wIdx < candidates.length && (i % 2 === 0 || i % 3 === 0);
        const word = hasWord ? candidates[wIdx] : null;
        
        let chars = '';
        while (chars.length < 12) {
          chars += GARBAGE_CHARS[Math.floor(Math.random() * GARBAGE_CHARS.length)];
        }

        if (word) {
          const insertPos = Math.floor(Math.random() * (12 - word.length));
          const pre = chars.slice(0, insertPos);
          const post = chars.slice(insertPos + word.length);
          chunk = [
            { type: 'garbage', text: pre },
            { type: 'word', text: word },
            { type: 'garbage', text: post }
          ];
        } else {
          // Check if we can insert a bonus bracket pair: (...) or [...] or {...} or <...>
          const brackets = [['(', ')'], ['[', ']'], ['{', '}'], ['<', '>']];
          const b = brackets[Math.floor(Math.random() * brackets.length)];
          const bContent = GARBAGE_CHARS[Math.floor(Math.random() * GARBAGE_CHARS.length)] + 
                           GARBAGE_CHARS[Math.floor(Math.random() * GARBAGE_CHARS.length)];
          const bracketStr = b[0] + bContent + b[1];
          const pre = chars.slice(0, 3);
          const post = chars.slice(3 + bracketStr.length);
          chunk = [
            { type: 'garbage', text: pre },
            { type: 'bracket', text: bracketStr },
            { type: 'garbage', text: post }
          ];
        }
        return { chunk, nextWIdx: hasWord ? wIdx + 1 : wIdx };
      };

      const left = buildChunk(wordIndex);
      wordIndex = left.nextWIdx;
      const right = buildChunk(wordIndex);
      wordIndex = right.nextWIdx;

      rows.push({
        addrLeft,
        leftChunks: left.chunk,
        addrRight,
        rightChunks: right.chunk
      });
    }

    return rows;
  }, [candidates]);

  const handleWordSelect = (word) => {
    if (gameStatus !== 'playing') return;
    if (dudsRemoved.has(word)) return;

    playHackerKeySound();

    if (word === targetWord) {
      playHackerSuccessSound();
      setGameStatus('won');
      setLogs(prev => [
        ...prev,
        `> ${word}`,
        '> ACCESS GRANTED.',
        '> CLEARANCE LEVEL: ROOT_SECURITY_OPERATOR',
        '> [SECRET FLAG UNLOCKED]: KRISNA{CYBER_VAULT_OVERRIDE_GRANTED_2026}',
        '> Security audit logs verified. All system parameters nominal.',
        '> Type "hack" to test another cipher, or "exit" to leave terminal hack.'
      ]);
      return;
    }

    const likeness = calculateLikeness(word, targetWord);
    playHackerDenySound();
    const nextAttempts = attemptsLeft - 1;
    setAttemptsLeft(nextAttempts);

    const attemptsBar = '■ '.repeat(Math.max(0, nextAttempts)) + '□ '.repeat(Math.max(0, 4 - nextAttempts));

    if (nextAttempts <= 0) {
      setGameStatus('lost');
      setLogs(prev => [
        ...prev,
        `> ${word}`,
        '> ENTRY DENIED.',
        `> LIKENESS = ${likeness}/${targetWord.length}`,
        '> TERMINAL LOCKED OUT.',
        '> INTRUSION PREVENTION SYSTEM ACTIVATED.',
        `> Correct password was: ${targetWord}`,
        '> Type "hack" to reboot security terminal, or "exit" to leave.'
      ]);
    } else {
      setLogs(prev => [
        ...prev,
        `> ${word}`,
        '> ENTRY DENIED.',
        `> LIKENESS = ${likeness}/${targetWord.length} (huruf cocok pada posisi sama)`,
        `> ATTEMPTS REMAINING: [ ${attemptsBar.trim()} ]`
      ]);
    }
  };

  const handleBracketClick = (bracketText) => {
    if (gameStatus !== 'playing') return;
    playHackerKeySound();

    // 50% chance dud removed, 50% chance reset attempts
    if (Math.random() > 0.4 && attemptsLeft < 4) {
      setAttemptsLeft(4);
      setLogs(prev => [
        ...prev,
        `> ${bracketText}`,
        '> ALLOWANCE REPLENISHED.',
        '> ATTEMPTS REMAINING: [ ■ ■ ■ ■ ]'
      ]);
    } else {
      // Find a wrong candidate that hasn't been removed yet
      const availableDuds = candidates.filter(w => w !== targetWord && !dudsRemoved.has(w));
      if (availableDuds.length > 0) {
        const removed = availableDuds[Math.floor(Math.random() * availableDuds.length)];
        setDudsRemoved(prev => new Set([...prev, removed]));
        setLogs(prev => [
          ...prev,
          `> ${bracketText}`,
          `> DUD REMOVED: "${removed}" dinonaktifkan.`
        ]);
      } else {
        setLogs(prev => [
          ...prev,
          `> ${bracketText}`,
          '> BUFFER CLEARED.'
        ]);
      }
    }
  };

  const handleInputSubmit = (e) => {
    e.preventDefault();
    const clean = inputGuess.trim().toUpperCase();
    setInputGuess('');
    if (!clean) return;

    if (clean === 'EXIT' || clean === 'QUIT') {
      if (onExit) onExit();
      return;
    }

    if (clean === 'HACK' || clean === 'RESTART') {
      initGame();
      return;
    }

    if (candidates.includes(clean)) {
      handleWordSelect(clean);
    } else {
      setLogs(prev => [
        ...prev,
        `> ${clean}`,
        '> ERROR: Input tidak ditemukan dalam memory dump.'
      ]);
    }
  };

  return (
    <div
      style={{
        backgroundColor: '#05130b',
        color: '#22c55e',
        fontFamily: '"Cascadia Code", Consolas, "Lucida Console", monospace',
        fontSize: 'clamp(11px, 2vw, 13px)',
        lineHeight: 1.45,
        padding: '12px',
        borderRadius: '6px',
        border: '1px solid #15803d',
        boxShadow: 'inset 0 0 24px rgba(34, 197, 94, 0.12)',
        userSelect: 'none',
        marginBottom: '16px',
        overflowX: 'auto'
      }}
    >
      {/* Header Bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #166534', paddingBottom: '8px', marginBottom: '12px' }}>
        <div>
          <span style={{ fontWeight: 700, letterSpacing: '0.5px' }}>ROBCO INDUSTRIES (TM) TERMLINK PROTOCOL</span>
          <div style={{ fontSize: '11px', color: '#86efac', marginTop: '2px' }}>
            KRISNA SECURITY VAULT - OVERRIDE SYSTEM v4.09
          </div>
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            type="button"
            onClick={initGame}
            style={{
              backgroundColor: 'rgba(34, 197, 94, 0.15)',
              border: '1px solid #22c55e',
              color: '#4ade80',
              padding: '3px 8px',
              fontSize: '11px',
              borderRadius: '3px',
              cursor: 'pointer'
            }}
          >
            Reset
          </button>
          <button
            type="button"
            onClick={onExit}
            style={{
              backgroundColor: 'rgba(239, 68, 68, 0.15)',
              border: '1px solid #ef4444',
              color: '#f87171',
              padding: '3px 8px',
              fontSize: '11px',
              borderRadius: '3px',
              cursor: 'pointer'
            }}
          >
            Exit
          </button>
        </div>
      </div>

      {/* Attempts Remaining Status */}
      <div style={{ marginBottom: '12px', fontSize: '12.5px', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span>ATTEMPTS REMAINING:</span>
        <span style={{ color: attemptsLeft <= 1 ? '#f87171' : '#4ade80', fontWeight: 700, letterSpacing: '2px' }}>
          {'■ '.repeat(Math.max(0, attemptsLeft)) + '□ '.repeat(Math.max(0, 4 - attemptsLeft))}
        </span>
      </div>

      {/* Main Grid: Left/Right Memory Dumps & Log Sidepanel */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {/* Memory Hex Grid */}
        <div style={{ flex: '1 1 280px', minWidth: '240px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '8px' }}>
          {/* Column Left */}
          <div>
            {memoryRows.slice(0, 8).map((row, idx) => (
              <div key={idx} style={{ display: 'flex', gap: '8px', marginBottom: '2px', fontFamily: 'monospace' }}>
                <span style={{ color: '#15803d', opacity: 0.85 }}>{row.addrLeft}</span>
                <span>
                  {row.leftChunks.map((c, cIdx) => {
                    if (c.type === 'word') {
                      const isDud = dudsRemoved.has(c.text);
                      const isHovered = hoveredWord === c.text;
                      return (
                        <span
                          key={cIdx}
                          onMouseEnter={() => setHoveredWord(c.text)}
                          onMouseLeave={() => setHoveredWord(null)}
                          onClick={() => handleWordSelect(c.text)}
                          style={{
                            cursor: isDud ? 'default' : 'pointer',
                            color: isDud ? '#166534' : isHovered ? '#05130b' : '#4ade80',
                            backgroundColor: isHovered && !isDud ? '#22c55e' : 'transparent',
                            textDecoration: isDud ? 'line-through' : 'none',
                            fontWeight: 700
                          }}
                        >
                          {isDud ? '......' : c.text}
                        </span>
                      );
                    }
                    if (c.type === 'bracket') {
                      return (
                        <span
                          key={cIdx}
                          onClick={() => handleBracketClick(c.text)}
                          style={{
                            cursor: 'pointer',
                            color: '#38bdf8',
                            backgroundColor: 'rgba(56, 189, 248, 0.1)'
                          }}
                          title="Click bracket pair for bypass bonus!"
                        >
                          {c.text}
                        </span>
                      );
                    }
                    return <span key={cIdx} style={{ opacity: 0.65 }}>{c.text}</span>;
                  })}
                </span>
              </div>
            ))}
          </div>

          {/* Column Right */}
          <div>
            {memoryRows.slice(8, 16).map((row, idx) => (
              <div key={idx} style={{ display: 'flex', gap: '8px', marginBottom: '2px', fontFamily: 'monospace' }}>
                <span style={{ color: '#15803d', opacity: 0.85 }}>{row.addrRight}</span>
                <span>
                  {row.rightChunks.map((c, cIdx) => {
                    if (c.type === 'word') {
                      const isDud = dudsRemoved.has(c.text);
                      const isHovered = hoveredWord === c.text;
                      return (
                        <span
                          key={cIdx}
                          onMouseEnter={() => setHoveredWord(c.text)}
                          onMouseLeave={() => setHoveredWord(null)}
                          onClick={() => handleWordSelect(c.text)}
                          style={{
                            cursor: isDud ? 'default' : 'pointer',
                            color: isDud ? '#166534' : isHovered ? '#05130b' : '#4ade80',
                            backgroundColor: isHovered && !isDud ? '#22c55e' : 'transparent',
                            textDecoration: isDud ? 'line-through' : 'none',
                            fontWeight: 700
                          }}
                        >
                          {isDud ? '......' : c.text}
                        </span>
                      );
                    }
                    if (c.type === 'bracket') {
                      return (
                        <span
                          key={cIdx}
                          onClick={() => handleBracketClick(c.text)}
                          style={{
                            cursor: 'pointer',
                            color: '#38bdf8',
                            backgroundColor: 'rgba(56, 189, 248, 0.1)'
                          }}
                          title="Click bracket pair for bypass bonus!"
                        >
                          {c.text}
                        </span>
                      );
                    }
                    return <span key={cIdx} style={{ opacity: 0.65 }}>{c.text}</span>;
                  })}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Logs Output Box */}
        <div
          style={{
            flex: '1 1 240px',
            backgroundColor: 'rgba(0, 0, 0, 0.35)',
            border: '1px solid #166534',
            borderRadius: '4px',
            padding: '10px',
            maxHeight: '190px',
            overflowY: 'auto',
            fontSize: '11.5px',
            lineHeight: 1.4
          }}
        >
          {logs.map((log, lIdx) => (
            <div key={lIdx} style={{ color: log.startsWith('>') ? '#a7f3d0' : '#86efac', marginBottom: '4px' }}>
              {log}
            </div>
          ))}
          <div ref={logEndRef} />
        </div>
      </div>

      {/* Interactive Input Form */}
      <form onSubmit={handleInputSubmit} style={{ marginTop: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span style={{ color: '#4ade80', fontWeight: 700 }}>VAULT:\&gt;</span>
        <input
          type="text"
          value={inputGuess}
          onChange={(e) => setInputGuess(e.target.value.toUpperCase())}
          placeholder={gameStatus === 'playing' ? "Ketik kata sandi atau klik kata di memory dump..." : "Ketik 'hack' untuk main lagi atau 'exit' untuk keluar..."}
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            border: 'none',
            borderBottom: '1px solid #22c55e',
            color: '#ffffff',
            fontFamily: 'inherit',
            fontSize: '13px',
            outline: 'none',
            padding: '2px 4px'
          }}
          autoFocus
        />
        <button
          type="submit"
          style={{
            backgroundColor: '#166534',
            color: '#dcfce7',
            border: '1px solid #22c55e',
            padding: '4px 12px',
            fontSize: '11.5px',
            borderRadius: '3px',
            cursor: 'pointer'
          }}
        >
          Enter
        </button>
      </form>
    </div>
  );
};
