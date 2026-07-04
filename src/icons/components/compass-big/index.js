import CompassBigBold from "./CompassBigBold";
import CompassBigBroken from "./CompassBigBroken";
import CompassBigBulk from "./CompassBigBulk";
import CompassBigLinear from "./CompassBigLinear";
import CompassBigOutline from "./CompassBigOutline";
import CompassBigTwotone from "./CompassBigTwotone";

export { CompassBigBold, CompassBigBroken, CompassBigBulk, CompassBigLinear, CompassBigOutline, CompassBigTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "compass-big-bold",
    Component: CompassBigBold,
    componentName: "CompassBigBold",
  },,
  {
    variant: "broken",
    slug: "compass-big-broken",
    Component: CompassBigBroken,
    componentName: "CompassBigBroken",
  },,
  {
    variant: "bulk",
    slug: "compass-big-bulk",
    Component: CompassBigBulk,
    componentName: "CompassBigBulk",
  },,
  {
    variant: "linear",
    slug: "compass-big-linear",
    Component: CompassBigLinear,
    componentName: "CompassBigLinear",
  },,
  {
    variant: "outline",
    slug: "compass-big-outline",
    Component: CompassBigOutline,
    componentName: "CompassBigOutline",
  },,
  {
    variant: "twotone",
    slug: "compass-big-twotone",
    Component: CompassBigTwotone,
    componentName: "CompassBigTwotone",
  }
];

export default { CompassBigBold, CompassBigBroken, CompassBigBulk, CompassBigLinear, CompassBigOutline, CompassBigTwotone };
