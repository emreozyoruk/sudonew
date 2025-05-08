import { useRef, useEffect } from 'react'
import * as THREE from 'three'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Water } from 'three/addons/objects/Water.js'

function Ocean() {
  const waterRef = useRef()
  const { scene } = useThree()
  
  useEffect(() => {
    // Skybox oluştur
    const path = 'https://threejs.org/examples/textures/cube/Park3Med/';
    const format = '.jpg';
    const urls = [
      path + 'px' + format, path + 'nx' + format,
      path + 'py' + format, path + 'ny' + format,
      path + 'pz' + format, path + 'nz' + format
    ];

    const cubeTextureLoader = new THREE.CubeTextureLoader();
    const cubeTexture = cubeTextureLoader.load(urls);
    
    scene.background = cubeTexture;
    
    // Su oluştur
    const waterGeometry = new THREE.PlaneGeometry(10000, 10000);

    const water = new Water(
      waterGeometry,
      {
        textureWidth: 512,
        textureHeight: 512,
        waterNormals: new THREE.TextureLoader().load('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/waternormals.jpg', function(texture) {
          texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        }),
        sunDirection: new THREE.Vector3(),
        sunColor: 0xffffff,
        waterColor: 0x0066ff,
        distortionScale: 3.7,
        fog: scene.fog !== undefined
      }
    );

    water.rotation.x = -Math.PI / 2;
    waterRef.current = water;
    
    return () => {
      waterGeometry.dispose();
      water.material.dispose();
    };
  }, [scene]);

  useFrame((state, delta) => {
    if (waterRef.current) {
      waterRef.current.material.uniforms['time'].value += delta / 3;
    }
  });

  return waterRef.current ? <primitive object={waterRef.current} /> : null;
}

function Light() {
  const light = useRef();
  
  useFrame(({ clock }) => {
    if (light.current) {
      const time = clock.getElapsedTime();
      light.current.position.x = Math.sin(time * 0.1) * 20;
      light.current.position.y = Math.cos(time * 0.1) * 20;
    }
  });

  return (
    <>
      <ambientLight intensity={0.8} color="#b1e1ff" />
      <directionalLight
        ref={light}
        intensity={0.8}
        position={[10, 10, 10]}
        color="#ffffff"
      />
    </>
  );
}

export default function WaterEffect({ className = "" }) {
  return (
    <div className={`${className}`}>
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 10, 50]} fov={55} />
        <Ocean />
        <Light />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2.5}
          minPolarAngle={Math.PI / 3}
          rotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}

// Daha hafif ve basit 3D su dalgası animasyonu
export function SimplifiedWaterWave({ className = "" }) {
  return (
    <div className={`${className}`}>
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 15], fov: 50 }}>
        <WaveMesh />
        <ambientLight intensity={0.8} color="#b1e1ff" />
        <directionalLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}

// Canvas içinde kullanılacak iç bileşen
function WaveMesh() {
  const meshRef = useRef();
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      const time = clock.getElapsedTime();
      const position = meshRef.current.geometry.attributes.position;
      
      for (let i = 0; i < position.count; i++) {
        const x = position.getX(i);
        const y = position.getY(i);
        
        // Dalga efekti
        const waveX1 = 0.1 * Math.sin(x * 0.5 + time * 0.7);
        const waveX2 = 0.15 * Math.sin(x * 0.3 - time * 0.4);
        const waveY1 = 0.1 * Math.sin(y * 0.5 + time * 0.7);
        const waveY2 = 0.15 * Math.sin(y * 0.3 - time * 0.4);
        
        const wave = waveX1 + waveX2 + waveY1 + waveY2;
        
        position.setZ(i, wave);
      }
      
      position.needsUpdate = true;
    }
  });
  
  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 4, 0, 0]}>
      <planeGeometry args={[25, 25, 32, 32]} />
      <meshStandardMaterial 
        color="#3B82F6" 
        wireframe={false}
        roughness={0.1}
        metalness={0.8}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}