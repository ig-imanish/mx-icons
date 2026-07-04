import ClipboardRemoveBold from "./ClipboardRemoveBold";
import ClipboardRemoveBroken from "./ClipboardRemoveBroken";
import ClipboardRemoveBulk from "./ClipboardRemoveBulk";
import ClipboardRemoveLinear from "./ClipboardRemoveLinear";
import ClipboardRemoveOutline from "./ClipboardRemoveOutline";
import ClipboardRemoveTwotone from "./ClipboardRemoveTwotone";

export { ClipboardRemoveBold, ClipboardRemoveBroken, ClipboardRemoveBulk, ClipboardRemoveLinear, ClipboardRemoveOutline, ClipboardRemoveTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "clipboard-remove-bold",
    Component: ClipboardRemoveBold,
    componentName: "ClipboardRemoveBold",
  },,
  {
    variant: "broken",
    slug: "clipboard-remove-broken",
    Component: ClipboardRemoveBroken,
    componentName: "ClipboardRemoveBroken",
  },,
  {
    variant: "bulk",
    slug: "clipboard-remove-bulk",
    Component: ClipboardRemoveBulk,
    componentName: "ClipboardRemoveBulk",
  },,
  {
    variant: "linear",
    slug: "clipboard-remove-linear",
    Component: ClipboardRemoveLinear,
    componentName: "ClipboardRemoveLinear",
  },,
  {
    variant: "outline",
    slug: "clipboard-remove-outline",
    Component: ClipboardRemoveOutline,
    componentName: "ClipboardRemoveOutline",
  },,
  {
    variant: "twotone",
    slug: "clipboard-remove-twotone",
    Component: ClipboardRemoveTwotone,
    componentName: "ClipboardRemoveTwotone",
  }
];

export default { ClipboardRemoveBold, ClipboardRemoveBroken, ClipboardRemoveBulk, ClipboardRemoveLinear, ClipboardRemoveOutline, ClipboardRemoveTwotone };
