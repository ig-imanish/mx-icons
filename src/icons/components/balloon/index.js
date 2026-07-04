import BalloonBold from "./BalloonBold";
import BalloonBroken from "./BalloonBroken";
import BalloonBulk from "./BalloonBulk";
import BalloonLinear from "./BalloonLinear";
import BalloonOutline from "./BalloonOutline";
import BalloonTwotone from "./BalloonTwotone";

export { BalloonBold, BalloonBroken, BalloonBulk, BalloonLinear, BalloonOutline, BalloonTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "balloon-bold",
    Component: BalloonBold,
    componentName: "BalloonBold",
  },,
  {
    variant: "broken",
    slug: "balloon-broken",
    Component: BalloonBroken,
    componentName: "BalloonBroken",
  },,
  {
    variant: "bulk",
    slug: "balloon-bulk",
    Component: BalloonBulk,
    componentName: "BalloonBulk",
  },,
  {
    variant: "linear",
    slug: "balloon-linear",
    Component: BalloonLinear,
    componentName: "BalloonLinear",
  },,
  {
    variant: "outline",
    slug: "balloon-outline",
    Component: BalloonOutline,
    componentName: "BalloonOutline",
  },,
  {
    variant: "twotone",
    slug: "balloon-twotone",
    Component: BalloonTwotone,
    componentName: "BalloonTwotone",
  }
];

export default { BalloonBold, BalloonBroken, BalloonBulk, BalloonLinear, BalloonOutline, BalloonTwotone };
