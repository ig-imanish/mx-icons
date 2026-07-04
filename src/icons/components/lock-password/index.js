import LockPasswordBold from "./LockPasswordBold";
import LockPasswordBroken from "./LockPasswordBroken";
import LockPasswordBulk from "./LockPasswordBulk";
import LockPasswordLinear from "./LockPasswordLinear";
import LockPasswordOutline from "./LockPasswordOutline";
import LockPasswordTwotone from "./LockPasswordTwotone";

export { LockPasswordBold, LockPasswordBroken, LockPasswordBulk, LockPasswordLinear, LockPasswordOutline, LockPasswordTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "lock-password-bold",
    Component: LockPasswordBold,
    componentName: "LockPasswordBold",
  },,
  {
    variant: "broken",
    slug: "lock-password-broken",
    Component: LockPasswordBroken,
    componentName: "LockPasswordBroken",
  },,
  {
    variant: "bulk",
    slug: "lock-password-bulk",
    Component: LockPasswordBulk,
    componentName: "LockPasswordBulk",
  },,
  {
    variant: "linear",
    slug: "lock-password-linear",
    Component: LockPasswordLinear,
    componentName: "LockPasswordLinear",
  },,
  {
    variant: "outline",
    slug: "lock-password-outline",
    Component: LockPasswordOutline,
    componentName: "LockPasswordOutline",
  },,
  {
    variant: "twotone",
    slug: "lock-password-twotone",
    Component: LockPasswordTwotone,
    componentName: "LockPasswordTwotone",
  }
];

export default { LockPasswordBold, LockPasswordBroken, LockPasswordBulk, LockPasswordLinear, LockPasswordOutline, LockPasswordTwotone };
