/* eslint-disable react/no-unescaped-entities */
import { useRef } from "react";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import {
  closeBtnCss,
  dialogBtnCss,
  valensiteDialogWrapperCss,
} from "@modules/home/valensite-popup/styles";

export default function ValensiteDialog() {
  const valensiteDialogRef = useRef<HTMLDivElement>(null);
  const closeHandler = () => {
    valensiteDialogRef.current?.style.setProperty("display", "none");
  };
  return (
    <div
      css={valensiteDialogWrapperCss}
      ref={valensiteDialogRef}
      className="valensite-popup"
    >
      <IoClose css={closeBtnCss} onClick={closeHandler} />
      <h2>Looking for a perfect Valentine's Gift? Checkout Valensite.</h2>
      <Link href="/valensite" css={dialogBtnCss}>
        Valensite
      </Link>
    </div>
  );
}
