import DiscountShapeBold from "./DiscountShapeBold";
import DiscountShapeBroken from "./DiscountShapeBroken";
import DiscountShapeBulk from "./DiscountShapeBulk";
import DiscountShapeLinear from "./DiscountShapeLinear";
import DiscountShapeOutline from "./DiscountShapeOutline";
import DiscountShapeTwotone from "./DiscountShapeTwotone";

export { DiscountShapeBold, DiscountShapeBroken, DiscountShapeBulk, DiscountShapeLinear, DiscountShapeOutline, DiscountShapeTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "discount-shape-bold",
    Component: DiscountShapeBold,
    componentName: "DiscountShapeBold",
  },
  {
    variant: "broken",
    slug: "discount-shape-broken",
    Component: DiscountShapeBroken,
    componentName: "DiscountShapeBroken",
  },
  {
    variant: "bulk",
    slug: "discount-shape-bulk",
    Component: DiscountShapeBulk,
    componentName: "DiscountShapeBulk",
  },
  {
    variant: "linear",
    slug: "discount-shape-linear",
    Component: DiscountShapeLinear,
    componentName: "DiscountShapeLinear",
  },
  {
    variant: "outline",
    slug: "discount-shape-outline",
    Component: DiscountShapeOutline,
    componentName: "DiscountShapeOutline",
  },
  {
    variant: "twotone",
    slug: "discount-shape-twotone",
    Component: DiscountShapeTwotone,
    componentName: "DiscountShapeTwotone",
  },
];
