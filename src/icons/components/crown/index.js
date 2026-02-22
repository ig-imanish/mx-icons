import CrownBold from "./CrownBold";
import CrownBroken from "./CrownBroken";
import CrownBulk from "./CrownBulk";
import CrownLinear from "./CrownLinear";
import CrownOutline from "./CrownOutline";
import CrownTwotone from "./CrownTwotone";

export { CrownBold, CrownBroken, CrownBulk, CrownLinear, CrownOutline, CrownTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "crown-bold",
    Component: CrownBold,
    componentName: "CrownBold",
  },
  {
    variant: "broken",
    slug: "crown-broken",
    Component: CrownBroken,
    componentName: "CrownBroken",
  },
  {
    variant: "bulk",
    slug: "crown-bulk",
    Component: CrownBulk,
    componentName: "CrownBulk",
  },
  {
    variant: "linear",
    slug: "crown-linear",
    Component: CrownLinear,
    componentName: "CrownLinear",
  },
  {
    variant: "outline",
    slug: "crown-outline",
    Component: CrownOutline,
    componentName: "CrownOutline",
  },
  {
    variant: "twotone",
    slug: "crown-twotone",
    Component: CrownTwotone,
    componentName: "CrownTwotone",
  },
];
