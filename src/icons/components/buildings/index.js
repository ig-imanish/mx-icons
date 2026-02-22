import BuildingsBold from "./BuildingsBold";
import BuildingsBroken from "./BuildingsBroken";
import BuildingsBulk from "./BuildingsBulk";
import BuildingsLinear from "./BuildingsLinear";
import BuildingsOutline from "./BuildingsOutline";
import BuildingsTwotone from "./BuildingsTwotone";

export { BuildingsBold, BuildingsBroken, BuildingsBulk, BuildingsLinear, BuildingsOutline, BuildingsTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "buildings-bold",
    Component: BuildingsBold,
    componentName: "BuildingsBold",
  },
  {
    variant: "broken",
    slug: "buildings-broken",
    Component: BuildingsBroken,
    componentName: "BuildingsBroken",
  },
  {
    variant: "bulk",
    slug: "buildings-bulk",
    Component: BuildingsBulk,
    componentName: "BuildingsBulk",
  },
  {
    variant: "linear",
    slug: "buildings-linear",
    Component: BuildingsLinear,
    componentName: "BuildingsLinear",
  },
  {
    variant: "outline",
    slug: "buildings-outline",
    Component: BuildingsOutline,
    componentName: "BuildingsOutline",
  },
  {
    variant: "twotone",
    slug: "buildings-twotone",
    Component: BuildingsTwotone,
    componentName: "BuildingsTwotone",
  },
];
