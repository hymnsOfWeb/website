import { useEffect, useState } from "react";
import { loadAll } from "@tsparticles/all";
import { type Container } from "@tsparticles/engine";
import Particles, { initParticlesEngine } from "@tsparticles/react";

export default function TsParticles() {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadAll(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);
  const particlesLoaded = async (container?: Container): Promise<void> => {
    //
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
