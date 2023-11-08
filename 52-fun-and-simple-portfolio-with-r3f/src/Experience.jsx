import {
  Float,
  useGLTF,
  Environment,
  PresentationControls,
  ContactShadows,
  Html,
  Text,
} from "@react-three/drei";

import * as THREE from "three";

import TextName from "./TextName";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Physics, RigidBody } from "@react-three/rapier";





// function Laptop() {
//   const laptopGroupRef = useRef();

//   useFrame(() => {
//     if (laptopGroupRef.current) {
//       // Define the target rotation angle to close the laptop
//       const targetAngle = Math.PI / 2; // 90 degrees in radians

//       // Gradually close the laptop until it reaches the target angle
//       if (laptopGroupRef.current.rotation.x < targetAngle) {
//         laptopGroupRef.current.rotation.x += 0.02; // Adjust the speed as needed
//       }
//     }
//   });

//   return (
//     <group ref={laptopGroupRef}>
    
//       <mesh>
//         {Mac.scene.children[0].childen[8]}
//       </mesh>
//       <mesh>
//         {/* Laptop part 2 */}
//       </mesh>
//       {/* ... Add more laptop parts here */}
//     </group>
//   );
// }


// const Mac = useGLTF(
//   "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
// );

// console.log(Mac.scene.children[0].childen[8]);



export default function Experience() {
  const [clicked, setclicked] = useState(false);
  const marker = useRef();


  useFrame((state) => {
    if (clicked) {
      state.camera.position.lerp(new THREE.Vector3(-1.7, 1.5, 1), 0.1);
      //close macbook
    } else {
      state.camera.position.lerp(new THREE.Vector3(-3, 1.5, 4), 0.1);
    }
  });

  const Mac = useGLTF(
    "./model.gltf"
  );
 
  return (
    <>
      <Environment
        background={false} // can be true, false or "only" (which only sets the background) (default: false)
        blur={0} // blur factor between 0 and 1 (default: 0, only works with three 0.146 and up)
        files="./modern_buildings_2_4k.hdr"
        path="/"
        preset={null}
        scene={undefined} // adds the ability to pass a custom THREE.Scene, can also be a ref
        encoding={undefined} // adds the ability to pass a custom THREE.TextureEncoding (default: THREE.sRGBEncoding for an array of files and THREE.LinearEncoding for a single texture)
      />

      <color attach="background" args={["#171720"]} />
      <Physics>
        <PresentationControls
          global
          config={{ mass: 2, tension: 400 }}
          snap={{ mass: 4, tension: 400 }}
          rotation={[0.1, -0.4, 0]}
          polar={[-0.5, 0.2]}
          azimuth={[-0.3, 0.5]}
        >
          <Float
            speed={2} // Animation speed, defaults to 1
            rotationIntensity={1} // XYZ rotation intensity, defaults to 1
            // floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
            floatingRange={[1, 1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
          >
          <rectAreaLight
            width={2.5}
            height={1.65}
            intensity={45}
            color={"yellow"}
            rotation={[0.1, Math.PI, 0]}
            position={[0, 0.55, -1.55]}
          />

          <primitive
            object={Mac.scene}
            ref={marker}
            onClick={() => setclicked(!clicked)}
            position-y={-2}
          >
            <Html
              transform
              wrapperClass="htmlclass"
              distanceFactor={1.17}
              position={[0, 1.56, -1.4]}
              rotation-x={-0.256}
            >
              <iframe src="https://thamank.netlify.app"></iframe>
            </Html>
            <Text fontSize={0} position={[2.1, 0.5, -1]}>
              {" "}
              {`<-- Click on Keyboard`}{" "}
            </Text>
          </primitive>
          </Float>
        </PresentationControls>
      </Physics>
      <ContactShadows position-y={-1.2} opacity={0.4} scale={5} blur={1.4} />
      <TextName />
      <rectAreaLight
        width={2.5}
        height={1.65}
        intensity={45}
        color={"yellow"}
        rotation={[0.1, Math.PI, 0]}
        position={[3, 0.55, -1.55]}
      />
    </>
  );
}
