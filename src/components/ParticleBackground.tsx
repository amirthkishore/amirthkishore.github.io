"use client";

import { useEffect, useRef, useMemo, useCallback, useState } from 'react';
import * as THREE from 'three';

const ParticleBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  const frameRef = useRef<number>(0);

  // Responsive particle count based on screen size
  const count = useMemo(() => {
    if (typeof window === 'undefined') return 2000;
    return window.innerWidth < 768 ? 1500 : 3000;
  }, []);

  const [hasWebGL, setHasWebGL] = useState(true);

  // Check WebGL support
  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      setHasWebGL(!!gl);
    } catch (e) {
      setHasWebGL(false);
    }
  }, []);

  const createGeometry = useCallback(() => {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      positions[i3] = Math.random() * 50 - 25;
      positions[i3 + 1] = Math.random() * 50 - 25;
      positions[i3 + 2] = Math.random() * 50 - 25;

      // Set monochrome white color with varying opacity
      const brightness = Math.random() * 0.5 + 0.5;
      colors[i3] = brightness;
      colors[i3 + 1] = brightness;
      colors[i3 + 2] = brightness;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    return geometry;
  }, [count]);

  const handleResize = useCallback(() => {
    if (cameraRef.current && rendererRef.current) {
      cameraRef.current.aspect = window.innerWidth / window.innerHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    }
  }, []);

  useEffect(() => {
    if (!containerRef.current || !hasWebGL) return;

    try {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        50,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.z = 50;

      const renderer = new THREE.WebGLRenderer({ 
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance'
      });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setClearColor(0x000000, 0);

      containerRef.current.appendChild(renderer.domElement);

      const geometry = createGeometry();
      const material = new THREE.PointsMaterial({
        size: 0.15,
        vertexColors: true,
        transparent: true,
        opacity: 0.6,
        sizeAttenuation: true,
        blending: THREE.AdditiveBlending
      });

      const particles = new THREE.Points(geometry, material);
      scene.add(particles);

      sceneRef.current = scene;
      cameraRef.current = camera;
      rendererRef.current = renderer;
      particlesRef.current = particles;

      let lastTime = 0;
      const animate = (currentTime: number) => {
        try {
          frameRef.current = requestAnimationFrame(animate);

          const deltaTime = (currentTime - lastTime) * 0.001;
          lastTime = currentTime;

          if (particlesRef.current) {
            particlesRef.current.rotation.y += deltaTime * 0.05;

            const positions = particlesRef.current.geometry.attributes.position.array;
            const colors = particlesRef.current.geometry.attributes.color.array;

            for (let i = 0; i < count; i++) {
              const i3 = i * 3;
              const x = positions[i3];
              const y = positions[i3 + 1];
              const z = positions[i3 + 2];

              const factor = 20 + Math.random() * 100;
              const speed = 0.01 + Math.random() / 200;

              positions[i3] = x + Math.cos((currentTime * 0.001 + x * 10) / factor) * speed;
              positions[i3 + 1] = y + Math.sin((currentTime * 0.001 + y * 10) / factor) * speed;
              positions[i3 + 2] = z + Math.cos((currentTime * 0.001 + z * 10) / factor) * speed;

              // Subtle brightness pulsing
              const brightness = 0.75 + Math.sin(currentTime * 0.001 + i / count) * 0.25;
              colors[i3] = brightness;
              colors[i3 + 1] = brightness;
              colors[i3 + 2] = brightness;
            }

            particlesRef.current.geometry.attributes.position.needsUpdate = true;
            particlesRef.current.geometry.attributes.color.needsUpdate = true;
          }

          if (rendererRef.current && sceneRef.current && cameraRef.current) {
            rendererRef.current.render(sceneRef.current, cameraRef.current);
          }
        } catch (error) {
          console.error('Animation error:', error);
          cancelAnimationFrame(frameRef.current);
        }
      };

      animate(0);
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        cancelAnimationFrame(frameRef.current);
        if (rendererRef.current && containerRef.current) {
          containerRef.current.removeChild(rendererRef.current.domElement);
          rendererRef.current.dispose();
        }
        if (geometry) geometry.dispose();
        if (material) material.dispose();
      };
    } catch (error) {
      console.error('Three.js initialization error:', error);
      setHasWebGL(false);
    }
  }, [createGeometry, count, handleResize, hasWebGL]);

  if (!hasWebGL) {
    return (
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
          background: 'linear-gradient(to bottom, #000000, #1a1a1a)'
        }}
      />
    );
  }

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none',
        background: 'linear-gradient(to bottom, #000000, #1a1a1a)'
      }}
    />
  );
};

export default ParticleBackground;