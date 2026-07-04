import ClipboardAddBold from "./ClipboardAddBold";
import ClipboardAddBroken from "./ClipboardAddBroken";
import ClipboardAddBulk from "./ClipboardAddBulk";
import ClipboardAddLinear from "./ClipboardAddLinear";
import ClipboardAddOutline from "./ClipboardAddOutline";
import ClipboardAddTwotone from "./ClipboardAddTwotone";

export { ClipboardAddBold, ClipboardAddBroken, ClipboardAddBulk, ClipboardAddLinear, ClipboardAddOutline, ClipboardAddTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "clipboard-add-bold",
    Component: ClipboardAddBold,
    componentName: "ClipboardAddBold",
  },,
  {
    variant: "broken",
    slug: "clipboard-add-broken",
    Component: ClipboardAddBroken,
    componentName: "ClipboardAddBroken",
  },,
  {
    variant: "bulk",
    slug: "clipboard-add-bulk",
    Component: ClipboardAddBulk,
    componentName: "ClipboardAddBulk",
  },,
  {
    variant: "linear",
    slug: "clipboard-add-linear",
    Component: ClipboardAddLinear,
    componentName: "ClipboardAddLinear",
  },,
  {
    variant: "outline",
    slug: "clipboard-add-outline",
    Component: ClipboardAddOutline,
    componentName: "ClipboardAddOutline",
  },,
  {
    variant: "twotone",
    slug: "clipboard-add-twotone",
    Component: ClipboardAddTwotone,
    componentName: "ClipboardAddTwotone",
  }
];

export default { ClipboardAddBold, ClipboardAddBroken, ClipboardAddBulk, ClipboardAddLinear, ClipboardAddOutline, ClipboardAddTwotone };
