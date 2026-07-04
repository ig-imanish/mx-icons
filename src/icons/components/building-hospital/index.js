import BuildingHospitalBold from "./BuildingHospitalBold";
import BuildingHospitalBroken from "./BuildingHospitalBroken";
import BuildingHospitalBulk from "./BuildingHospitalBulk";
import BuildingHospitalLinear from "./BuildingHospitalLinear";
import BuildingHospitalOutline from "./BuildingHospitalOutline";
import BuildingHospitalTwotone from "./BuildingHospitalTwotone";

export { BuildingHospitalBold, BuildingHospitalBroken, BuildingHospitalBulk, BuildingHospitalLinear, BuildingHospitalOutline, BuildingHospitalTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "building-hospital-bold",
    Component: BuildingHospitalBold,
    componentName: "BuildingHospitalBold",
  },,
  {
    variant: "broken",
    slug: "building-hospital-broken",
    Component: BuildingHospitalBroken,
    componentName: "BuildingHospitalBroken",
  },,
  {
    variant: "bulk",
    slug: "building-hospital-bulk",
    Component: BuildingHospitalBulk,
    componentName: "BuildingHospitalBulk",
  },,
  {
    variant: "linear",
    slug: "building-hospital-linear",
    Component: BuildingHospitalLinear,
    componentName: "BuildingHospitalLinear",
  },,
  {
    variant: "outline",
    slug: "building-hospital-outline",
    Component: BuildingHospitalOutline,
    componentName: "BuildingHospitalOutline",
  },,
  {
    variant: "twotone",
    slug: "building-hospital-twotone",
    Component: BuildingHospitalTwotone,
    componentName: "BuildingHospitalTwotone",
  }
];

export default { BuildingHospitalBold, BuildingHospitalBroken, BuildingHospitalBulk, BuildingHospitalLinear, BuildingHospitalOutline, BuildingHospitalTwotone };
