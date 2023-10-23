import { useCallback, useContext, useEffect } from "react";
import { AppContext } from "@/context";

export default function usePhone(setValue?: boolean) {
  const { isPhone: isPhoneFromContext } = useContext(AppContext);
  const [isPhone, setIsPhone] = isPhoneFromContext;
  if (setValue) {
    setIsPhone(setValue);
  }
  const phoneCallback = useCallback(() => {
    const screenWidth = window?.innerWidth;
    if (screenWidth < 900) {
      setIsPhone(true);
    } else {
      setIsPhone(false);
    }
  }, [setIsPhone]);
  useEffect(() => {
    if (isPhone === null) {
      phoneCallback();
    }
  }, [phoneCallback, isPhone]);
  useEffect(() => {
    window?.addEventListener("resize", phoneCallback);
    return () => window?.removeEventListener("resize", phoneCallback);
  }, [phoneCallback]);
  return isPhone;
}
