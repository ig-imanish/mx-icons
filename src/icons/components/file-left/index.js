import FileLeftBold from "./FileLeftBold";
import FileLeftBroken from "./FileLeftBroken";
import FileLeftBulk from "./FileLeftBulk";
import FileLeftLinear from "./FileLeftLinear";
import FileLeftOutline from "./FileLeftOutline";
import FileLeftTwotone from "./FileLeftTwotone";

export { FileLeftBold, FileLeftBroken, FileLeftBulk, FileLeftLinear, FileLeftOutline, FileLeftTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "file-left-bold",
    Component: FileLeftBold,
    componentName: "FileLeftBold",
  },,
  {
    variant: "broken",
    slug: "file-left-broken",
    Component: FileLeftBroken,
    componentName: "FileLeftBroken",
  },,
  {
    variant: "bulk",
    slug: "file-left-bulk",
    Component: FileLeftBulk,
    componentName: "FileLeftBulk",
  },,
  {
    variant: "linear",
    slug: "file-left-linear",
    Component: FileLeftLinear,
    componentName: "FileLeftLinear",
  },,
  {
    variant: "outline",
    slug: "file-left-outline",
    Component: FileLeftOutline,
    componentName: "FileLeftOutline",
  },,
  {
    variant: "twotone",
    slug: "file-left-twotone",
    Component: FileLeftTwotone,
    componentName: "FileLeftTwotone",
  }
];

export default { FileLeftBold, FileLeftBroken, FileLeftBulk, FileLeftLinear, FileLeftOutline, FileLeftTwotone };
