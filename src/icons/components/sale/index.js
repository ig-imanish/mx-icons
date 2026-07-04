import SaleBold from "./SaleBold";
import SaleBroken from "./SaleBroken";
import SaleBulk from "./SaleBulk";
import SaleLinear from "./SaleLinear";
import SaleOutline from "./SaleOutline";
import SaleTwotone from "./SaleTwotone";

export { SaleBold, SaleBroken, SaleBulk, SaleLinear, SaleOutline, SaleTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "sale-bold",
    Component: SaleBold,
    componentName: "SaleBold",
  },,
  {
    variant: "broken",
    slug: "sale-broken",
    Component: SaleBroken,
    componentName: "SaleBroken",
  },,
  {
    variant: "bulk",
    slug: "sale-bulk",
    Component: SaleBulk,
    componentName: "SaleBulk",
  },,
  {
    variant: "linear",
    slug: "sale-linear",
    Component: SaleLinear,
    componentName: "SaleLinear",
  },,
  {
    variant: "outline",
    slug: "sale-outline",
    Component: SaleOutline,
    componentName: "SaleOutline",
  },,
  {
    variant: "twotone",
    slug: "sale-twotone",
    Component: SaleTwotone,
    componentName: "SaleTwotone",
  }
];

export default { SaleBold, SaleBroken, SaleBulk, SaleLinear, SaleOutline, SaleTwotone };
