import BuildingBold from "./BuildingBold";
import BuildingBroken from "./BuildingBroken";
import BuildingBulk from "./BuildingBulk";
import BuildingLinear from "./BuildingLinear";
import BuildingOutline from "./BuildingOutline";
import BuildingTwotone from "./BuildingTwotone";

export { BuildingBold, BuildingBroken, BuildingBulk, BuildingLinear, BuildingOutline, BuildingTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "building-bold",
    Component: BuildingBold,
    componentName: "BuildingBold",
  },
  {
    variant: "broken",
    slug: "building-broken",
    Component: BuildingBroken,
    componentName: "BuildingBroken",
  },
  {
    variant: "bulk",
    slug: "building-bulk",
    Component: BuildingBulk,
    componentName: "BuildingBulk",
  },
  {
    variant: "linear",
    slug: "building-linear",
    Component: BuildingLinear,
    componentName: "BuildingLinear",
  },
  {
    variant: "outline",
    slug: "building-outline",
    Component: BuildingOutline,
    componentName: "BuildingOutline",
  },
  {
    variant: "twotone",
    slug: "building-twotone",
    Component: BuildingTwotone,
    componentName: "BuildingTwotone",
  },
];
