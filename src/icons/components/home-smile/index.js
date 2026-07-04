import HomeSmileBold from "./HomeSmileBold";
import HomeSmileBroken from "./HomeSmileBroken";
import HomeSmileBulk from "./HomeSmileBulk";
import HomeSmileLinear from "./HomeSmileLinear";
import HomeSmileOutline from "./HomeSmileOutline";
import HomeSmileTwotone from "./HomeSmileTwotone";

export { HomeSmileBold, HomeSmileBroken, HomeSmileBulk, HomeSmileLinear, HomeSmileOutline, HomeSmileTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "home-smile-bold",
    Component: HomeSmileBold,
    componentName: "HomeSmileBold",
  },,
  {
    variant: "broken",
    slug: "home-smile-broken",
    Component: HomeSmileBroken,
    componentName: "HomeSmileBroken",
  },,
  {
    variant: "bulk",
    slug: "home-smile-bulk",
    Component: HomeSmileBulk,
    componentName: "HomeSmileBulk",
  },,
  {
    variant: "linear",
    slug: "home-smile-linear",
    Component: HomeSmileLinear,
    componentName: "HomeSmileLinear",
  },,
  {
    variant: "outline",
    slug: "home-smile-outline",
    Component: HomeSmileOutline,
    componentName: "HomeSmileOutline",
  },,
  {
    variant: "twotone",
    slug: "home-smile-twotone",
    Component: HomeSmileTwotone,
    componentName: "HomeSmileTwotone",
  }
];

export default { HomeSmileBold, HomeSmileBroken, HomeSmileBulk, HomeSmileLinear, HomeSmileOutline, HomeSmileTwotone };
