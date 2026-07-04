import ClipboardCheckBold from "./ClipboardCheckBold";
import ClipboardCheckBroken from "./ClipboardCheckBroken";
import ClipboardCheckBulk from "./ClipboardCheckBulk";
import ClipboardCheckLinear from "./ClipboardCheckLinear";
import ClipboardCheckOutline from "./ClipboardCheckOutline";
import ClipboardCheckTwotone from "./ClipboardCheckTwotone";

export { ClipboardCheckBold, ClipboardCheckBroken, ClipboardCheckBulk, ClipboardCheckLinear, ClipboardCheckOutline, ClipboardCheckTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "clipboard-check-bold",
    Component: ClipboardCheckBold,
    componentName: "ClipboardCheckBold",
  },,
  {
    variant: "broken",
    slug: "clipboard-check-broken",
    Component: ClipboardCheckBroken,
    componentName: "ClipboardCheckBroken",
  },,
  {
    variant: "bulk",
    slug: "clipboard-check-bulk",
    Component: ClipboardCheckBulk,
    componentName: "ClipboardCheckBulk",
  },,
  {
    variant: "linear",
    slug: "clipboard-check-linear",
    Component: ClipboardCheckLinear,
    componentName: "ClipboardCheckLinear",
  },,
  {
    variant: "outline",
    slug: "clipboard-check-outline",
    Component: ClipboardCheckOutline,
    componentName: "ClipboardCheckOutline",
  },,
  {
    variant: "twotone",
    slug: "clipboard-check-twotone",
    Component: ClipboardCheckTwotone,
    componentName: "ClipboardCheckTwotone",
  }
];

export default { ClipboardCheckBold, ClipboardCheckBroken, ClipboardCheckBulk, ClipboardCheckLinear, ClipboardCheckOutline, ClipboardCheckTwotone };
