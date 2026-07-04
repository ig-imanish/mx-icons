import LaptopBold from "./LaptopBold";
import LaptopBroken from "./LaptopBroken";
import LaptopBulk from "./LaptopBulk";
import LaptopLinear from "./LaptopLinear";
import LaptopOutline from "./LaptopOutline";
import LaptopTwotone from "./LaptopTwotone";

export { LaptopBold, LaptopBroken, LaptopBulk, LaptopLinear, LaptopOutline, LaptopTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "laptop-bold",
    Component: LaptopBold,
    componentName: "LaptopBold",
  },,
  {
    variant: "broken",
    slug: "laptop-broken",
    Component: LaptopBroken,
    componentName: "LaptopBroken",
  },,
  {
    variant: "bulk",
    slug: "laptop-bulk",
    Component: LaptopBulk,
    componentName: "LaptopBulk",
  },,
  {
    variant: "linear",
    slug: "laptop-linear",
    Component: LaptopLinear,
    componentName: "LaptopLinear",
  },,
  {
    variant: "outline",
    slug: "laptop-outline",
    Component: LaptopOutline,
    componentName: "LaptopOutline",
  },,
  {
    variant: "twotone",
    slug: "laptop-twotone",
    Component: LaptopTwotone,
    componentName: "LaptopTwotone",
  }
];

export default { LaptopBold, LaptopBroken, LaptopBulk, LaptopLinear, LaptopOutline, LaptopTwotone };
