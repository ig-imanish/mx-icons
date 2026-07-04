import KeyMinimalisticBold from "./KeyMinimalisticBold";
import KeyMinimalisticBroken from "./KeyMinimalisticBroken";
import KeyMinimalisticBulk from "./KeyMinimalisticBulk";
import KeyMinimalisticLinear from "./KeyMinimalisticLinear";
import KeyMinimalisticOutline from "./KeyMinimalisticOutline";
import KeyMinimalisticTwotone from "./KeyMinimalisticTwotone";

export { KeyMinimalisticBold, KeyMinimalisticBroken, KeyMinimalisticBulk, KeyMinimalisticLinear, KeyMinimalisticOutline, KeyMinimalisticTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "key-minimalistic-bold",
    Component: KeyMinimalisticBold,
    componentName: "KeyMinimalisticBold",
  },,
  {
    variant: "broken",
    slug: "key-minimalistic-broken",
    Component: KeyMinimalisticBroken,
    componentName: "KeyMinimalisticBroken",
  },,
  {
    variant: "bulk",
    slug: "key-minimalistic-bulk",
    Component: KeyMinimalisticBulk,
    componentName: "KeyMinimalisticBulk",
  },,
  {
    variant: "linear",
    slug: "key-minimalistic-linear",
    Component: KeyMinimalisticLinear,
    componentName: "KeyMinimalisticLinear",
  },,
  {
    variant: "outline",
    slug: "key-minimalistic-outline",
    Component: KeyMinimalisticOutline,
    componentName: "KeyMinimalisticOutline",
  },,
  {
    variant: "twotone",
    slug: "key-minimalistic-twotone",
    Component: KeyMinimalisticTwotone,
    componentName: "KeyMinimalisticTwotone",
  }
];

export default { KeyMinimalisticBold, KeyMinimalisticBroken, KeyMinimalisticBulk, KeyMinimalisticLinear, KeyMinimalisticOutline, KeyMinimalisticTwotone };
