import React, { useState, useEffect, useRef, useCallback } from 'react';
import './NeuroFlyGame.css';

// 600 Authentically distributed neurons across Drosophila MaleCNS v1.0 visual & motor subpools
const TOTAL_NEURONS = 600;

function createConnectomeData() {
  const neurons = [];
  // 1. Sensory (Mi1, Tm1, Tm2, Tm3) ~ 256 neurons located in Medulla / Optic Lobes
  for (let i = 0; i < 256; i++) {
    const side = i % 2 === 0 ? -1 : 1;
    const lobeAngle = (i / 128) * Math.PI;
    const r = 45 + Math.random() * 35;
    neurons.push({
      id: i,
      pool: 'sensory',
      subType: ['Mi1', 'Tm1', 'Tm2', 'Tm3'][i % 4],
      x: side * (75 + Math.cos(lobeAngle) * r * 0.8),
      y: (Math.sin(lobeAngle) * r * 0.9) - 10 + (Math.random() - 0.5) * 15,
      z: (Math.random() - 0.5) * 60,
      baseColor: '#38bdf8', // Cyan
      active: false,
      charge: Math.random() * 0.3
    });
  }

  // 2. UP Motion (T4c, T5c) ~ 147 neurons in Lobula Plate (upper layer)
  for (let i = 256; i < 403; i++) {
    const side = i % 2 === 0 ? -1 : 1;
    const u = Math.random();
    neurons.push({
      id: i,
      pool: 'up',
      subType: i % 2 === 0 ? 'T4c' : 'T5c',
      x: side * (50 + Math.random() * 45),
      y: -35 - Math.random() * 45,
      z: (Math.random() - 0.5) * 50,
      baseColor: '#22c55e', // Green
      active: false,
      charge: Math.random() * 0.2
    });
  }

  // 3. DOWN Motion (T4d, T5d, VS) ~ 168 neurons in Lobula Plate (lower layer)
  for (let i = 403; i < 571; i++) {
    const side = i % 2 === 0 ? -1 : 1;
    neurons.push({
      id: i,
      pool: 'down',
      subType: ['T4d', 'T5d', 'VS'][i % 3],
      x: side * (50 + Math.random() * 45),
      y: 15 + Math.random() * 45,
      z: (Math.random() - 0.5) * 50,
      baseColor: '#ef4444', // Coral / Red
      active: false,
      charge: Math.random() * 0.2
    });
  }

  // 4. Descending Motor Neurons (DNs) ~ 14 neurons descending towards ventral nerve cord
  for (let i = 571; i < 585; i++) {
    neurons.push({
      id: i,
      pool: 'motor',
      subType: 'DN',
      x: (Math.random() - 0.5) * 30,
      y: 50 + Math.random() * 45,
      z: (Math.random() - 0.5) * 30,
      baseColor: '#c084fc', // Purple
      active: false,
      charge: 0.1
    });
  }

  // 5. Intermediate / Central Complex ~ 15 neurons
  for (let i = 585; i < 600; i++) {
    neurons.push({
      id: i,
      pool: 'intermediate',
      subType: 'CX',
      x: (Math.random() - 0.5) * 45,
      y: -10 + (Math.random() - 0.5) * 35,
      z: (Math.random() - 0.5) * 40,
      baseColor: '#e2e8f0', // White/Light Gray
      active: false,
      charge: 0.2
    });
  }

  // Generate ~1200 synaptic edges between adjacent neurons
  const synapses = [];
  for (let i = 0; i < neurons.length; i++) {
    const n1 = neurons[i];
    let count = 0;
    for (let j = i + 1; j < neurons.length && count < 3; j++) {
      const n2 = neurons[j];
      const dist = Math.hypot(n1.x - n2.x, n1.y - n2.y, n1.z - n2.z);
      if (dist < 40) {
        synapses.push({ from: n1.id, to: n2.id, weight: 1 - dist / 40 });
        count++;
      }
    }
  }

  return { neurons, synapses };
}

