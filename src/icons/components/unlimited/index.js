import UnlimitedBold from "./UnlimitedBold";
import UnlimitedBroken from "./UnlimitedBroken";
import UnlimitedBulk from "./UnlimitedBulk";
import UnlimitedLinear from "./UnlimitedLinear";
import UnlimitedOutline from "./UnlimitedOutline";
import UnlimitedTwotone from "./UnlimitedTwotone";

export { UnlimitedBold, UnlimitedBroken, UnlimitedBulk, UnlimitedLinear, UnlimitedOutline, UnlimitedTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "unlimited-bold",
    Component: UnlimitedBold,
    componentName: "UnlimitedBold",
  },
  {
    variant: "broken",
    slug: "unlimited-broken",
    Component: UnlimitedBroken,
    componentName: "UnlimitedBroken",
  },
  {
    variant: "bulk",
    slug: "unlimited-bulk",
    Component: UnlimitedBulk,
    componentName: "UnlimitedBulk",
  },
  {
    variant: "linear",
    slug: "unlimited-linear",
    Component: UnlimitedLinear,
    componentName: "UnlimitedLinear",
  },
  {
    variant: "outline",
    slug: "unlimited-outline",
    Component: UnlimitedOutline,
    componentName: "UnlimitedOutline",
  },
  {
    variant: "twotone",
    slug: "unlimited-twotone",
    Component: UnlimitedTwotone,
    componentName: "UnlimitedTwotone",
  },
];
