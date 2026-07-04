import ChandelierBold from "./ChandelierBold";
import ChandelierBroken from "./ChandelierBroken";
import ChandelierBulk from "./ChandelierBulk";
import ChandelierLinear from "./ChandelierLinear";
import ChandelierOutline from "./ChandelierOutline";
import ChandelierTwotone from "./ChandelierTwotone";

export { ChandelierBold, ChandelierBroken, ChandelierBulk, ChandelierLinear, ChandelierOutline, ChandelierTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "chandelier-bold",
    Component: ChandelierBold,
    componentName: "ChandelierBold",
  },,
  {
    variant: "broken",
    slug: "chandelier-broken",
    Component: ChandelierBroken,
    componentName: "ChandelierBroken",
  },,
  {
    variant: "bulk",
    slug: "chandelier-bulk",
    Component: ChandelierBulk,
    componentName: "ChandelierBulk",
  },,
  {
    variant: "linear",
    slug: "chandelier-linear",
    Component: ChandelierLinear,
    componentName: "ChandelierLinear",
  },,
  {
    variant: "outline",
    slug: "chandelier-outline",
    Component: ChandelierOutline,
    componentName: "ChandelierOutline",
  },,
  {
    variant: "twotone",
    slug: "chandelier-twotone",
    Component: ChandelierTwotone,
    componentName: "ChandelierTwotone",
  }
];

export default { ChandelierBold, ChandelierBroken, ChandelierBulk, ChandelierLinear, ChandelierOutline, ChandelierTwotone };
