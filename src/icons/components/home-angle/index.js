import HomeAngleBold from "./HomeAngleBold";
import HomeAngleBroken from "./HomeAngleBroken";
import HomeAngleBulk from "./HomeAngleBulk";
import HomeAngleLinear from "./HomeAngleLinear";
import HomeAngleOutline from "./HomeAngleOutline";
import HomeAngleTwotone from "./HomeAngleTwotone";

export { HomeAngleBold, HomeAngleBroken, HomeAngleBulk, HomeAngleLinear, HomeAngleOutline, HomeAngleTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "home-angle-bold",
    Component: HomeAngleBold,
    componentName: "HomeAngleBold",
  },,
  {
    variant: "broken",
    slug: "home-angle-broken",
    Component: HomeAngleBroken,
    componentName: "HomeAngleBroken",
  },,
  {
    variant: "bulk",
    slug: "home-angle-bulk",
    Component: HomeAngleBulk,
    componentName: "HomeAngleBulk",
  },,
  {
    variant: "linear",
    slug: "home-angle-linear",
    Component: HomeAngleLinear,
    componentName: "HomeAngleLinear",
  },,
  {
    variant: "outline",
    slug: "home-angle-outline",
    Component: HomeAngleOutline,
    componentName: "HomeAngleOutline",
  },,
  {
    variant: "twotone",
    slug: "home-angle-twotone",
    Component: HomeAngleTwotone,
    componentName: "HomeAngleTwotone",
  }
];

export default { HomeAngleBold, HomeAngleBroken, HomeAngleBulk, HomeAngleLinear, HomeAngleOutline, HomeAngleTwotone };
