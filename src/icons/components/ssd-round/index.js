import SsdRoundBold from "./SsdRoundBold";
import SsdRoundBroken from "./SsdRoundBroken";
import SsdRoundBulk from "./SsdRoundBulk";
import SsdRoundLinear from "./SsdRoundLinear";
import SsdRoundOutline from "./SsdRoundOutline";
import SsdRoundTwotone from "./SsdRoundTwotone";

export { SsdRoundBold, SsdRoundBroken, SsdRoundBulk, SsdRoundLinear, SsdRoundOutline, SsdRoundTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "ssd-round-bold",
    Component: SsdRoundBold,
    componentName: "SsdRoundBold",
  },,
  {
    variant: "broken",
    slug: "ssd-round-broken",
    Component: SsdRoundBroken,
    componentName: "SsdRoundBroken",
  },,
  {
    variant: "bulk",
    slug: "ssd-round-bulk",
    Component: SsdRoundBulk,
    componentName: "SsdRoundBulk",
  },,
  {
    variant: "linear",
    slug: "ssd-round-linear",
    Component: SsdRoundLinear,
    componentName: "SsdRoundLinear",
  },,
  {
    variant: "outline",
    slug: "ssd-round-outline",
    Component: SsdRoundOutline,
    componentName: "SsdRoundOutline",
  },,
  {
    variant: "twotone",
    slug: "ssd-round-twotone",
    Component: SsdRoundTwotone,
    componentName: "SsdRoundTwotone",
  }
];

export default { SsdRoundBold, SsdRoundBroken, SsdRoundBulk, SsdRoundLinear, SsdRoundOutline, SsdRoundTwotone };
