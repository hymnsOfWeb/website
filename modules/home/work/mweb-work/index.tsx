import { WorkData, workData } from "@/common/common-data";
import { ImageComp } from "@/components";
import WorkDescriptionCard from "@/components/work-description-card";
import {
  mwebCardCss,
  mwebWorkImgCss,
  workContainerCss,
  workDescCss,
} from "./styles";
import WorkHeading from "../work-heading";

const MwebWorkCard = ({ data }: { data: WorkData }) => {
  return (
    <div css={mwebCardCss}>
      <ImageComp
        src={data.img.src}
        alt={data.img.alt}
        containerCss={mwebWorkImgCss}
      />
      <WorkDescriptionCard data={data} css={workDescCss} />
    </div>
  );
};

export default function MwebWork() {
  const mapper = (elem: WorkData, index: number) => {
    return <MwebWorkCard key={index} data={elem} />;
  };
  return (
    <div id="work-container" css={workContainerCss}>
      <WorkHeading />
      {workData.map(mapper)}
    </div>
  );
}
