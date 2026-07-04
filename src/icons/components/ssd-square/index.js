import SsdSquareBold from "./SsdSquareBold";
import SsdSquareBroken from "./SsdSquareBroken";
import SsdSquareBulk from "./SsdSquareBulk";
import SsdSquareLinear from "./SsdSquareLinear";
import SsdSquareOutline from "./SsdSquareOutline";
import SsdSquareTwotone from "./SsdSquareTwotone";

export { SsdSquareBold, SsdSquareBroken, SsdSquareBulk, SsdSquareLinear, SsdSquareOutline, SsdSquareTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "ssd-square-bold",
    Component: SsdSquareBold,
    componentName: "SsdSquareBold",
  },,
  {
    variant: "broken",
    slug: "ssd-square-broken",
    Component: SsdSquareBroken,
    componentName: "SsdSquareBroken",
  },,
  {
    variant: "bulk",
    slug: "ssd-square-bulk",
    Component: SsdSquareBulk,
    componentName: "SsdSquareBulk",
  },,
  {
    variant: "linear",
    slug: "ssd-square-linear",
    Component: SsdSquareLinear,
    componentName: "SsdSquareLinear",
  },,
  {
    variant: "outline",
    slug: "ssd-square-outline",
    Component: SsdSquareOutline,
    componentName: "SsdSquareOutline",
  },,
  {
    variant: "twotone",
    slug: "ssd-square-twotone",
    Component: SsdSquareTwotone,
    componentName: "SsdSquareTwotone",
  }
];

export default { SsdSquareBold, SsdSquareBroken, SsdSquareBulk, SsdSquareLinear, SsdSquareOutline, SsdSquareTwotone };
