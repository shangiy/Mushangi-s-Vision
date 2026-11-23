'use client';

import React, { useEffect, useRef } from 'react';
import { 
  SiNextdotjs, 
  SiNodedotjs, 
  SiTypescript, 
  SiReact, 
  SiTailwindcss, 
  SiPython, 
  SiPostgresql, 
  SiMongodb, 
  SiFirebase, 
  SiGit, 
  SiGithub, 
  SiFigma, 
  SiVercel, 
  SiDocker, 
  SiAmazonwebservices 
} from '@icons-pack/react-simple-icons';

/**
 * @fileOverview A high-performance WebGL hero section with interactive hexagonal mesh.
 * Features a smooth technology marquee moving left-to-right inside a glass card.
 */

const techIcons = [
  { icon: SiNextdotjs, name: 'Next.js' },
  { icon: SiNodedotjs, name: 'Node.js' },
  { icon: SiTypescript, name: 'TypeScript' },
  { icon: SiReact, name: 'React' },
  { icon: SiTailwindcss, name: 'Tailwind' },
  { icon: SiPython, name: 'Python' },
  { icon: SiPostgresql, name: 'PostgreSQL' },
  { icon: SiMongodb, name: 'MongoDB' },
  { icon: SiFirebase, name: 'Firebase' },
  { icon: SiGit, name: 'Git' },
  { icon: SiGithub, name: 'GitHub' },
  { icon: SiFigma, name: 'Figma' },
  { icon: SiVercel, name: 'Vercel' },
  { icon: SiDocker, name: 'Docker' },
  { icon: SiAmazonwebservices, name: 'AWS' },
];

