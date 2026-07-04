import RunningBold from "./RunningBold";
import RunningBroken from "./RunningBroken";
import RunningBulk from "./RunningBulk";
import RunningLinear from "./RunningLinear";
import RunningOutline from "./RunningOutline";
import RunningTwotone from "./RunningTwotone";

export { RunningBold, RunningBroken, RunningBulk, RunningLinear, RunningOutline, RunningTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "running-bold",
    Component: RunningBold,
    componentName: "RunningBold",
  },,
  {
    variant: "broken",
    slug: "running-broken",
    Component: RunningBroken,
    componentName: "RunningBroken",
  },,
  {
    variant: "bulk",
    slug: "running-bulk",
    Component: RunningBulk,
    componentName: "RunningBulk",
  },,
  {
    variant: "linear",
    slug: "running-linear",
    Component: RunningLinear,
    componentName: "RunningLinear",
  },,
  {
    variant: "outline",
    slug: "running-outline",
    Component: RunningOutline,
    componentName: "RunningOutline",
  },,
  {
    variant: "twotone",
    slug: "running-twotone",
    Component: RunningTwotone,
    componentName: "RunningTwotone",
  }
];

export default { RunningBold, RunningBroken, RunningBulk, RunningLinear, RunningOutline, RunningTwotone };
