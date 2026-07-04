import PasswordBold from "./PasswordBold";
import PasswordBroken from "./PasswordBroken";
import PasswordBulk from "./PasswordBulk";
import PasswordLinear from "./PasswordLinear";
import PasswordOutline from "./PasswordOutline";
import PasswordTwotone from "./PasswordTwotone";

export { PasswordBold, PasswordBroken, PasswordBulk, PasswordLinear, PasswordOutline, PasswordTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "password-bold",
    Component: PasswordBold,
    componentName: "PasswordBold",
  },,
  {
    variant: "broken",
    slug: "password-broken",
    Component: PasswordBroken,
    componentName: "PasswordBroken",
  },,
  {
    variant: "bulk",
    slug: "password-bulk",
    Component: PasswordBulk,
    componentName: "PasswordBulk",
  },,
  {
    variant: "linear",
    slug: "password-linear",
    Component: PasswordLinear,
    componentName: "PasswordLinear",
  },,
  {
    variant: "outline",
    slug: "password-outline",
    Component: PasswordOutline,
    componentName: "PasswordOutline",
  },,
  {
    variant: "twotone",
    slug: "password-twotone",
    Component: PasswordTwotone,
    componentName: "PasswordTwotone",
  }
];

export default { PasswordBold, PasswordBroken, PasswordBulk, PasswordLinear, PasswordOutline, PasswordTwotone };
