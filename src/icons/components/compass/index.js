import CompassBold from "./CompassBold";
import CompassBroken from "./CompassBroken";
import CompassBulk from "./CompassBulk";
import CompassLinear from "./CompassLinear";
import CompassOutline from "./CompassOutline";
import CompassTwotone from "./CompassTwotone";

export { CompassBold, CompassBroken, CompassBulk, CompassLinear, CompassOutline, CompassTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "compass-bold",
    Component: CompassBold,
    componentName: "CompassBold",
  },,
  {
    variant: "broken",
    slug: "compass-broken",
    Component: CompassBroken,
    componentName: "CompassBroken",
  },,
  {
    variant: "bulk",
    slug: "compass-bulk",
    Component: CompassBulk,
    componentName: "CompassBulk",
  },,
  {
    variant: "linear",
    slug: "compass-linear",
    Component: CompassLinear,
    componentName: "CompassLinear",
  },,
  {
    variant: "outline",
    slug: "compass-outline",
    Component: CompassOutline,
    componentName: "CompassOutline",
  },,
  {
    variant: "twotone",
    slug: "compass-twotone",
    Component: CompassTwotone,
    componentName: "CompassTwotone",
  }
];

export default { CompassBold, CompassBroken, CompassBulk, CompassLinear, CompassOutline, CompassTwotone };
