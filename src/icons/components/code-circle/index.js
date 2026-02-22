import CodeCircleBold from "./CodeCircleBold";
import CodeCircleBroken from "./CodeCircleBroken";
import CodeCircleBulk from "./CodeCircleBulk";
import CodeCircleLinear from "./CodeCircleLinear";
import CodeCircleOutline from "./CodeCircleOutline";
import CodeCircleTwotone from "./CodeCircleTwotone";

export { CodeCircleBold, CodeCircleBroken, CodeCircleBulk, CodeCircleLinear, CodeCircleOutline, CodeCircleTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "code-circle-bold",
    Component: CodeCircleBold,
    componentName: "CodeCircleBold",
  },
  {
    variant: "broken",
    slug: "code-circle-broken",
    Component: CodeCircleBroken,
    componentName: "CodeCircleBroken",
  },
  {
    variant: "bulk",
    slug: "code-circle-bulk",
    Component: CodeCircleBulk,
    componentName: "CodeCircleBulk",
  },
  {
    variant: "linear",
    slug: "code-circle-linear",
    Component: CodeCircleLinear,
    componentName: "CodeCircleLinear",
  },
  {
    variant: "outline",
    slug: "code-circle-outline",
    Component: CodeCircleOutline,
    componentName: "CodeCircleOutline",
  },
  {
    variant: "twotone",
    slug: "code-circle-twotone",
    Component: CodeCircleTwotone,
    componentName: "CodeCircleTwotone",
  },
];
