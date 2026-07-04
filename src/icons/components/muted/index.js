import MutedBold from "./MutedBold";
import MutedBroken from "./MutedBroken";
import MutedBulk from "./MutedBulk";
import MutedLinear from "./MutedLinear";
import MutedOutline from "./MutedOutline";
import MutedTwotone from "./MutedTwotone";

export { MutedBold, MutedBroken, MutedBulk, MutedLinear, MutedOutline, MutedTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "muted-bold",
    Component: MutedBold,
    componentName: "MutedBold",
  },,
  {
    variant: "broken",
    slug: "muted-broken",
    Component: MutedBroken,
    componentName: "MutedBroken",
  },,
  {
    variant: "bulk",
    slug: "muted-bulk",
    Component: MutedBulk,
    componentName: "MutedBulk",
  },,
  {
    variant: "linear",
    slug: "muted-linear",
    Component: MutedLinear,
    componentName: "MutedLinear",
  },,
  {
    variant: "outline",
    slug: "muted-outline",
    Component: MutedOutline,
    componentName: "MutedOutline",
  },,
  {
    variant: "twotone",
    slug: "muted-twotone",
    Component: MutedTwotone,
    componentName: "MutedTwotone",
  }
];

export default { MutedBold, MutedBroken, MutedBulk, MutedLinear, MutedOutline, MutedTwotone };
