import FingerCricleBold from "./FingerCricleBold";
import FingerCricleBroken from "./FingerCricleBroken";
import FingerCricleBulk from "./FingerCricleBulk";
import FingerCricleLinear from "./FingerCricleLinear";
import FingerCricleOutline from "./FingerCricleOutline";
import FingerCricleTwotone from "./FingerCricleTwotone";

export { FingerCricleBold, FingerCricleBroken, FingerCricleBulk, FingerCricleLinear, FingerCricleOutline, FingerCricleTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "finger-cricle-bold",
    Component: FingerCricleBold,
    componentName: "FingerCricleBold",
  },
  {
    variant: "broken",
    slug: "finger-cricle-broken",
    Component: FingerCricleBroken,
    componentName: "FingerCricleBroken",
  },
  {
    variant: "bulk",
    slug: "finger-cricle-bulk",
    Component: FingerCricleBulk,
    componentName: "FingerCricleBulk",
  },
  {
    variant: "linear",
    slug: "finger-cricle-linear",
    Component: FingerCricleLinear,
    componentName: "FingerCricleLinear",
  },
  {
    variant: "outline",
    slug: "finger-cricle-outline",
    Component: FingerCricleOutline,
    componentName: "FingerCricleOutline",
  },
  {
    variant: "twotone",
    slug: "finger-cricle-twotone",
    Component: FingerCricleTwotone,
    componentName: "FingerCricleTwotone",
  },
];
