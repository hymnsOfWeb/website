/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import gsap from "gsap";

export default function Model() {
  const ref = useRef<any>(null);
  const { nodes, materials } = useGLTF(
    "/assets/3d-models/earth/scene-transformed.glb"
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

      if (scrollPercentage >= 2.5 && scrollPercentage < 5) {
        const mainPercent = percentCalc(2.5, 5, scrollPercentage);
        const rotationPercent = changeValue(-4.3, -1, mainPercent);
        const positionXPercent = changeValue(195, -60, mainPercent);
        const positionYPercent = changeValue(4, 15, mainPercent);
        const positionZPercent = changeValue(175, -50, mainPercent);
        const scalePercent = changeValue(0.055, 0.15, mainPercent);

        const t1 = gsap.timeline();
        t1.fromTo(
          ref.current?.rotation,
          {
            x: (ref.current?.rotation?.x as number) ?? 0,
            y: (ref.current?.rotation?.y as number) ?? 0,
          },
          { x: (ref.current?.rotation?.x as number) ?? 0, y: rotationPercent },
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
        const mainPercent = percentCalc(5, 9, scrollPercentage);
        const rotationPercent = changeValue(-1, 5, mainPercent);
        const positionXPercent = changeValue(-100, 300, mainPercent);
        const positionZPercent = changeValue(-50, -100, mainPercent);
        const scalePercent = changeValue(0.15, 0.3, mainPercent);
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
      if (scrollPercentage >= 9 && scrollPercentage < 85) {
        const t1 = gsap.timeline();
        t1.fromTo(
          ref.current?.position,
          {
            x: ref.current?.position?.x ?? 0,
            y: ref.current?.position?.y ?? 0,
            z: ref.current?.position?.z ?? 0,
          },
          { x: 300, y: 15, z: -100 },
          0
        );
      }
      if (scrollPercentage > 85 && scrollPercentage <= 90) {
        const mainPercent = percentCalc(85, 90, scrollPercentage);
        const rotationPercent = changeValue(-8, -6, mainPercent);
        const positionXPercent = changeValue(300, 195, mainPercent);
        const positionYPercent = changeValue(15, 4, mainPercent);
        const positionZPercent = changeValue(-100, 175, mainPercent);
        const scalePercent = changeValue(0.3, 0.06, mainPercent);
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
              y: positionYPercent,
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
      if (scrollPercentage > 90 && scrollPercentage <= 100) {
        const mainPercent = percentCalc(90, 95, scrollPercentage);
        const rotationPercent = changeValue(-6, -4.3, mainPercent);
        const positionXPercent = changeValue(195, 195, mainPercent);
        const positionZPercent = changeValue(175, 175, mainPercent);
        const scalePercent = changeValue(0.06, 0.06, mainPercent);
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
  }, []);

  return (
    <group
      dispose={null}
      ref={ref}
      position={[195, 4, 175]}
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
