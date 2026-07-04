import CrownLineBold from "./CrownLineBold";
import CrownLineBroken from "./CrownLineBroken";
import CrownLineBulk from "./CrownLineBulk";
import CrownLineLinear from "./CrownLineLinear";
import CrownLineOutline from "./CrownLineOutline";
import CrownLineTwotone from "./CrownLineTwotone";

export { CrownLineBold, CrownLineBroken, CrownLineBulk, CrownLineLinear, CrownLineOutline, CrownLineTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "crown-line-bold",
    Component: CrownLineBold,
    componentName: "CrownLineBold",
  },,
  {
    variant: "broken",
    slug: "crown-line-broken",
    Component: CrownLineBroken,
    componentName: "CrownLineBroken",
  },,
  {
    variant: "bulk",
    slug: "crown-line-bulk",
    Component: CrownLineBulk,
    componentName: "CrownLineBulk",
  },,
  {
    variant: "linear",
    slug: "crown-line-linear",
    Component: CrownLineLinear,
    componentName: "CrownLineLinear",
  },,
  {
    variant: "outline",
    slug: "crown-line-outline",
    Component: CrownLineOutline,
    componentName: "CrownLineOutline",
  },,
  {
    variant: "twotone",
    slug: "crown-line-twotone",
    Component: CrownLineTwotone,
    componentName: "CrownLineTwotone",
  }
];

export default { CrownLineBold, CrownLineBroken, CrownLineBulk, CrownLineLinear, CrownLineOutline, CrownLineTwotone };
