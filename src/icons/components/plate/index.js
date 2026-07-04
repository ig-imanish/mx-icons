import PlateBold from "./PlateBold";
import PlateBroken from "./PlateBroken";
import PlateBulk from "./PlateBulk";
import PlateLinear from "./PlateLinear";
import PlateOutline from "./PlateOutline";
import PlateTwotone from "./PlateTwotone";

export { PlateBold, PlateBroken, PlateBulk, PlateLinear, PlateOutline, PlateTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "plate-bold",
    Component: PlateBold,
    componentName: "PlateBold",
  },,
  {
    variant: "broken",
    slug: "plate-broken",
    Component: PlateBroken,
    componentName: "PlateBroken",
  },,
  {
    variant: "bulk",
    slug: "plate-bulk",
    Component: PlateBulk,
    componentName: "PlateBulk",
  },,
  {
    variant: "linear",
    slug: "plate-linear",
    Component: PlateLinear,
    componentName: "PlateLinear",
  },,
  {
    variant: "outline",
    slug: "plate-outline",
    Component: PlateOutline,
    componentName: "PlateOutline",
  },,
  {
    variant: "twotone",
    slug: "plate-twotone",
    Component: PlateTwotone,
    componentName: "PlateTwotone",
  }
];

export default { PlateBold, PlateBroken, PlateBulk, PlateLinear, PlateOutline, PlateTwotone };
