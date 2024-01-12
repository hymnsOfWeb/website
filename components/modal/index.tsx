import { Ref, RefObject, forwardRef } from "react";
import { dialogContainerCss } from "@components/modal/styles";

function M(_: unknown, ref: Ref<HTMLDialogElement>) {
  const closeHandler = () => {
    (ref as RefObject<HTMLDialogElement>).current?.close();
  };
  return (
    <dialog onClick={closeHandler} css={dialogContainerCss} ref={ref}>
      {/* <div>index</div> */}
    </dialog>
  );
}

const Modal = forwardRef(M);
export default Modal;
