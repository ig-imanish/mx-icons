import KeyBold from "./KeyBold";
import KeyBroken from "./KeyBroken";
import KeyBulk from "./KeyBulk";
import KeyLinear from "./KeyLinear";
import KeyOutline from "./KeyOutline";
import KeyTwotone from "./KeyTwotone";

export { KeyBold, KeyBroken, KeyBulk, KeyLinear, KeyOutline, KeyTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "key-bold",
    Component: KeyBold,
    componentName: "KeyBold",
  },
  {
    variant: "broken",
    slug: "key-broken",
    Component: KeyBroken,
    componentName: "KeyBroken",
  },
  {
    variant: "bulk",
    slug: "key-bulk",
    Component: KeyBulk,
    componentName: "KeyBulk",
  },
  {
    variant: "linear",
    slug: "key-linear",
    Component: KeyLinear,
    componentName: "KeyLinear",
  },
  {
    variant: "outline",
    slug: "key-outline",
    Component: KeyOutline,
    componentName: "KeyOutline",
  },
  {
    variant: "twotone",
    slug: "key-twotone",
    Component: KeyTwotone,
    componentName: "KeyTwotone",
  },
];
