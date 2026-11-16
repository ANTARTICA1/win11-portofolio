import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Chess } from 'chess.js';
import { RotateCcw, ArrowLeftRight, Play, Trophy, AlertTriangle, ShieldCheck } from 'lucide-react';
import { ChessPiece } from './ChessPieces';
import { findBestMove } from './ChessEngine';
import { 
  playChessMoveSound, 
  playChessCaptureSound, 
  playChessCheckSound, 
  playChessGameOverSound,
  playClickSound 
} from '../../utils/sound';
import './ChessApp.css';

const FILES = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const RANKS = ['8', '7', '6', '5', '4', '3', '2', '1'];

export const ChessApp = () => {
  const [chess] = useState(() => new Chess());
  const [fen, setFen] = useState(chess.fen());
  const [selectedSquare, setSelectedSquare] = useState(null);
  const [legalMoves, setLegalMoves] = useState([]);
  const [lastMove, setLastMove] = useState(null);
  const [difficulty, setDifficulty] = useState('medium'); // 'easy' | 'medium' | 'hard'
  const [playerColor, setPlayerColor] = useState('w'); // 'w' | 'b'
  const [isBotThinking, setIsBotThinking] = useState(false);
  const [moveHistory, setMoveHistory] = useState([]);
  const [capturedWhite, setCapturedWhite] = useState([]);
  const [capturedBlack, setCapturedBlack] = useState([]);
  const [promotionPending, setPromotionPending] = useState(null); // { from, to }
  const [gameStatus, setGameStatus] = useState('active'); // 'active' | 'check' | 'checkmate' | 'draw'
  const [statusMessage, setStatusMessage] = useState('Giliran Anda (Putih)');

  const boardRef = useRef(null);

  // Sync board status and captures
  const updateGameStatus = useCallback(() => {
    setFen(chess.fen());

    if (chess.isCheckmate()) {
      setGameStatus('checkmate');
      const winner = chess.turn() === 'w' ? 'Hitam' : 'Putih';
      setStatusMessage(`SKAKMAT - ${winner} Menang!`);
      playChessGameOverSound();
      return;
    }

    if (chess.isDraw()) {
      setGameStatus('draw');
      if (chess.isStalemate()) {
        setStatusMessage('Remis (Stalemate)!');
      } else if (chess.isThreefoldRepetition()) {
        setStatusMessage('Remis (Pengulangan Tiga Kali)!');
      } else if (chess.isInsufficientMaterial()) {
        setStatusMessage('Remis (Materi Tidak Cukup)!');
      } else {
        setStatusMessage('Remis (50 Langkah Tanpa Makan)!');
      }
      playChessGameOverSound();
      return;
    }

    if (chess.inCheck()) {
      setGameStatus('check');
      const inCheckPlayer = chess.turn() === 'w' ? 'Putih' : 'Hitam';
      setStatusMessage(`SKAK pada Raja ${inCheckPlayer}!`);
      playChessCheckSound();
      return;
    }

    setGameStatus('active');
    const turnName = chess.turn() === 'w' ? 'Putih' : 'Hitam';
    const isPlayerTurn = chess.turn() === playerColor;
    setStatusMessage(isPlayerTurn ? `Giliran Anda (${turnName})` : `Komputer Sedang Berpikir (${turnName})...`);
  }, [chess, playerColor]);

  // Recalculate captured pieces from move history
  const updateCapturedPieces = useCallback(() => {
    const history = chess.history({ verbose: true });
    const whiteCaps = [];
    const blackCaps = [];

    history.forEach(move => {
      if (move.captured) {
        if (move.color === 'w') {
          blackCaps.push(move.captured); // White captured a black piece
        } else {
          whiteCaps.push(move.captured); // Black captured a white piece
        }
      }
    });

    setCapturedWhite(whiteCaps);
    setCapturedBlack(blackCaps);
  }, [chess]);

  // Handle AI turn
  useEffect(() => {
    if (chess.isGameOver()) return;
    const isBotTurn = chess.turn() !== playerColor;

    if (isBotTurn) {
      setIsBotThinking(true);
      const timer = setTimeout(() => {
        const bestMove = findBestMove(chess, difficulty);
        if (bestMove) {
          const result = chess.move(bestMove);
          if (result) {
            setLastMove({ from: result.from, to: result.to });
            if (result.captured) {
              playChessCaptureSound();
            } else {
              playChessMoveSound();
            }
            setMoveHistory(chess.history({ verbose: true }));
            updateCapturedPieces();
            updateGameStatus();
          }
        }
        setIsBotThinking(false);
      }, 350);

      return () => clearTimeout(timer);
    }
  }, [chess, playerColor, difficulty, fen, updateCapturedPieces, updateGameStatus]);

  // Execute player move
  const executeMove = (from, to, promotion = 'q') => {
    try {
      const move = chess.move({ from, to, promotion });
      if (move) {
        setLastMove({ from, to });
        if (move.captured) {
          playChessCaptureSound();
        } else {
          playChessMoveSound();
        }
        setSelectedSquare(null);
        setLegalMoves([]);
        setMoveHistory(chess.history({ verbose: true }));
        updateCapturedPieces();
        updateGameStatus();
        return true;
      }
    } catch {
      return false;
    }
    return false;
  };

  // Square Click Handler
  const handleSquareClick = (square) => {
    if (chess.isGameOver() || isBotThinking) return;
    if (chess.turn() !== playerColor) return;

    // If clicking on an already selected square, deselect
    if (selectedSquare === square) {
      setSelectedSquare(null);
      setLegalMoves([]);
      return;
    }

    // If a square is already selected, check if this is a legal destination
    if (selectedSquare) {
      const isLegal = legalMoves.some(m => m.to === square);
      if (isLegal) {
        const piece = chess.get(selectedSquare);
        // Check if pawn promotion
        const isPromotion = 
          piece && 
          piece.type === 'p' && 
          ((piece.color === 'w' && square[1] === '8') || (piece.color === 'b' && square[1] === '1'));

        if (isPromotion) {
          setPromotionPending({ from: selectedSquare, to: square });
          return;
        }

        executeMove(selectedSquare, square);
        return;
      }
    }

    // Select piece if it belongs to player
    const piece = chess.get(square);
    if (piece && piece.color === playerColor) {
      setSelectedSquare(square);
      const moves = chess.moves({ square, verbose: true });
      setLegalMoves(moves);
      playClickSound();
    } else {
      setSelectedSquare(null);
      setLegalMoves([]);
    }
  };

  // Confirm Pawn Promotion
  const handlePromotionSelect = (promoPiece) => {
    if (!promotionPending) return;
    executeMove(promotionPending.from, promotionPending.to, promoPiece);
    setPromotionPending(null);
  };

  // Reset Game
  const handleResetGame = () => {
    chess.reset();
    setFen(chess.fen());
    setSelectedSquare(null);
    setLegalMoves([]);
    setLastMove(null);
    setMoveHistory([]);
    setCapturedWhite([]);
    setCapturedBlack([]);
    setPromotionPending(null);
    setGameStatus('active');
    setStatusMessage(playerColor === 'w' ? 'Giliran Anda (Putih)' : 'Komputer Sedang Berpikir (Putih)...');
    playClickSound();
  };

  // Undo Move (undo both AI and Player moves)
  const handleUndo = () => {
    if (isBotThinking) return;
    playClickSound();
    // If it's player's turn, undo 2 moves (AI move + Player move)
    if (chess.turn() === playerColor) {
      chess.undo();
      chess.undo();
    } else {
      chess.undo();
    }
    const history = chess.history({ verbose: true });
    setLastMove(history.length > 0 ? { from: history[history.length - 1].from, to: history[history.length - 1].to } : null);
    setSelectedSquare(null);
    setLegalMoves([]);
    setMoveHistory(history);
    updateCapturedPieces();
    updateGameStatus();
  };

  // Flip board perspective
  const handleFlipBoard = () => {
    playClickSound();
    setPlayerColor(prev => (prev === 'w' ? 'b' : 'w'));
  };

  // Find King square if in check
  const getKingInCheckSquare = () => {
    if (!chess.inCheck()) return null;
    const turn = chess.turn();
    const board = chess.board();
    for (let r = 0; r < 8; r++) {
      for (let c = 0; c < 8; c++) {
        const p = board[r][c];
        if (p && p.type === 'k' && p.color === turn) {
          const file = FILES[c];
          const rank = RANKS[r];
          return `${file}${rank}`;
        }
      }
    }
    return null;
  };

  const kingCheckSquare = getKingInCheckSquare();

  // Grid orientation based on player color
  const displayedRanks = playerColor === 'w' ? RANKS : [...RANKS].reverse();
  const displayedFiles = playerColor === 'w' ? FILES : [...FILES].reverse();

  // Group move history into pairs for the table
  const movePairs = [];
  for (let i = 0; i < moveHistory.length; i += 2) {
    movePairs.push({
      num: Math.floor(i / 2) + 1,
      white: moveHistory[i]?.san || '',
      black: moveHistory[i + 1]?.san || ''
    });
  }

  return (
    <div className="chess-app-container">
      {/* Top Toolbar */}
      <div className="chess-toolbar">
        <div className="chess-toolbar-left">
          <button type="button" className="chess-btn accent" onClick={handleResetGame} title="Mulai game catur baru">
            <RotateCcw size={14} />
            <span>Game Baru</span>
          </button>
          <button 
            type="button" 
            className="chess-btn" 
            onClick={handleUndo} 
            disabled={moveHistory.length === 0 || isBotThinking}
            title="Batalkan langkah terakhir"
          >
            <span>Undo</span>
          </button>
          <button type="button" className="chess-btn" onClick={handleFlipBoard} title="Ganti bidak hitam/putih">
            <ArrowLeftRight size={14} />
            <span>Papan: {playerColor === 'w' ? 'Putih' : 'Hitam'}</span>
          </button>
        </div>

        <div className="chess-toolbar-right">
          <label style={{ fontSize: '12px', color: '#9ca3af', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span>Bot AI:</span>
            <select
              className="chess-select"
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              disabled={isBotThinking}
            >
              <option value="easy">Pemula (Depth 1)</option>
              <option value="medium">Menengah (Depth 2)</option>
              <option value="hard">Master (Depth 3 Alpha-Beta)</option>
            </select>
          </label>
        </div>
      </div>

      {/* Main Body */}
      <div className="chess-body">
        {/* 8x8 Chess Board */}
        <div className="chess-board-wrapper">
          <div ref={boardRef} className="chess-board">
            {displayedRanks.map((rank) =>
              displayedFiles.map((file) => {
                const square = `${file}${rank}`;
                const piece = chess.get(square);
                const fileIdx = FILES.indexOf(file);
                const rankIdx = RANKS.indexOf(rank);
                const isLight = (fileIdx + rankIdx) % 2 === 0;

                const isSelected = selectedSquare === square;
                const isLastMove = lastMove && (lastMove.from === square || lastMove.to === square);
                const isKingCheck = kingCheckSquare === square;
                const legalMove = legalMoves.find(m => m.to === square);

                let squareClasses = `chess-square ${isLight ? 'light' : 'dark'}`;
                if (isSelected) squareClasses += ' selected';
                else if (isLastMove) squareClasses += isLight ? ' last-move-light' : ' last-move-dark';
                if (isKingCheck) squareClasses += ' in-check';

                return (
                  <div
                    key={square}
                    className={squareClasses}
                    onClick={() => handleSquareClick(square)}
                  >
                    {/* Rank coordinate on first column */}
                    {file === displayedFiles[0] && (
                      <span className="chess-coord-rank">{rank}</span>
                    )}

                    {/* File coordinate on bottom row */}
                    {rank === displayedRanks[7] && (
                      <span className="chess-coord-file">{file}</span>
                    )}

                    {/* Render Chess Piece */}
                    {piece && (
                      <ChessPiece
                        type={piece.type}
                        color={piece.color}
                        size={typeof window !== 'undefined' && window.innerWidth < 640 ? 36 : 46}
                      />
                    )}

                    {/* Legal move destination indicator */}
                    {legalMove && (
                      legalMove.captured ? (
                        <div className="chess-capture-ring" />
                      ) : (
                        <div className="chess-move-dot" />
                      )
                    )}
                  </div>
                );
              })
            )}
          </div>

          {/* Pawn Promotion Modal Overlay */}
          {promotionPending && (
            <div className="chess-promotion-modal">
              <div className="chess-promotion-title">Pilih Promosi Bidak:</div>
              <div className="chess-promotion-options">
                {[
                  { type: 'q', name: 'Ratu' },
                  { type: 'r', name: 'Benteng' },
                  { type: 'b', name: 'Gajah' },
                  { type: 'n', name: 'Kuda' }
                ].map(p => (
                  <button
                    key={p.type}
                    type="button"
                    className="chess-promotion-btn"
                    onClick={() => handlePromotionSelect(p.type)}
                    title={p.name}
                  >
                    <ChessPiece type={p.type} color={playerColor} size={36} />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Side Panel: Status, Captures, Move History */}
        <div className="chess-side-panel">
          {/* Game Status Badge */}
          <div className={`chess-status-badge ${gameStatus === 'check' ? 'alert' : gameStatus === 'checkmate' ? 'win' : ''}`}>
            {gameStatus === 'check' && <AlertTriangle size={15} />}
            {gameStatus === 'checkmate' && <Trophy size={15} />}
            {gameStatus === 'active' && <ShieldCheck size={15} />}
            <span>{statusMessage}</span>
          </div>

          {/* Captured Pieces Display */}
          <div className="chess-captured-box">
            <div style={{ fontSize: '11px', color: '#9ca3af', fontWeight: 600 }}>Tangkapan Hitam (Bidak Putih):</div>
            <div className="chess-captured-row">
              {capturedWhite.length === 0 ? (
                <span style={{ fontSize: '11px', color: '#6b7280' }}>-</span>
              ) : (
                capturedWhite.map((type, idx) => (
                  <ChessPiece key={idx} type={type} color="w" size={18} />
                ))
              )}
            </div>
            <div style={{ fontSize: '11px', color: '#9ca3af', fontWeight: 600, marginTop: '4px' }}>Tangkapan Putih (Bidak Hitam):</div>
            <div className="chess-captured-row">
              {capturedBlack.length === 0 ? (
                <span style={{ fontSize: '11px', color: '#6b7280' }}>-</span>
              ) : (
                capturedBlack.map((type, idx) => (
                  <ChessPiece key={idx} type={type} color="b" size={18} />
                ))
              )}
            </div>
          </div>

          {/* Move History Log */}
          <div className="chess-history-container">
            <table className="chess-history-table">
              <thead>
                <tr>
                  <th style={{ width: '28px' }}>#</th>
                  <th>Putih</th>
                  <th>Hitam</th>
                </tr>
              </thead>
              <tbody>
                {movePairs.map((pair, idx) => (
                  <tr key={idx} className={idx === movePairs.length - 1 ? 'active-row' : ''}>
                    <td style={{ color: '#9ca3af' }}>{pair.num}.</td>
                    <td>{pair.white}</td>
                    <td>{pair.black}</td>
                  </tr>
                ))}
                {movePairs.length === 0 && (
                  <tr>
                    <td colSpan={3} style={{ textAlign: 'center', color: '#6b7280', padding: '16px 0' }}>
                      Belum ada langkah
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
