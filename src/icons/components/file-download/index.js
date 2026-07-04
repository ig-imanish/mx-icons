import FileDownloadBold from "./FileDownloadBold";
import FileDownloadBroken from "./FileDownloadBroken";
import FileDownloadBulk from "./FileDownloadBulk";
import FileDownloadLinear from "./FileDownloadLinear";
import FileDownloadOutline from "./FileDownloadOutline";
import FileDownloadTwotone from "./FileDownloadTwotone";

export { FileDownloadBold, FileDownloadBroken, FileDownloadBulk, FileDownloadLinear, FileDownloadOutline, FileDownloadTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "file-download-bold",
    Component: FileDownloadBold,
    componentName: "FileDownloadBold",
  },,
  {
    variant: "broken",
    slug: "file-download-broken",
    Component: FileDownloadBroken,
    componentName: "FileDownloadBroken",
  },,
  {
    variant: "bulk",
    slug: "file-download-bulk",
    Component: FileDownloadBulk,
    componentName: "FileDownloadBulk",
  },,
  {
    variant: "linear",
    slug: "file-download-linear",
    Component: FileDownloadLinear,
    componentName: "FileDownloadLinear",
  },,
  {
    variant: "outline",
    slug: "file-download-outline",
    Component: FileDownloadOutline,
    componentName: "FileDownloadOutline",
  },,
  {
    variant: "twotone",
    slug: "file-download-twotone",
    Component: FileDownloadTwotone,
    componentName: "FileDownloadTwotone",
  }
];

export default { FileDownloadBold, FileDownloadBroken, FileDownloadBulk, FileDownloadLinear, FileDownloadOutline, FileDownloadTwotone };
