'use client';

import { useEffect, useRef } from "react";

/**
 * @fileOverview A fluid, curved hexagonal tech mesh background with smooth drifting motion.
 */

interface FluidHexMeshBackgroundProps {
  className?: string;
}

export function FluidHexMeshBackground({
  className = "",
}: FluidHexMeshBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let animationFrameId = 0;

    const resize = () => {
      const parent = canvas.parentElement;
      width = parent ? parent.clientWidth : window.innerWidth;
      height = parent ? parent.clientHeight : window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const projectHexVertex = (
      gx: number,
      gy: number,
      time: number,
      centerX: number,
      centerY: number
    ) => {
      // Gentle surface wave + dome curvature
      const wave1 = Math.sin(gx * 0.28 + time * 0.85) * 14;
      const wave2 = Math.cos(gy * 0.34 - time * 0.65) * 12;
      const ripple = Math.sin((gx + gy) * 0.18 + time * 1.1) * 8;
      const elevation = wave1 + wave2 + ripple;

      // Subtle 3D-like perspective warp
      const normX = (gx - 14) / 14;
      const normY = (gy - 9) / 9;
      const depth = 1 + normY * 0.14 + elevation * 0.004;

      const x =
        centerX +
        normX * (width * 0.62) * depth +
        Math.sin(time * 0.35 + normY) * 14;
      const y =
        centerY +
        normY * (height * 0.52) * depth -
        elevation * 1.15 +
        (normX * normX) * 26;

      return { x, y, elevation };
    };

    const drawHexagon = (
      cx: number,
      cy: number,
      radius: number,
      time: number,
      gx: number,
      gy: number
    ) => {
      const points: { x: number; y: number }[] = [];
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i + Math.PI / 6;
        const px = cx + Math.cos(angle) * radius;
        const py = cy + Math.sin(angle) * radius * 0.72;
        points.push({ x: px, y: py });
      }

      // Highlight intensity near crest waves and upper-right amber sweep
      const crestBoost = Math.max(
        0,
        Math.sin(gx * 0.35 + gy * 0.25 - time * 1.2)
      );
      const amberProximity = Math.max(
        0,
        1 - Math.hypot((cx - width * 0.72) / (width * 0.42), (cy - height * 0.32) / (height * 0.45))
      );

      ctx.beginPath();
      points.forEach((pt, idx) => {
        if (idx === 0) ctx.moveTo(pt.x, pt.y);
        else ctx.lineTo(pt.x, pt.y);
      });
      ctx.closePath();

      const alpha = 0.12 + crestBoost * 0.28 + amberProximity * 0.16;
      ctx.strokeStyle =
        amberProximity > 0.35
          ? `rgba(251, 146, 60, ${alpha.toFixed(3)})`
          : `rgba(103, 232, 249, ${alpha.toFixed(3)})`;
      ctx.lineWidth = crestBoost > 0.65 ? 1.4 : 0.9;
      ctx.stroke();
    };

    const renderFrame = (timeMs: number) => {
      const time = timeMs * 0.001;

      // 1. Deep violet / indigo base gradient
      const baseGrad = ctx.createLinearGradient(0, 0, width, height);
      baseGrad.addColorStop(0, "#190b3d");
      baseGrad.addColorStop(0.5, "#28115c");
      baseGrad.addColorStop(1, "#12082c");
      ctx.fillStyle = baseGrad;
      ctx.fillRect(0, 0, width, height);

      // 2. Cool cyan/indigo glow on lower-left wave
      const cyanGlow = ctx.createRadialGradient(
        width * 0.25 + Math.sin(time * 0.4) * 40,
        height * 0.72 + Math.cos(time * 0.35) * 25,
        20,
        width * 0.25,
        height * 0.72,
        Math.max(width, height) * 0.55
      );
      cyanGlow.addColorStop(0, "rgba(56, 189, 248, 0.22)");
      cyanGlow.addColorStop(0.6, "rgba(99, 102, 241, 0.10)");
      cyanGlow.addColorStop(1, "rgba(18, 8, 44, 0)");
      ctx.fillStyle = cyanGlow;
      ctx.fillRect(0, 0, width, height);

      // 3. Warm amber/orange light bloom on upper-right
      const amberSweepX = width * (0.72 + Math.sin(time * 0.45) * 0.06);
      const amberSweepY = height * (0.3 + Math.cos(time * 0.38) * 0.05);
      const amberGlow = ctx.createRadialGradient(
        amberSweepX,
        amberSweepY,
        15,
        amberSweepX,
        amberSweepY,
        Math.max(width, height) * 0.42
      );
      amberGlow.addColorStop(0, "rgba(249, 115, 22, 0.30)");
      amberGlow.addColorStop(0.45, "rgba(217, 70, 239, 0.12)");
      amberGlow.addColorStop(1, "rgba(18, 8, 44, 0)");
      ctx.fillStyle = amberGlow;
      ctx.fillRect(0, 0, width, height);

      // 4. Curved hexagonal grid
      const cols = 28;
      const rows = 18;
      const baseRadius = Math.max(24, Math.min(width, height) / 22);

      for (let gy = 0; gy <= rows; gy++) {
        for (let gx = 0; gx <= cols; gx++) {
          const offsetX = gy % 2 === 0 ? 0 : 0.5;
          const { x, y, elevation } = projectHexVertex(
            gx + offsetX,
            gy,
            time,
            width * 0.5,
            height * 0.56
          );

          if (x < -80 || x > width + 80 || y < -80 || y > height + 80) {
            continue;
          }

          const radius = Math.max(12, baseRadius + elevation * 0.25);
          drawHexagon(x, y, radius, time, gx + offsetX, gy);
        }
      }

      // 5. Subtle diagonal light streaks
      ctx.save();
      for (let i = 0; i < 14; i++) {
        const streakProgress = ((time * 0.14 + i * 0.17) % 1.2) - 0.1;
        const sx = streakProgress * width * 1.15;
        const sy = height * (0.15 + ((i * 37) % 70) / 100) - streakProgress * 60;
        const len = 50 + (i % 4) * 28;

        const streakGrad = ctx.createLinearGradient(sx, sy, sx + len, sy - len * 0.35);
        streakGrad.addColorStop(0, "rgba(255, 255, 255, 0)");
        streakGrad.addColorStop(0.5, "rgba(165, 243, 252, 0.16)");
        streakGrad.addColorStop(1, "rgba(255, 255, 255, 0)");

        ctx.strokeStyle = streakGrad;
        ctx.lineWidth = 1.1;
        ctx.beginPath();
        ctx.moveTo(sx, sy);
        ctx.lineTo(sx + len, sy - len * 0.35);
        ctx.stroke();
      }
      ctx.restore();

      // 6. Soft dark vignette for foreground readability
      const vignette = ctx.createRadialGradient(
        width * 0.5,
        height * 0.5,
        Math.min(width, height) * 0.25,
        width * 0.5,
        height * 0.5,
        Math.max(width, height) * 0.78
      );
      vignette.addColorStop(0, "rgba(15, 7, 36, 0.05)");
      vignette.addColorStop(1, "rgba(9, 4, 22, 0.62)");
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, width, height);
    };

    const tick = (now: number) => {
      renderFrame(now);
      if (!mediaQuery.matches) {
        animationFrameId = window.requestAnimationFrame(tick);
      }
    };

    resize();
    if (mediaQuery.matches) {
      renderFrame(0);
    } else {
      animationFrameId = window.requestAnimationFrame(tick);
    }

    const handleChange = () => {
      window.cancelAnimationFrame(animationFrameId);
      if (mediaQuery.matches) {
        renderFrame(0);
      } else {
        animationFrameId = window.requestAnimationFrame(tick);
      }
    };

    window.addEventListener("resize", resize);
    mediaQuery.addEventListener("change", handleChange);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none ${className}`}
    />
  );
}
