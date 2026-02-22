import DiscountCircleBold from "./DiscountCircleBold";
import DiscountCircleBroken from "./DiscountCircleBroken";
import DiscountCircleBulk from "./DiscountCircleBulk";
import DiscountCircleLinear from "./DiscountCircleLinear";
import DiscountCircleOutline from "./DiscountCircleOutline";
import DiscountCircleTwotone from "./DiscountCircleTwotone";

export { DiscountCircleBold, DiscountCircleBroken, DiscountCircleBulk, DiscountCircleLinear, DiscountCircleOutline, DiscountCircleTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "discount-circle-bold",
    Component: DiscountCircleBold,
    componentName: "DiscountCircleBold",
  },
  {
    variant: "broken",
    slug: "discount-circle-broken",
    Component: DiscountCircleBroken,
    componentName: "DiscountCircleBroken",
  },
  {
    variant: "bulk",
    slug: "discount-circle-bulk",
    Component: DiscountCircleBulk,
    componentName: "DiscountCircleBulk",
  },
  {
    variant: "linear",
    slug: "discount-circle-linear",
    Component: DiscountCircleLinear,
    componentName: "DiscountCircleLinear",
  },
  {
    variant: "outline",
    slug: "discount-circle-outline",
    Component: DiscountCircleOutline,
    componentName: "DiscountCircleOutline",
  },
  {
    variant: "twotone",
    slug: "discount-circle-twotone",
    Component: DiscountCircleTwotone,
    componentName: "DiscountCircleTwotone",
  },
];
