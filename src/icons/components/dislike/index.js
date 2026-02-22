import DislikeBold from "./DislikeBold";
import DislikeBroken from "./DislikeBroken";
import DislikeBulk from "./DislikeBulk";
import DislikeLinear from "./DislikeLinear";
import DislikeOutline from "./DislikeOutline";
import DislikeTwotone from "./DislikeTwotone";

export { DislikeBold, DislikeBroken, DislikeBulk, DislikeLinear, DislikeOutline, DislikeTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "dislike-bold",
    Component: DislikeBold,
    componentName: "DislikeBold",
  },
  {
    variant: "broken",
    slug: "dislike-broken",
    Component: DislikeBroken,
    componentName: "DislikeBroken",
  },
  {
    variant: "bulk",
    slug: "dislike-bulk",
    Component: DislikeBulk,
    componentName: "DislikeBulk",
  },
  {
    variant: "linear",
    slug: "dislike-linear",
    Component: DislikeLinear,
    componentName: "DislikeLinear",
  },
  {
    variant: "outline",
    slug: "dislike-outline",
    Component: DislikeOutline,
    componentName: "DislikeOutline",
  },
  {
    variant: "twotone",
    slug: "dislike-twotone",
    Component: DislikeTwotone,
    componentName: "DislikeTwotone",
  },
];
