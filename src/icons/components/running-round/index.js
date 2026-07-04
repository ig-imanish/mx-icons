import RunningRoundBold from "./RunningRoundBold";
import RunningRoundBroken from "./RunningRoundBroken";
import RunningRoundBulk from "./RunningRoundBulk";
import RunningRoundLinear from "./RunningRoundLinear";
import RunningRoundOutline from "./RunningRoundOutline";
import RunningRoundTwotone from "./RunningRoundTwotone";

export { RunningRoundBold, RunningRoundBroken, RunningRoundBulk, RunningRoundLinear, RunningRoundOutline, RunningRoundTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "running-round-bold",
    Component: RunningRoundBold,
    componentName: "RunningRoundBold",
  },,
  {
    variant: "broken",
    slug: "running-round-broken",
    Component: RunningRoundBroken,
    componentName: "RunningRoundBroken",
  },,
  {
    variant: "bulk",
    slug: "running-round-bulk",
    Component: RunningRoundBulk,
    componentName: "RunningRoundBulk",
  },,
  {
    variant: "linear",
    slug: "running-round-linear",
    Component: RunningRoundLinear,
    componentName: "RunningRoundLinear",
  },,
  {
    variant: "outline",
    slug: "running-round-outline",
    Component: RunningRoundOutline,
    componentName: "RunningRoundOutline",
  },,
  {
    variant: "twotone",
    slug: "running-round-twotone",
    Component: RunningRoundTwotone,
    componentName: "RunningRoundTwotone",
  }
];

export default { RunningRoundBold, RunningRoundBroken, RunningRoundBulk, RunningRoundLinear, RunningRoundOutline, RunningRoundTwotone };
