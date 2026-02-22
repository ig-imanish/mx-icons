import GrammerlyBold from "./GrammerlyBold";
import GrammerlyBroken from "./GrammerlyBroken";
import GrammerlyBulk from "./GrammerlyBulk";
import GrammerlyLinear from "./GrammerlyLinear";
import GrammerlyOutline from "./GrammerlyOutline";
import GrammerlyTwotone from "./GrammerlyTwotone";

export { GrammerlyBold, GrammerlyBroken, GrammerlyBulk, GrammerlyLinear, GrammerlyOutline, GrammerlyTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "grammerly-bold",
    Component: GrammerlyBold,
    componentName: "GrammerlyBold",
  },
  {
    variant: "broken",
    slug: "grammerly-broken",
    Component: GrammerlyBroken,
    componentName: "GrammerlyBroken",
  },
  {
    variant: "bulk",
    slug: "grammerly-bulk",
    Component: GrammerlyBulk,
    componentName: "GrammerlyBulk",
  },
  {
    variant: "linear",
    slug: "grammerly-linear",
    Component: GrammerlyLinear,
    componentName: "GrammerlyLinear",
  },
  {
    variant: "outline",
    slug: "grammerly-outline",
    Component: GrammerlyOutline,
    componentName: "GrammerlyOutline",
  },
  {
    variant: "twotone",
    slug: "grammerly-twotone",
    Component: GrammerlyTwotone,
    componentName: "GrammerlyTwotone",
  },
];
