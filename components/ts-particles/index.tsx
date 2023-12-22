import { useEffect, useState } from "react";
import { loadAll } from "@tsparticles/all";
// import { type Container } from "@tsparticles/engine";
import Particles, { initParticlesEngine } from "@tsparticles/react";

export default function TsParticles({
  onLoad = () => {
    return;
  },
}: {
  onLoad?: () => void;
}) {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadAll(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);
  const particlesLoaded = async () => {
    onLoad();
  };
  return init ? (
    <Particles
      id="tsparticles"
      url="/assets/particles/ts-particles.json"
      particlesLoaded={particlesLoaded}
    />
  ) : (
    <></>
  );
}
