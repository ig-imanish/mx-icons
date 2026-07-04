import TramBold from "./TramBold";
import TramBroken from "./TramBroken";
import TramBulk from "./TramBulk";
import TramLinear from "./TramLinear";
import TramOutline from "./TramOutline";
import TramTwotone from "./TramTwotone";

export { TramBold, TramBroken, TramBulk, TramLinear, TramOutline, TramTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "tram-bold",
    Component: TramBold,
    componentName: "TramBold",
  },,
  {
    variant: "broken",
    slug: "tram-broken",
    Component: TramBroken,
    componentName: "TramBroken",
  },,
  {
    variant: "bulk",
    slug: "tram-bulk",
    Component: TramBulk,
    componentName: "TramBulk",
  },,
  {
    variant: "linear",
    slug: "tram-linear",
    Component: TramLinear,
    componentName: "TramLinear",
  },,
  {
    variant: "outline",
    slug: "tram-outline",
    Component: TramOutline,
    componentName: "TramOutline",
  },,
  {
    variant: "twotone",
    slug: "tram-twotone",
    Component: TramTwotone,
    componentName: "TramTwotone",
  }
];

export default { TramBold, TramBroken, TramBulk, TramLinear, TramOutline, TramTwotone };
