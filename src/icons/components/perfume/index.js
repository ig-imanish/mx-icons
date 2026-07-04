import PerfumeBold from "./PerfumeBold";
import PerfumeBroken from "./PerfumeBroken";
import PerfumeBulk from "./PerfumeBulk";
import PerfumeLinear from "./PerfumeLinear";
import PerfumeOutline from "./PerfumeOutline";
import PerfumeTwotone from "./PerfumeTwotone";

export { PerfumeBold, PerfumeBroken, PerfumeBulk, PerfumeLinear, PerfumeOutline, PerfumeTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "perfume-bold",
    Component: PerfumeBold,
    componentName: "PerfumeBold",
  },,
  {
    variant: "broken",
    slug: "perfume-broken",
    Component: PerfumeBroken,
    componentName: "PerfumeBroken",
  },,
  {
    variant: "bulk",
    slug: "perfume-bulk",
    Component: PerfumeBulk,
    componentName: "PerfumeBulk",
  },,
  {
    variant: "linear",
    slug: "perfume-linear",
    Component: PerfumeLinear,
    componentName: "PerfumeLinear",
  },,
  {
    variant: "outline",
    slug: "perfume-outline",
    Component: PerfumeOutline,
    componentName: "PerfumeOutline",
  },,
  {
    variant: "twotone",
    slug: "perfume-twotone",
    Component: PerfumeTwotone,
    componentName: "PerfumeTwotone",
  }
];

export default { PerfumeBold, PerfumeBroken, PerfumeBulk, PerfumeLinear, PerfumeOutline, PerfumeTwotone };
