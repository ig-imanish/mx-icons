import QrCodeBold from "./QrCodeBold";
import QrCodeBroken from "./QrCodeBroken";
import QrCodeBulk from "./QrCodeBulk";
import QrCodeLinear from "./QrCodeLinear";
import QrCodeOutline from "./QrCodeOutline";
import QrCodeTwotone from "./QrCodeTwotone";

export { QrCodeBold, QrCodeBroken, QrCodeBulk, QrCodeLinear, QrCodeOutline, QrCodeTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "qr-code-bold",
    Component: QrCodeBold,
    componentName: "QrCodeBold",
  },,
  {
    variant: "broken",
    slug: "qr-code-broken",
    Component: QrCodeBroken,
    componentName: "QrCodeBroken",
  },,
  {
    variant: "bulk",
    slug: "qr-code-bulk",
    Component: QrCodeBulk,
    componentName: "QrCodeBulk",
  },,
  {
    variant: "linear",
    slug: "qr-code-linear",
    Component: QrCodeLinear,
    componentName: "QrCodeLinear",
  },,
  {
    variant: "outline",
    slug: "qr-code-outline",
    Component: QrCodeOutline,
    componentName: "QrCodeOutline",
  },,
  {
    variant: "twotone",
    slug: "qr-code-twotone",
    Component: QrCodeTwotone,
    componentName: "QrCodeTwotone",
  }
];

export default { QrCodeBold, QrCodeBroken, QrCodeBulk, QrCodeLinear, QrCodeOutline, QrCodeTwotone };
