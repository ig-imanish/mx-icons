import ShuffleBold from "./ShuffleBold";
import ShuffleBroken from "./ShuffleBroken";
import ShuffleBulk from "./ShuffleBulk";
import ShuffleOutline from "./ShuffleOutline";
import ShuffleTwotone from "./ShuffleTwotone";

export { ShuffleBold, ShuffleBroken, ShuffleBulk, ShuffleOutline, ShuffleTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "shuffle-bold",
    Component: ShuffleBold,
    componentName: "ShuffleBold",
  },
  {
    variant: "broken",
    slug: "shuffle-broken",
    Component: ShuffleBroken,
    componentName: "ShuffleBroken",
  },
  {
    variant: "bulk",
    slug: "shuffle-bulk",
    Component: ShuffleBulk,
    componentName: "ShuffleBulk",
  },
  {
    variant: "outline",
    slug: "shuffle-outline",
    Component: ShuffleOutline,
    componentName: "ShuffleOutline",
  },
  {
    variant: "twotone",
    slug: "shuffle-twotone",
    Component: ShuffleTwotone,
    componentName: "ShuffleTwotone",
  },
];
