import PauseCircleBold from "./PauseCircleBold";
import PauseCircleBroken from "./PauseCircleBroken";
import PauseCircleBulk from "./PauseCircleBulk";
import PauseCircleLinear from "./PauseCircleLinear";
import PauseCircleOutline from "./PauseCircleOutline";
import PauseCircleTwotone from "./PauseCircleTwotone";

export { PauseCircleBold, PauseCircleBroken, PauseCircleBulk, PauseCircleLinear, PauseCircleOutline, PauseCircleTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "pause-circle-bold",
    Component: PauseCircleBold,
    componentName: "PauseCircleBold",
  },
  {
    variant: "broken",
    slug: "pause-circle-broken",
    Component: PauseCircleBroken,
    componentName: "PauseCircleBroken",
  },
  {
    variant: "bulk",
    slug: "pause-circle-bulk",
    Component: PauseCircleBulk,
    componentName: "PauseCircleBulk",
  },
  {
    variant: "linear",
    slug: "pause-circle-linear",
    Component: PauseCircleLinear,
    componentName: "PauseCircleLinear",
  },
  {
    variant: "outline",
    slug: "pause-circle-outline",
    Component: PauseCircleOutline,
    componentName: "PauseCircleOutline",
  },
  {
    variant: "twotone",
    slug: "pause-circle-twotone",
    Component: PauseCircleTwotone,
    componentName: "PauseCircleTwotone",
  },
];
