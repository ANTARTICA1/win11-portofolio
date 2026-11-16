import React, { useState, useEffect, useRef, useCallback } from 'react';
import { RotateCcw, Play, Sparkles, Trophy, FastForward } from 'lucide-react';
import { playCardSlideSound, playHackerSuccessSound, playClickSound } from '../../utils/sound';
import './SolitaireApp.css';

const SUITS = [
  { name: 'spades', symbol: '♠', color: 'black' },
  { name: 'hearts', symbol: '♥', color: 'red' },
  { name: 'diamonds', symbol: '♦', color: 'red' },
  { name: 'clubs', symbol: '♣', color: 'black' }
];

const RANKS = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

const createDeck = () => {
  const deck = [];
  SUITS.forEach(suit => {
    RANKS.forEach((rank, idx) => {
      deck.push({
        id: `${suit.name}-${rank}`,
        suit: suit.name,
        symbol: suit.symbol,
        rank,
        value: idx + 1,
        color: suit.color,
        isFaceUp: false
      });
    });
  });
  return deck;
};

const shuffle = (array) => {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

export const SolitaireApp = () => {
  const [stock, setStock] = useState([]);
  const [waste, setWaste] = useState([]);
  const [foundations, setFoundations] = useState([[], [], [], []]);
  const [tableau, setTableau] = useState([[], [], [], [], [], [], []]);
  const [selectedCardInfo, setSelectedCardInfo] = useState(null);
  const [history, setHistory] = useState([]);
  const [score, setScore] = useState(0);
  const [moves, setMoves] = useState(0);
  const [timeSec, setTimeSec] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isWon, setIsWon] = useState(false);

  const canvasRef = useRef(null);
  const animFrameRef = useRef(null);
  const tableRef = useRef(null);

  // Initialize a new game
  const initGame = useCallback(() => {
    const deck = shuffle(createDeck());
    const newTableau = [[], [], [], [], [], [], []];
    
    // Deal tableau cards (1 to 7)
    let cardIdx = 0;
    for (let col = 0; col < 7; col++) {
      for (let row = 0; row <= col; row++) {
        const card = { ...deck[cardIdx] };
        if (row === col) card.isFaceUp = true;
        newTableau[col].push(card);
        cardIdx++;
      }
    }

    const newStock = deck.slice(cardIdx).map(c => ({ ...c, isFaceUp: false }));

    setStock(newStock);
    setWaste([]);
    setFoundations([[], [], [], []]);
    setTableau(newTableau);
    setSelectedCardInfo(null);
    setHistory([]);
    setScore(0);
    setMoves(0);
    setTimeSec(0);
    setIsPlaying(true);
    setIsWon(false);

    if (animFrameRef.current) {
      cancelAnimationFrame(animFrameRef.current);
    }
  }, []);

  useEffect(() => {
    initGame();
  }, [initGame]);

  // Timer
  useEffect(() => {
    if (!isPlaying || isWon) return;
    const interval = setInterval(() => {
      setTimeSec(prev => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [isPlaying, isWon]);

  // Save state for undo
  const saveState = () => {
    setHistory(prev => [
      ...prev,
      {
        stock: JSON.parse(JSON.stringify(stock)),
        waste: JSON.parse(JSON.stringify(waste)),
        foundations: JSON.parse(JSON.stringify(foundations)),
        tableau: JSON.parse(JSON.stringify(tableau)),
        score,
        moves
      }
    ]);
  };

  const handleUndo = () => {
    if (history.length === 0) return;
    playClickSound();
    const last = history[history.length - 1];
    setStock(last.stock);
    setWaste(last.waste);
    setFoundations(last.foundations);
    setTableau(last.tableau);
    setScore(last.score);
    setMoves(last.moves);
    setSelectedCardInfo(null);
    setHistory(prev => prev.slice(0, -1));
  };

  // Stock Click: Draw to Waste or Recycle
  const handleStockClick = () => {
    playCardSlideSound();
    saveState();
    setMoves(prev => prev + 1);

    if (stock.length > 0) {
      const drawnCard = { ...stock[stock.length - 1], isFaceUp: true };
      setStock(prev => prev.slice(0, -1));
      setWaste(prev => [...prev, drawnCard]);
    } else {
      // Recycle Waste to Stock
      if (waste.length > 0) {
        const recycled = waste.map(c => ({ ...c, isFaceUp: false })).reverse();
        setStock(recycled);
        setWaste([]);
        setScore(prev => Math.max(0, prev - 20));
      }
    }
    setSelectedCardInfo(null);
  };

  // Move validation helpers
  const canMoveToFoundation = (card, foundationIndex) => {
    const targetFoundation = foundations[foundationIndex];
    if (targetFoundation.length === 0) {
      return card.value === 1; // Must be Ace
    }
    const topCard = targetFoundation[targetFoundation.length - 1];
    return card.suit === topCard.suit && card.value === topCard.value + 1;
  };

  const canMoveToTableau = (card, colIndex) => {
    const targetCol = tableau[colIndex];
    if (targetCol.length === 0) {
      return card.value === 13; // Must be King on empty space
    }
    const topCard = targetCol[targetCol.length - 1];
    return card.color !== topCard.color && card.value === topCard.value - 1;
  };

  // Execute Move from Selected Card to Destination
  const executeMove = (destinationType, destColOrFoundationIdx) => {
    if (!selectedCardInfo) return false;
    const { source, colIndex, cardIndex, cards } = selectedCardInfo;

    saveState();
    playCardSlideSound();

    // 1. Move to Foundation (Single card only)
    if (destinationType === 'foundation') {
      if (cards.length > 1) return false;
      const card = cards[0];
      if (!canMoveToFoundation(card, destColOrFoundationIdx)) return false;

      // Remove from source
      if (source === 'waste') {
        setWaste(prev => prev.slice(0, -1));
      } else if (source === 'tableau') {
        setTableau(prev => {
          const updated = [...prev];
          const col = [...updated[colIndex]];
          col.pop();
          if (col.length > 0 && !col[col.length - 1].isFaceUp) {
            col[col.length - 1] = { ...col[col.length - 1], isFaceUp: true };
            setScore(s => s + 5);
          }
          updated[colIndex] = col;
          return updated;
        });
      }

      // Add to foundation
      setFoundations(prev => {
        const updated = [...prev];
        updated[destColOrFoundationIdx] = [...updated[destColOrFoundationIdx], card];
        return updated;
      });

      setScore(s => s + 10);
      setMoves(m => m + 1);
      setSelectedCardInfo(null);
      return true;
    }

    // 2. Move to Tableau (Single or multiple cards)
    if (destinationType === 'tableau') {
      const leadCard = cards[0];
      if (!canMoveToTableau(leadCard, destColOrFoundationIdx)) return false;

      // Remove from source
      if (source === 'waste') {
        setWaste(prev => prev.slice(0, -1));
        setScore(s => s + 5);
      } else if (source === 'tableau') {
        setTableau(prev => {
          const updated = [...prev];
          const col = [...updated[colIndex]];
          const remaining = col.slice(0, cardIndex);
          if (remaining.length > 0 && !remaining[remaining.length - 1].isFaceUp) {
            remaining[remaining.length - 1] = { ...remaining[remaining.length - 1], isFaceUp: true };
            setScore(s => s + 5);
          }
          updated[colIndex] = remaining;
          return updated;
        });
      } else if (source === 'foundation') {
        setFoundations(prev => {
          const updated = [...prev];
          updated[colIndex] = updated[colIndex].slice(0, -1);
          return updated;
        });
        setScore(s => Math.max(0, s - 15));
      }

      // Add to target tableau
      setTableau(prev => {
        const updated = [...prev];
        updated[destColOrFoundationIdx] = [...updated[destColOrFoundationIdx], ...cards];
        return updated;
      });

      setMoves(m => m + 1);
      setSelectedCardInfo(null);
      return true;
    }

    return false;
  };

  // Quick auto-move to any legal foundation
  const tryAutoMoveToFoundation = (card, source, colIdx) => {
    for (let fIdx = 0; fIdx < 4; fIdx++) {
      if (canMoveToFoundation(card, fIdx)) {
        saveState();
        playCardSlideSound();

        if (source === 'waste') {
          setWaste(prev => prev.slice(0, -1));
        } else if (source === 'tableau') {
          setTableau(prev => {
            const updated = [...prev];
            const col = [...updated[colIdx]];
            col.pop();
            if (col.length > 0 && !col[col.length - 1].isFaceUp) {
              col[col.length - 1] = { ...col[col.length - 1], isFaceUp: true };
              setScore(s => s + 5);
            }
            updated[colIdx] = col;
            return updated;
          });
        }

        setFoundations(prev => {
          const updated = [...prev];
          updated[fIdx] = [...updated[fIdx], card];
          return updated;
        });

        setScore(s => s + 10);
        setMoves(m => m + 1);
        setSelectedCardInfo(null);
        return true;
      }
    }
    return false;
  };

  // Check victory condition
  useEffect(() => {
    const totalFoundations = foundations.reduce((sum, f) => sum + f.length, 0);
    if (totalFoundations === 52 && !isWon) {
      setIsWon(true);
      playHackerSuccessSound();
    }
  }, [foundations, isWon]);

  // Check if Auto-Finish is possible
  const canAutoFinish = tableau.every(col => col.every(c => c.isFaceUp)) && stock.length === 0;

  const handleAutoFinish = () => {
    playClickSound();
    // Move all remaining cards to foundations immediately
    const allFoundations = [
      SUITS[0].name,
      SUITS[1].name,
      SUITS[2].name,
      SUITS[3].name
    ].map(suitName => {
      return RANKS.map((rank, idx) => ({
        id: `${suitName}-${rank}`,
        suit: suitName,
        symbol: SUITS.find(s => s.name === suitName).symbol,
        rank,
        value: idx + 1,
        color: SUITS.find(s => s.name === suitName).color,
        isFaceUp: true
      }));
    });

    setFoundations(allFoundations);
    setWaste([]);
    setTableau([[], [], [], [], [], [], []]);
    setScore(prev => prev + 500);
    setIsWon(true);
  };

  // Demo win trigger for instant visual testing
  const handleDemoWin = () => {
    handleAutoFinish();
  };

  // -------------------------------------------------------------
  // THE ICONIC RETRO WINNING CASCADE ANIMATION (WINDOWS 95/XP)
  // -------------------------------------------------------------
  useEffect(() => {
    if (!isWon) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;

    // Pre-create the 52 cards ordered from Kings down to Aces
    const bouncingCards = [];
    for (let val = 13; val >= 1; val--) {
      for (let sIdx = 0; sIdx < 4; sIdx++) {
        const suit = SUITS[sIdx];
        const rank = RANKS[val - 1];
        bouncingCards.push({
          suit: suit.name,
          symbol: suit.symbol,
          color: suit.color,
          rank,
          x: (canvas.width * 0.45) + (sIdx * 60) - 90,
          y: 70,
          vx: (Math.random() * 5 + 3) * (Math.random() > 0.5 ? 1 : -1),
          vy: -(Math.random() * 5 + 2),
          gravity: 0.45,
          bounce: -0.82,
          w: Math.min(74, canvas.width * 0.12),
          h: Math.min(104, canvas.width * 0.17),
          active: false,
          done: false
        });
      }
    }

    let activeCardIndex = 0;
    if (bouncingCards.length > 0) {
      bouncingCards[0].active = true;
    }

    // Helper to draw a single crisp card on the canvas
    const drawCard = (card) => {
      const { x, y, w, h, rank, symbol, color } = card;

      // Card shadow & border
      ctx.fillStyle = '#000000';
      ctx.fillRect(x + 1, y + 1, w, h);

      ctx.fillStyle = '#ffffff';
      ctx.fillRect(x, y, w, h);

      ctx.strokeStyle = 'rgba(0,0,0,0.2)';
      ctx.lineWidth = 1;
      ctx.strokeRect(x, y, w, h);

      // Rank & Suit text
      ctx.fillStyle = color === 'red' ? '#dc2626' : '#111827';
      ctx.font = `bold ${Math.floor(w * 0.22)}px Arial`;
      ctx.fillText(rank, x + 5, y + Math.floor(w * 0.24));

      ctx.font = `${Math.floor(w * 0.2)}px Arial`;
      ctx.fillText(symbol, x + 5, y + Math.floor(w * 0.46));

      // Center Big Symbol
      ctx.font = `${Math.floor(w * 0.45)}px Arial`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(symbol, x + w / 2, y + h / 2);
      ctx.textAlign = 'start';
      ctx.textBaseline = 'alphabetic';
    };

    let frameCount = 0;

    const loop = () => {
      frameCount++;

      // Activate next card periodically or when current bounces away
      if (frameCount % 12 === 0 && activeCardIndex < bouncingCards.length - 1) {
        activeCardIndex++;
        bouncingCards[activeCardIndex].active = true;
      }

      // DO NOT clear rect! This is the legendary cascading trailing effect!
      bouncingCards.forEach(card => {
        if (!card.active || card.done) return;

        drawCard(card);

        // Physics update
        card.vy += card.gravity;
        card.x += card.vx;
        card.y += card.vy;

        // Bounce off bottom floor
        if (card.y + card.h >= canvas.height) {
          card.y = canvas.height - card.h;
          card.vy *= card.bounce;

          // Add a tiny random horizontal variation on each bounce
          card.vx += (Math.random() - 0.5) * 0.5;
        }

        // When off-screen
        if (card.x + card.w < -100 || card.x > canvas.width + 100) {
          card.done = true;
        }
      });

      animFrameRef.current = requestAnimationFrame(loop);
    };

    animFrameRef.current = requestAnimationFrame(loop);

    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [isWon]);

  return (
    <div className="solitaire-app-container">
      {/* Top Menu Controls Bar */}
      <div className="solitaire-menu-bar">
        <div className="solitaire-menu-left">
          <button type="button" className="solitaire-btn" onClick={initGame} title="Mulai permainan kartu baru">
            <Play size={13} />
            <span>Game Baru</span>
          </button>
          <button
            type="button"
            className="solitaire-btn"
            onClick={handleUndo}
            disabled={history.length === 0}
            style={{ opacity: history.length === 0 ? 0.5 : 1 }}
            title="Kembalikan langkah sebelumnya"
          >
            <RotateCcw size={13} />
            <span>Undo</span>
          </button>
          {canAutoFinish && (
            <button type="button" className="solitaire-btn accent" onClick={handleAutoFinish} title="Selesaikan kartu otomatis!">
              <FastForward size={13} />
              <span>Auto-Finish</span>
            </button>
          )}
          <button type="button" className="solitaire-btn" onClick={handleDemoWin} title="Uji animasi kartu memantul klasik">
            <Sparkles size={13} />
            <span>Demo Win</span>
          </button>
        </div>

        <div className="solitaire-menu-right">
          <span className="solitaire-stat">Skor: <strong>{score}</strong></span>
          <span className="solitaire-stat">Langkah: <strong>{moves}</strong></span>
          <span className="solitaire-stat">
            Waktu: <strong>{Math.floor(timeSec / 60)}:{(timeSec % 60).toString().padStart(2, '0')}</strong>
          </span>
        </div>
      </div>

      {/* Main Solitaire Green Felt Playing Table */}
      <div className="solitaire-table" ref={tableRef}>
        {/* Top Deck: Stock, Waste, and 4 Foundations */}
        <div className="solitaire-top-row">
          <div className="solitaire-stock-waste-group">
            {/* Stock Pile */}
            <div
              className={`solitaire-slot ${stock.length > 0 ? '' : 'active-target'}`}
              onClick={handleStockClick}
              title={stock.length > 0 ? "Klik untuk buka kartu" : "Klik untuk daur ulang tumpukan kartu"}
            >
              {stock.length > 0 ? (
                <div className="solitaire-card face-down" />
              ) : (
                <div className="solitaire-slot-hint">↺</div>
              )}
            </div>

            {/* Waste Pile */}
            <div
              className="solitaire-slot"
              onClick={() => {
                if (waste.length > 0) {
                  const topWaste = waste[waste.length - 1];
                  setSelectedCardInfo({
                    source: 'waste',
                    colIndex: 0,
                    cardIndex: waste.length - 1,
                    cards: [topWaste]
                  });
                }
              }}
              onDoubleClick={() => {
                if (waste.length > 0) {
                  tryAutoMoveToFoundation(waste[waste.length - 1], 'waste', 0);
                }
              }}
            >
              {waste.length > 0 && (
                <div
                  className={`solitaire-card face-up ${selectedCardInfo?.source === 'waste' ? 'selected' : ''}`}
                >
                  <div className={`solitaire-card-corner ${waste[waste.length - 1].color === 'red' ? 'color-red' : 'color-black'}`}>
                    <span className="solitaire-card-rank">{waste[waste.length - 1].rank}</span>
                    <span className="solitaire-card-suit">{waste[waste.length - 1].symbol}</span>
                  </div>
                  <div className={`solitaire-card-center ${waste[waste.length - 1].color === 'red' ? 'color-red' : 'color-black'}`}>
                    {waste[waste.length - 1].symbol}
                  </div>
                  <div className={`solitaire-card-corner bottom ${waste[waste.length - 1].color === 'red' ? 'color-red' : 'color-black'}`}>
                    <span className="solitaire-card-rank">{waste[waste.length - 1].rank}</span>
                    <span className="solitaire-card-suit">{waste[waste.length - 1].symbol}</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* 4 Foundation Piles (Spades, Hearts, Diamonds, Clubs) */}
          <div className="solitaire-foundations-group">
            {foundations.map((foundation, fIdx) => {
              const topCard = foundation[foundation.length - 1];
              const isSelected = selectedCardInfo?.source === 'foundation' && selectedCardInfo.colIndex === fIdx;

              return (
                <div
                  key={fIdx}
                  className="solitaire-slot"
                  onClick={() => {
                    if (selectedCardInfo) {
                      executeMove('foundation', fIdx);
                    } else if (topCard) {
                      setSelectedCardInfo({
                        source: 'foundation',
                        colIndex: fIdx,
                        cardIndex: foundation.length - 1,
                        cards: [topCard]
                      });
                    }
                  }}
                >
                  {topCard ? (
                    <div className={`solitaire-card face-up ${isSelected ? 'selected' : ''}`}>
                      <div className={`solitaire-card-corner ${topCard.color === 'red' ? 'color-red' : 'color-black'}`}>
                        <span className="solitaire-card-rank">{topCard.rank}</span>
                        <span className="solitaire-card-suit">{topCard.symbol}</span>
                      </div>
                      <div className={`solitaire-card-center ${topCard.color === 'red' ? 'color-red' : 'color-black'}`}>
                        {topCard.symbol}
                      </div>
                      <div className={`solitaire-card-corner bottom ${topCard.color === 'red' ? 'color-red' : 'color-black'}`}>
                        <span className="solitaire-card-rank">{topCard.rank}</span>
                        <span className="solitaire-card-suit">{topCard.symbol}</span>
                      </div>
                    </div>
                  ) : (
                    <div className="solitaire-slot-hint">{SUITS[fIdx].symbol}</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Tableau Area (7 Columns) */}
        <div className="solitaire-tableau-row">
          {tableau.map((col, colIdx) => (
            <div
              key={colIdx}
              className="solitaire-tableau-col"
              onClick={() => {
                if (selectedCardInfo && col.length === 0) {
                  executeMove('tableau', colIdx);
                }
              }}
            >
              {col.length === 0 && (
                <div className="solitaire-slot" style={{ position: 'absolute', top: 0, left: 0 }} />
              )}

              {col.map((card, cardIdx) => {
                const isSelected =
                  selectedCardInfo?.source === 'tableau' &&
                  selectedCardInfo.colIndex === colIdx &&
                  selectedCardInfo.cardIndex <= cardIdx;

                const topOffset = cardIdx * (card.isFaceUp ? 22 : 14);

                return (
                  <div
                    key={card.id}
                    className="solitaire-tableau-card-wrapper"
                    style={{ top: `${topOffset}px`, zIndex: cardIdx + 1 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (!card.isFaceUp) return;

                      if (selectedCardInfo) {
                        // Attempt to place selected cards on this card
                        const moved = executeMove('tableau', colIdx);
                        if (!moved) {
                          // If move invalid, select this card instead
                          const cardsToMove = col.slice(cardIdx);
                          setSelectedCardInfo({
                            source: 'tableau',
                            colIndex: colIdx,
                            cardIndex: cardIdx,
                            cards: cardsToMove
                          });
                        }
                      } else {
                        // Select this card and all cards below it in column
                        const cardsToMove = col.slice(cardIdx);
                        setSelectedCardInfo({
                          source: 'tableau',
                          colIndex: colIdx,
                          cardIndex: cardIdx,
                          cards: cardsToMove
                        });
                      }
                    }}
                    onDoubleClick={(e) => {
                      e.stopPropagation();
                      if (card.isFaceUp && cardIdx === col.length - 1) {
                        tryAutoMoveToFoundation(card, 'tableau', colIdx);
                      }
                    }}
                  >
                    <div className={`solitaire-card ${card.isFaceUp ? 'face-up' : 'face-down'} ${isSelected ? 'selected' : ''}`}>
                      {card.isFaceUp && (
                        <>
                          <div className={`solitaire-card-corner ${card.color === 'red' ? 'color-red' : 'color-black'}`}>
                            <span className="solitaire-card-rank">{card.rank}</span>
                            <span className="solitaire-card-suit">{card.symbol}</span>
                          </div>
                          <div className={`solitaire-card-center ${card.color === 'red' ? 'color-red' : 'color-black'}`}>
                            {card.symbol}
                          </div>
                          <div className={`solitaire-card-corner bottom ${card.color === 'red' ? 'color-red' : 'color-black'}`}>
                            <span className="solitaire-card-rank">{card.rank}</span>
                            <span className="solitaire-card-suit">{card.symbol}</span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* The Iconic Win Bouncing Cards Cascade Canvas */}
      {isWon && <canvas ref={canvasRef} className="solitaire-win-canvas" />}

      {/* Victory Dialog Modal */}
      {isWon && (
        <div className="solitaire-victory-modal">
          <Trophy size={42} color="#facc15" style={{ margin: '0 auto 12px' }} />
          <div className="solitaire-victory-title">VICTORY!</div>
          <div className="solitaire-victory-stats">
            Selamat! Anda berhasil menyelesaikan Windows Classic Solitaire.
            <br />
            Skor Akhir: <strong>{score}</strong> | Total Langkah: <strong>{moves}</strong>
            <br />
            Waktu: <strong>{Math.floor(timeSec / 60)} menit {timeSec % 60} detik</strong>
          </div>
          <button
            type="button"
            className="solitaire-btn accent"
            style={{ margin: '0 auto', padding: '8px 20px', fontSize: '13px' }}
            onClick={initGame}
          >
            Main Lagi
          </button>
        </div>
      )}
    </div>
  );
};
