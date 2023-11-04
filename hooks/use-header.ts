import { useContext } from "react";
import { AppContext } from "@/context";

export default function useHeader() {
  const { headerRef } = useContext(AppContext);
  const elem = headerRef.current;
  const forReturn = {
    elem,
    ref: headerRef,
  };
  return forReturn;
}
