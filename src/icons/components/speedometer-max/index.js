import SpeedometerMaxBold from "./SpeedometerMaxBold";
import SpeedometerMaxBroken from "./SpeedometerMaxBroken";
import SpeedometerMaxBulk from "./SpeedometerMaxBulk";
import SpeedometerMaxLinear from "./SpeedometerMaxLinear";
import SpeedometerMaxOutline from "./SpeedometerMaxOutline";
import SpeedometerMaxTwotone from "./SpeedometerMaxTwotone";

export { SpeedometerMaxBold, SpeedometerMaxBroken, SpeedometerMaxBulk, SpeedometerMaxLinear, SpeedometerMaxOutline, SpeedometerMaxTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "speedometer-max-bold",
    Component: SpeedometerMaxBold,
    componentName: "SpeedometerMaxBold",
  },,
  {
    variant: "broken",
    slug: "speedometer-max-broken",
    Component: SpeedometerMaxBroken,
    componentName: "SpeedometerMaxBroken",
  },,
  {
    variant: "bulk",
    slug: "speedometer-max-bulk",
    Component: SpeedometerMaxBulk,
    componentName: "SpeedometerMaxBulk",
  },,
  {
    variant: "linear",
    slug: "speedometer-max-linear",
    Component: SpeedometerMaxLinear,
    componentName: "SpeedometerMaxLinear",
  },,
  {
    variant: "outline",
    slug: "speedometer-max-outline",
    Component: SpeedometerMaxOutline,
    componentName: "SpeedometerMaxOutline",
  },,
  {
    variant: "twotone",
    slug: "speedometer-max-twotone",
    Component: SpeedometerMaxTwotone,
    componentName: "SpeedometerMaxTwotone",
  }
];

export default { SpeedometerMaxBold, SpeedometerMaxBroken, SpeedometerMaxBulk, SpeedometerMaxLinear, SpeedometerMaxOutline, SpeedometerMaxTwotone };
