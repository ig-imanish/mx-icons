import HourglassBold from "./HourglassBold";
import HourglassBroken from "./HourglassBroken";
import HourglassBulk from "./HourglassBulk";
import HourglassLinear from "./HourglassLinear";
import HourglassOutline from "./HourglassOutline";
import HourglassTwotone from "./HourglassTwotone";

export { HourglassBold, HourglassBroken, HourglassBulk, HourglassLinear, HourglassOutline, HourglassTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "hourglass-bold",
    Component: HourglassBold,
    componentName: "HourglassBold",
  },,
  {
    variant: "broken",
    slug: "hourglass-broken",
    Component: HourglassBroken,
    componentName: "HourglassBroken",
  },,
  {
    variant: "bulk",
    slug: "hourglass-bulk",
    Component: HourglassBulk,
    componentName: "HourglassBulk",
  },,
  {
    variant: "linear",
    slug: "hourglass-linear",
    Component: HourglassLinear,
    componentName: "HourglassLinear",
  },,
  {
    variant: "outline",
    slug: "hourglass-outline",
    Component: HourglassOutline,
    componentName: "HourglassOutline",
  },,
  {
    variant: "twotone",
    slug: "hourglass-twotone",
    Component: HourglassTwotone,
    componentName: "HourglassTwotone",
  }
];

export default { HourglassBold, HourglassBroken, HourglassBulk, HourglassLinear, HourglassOutline, HourglassTwotone };
