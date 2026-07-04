import CodeFileBold from "./CodeFileBold";
import CodeFileBroken from "./CodeFileBroken";
import CodeFileBulk from "./CodeFileBulk";
import CodeFileLinear from "./CodeFileLinear";
import CodeFileOutline from "./CodeFileOutline";
import CodeFileTwotone from "./CodeFileTwotone";

export { CodeFileBold, CodeFileBroken, CodeFileBulk, CodeFileLinear, CodeFileOutline, CodeFileTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "code-file-bold",
    Component: CodeFileBold,
    componentName: "CodeFileBold",
  },,
  {
    variant: "broken",
    slug: "code-file-broken",
    Component: CodeFileBroken,
    componentName: "CodeFileBroken",
  },,
  {
    variant: "bulk",
    slug: "code-file-bulk",
    Component: CodeFileBulk,
    componentName: "CodeFileBulk",
  },,
  {
    variant: "linear",
    slug: "code-file-linear",
    Component: CodeFileLinear,
    componentName: "CodeFileLinear",
  },,
  {
    variant: "outline",
    slug: "code-file-outline",
    Component: CodeFileOutline,
    componentName: "CodeFileOutline",
  },,
  {
    variant: "twotone",
    slug: "code-file-twotone",
    Component: CodeFileTwotone,
    componentName: "CodeFileTwotone",
  }
];

export default { CodeFileBold, CodeFileBroken, CodeFileBulk, CodeFileLinear, CodeFileOutline, CodeFileTwotone };
