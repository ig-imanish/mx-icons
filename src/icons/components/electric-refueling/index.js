import ElectricRefuelingBold from "./ElectricRefuelingBold";
import ElectricRefuelingBroken from "./ElectricRefuelingBroken";
import ElectricRefuelingBulk from "./ElectricRefuelingBulk";
import ElectricRefuelingLinear from "./ElectricRefuelingLinear";
import ElectricRefuelingOutline from "./ElectricRefuelingOutline";
import ElectricRefuelingTwotone from "./ElectricRefuelingTwotone";

export { ElectricRefuelingBold, ElectricRefuelingBroken, ElectricRefuelingBulk, ElectricRefuelingLinear, ElectricRefuelingOutline, ElectricRefuelingTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "electric-refueling-bold",
    Component: ElectricRefuelingBold,
    componentName: "ElectricRefuelingBold",
  },,
  {
    variant: "broken",
    slug: "electric-refueling-broken",
    Component: ElectricRefuelingBroken,
    componentName: "ElectricRefuelingBroken",
  },,
  {
    variant: "bulk",
    slug: "electric-refueling-bulk",
    Component: ElectricRefuelingBulk,
    componentName: "ElectricRefuelingBulk",
  },,
  {
    variant: "linear",
    slug: "electric-refueling-linear",
    Component: ElectricRefuelingLinear,
    componentName: "ElectricRefuelingLinear",
  },,
  {
    variant: "outline",
    slug: "electric-refueling-outline",
    Component: ElectricRefuelingOutline,
    componentName: "ElectricRefuelingOutline",
  },,
  {
    variant: "twotone",
    slug: "electric-refueling-twotone",
    Component: ElectricRefuelingTwotone,
    componentName: "ElectricRefuelingTwotone",
  }
];

export default { ElectricRefuelingBold, ElectricRefuelingBroken, ElectricRefuelingBulk, ElectricRefuelingLinear, ElectricRefuelingOutline, ElectricRefuelingTwotone };
