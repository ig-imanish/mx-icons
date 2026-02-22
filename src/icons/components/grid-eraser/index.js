import GridEraserBold from "./GridEraserBold";
import GridEraserBroken from "./GridEraserBroken";
import GridEraserBulk from "./GridEraserBulk";
import GridEraserLinear from "./GridEraserLinear";
import GridEraserOutline from "./GridEraserOutline";
import GridEraserTwotone from "./GridEraserTwotone";

export { GridEraserBold, GridEraserBroken, GridEraserBulk, GridEraserLinear, GridEraserOutline, GridEraserTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "grid-eraser-bold",
    Component: GridEraserBold,
    componentName: "GridEraserBold",
  },
  {
    variant: "broken",
    slug: "grid-eraser-broken",
    Component: GridEraserBroken,
    componentName: "GridEraserBroken",
  },
  {
    variant: "bulk",
    slug: "grid-eraser-bulk",
    Component: GridEraserBulk,
    componentName: "GridEraserBulk",
  },
  {
    variant: "linear",
    slug: "grid-eraser-linear",
    Component: GridEraserLinear,
    componentName: "GridEraserLinear",
  },
  {
    variant: "outline",
    slug: "grid-eraser-outline",
    Component: GridEraserOutline,
    componentName: "GridEraserOutline",
  },
  {
    variant: "twotone",
    slug: "grid-eraser-twotone",
    Component: GridEraserTwotone,
    componentName: "GridEraserTwotone",
  },
];
