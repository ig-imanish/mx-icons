import ClipboardListBold from "./ClipboardListBold";
import ClipboardListBroken from "./ClipboardListBroken";
import ClipboardListBulk from "./ClipboardListBulk";
import ClipboardListLinear from "./ClipboardListLinear";
import ClipboardListOutline from "./ClipboardListOutline";
import ClipboardListTwotone from "./ClipboardListTwotone";

export { ClipboardListBold, ClipboardListBroken, ClipboardListBulk, ClipboardListLinear, ClipboardListOutline, ClipboardListTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "clipboard-list-bold",
    Component: ClipboardListBold,
    componentName: "ClipboardListBold",
  },,
  {
    variant: "broken",
    slug: "clipboard-list-broken",
    Component: ClipboardListBroken,
    componentName: "ClipboardListBroken",
  },,
  {
    variant: "bulk",
    slug: "clipboard-list-bulk",
    Component: ClipboardListBulk,
    componentName: "ClipboardListBulk",
  },,
  {
    variant: "linear",
    slug: "clipboard-list-linear",
    Component: ClipboardListLinear,
    componentName: "ClipboardListLinear",
  },,
  {
    variant: "outline",
    slug: "clipboard-list-outline",
    Component: ClipboardListOutline,
    componentName: "ClipboardListOutline",
  },,
  {
    variant: "twotone",
    slug: "clipboard-list-twotone",
    Component: ClipboardListTwotone,
    componentName: "ClipboardListTwotone",
  }
];

export default { ClipboardListBold, ClipboardListBroken, ClipboardListBulk, ClipboardListLinear, ClipboardListOutline, ClipboardListTwotone };
