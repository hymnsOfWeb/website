import { RefObject, useCallback, useEffect } from "react";

export default function useMasterDwebContact({
  containerRef,
  linkRef,
  shadowRef,
}: {
  containerRef: RefObject<HTMLDivElement>;
  linkRef: RefObject<HTMLAnchorElement>;
  shadowRef: RefObject<HTMLSpanElement>;
}) {
  const mouseMoveCallback = useCallback(
    (e: MouseEvent) => {
      const container = containerRef.current;
      if (container) {
        const { left, top, height, width } = container.getBoundingClientRect();
        const xPos = e.clientX - left;
        const yPos = e.clientY - top;
        const xPercentage = 100 - (45 + (xPos * 100) / width / 10);
        const yPercentage = 100 - (45 + (yPos * 100) / height / 10);
        if (linkRef.current) {
          linkRef.current.style.transition = "none";
          linkRef.current.style.transform = `translate(-${xPercentage}%, -${yPercentage}%)`;
        }
      }
    },
    [containerRef, linkRef]
  );

  const mouseLeaveCallback = useCallback(() => {
    if (linkRef.current) {
      linkRef.current.style.transition = "transform 3s ease";
      linkRef.current.style.transform = "translate(-50%, -50%)";
    }
  }, [linkRef]);

  const mouseEnterCallback = useCallback(
    (e: MouseEvent) => {
      const contactLink = linkRef.current;
      const shadow = shadowRef.current;
      if (contactLink) {
        const { clientX, clientY } = e;
        const { left, top } = contactLink.getBoundingClientRect();
        const xPos = clientX - left;
        const yPos = clientY - top;
        if (shadow) {
          shadow.style.top = `${yPos}px`;
          shadow.style.left = `${xPos}px`;
          shadow.style.opacity = "1";
        }
      }
    },
    [linkRef, shadowRef]
  );

  const contactLeaveCallback = useCallback(
    (e: MouseEvent) => {
      const contactLink = linkRef.current;
      const shadow = shadowRef.current;
      if (contactLink) {
        const { clientX, clientY } = e;
        const { left, top } = contactLink.getBoundingClientRect();
        const xPos = clientX - left;
        const yPos = clientY - top;
        if (shadow) {
          shadow.style.opacity = "0";
          shadow.style.top = `${yPos}px`;
          shadow.style.left = `${xPos}px`;
        }
      }
    },
    [shadowRef, linkRef]
  );

  useEffect(() => {
    const container = containerRef.current;
    const contactLink = linkRef.current;
    if (container) {
      container.addEventListener("mousemove", mouseMoveCallback);
      container.addEventListener("mouseleave", mouseLeaveCallback);
    }
    if (contactLink) {
      contactLink.addEventListener("mouseenter", mouseEnterCallback);
      contactLink.addEventListener("mouseleave", contactLeaveCallback);
    }
    return () => {
      if (container) {
        container.removeEventListener("mouseover", mouseMoveCallback);
      }
    };
  }, [
    mouseMoveCallback,
    mouseLeaveCallback,
    mouseEnterCallback,
    contactLeaveCallback,
    containerRef,
    linkRef,
  ]);
}
