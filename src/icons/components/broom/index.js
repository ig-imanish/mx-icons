import BroomBold from "./BroomBold";
import BroomBroken from "./BroomBroken";
import BroomBulk from "./BroomBulk";
import BroomLinear from "./BroomLinear";
import BroomOutline from "./BroomOutline";
import BroomTwotone from "./BroomTwotone";

export { BroomBold, BroomBroken, BroomBulk, BroomLinear, BroomOutline, BroomTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "broom-bold",
    Component: BroomBold,
    componentName: "BroomBold",
  },
  {
    variant: "broken",
    slug: "broom-broken",
    Component: BroomBroken,
    componentName: "BroomBroken",
  },
  {
    variant: "bulk",
    slug: "broom-bulk",
    Component: BroomBulk,
    componentName: "BroomBulk",
  },
  {
    variant: "linear",
    slug: "broom-linear",
    Component: BroomLinear,
    componentName: "BroomLinear",
  },
  {
    variant: "outline",
    slug: "broom-outline",
    Component: BroomOutline,
    componentName: "BroomOutline",
  },
  {
    variant: "twotone",
    slug: "broom-twotone",
    Component: BroomTwotone,
    componentName: "BroomTwotone",
  },
];
