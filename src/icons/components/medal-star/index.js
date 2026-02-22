import MedalStarBold from "./MedalStarBold";
import MedalStarBroken from "./MedalStarBroken";
import MedalStarBulk from "./MedalStarBulk";
import MedalStarLinear from "./MedalStarLinear";
import MedalStarOutline from "./MedalStarOutline";
import MedalStarTwotone from "./MedalStarTwotone";

export { MedalStarBold, MedalStarBroken, MedalStarBulk, MedalStarLinear, MedalStarOutline, MedalStarTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "medal-star-bold",
    Component: MedalStarBold,
    componentName: "MedalStarBold",
  },
  {
    variant: "broken",
    slug: "medal-star-broken",
    Component: MedalStarBroken,
    componentName: "MedalStarBroken",
  },
  {
    variant: "bulk",
    slug: "medal-star-bulk",
    Component: MedalStarBulk,
    componentName: "MedalStarBulk",
  },
  {
    variant: "linear",
    slug: "medal-star-linear",
    Component: MedalStarLinear,
    componentName: "MedalStarLinear",
  },
  {
    variant: "outline",
    slug: "medal-star-outline",
    Component: MedalStarOutline,
    componentName: "MedalStarOutline",
  },
  {
    variant: "twotone",
    slug: "medal-star-twotone",
    Component: MedalStarTwotone,
    componentName: "MedalStarTwotone",
  },
];
