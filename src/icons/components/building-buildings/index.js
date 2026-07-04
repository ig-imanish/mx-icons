import BuildingBuildingsBold from "./BuildingBuildingsBold";
import BuildingBuildingsBroken from "./BuildingBuildingsBroken";
import BuildingBuildingsBulk from "./BuildingBuildingsBulk";
import BuildingBuildingsLinear from "./BuildingBuildingsLinear";
import BuildingBuildingsOutline from "./BuildingBuildingsOutline";
import BuildingBuildingsTwotone from "./BuildingBuildingsTwotone";

export { BuildingBuildingsBold, BuildingBuildingsBroken, BuildingBuildingsBulk, BuildingBuildingsLinear, BuildingBuildingsOutline, BuildingBuildingsTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "building-buildings-bold",
    Component: BuildingBuildingsBold,
    componentName: "BuildingBuildingsBold",
  },,
  {
    variant: "broken",
    slug: "building-buildings-broken",
    Component: BuildingBuildingsBroken,
    componentName: "BuildingBuildingsBroken",
  },,
  {
    variant: "bulk",
    slug: "building-buildings-bulk",
    Component: BuildingBuildingsBulk,
    componentName: "BuildingBuildingsBulk",
  },,
  {
    variant: "linear",
    slug: "building-buildings-linear",
    Component: BuildingBuildingsLinear,
    componentName: "BuildingBuildingsLinear",
  },,
  {
    variant: "outline",
    slug: "building-buildings-outline",
    Component: BuildingBuildingsOutline,
    componentName: "BuildingBuildingsOutline",
  },,
  {
    variant: "twotone",
    slug: "building-buildings-twotone",
    Component: BuildingBuildingsTwotone,
    componentName: "BuildingBuildingsTwotone",
  }
];

export default { BuildingBuildingsBold, BuildingBuildingsBroken, BuildingBuildingsBulk, BuildingBuildingsLinear, BuildingBuildingsOutline, BuildingBuildingsTwotone };
