import SunriseBold from "./SunriseBold";
import SunriseBroken from "./SunriseBroken";
import SunriseBulk from "./SunriseBulk";
import SunriseLinear from "./SunriseLinear";
import SunriseOutline from "./SunriseOutline";
import SunriseTwotone from "./SunriseTwotone";

export { SunriseBold, SunriseBroken, SunriseBulk, SunriseLinear, SunriseOutline, SunriseTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "sunrise-bold",
    Component: SunriseBold,
    componentName: "SunriseBold",
  },,
  {
    variant: "broken",
    slug: "sunrise-broken",
    Component: SunriseBroken,
    componentName: "SunriseBroken",
  },,
  {
    variant: "bulk",
    slug: "sunrise-bulk",
    Component: SunriseBulk,
    componentName: "SunriseBulk",
  },,
  {
    variant: "linear",
    slug: "sunrise-linear",
    Component: SunriseLinear,
    componentName: "SunriseLinear",
  },,
  {
    variant: "outline",
    slug: "sunrise-outline",
    Component: SunriseOutline,
    componentName: "SunriseOutline",
  },,
  {
    variant: "twotone",
    slug: "sunrise-twotone",
    Component: SunriseTwotone,
    componentName: "SunriseTwotone",
  }
];

export default { SunriseBold, SunriseBroken, SunriseBulk, SunriseLinear, SunriseOutline, SunriseTwotone };
