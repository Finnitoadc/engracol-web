import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { MeshStandardMaterial } from 'three';

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./sinfin.glb");

  // Crear un nuevo material y asignarle las propiedades que deseas
  const standardMaterial = new MeshStandardMaterial({
    color: 0xffffff,
    metalness: 1,
    roughness: 0,
    // ... otras propiedades de material que quieras ajustar
  });

  computer.scene.traverse((child) => {
    if (child.isMesh) {
      child.material = standardMaterial;
    }
  });

  return (
    <group>
      <hemisphereLight intensity={100} />
      <spotLight
        position={[90, 90, 90]}
        angle={1}
        penumbra={1}
        intensity={60}

        shadow-mapSize={1024}
      />

      <pointLight
        position={[-30, 30, 30]}
        intensity={100}
      />
      <pointLight
        position={[30, 30, 30]}
        intensity={100}
      />

      <directionalLight
        position={[0, -50, 0]} // Ajusta la posición como sea necesario
        intensity={20} // Ajusta la intensidad de la luz
        color={0xffffff} // Ajusta el color de la luz
      />

      <primitive
        object={computer.scene}
        scale={2}
        position={isMobile ? [0, 0, 0] : [0, 0, 1]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </group>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 1]}
      camera={{ position: [15, 10, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: false }}
    >
      <Suspense fallback={null}>
        <OrbitControls
          enableZoom={true}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          autoRotate={true}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
