import MedalStarCircleBold from "./MedalStarCircleBold";
import MedalStarCircleBroken from "./MedalStarCircleBroken";
import MedalStarCircleBulk from "./MedalStarCircleBulk";
import MedalStarCircleLinear from "./MedalStarCircleLinear";
import MedalStarCircleOutline from "./MedalStarCircleOutline";
import MedalStarCircleTwotone from "./MedalStarCircleTwotone";

export { MedalStarCircleBold, MedalStarCircleBroken, MedalStarCircleBulk, MedalStarCircleLinear, MedalStarCircleOutline, MedalStarCircleTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "medal-star-circle-bold",
    Component: MedalStarCircleBold,
    componentName: "MedalStarCircleBold",
  },,
  {
    variant: "broken",
    slug: "medal-star-circle-broken",
    Component: MedalStarCircleBroken,
    componentName: "MedalStarCircleBroken",
  },,
  {
    variant: "bulk",
    slug: "medal-star-circle-bulk",
    Component: MedalStarCircleBulk,
    componentName: "MedalStarCircleBulk",
  },,
  {
    variant: "linear",
    slug: "medal-star-circle-linear",
    Component: MedalStarCircleLinear,
    componentName: "MedalStarCircleLinear",
  },,
  {
    variant: "outline",
    slug: "medal-star-circle-outline",
    Component: MedalStarCircleOutline,
    componentName: "MedalStarCircleOutline",
  },,
  {
    variant: "twotone",
    slug: "medal-star-circle-twotone",
    Component: MedalStarCircleTwotone,
    componentName: "MedalStarCircleTwotone",
  }
];

export default { MedalStarCircleBold, MedalStarCircleBroken, MedalStarCircleBulk, MedalStarCircleLinear, MedalStarCircleOutline, MedalStarCircleTwotone };
