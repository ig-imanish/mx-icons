import FileCorruptedBold from "./FileCorruptedBold";
import FileCorruptedBroken from "./FileCorruptedBroken";
import FileCorruptedBulk from "./FileCorruptedBulk";
import FileCorruptedLinear from "./FileCorruptedLinear";
import FileCorruptedOutline from "./FileCorruptedOutline";
import FileCorruptedTwotone from "./FileCorruptedTwotone";

export { FileCorruptedBold, FileCorruptedBroken, FileCorruptedBulk, FileCorruptedLinear, FileCorruptedOutline, FileCorruptedTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "file-corrupted-bold",
    Component: FileCorruptedBold,
    componentName: "FileCorruptedBold",
  },,
  {
    variant: "broken",
    slug: "file-corrupted-broken",
    Component: FileCorruptedBroken,
    componentName: "FileCorruptedBroken",
  },,
  {
    variant: "bulk",
    slug: "file-corrupted-bulk",
    Component: FileCorruptedBulk,
    componentName: "FileCorruptedBulk",
  },,
  {
    variant: "linear",
    slug: "file-corrupted-linear",
    Component: FileCorruptedLinear,
    componentName: "FileCorruptedLinear",
  },,
  {
    variant: "outline",
    slug: "file-corrupted-outline",
    Component: FileCorruptedOutline,
    componentName: "FileCorruptedOutline",
  },,
  {
    variant: "twotone",
    slug: "file-corrupted-twotone",
    Component: FileCorruptedTwotone,
    componentName: "FileCorruptedTwotone",
  }
];

export default { FileCorruptedBold, FileCorruptedBroken, FileCorruptedBulk, FileCorruptedLinear, FileCorruptedOutline, FileCorruptedTwotone };
