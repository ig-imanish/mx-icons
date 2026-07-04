import FileRemoveBold from "./FileRemoveBold";
import FileRemoveBroken from "./FileRemoveBroken";
import FileRemoveBulk from "./FileRemoveBulk";
import FileRemoveLinear from "./FileRemoveLinear";
import FileRemoveOutline from "./FileRemoveOutline";
import FileRemoveTwotone from "./FileRemoveTwotone";

export { FileRemoveBold, FileRemoveBroken, FileRemoveBulk, FileRemoveLinear, FileRemoveOutline, FileRemoveTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "file-remove-bold",
    Component: FileRemoveBold,
    componentName: "FileRemoveBold",
  },,
  {
    variant: "broken",
    slug: "file-remove-broken",
    Component: FileRemoveBroken,
    componentName: "FileRemoveBroken",
  },,
  {
    variant: "bulk",
    slug: "file-remove-bulk",
    Component: FileRemoveBulk,
    componentName: "FileRemoveBulk",
  },,
  {
    variant: "linear",
    slug: "file-remove-linear",
    Component: FileRemoveLinear,
    componentName: "FileRemoveLinear",
  },,
  {
    variant: "outline",
    slug: "file-remove-outline",
    Component: FileRemoveOutline,
    componentName: "FileRemoveOutline",
  },,
  {
    variant: "twotone",
    slug: "file-remove-twotone",
    Component: FileRemoveTwotone,
    componentName: "FileRemoveTwotone",
  }
];

export default { FileRemoveBold, FileRemoveBroken, FileRemoveBulk, FileRemoveLinear, FileRemoveOutline, FileRemoveTwotone };
