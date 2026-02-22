import LoginBold from "./LoginBold";
import LoginBroken from "./LoginBroken";
import LoginBulk from "./LoginBulk";
import LoginLinear from "./LoginLinear";
import LoginOutline from "./LoginOutline";
import LoginTwotone from "./LoginTwotone";

export { LoginBold, LoginBroken, LoginBulk, LoginLinear, LoginOutline, LoginTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "login-bold",
    Component: LoginBold,
    componentName: "LoginBold",
  },
  {
    variant: "broken",
    slug: "login-broken",
    Component: LoginBroken,
    componentName: "LoginBroken",
  },
  {
    variant: "bulk",
    slug: "login-bulk",
    Component: LoginBulk,
    componentName: "LoginBulk",
  },
  {
    variant: "linear",
    slug: "login-linear",
    Component: LoginLinear,
    componentName: "LoginLinear",
  },
  {
    variant: "outline",
    slug: "login-outline",
    Component: LoginOutline,
    componentName: "LoginOutline",
  },
  {
    variant: "twotone",
    slug: "login-twotone",
    Component: LoginTwotone,
    componentName: "LoginTwotone",
  },
];
