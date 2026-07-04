import StopwatchBold from "./StopwatchBold";
import StopwatchBroken from "./StopwatchBroken";
import StopwatchBulk from "./StopwatchBulk";
import StopwatchLinear from "./StopwatchLinear";
import StopwatchOutline from "./StopwatchOutline";
import StopwatchTwotone from "./StopwatchTwotone";

export { StopwatchBold, StopwatchBroken, StopwatchBulk, StopwatchLinear, StopwatchOutline, StopwatchTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "stopwatch-bold",
    Component: StopwatchBold,
    componentName: "StopwatchBold",
  },,
  {
    variant: "broken",
    slug: "stopwatch-broken",
    Component: StopwatchBroken,
    componentName: "StopwatchBroken",
  },,
  {
    variant: "bulk",
    slug: "stopwatch-bulk",
    Component: StopwatchBulk,
    componentName: "StopwatchBulk",
  },,
  {
    variant: "linear",
    slug: "stopwatch-linear",
    Component: StopwatchLinear,
    componentName: "StopwatchLinear",
  },,
  {
    variant: "outline",
    slug: "stopwatch-outline",
    Component: StopwatchOutline,
    componentName: "StopwatchOutline",
  },,
  {
    variant: "twotone",
    slug: "stopwatch-twotone",
    Component: StopwatchTwotone,
    componentName: "StopwatchTwotone",
  }
];

export default { StopwatchBold, StopwatchBroken, StopwatchBulk, StopwatchLinear, StopwatchOutline, StopwatchTwotone };
