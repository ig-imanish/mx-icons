import ToolsCropBold from "./ToolsCropBold";
import ToolsCropBroken from "./ToolsCropBroken";
import ToolsCropBulk from "./ToolsCropBulk";
import ToolsCropLinear from "./ToolsCropLinear";
import ToolsCropOutline from "./ToolsCropOutline";
import ToolsCropTwotone from "./ToolsCropTwotone";

export { ToolsCropBold, ToolsCropBroken, ToolsCropBulk, ToolsCropLinear, ToolsCropOutline, ToolsCropTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "tools-crop-bold",
    Component: ToolsCropBold,
    componentName: "ToolsCropBold",
  },,
  {
    variant: "broken",
    slug: "tools-crop-broken",
    Component: ToolsCropBroken,
    componentName: "ToolsCropBroken",
  },,
  {
    variant: "bulk",
    slug: "tools-crop-bulk",
    Component: ToolsCropBulk,
    componentName: "ToolsCropBulk",
  },,
  {
    variant: "linear",
    slug: "tools-crop-linear",
    Component: ToolsCropLinear,
    componentName: "ToolsCropLinear",
  },,
  {
    variant: "outline",
    slug: "tools-crop-outline",
    Component: ToolsCropOutline,
    componentName: "ToolsCropOutline",
  },,
  {
    variant: "twotone",
    slug: "tools-crop-twotone",
    Component: ToolsCropTwotone,
    componentName: "ToolsCropTwotone",
  }
];

export default { ToolsCropBold, ToolsCropBroken, ToolsCropBulk, ToolsCropLinear, ToolsCropOutline, ToolsCropTwotone };
