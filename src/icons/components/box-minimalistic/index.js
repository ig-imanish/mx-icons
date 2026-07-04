import BoxMinimalisticBold from "./BoxMinimalisticBold";
import BoxMinimalisticBroken from "./BoxMinimalisticBroken";
import BoxMinimalisticBulk from "./BoxMinimalisticBulk";
import BoxMinimalisticLinear from "./BoxMinimalisticLinear";
import BoxMinimalisticOutline from "./BoxMinimalisticOutline";
import BoxMinimalisticTwotone from "./BoxMinimalisticTwotone";

export { BoxMinimalisticBold, BoxMinimalisticBroken, BoxMinimalisticBulk, BoxMinimalisticLinear, BoxMinimalisticOutline, BoxMinimalisticTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "box-minimalistic-bold",
    Component: BoxMinimalisticBold,
    componentName: "BoxMinimalisticBold",
  },,
  {
    variant: "broken",
    slug: "box-minimalistic-broken",
    Component: BoxMinimalisticBroken,
    componentName: "BoxMinimalisticBroken",
  },,
  {
    variant: "bulk",
    slug: "box-minimalistic-bulk",
    Component: BoxMinimalisticBulk,
    componentName: "BoxMinimalisticBulk",
  },,
  {
    variant: "linear",
    slug: "box-minimalistic-linear",
    Component: BoxMinimalisticLinear,
    componentName: "BoxMinimalisticLinear",
  },,
  {
    variant: "outline",
    slug: "box-minimalistic-outline",
    Component: BoxMinimalisticOutline,
    componentName: "BoxMinimalisticOutline",
  },,
  {
    variant: "twotone",
    slug: "box-minimalistic-twotone",
    Component: BoxMinimalisticTwotone,
    componentName: "BoxMinimalisticTwotone",
  }
];

export default { BoxMinimalisticBold, BoxMinimalisticBroken, BoxMinimalisticBulk, BoxMinimalisticLinear, BoxMinimalisticOutline, BoxMinimalisticTwotone };
