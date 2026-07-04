import PasswordMinimalisticBold from "./PasswordMinimalisticBold";
import PasswordMinimalisticBroken from "./PasswordMinimalisticBroken";
import PasswordMinimalisticBulk from "./PasswordMinimalisticBulk";
import PasswordMinimalisticLinear from "./PasswordMinimalisticLinear";
import PasswordMinimalisticOutline from "./PasswordMinimalisticOutline";
import PasswordMinimalisticTwotone from "./PasswordMinimalisticTwotone";

export { PasswordMinimalisticBold, PasswordMinimalisticBroken, PasswordMinimalisticBulk, PasswordMinimalisticLinear, PasswordMinimalisticOutline, PasswordMinimalisticTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "password-minimalistic-bold",
    Component: PasswordMinimalisticBold,
    componentName: "PasswordMinimalisticBold",
  },,
  {
    variant: "broken",
    slug: "password-minimalistic-broken",
    Component: PasswordMinimalisticBroken,
    componentName: "PasswordMinimalisticBroken",
  },,
  {
    variant: "bulk",
    slug: "password-minimalistic-bulk",
    Component: PasswordMinimalisticBulk,
    componentName: "PasswordMinimalisticBulk",
  },,
  {
    variant: "linear",
    slug: "password-minimalistic-linear",
    Component: PasswordMinimalisticLinear,
    componentName: "PasswordMinimalisticLinear",
  },,
  {
    variant: "outline",
    slug: "password-minimalistic-outline",
    Component: PasswordMinimalisticOutline,
    componentName: "PasswordMinimalisticOutline",
  },,
  {
    variant: "twotone",
    slug: "password-minimalistic-twotone",
    Component: PasswordMinimalisticTwotone,
    componentName: "PasswordMinimalisticTwotone",
  }
];

export default { PasswordMinimalisticBold, PasswordMinimalisticBroken, PasswordMinimalisticBulk, PasswordMinimalisticLinear, PasswordMinimalisticOutline, PasswordMinimalisticTwotone };
