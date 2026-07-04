import UiGiftBold from "./UiGiftBold";
import UiGiftBroken from "./UiGiftBroken";
import UiGiftBulk from "./UiGiftBulk";
import UiGiftLinear from "./UiGiftLinear";
import UiGiftOutline from "./UiGiftOutline";
import UiGiftTwotone from "./UiGiftTwotone";

export { UiGiftBold, UiGiftBroken, UiGiftBulk, UiGiftLinear, UiGiftOutline, UiGiftTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "ui-gift-bold",
    Component: UiGiftBold,
    componentName: "UiGiftBold",
  },,
  {
    variant: "broken",
    slug: "ui-gift-broken",
    Component: UiGiftBroken,
    componentName: "UiGiftBroken",
  },,
  {
    variant: "bulk",
    slug: "ui-gift-bulk",
    Component: UiGiftBulk,
    componentName: "UiGiftBulk",
  },,
  {
    variant: "linear",
    slug: "ui-gift-linear",
    Component: UiGiftLinear,
    componentName: "UiGiftLinear",
  },,
  {
    variant: "outline",
    slug: "ui-gift-outline",
    Component: UiGiftOutline,
    componentName: "UiGiftOutline",
  },,
  {
    variant: "twotone",
    slug: "ui-gift-twotone",
    Component: UiGiftTwotone,
    componentName: "UiGiftTwotone",
  }
];

export default { UiGiftBold, UiGiftBroken, UiGiftBulk, UiGiftLinear, UiGiftOutline, UiGiftTwotone };
