import FigmaFileBold from "./FigmaFileBold";
import FigmaFileBroken from "./FigmaFileBroken";
import FigmaFileBulk from "./FigmaFileBulk";
import FigmaFileLinear from "./FigmaFileLinear";
import FigmaFileOutline from "./FigmaFileOutline";
import FigmaFileTwotone from "./FigmaFileTwotone";

export { FigmaFileBold, FigmaFileBroken, FigmaFileBulk, FigmaFileLinear, FigmaFileOutline, FigmaFileTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "figma-file-bold",
    Component: FigmaFileBold,
    componentName: "FigmaFileBold",
  },,
  {
    variant: "broken",
    slug: "figma-file-broken",
    Component: FigmaFileBroken,
    componentName: "FigmaFileBroken",
  },,
  {
    variant: "bulk",
    slug: "figma-file-bulk",
    Component: FigmaFileBulk,
    componentName: "FigmaFileBulk",
  },,
  {
    variant: "linear",
    slug: "figma-file-linear",
    Component: FigmaFileLinear,
    componentName: "FigmaFileLinear",
  },,
  {
    variant: "outline",
    slug: "figma-file-outline",
    Component: FigmaFileOutline,
    componentName: "FigmaFileOutline",
  },,
  {
    variant: "twotone",
    slug: "figma-file-twotone",
    Component: FigmaFileTwotone,
    componentName: "FigmaFileTwotone",
  }
];

export default { FigmaFileBold, FigmaFileBroken, FigmaFileBulk, FigmaFileLinear, FigmaFileOutline, FigmaFileTwotone };
