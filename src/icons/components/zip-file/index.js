import ZipFileBold from "./ZipFileBold";
import ZipFileBroken from "./ZipFileBroken";
import ZipFileBulk from "./ZipFileBulk";
import ZipFileLinear from "./ZipFileLinear";
import ZipFileOutline from "./ZipFileOutline";
import ZipFileTwotone from "./ZipFileTwotone";

export { ZipFileBold, ZipFileBroken, ZipFileBulk, ZipFileLinear, ZipFileOutline, ZipFileTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "zip-file-bold",
    Component: ZipFileBold,
    componentName: "ZipFileBold",
  },,
  {
    variant: "broken",
    slug: "zip-file-broken",
    Component: ZipFileBroken,
    componentName: "ZipFileBroken",
  },,
  {
    variant: "bulk",
    slug: "zip-file-bulk",
    Component: ZipFileBulk,
    componentName: "ZipFileBulk",
  },,
  {
    variant: "linear",
    slug: "zip-file-linear",
    Component: ZipFileLinear,
    componentName: "ZipFileLinear",
  },,
  {
    variant: "outline",
    slug: "zip-file-outline",
    Component: ZipFileOutline,
    componentName: "ZipFileOutline",
  },,
  {
    variant: "twotone",
    slug: "zip-file-twotone",
    Component: ZipFileTwotone,
    componentName: "ZipFileTwotone",
  }
];

export default { ZipFileBold, ZipFileBroken, ZipFileBulk, ZipFileLinear, ZipFileOutline, ZipFileTwotone };
