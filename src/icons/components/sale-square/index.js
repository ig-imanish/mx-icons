import SaleSquareBold from "./SaleSquareBold";
import SaleSquareBroken from "./SaleSquareBroken";
import SaleSquareBulk from "./SaleSquareBulk";
import SaleSquareLinear from "./SaleSquareLinear";
import SaleSquareOutline from "./SaleSquareOutline";
import SaleSquareTwotone from "./SaleSquareTwotone";

export { SaleSquareBold, SaleSquareBroken, SaleSquareBulk, SaleSquareLinear, SaleSquareOutline, SaleSquareTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "sale-square-bold",
    Component: SaleSquareBold,
    componentName: "SaleSquareBold",
  },,
  {
    variant: "broken",
    slug: "sale-square-broken",
    Component: SaleSquareBroken,
    componentName: "SaleSquareBroken",
  },,
  {
    variant: "bulk",
    slug: "sale-square-bulk",
    Component: SaleSquareBulk,
    componentName: "SaleSquareBulk",
  },,
  {
    variant: "linear",
    slug: "sale-square-linear",
    Component: SaleSquareLinear,
    componentName: "SaleSquareLinear",
  },,
  {
    variant: "outline",
    slug: "sale-square-outline",
    Component: SaleSquareOutline,
    componentName: "SaleSquareOutline",
  },,
  {
    variant: "twotone",
    slug: "sale-square-twotone",
    Component: SaleSquareTwotone,
    componentName: "SaleSquareTwotone",
  }
];

export default { SaleSquareBold, SaleSquareBroken, SaleSquareBulk, SaleSquareLinear, SaleSquareOutline, SaleSquareTwotone };
