import FileSendBold from "./FileSendBold";
import FileSendBroken from "./FileSendBroken";
import FileSendBulk from "./FileSendBulk";
import FileSendLinear from "./FileSendLinear";
import FileSendOutline from "./FileSendOutline";
import FileSendTwotone from "./FileSendTwotone";

export { FileSendBold, FileSendBroken, FileSendBulk, FileSendLinear, FileSendOutline, FileSendTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "file-send-bold",
    Component: FileSendBold,
    componentName: "FileSendBold",
  },,
  {
    variant: "broken",
    slug: "file-send-broken",
    Component: FileSendBroken,
    componentName: "FileSendBroken",
  },,
  {
    variant: "bulk",
    slug: "file-send-bulk",
    Component: FileSendBulk,
    componentName: "FileSendBulk",
  },,
  {
    variant: "linear",
    slug: "file-send-linear",
    Component: FileSendLinear,
    componentName: "FileSendLinear",
  },,
  {
    variant: "outline",
    slug: "file-send-outline",
    Component: FileSendOutline,
    componentName: "FileSendOutline",
  },,
  {
    variant: "twotone",
    slug: "file-send-twotone",
    Component: FileSendTwotone,
    componentName: "FileSendTwotone",
  }
];

export default { FileSendBold, FileSendBroken, FileSendBulk, FileSendLinear, FileSendOutline, FileSendTwotone };
