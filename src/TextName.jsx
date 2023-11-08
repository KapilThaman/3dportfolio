import { Float, OrbitControls, Text3D } from "@react-three/drei";
import React from "react";


function TextName() {

  
  return (
    <>
      <Float
        speed={1} // Animation speed, defaults to 1
        rotationIntensity={0.3} // XYZ rotation intensity, defaults to 1
        // floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
        floatingRange={[-0.1, -0.2]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
      >
        <Text3D
          curveSegments={32}
          bevelEnabled
          bevelSize={0.04}
          bevelThickness={0.1}
          height={0.5}
          lineHeight={0.5}
          letterSpacing={-0.02}
          font={"./Libre Franklin Light_Italic.json"}
          size={0.3}
          position={[2.9, 1.2, -0.5]}
          rotation={[0, -1, 0]}
          castShadow={false}
          mutiline={true}
        >
          <meshStandardMaterial  />
          Kapil Thaman
        </Text3D>
      </Float>
      <Text3D
        
        curveSegments={32}
          bevelEnabled
          bevelSize={0.03}
          bevelThickness={0.2}
          height={-0.1}
          lineHeight={0.5}
          letterSpacing={-0.0}
          font={"./Libre Franklin Light_Italic.json"}
          size={0.18}
          position={[-2.2, -1.3, -0.5]}
          rotation={[-0.7, -0.5, -0.4]}
          castShadow={false}
          
        >
            <meshStandardMaterial />
          Web and Mobile Application Developer
           
        </Text3D>
    </>
  );
}

export default TextName;
