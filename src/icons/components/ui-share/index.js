import UiShareBold from "./UiShareBold";
import UiShareBroken from "./UiShareBroken";
import UiShareBulk from "./UiShareBulk";
import UiShareLinear from "./UiShareLinear";
import UiShareOutline from "./UiShareOutline";
import UiShareTwotone from "./UiShareTwotone";

export { UiShareBold, UiShareBroken, UiShareBulk, UiShareLinear, UiShareOutline, UiShareTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "ui-share-bold",
    Component: UiShareBold,
    componentName: "UiShareBold",
  },,
  {
    variant: "broken",
    slug: "ui-share-broken",
    Component: UiShareBroken,
    componentName: "UiShareBroken",
  },,
  {
    variant: "bulk",
    slug: "ui-share-bulk",
    Component: UiShareBulk,
    componentName: "UiShareBulk",
  },,
  {
    variant: "linear",
    slug: "ui-share-linear",
    Component: UiShareLinear,
    componentName: "UiShareLinear",
  },,
  {
    variant: "outline",
    slug: "ui-share-outline",
    Component: UiShareOutline,
    componentName: "UiShareOutline",
  },,
  {
    variant: "twotone",
    slug: "ui-share-twotone",
    Component: UiShareTwotone,
    componentName: "UiShareTwotone",
  }
];

export default { UiShareBold, UiShareBroken, UiShareBulk, UiShareLinear, UiShareOutline, UiShareTwotone };
