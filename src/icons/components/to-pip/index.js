import ToPipBold from "./ToPipBold";
import ToPipBroken from "./ToPipBroken";
import ToPipBulk from "./ToPipBulk";
import ToPipLinear from "./ToPipLinear";
import ToPipOutline from "./ToPipOutline";
import ToPipTwotone from "./ToPipTwotone";

export { ToPipBold, ToPipBroken, ToPipBulk, ToPipLinear, ToPipOutline, ToPipTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "to-pip-bold",
    Component: ToPipBold,
    componentName: "ToPipBold",
  },,
  {
    variant: "broken",
    slug: "to-pip-broken",
    Component: ToPipBroken,
    componentName: "ToPipBroken",
  },,
  {
    variant: "bulk",
    slug: "to-pip-bulk",
    Component: ToPipBulk,
    componentName: "ToPipBulk",
  },,
  {
    variant: "linear",
    slug: "to-pip-linear",
    Component: ToPipLinear,
    componentName: "ToPipLinear",
  },,
  {
    variant: "outline",
    slug: "to-pip-outline",
    Component: ToPipOutline,
    componentName: "ToPipOutline",
  },,
  {
    variant: "twotone",
    slug: "to-pip-twotone",
    Component: ToPipTwotone,
    componentName: "ToPipTwotone",
  }
];

export default { ToPipBold, ToPipBroken, ToPipBulk, ToPipLinear, ToPipOutline, ToPipTwotone };
