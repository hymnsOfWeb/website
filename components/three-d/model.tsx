/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import gsap from "gsap";
import type { Group, Object3DEventMap } from "three";

export default function Model() {
  const ref = useRef<Group<Object3DEventMap>>(null);
  const { nodes, materials } = useGLTF(
    "/assets/3d-models/earth/scene-transformed.glb"
  );

  const timelineCallback = useCallback(
    (
      positionX: number,
      positionY: number,
      positionZ: number,
      rotation: number,
      scale: number
    ) => {
      const t1 = gsap.timeline();
      t1.fromTo(
        ref.current?.rotation as gsap.TweenTarget,
        {
          x: (ref.current?.rotation?.x as number) ?? 0,
          y: (ref.current?.rotation?.y as number) ?? 0,
        },
        { x: (ref.current?.rotation?.x as number) ?? 0, y: rotation },
        0
      )
        .fromTo(
          ref.current?.position as gsap.TweenTarget,
          {
            x: ref.current?.position?.x ?? 0,
            y: ref.current?.position?.y ?? 0,
            z: ref.current?.position?.z ?? 0,
          },
          { x: positionX, y: positionY, z: positionZ },
          0
        )
        .fromTo(
          ref.current?.scale as gsap.TweenTarget,
          {
            x: ref.current?.scale?.x ?? 0,
            y: ref.current?.scale?.y ?? 0,
            z: ref.current?.scale?.z ?? 0,
          },
          { x: scale, y: scale, z: scale },
          0
        );
    },
    []
  );

  useEffect(() => {
    const changeValue = (
      startValue: number,
      endValue: number,
      mainPercent: number
    ) => startValue + ((endValue - startValue) * mainPercent) / 100;

    const percentCalc = (
      startValue: number,
      endValue: number,
      currentPercent: number
    ) => ((currentPercent - startValue) / (endValue - startValue)) * 100;

    const scrollCallback: EventListener = () => {
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const scrollTop = window.scrollY;

      const scrollPercentage = (scrollTop / (docHeight - winHeight)) * 100;

      if (scrollPercentage >= 0 && scrollPercentage < 8) {
        const mainPercent = percentCalc(0, 8, scrollPercentage);
        const rotationPercent = changeValue(-4.3, -0.25, mainPercent);
        const positionXPercent = changeValue(125, -50, mainPercent);
        const positionYPercent = changeValue(-30, 10, mainPercent);
        const positionZPercent = changeValue(200, -100, mainPercent);
        const scalePercent = changeValue(0.055, 0.15, mainPercent);

        timelineCallback(
          positionXPercent,
          positionYPercent,
          positionZPercent,
          rotationPercent,
          scalePercent
        );
      }
      if (scrollPercentage >= 8 && scrollPercentage < 11) {
        const mainPercent = percentCalc(8, 11, scrollPercentage);
        const rotationPercent = changeValue(-0.25, 6.25, mainPercent);
        const positionXPercent = changeValue(-50, -50, mainPercent);
        const positionYPercent = changeValue(10, 10, mainPercent);
        const positionZPercent = changeValue(-100, -100, mainPercent);
        const scalePercent = changeValue(0.15, 0, mainPercent);

        timelineCallback(
          positionXPercent,
          positionYPercent,
          positionZPercent,
          rotationPercent,
          scalePercent
        );
      }
      if (scrollPercentage >= 11 && scrollPercentage < 87.5) {
        const mainPercent = percentCalc(11, 87.5, scrollPercentage);
        const rotationPercent = changeValue(6.25, -10, mainPercent);
        const positionXPercent = changeValue(-50, -50, mainPercent);
        const positionYPercent = changeValue(10, 10, mainPercent);
        const positionZPercent = changeValue(-100, -100, mainPercent);
        const scalePercent = changeValue(0, 0, mainPercent);

        timelineCallback(
          positionXPercent,
          positionYPercent,
          positionZPercent,
          rotationPercent,
          scalePercent
        );
      }
      if (scrollPercentage >= 87.5 && scrollPercentage < 90) {
        const mainPercent = percentCalc(87.5, 90, scrollPercentage);
        const rotationPercent = changeValue(-10, -6.25, mainPercent);
        const positionXPercent = changeValue(-50, 125, mainPercent);
        const positionYPercent = changeValue(10, -30, mainPercent);
        const positionZPercent = changeValue(-100, 200, mainPercent);
        const scalePercent = changeValue(0, 0.1, mainPercent);

        timelineCallback(
          positionXPercent,
          positionYPercent,
          positionZPercent,
          rotationPercent,
          scalePercent
        );
      }
      if (scrollPercentage >= 90 && scrollPercentage < 95) {
        const mainPercent = percentCalc(90, 95, scrollPercentage);
        const rotationPercent = changeValue(-6.25, -4.3, mainPercent);
        const positionXPercent = changeValue(125, 125, mainPercent);
        const positionYPercent = changeValue(-30, -30, mainPercent);
        const positionZPercent = changeValue(200, 200, mainPercent);
        const scalePercent = changeValue(0.1, 0.06, mainPercent);

        timelineCallback(
          positionXPercent,
          positionYPercent,
          positionZPercent,
          rotationPercent,
          scalePercent
        );
      }
      if (scrollPercentage >= 95 && scrollPercentage < 100) {
        const mainPercent = percentCalc(95, 100, scrollPercentage);
        const rotationPercent = changeValue(-4.3, -4.3, mainPercent);
        const positionXPercent = changeValue(125, 125, mainPercent);
        const positionYPercent = changeValue(-30, -30, mainPercent);
        const positionZPercent = changeValue(200, 200, mainPercent);
        const scalePercent = changeValue(0.06, 0.06, mainPercent);

        timelineCallback(
          positionXPercent,
          positionYPercent,
          positionZPercent,
          rotationPercent,
          scalePercent
        );
      }
    };
    window.addEventListener("scroll", scrollCallback);
    return () => {
      window.removeEventListener("scroll", scrollCallback);
    };
  }, [timelineCallback]);

  return (
    <group
      dispose={null}
      ref={ref}
      // position={[195, 4, 175]}
      position={[125, -30, 200]}
      scale={[0.06, 0.06, 0.06]}
      rotation={[-0.1, -4.3, 0]}
    >
      <mesh
        geometry={
          (nodes?.Surface_Paint_Metallic_Orange_peel_Slate_Grey_0 as any)
            ?.geometry
        }
        material={materials.PaletteMaterial001 as any}
        position={[0, 0, 0]}
        rotation={[-Math.PI, 0, Math.PI]}
        scale={[-0.975, 0.975, 0.975]}
      />
      <mesh
        geometry={
          (
            nodes[
              "Continents_Mesh-1_Paint_Metallic_Orange_peel_Slate_Grey_0"
            ] as any
          )?.geometry
        }
        material={materials.PaletteMaterial002 as any}
        position={[0, 0, 0]}
        rotation={[-Math.PI, 0, Math.PI]}
        scale={[-0.99, 0.99, 0.99]}
      />
      <mesh
        geometry={
          (nodes.Frame_Paint_Metallic_Orange_peel_Cool_Grey_0 as any)?.geometry
        }
        material={materials.PaletteMaterial003 as any}
        position={[0, 0, 0]}
        rotation={[-Math.PI, 0, Math.PI]}
        scale={[-1, 1, 1]}
      />
    </group>
  );
}
