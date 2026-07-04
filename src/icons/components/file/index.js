import FileBold from "./FileBold";
import FileBroken from "./FileBroken";
import FileBulk from "./FileBulk";
import FileLinear from "./FileLinear";
import FileOutline from "./FileOutline";
import FileTwotone from "./FileTwotone";

export { FileBold, FileBroken, FileBulk, FileLinear, FileOutline, FileTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "file-bold",
    Component: FileBold,
    componentName: "FileBold",
  },,
  {
    variant: "broken",
    slug: "file-broken",
    Component: FileBroken,
    componentName: "FileBroken",
  },,
  {
    variant: "bulk",
    slug: "file-bulk",
    Component: FileBulk,
    componentName: "FileBulk",
  },,
  {
    variant: "linear",
    slug: "file-linear",
    Component: FileLinear,
    componentName: "FileLinear",
  },,
  {
    variant: "outline",
    slug: "file-outline",
    Component: FileOutline,
    componentName: "FileOutline",
  },,
  {
    variant: "twotone",
    slug: "file-twotone",
    Component: FileTwotone,
    componentName: "FileTwotone",
  }
];

export default { FileBold, FileBroken, FileBulk, FileLinear, FileOutline, FileTwotone };
