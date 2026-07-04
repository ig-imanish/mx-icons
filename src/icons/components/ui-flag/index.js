import UiFlagBold from "./UiFlagBold";
import UiFlagBroken from "./UiFlagBroken";
import UiFlagBulk from "./UiFlagBulk";
import UiFlagLinear from "./UiFlagLinear";
import UiFlagOutline from "./UiFlagOutline";
import UiFlagTwotone from "./UiFlagTwotone";

export { UiFlagBold, UiFlagBroken, UiFlagBulk, UiFlagLinear, UiFlagOutline, UiFlagTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "ui-flag-bold",
    Component: UiFlagBold,
    componentName: "UiFlagBold",
  },,
  {
    variant: "broken",
    slug: "ui-flag-broken",
    Component: UiFlagBroken,
    componentName: "UiFlagBroken",
  },,
  {
    variant: "bulk",
    slug: "ui-flag-bulk",
    Component: UiFlagBulk,
    componentName: "UiFlagBulk",
  },,
  {
    variant: "linear",
    slug: "ui-flag-linear",
    Component: UiFlagLinear,
    componentName: "UiFlagLinear",
  },,
  {
    variant: "outline",
    slug: "ui-flag-outline",
    Component: UiFlagOutline,
    componentName: "UiFlagOutline",
  },,
  {
    variant: "twotone",
    slug: "ui-flag-twotone",
    Component: UiFlagTwotone,
    componentName: "UiFlagTwotone",
  }
];

export default { UiFlagBold, UiFlagBroken, UiFlagBulk, UiFlagLinear, UiFlagOutline, UiFlagTwotone };
