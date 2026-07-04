import BoomboxBold from "./BoomboxBold";
import BoomboxBroken from "./BoomboxBroken";
import BoomboxBulk from "./BoomboxBulk";
import BoomboxLinear from "./BoomboxLinear";
import BoomboxOutline from "./BoomboxOutline";
import BoomboxTwotone from "./BoomboxTwotone";

export { BoomboxBold, BoomboxBroken, BoomboxBulk, BoomboxLinear, BoomboxOutline, BoomboxTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "boombox-bold",
    Component: BoomboxBold,
    componentName: "BoomboxBold",
  },,
  {
    variant: "broken",
    slug: "boombox-broken",
    Component: BoomboxBroken,
    componentName: "BoomboxBroken",
  },,
  {
    variant: "bulk",
    slug: "boombox-bulk",
    Component: BoomboxBulk,
    componentName: "BoomboxBulk",
  },,
  {
    variant: "linear",
    slug: "boombox-linear",
    Component: BoomboxLinear,
    componentName: "BoomboxLinear",
  },,
  {
    variant: "outline",
    slug: "boombox-outline",
    Component: BoomboxOutline,
    componentName: "BoomboxOutline",
  },,
  {
    variant: "twotone",
    slug: "boombox-twotone",
    Component: BoomboxTwotone,
    componentName: "BoomboxTwotone",
  }
];

export default { BoomboxBold, BoomboxBroken, BoomboxBulk, BoomboxLinear, BoomboxOutline, BoomboxTwotone };
