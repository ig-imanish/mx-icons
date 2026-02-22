import JudgeBold from "./JudgeBold";
import JudgeBroken from "./JudgeBroken";
import JudgeBulk from "./JudgeBulk";
import JudgeLinear from "./JudgeLinear";
import JudgeOutline from "./JudgeOutline";
import JudgeTwotone from "./JudgeTwotone";

export { JudgeBold, JudgeBroken, JudgeBulk, JudgeLinear, JudgeOutline, JudgeTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "judge-bold",
    Component: JudgeBold,
    componentName: "JudgeBold",
  },
  {
    variant: "broken",
    slug: "judge-broken",
    Component: JudgeBroken,
    componentName: "JudgeBroken",
  },
  {
    variant: "bulk",
    slug: "judge-bulk",
    Component: JudgeBulk,
    componentName: "JudgeBulk",
  },
  {
    variant: "linear",
    slug: "judge-linear",
    Component: JudgeLinear,
    componentName: "JudgeLinear",
  },
  {
    variant: "outline",
    slug: "judge-outline",
    Component: JudgeOutline,
    componentName: "JudgeOutline",
  },
  {
    variant: "twotone",
    slug: "judge-twotone",
    Component: JudgeTwotone,
    componentName: "JudgeTwotone",
  },
];
