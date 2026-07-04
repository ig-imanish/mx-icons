import FileCheckBold from "./FileCheckBold";
import FileCheckBroken from "./FileCheckBroken";
import FileCheckBulk from "./FileCheckBulk";
import FileCheckLinear from "./FileCheckLinear";
import FileCheckOutline from "./FileCheckOutline";
import FileCheckTwotone from "./FileCheckTwotone";

export { FileCheckBold, FileCheckBroken, FileCheckBulk, FileCheckLinear, FileCheckOutline, FileCheckTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "file-check-bold",
    Component: FileCheckBold,
    componentName: "FileCheckBold",
  },,
  {
    variant: "broken",
    slug: "file-check-broken",
    Component: FileCheckBroken,
    componentName: "FileCheckBroken",
  },,
  {
    variant: "bulk",
    slug: "file-check-bulk",
    Component: FileCheckBulk,
    componentName: "FileCheckBulk",
  },,
  {
    variant: "linear",
    slug: "file-check-linear",
    Component: FileCheckLinear,
    componentName: "FileCheckLinear",
  },,
  {
    variant: "outline",
    slug: "file-check-outline",
    Component: FileCheckOutline,
    componentName: "FileCheckOutline",
  },,
  {
    variant: "twotone",
    slug: "file-check-twotone",
    Component: FileCheckTwotone,
    componentName: "FileCheckTwotone",
  }
];

export default { FileCheckBold, FileCheckBroken, FileCheckBulk, FileCheckLinear, FileCheckOutline, FileCheckTwotone };
