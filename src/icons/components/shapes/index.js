import ShapesBold from "./ShapesBold";
import ShapesBroken from "./ShapesBroken";
import ShapesBulk from "./ShapesBulk";
import ShapesLinear from "./ShapesLinear";
import ShapesOutline from "./ShapesOutline";
import ShapesTwotone from "./ShapesTwotone";

export { ShapesBold, ShapesBroken, ShapesBulk, ShapesLinear, ShapesOutline, ShapesTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "shapes-bold",
    Component: ShapesBold,
    componentName: "ShapesBold",
  },
  {
    variant: "broken",
    slug: "shapes-broken",
    Component: ShapesBroken,
    componentName: "ShapesBroken",
  },
  {
    variant: "bulk",
    slug: "shapes-bulk",
    Component: ShapesBulk,
    componentName: "ShapesBulk",
  },
  {
    variant: "linear",
    slug: "shapes-linear",
    Component: ShapesLinear,
    componentName: "ShapesLinear",
  },
  {
    variant: "outline",
    slug: "shapes-outline",
    Component: ShapesOutline,
    componentName: "ShapesOutline",
  },
  {
    variant: "twotone",
    slug: "shapes-twotone",
    Component: ShapesTwotone,
    componentName: "ShapesTwotone",
  },
];
