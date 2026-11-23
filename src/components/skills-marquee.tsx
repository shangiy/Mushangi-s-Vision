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
  SiAmazonwebservices,
  SiSupabase
} from '@icons-pack/react-simple-icons';

/**
 * @fileOverview A high-performance WebGL hero section with interactive hexagonal mesh.
 * Features a smooth technology marquee moving left-to-right inside a glass card.
 */

const JavaIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M1.329 11.73c0 .069 0 .11.028.165 0 .028.027.028.027.055.055.193.138.358.248.523.055.083.11.165.193.22.138.166.275.303.44.414.11.055.221.11.358.138.276.11.551.193.854.22.138.028.276.028.414.028.358 0 .689-.028 1.047-.083.33-.055.661-.138.992-.221l.303-.083c.165-.055.33-.083.496-.138a.65.65 0 0 1 .193-.055c.027 0 .055 0 .083.028.027.027.055.055.055.082a.145.145 0 0 1-.028.055c-.027.028-.055.056-.082.083-.166.11-.331.193-.524.303l-.468.22c-.193.083-.386.166-.579.248l-.496.193c-.193.083-.386.138-.579.22-.386.11-.772.221-1.187.276-.248.027-.496.055-.744.055a4.42 4.42 0 0 1-1.158-.166c-.33-.082-.661-.192-.938-.358-.275-.165-.523-.358-.744-.579-.248-.22-.441-.468-.607-.716-.165-.248-.275-.524-.358-.8a2.535 2.535 0 0 1-.11-.91c0-.33.055-.662.165-.965.11-.33.248-.661.441-.938.193-.303.441-.578.717-.826.275-.248.606-.441.938-.606.33-.165.689-.276 1.047-.33.359-.056.745-.083 1.131-.056.138 0 .276.028.414.028.165.028.33.055.496.083.165.055.33.082.496.138.165.055.33.082.496.138l.193.082c.165.055.33.11.496.193l.33.138c.165.083.33.165.496.275.166.083.33.193.469.303.11.11.248.193.358.33.11.138.22.276.303.44.083.166.166.331.193.524.055.193.083.386.083.579a2.585 2.585 0 0 1-.193 1.02c-.11.248-.275.496-.468.716a2.864 2.864 0 0 1-.744.606c-.303.166-.634.303-.965.386-.331.11-.689.166-1.047.193a4.57 4.57 0 0 1-1.159-.028c-.248-.027-.496-.082-.744-.165-.221-.083-.441-.193-.662-.303-.11-.055-.22-.11-.33-.193l-.33-.22c-.11-.083-.193-.166-.276-.248-.055-.083-.11-.166-.165-.248-.055-.083-.083-.193-.083-.276 0-.082.028-.165.055-.22a.145.145 0 0 1 .055-.055c.028-.028.056-.028.083-.028.055 0 .11.028.165.055.056.028.11.083.166.138.083.083.165.165.275.22.083.083.193.138.303.193.193.11.414.193.634.248.221.055.441.11.689.11.248 0 .496-.027.744-.055.221-.027.441-.082.661-.138.221-.082.414-.192.607-.302.165-.11.33-.248.44-.414.11-.138.194-.303.249-.468.055-.166.082-.331.082-.524 0-.165-.027-.33-.082-.496a1.144 1.144 0 0 0-.193-.386 1.34 1.34 0 0 0-.303-.33c-.11-.083-.248-.166-.386-.22-.138-.056-.276-.11-.441-.166l-.496-.138c-.165-.055-.33-.082-.496-.11a3.178 3.178 0 0 0-.524-.055c-.33 0-.661.027-.992.083-.303.055-.606.137-.881.248-.276.11-.524.275-.717.468-.193.193-.33.414-.413.661-.083.248-.138.524-.138.827 0 .248.027.496.082.744.056.248.166.496.276.716.138.22.303.414.496.579.193.165.414.303.661.413a2.915 2.915 0 0 0 .827.248 5.753 5.753 0 0 0 .965.056c.303 0 .606-.028.91-.055.303-.056.578-.11.854-.193.248-.083.496-.193.716-.303.11-.055.22-.11.33-.193.083-.055.166-.11.221-.193l.165-.165.028-.028c.027-.027.055-.027.082-.027.028 0 .056.027.056.055l.027.055-.027.055c-.055.138-.138.248-.22.358l-.138.166c-.055.055-.138.11-.193.165-.11.083-.248.193-.358.248l-.386.22c-.138.083-.275.138-.414.193-.165.055-.33.11-.496.166l-.523.138c-.358.082-.717.137-1.075.165a6.45 6.45 0 0 1-1.158 0 5.485 5.485 0 0 1-1.047-.193 3.633 3.633 0 0 1-.91-.386 2.652 2.652 0 0 1-.744-.606c-.22-.221-.386-.469-.524-.744a2.535 2.535 0 0 1-.165-.882c0-.055 0-.11.028-.165zm12.357-3.83c-.11-.055-.221-.11-.358-.165l-.33-.138a4.19 4.19 0 0 0-.497-.138 3.036 3.036 0 0 0-.523-.055c-.276 0-.552.027-.827.083a2.028 2.028 0 0 0-.744.275c-.22.138-.414.303-.551.496-.138.22-.248.441-.303.689a2.38 2.38 0 0 0-.083.827c0 .248.028.496.11.744.055.248.165.496.303.716.138.22.33.414.551.579.22.165.496.275.772.358a3.784 3.784 0 0 0 .91.138c.33.028.661.028.993 0 .33-.027.661-.082.964-.165.303-.083.579-.193.827-.33a2.373 2.373 0 0 0 .661-.579c.193-.221.331-.469.414-.744.082-.276.137-.552.137-.854 0-.304-.027-.606-.11-.882a2.37 2.37 0 0 0-.331-.772 2.53 2.53 0 0 0-.579-.606c-.138-.11-.275-.193-.44-.248zm.138 2.893c-.138.165-.303.303-.496.413a2.37 2.37 0 0 1-.716.331 3.232 3.232 0 0 1-.91.138c-.248 0-.496-.028-.744-.083a1.59 1.59 0 0 1-.606-.275 1.157 1.157 0 0 1-.414-.468.96.96 0 0 1-.137-.634c0-.165.027-.33.082-.496a1.144 1.144 0 0 1 .193-.386 1.103 1.103 0 0 1 .303-.303c.138-.11.275-.165.44-.22.166-.056.331-.11.524-.138.193-.028.386-.055.579-.055.221 0 .441.027.661.082a1.95 1.95 0 0 1 .579.22c.165.083.33.193.44.331.11.138.193.303.249.468.055.193.082.386.082.579a1.71 1.71 0 0 1-.082.744zm.358-6.173a14.28 14.28 0 0 0-1.158-.689c-.386-.193-.827-.358-1.268-.468a4.52 4.52 0 0 0-1.295-.166c-.358 0-.717.028-1.047.083-.358.055-.689.165-.992.303-.303.138-.551.33-.744.579-.193.22-.33.496-.414.772-.082.303-.11.606-.11.937s.028.634.11.937c.083.303.22.579.414.827.193.22.441.44.744.578.303.166.634.276.992.359.33.055.689.082 1.047.082.441 0 .882-.055 1.295-.165.441-.11.882-.276 1.268-.468.413-.193.8-.441 1.158-.717.055-.055.11-.11.165-.165.028-.028.055-.055.083-.083.055-.055.082-.11.082-.192 0-.083-.027-.166-.082-.22a.145.145 0 0 0-.055-.056.145.145 0 0 0-.083-.027.145.145 0 0 0-.083.027l-.055.056c-.055.055-.11.11-.165.165a4.7 4.7 0 0 1-1.047.662c-.358.165-.745.303-1.158.413-.414.083-.827.138-1.241.138a3.3 3.3 0 0 1-1.1-.11 2.22 2.22 0 0 1-.855-.386 1.95 1.95 0 0 1-.606-.716 2.373 2.373 0 0 1-.22-.993c0-.33.055-.66.22-.964.138-.303.358-.579.606-.772.248-.193.551-.331.854-.441.33-.11.662-.165 1.103-.165.414 0 .827.055 1.24.165.414.083.827.193 1.158.413.358.193.717.414 1.047.662.055.055.11.082.165.138.028.027.055.055.083.055.055 0 .082-.028.11-.055a.145.145 0 0 0 .027-.083.145.145 0 0 0-.027-.082.145.145 0 0 0-.056-.055c-.027-.028-.055-.055-.082-.083zM1.88 4.293c.055-.083.138-.166.193-.248.11-.166.221-.303.358-.414a2.915 2.915 0 0 1 .827-.413c.33-.11.661-.193.993-.248.33-.055.689-.083 1.02-.083.33 0 .661.028 1.02.083.33.055.661.138.992.248a2.915 2.915 0 0 1 .827.413c.11.11.248.248.358.414.055.082.138.165.193.248.055.083.11.193.11.303 0 .11-.055.193-.11.275l-.138.193a.47.47 0 0 1-.22.166.22.22 0 0 1-.166.027c-.083 0-.138-.027-.193-.055-.055-.028-.11-.082-.165-.138-.055-.082-.138-.165-.193-.248-.083-.11-.193-.22-.303-.303-.138-.11-.276-.193-.44-.248a2.373 2.373 0 0 0-.606-.165c-.248-.028-.496-.055-.745-.055-.248 0-.496.027-.744.055-.22.028-.414.083-.606.165-.165.055-.33.138-.44.248-.11.083-.22.193-.303.303-.083.083-.138.166-.193.248-.055.055-.11.11-.165.138a.22.22 0 0 1-.193.055.438.438 0 0 1-.165-.027.47.47 0 0 1-.22-.166.47.47 0 0 1-.138-.193c-.027-.11 0-.22.056-.303zm12.357 1.543c0 .11-.028.22-.056.303a.47.47 0 0 1-.138.193.47.47 0 0 1-.22.166.438.438 0 0 1-.165.027.22.22 0 0 1-.193-.055c-.055-.028-.11-.083-.165-.138-.055-.083-.138-.166-.193-.248-.083-.11-.193-.22-.303-.303-.165-.11-.33-.193-.441-.248a2.373 2.373 0 0 0-.606-.165c-.248-.028-.496-.055-.744-.055s-.496.027-.744.055c-.248.028-.441.083-.607.165-.165.055-.303.138-.44.248-.138.083-.22.193-.303.303-.083.083-.138.166-.193.248-.055.055-.11.11-.165.138-.055.028-.11.055-.193.055-.083 0-.138-.027-.166-.027-.082-.028-.165-.083-.22-.166-.055-.083-.083-.166-.138-.193-.028-.11-.028-.193.055-.303.055-.083.083-.193.138-.275.055-.083.138-.166.193-.248.11-.166.221-.303.358-.414.138-.11.303-.248.496-.33.193-.11.414-.193.634-.248.248-.055.496-.11.745-.11a4.42 4.42 0 0 1 1.158.166c.33.082.634.192.91.358.275.165.523.358.744.579.22.22.413.468.579.716.11.248.165.496.165.744zm-7.61 14.127c-.027.055-.027.138-.055.193-.028.055-.055.11-.083.165s-.083.11-.138.165c-.055.028-.138.055-.22.055a.22.22 0 0 1-.166-.055.438.438 0 0 1-.027-.165v-.193l.027-.193c.028-.138.083-.275.138-.413a.623.623 0 0 1 .193-.22c.083-.055.193-.055.248-.028.055.028.083.083.11.138.028.055.055.11.055.193.028.11.083.248.11.386v.193zm1.186 0c0 .11-.028.221-.028.33-.027.11-.055.22-.11.33-.055.11-.11.194-.22.249-.11.055-.221.055-.331.027-.11-.027-.193-.082-.248-.165a.623.623 0 0 1-.193-.22c-.055-.138-.11-.275-.138-.413v-.193l.028-.193c.027-.138.055-.275.11-.413a1.144 1.144 0 0 1 .193-.386c.083-.083.165-.165.248-.193.11-.027.221-.027.33 0 .11.028.193.083.249.165.055.11.11.193.138.303.027.11.055.248.055.386a3.86 3.86 0 0 1-.083.744zM7.562 18.06c.083-.083.193-.165.33-.22.138-.056.276-.11.441-.166.166-.027.358-.055.551-.083.193-.027.386-.027.579-.027.22 0 .414.027.606.055.193.027.359.082.524.165.165.083.303.193.413.33.11.138.166.304.166.497 0 .11-.028.22-.055.303-.028.11-.083.193-.138.275a.65.65 0 0 1-.193.193.308.308 0 0 1-.22.055c-.11 0-.193-.027-.248-.055a.438.438 0 0 1-.166-.138c-.082-.083-.165-.165-.248-.22a1.053 1.053 0 0 0-.303-.138c-.138-.055-.248-.055-.386-.055-.165 0-.303.027-.44.055a1.103 1.103 0 0 0-.304.138 1.103 1.103 0 0 0-.22.22.438.438 0 0 1-.138.138.22.22 0 0 1-.166.028.308.308 0 0 1-.22-.055.65.65 0 0 1-.193-.193.81.81 0 0 1-.138-.276.96.96 0 0 1 0-.33c.027-.11.082-.22.137-.303zm6.34 1.543c-.11 0-.193-.027-.248-.055a.438.438 0 0 1-.166-.138c-.082-.083-.165-.165-.248-.22a1.053 1.053 0 0 0-.303-.138c-.138-.055-.275-.055-.386-.055-.165 0-.303.027-.441.055-.138.028-.248.083-.303.138a1.103 1.103 0 0 0-.22.22.438.438 0 0 1-.138.138.22.22 0 0 1-.165.028.308.308 0 0 1-.22-.055.65.65 0 0 1-.193-.193.81.81 0 0 1-.138-.276.96.96 0 0 1 0-.33c.027-.11.083-.22.138-.303a1.436 1.436 0 0 1 .33-.22c.166-.083.303-.138.469-.193.165-.055.358-.083.551-.11a4.29 4.29 0 0 1 .579-.027c.22 0 .414.027.606.055.193.027.358.082.524.165.165.083.303.193.414.33.11.138.165.304.165.497 0 .11-.027.22-.055.303-.027.11-.082.193-.138.275a.65.65 0 0 1-.193.193.308.308 0 0 1-.22.055zm-.248 1.405c.028.11.028.22.028.33 0 .11-.028.193-.055.276a.65.65 0 0 1-.193.193.308.308 0 0 1-.22.055c-.11 0-.193-.028-.248-.055a.438.438 0 0 1-.138-.138c-.083-.083-.166-.165-.248-.22a1.053 1.053 0 0 0-.303-.138c-.138-.055-.248-.055-.386-.055-.165 0-.303.027-.441.055-.138.028-.248.083-.303.138a1.103 1.103 0 0 0-.22.22.438.438 0 0 1-.138.138.22.22 0 0 1-.165.028.308.308 0 0 1-.22-.055.65.65 0 0 1-.193-.193.81.81 0 0 1-.138-.276c-.027-.11-.027-.22 0-.33.028-.11.083-.22.138-.303.082-.11.193-.193.33-.248.166-.083.303-.138.469-.193.165-.055.358-.083.551-.11a4.29 4.29 0 0 1 .579-.027c.22 0 .414.027.606.055.193.027.358.082.524.165.165.083.303.193.414.33.11.138.165.304.165.497 0 .11-.027.22-.055.303zm-7.61-3.61c.027.11.028.221.028.331 0 .11-.028.193-.055.275a.65.65 0 0 1-.193.193.308.308 0 0 1-.22.055c-.11 0-.193-.027-.248-.055a.438.438 0 0 1-.138-.138.81.81 0 0 0-.248-.22c-.11-.055-.22-.11-.331-.138-.11-.055-.248-.055-.386-.055-.165 0-.303.027-.44.055-.138.028-.248.083-.304.138a1.103 1.103 0 0 0-.22.22.438.438 0 0 1-.138.138.22.22 0 0 1-.165.028.308.308 0 0 1-.22-.055.65.65 0 0 1-.193-.193.81.81 0 0 1-.138-.276.96.96 0 0 1 0-.33c.027-.11.082-.22.137-.303a1.436 1.436 0 0 1 .331-.22c.165-.083.303-.138.468-.193.166-.055.359-.083.551-.11.193-.027.386-.027.579-.027.22 0 .414.027.606.055.193.027.359.082.524.165.165.083.303.193.413.33.11.138.166.304.166.497 0 .11-.028.22-.055.303z" />
  </svg>
);

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
  { icon: SiSupabase, name: 'Supabase' },
  { icon: JavaIcon, name: 'Java' },
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
      className="relative w-full min-h-[400px] md:min-h-[450px] flex flex-col items-center justify-center overflow-hidden bg-slate-950 px-4 py-8 md:py-12"
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

      <div className="digital-products-hero relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center gap-8 md:gap-12">
        {/* Hero Content */}
        <div className="text-center space-y-2">
          <p className="text-cyan-400 font-medium tracking-[0.2em] uppercase text-xs md:text-sm animate-pulse">
            Design • Build • Grow
          </p>
        </div>

        {/* CTA Card with Tech Marquee */}
        <div className="glass-card w-full rounded-2xl p-4 md:p-8 overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/20 via-transparent to-slate-950/20 pointer-events-none z-10" />
          
          <div className="flex animate-marquee-reverse whitespace-nowrap">
            {/* First Set */}
            <div className="flex gap-8 md:gap-16 items-center px-4">
              {techIcons.map((tech, idx) => (
                <div key={`tech-1-${idx}`} className="flex flex-col items-center gap-2 group">
                  <tech.icon className="w-8 h-8 md:w-10 md:h-10 text-slate-300 transition-all duration-300 group-hover:text-cyan-400 group-hover:scale-110 drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]" />
                  <span className="text-[9px] md:text-xs font-bold text-slate-400 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
            {/* Second Set for Loop */}
            <div className="flex gap-8 md:gap-16 items-center px-4">
              {techIcons.map((tech, idx) => (
                <div key={`tech-2-${idx}`} className="flex flex-col items-center gap-2 group">
                  <tech.icon className="w-8 h-8 md:w-10 md:h-10 text-slate-300 transition-all duration-300 group-hover:text-cyan-400 group-hover:scale-110 drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]" />
                  <span className="text-[9px] md:text-xs font-bold text-slate-400 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
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
