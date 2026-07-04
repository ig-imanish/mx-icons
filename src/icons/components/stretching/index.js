import StretchingBold from "./StretchingBold";
import StretchingBroken from "./StretchingBroken";
import StretchingBulk from "./StretchingBulk";
import StretchingLinear from "./StretchingLinear";
import StretchingOutline from "./StretchingOutline";
import StretchingTwotone from "./StretchingTwotone";

export { StretchingBold, StretchingBroken, StretchingBulk, StretchingLinear, StretchingOutline, StretchingTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "stretching-bold",
    Component: StretchingBold,
    componentName: "StretchingBold",
  },,
  {
    variant: "broken",
    slug: "stretching-broken",
    Component: StretchingBroken,
    componentName: "StretchingBroken",
  },,
  {
    variant: "bulk",
    slug: "stretching-bulk",
    Component: StretchingBulk,
    componentName: "StretchingBulk",
  },,
  {
    variant: "linear",
    slug: "stretching-linear",
    Component: StretchingLinear,
    componentName: "StretchingLinear",
  },,
  {
    variant: "outline",
    slug: "stretching-outline",
    Component: StretchingOutline,
    componentName: "StretchingOutline",
  },,
  {
    variant: "twotone",
    slug: "stretching-twotone",
    Component: StretchingTwotone,
    componentName: "StretchingTwotone",
  }
];

export default { StretchingBold, StretchingBroken, StretchingBulk, StretchingLinear, StretchingOutline, StretchingTwotone };
