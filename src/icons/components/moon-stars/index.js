import MoonStarsBold from "./MoonStarsBold";
import MoonStarsBroken from "./MoonStarsBroken";
import MoonStarsBulk from "./MoonStarsBulk";
import MoonStarsLinear from "./MoonStarsLinear";
import MoonStarsOutline from "./MoonStarsOutline";
import MoonStarsTwotone from "./MoonStarsTwotone";

export { MoonStarsBold, MoonStarsBroken, MoonStarsBulk, MoonStarsLinear, MoonStarsOutline, MoonStarsTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "moon-stars-bold",
    Component: MoonStarsBold,
    componentName: "MoonStarsBold",
  },,
  {
    variant: "broken",
    slug: "moon-stars-broken",
    Component: MoonStarsBroken,
    componentName: "MoonStarsBroken",
  },,
  {
    variant: "bulk",
    slug: "moon-stars-bulk",
    Component: MoonStarsBulk,
    componentName: "MoonStarsBulk",
  },,
  {
    variant: "linear",
    slug: "moon-stars-linear",
    Component: MoonStarsLinear,
    componentName: "MoonStarsLinear",
  },,
  {
    variant: "outline",
    slug: "moon-stars-outline",
    Component: MoonStarsOutline,
    componentName: "MoonStarsOutline",
  },,
  {
    variant: "twotone",
    slug: "moon-stars-twotone",
    Component: MoonStarsTwotone,
    componentName: "MoonStarsTwotone",
  }
];

export default { MoonStarsBold, MoonStarsBroken, MoonStarsBulk, MoonStarsLinear, MoonStarsOutline, MoonStarsTwotone };
