import DownloadBold from "./DownloadBold";
import DownloadBroken from "./DownloadBroken";
import DownloadBulk from "./DownloadBulk";
import DownloadLinear from "./DownloadLinear";
import DownloadOutline from "./DownloadOutline";
import DownloadTwotone from "./DownloadTwotone";

export { DownloadBold, DownloadBroken, DownloadBulk, DownloadLinear, DownloadOutline, DownloadTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "download-bold",
    Component: DownloadBold,
    componentName: "DownloadBold",
  },,
  {
    variant: "broken",
    slug: "download-broken",
    Component: DownloadBroken,
    componentName: "DownloadBroken",
  },,
  {
    variant: "bulk",
    slug: "download-bulk",
    Component: DownloadBulk,
    componentName: "DownloadBulk",
  },,
  {
    variant: "linear",
    slug: "download-linear",
    Component: DownloadLinear,
    componentName: "DownloadLinear",
  },,
  {
    variant: "outline",
    slug: "download-outline",
    Component: DownloadOutline,
    componentName: "DownloadOutline",
  },,
  {
    variant: "twotone",
    slug: "download-twotone",
    Component: DownloadTwotone,
    componentName: "DownloadTwotone",
  }
];

export default { DownloadBold, DownloadBroken, DownloadBulk, DownloadLinear, DownloadOutline, DownloadTwotone };
