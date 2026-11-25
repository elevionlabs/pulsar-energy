import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface EnergyStream3DProps {
  className?: string;
}

export const EnergyStream3D: React.FC<EnergyStream3DProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const width = container.clientWidth || 600;
    const height = container.clientHeight || 650;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 18);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // Group for mouse parallax
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // Create Energy Plasma Spline Ribbons (Symbolic Lightning / Energy Pulse)
    const curvePoints = [
      new THREE.Vector3(-1.2, 5.5, 0.5),
      new THREE.Vector3(1.6, 3.2, 1.2),
      new THREE.Vector3(-0.8, 1.4, 0.8),
      new THREE.Vector3(2.4, -0.6, 1.8),
      new THREE.Vector3(0.2, -2.4, 0.4),
      new THREE.Vector3(1.8, -4.8, -0.6),
      new THREE.Vector3(-0.4, -6.2, -1.2),
    ];

    const spline = new THREE.CatmullRomCurve3(curvePoints);
    spline.curveType = 'centripetal';

    // 1. Primary Core Tube (Pulsar Red Glowing Core)
    const coreGeometry = new THREE.TubeGeometry(spline, 160, 0.38, 16, false);
    const coreMaterial = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#ED2749'),
      emissive: new THREE.Color('#C61F37'),
      emissiveIntensity: 1.8,
      roughness: 0.15,
      metalness: 0.1,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      transmission: 0.6,
      opacity: 0.95,
      transparent: true,
    });
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    mainGroup.add(coreMesh);

    // 2. Outer Translucent Glass/Plasma Energy Sheath
    const outerGeometry = new THREE.TubeGeometry(spline, 140, 0.72, 16, false);
    const outerMaterial = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#751923'),
      emissive: new THREE.Color('#C61F37'),
      emissiveIntensity: 0.6,
      roughness: 0.25,
      metalness: 0.3,
      transmission: 0.85,
      ior: 1.4,
      transparent: true,
      opacity: 0.45,
      wireframe: false,
    });
    const outerMesh = new THREE.Mesh(outerGeometry, outerMaterial);
    mainGroup.add(outerMesh);

    // 3. Secondary Intertwined Harmonic Energy Strands (Representing Precision & Efficiency)
    const secondaryPoints1 = [
      new THREE.Vector3(-0.5, 4.8, -0.8),
      new THREE.Vector3(2.2, 2.0, 0.5),
      new THREE.Vector3(-1.4, -0.2, 1.2),
      new THREE.Vector3(1.2, -2.8, 1.5),
      new THREE.Vector3(0.5, -5.5, 0.2),
    ];
    const spline2 = new THREE.CatmullRomCurve3(secondaryPoints1);
    const strandGeo1 = new THREE.TubeGeometry(spline2, 120, 0.14, 12, false);
    const strandMat1 = new THREE.MeshBasicMaterial({
      color: new THREE.Color('#FF3658'),
      transparent: true,
      opacity: 0.85,
    });
    const strandMesh1 = new THREE.Mesh(strandGeo1, strandMat1);
    mainGroup.add(strandMesh1);

    // 4. Orbiting Energy Particles (Plasma Dust / Field)
    const particleCount = 180;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleScales = new Float32Array(particleCount);
    const particleSpeeds = new Float32Array(particleCount);
    const particleRadii = new Float32Array(particleCount);
    const particleAngles = new Float32Array(particleCount);
    const particleYOffsets = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      const radius = 1.2 + Math.random() * 4.2;
      const angle = Math.random() * Math.PI * 2;
      const y = (Math.random() - 0.5) * 12;

      particlePositions[i * 3] = Math.cos(angle) * radius;
      particlePositions[i * 3 + 1] = y;
      particlePositions[i * 3 + 2] = Math.sin(angle) * radius;

      particleScales[i] = Math.random() * 0.08 + 0.03;
      particleSpeeds[i] = (Math.random() * 0.008 + 0.003) * (Math.random() > 0.5 ? 1 : -1);
      particleRadii[i] = radius;
      particleAngles[i] = angle;
      particleYOffsets[i] = y;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    // Custom circular soft glow texture for particles
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d')!;
    const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
    grad.addColorStop(0.3, 'rgba(237, 39, 73, 0.9)');
    grad.addColorStop(0.7, 'rgba(198, 31, 55, 0.3)');
    grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 64, 64);
    const particleTexture = new THREE.CanvasTexture(canvas);

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.45,
      map: particleTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      color: new THREE.Color('#FF526E'),
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    mainGroup.add(particles);

    // 5. Lighting Setup (Cinematic & Atmospheric)
    const ambientLight = new THREE.AmbientLight(0x1a0508, 1.2);
    scene.add(ambientLight);

    const keyLight = new THREE.PointLight(0xed2749, 4.5, 30);
    keyLight.position.set(4, 3, 6);
    scene.add(keyLight);

    const fillLight = new THREE.PointLight(0x751923, 3.0, 25);
    fillLight.position.set(-5, -2, 4);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xffffff, 0.8);
    rimLight.position.set(0, 8, -5);
    scene.add(rimLight);

    // 6. Geometric Ground Grid Plane (Subtle industrial coordinate plane)
    const gridHelper = new THREE.GridHelper(24, 24, 0xc61f37, 0x221115);
    gridHelper.position.y = -6.8;
    // Lower opacity grid
    if (gridHelper.material instanceof THREE.Material) {
      gridHelper.material.transparent = true;
      gridHelper.material.opacity = 0.25;
    }
    mainGroup.add(gridHelper);

    // Human scale indicator (delicate technical silhouette)
    const silhouetteMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(0x333338),
      transparent: true,
      opacity: 0.5,
    });
    const personBody = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.16, 1.3, 8), silhouetteMat);
    const personHead = new THREE.Mesh(new THREE.SphereGeometry(0.13, 8, 8), silhouetteMat);
    personBody.position.set(-3.2, -6.15, 2.5);
    personHead.position.set(-3.2, -5.35, 2.5);
    mainGroup.add(personBody);
    mainGroup.add(personHead);

    // Mouse Move Listener for subtle cinematic parallax
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseRef.current.targetX = (e.clientX / innerWidth - 0.5) * 0.6;
      mouseRef.current.targetY = (e.clientY / innerHeight - 0.5) * 0.4;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse interpolation
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.04;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.04;

      // Gentle organic float & rotation
      mainGroup.rotation.y = Math.sin(elapsedTime * 0.3) * 0.15 + mouseRef.current.x * 0.4;
      mainGroup.rotation.x = Math.cos(elapsedTime * 0.25) * 0.08 - mouseRef.current.y * 0.3;
      mainGroup.position.y = Math.sin(elapsedTime * 0.6) * 0.25;

      // Core pulsing
      const pulse = 1 + Math.sin(elapsedTime * 1.8) * 0.04;
      coreMesh.scale.set(pulse, 1, pulse);
      keyLight.intensity = 4.2 + Math.sin(elapsedTime * 2.2) * 0.8;

      // Particle movement
      const posAttr = particleGeometry.attributes.position as THREE.BufferAttribute;
      const positions = posAttr.array as Float32Array;

      for (let i = 0; i < particleCount; i++) {
        particleAngles[i] += particleSpeeds[i];
        const r = particleRadii[i] + Math.sin(elapsedTime + i) * 0.2;
        positions[i * 3] = Math.cos(particleAngles[i]) * r;
        positions[i * 3 + 1] = particleYOffsets[i] + Math.sin(elapsedTime * 0.8 + i) * 0.3;
        positions[i * 3 + 2] = Math.sin(particleAngles[i]) * r;
      }
      posAttr.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler with ResizeObserver
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width: newW, height: newH } = entry.contentRect;
        if (newW > 0 && newH > 0) {
          camera.aspect = newW / newH;
          camera.updateProjectionMatrix();
          renderer.setSize(newW, newH);
        }
      }
    });

    resizeObserver.observe(container);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      coreGeometry.dispose();
      outerGeometry.dispose();
      strandGeo1.dispose();
      particleGeometry.dispose();
      particleTexture.dispose();
      canvas.remove();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full min-h-[460px] md:min-h-[580px] lg:min-h-[720px] pointer-events-none select-none ${className}`}
      style={{
        filter: 'drop-shadow(0 0 35px rgba(198, 31, 55, 0.28)) drop-shadow(0 0 85px rgba(198, 31, 55, 0.15))',
      }}
    >
      {/* Soft virtual ground floor reflection illusion */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-4/5 h-20 bg-radial from-[#ED2749]/20 via-[#751923]/10 to-transparent blur-2xl pointer-events-none opacity-40 transform scale-y-50" />
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2/3 h-8 bg-white/5 blur-md rounded-full pointer-events-none opacity-30" />
    </div>
  );
};
