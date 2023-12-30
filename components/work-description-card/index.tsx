import { Fragment } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { WorkData, dWebWorkHeading } from "@common-data";
import {
  buttonCss,
  workTitleCss,
  workDescriptionCss,
  btnsContainerCss,
  ctaContainerCss,
  secBtnsContainerCss,
  secBtnsCss,
  workHeadingCss,
} from "./styles";

const WorkDescriptionCard = ({
  className,
  data,
}: {
  className?: string;
  data: WorkData;
}) => {
  const mapper = (link: WorkData["links"][0], index: number) => {
    return (
      <Fragment key={index}>
        <a
          href={link.url}
          css={buttonCss}
          rel="noopener noreferrer"
          target="_blank"
        >
          {link.text}
          <BsArrowUpRight />
        </a>
      </Fragment>
    );
  };

  const secondaryBtnMapper = (text: string, key: number) => {
    return (
      <Fragment key={key}>
        <span css={secBtnsCss}>{text}</span>
      </Fragment>
    );
  };

  return (
    <article className={className}>
      <span css={workHeadingCss}>{dWebWorkHeading}</span>
      <h3 className="work-title" css={workTitleCss}>
        {data.title}
      </h3>
      <div className="btns-container" css={btnsContainerCss}>
        <div css={ctaContainerCss}>{data.links.map(mapper)}</div>
        <div css={secBtnsContainerCss}>
          {data.secondaryBtn?.map(secondaryBtnMapper)}
        </div>
      </div>
      <p css={workDescriptionCss}>{data.description}</p>
    </article>
  );
};

export default WorkDescriptionCard;
