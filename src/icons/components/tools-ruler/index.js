import ToolsRulerBold from "./ToolsRulerBold";
import ToolsRulerBroken from "./ToolsRulerBroken";
import ToolsRulerBulk from "./ToolsRulerBulk";
import ToolsRulerLinear from "./ToolsRulerLinear";
import ToolsRulerOutline from "./ToolsRulerOutline";
import ToolsRulerTwotone from "./ToolsRulerTwotone";

export { ToolsRulerBold, ToolsRulerBroken, ToolsRulerBulk, ToolsRulerLinear, ToolsRulerOutline, ToolsRulerTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "tools-ruler-bold",
    Component: ToolsRulerBold,
    componentName: "ToolsRulerBold",
  },,
  {
    variant: "broken",
    slug: "tools-ruler-broken",
    Component: ToolsRulerBroken,
    componentName: "ToolsRulerBroken",
  },,
  {
    variant: "bulk",
    slug: "tools-ruler-bulk",
    Component: ToolsRulerBulk,
    componentName: "ToolsRulerBulk",
  },,
  {
    variant: "linear",
    slug: "tools-ruler-linear",
    Component: ToolsRulerLinear,
    componentName: "ToolsRulerLinear",
  },,
  {
    variant: "outline",
    slug: "tools-ruler-outline",
    Component: ToolsRulerOutline,
    componentName: "ToolsRulerOutline",
  },,
  {
    variant: "twotone",
    slug: "tools-ruler-twotone",
    Component: ToolsRulerTwotone,
    componentName: "ToolsRulerTwotone",
  }
];

export default { ToolsRulerBold, ToolsRulerBroken, ToolsRulerBulk, ToolsRulerLinear, ToolsRulerOutline, ToolsRulerTwotone };