export function SkillsMarquee() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.innerWidth < 768;

    const gl = !reduce ? canvas.getContext('webgl', { 
      antialias: false, 
      alpha: false, 
      powerPreference: 'high-performance' 
    }) : null;

    if (!gl) return;

    const VERT = `attribute vec2 a; void main(){ gl_Position = vec4(a,0.,1.); }`;

    const FRAG = `
      #ifdef GL_FRAGMENT_PRECISION_HIGH
      precision highp float;
      #else
      precision mediump float;
      #endif
      #define OCT ${isMobile ? 3 : 5}
      uniform vec2  u_res;
      uniform float u_time;
      uniform vec3  u_mouse;

      float hash(vec2 p){ p = fract(p*vec2(123.34,456.21)); p += dot(p,p+45.32); return fract(p.x*p.y); }
      float noise(vec2 p){
        vec2 i = floor(p), f = fract(p); f = f*f*(3.-2.*f);
        return mix(mix(hash(i),hash(i+vec2(1,0)),f.x), mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x), f.y);
      }
      float fbm(vec2 p){
        float v = 0., a = .5;
        for(int i=0;i<OCT;i++){ v += a*noise(p); p = p*2.03 + vec2(17.1,9.7); a *= .5; }
        return v;
      }
      float hexDist(vec2 p){ p = abs(p); return max(dot(p, vec2(.5,.866)), p.x); }

      void main(){
        vec2 uv = gl_FragCoord.xy / u_res;
        vec2 p  = (gl_FragCoord.xy - .5*u_res) / u_res.y;
        float t = u_time;

        /* ---- liquid warp ---- */
        vec2 w = vec2(fbm(p*1.6 + vec2(t*.05, -t*.04)), fbm(p*1.6 + vec2(5.2 - t*.04, 1.3 + t*.05)));
        p += (w - .5) * .22;
        p += .018 * vec2(sin(p.y*5. + t*.45), cos(p.x*4. + t*.38));

        /* ---- slow radial ripple from centre ---- */
        vec2 c0 = vec2(0., -.05);
        float d0 = length(p - c0);
        p += normalize(p - c0 + 1e-4) * sin(d0*14. - t*.9) * .018 * exp(-d0*1.6);

        /* ---- mouse ripple ---- */
        vec2 m = (u_mouse.xy*u_res - .5*u_res) / u_res.y;
        float dm = length(p - m);
        p += normalize(p - m + 1e-4) * sin(dm*26. - t*2.2) * .03 * u_mouse.z * exp(-dm*3.5);

        /* ---- hex grid ---- */
        float s = 7.;
        vec2 hp = p * s;
        vec2 r = vec2(1., 1.732), h = r*.5;
        vec2 a = mod(hp, r) - h, b = mod(hp - h, r) - h;
        vec2 g = dot(a,a) < dot(b,b) ? a : b;
        vec2 id = hp - g;
        float y = .5 - hexDist(g);
        float rnd = hash(id);

        float pxw  = s * 1.5 / u_res.y;
        float core = 1. - smoothstep(pxw*.5, pxw*1.6, y);
        float glow = exp(-y*22.)*.5 + exp(-y*7.)*.1;

        /* ---- light rays catching edges ---- */
        float band = sin((p.x*.9 + p.y*1.3)*2.2 - t*.25)*.5 + .5;
        float lit  = .3 + .95*smoothstep(.3, .8, fbm(p*1.4 + vec2(t*.05, -t*.035))) + .35*band;
        float shimmer = .78 + .22*sin(t*.8 + rnd*6.283);

        /* ---- colour ---- */
        vec3 cyan   = vec3(.243,.788,1.);
        vec3 purple = vec3(.45,.30,.98);
        vec3 orange = vec3(1.,.42,.12);
        float accent = smoothstep(.86,.95,rnd) * (.5 + .5*sin(t*.4 + rnd*30.));
        vec3 edgeCol = mix(cyan, purple, smoothstep(.55,1.1,uv.y));
        edgeCol = mix(edgeCol, orange, accent);

        vec3 edge = (core + glow) * lit * shimmer * edgeCol;

        vec3 fill = mix(vec3(.015,.02,.05), vec3(.07,.10,.24), y*2.) * (.55 + .9*rnd) * (.6 + .5*lit);
        fill += orange * .05 * accent * y * 2.;

        vec3 bg = mix(vec3(.02,.024,.059), vec3(.102,.063,.251), smoothstep(.2,1.,uv.y));
        bg += vec3(.05,.07,.17) * exp(-dot((uv-.5)*vec2(1.,1.3),(uv-.5)*vec2(1.,1.3))*3.);

        vec3 col = bg + fill*.9 + edge;

        /* ---- vignette + dither ---- */
        float vig = smoothstep(1.05, .25, length((uv-.5)*vec2(1.1,1.2)));
        col *= mix(.25, 1., vig);
        col += (hash(gl_FragCoord.xy + fract(t)) - .5) / 255.;

        gl_FragColor = vec4(col, 1.);
      }
    `;

    function compile(type: number, src: string) {
      const sh = gl!.createShader(type);
      if (!sh) return null;
      gl!.shaderSource(sh, src);
      gl!.compileShader(sh);
      if (!gl!.getShaderParameter(sh, gl!.COMPILE_STATUS)) {
        console.error(gl!.getShaderInfoLog(sh));
        return null;
      }
      return sh;
    }

    const vs = compile(gl.VERTEX_SHADER, VERT);
    const fs = compile(gl.FRAGMENT_SHADER, FRAG);
    if (!vs || !fs) return;

    const prog = gl.createProgram();
    if (!prog) return;
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return;
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, 'a');
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(prog, 'u_res');
    const uTime = gl.getUniformLocation(prog, 'u_time');
    const uMouse = gl.getUniformLocation(prog, 'u_mouse');

    const resize = () => {
      if (!containerRef.current) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2) * (isMobile ? 0.65 : 1);
      const w = Math.max(1, Math.floor(containerRef.current.clientWidth * dpr));
      const h = Math.max(1, Math.floor(containerRef.current.clientHeight * dpr));
      canvas.width = w;
      canvas.height = h;
      gl.viewport(0, 0, w, h);
      gl.uniform2f(uRes, w, h);
    };

    window.addEventListener('resize', resize);
    resize();

    let tx = 0.5, ty = 0.5, mx = 0.5, my = 0.5, strength = 0;
    const onPointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width;
      const ny = 1 - (e.clientY - rect.top) / rect.height;
      strength = Math.min(1, strength + Math.hypot(nx - tx, ny - ty) * 8);
      tx = nx;
      ty = ny;
    };
    window.addEventListener('pointermove', onPointerMove);

    let t = 0, last = performance.now(), raf = 0;
    const frame = (now: number) => {
      raf = requestAnimationFrame(frame);
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      t += dt;
      const k = 1 - Math.pow(0.02, dt);
      mx += (tx - mx) * k;
      my += (ty - my) * k;
      strength *= Math.pow(0.25, dt);
      gl.uniform1f(uTime, t);
      gl.uniform3f(uMouse, mx, my, strength);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    };
    raf = requestAnimationFrame(frame);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onPointerMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-slate-950 px-4 py-24"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@500;600;700&display=swap');
        
        .digital-products-hero {
          --cyan: #3ec9ff;
          --red: #e11d2e;
          --blue: #1d3fc4;
          font-family: 'Rajdhani', sans-serif;
        }

        .digital-products-hero .glass-card {
          background: linear-gradient(180deg, rgba(52,36,130,0.42), rgba(10,10,32,0.6));
          border: 1px solid rgba(255,255,255,0.14);
          backdrop-filter: blur(14px);
          box-shadow: 0 20px 60px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.08);
        }

        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        .animate-marquee-reverse {
          animation: marquee-reverse 30s linear infinite;
        }
      `}</style>

      {/* Background WebGL Canvas */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full pointer-events-none opacity-0 transition-opacity duration-1000 data-[ready=true]:opacity-100"
        data-ready="true"
      />

      <div className="digital-products-hero relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center gap-16">
        {/* Hero Content */}
        <div className="text-center space-y-4">
          <p className="text-cyan-400 font-medium tracking-[0.2em] uppercase text-sm animate-pulse">
            Design • Build • Grow
          </p>
        </div>

        {/* CTA Card with Tech Marquee */}
        <div className="glass-card w-full rounded-2xl p-6 md:p-10 overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/20 via-transparent to-slate-950/20 pointer-events-none z-10" />
          
          <div className="flex animate-marquee-reverse whitespace-nowrap">
            {/* First Set */}
            <div className="flex gap-12 md:gap-20 items-center px-4">
              {techIcons.map((tech, idx) => (
                <div key={`tech-1-${idx}`} className="flex flex-col items-center gap-2 group">
                  <tech.icon className="w-10 h-10 md:w-12 md:h-12 text-slate-300 transition-all duration-300 group-hover:text-cyan-400 group-hover:scale-110 drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]" />
                  <span className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
            {/* Second Set for Loop */}
            <div className="flex gap-12 md:gap-20 items-center px-4">
              {techIcons.map((tech, idx) => (
                <div key={`tech-2-${idx}`} className="flex flex-col items-center gap-2 group">
                  <tech.icon className="w-10 h-10 md:w-12 md:h-12 text-slate-300 transition-all duration-300 group-hover:text-cyan-400 group-hover:scale-110 drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]" />
                  <span className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
