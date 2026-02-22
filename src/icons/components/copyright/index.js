import CopyrightBold from "./CopyrightBold";
import CopyrightBroken from "./CopyrightBroken";
import CopyrightBulk from "./CopyrightBulk";
import CopyrightLinear from "./CopyrightLinear";
import CopyrightOutline from "./CopyrightOutline";
import CopyrightTwotone from "./CopyrightTwotone";

export { CopyrightBold, CopyrightBroken, CopyrightBulk, CopyrightLinear, CopyrightOutline, CopyrightTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "copyright-bold",
    Component: CopyrightBold,
    componentName: "CopyrightBold",
  },
  {
    variant: "broken",
    slug: "copyright-broken",
    Component: CopyrightBroken,
    componentName: "CopyrightBroken",
  },
  {
    variant: "bulk",
    slug: "copyright-bulk",
    Component: CopyrightBulk,
    componentName: "CopyrightBulk",
  },
  {
    variant: "linear",
    slug: "copyright-linear",
    Component: CopyrightLinear,
    componentName: "CopyrightLinear",
  },
  {
    variant: "outline",
    slug: "copyright-outline",
    Component: CopyrightOutline,
    componentName: "CopyrightOutline",
  },
  {
    variant: "twotone",
    slug: "copyright-twotone",
    Component: CopyrightTwotone,
    componentName: "CopyrightTwotone",
  },
];
