import WineglassBold from "./WineglassBold";
import WineglassBroken from "./WineglassBroken";
import WineglassBulk from "./WineglassBulk";
import WineglassLinear from "./WineglassLinear";
import WineglassOutline from "./WineglassOutline";
import WineglassTwotone from "./WineglassTwotone";

export { WineglassBold, WineglassBroken, WineglassBulk, WineglassLinear, WineglassOutline, WineglassTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "wineglass-bold",
    Component: WineglassBold,
    componentName: "WineglassBold",
  },,
  {
    variant: "broken",
    slug: "wineglass-broken",
    Component: WineglassBroken,
    componentName: "WineglassBroken",
  },,
  {
    variant: "bulk",
    slug: "wineglass-bulk",
    Component: WineglassBulk,
    componentName: "WineglassBulk",
  },,
  {
    variant: "linear",
    slug: "wineglass-linear",
    Component: WineglassLinear,
    componentName: "WineglassLinear",
  },,
  {
    variant: "outline",
    slug: "wineglass-outline",
    Component: WineglassOutline,
    componentName: "WineglassOutline",
  },,
  {
    variant: "twotone",
    slug: "wineglass-twotone",
    Component: WineglassTwotone,
    componentName: "WineglassTwotone",
  }
];

export default { WineglassBold, WineglassBroken, WineglassBulk, WineglassLinear, WineglassOutline, WineglassTwotone };
