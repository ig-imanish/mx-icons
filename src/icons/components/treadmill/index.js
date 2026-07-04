import TreadmillBold from "./TreadmillBold";
import TreadmillBroken from "./TreadmillBroken";
import TreadmillBulk from "./TreadmillBulk";
import TreadmillLinear from "./TreadmillLinear";
import TreadmillOutline from "./TreadmillOutline";
import TreadmillTwotone from "./TreadmillTwotone";

export { TreadmillBold, TreadmillBroken, TreadmillBulk, TreadmillLinear, TreadmillOutline, TreadmillTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "treadmill-bold",
    Component: TreadmillBold,
    componentName: "TreadmillBold",
  },,
  {
    variant: "broken",
    slug: "treadmill-broken",
    Component: TreadmillBroken,
    componentName: "TreadmillBroken",
  },,
  {
    variant: "bulk",
    slug: "treadmill-bulk",
    Component: TreadmillBulk,
    componentName: "TreadmillBulk",
  },,
  {
    variant: "linear",
    slug: "treadmill-linear",
    Component: TreadmillLinear,
    componentName: "TreadmillLinear",
  },,
  {
    variant: "outline",
    slug: "treadmill-outline",
    Component: TreadmillOutline,
    componentName: "TreadmillOutline",
  },,
  {
    variant: "twotone",
    slug: "treadmill-twotone",
    Component: TreadmillTwotone,
    componentName: "TreadmillTwotone",
  }
];

export default { TreadmillBold, TreadmillBroken, TreadmillBulk, TreadmillLinear, TreadmillOutline, TreadmillTwotone };
