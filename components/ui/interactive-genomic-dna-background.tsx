"use client";

import React, { useEffect, useRef } from "react";

const InteractiveGenomicDnaBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const pointer = useRef({ x: 0, y: 0, tX: 0, tY: 0 });
  const animationRef = useRef<number | null>(null);

  // WebGL setup
  useEffect(() => {
    const canvasEl = canvasRef.current;
    if (!canvasEl) return;

    const gl =
      canvasEl.getContext("webgl") ||
      canvasEl.getContext("experimental-webgl");

    if (!gl) {
      console.error("WebGL not supported");
      return;
    }

    const vsSource = `
      precision mediump float;
      attribute vec2 a_position;
      varying vec2 vUv;

      void main() {
        vUv = .5 * (a_position + 1.);
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    const fsSource = `
      precision mediump float;

      varying vec2 vUv;
      uniform float u_time;
      uniform float u_ratio;
      uniform vec2 u_pointer_position;
      uniform float u_scroll_progress;

      vec2 rotate(vec2 uv, float th) {
        return mat2(cos(th), sin(th), -sin(th), cos(th)) * uv;
      }

      float genomic_shape(vec2 uv, float t, float p) {
        vec2 sine_acc = vec2(0.);
        vec2 res = vec2(0.);
        float scale = 7.5;

        for (int j = 0; j < 15; j++) {
          uv = rotate(uv, 0.82);
          sine_acc = rotate(sine_acc, 0.95);

          vec2 layer = uv * scale + float(j) * 0.75 + sine_acc - t;
          sine_acc += sin(layer) + 1.35 * p;

          res += (.5 + .5 * cos(layer)) / scale;
          scale *= 1.18;
        }

        return res.x + res.y;
      }

      float dna_band(vec2 uv, float t) {
        vec2 centered = uv - vec2(0.55, 0.5);
        centered.x *= u_ratio;

        float waveA = sin(centered.y * 18.0 + t * 0.7) * 0.16;
        float waveB = sin(centered.y * 18.0 + t * 0.7 + 3.14159) * 0.16;

        float strandA = smoothstep(0.035, 0.0, abs(centered.x - waveA));
        float strandB = smoothstep(0.035, 0.0, abs(centered.x - waveB));

        float rungs = 0.0;
        float rungPattern = abs(fract(centered.y * 9.0 + t * 0.08) - 0.5);
        float rungMask = smoothstep(0.08, 0.0, rungPattern);
        float between = smoothstep(0.18, 0.02, abs(centered.x));

        rungs = rungMask * between * 0.42;

        return strandA + strandB + rungs;
      }

      void main() {
        vec2 uv = vUv;
        uv.x *= u_ratio;

        vec2 pointer = vUv - u_pointer_position;
        pointer.x *= u_ratio;

        float p = clamp(length(pointer), 0., 1.);
        p = .45 * pow(1. - p, 2.);

        float t = .001 * u_time;

        float neural = genomic_shape(.42 * uv, t, p);
        neural = 1.15 * pow(neural, 3.);
        neural += pow(neural, 8.);
        neural = max(.0, neural - .42);
        neural *= (1. - length(vUv - .5));

        float dna = dna_band(vUv, t);

        float finalShape = max(neural * 0.5, dna * 0.75);

        vec3 deepNavy = vec3(0.03, 0.12, 0.25);
        vec3 cobalt = vec3(0.05, 0.27, 0.58);
        vec3 cyan = vec3(0.05, 0.72, 0.86);
        vec3 softWhite = vec3(0.88, 0.97, 1.0);

        vec3 color = mix(deepNavy, cobalt, 0.45);
        color = mix(color, cyan, 0.35 + 0.12 * sin(u_scroll_progress + 1.0));
        color = mix(color, softWhite, dna * 0.35);

        float fadeLeft = smoothstep(0.08, 0.55, vUv.x);
        float fadeBottom = smoothstep(0.0, 0.18, vUv.y);
        float fadeTop = smoothstep(1.0, 0.75, vUv.y);

        float alpha = finalShape * fadeLeft * fadeBottom * fadeTop;

        gl_FragColor = vec4(color * finalShape, alpha);
      }
    `;

    const compileShader = (
      gl: WebGLRenderingContext,
      source: string,
      type: number
    ) => {
      const shader = gl.createShader(type);
      if (!shader) return null;

      gl.shaderSource(shader, source);
      gl.compileShader(shader);

      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error("Shader error:", gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }

      return shader;
    };

    const vertexShader = compileShader(gl as WebGLRenderingContext, vsSource, (gl as WebGLRenderingContext).VERTEX_SHADER);
    const fragmentShader = compileShader(gl as WebGLRenderingContext, fsSource, (gl as WebGLRenderingContext).FRAGMENT_SHADER);

    if (!vertexShader || !fragmentShader) return;

    const program = (gl as WebGLRenderingContext).createProgram();
    if (!program) return;

    (gl as WebGLRenderingContext).attachShader(program, vertexShader);
    (gl as WebGLRenderingContext).attachShader(program, fragmentShader);
    (gl as WebGLRenderingContext).linkProgram(program);

    if (!(gl as WebGLRenderingContext).getProgramParameter(program, (gl as WebGLRenderingContext).LINK_STATUS)) {
      console.error("Program link error:", (gl as WebGLRenderingContext).getProgramInfoLog(program));
      return;
    }

    (gl as WebGLRenderingContext).useProgram(program);

    const vertices = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
    const vertexBuffer = (gl as WebGLRenderingContext).createBuffer();

    (gl as WebGLRenderingContext).bindBuffer((gl as WebGLRenderingContext).ARRAY_BUFFER, vertexBuffer);
    (gl as WebGLRenderingContext).bufferData((gl as WebGLRenderingContext).ARRAY_BUFFER, vertices, (gl as WebGLRenderingContext).STATIC_DRAW);

    const positionLocation = (gl as WebGLRenderingContext).getAttribLocation(program, "a_position");

    (gl as WebGLRenderingContext).enableVertexAttribArray(positionLocation);
    (gl as WebGLRenderingContext).bindBuffer((gl as WebGLRenderingContext).ARRAY_BUFFER, vertexBuffer);
    (gl as WebGLRenderingContext).vertexAttribPointer(positionLocation, 2, (gl as WebGLRenderingContext).FLOAT, false, 0, 0);

    const uTime = (gl as WebGLRenderingContext).getUniformLocation(program, "u_time");
    const uRatio = (gl as WebGLRenderingContext).getUniformLocation(program, "u_ratio");
    const uPointerPosition = (gl as WebGLRenderingContext).getUniformLocation(program, "u_pointer_position");
    const uScrollProgress = (gl as WebGLRenderingContext).getUniformLocation(program, "u_scroll_progress");

    const resizeCanvas = () => {
      const devicePixelRatio = Math.min(window.devicePixelRatio, 2);
      canvasEl.width = window.innerWidth * devicePixelRatio;
      canvasEl.height = window.innerHeight * devicePixelRatio;

      (gl as WebGLRenderingContext).viewport(0, 0, canvasEl.width, canvasEl.height);

      if (uRatio) {
        (gl as WebGLRenderingContext).uniform1f(uRatio, canvasEl.width / canvasEl.height);
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const render = () => {
      const currentTime = performance.now();

      pointer.current.x += (pointer.current.tX - pointer.current.x) * 0.12;
      pointer.current.y += (pointer.current.tY - pointer.current.y) * 0.12;

      if (uTime) {
        (gl as WebGLRenderingContext).uniform1f(uTime, currentTime);
      }

      if (uPointerPosition) {
        (gl as WebGLRenderingContext).uniform2f(
          uPointerPosition,
          pointer.current.x / window.innerWidth,
          1 - pointer.current.y / window.innerHeight
        );
      }

      if (uScrollProgress) {
        (gl as WebGLRenderingContext).uniform1f(
          uScrollProgress,
          window.pageYOffset / (2 * window.innerHeight)
        );
      }

      (gl as WebGLRenderingContext).drawArrays((gl as WebGLRenderingContext).TRIANGLE_STRIP, 0, 4);

      animationRef.current = requestAnimationFrame(render);
    };

    render();

    const handlePointerMove = (e: PointerEvent) => {
      pointer.current.tX = e.clientX;
      pointer.current.tY = e.clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches[0]) {
        pointer.current.tX = e.touches[0].clientX;
        pointer.current.tY = e.touches[0].clientY;
      }
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("touchmove", handleTouchMove);

      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }

      (gl as WebGLRenderingContext).deleteProgram(program);
      (gl as WebGLRenderingContext).deleteShader(vertexShader);
      (gl as WebGLRenderingContext).deleteShader(fragmentShader);
    };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <canvas
        ref={canvasRef}
        id="genovision-genomic-background"
        className="absolute inset-0 h-full w-full opacity-80"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/50" />
    </div>
  );
};

export default InteractiveGenomicDnaBackground;
