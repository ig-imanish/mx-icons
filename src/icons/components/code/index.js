import CodeBold from "./CodeBold";
import CodeBroken from "./CodeBroken";
import CodeBulk from "./CodeBulk";
import CodeLinear from "./CodeLinear";
import CodeOutline from "./CodeOutline";
import CodeTwotone from "./CodeTwotone";

export { CodeBold, CodeBroken, CodeBulk, CodeLinear, CodeOutline, CodeTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "code-bold",
    Component: CodeBold,
    componentName: "CodeBold",
  },
  {
    variant: "broken",
    slug: "code-broken",
    Component: CodeBroken,
    componentName: "CodeBroken",
  },
  {
    variant: "bulk",
    slug: "code-bulk",
    Component: CodeBulk,
    componentName: "CodeBulk",
  },
  {
    variant: "linear",
    slug: "code-linear",
    Component: CodeLinear,
    componentName: "CodeLinear",
  },
  {
    variant: "outline",
    slug: "code-outline",
    Component: CodeOutline,
    componentName: "CodeOutline",
  },
  {
    variant: "twotone",
    slug: "code-twotone",
    Component: CodeTwotone,
    componentName: "CodeTwotone",
  },
];
