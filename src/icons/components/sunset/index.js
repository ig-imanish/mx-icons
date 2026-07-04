import SunsetBold from "./SunsetBold";
import SunsetBroken from "./SunsetBroken";
import SunsetBulk from "./SunsetBulk";
import SunsetLinear from "./SunsetLinear";
import SunsetOutline from "./SunsetOutline";
import SunsetTwotone from "./SunsetTwotone";

export { SunsetBold, SunsetBroken, SunsetBulk, SunsetLinear, SunsetOutline, SunsetTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "sunset-bold",
    Component: SunsetBold,
    componentName: "SunsetBold",
  },,
  {
    variant: "broken",
    slug: "sunset-broken",
    Component: SunsetBroken,
    componentName: "SunsetBroken",
  },,
  {
    variant: "bulk",
    slug: "sunset-bulk",
    Component: SunsetBulk,
    componentName: "SunsetBulk",
  },,
  {
    variant: "linear",
    slug: "sunset-linear",
    Component: SunsetLinear,
    componentName: "SunsetLinear",
  },,
  {
    variant: "outline",
    slug: "sunset-outline",
    Component: SunsetOutline,
    componentName: "SunsetOutline",
  },,
  {
    variant: "twotone",
    slug: "sunset-twotone",
    Component: SunsetTwotone,
    componentName: "SunsetTwotone",
  }
];

export default { SunsetBold, SunsetBroken, SunsetBulk, SunsetLinear, SunsetOutline, SunsetTwotone };
