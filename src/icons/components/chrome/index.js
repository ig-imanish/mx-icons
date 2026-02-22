import ChromeBold from "./ChromeBold";
import ChromeBroken from "./ChromeBroken";
import ChromeBulk from "./ChromeBulk";
import ChromeLinear from "./ChromeLinear";
import ChromeOutline from "./ChromeOutline";
import ChromeTwotone from "./ChromeTwotone";

export { ChromeBold, ChromeBroken, ChromeBulk, ChromeLinear, ChromeOutline, ChromeTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "chrome-bold",
    Component: ChromeBold,
    componentName: "ChromeBold",
  },
  {
    variant: "broken",
    slug: "chrome-broken",
    Component: ChromeBroken,
    componentName: "ChromeBroken",
  },
  {
    variant: "bulk",
    slug: "chrome-bulk",
    Component: ChromeBulk,
    componentName: "ChromeBulk",
  },
  {
    variant: "linear",
    slug: "chrome-linear",
    Component: ChromeLinear,
    componentName: "ChromeLinear",
  },
  {
    variant: "outline",
    slug: "chrome-outline",
    Component: ChromeOutline,
    componentName: "ChromeOutline",
  },
  {
    variant: "twotone",
    slug: "chrome-twotone",
    Component: ChromeTwotone,
    componentName: "ChromeTwotone",
  },
];
