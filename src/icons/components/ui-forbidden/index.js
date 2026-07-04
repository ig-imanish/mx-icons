import UiForbiddenBold from "./UiForbiddenBold";
import UiForbiddenBroken from "./UiForbiddenBroken";
import UiForbiddenBulk from "./UiForbiddenBulk";
import UiForbiddenLinear from "./UiForbiddenLinear";
import UiForbiddenOutline from "./UiForbiddenOutline";
import UiForbiddenTwotone from "./UiForbiddenTwotone";

export { UiForbiddenBold, UiForbiddenBroken, UiForbiddenBulk, UiForbiddenLinear, UiForbiddenOutline, UiForbiddenTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "ui-forbidden-bold",
    Component: UiForbiddenBold,
    componentName: "UiForbiddenBold",
  },,
  {
    variant: "broken",
    slug: "ui-forbidden-broken",
    Component: UiForbiddenBroken,
    componentName: "UiForbiddenBroken",
  },,
  {
    variant: "bulk",
    slug: "ui-forbidden-bulk",
    Component: UiForbiddenBulk,
    componentName: "UiForbiddenBulk",
  },,
  {
    variant: "linear",
    slug: "ui-forbidden-linear",
    Component: UiForbiddenLinear,
    componentName: "UiForbiddenLinear",
  },,
  {
    variant: "outline",
    slug: "ui-forbidden-outline",
    Component: UiForbiddenOutline,
    componentName: "UiForbiddenOutline",
  },,
  {
    variant: "twotone",
    slug: "ui-forbidden-twotone",
    Component: UiForbiddenTwotone,
    componentName: "UiForbiddenTwotone",
  }
];

export default { UiForbiddenBold, UiForbiddenBroken, UiForbiddenBulk, UiForbiddenLinear, UiForbiddenOutline, UiForbiddenTwotone };
