import { forwardRef } from "react";
import type { Ref } from "react";
import usePhone from "@hooks/use-phone";
import DwebWork from "./dweb-work";
import MwebWork from "./mweb-work";

function W(_: unknown, ref: Ref<HTMLDivElement>) {
  const isPhone = usePhone();
  if (isPhone || isPhone === null) {
    return <MwebWork />;
  } else {
    return <DwebWork ref={ref} />;
  }
}

const Work = forwardRef(W);
export default Work;
