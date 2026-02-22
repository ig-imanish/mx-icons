import ElectricityBold from "./ElectricityBold";
import ElectricityBroken from "./ElectricityBroken";
import ElectricityBulk from "./ElectricityBulk";
import ElectricityLinear from "./ElectricityLinear";
import ElectricityOutline from "./ElectricityOutline";
import ElectricityTwotone from "./ElectricityTwotone";

export { ElectricityBold, ElectricityBroken, ElectricityBulk, ElectricityLinear, ElectricityOutline, ElectricityTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "electricity-bold",
    Component: ElectricityBold,
    componentName: "ElectricityBold",
  },
  {
    variant: "broken",
    slug: "electricity-broken",
    Component: ElectricityBroken,
    componentName: "ElectricityBroken",
  },
  {
    variant: "bulk",
    slug: "electricity-bulk",
    Component: ElectricityBulk,
    componentName: "ElectricityBulk",
  },
  {
    variant: "linear",
    slug: "electricity-linear",
    Component: ElectricityLinear,
    componentName: "ElectricityLinear",
  },
  {
    variant: "outline",
    slug: "electricity-outline",
    Component: ElectricityOutline,
    componentName: "ElectricityOutline",
  },
  {
    variant: "twotone",
    slug: "electricity-twotone",
    Component: ElectricityTwotone,
    componentName: "ElectricityTwotone",
  },
];
