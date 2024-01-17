/* eslint-disable react/no-unescaped-entities */
import { useEffect, useRef } from "react";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import {
  closeBtnCss,
  dialogBtnCss,
  valensiteDialogWrapperCss,
} from "@modules/home/valensite-popup/styles";

export default function ValensiteDialog() {
  const valensiteDialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sessionStorageKey = "popupClosed";
    const popupClosed = sessionStorage.getItem(sessionStorageKey);
    const valDialog = valensiteDialogRef.current;
    if (!popupClosed) {
      valDialog?.style.setProperty("display", "flex");
    }
    const closeHandler = () => {
      sessionStorage.setItem(sessionStorageKey, "true");
      valDialog?.style.setProperty("display", "none");
    };
    const closeBtn = valDialog?.querySelector(".close-btn");
    closeBtn?.addEventListener("click", closeHandler);
    return () => closeBtn?.removeEventListener("click", closeHandler);
  }, []);
  return (
    <div
      css={valensiteDialogWrapperCss}
      ref={valensiteDialogRef}
      className="valensite-popup"
    >
      <IoClose css={closeBtnCss} className="close-btn" />
      <h2>Looking for a perfect Valentine's Gift? Checkout Valensite.</h2>
      <Link href="/valensite" css={dialogBtnCss}>
        Valensite
      </Link>
    </div>
  );
}
