import MainComponentBold from "./MainComponentBold";
import MainComponentBroken from "./MainComponentBroken";
import MainComponentBulk from "./MainComponentBulk";
import MainComponentLinear from "./MainComponentLinear";
import MainComponentOutline from "./MainComponentOutline";
import MainComponentTwotone from "./MainComponentTwotone";

export { MainComponentBold, MainComponentBroken, MainComponentBulk, MainComponentLinear, MainComponentOutline, MainComponentTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "main-component-bold",
    Component: MainComponentBold,
    componentName: "MainComponentBold",
  },
  {
    variant: "broken",
    slug: "main-component-broken",
    Component: MainComponentBroken,
    componentName: "MainComponentBroken",
  },
  {
    variant: "bulk",
    slug: "main-component-bulk",
    Component: MainComponentBulk,
    componentName: "MainComponentBulk",
  },
  {
    variant: "linear",
    slug: "main-component-linear",
    Component: MainComponentLinear,
    componentName: "MainComponentLinear",
  },
  {
    variant: "outline",
    slug: "main-component-outline",
    Component: MainComponentOutline,
    componentName: "MainComponentOutline",
  },
  {
    variant: "twotone",
    slug: "main-component-twotone",
    Component: MainComponentTwotone,
    componentName: "MainComponentTwotone",
  },
];
