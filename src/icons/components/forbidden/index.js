import ForbiddenBold from "./ForbiddenBold";
import ForbiddenBroken from "./ForbiddenBroken";
import ForbiddenBulk from "./ForbiddenBulk";
import ForbiddenOutline from "./ForbiddenOutline";
import ForbiddenTwotone from "./ForbiddenTwotone";

export { ForbiddenBold, ForbiddenBroken, ForbiddenBulk, ForbiddenOutline, ForbiddenTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "forbidden-bold",
    Component: ForbiddenBold,
    componentName: "ForbiddenBold",
  },
  {
    variant: "broken",
    slug: "forbidden-broken",
    Component: ForbiddenBroken,
    componentName: "ForbiddenBroken",
  },
  {
    variant: "bulk",
    slug: "forbidden-bulk",
    Component: ForbiddenBulk,
    componentName: "ForbiddenBulk",
  },
  {
    variant: "outline",
    slug: "forbidden-outline",
    Component: ForbiddenOutline,
    componentName: "ForbiddenOutline",
  },
  {
    variant: "twotone",
    slug: "forbidden-twotone",
    Component: ForbiddenTwotone,
    componentName: "ForbiddenTwotone",
  },
];
