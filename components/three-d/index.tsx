import dynamic from "next/dynamic";

const ThreeDCanvas = dynamic(() => import("./canvas"), {
  ssr: false,
  loading: () => <></>,
});

export default function ThreeD() {
  return (
    <>
      <ThreeDCanvas />
    </>
  );
}
