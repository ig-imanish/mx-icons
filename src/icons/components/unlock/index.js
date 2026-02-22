import UnlockBold from "./UnlockBold";
import UnlockBroken from "./UnlockBroken";
import UnlockBulk from "./UnlockBulk";
import UnlockLinear from "./UnlockLinear";
import UnlockOutline from "./UnlockOutline";
import UnlockTwotone from "./UnlockTwotone";

export { UnlockBold, UnlockBroken, UnlockBulk, UnlockLinear, UnlockOutline, UnlockTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "unlock-bold",
    Component: UnlockBold,
    componentName: "UnlockBold",
  },
  {
    variant: "broken",
    slug: "unlock-broken",
    Component: UnlockBroken,
    componentName: "UnlockBroken",
  },
  {
    variant: "bulk",
    slug: "unlock-bulk",
    Component: UnlockBulk,
    componentName: "UnlockBulk",
  },
  {
    variant: "linear",
    slug: "unlock-linear",
    Component: UnlockLinear,
    componentName: "UnlockLinear",
  },
  {
    variant: "outline",
    slug: "unlock-outline",
    Component: UnlockOutline,
    componentName: "UnlockOutline",
  },
  {
    variant: "twotone",
    slug: "unlock-twotone",
    Component: UnlockTwotone,
    componentName: "UnlockTwotone",
  },
];
