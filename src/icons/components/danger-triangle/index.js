import DangerTriangleBold from "./DangerTriangleBold";
import DangerTriangleBroken from "./DangerTriangleBroken";
import DangerTriangleBulk from "./DangerTriangleBulk";
import DangerTriangleLinear from "./DangerTriangleLinear";
import DangerTriangleOutline from "./DangerTriangleOutline";
import DangerTriangleTwotone from "./DangerTriangleTwotone";

export { DangerTriangleBold, DangerTriangleBroken, DangerTriangleBulk, DangerTriangleLinear, DangerTriangleOutline, DangerTriangleTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "danger-triangle-bold",
    Component: DangerTriangleBold,
    componentName: "DangerTriangleBold",
  },,
  {
    variant: "broken",
    slug: "danger-triangle-broken",
    Component: DangerTriangleBroken,
    componentName: "DangerTriangleBroken",
  },,
  {
    variant: "bulk",
    slug: "danger-triangle-bulk",
    Component: DangerTriangleBulk,
    componentName: "DangerTriangleBulk",
  },,
  {
    variant: "linear",
    slug: "danger-triangle-linear",
    Component: DangerTriangleLinear,
    componentName: "DangerTriangleLinear",
  },,
  {
    variant: "outline",
    slug: "danger-triangle-outline",
    Component: DangerTriangleOutline,
    componentName: "DangerTriangleOutline",
  },,
  {
    variant: "twotone",
    slug: "danger-triangle-twotone",
    Component: DangerTriangleTwotone,
    componentName: "DangerTriangleTwotone",
  }
];

export default { DangerTriangleBold, DangerTriangleBroken, DangerTriangleBulk, DangerTriangleLinear, DangerTriangleOutline, DangerTriangleTwotone };
