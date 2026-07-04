import VerifiedCheckBold from "./VerifiedCheckBold";
import VerifiedCheckBroken from "./VerifiedCheckBroken";
import VerifiedCheckBulk from "./VerifiedCheckBulk";
import VerifiedCheckLinear from "./VerifiedCheckLinear";
import VerifiedCheckOutline from "./VerifiedCheckOutline";
import VerifiedCheckTwotone from "./VerifiedCheckTwotone";

export { VerifiedCheckBold, VerifiedCheckBroken, VerifiedCheckBulk, VerifiedCheckLinear, VerifiedCheckOutline, VerifiedCheckTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "verified-check-bold",
    Component: VerifiedCheckBold,
    componentName: "VerifiedCheckBold",
  },,
  {
    variant: "broken",
    slug: "verified-check-broken",
    Component: VerifiedCheckBroken,
    componentName: "VerifiedCheckBroken",
  },,
  {
    variant: "bulk",
    slug: "verified-check-bulk",
    Component: VerifiedCheckBulk,
    componentName: "VerifiedCheckBulk",
  },,
  {
    variant: "linear",
    slug: "verified-check-linear",
    Component: VerifiedCheckLinear,
    componentName: "VerifiedCheckLinear",
  },,
  {
    variant: "outline",
    slug: "verified-check-outline",
    Component: VerifiedCheckOutline,
    componentName: "VerifiedCheckOutline",
  },,
  {
    variant: "twotone",
    slug: "verified-check-twotone",
    Component: VerifiedCheckTwotone,
    componentName: "VerifiedCheckTwotone",
  }
];

export default { VerifiedCheckBold, VerifiedCheckBroken, VerifiedCheckBulk, VerifiedCheckLinear, VerifiedCheckOutline, VerifiedCheckTwotone };
