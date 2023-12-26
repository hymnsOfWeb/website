import { Ref, RefObject, Suspense, useEffect, useRef, useState } from "react";
import { OrbitControls } from "@react-three/drei";
import {
  Canvas,
  useLoader,
  CanvasProps,
  useThree,
  useFrame,
} from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { canvasCss, canvasWrapperCss } from "./styles";
import gsap from "gsap";

export default function ThreeD({
  observerRefs = [],
}: {
  observerRefs: Ref<HTMLDivElement>[];
}) {
  const [camPosition, setCamPosition] = useState<[number, number, number]>([
    350, 80, 575,
  ]);
  const [camRotation, setCamRotation] = useState<[number, number, number]>([
    0, 0, 0,
  ]);
  const cameraProps: CanvasProps["camera"] = {
    position: camPosition,
    rotation: camRotation,
    aspect: 4 / 3,
    fov: 12,
  };

  return (
    <div css={canvasWrapperCss} className="canvas-wrapper">
      <Canvas
        css={canvasCss}
        camera={cameraProps}
        // onCreated={(state) => {
        //   console.log(state);
        //   setTimeout(() => {
        //     state.camera.lookAt(0, 100, 0);
        //   }, 1500);
        // }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight color="white" position={[2, 1, 1]} />
          <Model observerRefs={observerRefs} />
          {/* <axesHelper args={[500]} /> */}
          {/* <OrbitControls enableDamping enablePan={false} enableZoom={false} /> */}
        </Suspense>
      </Canvas>
    </div>
  );
}

function Model({ observerRefs = [] }: { observerRefs: Ref<HTMLDivElement>[] }) {
  const ref = useRef<any>(null);
  const earth = useLoader(GLTFLoader, "/assets/3d-models/earth/scene.gltf");

  useEffect(() => {
    const changeValue = (
      startValue: number,
      endValue: number,
      mainPercent: number
    ) => startValue + ((endValue - startValue) * mainPercent) / 100;
    const scrollCallback: EventListener = () => {
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const scrollTop = window.scrollY;

      const scrollPercentage = (scrollTop / (docHeight - winHeight)) * 100;
      console.log({ scrollPercentage });
      if (scrollPercentage >= 2.5 && scrollPercentage < 5) {
        const mainPercent = (100 * (scrollPercentage - 2.5)) / 5;
        const rotationPercent = changeValue(-0.5, 1, mainPercent);
        const positionXPercent = changeValue(175, -60, mainPercent);
        const positionYPercent = changeValue(0, 15, mainPercent);
        const positionZPercent = changeValue(175, 100, mainPercent);
        const scalePercent = changeValue(0.35, 0.85, mainPercent);

        const t1 = gsap.timeline();
        t1.fromTo(
          ref.current?.rotation,
          { y: (ref.current?.rotation?.y as number) ?? 0 },
          { y: rotationPercent },
          0
        )
          .fromTo(
            ref.current?.position,
            {
              x: ref.current?.position?.x ?? 0,
              y: ref.current?.position?.y ?? 0,
              z: ref.current?.position?.z ?? 0,
            },
            { x: positionXPercent, y: positionYPercent, z: positionZPercent },
            0
          )
          .fromTo(
            ref.current?.scale,
            {
              x: ref.current?.scale?.x ?? 0,
              y: ref.current?.scale?.y ?? 0,
              z: ref.current?.scale?.z ?? 0,
            },
            { x: scalePercent, y: scalePercent, z: scalePercent },
            0
          );
      }
      if (scrollPercentage >= 5 && scrollPercentage < 9) {
        const mainPercent = (100 * (scrollPercentage - 2.5)) / 5;
        const rotationPercent = changeValue(-0.5, 3, mainPercent);
        const positionXPercent = changeValue(-60, 250, mainPercent);
        const positionYPercent = changeValue(0, 15, mainPercent);
        const positionZPercent = changeValue(100, 150, mainPercent);
        const scalePercent = changeValue(0.85, 1.1, mainPercent);

        const t1 = gsap.timeline();
        t1.fromTo(
          ref.current?.rotation,
          { y: (ref.current?.rotation?.y as number) ?? 0 },
          { y: rotationPercent },
          0
        )
          .fromTo(
            ref.current?.position,
            {
              x: ref.current?.position?.x ?? 0,
              y: ref.current?.position?.y ?? 0,
              z: ref.current?.position?.z ?? 0,
            },
            {
              x: positionXPercent,
              y: ref.current?.position?.y ?? 0,
              z: positionZPercent,
            },
            0
          )
          .fromTo(
            ref.current?.scale,
            {
              x: ref.current?.scale?.x ?? 0,
              y: ref.current?.scale?.y ?? 0,
              z: ref.current?.scale?.z ?? 0,
            },
            { x: scalePercent, y: scalePercent, z: scalePercent },
            0
          );
      }
    };
    window.addEventListener("scroll", scrollCallback);
    return () => {
      window.removeEventListener("scroll", scrollCallback);
    };
  }, [observerRefs]);

  return (
    <>
      <primitive
        object={earth.scene}
        position={[175, 0, 175]}
        scale={[0.35, 0.35, 0.35]}
        rotation={[0, -0.5, 0]}
        ref={ref}
      >
        <OrbitControls
          enableDamping
          enablePan={false}
          enableZoom={false}
          enableRotate={false}
        />
      </primitive>
    </>
  );
}
