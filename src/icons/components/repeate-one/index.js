import RepeateOneBold from "./RepeateOneBold";
import RepeateOneBroken from "./RepeateOneBroken";
import RepeateOneBulk from "./RepeateOneBulk";
import RepeateOneLinear from "./RepeateOneLinear";
import RepeateOneOutline from "./RepeateOneOutline";
import RepeateOneTwotone from "./RepeateOneTwotone";

export { RepeateOneBold, RepeateOneBroken, RepeateOneBulk, RepeateOneLinear, RepeateOneOutline, RepeateOneTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "repeate-one-bold",
    Component: RepeateOneBold,
    componentName: "RepeateOneBold",
  },
  {
    variant: "broken",
    slug: "repeate-one-broken",
    Component: RepeateOneBroken,
    componentName: "RepeateOneBroken",
  },
  {
    variant: "bulk",
    slug: "repeate-one-bulk",
    Component: RepeateOneBulk,
    componentName: "RepeateOneBulk",
  },
  {
    variant: "linear",
    slug: "repeate-one-linear",
    Component: RepeateOneLinear,
    componentName: "RepeateOneLinear",
  },
  {
    variant: "outline",
    slug: "repeate-one-outline",
    Component: RepeateOneOutline,
    componentName: "RepeateOneOutline",
  },
  {
    variant: "twotone",
    slug: "repeate-one-twotone",
    Component: RepeateOneTwotone,
    componentName: "RepeateOneTwotone",
  },
];
