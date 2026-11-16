// Lightweight Chess AI Engine with Minimax and Alpha-Beta Pruning
// Zero external dependencies - pure math and evaluation heuristics

const PIECE_VALUES = {
  p: 100,
  n: 320,
  b: 330,
  r: 500,
  q: 900,
  k: 20000
};

// Piece-Square Tables (White perspective; row 0 is rank 8, row 7 is rank 1)
const PAWN_PST = [
  [0,  0,  0,  0,  0,  0,  0,  0],
  [50, 50, 50, 50, 50, 50, 50, 50],
  [10, 10, 20, 30, 30, 20, 10, 10],
  [5,  5, 10, 25, 25, 10,  5,  5],
  [0,  0,  0, 20, 20,  0,  0,  0],
  [5, -5,-10,  0,  0,-10, -5,  5],
  [5, 10, 10,-20,-20, 10, 10,  5],
  [0,  0,  0,  0,  0,  0,  0,  0]
];

const KNIGHT_PST = [
  [-50,-40,-30,-30,-30,-30,-40,-50],
  [-40,-20,  0,  0,  0,  0,-20,-40],
  [-30,  0, 10, 15, 15, 10,  0,-30],
  [-30,  5, 15, 20, 20, 15,  5,-30],
  [-30,  0, 15, 20, 20, 15,  0,-30],
  [-30,  5, 10, 15, 15, 10,  5,-30],
  [-40,-20,  0,  5,  5,  0,-20,-40],
  [-50,-40,-30,-30,-30,-30,-40,-50]
];

const BISHOP_PST = [
  [-20,-10,-10,-10,-10,-10,-10,-20],
  [-10,  0,  0,  0,  0,  0,  0,-10],
  [-10,  0,  5, 10, 10,  5,  0,-10],
  [-10,  5,  5, 10, 10,  5,  5,-10],
  [-10,  0, 10, 10, 10, 10,  0,-10],
  [-10, 10, 10, 10, 10, 10, 10,-10],
  [-10,  5,  0,  0,  0,  0,  5,-10],
  [-20,-10,-10,-10,-10,-10,-10,-20]
];

const ROOK_PST = [
  [0,  0,  0,  0,  0,  0,  0,  0],
  [5, 10, 10, 10, 10, 10, 10,  5],
  [-5,  0,  0,  0,  0,  0,  0, -5],
  [-5,  0,  0,  0,  0,  0,  0, -5],
  [-5,  0,  0,  0,  0,  0,  0, -5],
  [-5,  0,  0,  0,  0,  0,  0, -5],
  [-5,  0,  0,  0,  0,  0,  0, -5],
  [0,  0,  0,  5,  5,  0,  0,  0]
];

const QUEEN_PST = [
  [-20,-10,-10, -5, -5,-10,-10,-20],
  [-10,  0,  0,  0,  0,  0,  0,-10],
  [-10,  0,  5,  5,  5,  5,  0,-10],
  [-5,  0,  5,  5,  5,  5,  0, -5],
  [0,  0,  5,  5,  5,  5,  0, -5],
  [-10,  5,  5,  5,  5,  5,  0,-10],
  [-10,  0,  5,  0,  0,  0,  0,-10],
  [-20,-10,-10, -5, -5,-10,-10,-20]
];

const KING_PST_MIDGAME = [
  [-30,-40,-40,-50,-50,-40,-40,-30],
  [-30,-40,-40,-50,-50,-40,-40,-30],
  [-30,-40,-40,-50,-50,-40,-40,-30],
  [-30,-40,-40,-50,-50,-40,-40,-30],
  [-20,-30,-30,-40,-40,-30,-20,-20],
  [-10,-20,-20,-20,-20,-20,-10,-10],
  [20, 20,  0,  0,  0,  0, 20, 20],
  [20, 30, 10,  0,  0, 10, 30, 20]
];

const getPSTValue = (pieceType, color, row, col) => {
  const r = color === 'w' ? row : 7 - row;
  const c = col;
  switch (pieceType) {
    case 'p': return PAWN_PST[r][c];
    case 'n': return KNIGHT_PST[r][c];
    case 'b': return BISHOP_PST[r][c];
    case 'r': return ROOK_PST[r][c];
    case 'q': return QUEEN_PST[r][c];
    case 'k': return KING_PST_MIDGAME[r][c];
    default: return 0;
  }
};

/**
 * Evaluate the board from White's perspective (+ score favors White, - favors Black)
 */
export const evaluateBoard = (chess) => {
  let totalScore = 0;
  const board = chess.board();

  for (let r = 0; r < 8; r++) {
    for (let c = 0; c < 8; c++) {
      const piece = board[r][c];
      if (piece) {
        const val = PIECE_VALUES[piece.type] + getPSTValue(piece.type, piece.color, r, c);
        if (piece.color === 'w') {
          totalScore += val;
        } else {
          totalScore -= val;
        }
      }
    }
  }

  return totalScore;
};

