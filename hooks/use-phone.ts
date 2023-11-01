import { useCallback, useContext, useEffect } from "react";
import { AppContext } from "@/context";

export default function usePhone() {
  const { isPhone: isPhoneFromContext } = useContext(AppContext);
  const [isPhone, setIsPhone] = isPhoneFromContext;
  const phoneCallback = useCallback(() => {
    const screenWidth = window?.innerWidth;
    if (screenWidth < 900) {
      setIsPhone(true);
    } else {
      setIsPhone(false);
    }
  }, [setIsPhone]);
  useEffect(() => {
    phoneCallback();
  }, [phoneCallback]);
  useEffect(() => {
    window?.addEventListener("resize", phoneCallback);
    return () => window?.removeEventListener("resize", phoneCallback);
  }, [phoneCallback]);
  return isPhone;
}
