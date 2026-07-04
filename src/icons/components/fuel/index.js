import FuelBold from "./FuelBold";
import FuelBroken from "./FuelBroken";
import FuelBulk from "./FuelBulk";
import FuelLinear from "./FuelLinear";
import FuelOutline from "./FuelOutline";
import FuelTwotone from "./FuelTwotone";

export { FuelBold, FuelBroken, FuelBulk, FuelLinear, FuelOutline, FuelTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "fuel-bold",
    Component: FuelBold,
    componentName: "FuelBold",
  },,
  {
    variant: "broken",
    slug: "fuel-broken",
    Component: FuelBroken,
    componentName: "FuelBroken",
  },,
  {
    variant: "bulk",
    slug: "fuel-bulk",
    Component: FuelBulk,
    componentName: "FuelBulk",
  },,
  {
    variant: "linear",
    slug: "fuel-linear",
    Component: FuelLinear,
    componentName: "FuelLinear",
  },,
  {
    variant: "outline",
    slug: "fuel-outline",
    Component: FuelOutline,
    componentName: "FuelOutline",
  },,
  {
    variant: "twotone",
    slug: "fuel-twotone",
    Component: FuelTwotone,
    componentName: "FuelTwotone",
  }
];

export default { FuelBold, FuelBroken, FuelBulk, FuelLinear, FuelOutline, FuelTwotone };
