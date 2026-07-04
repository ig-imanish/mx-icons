import RewindBackBold from "./RewindBackBold";
import RewindBackBroken from "./RewindBackBroken";
import RewindBackBulk from "./RewindBackBulk";
import RewindBackLinear from "./RewindBackLinear";
import RewindBackOutline from "./RewindBackOutline";
import RewindBackTwotone from "./RewindBackTwotone";

export { RewindBackBold, RewindBackBroken, RewindBackBulk, RewindBackLinear, RewindBackOutline, RewindBackTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "rewind-back-bold",
    Component: RewindBackBold,
    componentName: "RewindBackBold",
  },,
  {
    variant: "broken",
    slug: "rewind-back-broken",
    Component: RewindBackBroken,
    componentName: "RewindBackBroken",
  },,
  {
    variant: "bulk",
    slug: "rewind-back-bulk",
    Component: RewindBackBulk,
    componentName: "RewindBackBulk",
  },,
  {
    variant: "linear",
    slug: "rewind-back-linear",
    Component: RewindBackLinear,
    componentName: "RewindBackLinear",
  },,
  {
    variant: "outline",
    slug: "rewind-back-outline",
    Component: RewindBackOutline,
    componentName: "RewindBackOutline",
  },,
  {
    variant: "twotone",
    slug: "rewind-back-twotone",
    Component: RewindBackTwotone,
    componentName: "RewindBackTwotone",
  }
];

export default { RewindBackBold, RewindBackBroken, RewindBackBulk, RewindBackLinear, RewindBackOutline, RewindBackTwotone };
