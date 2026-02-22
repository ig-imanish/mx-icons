import VerifyBold from "./VerifyBold";
import VerifyBroken from "./VerifyBroken";
import VerifyBulk from "./VerifyBulk";
import VerifyLinear from "./VerifyLinear";
import VerifyOutline from "./VerifyOutline";
import VerifyTwotone from "./VerifyTwotone";

export { VerifyBold, VerifyBroken, VerifyBulk, VerifyLinear, VerifyOutline, VerifyTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "verify-bold",
    Component: VerifyBold,
    componentName: "VerifyBold",
  },
  {
    variant: "broken",
    slug: "verify-broken",
    Component: VerifyBroken,
    componentName: "VerifyBroken",
  },
  {
    variant: "bulk",
    slug: "verify-bulk",
    Component: VerifyBulk,
    componentName: "VerifyBulk",
  },
  {
    variant: "linear",
    slug: "verify-linear",
    Component: VerifyLinear,
    componentName: "VerifyLinear",
  },
  {
    variant: "outline",
    slug: "verify-outline",
    Component: VerifyOutline,
    componentName: "VerifyOutline",
  },
  {
    variant: "twotone",
    slug: "verify-twotone",
    Component: VerifyTwotone,
    componentName: "VerifyTwotone",
  },
];
