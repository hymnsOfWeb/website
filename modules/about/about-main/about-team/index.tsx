import { Fragment } from "react";
import Link from "next/link";
import { teamData } from "@common-data";
import { ImageComp } from "@components";
import {
  aboutBriefCss,
  nameCss,
  profileImgCss,
  teamCardCss,
  teamCardsContainerCss,
  teamContainerCss,
  teamHeadingCss,
} from "@modules/about/about-main/about-team/style";

export default function AboutTeam() {
  const mapper = (elem: (typeof teamData)[0], index: number) => {
    const nameMapper = (name: string, nameIndex: number) => {
      return (
        <Fragment key={"name-" + nameIndex}>
          {name}
          <br />
        </Fragment>
      );
    };
    return (
      <Link
        href={elem.portfolioLink}
        key={"card-" + index}
        css={teamCardCss}
        title={elem.name?.replace(/\n/gm, " ")}
        rel="noopener noreferrer"
        target="_blank"
      >
        <ImageComp
          alt={elem.name}
          src={elem.imgSrc}
          containerCss={profileImgCss}
        />
        <span css={nameCss}>{elem.name.split("\n").map(nameMapper)}</span>

        <span css={aboutBriefCss}>{elem.about}</span>
      </Link>
    );
  };
  return (
    <div css={teamContainerCss}>
      <h2 css={teamHeadingCss}>Meet the core team</h2>
      <div css={teamCardsContainerCss}>{teamData.map(mapper)}</div>
    </div>
  );
}
