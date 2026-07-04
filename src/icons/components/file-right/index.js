import FileRightBold from "./FileRightBold";
import FileRightBroken from "./FileRightBroken";
import FileRightBulk from "./FileRightBulk";
import FileRightLinear from "./FileRightLinear";
import FileRightOutline from "./FileRightOutline";
import FileRightTwotone from "./FileRightTwotone";

export { FileRightBold, FileRightBroken, FileRightBulk, FileRightLinear, FileRightOutline, FileRightTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "file-right-bold",
    Component: FileRightBold,
    componentName: "FileRightBold",
  },,
  {
    variant: "broken",
    slug: "file-right-broken",
    Component: FileRightBroken,
    componentName: "FileRightBroken",
  },,
  {
    variant: "bulk",
    slug: "file-right-bulk",
    Component: FileRightBulk,
    componentName: "FileRightBulk",
  },,
  {
    variant: "linear",
    slug: "file-right-linear",
    Component: FileRightLinear,
    componentName: "FileRightLinear",
  },,
  {
    variant: "outline",
    slug: "file-right-outline",
    Component: FileRightOutline,
    componentName: "FileRightOutline",
  },,
  {
    variant: "twotone",
    slug: "file-right-twotone",
    Component: FileRightTwotone,
    componentName: "FileRightTwotone",
  }
];

export default { FileRightBold, FileRightBroken, FileRightBulk, FileRightLinear, FileRightOutline, FileRightTwotone };
