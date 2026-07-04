import BuildingHouseBold from "./BuildingHouseBold";
import BuildingHouseBroken from "./BuildingHouseBroken";
import BuildingHouseBulk from "./BuildingHouseBulk";
import BuildingHouseLinear from "./BuildingHouseLinear";
import BuildingHouseOutline from "./BuildingHouseOutline";
import BuildingHouseTwotone from "./BuildingHouseTwotone";

export { BuildingHouseBold, BuildingHouseBroken, BuildingHouseBulk, BuildingHouseLinear, BuildingHouseOutline, BuildingHouseTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "building-house-bold",
    Component: BuildingHouseBold,
    componentName: "BuildingHouseBold",
  },,
  {
    variant: "broken",
    slug: "building-house-broken",
    Component: BuildingHouseBroken,
    componentName: "BuildingHouseBroken",
  },,
  {
    variant: "bulk",
    slug: "building-house-bulk",
    Component: BuildingHouseBulk,
    componentName: "BuildingHouseBulk",
  },,
  {
    variant: "linear",
    slug: "building-house-linear",
    Component: BuildingHouseLinear,
    componentName: "BuildingHouseLinear",
  },,
  {
    variant: "outline",
    slug: "building-house-outline",
    Component: BuildingHouseOutline,
    componentName: "BuildingHouseOutline",
  },,
  {
    variant: "twotone",
    slug: "building-house-twotone",
    Component: BuildingHouseTwotone,
    componentName: "BuildingHouseTwotone",
  }
];

export default { BuildingHouseBold, BuildingHouseBroken, BuildingHouseBulk, BuildingHouseLinear, BuildingHouseOutline, BuildingHouseTwotone };
