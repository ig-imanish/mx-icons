import Code2Bold from "./Code2Bold";
import Code2Broken from "./Code2Broken";
import Code2Bulk from "./Code2Bulk";
import Code2Linear from "./Code2Linear";
import Code2Outline from "./Code2Outline";
import Code2Twotone from "./Code2Twotone";

export { Code2Bold, Code2Broken, Code2Bulk, Code2Linear, Code2Outline, Code2Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "code-2-bold",
    Component: Code2Bold,
    componentName: "Code2Bold",
  },,
  {
    variant: "broken",
    slug: "code-2-broken",
    Component: Code2Broken,
    componentName: "Code2Broken",
  },,
  {
    variant: "bulk",
    slug: "code-2-bulk",
    Component: Code2Bulk,
    componentName: "Code2Bulk",
  },,
  {
    variant: "linear",
    slug: "code-2-linear",
    Component: Code2Linear,
    componentName: "Code2Linear",
  },,
  {
    variant: "outline",
    slug: "code-2-outline",
    Component: Code2Outline,
    componentName: "Code2Outline",
  },,
  {
    variant: "twotone",
    slug: "code-2-twotone",
    Component: Code2Twotone,
    componentName: "Code2Twotone",
  }
];

export default { Code2Bold, Code2Broken, Code2Bulk, Code2Linear, Code2Outline, Code2Twotone };
