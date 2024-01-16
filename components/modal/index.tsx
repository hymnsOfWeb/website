import { Ref, RefObject, forwardRef, useCallback, useRef } from "react";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import { phoneNumber } from "@common-data";
import {
  dialogBtnContainerCss,
  closeIconCss,
  descContainerCss,
  dialogHeaderCss,
  dialogHeadingContainerCss,
  dialogWrapperCss,
  headerTextCss,
  buyBtnCss,
} from "@components/modal/styles";

interface ModalProps {
  name: string;
  color: string;
  list: string[];
}
function M({ name, color, list }: ModalProps, ref: Ref<HTMLDialogElement>) {
  const messageRef = useRef<string>("");
  messageRef.current = encodeURIComponent(
    `Hey! I would like to buy your ${name} plan for Valensite. Thank you.`
  );

  const listMapper = useCallback((listDesc: string, index: number) => {
    return <li key={index}>{listDesc}</li>;
  }, []);

  const closeHandler = () => {
    const modal = (ref as RefObject<HTMLDialogElement>).current;
    if (modal) {
      modal.close();
      document.body.style.setProperty("overflow-y", "scroll");
    }
  };

  return (
    <dialog css={dialogWrapperCss} ref={ref}>
      <div css={dialogHeadingContainerCss(color)}>
        <div css={headerTextCss}>
          <span css={dialogHeaderCss} id="plan-name">
            {name} Plan
          </span>
          <div css={dialogBtnContainerCss}>
            <Link
              href={`https://wa.me/${phoneNumber}?text=${messageRef?.current}`}
              css={buyBtnCss}
              target="_blank"
              rel="noopener noreferrer"
            >
              Buy Now
            </Link>
            {/* <Link href="/" css={demoBtnCss}>
              <span>Live Demo </span>
              <BsArrowUpRight />
            </Link> */}
          </div>
        </div>
        <IoClose css={closeIconCss} onClick={closeHandler} />
      </div>
      <ol css={descContainerCss(color)}>{list.map(listMapper)}</ol>
    </dialog>
  );
}

const Modal = forwardRef(M);
export default Modal;
