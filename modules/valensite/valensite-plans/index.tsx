import { valensitePlanHeading, valensitePlans } from "@common-data";
import { ValensitePlanCard } from "@components";
import {
  plansContainerStyle,
  valPlanWrapperStyle,
  valPlansTextContainertyle,
} from "@modules/valensite/valensite-plans/styles";

export default function ValensitePlans() {
  const planMapper = (plan: (typeof valensitePlans)[0], index: number) => {
    return <ValensitePlanCard key={index} planData={plan} />;
  };
  return (
    <div css={valPlanWrapperStyle} id="valensite-plans">
      <div css={valPlansTextContainertyle}>
        <h2>{valensitePlanHeading.heading}</h2>
        <span>{valensitePlanHeading.subtext}</span>
      </div>
      <div css={plansContainerStyle}>{valensitePlans.map(planMapper)}</div>
    </div>
  );
}
