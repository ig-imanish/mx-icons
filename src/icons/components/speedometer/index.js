import SpeedometerBold from "./SpeedometerBold";
import SpeedometerBroken from "./SpeedometerBroken";
import SpeedometerBulk from "./SpeedometerBulk";
import SpeedometerLinear from "./SpeedometerLinear";
import SpeedometerLoop from "./SpeedometerLoop";
import SpeedometerOutline from "./SpeedometerOutline";
import SpeedometerTwotone from "./SpeedometerTwotone";

export { SpeedometerBold, SpeedometerBroken, SpeedometerBulk, SpeedometerLinear, SpeedometerLoop, SpeedometerOutline, SpeedometerTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "speedometer-bold",
    Component: SpeedometerBold,
    componentName: "SpeedometerBold",
  },
  {
    variant: "broken",
    slug: "speedometer-broken",
    Component: SpeedometerBroken,
    componentName: "SpeedometerBroken",
  },
  {
    variant: "bulk",
    slug: "speedometer-bulk",
    Component: SpeedometerBulk,
    componentName: "SpeedometerBulk",
  },
  {
    variant: "linear",
    slug: "speedometer-linear",
    Component: SpeedometerLinear,
    componentName: "SpeedometerLinear",
  },
  {
    variant: "linear",
    slug: "speedometer-loop",
    Component: SpeedometerLoop,
    componentName: "SpeedometerLoop",
  },
  {
    variant: "outline",
    slug: "speedometer-outline",
    Component: SpeedometerOutline,
    componentName: "SpeedometerOutline",
  },
  {
    variant: "twotone",
    slug: "speedometer-twotone",
    Component: SpeedometerTwotone,
    componentName: "SpeedometerTwotone",
  },
];
