import PipetteBold from "./PipetteBold";
import PipetteBroken from "./PipetteBroken";
import PipetteBulk from "./PipetteBulk";
import PipetteLinear from "./PipetteLinear";
import PipetteOutline from "./PipetteOutline";
import PipetteTwotone from "./PipetteTwotone";

export { PipetteBold, PipetteBroken, PipetteBulk, PipetteLinear, PipetteOutline, PipetteTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "pipette-bold",
    Component: PipetteBold,
    componentName: "PipetteBold",
  },,
  {
    variant: "broken",
    slug: "pipette-broken",
    Component: PipetteBroken,
    componentName: "PipetteBroken",
  },,
  {
    variant: "bulk",
    slug: "pipette-bulk",
    Component: PipetteBulk,
    componentName: "PipetteBulk",
  },,
  {
    variant: "linear",
    slug: "pipette-linear",
    Component: PipetteLinear,
    componentName: "PipetteLinear",
  },,
  {
    variant: "outline",
    slug: "pipette-outline",
    Component: PipetteOutline,
    componentName: "PipetteOutline",
  },,
  {
    variant: "twotone",
    slug: "pipette-twotone",
    Component: PipetteTwotone,
    componentName: "PipetteTwotone",
  }
];

export default { PipetteBold, PipetteBroken, PipetteBulk, PipetteLinear, PipetteOutline, PipetteTwotone };
