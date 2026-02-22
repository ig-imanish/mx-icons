import TriangleBold from "./TriangleBold";
import TriangleBroken from "./TriangleBroken";
import TriangleBulk from "./TriangleBulk";
import TriangleLinear from "./TriangleLinear";
import TriangleOutline from "./TriangleOutline";
import TriangleTwotone from "./TriangleTwotone";

export { TriangleBold, TriangleBroken, TriangleBulk, TriangleLinear, TriangleOutline, TriangleTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "triangle-bold",
    Component: TriangleBold,
    componentName: "TriangleBold",
  },
  {
    variant: "broken",
    slug: "triangle-broken",
    Component: TriangleBroken,
    componentName: "TriangleBroken",
  },
  {
    variant: "bulk",
    slug: "triangle-bulk",
    Component: TriangleBulk,
    componentName: "TriangleBulk",
  },
  {
    variant: "linear",
    slug: "triangle-linear",
    Component: TriangleLinear,
    componentName: "TriangleLinear",
  },
  {
    variant: "outline",
    slug: "triangle-outline",
    Component: TriangleOutline,
    componentName: "TriangleOutline",
  },
  {
    variant: "twotone",
    slug: "triangle-twotone",
    Component: TriangleTwotone,
    componentName: "TriangleTwotone",
  },
];
