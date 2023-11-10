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
  return (
    <div css={teamContainerCss}>
      <h2 css={teamHeadingCss}>Meet Our Team</h2>
      <div css={teamCardsContainerCss}>
        {teamData.map((elem, index: number) => {
          return (
            <Link
              href={elem.portfolioLink}
              key={index}
              css={teamCardCss}
              title={elem.name}
              rel="noopener noreferrer"
              target="_blank"
            >
              <ImageComp
                alt={elem.name}
                src={elem.imgSrc}
                containerCss={profileImgCss}
              />
              <span css={nameCss}>
                {elem.name.split(" ")[0]}
                <br />
                {elem.name.split(" ")[1]}
              </span>

              <span css={aboutBriefCss}>{elem.about}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
