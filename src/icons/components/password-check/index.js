import PasswordCheckBold from "./PasswordCheckBold";
import PasswordCheckBroken from "./PasswordCheckBroken";
import PasswordCheckBulk from "./PasswordCheckBulk";
import PasswordCheckLinear from "./PasswordCheckLinear";
import PasswordCheckOutline from "./PasswordCheckOutline";
import PasswordCheckTwotone from "./PasswordCheckTwotone";

export { PasswordCheckBold, PasswordCheckBroken, PasswordCheckBulk, PasswordCheckLinear, PasswordCheckOutline, PasswordCheckTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "password-check-bold",
    Component: PasswordCheckBold,
    componentName: "PasswordCheckBold",
  },
  {
    variant: "broken",
    slug: "password-check-broken",
    Component: PasswordCheckBroken,
    componentName: "PasswordCheckBroken",
  },
  {
    variant: "bulk",
    slug: "password-check-bulk",
    Component: PasswordCheckBulk,
    componentName: "PasswordCheckBulk",
  },
  {
    variant: "linear",
    slug: "password-check-linear",
    Component: PasswordCheckLinear,
    componentName: "PasswordCheckLinear",
  },
  {
    variant: "outline",
    slug: "password-check-outline",
    Component: PasswordCheckOutline,
    componentName: "PasswordCheckOutline",
  },
  {
    variant: "twotone",
    slug: "password-check-twotone",
    Component: PasswordCheckTwotone,
    componentName: "PasswordCheckTwotone",
  },
];
