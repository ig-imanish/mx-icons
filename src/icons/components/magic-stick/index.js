import MagicStickBold from "./MagicStickBold";
import MagicStickBroken from "./MagicStickBroken";
import MagicStickBulk from "./MagicStickBulk";
import MagicStickLinear from "./MagicStickLinear";
import MagicStickOutline from "./MagicStickOutline";
import MagicStickTwotone from "./MagicStickTwotone";

export { MagicStickBold, MagicStickBroken, MagicStickBulk, MagicStickLinear, MagicStickOutline, MagicStickTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "magic-stick-bold",
    Component: MagicStickBold,
    componentName: "MagicStickBold",
  },,
  {
    variant: "broken",
    slug: "magic-stick-broken",
    Component: MagicStickBroken,
    componentName: "MagicStickBroken",
  },,
  {
    variant: "bulk",
    slug: "magic-stick-bulk",
    Component: MagicStickBulk,
    componentName: "MagicStickBulk",
  },,
  {
    variant: "linear",
    slug: "magic-stick-linear",
    Component: MagicStickLinear,
    componentName: "MagicStickLinear",
  },,
  {
    variant: "outline",
    slug: "magic-stick-outline",
    Component: MagicStickOutline,
    componentName: "MagicStickOutline",
  },,
  {
    variant: "twotone",
    slug: "magic-stick-twotone",
    Component: MagicStickTwotone,
    componentName: "MagicStickTwotone",
  }
];

export default { MagicStickBold, MagicStickBroken, MagicStickBulk, MagicStickLinear, MagicStickOutline, MagicStickTwotone };
