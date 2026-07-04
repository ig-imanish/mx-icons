import HourglassLineBold from "./HourglassLineBold";
import HourglassLineBroken from "./HourglassLineBroken";
import HourglassLineBulk from "./HourglassLineBulk";
import HourglassLineLinear from "./HourglassLineLinear";
import HourglassLineOutline from "./HourglassLineOutline";
import HourglassLineTwotone from "./HourglassLineTwotone";

export { HourglassLineBold, HourglassLineBroken, HourglassLineBulk, HourglassLineLinear, HourglassLineOutline, HourglassLineTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "hourglass-line-bold",
    Component: HourglassLineBold,
    componentName: "HourglassLineBold",
  },,
  {
    variant: "broken",
    slug: "hourglass-line-broken",
    Component: HourglassLineBroken,
    componentName: "HourglassLineBroken",
  },,
  {
    variant: "bulk",
    slug: "hourglass-line-bulk",
    Component: HourglassLineBulk,
    componentName: "HourglassLineBulk",
  },,
  {
    variant: "linear",
    slug: "hourglass-line-linear",
    Component: HourglassLineLinear,
    componentName: "HourglassLineLinear",
  },,
  {
    variant: "outline",
    slug: "hourglass-line-outline",
    Component: HourglassLineOutline,
    componentName: "HourglassLineOutline",
  },,
  {
    variant: "twotone",
    slug: "hourglass-line-twotone",
    Component: HourglassLineTwotone,
    componentName: "HourglassLineTwotone",
  }
];

export default { HourglassLineBold, HourglassLineBroken, HourglassLineBulk, HourglassLineLinear, HourglassLineOutline, HourglassLineTwotone };
