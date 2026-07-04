import SpeedometerLowBold from "./SpeedometerLowBold";
import SpeedometerLowBroken from "./SpeedometerLowBroken";
import SpeedometerLowBulk from "./SpeedometerLowBulk";
import SpeedometerLowLinear from "./SpeedometerLowLinear";
import SpeedometerLowOutline from "./SpeedometerLowOutline";
import SpeedometerLowTwotone from "./SpeedometerLowTwotone";

export { SpeedometerLowBold, SpeedometerLowBroken, SpeedometerLowBulk, SpeedometerLowLinear, SpeedometerLowOutline, SpeedometerLowTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "speedometer-low-bold",
    Component: SpeedometerLowBold,
    componentName: "SpeedometerLowBold",
  },,
  {
    variant: "broken",
    slug: "speedometer-low-broken",
    Component: SpeedometerLowBroken,
    componentName: "SpeedometerLowBroken",
  },,
  {
    variant: "bulk",
    slug: "speedometer-low-bulk",
    Component: SpeedometerLowBulk,
    componentName: "SpeedometerLowBulk",
  },,
  {
    variant: "linear",
    slug: "speedometer-low-linear",
    Component: SpeedometerLowLinear,
    componentName: "SpeedometerLowLinear",
  },,
  {
    variant: "outline",
    slug: "speedometer-low-outline",
    Component: SpeedometerLowOutline,
    componentName: "SpeedometerLowOutline",
  },,
  {
    variant: "twotone",
    slug: "speedometer-low-twotone",
    Component: SpeedometerLowTwotone,
    componentName: "SpeedometerLowTwotone",
  }
];

export default { SpeedometerLowBold, SpeedometerLowBroken, SpeedometerLowBulk, SpeedometerLowLinear, SpeedometerLowOutline, SpeedometerLowTwotone };
