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
  const [usedBrackets, setUsedBrackets] = useState(new Set());
  const [attemptsLeft, setAttemptsLeft] = useState(4);
  const [gameStatus, setGameStatus] = useState('playing'); // 'playing' | 'won' | 'lost'
  const [showGuide, setShowGuide] = useState(true);
  const [logs, setLogs] = useState([]);
  const [hoveredWord, setHoveredWord] = useState(null);
  const [hoveredBracket, setHoveredBracket] = useState(null);
  const [inputGuess, setInputGuess] = useState('');
  
  const logEndRef = useRef(null);
  const vaultInputRef = useRef(null);

  // Initialize a new hacking puzzle
  const initGame = () => {
    // Pick 10 random words from the pool
    const shuffled = [...WORD_POOL].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 10);
    const target = selected[Math.floor(Math.random() * selected.length)];
    
    setCandidates(selected);
    setTargetWord(target);
    setDudsRemoved(new Set());
    setUsedBrackets(new Set());
    setAttemptsLeft(4);
    setGameStatus('playing');
    setLogs([
      'ROBCO INDUSTRIES (TM) TERMLINK PROTOCOL',
      'KRISNA CYBERSECURITY VAULT - OVERRIDE SYSTEM v4.09',
      'ENTER PASSWORD TO OVERRIDE RESTRICTED ACCESS',
      '--------------------------------------------------',
      '[!] MISI: Temukan 1 kata sandi rahasia di memory dump.',
      '[!] Klik kata hijau untuk menebak, atau gunakan celah kurung.',
      'ATTEMPTS REMAINING: [ ■ ■ ■ ■ ]'
    ]);
    setInputGuess('');
    setTimeout(() => vaultInputRef.current?.focus(), 50);
  };

  useEffect(() => {
    initGame();
  }, []);

  useEffect(() => {
    logEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  // Generate 8 left rows and 8 right rows.
  // 10 candidate words are placed (5 on the left, 5 on the right).
  // Remaining rows get bracket bonus pairs.
  const { leftRows, rightRows } = useMemo(() => {
    if (!candidates.length) return { leftRows: [], rightRows: [] };

    const baseAddr = 0xf240;
    const brackets = [['(', ')'], ['[', ']'], ['{', '}'], ['<', '>']];

    // Left column gets words at indices 0..4 (in rows 0, 2, 4, 6, 7)
    // Right column gets words at indices 5..9 (in rows 0, 2, 4, 5, 7)
    const leftWordRowMap = { 0: candidates[0], 2: candidates[1], 4: candidates[2], 6: candidates[3], 7: candidates[4] };
    const rightWordRowMap = { 0: candidates[5], 2: candidates[6], 4: candidates[7], 5: candidates[8], 7: candidates[9] };

    const buildRow = (rowIdx, isRight, wordMap) => {
      const addrNum = baseAddr + (isRight ? 16 + rowIdx : rowIdx) * 12;
      const addr = '0x' + addrNum.toString(16).toUpperCase();
      const word = wordMap[rowIdx];

      let chars = '';
      while (chars.length < 12) {
        chars += GARBAGE_CHARS[Math.floor(Math.random() * GARBAGE_CHARS.length)];
      }

      let chunks = [];
      if (word) {
        // Place word with garbage prefix and suffix
        const insertPos = Math.floor(Math.random() * (12 - word.length));
        const pre = chars.slice(0, insertPos);
        const post = chars.slice(insertPos + word.length);
        chunks = [
          { type: 'garbage', text: pre },
          { type: 'word', text: word },
          { type: 'garbage', text: post }
        ];
      } else {
        // Place a bonus bracket pair
        const b = brackets[Math.floor(Math.random() * brackets.length)];
        const bContent = GARBAGE_CHARS[Math.floor(Math.random() * GARBAGE_CHARS.length)] + 
                         GARBAGE_CHARS[Math.floor(Math.random() * GARBAGE_CHARS.length)];
        const bracketStr = b[0] + bContent + b[1];
        const bracketId = `bracket-${isRight ? 'r' : 'l'}-${rowIdx}`;
        const pre = chars.slice(0, 3);
        const post = chars.slice(3 + bracketStr.length);
        chunks = [
          { type: 'garbage', text: pre },
          { type: 'bracket', text: bracketStr, id: bracketId },
          { type: 'garbage', text: post }
        ];
      }

      return { addr, chunks };
    };

    const lRows = [];
    const rRows = [];
    for (let i = 0; i < 8; i++) {
      lRows.push(buildRow(i, false, leftWordRowMap));
      rRows.push(buildRow(i, true, rightWordRowMap));
    }

    return { leftRows: lRows, rightRows: rRows };
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
        `> [TEBAKAN]: ${word}`,
        '> HASIL: AKSES DITERIMA! PASSWORD BENAR!',
        '> OTORITAS: ROOT SECURITY ADMINISTRATOR',
        '> [SECRET FLAG]: KRISNA{CYBER_VAULT_OVERRIDE_GRANTED_2026}',
        '> Seluruh sistem keamanan berhasil dibuka.',
        '> Ketik "hack" untuk main lagi atau klik "Exit" untuk keluar.'
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
        `> [TEBAKAN]: ${word}`,
        '> HASIL: ENTRY DENIED (Password Salah)',
        `> LIKENESS = ${likeness}/${targetWord.length} (huruf yang cocok di posisi sama)`,
        '> TERMINAL LOCKED OUT! KESEMPATAN HABIS!',
        '> PROTOKOL PENCEGAHAN PENYUSUP DIAKTIFKAN.',
        `> Password yang benar adalah: ${targetWord}`,
        '> Klik tombol [Reset] di atas untuk mencoba cipher baru.'
      ]);
    } else {
      setLogs(prev => [
        ...prev,
        `> [TEBAKAN]: ${word}`,
        '> HASIL: ENTRY DENIED (Password Salah)',
        `> LIKENESS = ${likeness}/${targetWord.length} (${likeness} huruf posisinya persis cocok)`,
        `> SISA KESEMPATAN: [ ${attemptsBar.trim()} ]`
      ]);
    }
  };

  const handleBracketClick = (bracketItem) => {
    if (gameStatus !== 'playing') return;
    if (usedBrackets.has(bracketItem.id)) return;

    playHackerKeySound();
    setUsedBrackets(prev => new Set([...prev, bracketItem.id]));

    // 50% chance reset attempts to 4, 50% chance remove a dud word
    if (Math.random() > 0.4 && attemptsLeft < 4) {
      setAttemptsLeft(4);
      setLogs(prev => [
        ...prev,
        `> [CELAH MEMORI]: ${bracketItem.text}`,
        '> ALLOWANCE REPLENISHED (Kesempatan Mencoba Dipulihkan Penuh)!',
        '> ATTEMPTS REMAINING: [ ■ ■ ■ ■ ]'
      ]);
    } else {
      const availableDuds = candidates.filter(w => w !== targetWord && !dudsRemoved.has(w));
      if (availableDuds.length > 0) {
        const removed = availableDuds[Math.floor(Math.random() * availableDuds.length)];
        setDudsRemoved(prev => new Set([...prev, removed]));
        setLogs(prev => [
          ...prev,
          `> [CELAH MEMORI]: ${bracketItem.text}`,
          `> DUD REMOVED: Kata palsu "${removed}" dinonaktifkan.`
        ]);
      } else {
        setLogs(prev => [
          ...prev,
          `> [CELAH MEMORI]: ${bracketItem.text}`,
          '> BUFFER CLEARED (Tidak ada dud tersisa).'
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

    if (clean === 'HACK' || clean === 'RESTART' || clean === 'RESET') {
      initGame();
      return;
    }

    if (clean === 'HELP' || clean === 'PANDUAN') {
      setShowGuide(prev => !prev);
      return;
    }

    if (candidates.includes(clean)) {
      handleWordSelect(clean);
    } else {
      setLogs(prev => [
        ...prev,
        `> ${clean}`,
        '> ERROR: Kata tersebut tidak ada dalam memory dump.'
      ]);
    }
  };

  const renderChunk = (c, cIdx) => {
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
            fontWeight: 700,
            padding: '0 1px'
          }}
          title={isDud ? `"${c.text}" telah dieliminasi (bukan password)` : `Klik untuk menebak "${c.text}"`}
        >
          {isDud ? '......' : c.text}
        </span>
      );
    }

    if (c.type === 'bracket') {
      const isUsed = usedBrackets.has(c.id);
      return (
        <span
          key={cIdx}
          onMouseEnter={() => !isUsed && setHoveredBracket(c.text)}
          onMouseLeave={() => setHoveredBracket(null)}
          onClick={() => handleBracketClick(c)}
          style={{
            cursor: isUsed ? 'default' : 'pointer',
            color: isUsed ? '#166534' : '#38bdf8',
            backgroundColor: isUsed ? 'transparent' : 'rgba(56, 189, 248, 0.12)',
            textDecoration: isUsed ? 'line-through' : 'none',
            padding: '0 2px',
            borderRadius: '2px'
          }}
          title={isUsed ? 'Celah memori telah digunakan' : 'Celah memori: Klik untuk bonus eliminasi dud atau reset kesempatan!'}
        >
          {isUsed ? '....' : c.text}
        </span>
      );
    }

    return <span key={cIdx} style={{ opacity: 0.65 }}>{c.text}</span>;
  };

  return (
    <div
      onClick={() => vaultInputRef.current?.focus()}
      style={{
        backgroundColor: '#05130b',
        color: '#22c55e',
        fontFamily: '"Cascadia Code", Consolas, "Lucida Console", monospace',
        fontSize: 'clamp(11px, 2vw, 13px)',
        lineHeight: 1.45,
        padding: '14px',
        borderRadius: '6px',
        border: '1px solid #15803d',
        boxShadow: 'inset 0 0 24px rgba(34, 197, 94, 0.12)',
        userSelect: 'none',
        marginBottom: '16px',
        overflowX: 'auto'
      }}
    >
      {/* Top Header Bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #166534', paddingBottom: '10px', marginBottom: '12px', flexWrap: 'wrap', gap: '8px' }}>
        <div>
          <div style={{ fontWeight: 700, letterSpacing: '0.5px' }}>ROBCO INDUSTRIES (TM) TERMLINK PROTOCOL</div>
          <div style={{ fontSize: '11px', color: '#86efac', marginTop: '2px' }}>
            KRISNA CYBERSECURITY VAULT - OVERRIDE SYSTEM v4.09
          </div>
        </div>

        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              playClickSound();
              setShowGuide(prev => !prev);
            }}
            style={{
              backgroundColor: showGuide ? 'rgba(56, 189, 248, 0.2)' : 'rgba(255, 255, 255, 0.08)',
              border: '1px solid #38bdf8',
              color: '#38bdf8',
              padding: '4px 10px',
              fontSize: '11px',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: 600
            }}
          >
            {showGuide ? '[ Sembunyikan Panduan ]' : '[ Buka Panduan Cara Main ]'}
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              initGame();
            }}
            style={{
              backgroundColor: 'rgba(34, 197, 94, 0.15)',
              border: '1px solid #22c55e',
              color: '#4ade80',
              padding: '4px 10px',
              fontSize: '11px',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Reset
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onExit();
            }}
            style={{
              backgroundColor: 'rgba(239, 68, 68, 0.15)',
              border: '1px solid #ef4444',
              color: '#f87171',
              padding: '4px 10px',
              fontSize: '11px',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Exit
          </button>
        </div>
      </div>

      {/* Guide Box (Penjelasan Cara Bermain Langsung di Antarmuka Game) */}
      {showGuide && (
        <div
          style={{
            backgroundColor: 'rgba(0, 20, 10, 0.75)',
            border: '1px solid #22c55e',
            borderRadius: '5px',
            padding: '10px 14px',
            marginBottom: '14px',
            fontSize: '12px',
            lineHeight: 1.5,
            color: '#dcfce7'
          }}
        >
          <div style={{ fontWeight: 700, color: '#4ade80', marginBottom: '6px', fontSize: '12.5px', borderBottom: '1px solid rgba(34, 197, 94, 0.3)', paddingBottom: '4px' }}>
            PANDUAN LENGKAP CARA BERMAIN (ROBCO HACKING PROTOCOL):
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '8px 16px' }}>
            <div>
              <strong style={{ color: '#86efac' }}>1. Tujuan Utama:</strong>
              <div>Tebak 1 KATA SANDI RAHASIA yang benar dari kumpulan kata hijau berhuruf kapital (contoh: ACCESS, KERNEL, SYSTEM, dll).</div>
            </div>
            <div>
              <strong style={{ color: '#86efac' }}>2. Cara Memilih Kata:</strong>
              <div>Klik langsung kata hijau yang dicurigai pada memori dump, ATAU ketik kata tersebut pada kolom VAULT:\&gt; lalu Enter.</div>
            </div>
            <div>
              <strong style={{ color: '#86efac' }}>3. Petunjuk Likeness (Kunci Menang):</strong>
              <div>Jika tebakan salah, sistem memberi nilai LIKENESS. Contoh: Likeness = 2/6 artinya ada 2 huruf yang cocok sama persis pada urutan posisi yang sama.</div>
            </div>
            <div>
              <strong style={{ color: '#86efac' }}>4. Celah Memori Bonus (Kurung):</strong>
              <div>Klik pasangan kurung biru muda seperti (...), [...], {'{...}'}, atau &lt;...&gt; untuk membuang kata salah (Dud Removed) atau memulihkan 4 kesempatan mencoba!</div>
            </div>
          </div>
          <div style={{ marginTop: '6px', fontSize: '11px', color: '#86efac', opacity: 0.9 }}>
            Kesempatan Mencoba: Anda memiliki 4 kesempatan (■ ■ ■ ■) sebelum terminal terkunci.
          </div>
        </div>
      )}

      {/* Status Bar / Attempts Remaining */}
      <div style={{ marginBottom: '10px', fontSize: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '6px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span>ATTEMPTS REMAINING:</span>
          <span style={{ color: attemptsLeft <= 1 ? '#f87171' : '#4ade80', fontWeight: 700, letterSpacing: '2px', fontSize: '13px' }}>
            {'■ '.repeat(Math.max(0, attemptsLeft)) + '□ '.repeat(Math.max(0, 4 - attemptsLeft))}
          </span>
        </div>

        <div style={{ fontSize: '11px', color: '#86efac' }}>
          Target: Kata 6 Huruf | Total Kata Tersedia: {candidates.length} Kata
        </div>
      </div>

      {/* Interactive Cursor Hover Indicator */}
      <div
        style={{
          padding: '6px 10px',
          backgroundColor: 'rgba(0, 0, 0, 0.45)',
          border: '1px solid #166534',
          borderRadius: '4px',
          marginBottom: '12px',
          fontSize: '11.5px',
          color: hoveredWord ? '#4ade80' : hoveredBracket ? '#38bdf8' : '#86efac',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '4px'
        }}
      >
        <span>
          {hoveredWord ? (
            <>KURSOR MEMORI: &gt; <strong style={{ textDecoration: 'underline' }}>{hoveredWord}</strong> (Klik untuk menebak kata ini)</>
          ) : hoveredBracket ? (
            <>CELAH MEMORI: &gt; <strong>{hoveredBracket}</strong> (Klik untuk bonus eliminasi dud atau reset kesempatan)</>
          ) : (
            <>[i] Arahkan kursor dan klik kata hijau di memory dump untuk menebak kata sandi rahasia.</>
          )}
        </span>
        <span style={{ fontSize: '10.5px', opacity: 0.85 }}>
          Status: {gameStatus === 'playing' ? 'Aktif' : gameStatus === 'won' ? 'Akses Diterima' : 'Terkunci'}
        </span>
      </div>

      {/* Main Grid: Left/Right Memory Dumps & Log Sidepanel */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
        {/* Memory Hex Grid (2 Columns: Left & Right) */}
        <div style={{ flex: '1 1 300px', minWidth: '260px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '8px' }}>
          {/* Column Left (8 Rows) */}
          <div>
            {leftRows.map((row, idx) => (
              <div key={idx} style={{ display: 'flex', gap: '8px', marginBottom: '3px', fontFamily: 'monospace' }}>
                <span style={{ color: '#15803d', opacity: 0.85 }}>{row.addr}</span>
                <span>{row.chunks.map((c, cIdx) => renderChunk(c, cIdx))}</span>
              </div>
            ))}
          </div>

          {/* Column Right (8 Rows) */}
          <div>
            {rightRows.map((row, idx) => (
              <div key={idx} style={{ display: 'flex', gap: '8px', marginBottom: '3px', fontFamily: 'monospace' }}>
                <span style={{ color: '#15803d', opacity: 0.85 }}>{row.addr}</span>
                <span>{row.chunks.map((c, cIdx) => renderChunk(c, cIdx))}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Logs Output Box */}
        <div
          style={{
            flex: '1 1 240px',
            backgroundColor: 'rgba(0, 0, 0, 0.45)',
            border: '1px solid #166534',
            borderRadius: '4px',
            padding: '10px',
            maxHeight: '220px',
            overflowY: 'auto',
            fontSize: '11.5px',
            lineHeight: 1.45
          }}
        >
          {logs.map((log, lIdx) => (
            <div
              key={lIdx}
              style={{
                color: log.includes('HASIL: AKSES DITERIMA') ? '#4ade80' : log.includes('ENTRY DENIED') || log.includes('LOCKED OUT') ? '#f87171' : log.startsWith('>') ? '#a7f3d0' : '#86efac',
                marginBottom: '4px',
                fontWeight: log.includes('HASIL:') ? 700 : 'normal'
              }}
            >
              {log}
            </div>
          ))}
          <div ref={logEndRef} />
        </div>
      </div>

      {/* Interactive Input Form */}
      <form onSubmit={handleInputSubmit} style={{ marginTop: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span style={{ color: '#4ade80', fontWeight: 700 }}>VAULT:\&gt;</span>
        <input
          ref={vaultInputRef}
          type="text"
          value={inputGuess}
          onChange={(e) => setInputGuess(e.target.value.toUpperCase())}
          placeholder={gameStatus === 'playing' ? "Ketik kata sandi (contoh: ACCESS) lalu Enter..." : "Ketik 'hack' untuk main lagi atau 'exit' untuk keluar..."}
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            border: 'none',
            borderBottom: '1px solid #22c55e',
            color: '#ffffff',
            fontFamily: 'inherit',
            fontSize: '13px',
            outline: 'none',
            padding: '4px 6px'
          }}
          autoFocus
        />
        <button
          type="submit"
          style={{
            backgroundColor: '#166534',
            color: '#dcfce7',
            border: '1px solid #22c55e',
            padding: '5px 14px',
            fontSize: '11.5px',
            borderRadius: '3px',
            cursor: 'pointer',
            fontWeight: 600
          }}
        >
          Enter
        </button>
      </form>
    </div>
  );
};
