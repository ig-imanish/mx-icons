import WomanBold from "./WomanBold";
import WomanBroken from "./WomanBroken";
import WomanBulk from "./WomanBulk";
import WomanLinear from "./WomanLinear";
import WomanOutline from "./WomanOutline";
import WomanTwotone from "./WomanTwotone";

export { WomanBold, WomanBroken, WomanBulk, WomanLinear, WomanOutline, WomanTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "woman-bold",
    Component: WomanBold,
    componentName: "WomanBold",
  },
  {
    variant: "broken",
    slug: "woman-broken",
    Component: WomanBroken,
    componentName: "WomanBroken",
  },
  {
    variant: "bulk",
    slug: "woman-bulk",
    Component: WomanBulk,
    componentName: "WomanBulk",
  },
  {
    variant: "linear",
    slug: "woman-linear",
    Component: WomanLinear,
    componentName: "WomanLinear",
  },
  {
    variant: "outline",
    slug: "woman-outline",
    Component: WomanOutline,
    componentName: "WomanOutline",
  },
  {
    variant: "twotone",
    slug: "woman-twotone",
    Component: WomanTwotone,
    componentName: "WomanTwotone",
  },
];
