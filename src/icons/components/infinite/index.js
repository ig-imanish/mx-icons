import InfiniteBold from "./InfiniteBold";
import InfiniteBroken from "./InfiniteBroken";
import InfiniteBulk from "./InfiniteBulk";
import InfiniteLinear from "./InfiniteLinear";
import InfiniteOutline from "./InfiniteOutline";
import InfiniteTwotone from "./InfiniteTwotone";

export { InfiniteBold, InfiniteBroken, InfiniteBulk, InfiniteLinear, InfiniteOutline, InfiniteTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "infinite-bold",
    Component: InfiniteBold,
    componentName: "InfiniteBold",
  },,
  {
    variant: "broken",
    slug: "infinite-broken",
    Component: InfiniteBroken,
    componentName: "InfiniteBroken",
  },,
  {
    variant: "bulk",
    slug: "infinite-bulk",
    Component: InfiniteBulk,
    componentName: "InfiniteBulk",
  },,
  {
    variant: "linear",
    slug: "infinite-linear",
    Component: InfiniteLinear,
    componentName: "InfiniteLinear",
  },,
  {
    variant: "outline",
    slug: "infinite-outline",
    Component: InfiniteOutline,
    componentName: "InfiniteOutline",
  },,
  {
    variant: "twotone",
    slug: "infinite-twotone",
    Component: InfiniteTwotone,
    componentName: "InfiniteTwotone",
  }
];

export default { InfiniteBold, InfiniteBroken, InfiniteBulk, InfiniteLinear, InfiniteOutline, InfiniteTwotone };
