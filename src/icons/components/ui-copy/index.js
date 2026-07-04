import UiCopyBold from "./UiCopyBold";
import UiCopyBroken from "./UiCopyBroken";
import UiCopyBulk from "./UiCopyBulk";
import UiCopyLinear from "./UiCopyLinear";
import UiCopyOutline from "./UiCopyOutline";
import UiCopyTwotone from "./UiCopyTwotone";

export { UiCopyBold, UiCopyBroken, UiCopyBulk, UiCopyLinear, UiCopyOutline, UiCopyTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "ui-copy-bold",
    Component: UiCopyBold,
    componentName: "UiCopyBold",
  },,
  {
    variant: "broken",
    slug: "ui-copy-broken",
    Component: UiCopyBroken,
    componentName: "UiCopyBroken",
  },,
  {
    variant: "bulk",
    slug: "ui-copy-bulk",
    Component: UiCopyBulk,
    componentName: "UiCopyBulk",
  },,
  {
    variant: "linear",
    slug: "ui-copy-linear",
    Component: UiCopyLinear,
    componentName: "UiCopyLinear",
  },,
  {
    variant: "outline",
    slug: "ui-copy-outline",
    Component: UiCopyOutline,
    componentName: "UiCopyOutline",
  },,
  {
    variant: "twotone",
    slug: "ui-copy-twotone",
    Component: UiCopyTwotone,
    componentName: "UiCopyTwotone",
  }
];

export default { UiCopyBold, UiCopyBroken, UiCopyBulk, UiCopyLinear, UiCopyOutline, UiCopyTwotone };
