import HikingMinimalisticBold from "./HikingMinimalisticBold";
import HikingMinimalisticBroken from "./HikingMinimalisticBroken";
import HikingMinimalisticBulk from "./HikingMinimalisticBulk";
import HikingMinimalisticLinear from "./HikingMinimalisticLinear";
import HikingMinimalisticOutline from "./HikingMinimalisticOutline";
import HikingMinimalisticTwotone from "./HikingMinimalisticTwotone";

export { HikingMinimalisticBold, HikingMinimalisticBroken, HikingMinimalisticBulk, HikingMinimalisticLinear, HikingMinimalisticOutline, HikingMinimalisticTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "hiking-minimalistic-bold",
    Component: HikingMinimalisticBold,
    componentName: "HikingMinimalisticBold",
  },,
  {
    variant: "broken",
    slug: "hiking-minimalistic-broken",
    Component: HikingMinimalisticBroken,
    componentName: "HikingMinimalisticBroken",
  },,
  {
    variant: "bulk",
    slug: "hiking-minimalistic-bulk",
    Component: HikingMinimalisticBulk,
    componentName: "HikingMinimalisticBulk",
  },,
  {
    variant: "linear",
    slug: "hiking-minimalistic-linear",
    Component: HikingMinimalisticLinear,
    componentName: "HikingMinimalisticLinear",
  },,
  {
    variant: "outline",
    slug: "hiking-minimalistic-outline",
    Component: HikingMinimalisticOutline,
    componentName: "HikingMinimalisticOutline",
  },,
  {
    variant: "twotone",
    slug: "hiking-minimalistic-twotone",
    Component: HikingMinimalisticTwotone,
    componentName: "HikingMinimalisticTwotone",
  }
];

export default { HikingMinimalisticBold, HikingMinimalisticBroken, HikingMinimalisticBulk, HikingMinimalisticLinear, HikingMinimalisticOutline, HikingMinimalisticTwotone };
