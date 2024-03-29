import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas, CanvasProps } from "@react-three/fiber";
import Model from "@components/three-d/model";
import { canvasCss, canvasWrapperCss } from "./styles";

export default function ThreeDCanvas() {
  const cameraProps: CanvasProps["camera"] = {
    position: [350, 80, 575],
    rotation: [0, 0, 0],
    aspect: 4 / 3,
    fov: 12,
    type: "CubeCamera",
  };

  return (
    <div css={canvasWrapperCss} className="canvas-wrapper">
      <Suspense fallback={<></>}>
        <Canvas css={canvasCss} camera={cameraProps}>
          <Suspense fallback={<></>}>
            <ambientLight intensity={3} color={"#2ac5f0"} />
            <ambientLight intensity={0.45} color={"#d453ff"} />
            {/* <directionalLight
              intensity={1}
              color={"#72b0f7"}
              position={[1, 0, 1]}
            /> */}
            <Model />
            <OrbitControls enableDamping />
            {/* <axesHelper args={[600]} /> */}
          </Suspense>
        </Canvas>
      </Suspense>
    </div>
  );
}
