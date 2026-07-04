import DonutBold from "./DonutBold";
import DonutBroken from "./DonutBroken";
import DonutBulk from "./DonutBulk";
import DonutLinear from "./DonutLinear";
import DonutOutline from "./DonutOutline";
import DonutTwotone from "./DonutTwotone";

export { DonutBold, DonutBroken, DonutBulk, DonutLinear, DonutOutline, DonutTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "donut-bold",
    Component: DonutBold,
    componentName: "DonutBold",
  },,
  {
    variant: "broken",
    slug: "donut-broken",
    Component: DonutBroken,
    componentName: "DonutBroken",
  },,
  {
    variant: "bulk",
    slug: "donut-bulk",
    Component: DonutBulk,
    componentName: "DonutBulk",
  },,
  {
    variant: "linear",
    slug: "donut-linear",
    Component: DonutLinear,
    componentName: "DonutLinear",
  },,
  {
    variant: "outline",
    slug: "donut-outline",
    Component: DonutOutline,
    componentName: "DonutOutline",
  },,
  {
    variant: "twotone",
    slug: "donut-twotone",
    Component: DonutTwotone,
    componentName: "DonutTwotone",
  }
];

export default { DonutBold, DonutBroken, DonutBulk, DonutLinear, DonutOutline, DonutTwotone };
