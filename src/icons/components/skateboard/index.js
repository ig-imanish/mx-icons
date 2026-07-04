import SkateboardBold from "./SkateboardBold";
import SkateboardBroken from "./SkateboardBroken";
import SkateboardBulk from "./SkateboardBulk";
import SkateboardLinear from "./SkateboardLinear";
import SkateboardOutline from "./SkateboardOutline";
import SkateboardTwotone from "./SkateboardTwotone";

export { SkateboardBold, SkateboardBroken, SkateboardBulk, SkateboardLinear, SkateboardOutline, SkateboardTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "skateboard-bold",
    Component: SkateboardBold,
    componentName: "SkateboardBold",
  },,
  {
    variant: "broken",
    slug: "skateboard-broken",
    Component: SkateboardBroken,
    componentName: "SkateboardBroken",
  },,
  {
    variant: "bulk",
    slug: "skateboard-bulk",
    Component: SkateboardBulk,
    componentName: "SkateboardBulk",
  },,
  {
    variant: "linear",
    slug: "skateboard-linear",
    Component: SkateboardLinear,
    componentName: "SkateboardLinear",
  },,
  {
    variant: "outline",
    slug: "skateboard-outline",
    Component: SkateboardOutline,
    componentName: "SkateboardOutline",
  },,
  {
    variant: "twotone",
    slug: "skateboard-twotone",
    Component: SkateboardTwotone,
    componentName: "SkateboardTwotone",
  }
];

export default { SkateboardBold, SkateboardBroken, SkateboardBulk, SkateboardLinear, SkateboardOutline, SkateboardTwotone };
