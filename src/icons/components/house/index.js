import HouseBold from "./HouseBold";
import HouseBroken from "./HouseBroken";
import HouseBulk from "./HouseBulk";
import HouseLinear from "./HouseLinear";
import HouseOutline from "./HouseOutline";
import HouseTwotone from "./HouseTwotone";

export { HouseBold, HouseBroken, HouseBulk, HouseLinear, HouseOutline, HouseTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "house-bold",
    Component: HouseBold,
    componentName: "HouseBold",
  },
  {
    variant: "broken",
    slug: "house-broken",
    Component: HouseBroken,
    componentName: "HouseBroken",
  },
  {
    variant: "bulk",
    slug: "house-bulk",
    Component: HouseBulk,
    componentName: "HouseBulk",
  },
  {
    variant: "linear",
    slug: "house-linear",
    Component: HouseLinear,
    componentName: "HouseLinear",
  },
  {
    variant: "outline",
    slug: "house-outline",
    Component: HouseOutline,
    componentName: "HouseOutline",
  },
  {
    variant: "twotone",
    slug: "house-twotone",
    Component: HouseTwotone,
    componentName: "HouseTwotone",
  },
];
