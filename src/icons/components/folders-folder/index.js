import FoldersFolderBold from "./FoldersFolderBold";
import FoldersFolderBroken from "./FoldersFolderBroken";
import FoldersFolderBulk from "./FoldersFolderBulk";
import FoldersFolderLinear from "./FoldersFolderLinear";
import FoldersFolderOutline from "./FoldersFolderOutline";
import FoldersFolderTwotone from "./FoldersFolderTwotone";

export { FoldersFolderBold, FoldersFolderBroken, FoldersFolderBulk, FoldersFolderLinear, FoldersFolderOutline, FoldersFolderTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "folders-folder-bold",
    Component: FoldersFolderBold,
    componentName: "FoldersFolderBold",
  },,
  {
    variant: "broken",
    slug: "folders-folder-broken",
    Component: FoldersFolderBroken,
    componentName: "FoldersFolderBroken",
  },,
  {
    variant: "bulk",
    slug: "folders-folder-bulk",
    Component: FoldersFolderBulk,
    componentName: "FoldersFolderBulk",
  },,
  {
    variant: "linear",
    slug: "folders-folder-linear",
    Component: FoldersFolderLinear,
    componentName: "FoldersFolderLinear",
  },,
  {
    variant: "outline",
    slug: "folders-folder-outline",
    Component: FoldersFolderOutline,
    componentName: "FoldersFolderOutline",
  },,
  {
    variant: "twotone",
    slug: "folders-folder-twotone",
    Component: FoldersFolderTwotone,
    componentName: "FoldersFolderTwotone",
  }
];

export default { FoldersFolderBold, FoldersFolderBroken, FoldersFolderBulk, FoldersFolderLinear, FoldersFolderOutline, FoldersFolderTwotone };
