import FileTextBold from "./FileTextBold";
import FileTextBroken from "./FileTextBroken";
import FileTextBulk from "./FileTextBulk";
import FileTextLinear from "./FileTextLinear";
import FileTextOutline from "./FileTextOutline";
import FileTextTwotone from "./FileTextTwotone";

export { FileTextBold, FileTextBroken, FileTextBulk, FileTextLinear, FileTextOutline, FileTextTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "file-text-bold",
    Component: FileTextBold,
    componentName: "FileTextBold",
  },,
  {
    variant: "broken",
    slug: "file-text-broken",
    Component: FileTextBroken,
    componentName: "FileTextBroken",
  },,
  {
    variant: "bulk",
    slug: "file-text-bulk",
    Component: FileTextBulk,
    componentName: "FileTextBulk",
  },,
  {
    variant: "linear",
    slug: "file-text-linear",
    Component: FileTextLinear,
    componentName: "FileTextLinear",
  },,
  {
    variant: "outline",
    slug: "file-text-outline",
    Component: FileTextOutline,
    componentName: "FileTextOutline",
  },,
  {
    variant: "twotone",
    slug: "file-text-twotone",
    Component: FileTextTwotone,
    componentName: "FileTextTwotone",
  }
];

export default { FileTextBold, FileTextBroken, FileTextBulk, FileTextLinear, FileTextOutline, FileTextTwotone };
