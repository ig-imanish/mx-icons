import LadleBold from "./LadleBold";
import LadleBroken from "./LadleBroken";
import LadleBulk from "./LadleBulk";
import LadleLinear from "./LadleLinear";
import LadleOutline from "./LadleOutline";
import LadleTwotone from "./LadleTwotone";

export { LadleBold, LadleBroken, LadleBulk, LadleLinear, LadleOutline, LadleTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "ladle-bold",
    Component: LadleBold,
    componentName: "LadleBold",
  },,
  {
    variant: "broken",
    slug: "ladle-broken",
    Component: LadleBroken,
    componentName: "LadleBroken",
  },,
  {
    variant: "bulk",
    slug: "ladle-bulk",
    Component: LadleBulk,
    componentName: "LadleBulk",
  },,
  {
    variant: "linear",
    slug: "ladle-linear",
    Component: LadleLinear,
    componentName: "LadleLinear",
  },,
  {
    variant: "outline",
    slug: "ladle-outline",
    Component: LadleOutline,
    componentName: "LadleOutline",
  },,
  {
    variant: "twotone",
    slug: "ladle-twotone",
    Component: LadleTwotone,
    componentName: "LadleTwotone",
  }
];

export default { LadleBold, LadleBroken, LadleBulk, LadleLinear, LadleOutline, LadleTwotone };
