import DownloadMinimalisticBold from "./DownloadMinimalisticBold";
import DownloadMinimalisticBroken from "./DownloadMinimalisticBroken";
import DownloadMinimalisticBulk from "./DownloadMinimalisticBulk";
import DownloadMinimalisticLinear from "./DownloadMinimalisticLinear";
import DownloadMinimalisticOutline from "./DownloadMinimalisticOutline";
import DownloadMinimalisticTwotone from "./DownloadMinimalisticTwotone";

export { DownloadMinimalisticBold, DownloadMinimalisticBroken, DownloadMinimalisticBulk, DownloadMinimalisticLinear, DownloadMinimalisticOutline, DownloadMinimalisticTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "download-minimalistic-bold",
    Component: DownloadMinimalisticBold,
    componentName: "DownloadMinimalisticBold",
  },,
  {
    variant: "broken",
    slug: "download-minimalistic-broken",
    Component: DownloadMinimalisticBroken,
    componentName: "DownloadMinimalisticBroken",
  },,
  {
    variant: "bulk",
    slug: "download-minimalistic-bulk",
    Component: DownloadMinimalisticBulk,
    componentName: "DownloadMinimalisticBulk",
  },,
  {
    variant: "linear",
    slug: "download-minimalistic-linear",
    Component: DownloadMinimalisticLinear,
    componentName: "DownloadMinimalisticLinear",
  },,
  {
    variant: "outline",
    slug: "download-minimalistic-outline",
    Component: DownloadMinimalisticOutline,
    componentName: "DownloadMinimalisticOutline",
  },,
  {
    variant: "twotone",
    slug: "download-minimalistic-twotone",
    Component: DownloadMinimalisticTwotone,
    componentName: "DownloadMinimalisticTwotone",
  }
];

export default { DownloadMinimalisticBold, DownloadMinimalisticBroken, DownloadMinimalisticBulk, DownloadMinimalisticLinear, DownloadMinimalisticOutline, DownloadMinimalisticTwotone };
