import TrashBold from "./TrashBold";
import TrashBroken from "./TrashBroken";
import TrashBulk from "./TrashBulk";
import TrashLinear from "./TrashLinear";
import TrashOutline from "./TrashOutline";
import TrashTwotone from "./TrashTwotone";

export { TrashBold, TrashBroken, TrashBulk, TrashLinear, TrashOutline, TrashTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "trash-bold",
    Component: TrashBold,
    componentName: "TrashBold",
  },
  {
    variant: "broken",
    slug: "trash-broken",
    Component: TrashBroken,
    componentName: "TrashBroken",
  },
  {
    variant: "bulk",
    slug: "trash-bulk",
    Component: TrashBulk,
    componentName: "TrashBulk",
  },
  {
    variant: "linear",
    slug: "trash-linear",
    Component: TrashLinear,
    componentName: "TrashLinear",
  },
  {
    variant: "outline",
    slug: "trash-outline",
    Component: TrashOutline,
    componentName: "TrashOutline",
  },
  {
    variant: "twotone",
    slug: "trash-twotone",
    Component: TrashTwotone,
    componentName: "TrashTwotone",
  },
];
