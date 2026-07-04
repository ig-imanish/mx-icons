import CircleTopUpBold from "./CircleTopUpBold";
import CircleTopUpBroken from "./CircleTopUpBroken";
import CircleTopUpBulk from "./CircleTopUpBulk";
import CircleTopUpLinear from "./CircleTopUpLinear";
import CircleTopUpOutline from "./CircleTopUpOutline";
import CircleTopUpTwotone from "./CircleTopUpTwotone";

export { CircleTopUpBold, CircleTopUpBroken, CircleTopUpBulk, CircleTopUpLinear, CircleTopUpOutline, CircleTopUpTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "circle-top-up-bold",
    Component: CircleTopUpBold,
    componentName: "CircleTopUpBold",
  },,
  {
    variant: "broken",
    slug: "circle-top-up-broken",
    Component: CircleTopUpBroken,
    componentName: "CircleTopUpBroken",
  },,
  {
    variant: "bulk",
    slug: "circle-top-up-bulk",
    Component: CircleTopUpBulk,
    componentName: "CircleTopUpBulk",
  },,
  {
    variant: "linear",
    slug: "circle-top-up-linear",
    Component: CircleTopUpLinear,
    componentName: "CircleTopUpLinear",
  },,
  {
    variant: "outline",
    slug: "circle-top-up-outline",
    Component: CircleTopUpOutline,
    componentName: "CircleTopUpOutline",
  },,
  {
    variant: "twotone",
    slug: "circle-top-up-twotone",
    Component: CircleTopUpTwotone,
    componentName: "CircleTopUpTwotone",
  }
];

export default { CircleTopUpBold, CircleTopUpBroken, CircleTopUpBulk, CircleTopUpLinear, CircleTopUpOutline, CircleTopUpTwotone };
