import { Fragment, forwardRef, useCallback, type Ref } from "react";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";
import { workData } from "@/common/common-data";
import {
  descriptionContainer,
  linksContainerCss,
  workCardsCss,
  workLinkCss,
  workTitleCss,
} from "./style";
import { WorkDataType } from "../types";

function WD(_: unknown, ref: Ref<HTMLDivElement>) {
  const workDataMapper = useCallback((elem: WorkDataType, index: number) => {
    return (
      <div key={index} css={workCardsCss}>
        <span className="work-title" css={workTitleCss}>
          {index + 1}. {elem.title}
        </span>
        <div className="links-container" css={linksContainerCss}>
          {elem.links.map((link: string, indx: number) => {
            return (
              <Fragment key={indx}>
                <Link href="/" css={workLinkCss}>
                  {link}
                  <BsArrowUpRight />
                </Link>
              </Fragment>
            );
          })}
        </div>
        <p>{elem.description}</p>
      </div>
    );
  }, []);
  return (
    <div
      css={descriptionContainer}
      ref={ref}
      className="work-description-container"
    >
      {workData.map(workDataMapper)}
    </div>
  );
}

const WorkDescription = forwardRef(WD);

export default WorkDescription;
