import BackpackBold from "./BackpackBold";
import BackpackBroken from "./BackpackBroken";
import BackpackBulk from "./BackpackBulk";
import BackpackLinear from "./BackpackLinear";
import BackpackOutline from "./BackpackOutline";
import BackpackTwotone from "./BackpackTwotone";

export { BackpackBold, BackpackBroken, BackpackBulk, BackpackLinear, BackpackOutline, BackpackTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "backpack-bold",
    Component: BackpackBold,
    componentName: "BackpackBold",
  },,
  {
    variant: "broken",
    slug: "backpack-broken",
    Component: BackpackBroken,
    componentName: "BackpackBroken",
  },,
  {
    variant: "bulk",
    slug: "backpack-bulk",
    Component: BackpackBulk,
    componentName: "BackpackBulk",
  },,
  {
    variant: "linear",
    slug: "backpack-linear",
    Component: BackpackLinear,
    componentName: "BackpackLinear",
  },,
  {
    variant: "outline",
    slug: "backpack-outline",
    Component: BackpackOutline,
    componentName: "BackpackOutline",
  },,
  {
    variant: "twotone",
    slug: "backpack-twotone",
    Component: BackpackTwotone,
    componentName: "BackpackTwotone",
  }
];

export default { BackpackBold, BackpackBroken, BackpackBulk, BackpackLinear, BackpackOutline, BackpackTwotone };