/**
 * Order moves to maximize Alpha-Beta pruning cutoffs:
 * Captures first (MVV-LVA heuristic), then checks, then standard moves
 */
const orderMoves = (moves) => {
  return moves.sort((a, b) => {
    let scoreA = 0;
    let scoreB = 0;
    if (a.captured) {
      scoreA += (PIECE_VALUES[a.captured] || 100) * 10 - (PIECE_VALUES[a.piece] || 100);
    }
    if (b.captured) {
      scoreB += (PIECE_VALUES[b.captured] || 100) * 10 - (PIECE_VALUES[b.piece] || 100);
    }
    if (a.promotion) scoreA += 800;
    if (b.promotion) scoreB += 800;
    return scoreB - scoreA;
  });
};

/**
 * Minimax algorithm with Alpha-Beta pruning
 */
const minimax = (chess, depth, alpha, beta, isMaximizing) => {
  if (depth === 0 || chess.isGameOver()) {
    if (chess.isCheckmate()) {
      return isMaximizing ? -99999 : 99999;
    }
    if (chess.isDraw()) {
      return 0;
    }
    return evaluateBoard(chess);
  }

  const moves = orderMoves(chess.moves({ verbose: true }));

  if (isMaximizing) {
    let maxEval = -Infinity;
    for (const move of moves) {
      chess.move(move);
      const evaluation = minimax(chess, depth - 1, alpha, beta, false);
      chess.undo();
      maxEval = Math.max(maxEval, evaluation);
      alpha = Math.max(alpha, evaluation);
      if (beta <= alpha) break; // Beta cutoff
    }
    return maxEval;
  } else {
    let minEval = Infinity;
    for (const move of moves) {
      chess.move(move);
      const evaluation = minimax(chess, depth - 1, alpha, beta, true);
      chess.undo();
      minEval = Math.min(minEval, evaluation);
      beta = Math.min(beta, evaluation);
      if (beta <= alpha) break; // Alpha cutoff
    }
    return minEval;
  }
};

/**
 * Find best move for the AI
 * @param {Chess} chess - chess.js instance
 * @param {string} difficulty - 'easy' | 'medium' | 'hard'
 * @returns {object|null} verbose move object
 */
export const findBestMove = (chess, difficulty = 'medium') => {
  const moves = chess.moves({ verbose: true });
  if (moves.length === 0) return null;

  const isMaximizing = chess.turn() === 'w';

  // Level 1: Easy (Pemula) - Plays heuristic capture or random move with slight blunders
  if (difficulty === 'easy') {
    // 35% random move, otherwise 1-ply capture preference
    if (Math.random() < 0.35) {
      return moves[Math.floor(Math.random() * moves.length)];
    }
    let bestMove = null;
    let bestVal = isMaximizing ? -Infinity : Infinity;
    for (const move of moves) {
      chess.move(move);
      const val = evaluateBoard(chess) + (Math.random() * 40 - 20);
      chess.undo();
      if (isMaximizing ? val > bestVal : val < bestVal) {
        bestVal = val;
        bestMove = move;
      }
    }
    return bestMove || moves[0];
  }

  // Level 2: Medium (Menengah) - Minimax Depth 2
  if (difficulty === 'medium') {
    let bestMove = null;
    let bestVal = isMaximizing ? -Infinity : Infinity;
    const ordered = orderMoves(moves);

    for (const move of ordered) {
      chess.move(move);
      const val = minimax(chess, 1, -Infinity, Infinity, !isMaximizing);
      chess.undo();

      if (isMaximizing ? val > bestVal : val < bestVal) {
        bestVal = val;
        bestMove = move;
      }
    }
    return bestMove || moves[0];
  }

  // Level 3: Hard (Master) - Minimax Depth 3 with Alpha-Beta Pruning
  let bestMove = null;
  let bestVal = isMaximizing ? -Infinity : Infinity;
  let alpha = -Infinity;
  let beta = Infinity;
  const ordered = orderMoves(moves);

  for (const move of ordered) {
    chess.move(move);
    const val = minimax(chess, 2, alpha, beta, !isMaximizing);
    chess.undo();

    if (isMaximizing) {
      if (val > bestVal) {
        bestVal = val;
        bestMove = move;
      }
      alpha = Math.max(alpha, val);
    } else {
      if (val < bestVal) {
        bestVal = val;
        bestMove = move;
      }
      beta = Math.min(beta, val);
    }

    if (beta <= alpha) break;
  }

  return bestMove || moves[0];
};
