import HomeAddBold from "./HomeAddBold";
import HomeAddBroken from "./HomeAddBroken";
import HomeAddBulk from "./HomeAddBulk";
import HomeAddLinear from "./HomeAddLinear";
import HomeAddOutline from "./HomeAddOutline";
import HomeAddTwotone from "./HomeAddTwotone";

export { HomeAddBold, HomeAddBroken, HomeAddBulk, HomeAddLinear, HomeAddOutline, HomeAddTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "home-add-bold",
    Component: HomeAddBold,
    componentName: "HomeAddBold",
  },,
  {
    variant: "broken",
    slug: "home-add-broken",
    Component: HomeAddBroken,
    componentName: "HomeAddBroken",
  },,
  {
    variant: "bulk",
    slug: "home-add-bulk",
    Component: HomeAddBulk,
    componentName: "HomeAddBulk",
  },,
  {
    variant: "linear",
    slug: "home-add-linear",
    Component: HomeAddLinear,
    componentName: "HomeAddLinear",
  },,
  {
    variant: "outline",
    slug: "home-add-outline",
    Component: HomeAddOutline,
    componentName: "HomeAddOutline",
  },,
  {
    variant: "twotone",
    slug: "home-add-twotone",
    Component: HomeAddTwotone,
    componentName: "HomeAddTwotone",
  }
];

export default { HomeAddBold, HomeAddBroken, HomeAddBulk, HomeAddLinear, HomeAddOutline, HomeAddTwotone };