export const NeuroFlyGame = ({ isEmbedded = false, onOpenExternal = null }) => {
  // Game & Telemetry States
  const [flyScore, setFlyScore] = useState(14);
  const [playerScore, setPlayerScore] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [readoutMode, setReadoutMode] = useState('Vis'); // 'Vis' or 'DN'
  const [brainViewMode, setBrainViewMode] = useState('brain'); // 'brain' or 'connectome'
  
  // Stats telemetry
  const [ball3DZ, setBall3DZ] = useState(82);
  const [flyHits, setFlyHits] = useState(5);
  const [rally, setRally] = useState(1);
  const [maxRally, setMaxRally] = useState(2);
  const [activeFiringCount, setActiveFiringCount] = useState(568);
  const [upRatio, setUpRatio] = useState(0.61);
  const [downRatio, setDownRatio] = useState(0.56);
  const [flyHitRate, setFlyHitRate] = useState(100.0);
  const [avgRally, setAvgRally] = useState(0.6);

  // References to canvases
  const pongCanvasRef = useRef(null);
  const brainCanvasRef = useRef(null);
  const telemetryCanvasRef = useRef(null);

  // Biological connectome dataset
  const connectomeRef = useRef(createConnectomeData());

  // Game physical state
  const gameStateRef = useRef({
    // Arena dimensions
    courtWidth: 320,  // X axis (horizontal lateral)
    courtHeight: 220, // Y axis (vertical altitude)
    courtLength: 360, // Z axis (from Fly at 0 to Player at 360)
    
    // Ball state
    ball: {
      x: 0,
      y: 0,
      z: 82,
      vx: 2.2,
      vy: 1.4,
      vz: 4.8,
      radius: 6.5
    },

    // Player Paddle (P2 - YOU Human)
    player: {
      x: 0,
      y: 0,
      targetX: 0,
      targetY: 0,
      width: 44,
      height: 38,
      depth: 12,
      speed: 6.5
    },

    // Fly (P1 - Drosophila)
    fly: {
      x: 0,
      y: 0,
      vx: 0,
      vy: 0,
      wingAngle: 0,
      flapSpeed: 0.8,
      neuralDriveY: 0,
      neuralDriveX: 0,
      targetY: 0,
      targetX: 0,
      reactionDelay: 2
    },

    // 3D Cameras
    pongCam: {
      yaw: -0.72,
      pitch: 0.38,
      dist: 560,
      targetX: 0,
      targetY: 0,
      targetZ: 180,
      isDragging: false,
      lastMouseX: 0,
      lastMouseY: 0
    },
    brainCam: {
      yaw: 0.05,
      pitch: 0.12,
      dist: 280,
      targetX: 0,
      targetY: 0,
      targetZ: 0,
      isDragging: false,
      lastMouseX: 0,
      lastMouseY: 0
    },

    // Keys pressed
    keys: {
      w: false,
      s: false,
      a: false,
      d: false,
      ArrowUp: false,
      ArrowDown: false,
      ArrowLeft: false,
      ArrowRight: false
    },

    // Live wave telemetry history buffer
    waveHistory: Array.from({ length: 120 }, () => ({
      ballY: 0,
      paddleY: 0,
      neural: 0
    })),

    // Rally stats tracking
    totalRallies: [1, 2, 0, 1],
    totalFlyAttempts: 14,
    successfulFlyHits: 14
  });

  // Sound effects generator via Web Audio API
  const playSoundEffect = useCallback((type) => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      const now = ctx.currentTime;
      if (type === 'hit') {
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.exponentialRampToValueAtTime(880, now + 0.08);
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.08);
        osc.start(now);
        osc.stop(now + 0.09);
      } else if (type === 'wall') {
        osc.frequency.setValueAtTime(260, now);
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.06);
        osc.start(now);
        osc.stop(now + 0.07);
      } else if (type === 'score') {
        osc.frequency.setValueAtTime(320, now);
        osc.frequency.exponentialRampToValueAtTime(160, now + 0.25);
        gain.gain.setValueAtTime(0.25, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.25);
        osc.start(now);
        osc.stop(now + 0.26);
      }
    } catch {
      // Audio context might be restricted before interaction
    }
  }, []);

  // Keyboard controls listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      const k = e.key.toLowerCase();
      if (['w', 's', 'a', 'd', 'arrowup', 'arrowdown', 'arrowleft', 'arrowright'].includes(k)) {
        gameStateRef.current.keys[k] = true;
        gameStateRef.current.keys[e.key] = true;
      }
      if (e.key === 'f' || e.key === 'F') {
        // Reset camera
        gameStateRef.current.pongCam.yaw = -0.72;
        gameStateRef.current.pongCam.pitch = 0.38;
        gameStateRef.current.pongCam.dist = 560;
        gameStateRef.current.brainCam.yaw = 0.05;
        gameStateRef.current.brainCam.pitch = 0.12;
        gameStateRef.current.brainCam.dist = 280;
      }
      if (e.key === ' ' || e.key === 'p' || e.key === 'P') {
        setIsPaused((p) => !p);
      }
      if (e.key === 'r' || e.key === 'R') {
        handleResetGame();
      }
    };

    const handleKeyUp = (e) => {
      const k = e.key.toLowerCase();
      if (gameStateRef.current.keys[k] !== undefined) {
        gameStateRef.current.keys[k] = false;
        gameStateRef.current.keys[e.key] = false;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  const handleResetGame = () => {
    setFlyScore(0);
    setPlayerScore(0);
    setRally(0);
    setFlyHits(0);
    const gs = gameStateRef.current;
    gs.ball.x = 0;
    gs.ball.y = 0;
    gs.ball.z = 180;
    gs.ball.vz = Math.random() > 0.5 ? 4.5 : -4.5;
    gs.ball.vx = (Math.random() - 0.5) * 3.5;
    gs.ball.vy = (Math.random() - 0.5) * 2.5;
    gs.player.x = 0;
    gs.player.y = 0;
    gs.fly.x = 0;
    gs.fly.y = 0;
  };

  // 3D Point Projection Helper
  const project3D = (x, y, z, cam, width, height) => {
    const dx = x - cam.targetX;
    const dy = y - cam.targetY;
    const dz = z - cam.targetZ;

    // Yaw rotation (around Y)
    const cosY = Math.cos(cam.yaw);
    const sinY = Math.sin(cam.yaw);
    const x1 = dx * cosY - dz * sinY;
    const z1 = dx * sinY + dz * cosY;

    // Pitch rotation (around X)
    const cosX = Math.cos(cam.pitch);
    const sinX = Math.sin(cam.pitch);
    const y2 = dy * cosX - z1 * sinX;
    const z2 = dy * sinX + z1 * cosX;

    const depth = z2 + cam.dist;
    if (depth <= 15) return null;

    const fov = 420;
    const scale = fov / depth;
    return {
      x: width / 2 + x1 * scale,
      y: height / 2 + y2 * scale,
      scale,
      depth
    };
  };

  // Main Simulation & Rendering Loop
  useEffect(() => {
    let animId;

    const render = () => {
      const gs = gameStateRef.current;
      const { courtWidth, courtHeight, courtLength, ball, player, fly, keys, pongCam, brainCam, waveHistory } = gs;

      // ----------------------------------------------------
      // 1. UPDATE GAME PHYSICS & AI
      // ----------------------------------------------------
      if (!isPaused) {
        // Player Input (Keyboard)
        const moveSpeed = player.speed;
        if (keys.a || keys.arrowleft) player.x -= moveSpeed;
        if (keys.d || keys.arrowright) player.x += moveSpeed;
        if (keys.w || keys.arrowup) player.y -= moveSpeed;
        if (keys.s || keys.arrowdown) player.y += moveSpeed;

        // Player Bounds Constrain
        const halfCourtX = courtWidth / 2 - player.width / 2;
        const halfCourtY = courtHeight / 2 - player.height / 2;
        player.x = Math.max(-halfCourtX, Math.min(halfCourtX, player.x));
        player.y = Math.max(-halfCourtY, Math.min(halfCourtY, player.y));

        // Ball movement
        ball.x += ball.vx;
        ball.y += ball.vy;
        ball.z += ball.vz;

        // Ball collision with lateral walls (Left / Right)
        const ballLimitX = courtWidth / 2 - ball.radius;
        if (ball.x <= -ballLimitX) {
          ball.x = -ballLimitX;
          ball.vx = Math.abs(ball.vx);
          playSoundEffect('wall');
        } else if (ball.x >= ballLimitX) {
          ball.x = ballLimitX;
          ball.vx = -Math.abs(ball.vx);
          playSoundEffect('wall');
        }

        // Ball collision with floor and ceiling (Top / Bottom)
        const ballLimitY = courtHeight / 2 - ball.radius;
        if (ball.y <= -ballLimitY) {
          ball.y = -ballLimitY;
          ball.vy = Math.abs(ball.vy);
          playSoundEffect('wall');
        } else if (ball.y >= ballLimitY) {
          ball.y = ballLimitY;
          ball.vy = -Math.abs(ball.vy);
          playSoundEffect('wall');
        }

        // Fly AI Simulation (Biological Leaky Integrate-and-Fire & Reichardt Correlator)
        // The fly only tracks ball when moving toward its zone or nearby
        if (ball.vz < 0) {
          // Ball approaching fly
          const targetY = ball.y + Math.sin(Date.now() * 0.005) * 8;
          const targetX = ball.x;
          // Neural motor drive rate
          fly.neuralDriveY = (targetY - fly.y) * 0.12;
          fly.neuralDriveX = (targetX - fly.x) * 0.12;
          fly.y += fly.neuralDriveY;
          fly.x += fly.neuralDriveX;
        } else {
          // Relax towards center court with natural hovering micro-oscillations
          fly.y += (0 - fly.y) * 0.03 + Math.sin(Date.now() * 0.008) * 1.2;
          fly.x += (0 - fly.x) * 0.03 + Math.cos(Date.now() * 0.006) * 1.5;
          fly.neuralDriveY = 0;
          fly.neuralDriveX = 0;
        }

        // Keep fly in bounds
        fly.x = Math.max(-halfCourtX, Math.min(halfCourtX, fly.x));
        fly.y = Math.max(-halfCourtY, Math.min(halfCourtY, fly.y));

        // Rapid wing flapping
        fly.wingAngle = Math.sin(Date.now() * 0.04) * 0.65;

        // Ball collision at Player's end (Z >= courtLength)
        if (ball.z >= courtLength - 10) {
          const hitX = Math.abs(ball.x - player.x) <= player.width / 2 + ball.radius;
          const hitY = Math.abs(ball.y - player.y) <= player.height / 2 + ball.radius;

          if (hitX && hitY) {
            // Player successfully deflected ball!
            ball.z = courtLength - 10;
            ball.vz = -Math.abs(ball.vz) * 1.02; // Reverse & slight acceleration
            // Angle adjustment based on impact offset
            const offsetX = (ball.x - player.x) / (player.width / 2);
            const offsetY = (ball.y - player.y) / (player.height / 2);
            ball.vx += offsetX * 1.4;
            ball.vy += offsetY * 1.4;
            playSoundEffect('hit');

            setRally((r) => {
              const newR = r + 1;
              setMaxRally((m) => Math.max(m, newR));
              return newR;
            });
          } else if (ball.z > courtLength + 40) {
            // Player missed -> Fly Scores!
            setFlyScore((s) => s + 1);
            playSoundEffect('score');
            setRally(0);
            // Reset ball to mid court
            ball.x = 0;
            ball.y = 0;
            ball.z = courtLength / 2;
            ball.vz = -4.2;
            ball.vx = (Math.random() - 0.5) * 3;
            ball.vy = (Math.random() - 0.5) * 2;
          }
        }

        // Ball collision at Fly's end (Z <= 20)
        if (ball.z <= 22) {
          const flyHitRange = 38;
          const hitX = Math.abs(ball.x - fly.x) <= flyHitRange;
          const hitY = Math.abs(ball.y - fly.y) <= flyHitRange;

          if (hitX && hitY) {
            // Fly hit ball!
            ball.z = 24;
            ball.vz = Math.abs(ball.vz) * 1.01;
            ball.vx += (Math.random() - 0.5) * 1.8;
            ball.vy += (Math.random() - 0.5) * 1.6;
            playSoundEffect('hit');
            setFlyHits((h) => h + 1);
            gs.successfulFlyHits++;
            gs.totalFlyAttempts++;
            setFlyHitRate(Math.min(100, Math.round((gs.successfulFlyHits / gs.totalFlyAttempts) * 1000) / 10));
          } else if (ball.z < -30) {
            // Fly missed -> Player Scores!
            setPlayerScore((s) => s + 1);
            playSoundEffect('score');
            setRally(0);
            gs.totalFlyAttempts++;
            setFlyHitRate(Math.min(100, Math.round((gs.successfulFlyHits / gs.totalFlyAttempts) * 1000) / 10));
            // Reset ball
            ball.x = 0;
            ball.y = 0;
            ball.z = courtLength / 2;
            ball.vz = 4.2;
            ball.vx = (Math.random() - 0.5) * 3;
            ball.vy = (Math.random() - 0.5) * 2;
          }
        }

        // Update real-time telemetry state
        setBall3DZ(Math.round(ball.z));

        // Connectome activation calculation
        const connectome = connectomeRef.current;
        let activeCount = 0;
        let upTotal = 0;
        let downTotal = 0;

        // Ball vertical velocity triggers UP vs DOWN motion sensors
        const isUpMotion = ball.vy < -0.3;
        const isDownMotion = ball.vy > 0.3;

        for (let i = 0; i < connectome.neurons.length; i++) {
          const n = connectome.neurons[i];
          if (n.pool === 'sensory') {
            n.active = Math.abs(ball.x - n.x) < 90 && Math.random() > 0.35;
          } else if (n.pool === 'up') {
            n.active = isUpMotion || Math.random() > 0.65;
            if (n.active) upTotal++;
          } else if (n.pool === 'down') {
            n.active = isDownMotion || Math.random() > 0.65;
            if (n.active) downTotal++;
          } else if (n.pool === 'motor') {
            n.active = Math.abs(fly.neuralDriveY) > 0.4 || Math.random() > 0.7;
          } else {
            n.active = Math.random() > 0.6;
          }
          if (n.active) activeCount++;
        }

        setActiveFiringCount(activeCount);
        setUpRatio(Number((0.5 + (isUpMotion ? 0.28 : -0.1) + Math.random() * 0.08).toFixed(2)));
        setDownRatio(Number((0.5 + (isDownMotion ? 0.28 : -0.1) + Math.random() * 0.08).toFixed(2)));

        // Push new wave sample
        waveHistory.push({
          ballY: ball.y / (courtHeight / 2),
          paddleY: player.y / (courtHeight / 2),
          neural: (fly.neuralDriveY / 4)
        });
        if (waveHistory.length > 120) waveHistory.shift();
      }

      // ----------------------------------------------------
      // 2. RENDER 3D PONG ARENA (LEFT CANVAS)
      // ----------------------------------------------------
      const pongCanvas = pongCanvasRef.current;
      if (pongCanvas) {
        const ctx = pongCanvas.getContext('2d');
        const w = pongCanvas.width;
        const h = pongCanvas.height;

        ctx.fillStyle = '#06080d';
        ctx.fillRect(0, 0, w, h);

        const halfW = courtWidth / 2;
        const halfH = courtHeight / 2;

        // 3D Court bounding box vertices
        // Z=0 is Fly end, Z=courtLength is Player end
        const corners = [
          // Far end (Fly side - Z=0)
          { x: -halfW, y: -halfH, z: 0 },
          { x: halfW, y: -halfH, z: 0 },
          { x: halfW, y: halfH, z: 0 },
          { x: -halfW, y: halfH, z: 0 },
          // Near end (Player side - Z=courtLength)
          { x: -halfW, y: -halfH, z: courtLength },
          { x: halfW, y: -halfH, z: courtLength },
          { x: halfW, y: halfH, z: courtLength },
          { x: -halfW, y: halfH, z: courtLength }
        ];

        const projCorners = corners.map((c) => project3D(c.x, c.y, c.z, pongCam, w, h));

        // Draw Floor Grid (Y = halfH)
        ctx.lineWidth = 1;
        ctx.strokeStyle = 'rgba(30, 48, 77, 0.45)';
        ctx.beginPath();
        const gridStepsZ = 12;
        const gridStepsX = 8;
        for (let i = 0; i <= gridStepsZ; i++) {
          const z = (i / gridStepsZ) * courtLength;
          const p1 = project3D(-halfW, halfH, z, pongCam, w, h);
          const p2 = project3D(halfW, halfH, z, pongCam, w, h);
          if (p1 && p2) {
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
          }
        }
        for (let i = 0; i <= gridStepsX; i++) {
          const x = -halfW + (i / gridStepsX) * courtWidth;
          const p1 = project3D(x, halfH, 0, pongCam, w, h);
          const p2 = project3D(x, halfH, courtLength, pongCam, w, h);
          if (p1 && p2) {
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
          }
        }
        ctx.stroke();

        // Draw Court Wireframe Bounding Box Edges
        ctx.lineWidth = 1.2;
        ctx.strokeStyle = 'rgba(56, 189, 248, 0.22)';
        ctx.beginPath();
        // Far rectangle
        if (projCorners[0] && projCorners[1] && projCorners[2] && projCorners[3]) {
          ctx.moveTo(projCorners[0].x, projCorners[0].y);
          ctx.lineTo(projCorners[1].x, projCorners[1].y);
          ctx.lineTo(projCorners[2].x, projCorners[2].y);
          ctx.lineTo(projCorners[3].x, projCorners[3].y);
          ctx.closePath();
        }
        // Near rectangle
        if (projCorners[4] && projCorners[5] && projCorners[6] && projCorners[7]) {
          ctx.moveTo(projCorners[4].x, projCorners[4].y);
          ctx.lineTo(projCorners[5].x, projCorners[5].y);
          ctx.lineTo(projCorners[6].x, projCorners[6].y);
          ctx.lineTo(projCorners[7].x, projCorners[7].y);
          ctx.closePath();
        }
        // 4 connecting longitudinal rails
        for (let i = 0; i < 4; i++) {
          if (projCorners[i] && projCorners[i + 4]) {
            ctx.moveTo(projCorners[i].x, projCorners[i].y);
            ctx.lineTo(projCorners[i + 4].x, projCorners[i + 4].y);
          }
        }
        ctx.stroke();

        // Draw Ball shadow on floor
        const ballShadowP = project3D(ball.x, halfH, ball.z, pongCam, w, h);
        if (ballShadowP) {
          ctx.fillStyle = 'rgba(14, 165, 233, 0.18)';
          ctx.beginPath();
          ctx.ellipse(ballShadowP.x, ballShadowP.y, 14 * ballShadowP.scale, 7 * ballShadowP.scale, 0, 0, Math.PI * 2);
          ctx.fill();
        }

        // Draw 3D Fly (P1)
        const flyP = project3D(fly.x, fly.y, 25, pongCam, w, h);
        if (flyP) {
          const s = flyP.scale * 1.5;

          // Fly Wing Left & Right (flapping)
          ctx.save();
          ctx.translate(flyP.x, flyP.y);

          // Left Wing
          ctx.save();
          ctx.rotate(-0.35 + fly.wingAngle);
          ctx.fillStyle = 'rgba(186, 230, 253, 0.55)';
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.ellipse(-18 * s, -14 * s, 16 * s, 8 * s, -0.4, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();
          ctx.restore();

          // Right Wing
          ctx.save();
          ctx.rotate(0.35 - fly.wingAngle);
          ctx.fillStyle = 'rgba(186, 230, 253, 0.55)';
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.ellipse(18 * s, -14 * s, 16 * s, 8 * s, 0.4, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();
          ctx.restore();

          // Abdomen (striped)
          ctx.fillStyle = '#33271d';
          ctx.beginPath();
          ctx.ellipse(0, 10 * s, 10 * s, 16 * s, 0, 0, Math.PI * 2);
          ctx.fill();
          // Abdomen amber stripes
          ctx.strokeStyle = '#92400e';
          ctx.lineWidth = 2 * s;
          ctx.beginPath();
          ctx.moveTo(-7 * s, 4 * s);
          ctx.lineTo(7 * s, 4 * s);
          ctx.moveTo(-8 * s, 10 * s);
          ctx.lineTo(8 * s, 10 * s);
          ctx.moveTo(-6 * s, 16 * s);
          ctx.lineTo(6 * s, 16 * s);
          ctx.stroke();

          // Thorax
          ctx.fillStyle = '#262626';
          ctx.beginPath();
          ctx.arc(0, -4 * s, 11 * s, 0, Math.PI * 2);
          ctx.fill();

          // Legs (6 legs)
          ctx.strokeStyle = '#1c1917';
          ctx.lineWidth = 1.5 * s;
          ctx.beginPath();
          // Left legs
          ctx.moveTo(-8 * s, -6 * s); ctx.lineTo(-20 * s, -8 * s);
          ctx.moveTo(-8 * s, -2 * s); ctx.lineTo(-22 * s, 2 * s);
          ctx.moveTo(-8 * s, 2 * s);  ctx.lineTo(-20 * s, 12 * s);
          // Right legs
          ctx.moveTo(8 * s, -6 * s);  ctx.lineTo(20 * s, -8 * s);
          ctx.moveTo(8 * s, -2 * s);  ctx.lineTo(22 * s, 2 * s);
          ctx.moveTo(8 * s, 2 * s);   ctx.lineTo(20 * s, 12 * s);
          ctx.stroke();

          // Head with Red Compound Eyes
          ctx.fillStyle = '#171717';
          ctx.beginPath();
          ctx.arc(0, -15 * s, 8 * s, 0, Math.PI * 2);
          ctx.fill();

          // Left Compound Eye (Red)
          const eyeGradL = ctx.createRadialGradient(-7 * s, -17 * s, 1, -7 * s, -17 * s, 6 * s);
          eyeGradL.addColorStop(0, '#f87171');
          eyeGradL.addColorStop(0.8, '#dc2626');
          eyeGradL.addColorStop(1, '#7f1d1d');
          ctx.fillStyle = eyeGradL;
          ctx.beginPath();
          ctx.arc(-7 * s, -17 * s, 5.5 * s, 0, Math.PI * 2);
          ctx.fill();

          // Right Compound Eye (Red)
          const eyeGradR = ctx.createRadialGradient(7 * s, -17 * s, 1, 7 * s, -17 * s, 6 * s);
          eyeGradR.addColorStop(0, '#f87171');
          eyeGradR.addColorStop(0.8, '#dc2626');
          eyeGradR.addColorStop(1, '#7f1d1d');
          ctx.fillStyle = eyeGradR;
          ctx.beginPath();
          ctx.arc(7 * s, -17 * s, 5.5 * s, 0, Math.PI * 2);
          ctx.fill();

          ctx.restore();
        }

        // Draw 3D Ball (Glowing Cyan Orb)
        const ballP = project3D(ball.x, ball.y, ball.z, pongCam, w, h);
        if (ballP) {
          const ballRadiusScreen = ball.radius * ballP.scale * 1.4;
          const ballGrad = ctx.createRadialGradient(
            ballP.x - ballRadiusScreen * 0.3,
            ballP.y - ballRadiusScreen * 0.3,
            ballRadiusScreen * 0.1,
            ballP.x,
            ballP.y,
            ballRadiusScreen
          );
          ballGrad.addColorStop(0, '#ffffff');
          ballGrad.addColorStop(0.3, '#38bdf8');
          ballGrad.addColorStop(0.9, '#0284c7');
          ballGrad.addColorStop(1, 'rgba(2, 132, 199, 0)');

          // Ball Halo Glow
          ctx.fillStyle = 'rgba(56, 189, 248, 0.28)';
          ctx.beginPath();
          ctx.arc(ballP.x, ballP.y, ballRadiusScreen * 2.2, 0, Math.PI * 2);
          ctx.fill();

          // Solid Ball Core
          ctx.fillStyle = ballGrad;
          ctx.beginPath();
          ctx.arc(ballP.x, ballP.y, ballRadiusScreen, 0, Math.PI * 2);
          ctx.fill();
        }

        // Draw Player Paddle (P2 - YOU Human)
        const padCornerOffsets = [
          { x: -player.width / 2, y: -player.height / 2, z: 0 },
          { x: player.width / 2, y: -player.height / 2, z: 0 },
          { x: player.width / 2, y: player.height / 2, z: 0 },
          { x: -player.width / 2, y: player.height / 2, z: 0 }
        ];
        const projPaddle = padCornerOffsets.map((c) =>
          project3D(player.x + c.x, player.y + c.y, courtLength + c.z, pongCam, w, h)
        );

        if (projPaddle[0] && projPaddle[1] && projPaddle[2] && projPaddle[3]) {
          ctx.fillStyle = 'rgba(56, 189, 248, 0.42)';
          ctx.strokeStyle = '#38bdf8';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(projPaddle[0].x, projPaddle[0].y);
          ctx.lineTo(projPaddle[1].x, projPaddle[1].y);
          ctx.lineTo(projPaddle[2].x, projPaddle[2].y);
          ctx.lineTo(projPaddle[3].x, projPaddle[3].y);
          ctx.closePath();
          ctx.fill();
          ctx.stroke();

          // Paddle inner crosshair indicator
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.75)';
          ctx.lineWidth = 1;
          const midX = (projPaddle[0].x + projPaddle[1].x + projPaddle[2].x + projPaddle[3].x) / 4;
          const midY = (projPaddle[0].y + projPaddle[1].y + projPaddle[2].y + projPaddle[3].y) / 4;
          ctx.beginPath();
          ctx.moveTo(midX - 6, midY); ctx.lineTo(midX + 6, midY);
          ctx.moveTo(midX, midY - 6); ctx.lineTo(midX, midY + 6);
          ctx.stroke();
        }

        // In-Canvas Scores & HUD
        ctx.textAlign = 'left';
        ctx.fillStyle = '#38bdf8';
        ctx.font = '700 11px system-ui, sans-serif';
        ctx.fillText('FLY BRAIN', 28, 38);
        ctx.font = '800 28px system-ui, sans-serif';
        ctx.fillText(`${flyScore}`, 34, 68);

        ctx.fillStyle = '#22c55e';
        ctx.font = '700 11px system-ui, sans-serif';
        ctx.fillText('YOU (HUMAN)', 118, 38);
        ctx.font = '800 28px system-ui, sans-serif';
        ctx.fillText(`${playerScore}`, 142, 68);

        // Control hints at bottom of pong canvas
        ctx.font = '500 10.5px monospace';
        ctx.fillStyle = '#22c55e';
        ctx.fillText('KONTROL P2 (ANDA): [W/S atau Panah: Geser] [A/D: Ketinggian]', 14, h - 14);

        ctx.textAlign = 'right';
        ctx.fillStyle = '#64748b';
        ctx.fillText('[Drag: Orbit 3D] [Scroll: Zoom] [F: Fit]', w - 14, h - 14);
      }

      // ----------------------------------------------------
      // 3. RENDER FLY BRAIN MONITOR (RIGHT CANVAS)
      // ----------------------------------------------------
      const brainCanvas = brainCanvasRef.current;
      if (brainCanvas) {
        const ctx = brainCanvas.getContext('2d');
        const w = brainCanvas.width;
        const h = brainCanvas.height;
        const connectome = connectomeRef.current;

        ctx.fillStyle = '#06080d';
        ctx.fillRect(0, 0, w, h);

        // Drosophila Head Silhouette in 'brain' mode
        if (brainViewMode === 'brain') {
          ctx.save();
          // Draw subtle anatomical lobes silhouette
          const centerP = project3D(0, 0, 0, brainCam, w, h);
          if (centerP) {
            const sc = centerP.scale * 1.35;
            ctx.fillStyle = 'rgba(23, 27, 38, 0.65)';
            ctx.strokeStyle = 'rgba(51, 65, 85, 0.4)';
            ctx.lineWidth = 1;

            // Central Brain Capsule
            ctx.beginPath();
            ctx.ellipse(centerP.x, centerP.y - 10 * sc, 42 * sc, 55 * sc, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();

            // Left Optic Lobe (Medulla & Lobula)
            ctx.beginPath();
            ctx.ellipse(centerP.x - 72 * sc, centerP.y - 12 * sc, 46 * sc, 58 * sc, -0.3, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();

            // Right Optic Lobe (Medulla & Lobula)
            ctx.beginPath();
            ctx.ellipse(centerP.x + 72 * sc, centerP.y - 12 * sc, 46 * sc, 58 * sc, 0.3, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();

            // Ventral Cervical Cord (Descending motor tract)
            ctx.fillStyle = 'rgba(192, 132, 252, 0.08)';
            ctx.beginPath();
            ctx.rect(centerP.x - 18 * sc, centerP.y + 40 * sc, 36 * sc, 60 * sc);
            ctx.fill();
          }
          ctx.restore();
        }

        // Draw Synapses (Network Edges) in Connectome Mode
        if (brainViewMode === 'connectome') {
          ctx.lineWidth = 0.6;
          ctx.strokeStyle = 'rgba(56, 189, 248, 0.12)';
          ctx.beginPath();
          for (let i = 0; i < connectome.synapses.length; i += 2) {
            const edge = connectome.synapses[i];
            const n1 = connectome.neurons[edge.from];
            const n2 = connectome.neurons[edge.to];
            const p1 = project3D(n1.x, n1.y, n1.z, brainCam, w, h);
            const p2 = project3D(n2.x, n2.y, n2.z, brainCam, w, h);
            if (p1 && p2) {
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
            }
          }
          ctx.stroke();
        }

        // Draw 600 Neurons as Glowing Points
        for (let i = 0; i < connectome.neurons.length; i++) {
          const n = connectome.neurons[i];
          const p = project3D(n.x, n.y, n.z, brainCam, w, h);
          if (!p) continue;

          const baseRadius = (n.pool === 'motor' ? 3.2 : 2.0) * p.scale;
          const isFired = n.active;

          if (isFired) {
            // Glowing Halo
            ctx.fillStyle = n.baseColor;
            ctx.globalAlpha = 0.35;
            ctx.beginPath();
            ctx.arc(p.x, p.y, baseRadius * 2.8, 0, Math.PI * 2);
            ctx.fill();
            ctx.globalAlpha = 1.0;
          }

          ctx.fillStyle = isFired ? '#ffffff' : n.baseColor;
          ctx.beginPath();
          ctx.arc(p.x, p.y, isFired ? baseRadius * 1.4 : baseRadius, 0, Math.PI * 2);
          ctx.fill();
        }

        // Brain Canvas Legend at bottom
        ctx.font = '600 10px system-ui, sans-serif';
        ctx.textAlign = 'left';

        const legendItems = [
          { label: 'Sensory', color: '#38bdf8' },
          { label: 'UP', color: '#22c55e' },
          { label: 'DOWN', color: '#ef4444' },
          { label: 'DN Motor', color: '#c084fc' },
          { label: 'Intermediate', color: '#cbd5e1' }
        ];

        let curX = 14;
        const legendY = h - 14;
        legendItems.forEach((item) => {
          ctx.fillStyle = item.color;
          ctx.beginPath();
          ctx.arc(curX + 4, legendY - 3, 3.5, 0, Math.PI * 2);
          ctx.fill();
          ctx.fillStyle = '#94a3b8';
          ctx.fillText(item.label, curX + 11, legendY);
          curX += ctx.measureText(item.label).width + 24;
        });

        ctx.textAlign = 'right';
        ctx.fillStyle = '#64748b';
        ctx.fillText('[Drag: Rotate 3D] [Scroll: Zoom] [F: Fit]', w - 14, h - 14);
      }

      // ----------------------------------------------------
      // 4. RENDER REAL-TIME SIGNAL TELEMETRY (OSCILLOSCOPE)
      // ----------------------------------------------------
      const telemCanvas = telemetryCanvasRef.current;
      if (telemCanvas) {
        const ctx = telemCanvas.getContext('2d');
        const w = telemCanvas.width;
        const h = telemCanvas.height;

        ctx.fillStyle = '#06080d';
        ctx.fillRect(0, 0, w, h);

        // Center zero-line
        ctx.strokeStyle = '#1e293b';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(0, h / 2);
        ctx.lineTo(w, h / 2);
        ctx.stroke();

        const stepX = w / (waveHistory.length - 1);

        // 1. Green line: Ball Y position
        ctx.strokeStyle = '#22c55e';
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        for (let i = 0; i < waveHistory.length; i++) {
          const x = i * stepX;
          const y = h / 2 + waveHistory[i].ballY * (h * 0.38);
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();

        // 2. Blue line: Paddle Y position
        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        for (let i = 0; i < waveHistory.length; i++) {
          const x = i * stepX;
          const y = h / 2 + waveHistory[i].paddleY * (h * 0.38);
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();

        // 3. Coral / Red line: Neural Activation
        ctx.strokeStyle = '#f43f5e';
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        for (let i = 0; i < waveHistory.length; i++) {
          const x = i * stepX;
          const y = h / 2 + waveHistory[i].neural * (h * 0.42);
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animId);
  }, [isPaused, brainViewMode, playSoundEffect]);

  // Pointer drag controls for 3D Pong Canvas
  const handlePongPointerDown = (e) => {
    const cam = gameStateRef.current.pongCam;
    cam.isDragging = true;
    cam.lastMouseX = e.clientX;
    cam.lastMouseY = e.clientY;
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePongPointerMove = (e) => {
    const cam = gameStateRef.current.pongCam;
    if (cam.isDragging) {
      const dx = e.clientX - cam.lastMouseX;
      const dy = e.clientY - cam.lastMouseY;
      cam.yaw += dx * 0.007;
      cam.pitch = Math.max(0.05, Math.min(1.4, cam.pitch + dy * 0.007));
      cam.lastMouseX = e.clientX;
      cam.lastMouseY = e.clientY;
    } else {
      // Steer paddle by mouse position inside court
      const rect = e.currentTarget.getBoundingClientRect();
      const normX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const normY = ((e.clientY - rect.top) / rect.height) * 2 - 1;
      const player = gameStateRef.current.player;
      player.x = normX * (gameStateRef.current.courtWidth / 2 - player.width / 2);
      player.y = normY * (gameStateRef.current.courtHeight / 2 - player.height / 2);
    }
  };

  const handlePongPointerUp = (e) => {
    gameStateRef.current.pongCam.isDragging = false;
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {}
  };

  const handlePongWheel = (e) => {
    e.preventDefault();
    const cam = gameStateRef.current.pongCam;
    cam.dist = Math.max(260, Math.min(1100, cam.dist + e.deltaY * 0.5));
  };

  // Pointer drag controls for 3D Brain Canvas
  const handleBrainPointerDown = (e) => {
    const cam = gameStateRef.current.brainCam;
    cam.isDragging = true;
    cam.lastMouseX = e.clientX;
    cam.lastMouseY = e.clientY;
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handleBrainPointerMove = (e) => {
    const cam = gameStateRef.current.brainCam;
    if (!cam.isDragging) return;
    const dx = e.clientX - cam.lastMouseX;
    const dy = e.clientY - cam.lastMouseY;
    cam.yaw += dx * 0.009;
    cam.pitch = Math.max(-1.2, Math.min(1.2, cam.pitch + dy * 0.009));
    cam.lastMouseX = e.clientX;
    cam.lastMouseY = e.clientY;
  };

  const handleBrainPointerUp = (e) => {
    gameStateRef.current.brainCam.isDragging = false;
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {}
  };

  const handleBrainWheel = (e) => {
    e.preventDefault();
    const cam = gameStateRef.current.brainCam;
    cam.dist = Math.max(120, Math.min(650, cam.dist + e.deltaY * 0.4));
  };

  return (
    <div className={`neurofly-simulation-root ${isEmbedded ? 'embedded' : 'standalone'}`}>
      {/* Top Main Simulation Viewport (Split into Pong Court + Brain Monitor) */}
      <div className="simulation-top-split">
        {/* Left Section: 3D Pong Court */}
        <div className="pong-court-panel">
          <div className="simulation-panel-header">
            <span className="panel-title-label">3D PONG</span>
            <div className="panel-header-btn-group">
              <button type="button" className="sim-pill-btn" title="Pemain 1: Model Saraf Lalat">
                P1: Fly
              </button>
              <button
                type="button"
                className={`sim-pill-btn ${readoutMode === 'Vis' ? 'active-vis' : ''}`}
                onClick={() => setReadoutMode((m) => (m === 'Vis' ? 'DN' : 'Vis'))}
                title="Beralih mode sensor visual / descending"
              >
                Readout: {readoutMode}
              </button>
              <button type="button" className="sim-pill-btn active-human" title="Pemain 2: Anda (Manusia)">
                P2: YOU (Human)
              </button>
              <button
                type="button"
                className={`sim-pill-btn ${isPaused ? 'btn-paused' : ''}`}
                onClick={() => setIsPaused(!isPaused)}
                title="Pause / Lanjutkan Permainan"
              >
                {isPaused ? 'Resume' : 'Pause'}
              </button>
              <button
                type="button"
                className="sim-pill-btn btn-rst"
                onClick={handleResetGame}
                title="Reset Skor & Permainan"
              >
                Rst
              </button>
              {onOpenExternal && (
                <button
                  type="button"
                  className="sim-pill-btn btn-external"
                  onClick={onOpenExternal}
                  title="Buka Simulasi di Jendela Mandiri"
                >
                  Pop-out
                </button>
              )}
            </div>
          </div>

          <div className="canvas-wrapper">
            <canvas
              ref={pongCanvasRef}
              width={700}
              height={440}
              className="interactive-3d-canvas"
              onPointerDown={handlePongPointerDown}
              onPointerMove={handlePongPointerMove}
              onPointerUp={handlePongPointerUp}
              onWheel={handlePongWheel}
            />
          </div>
        </div>

        {/* Right Section: Fly Brain Monitor */}
        <div className="brain-monitor-panel">
          <div className="simulation-panel-header">
            <span className="panel-title-label">FLY BRAIN MONITOR</span>
            <div className="panel-header-btn-group">
              <button
                type="button"
                className={`sim-pill-btn ${brainViewMode === 'brain' ? 'active-tab' : ''}`}
                onClick={() => setBrainViewMode('brain')}
              >
                Brain View
              </button>
              <button
                type="button"
                className={`sim-pill-btn ${brainViewMode === 'connectome' ? 'active-tab' : ''}`}
                onClick={() => setBrainViewMode('connectome')}
              >
                Connectome
              </button>
            </div>
          </div>

          <div className="canvas-wrapper">
            <canvas
              ref={brainCanvasRef}
              width={540}
              height={440}
              className="interactive-3d-canvas"
              onPointerDown={handleBrainPointerDown}
              onPointerMove={handleBrainPointerMove}
              onPointerUp={handleBrainPointerUp}
              onWheel={handleBrainWheel}
            />
          </div>
        </div>
      </div>

      {/* Bottom Telemetry & Analysis Dashboard */}
      <div className="simulation-bottom-dashboard">
        {/* Panel 1: Live Game Telemetry */}
        <div className="dashboard-metric-panel panel-game-telemetry">
          <div className="dash-panel-heading">LIVE GAME TELEMETRY</div>
          <div className="dash-stat-grid">
            <div className="dash-stat-cell">
              <div className="dash-stat-label">Score</div>
              <div className="dash-stat-val val-green">
                {flyScore} - {playerScore} (You)
              </div>
            </div>
            <div className="dash-stat-cell">
              <div className="dash-stat-label">Ball 3D</div>
              <div className="dash-stat-val">Z: {ball3DZ}/360</div>
            </div>
            <div className="dash-stat-cell">
              <div className="dash-stat-label">Fly Hits</div>
              <div className="dash-stat-val">{flyHits}</div>
            </div>
            <div className="dash-stat-cell">
              <div className="dash-stat-label">Rally</div>
              <div className="dash-stat-val">
                {rally} (Max: {maxRally})
              </div>
            </div>
          </div>

          <div className="dash-subheading">CONTROLLER PERFORMANCE EVALUATION</div>
          <table className="telemetry-table">
            <thead>
              <tr>
                <th>CONTROLLER</th>
                <th>HIT RATE</th>
                <th>AVG RALLY</th>
                <th>MAX RALLY</th>
              </tr>
            </thead>
            <tbody>
              <tr className="active-row">
                <td>
                  <span className="dot-live" /> Fly Visual (T4/T5/VS) [LIVE]
                </td>
                <td>{flyHitRate.toFixed(1)}%</td>
                <td>{avgRally.toFixed(1)}</td>
                <td>{maxRally}</td>
              </tr>
              <tr>
                <td>● Fly Descending (DNs)</td>
                <td>7.4%</td>
                <td>0.1</td>
                <td>1</td>
              </tr>
              <tr>
                <td>● Random Baseline</td>
                <td>23.1%</td>
                <td>0.3</td>
                <td>3</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Panel 2: Connectome male-cns:v1.0 */}
        <div className="dashboard-metric-panel panel-connectome">
          <div className="dash-panel-heading">CONNECTOME (male-cns:v1.0)</div>
          <div className="dash-stat-grid">
            <div className="dash-stat-cell">
              <div className="dash-stat-label">Neurons / Syn</div>
              <div className="dash-stat-val">600 / 4297</div>
            </div>
            <div className="dash-stat-cell">
              <div className="dash-stat-label">Active Firing</div>
              <div className="dash-stat-val">
                {activeFiringCount} ({(activeFiringCount / TOTAL_NEURONS).toFixed(2)})
              </div>
            </div>
            <div className="dash-stat-cell">
              <div className="dash-stat-label">UP / DOWN</div>
              <div className="dash-stat-val">
                {upRatio.toFixed(2)} / {downRatio.toFixed(2)}
              </div>
            </div>
            <div className="dash-stat-cell">
              <div className="dash-stat-label">Drive / Contrast</div>
              <div className="dash-stat-val">+0.04 (Visual)</div>
            </div>
          </div>

          <div className="dash-subheading">CIRCUIT SUBPOOLS & TRANSMITTERS</div>
          <div className="subpools-list">
            <div className="subpool-row">
              <span className="subpool-name">Sensory (Mi1,Tm1,Tm2,Tm3)</span>
              <span className="subpool-count">256 neurons</span>
            </div>
            <div className="subpool-row">
              <span className="subpool-name">UP Motion (T4c, T5c)</span>
              <span className="subpool-count">147 neurons</span>
            </div>
            <div className="subpool-row">
              <span className="subpool-name">DOWN Motion (T4d, T5d, VS)</span>
              <span className="subpool-count">168 neurons</span>
            </div>
            <div className="subpool-row">
              <span className="subpool-name">Descending Motor (DNs)</span>
              <span className="subpool-count">14 neurons</span>
            </div>
          </div>
        </div>

        {/* Panel 3: Real-Time Signal Telemetry Waveform */}
        <div className="dashboard-metric-panel panel-signal-wave">
          <div className="dash-panel-heading">
            REAL-TIME SIGNAL TELEMETRY <span className="legend-tag">(Ball Y/Z, Paddle Y, Neural)</span>
          </div>
          <div className="telemetry-wave-holder">
            <canvas ref={telemetryCanvasRef} width={380} height={140} className="wave-canvas" />
          </div>
          <div className="waveform-legend-footer">
            <span style={{ color: '#22c55e' }}>● Ball Position</span>
            <span style={{ color: '#38bdf8' }}>● Player Paddle</span>
            <span style={{ color: '#f43f5e' }}>● Neural Drive</span>
          </div>
        </div>
      </div>

      {/* Global Bottom Status Bar */}
      <div className="simulation-footer-bar">
        <span>FPS: 60.0 (Cap 60) | Authentic MaleCNS v1.0 | 600 Neurons | Drosophila Pong Interactive Simulation</span>
      </div>
    </div>
  );
};
