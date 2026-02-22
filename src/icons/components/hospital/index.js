import HospitalBold from "./HospitalBold";
import HospitalBroken from "./HospitalBroken";
import HospitalBulk from "./HospitalBulk";
import HospitalLinear from "./HospitalLinear";
import HospitalOutline from "./HospitalOutline";
import HospitalTwotone from "./HospitalTwotone";

export { HospitalBold, HospitalBroken, HospitalBulk, HospitalLinear, HospitalOutline, HospitalTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "hospital-bold",
    Component: HospitalBold,
    componentName: "HospitalBold",
  },
  {
    variant: "broken",
    slug: "hospital-broken",
    Component: HospitalBroken,
    componentName: "HospitalBroken",
  },
  {
    variant: "bulk",
    slug: "hospital-bulk",
    Component: HospitalBulk,
    componentName: "HospitalBulk",
  },
  {
    variant: "linear",
    slug: "hospital-linear",
    Component: HospitalLinear,
    componentName: "HospitalLinear",
  },
  {
    variant: "outline",
    slug: "hospital-outline",
    Component: HospitalOutline,
    componentName: "HospitalOutline",
  },
  {
    variant: "twotone",
    slug: "hospital-twotone",
    Component: HospitalTwotone,
    componentName: "HospitalTwotone",
  },
];
