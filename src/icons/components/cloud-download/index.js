import CloudDownloadBold from "./CloudDownloadBold";
import CloudDownloadBroken from "./CloudDownloadBroken";
import CloudDownloadBulk from "./CloudDownloadBulk";
import CloudDownloadLinear from "./CloudDownloadLinear";
import CloudDownloadOutline from "./CloudDownloadOutline";
import CloudDownloadTwotone from "./CloudDownloadTwotone";

export { CloudDownloadBold, CloudDownloadBroken, CloudDownloadBulk, CloudDownloadLinear, CloudDownloadOutline, CloudDownloadTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "cloud-download-bold",
    Component: CloudDownloadBold,
    componentName: "CloudDownloadBold",
  },,
  {
    variant: "broken",
    slug: "cloud-download-broken",
    Component: CloudDownloadBroken,
    componentName: "CloudDownloadBroken",
  },,
  {
    variant: "bulk",
    slug: "cloud-download-bulk",
    Component: CloudDownloadBulk,
    componentName: "CloudDownloadBulk",
  },,
  {
    variant: "linear",
    slug: "cloud-download-linear",
    Component: CloudDownloadLinear,
    componentName: "CloudDownloadLinear",
  },,
  {
    variant: "outline",
    slug: "cloud-download-outline",
    Component: CloudDownloadOutline,
    componentName: "CloudDownloadOutline",
  },,
  {
    variant: "twotone",
    slug: "cloud-download-twotone",
    Component: CloudDownloadTwotone,
    componentName: "CloudDownloadTwotone",
  }
];

export default { CloudDownloadBold, CloudDownloadBroken, CloudDownloadBulk, CloudDownloadLinear, CloudDownloadOutline, CloudDownloadTwotone };
