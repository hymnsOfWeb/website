import dynamic from "next/dynamic";

const ThreeDCanvas = dynamic(() => import("./canvas"), { ssr: false });

export default function ThreeD() {
  return (
    <>
      <ThreeDCanvas />
    </>
  );
}
