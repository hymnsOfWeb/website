import { Fragment } from "react";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";
import { WorkData } from "@/common/common-data";
import { linksContainerCss, buttonCss, workTitleCss } from "./styles";

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
        <Link href={link.url} css={buttonCss}>
          {link.text}
          <BsArrowUpRight />
        </Link>
      </Fragment>
    );
  };
  return (
    <div className={className}>
      <h3 className="work-title" css={workTitleCss}>
        {data.title}
      </h3>
      <div className="links-container" css={linksContainerCss}>
        {data.links.map(mapper)}
      </div>
      <p>{data.description}</p>
    </div>
  );
};

export default WorkDescriptionCard;
