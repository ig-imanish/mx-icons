import EarthBold from "./EarthBold";
import EarthBroken from "./EarthBroken";
import EarthBulk from "./EarthBulk";
import EarthLinear from "./EarthLinear";
import EarthOutline from "./EarthOutline";
import EarthTwotone from "./EarthTwotone";

export { EarthBold, EarthBroken, EarthBulk, EarthLinear, EarthOutline, EarthTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "earth-bold",
    Component: EarthBold,
    componentName: "EarthBold",
  },,
  {
    variant: "broken",
    slug: "earth-broken",
    Component: EarthBroken,
    componentName: "EarthBroken",
  },,
  {
    variant: "bulk",
    slug: "earth-bulk",
    Component: EarthBulk,
    componentName: "EarthBulk",
  },,
  {
    variant: "linear",
    slug: "earth-linear",
    Component: EarthLinear,
    componentName: "EarthLinear",
  },,
  {
    variant: "outline",
    slug: "earth-outline",
    Component: EarthOutline,
    componentName: "EarthOutline",
  },,
  {
    variant: "twotone",
    slug: "earth-twotone",
    Component: EarthTwotone,
    componentName: "EarthTwotone",
  }
];

export default { EarthBold, EarthBroken, EarthBulk, EarthLinear, EarthOutline, EarthTwotone };
