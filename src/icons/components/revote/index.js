import RevoteBold from "./RevoteBold";
import RevoteBroken from "./RevoteBroken";
import RevoteBulk from "./RevoteBulk";
import RevoteLinear from "./RevoteLinear";
import RevoteOutline from "./RevoteOutline";
import RevoteTwotone from "./RevoteTwotone";

export { RevoteBold, RevoteBroken, RevoteBulk, RevoteLinear, RevoteOutline, RevoteTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "revote-bold",
    Component: RevoteBold,
    componentName: "RevoteBold",
  },,
  {
    variant: "broken",
    slug: "revote-broken",
    Component: RevoteBroken,
    componentName: "RevoteBroken",
  },,
  {
    variant: "bulk",
    slug: "revote-bulk",
    Component: RevoteBulk,
    componentName: "RevoteBulk",
  },,
  {
    variant: "linear",
    slug: "revote-linear",
    Component: RevoteLinear,
    componentName: "RevoteLinear",
  },,
  {
    variant: "outline",
    slug: "revote-outline",
    Component: RevoteOutline,
    componentName: "RevoteOutline",
  },,
  {
    variant: "twotone",
    slug: "revote-twotone",
    Component: RevoteTwotone,
    componentName: "RevoteTwotone",
  }
];

export default { RevoteBold, RevoteBroken, RevoteBulk, RevoteLinear, RevoteOutline, RevoteTwotone };
