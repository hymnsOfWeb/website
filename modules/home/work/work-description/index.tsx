import { forwardRef, type Ref } from "react";
import { WorkData, workData } from "@common-data";
import { WorkDescriptionCard } from "@components";
import { workCardsCss } from "./styles";

function WD(_: unknown, ref: Ref<HTMLDivElement>) {
  const workDataMapper = (elem: WorkData, index: number) => {
    return (
      <WorkDescriptionCard
        css={workCardsCss}
        data={elem}
        key={"work-card-" + index}
      />
    );
  };
  return (
    <div ref={ref} className="work-description-container">
      {workData.map(workDataMapper)}
    </div>
  );
}

const WorkDescription = forwardRef(WD);

export default WorkDescription;
