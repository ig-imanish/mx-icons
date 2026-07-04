import PassportBold from "./PassportBold";
import PassportBroken from "./PassportBroken";
import PassportBulk from "./PassportBulk";
import PassportLinear from "./PassportLinear";
import PassportOutline from "./PassportOutline";
import PassportTwotone from "./PassportTwotone";

export { PassportBold, PassportBroken, PassportBulk, PassportLinear, PassportOutline, PassportTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "passport-bold",
    Component: PassportBold,
    componentName: "PassportBold",
  },,
  {
    variant: "broken",
    slug: "passport-broken",
    Component: PassportBroken,
    componentName: "PassportBroken",
  },,
  {
    variant: "bulk",
    slug: "passport-bulk",
    Component: PassportBulk,
    componentName: "PassportBulk",
  },,
  {
    variant: "linear",
    slug: "passport-linear",
    Component: PassportLinear,
    componentName: "PassportLinear",
  },,
  {
    variant: "outline",
    slug: "passport-outline",
    Component: PassportOutline,
    componentName: "PassportOutline",
  },,
  {
    variant: "twotone",
    slug: "passport-twotone",
    Component: PassportTwotone,
    componentName: "PassportTwotone",
  }
];

export default { PassportBold, PassportBroken, PassportBulk, PassportLinear, PassportOutline, PassportTwotone };
