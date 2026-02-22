import LogoutBold from "./LogoutBold";
import LogoutBroken from "./LogoutBroken";
import LogoutBulk from "./LogoutBulk";
import LogoutLinear from "./LogoutLinear";
import LogoutOutline from "./LogoutOutline";
import LogoutTwotone from "./LogoutTwotone";

export { LogoutBold, LogoutBroken, LogoutBulk, LogoutLinear, LogoutOutline, LogoutTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "logout-bold",
    Component: LogoutBold,
    componentName: "LogoutBold",
  },
  {
    variant: "broken",
    slug: "logout-broken",
    Component: LogoutBroken,
    componentName: "LogoutBroken",
  },
  {
    variant: "bulk",
    slug: "logout-bulk",
    Component: LogoutBulk,
    componentName: "LogoutBulk",
  },
  {
    variant: "linear",
    slug: "logout-linear",
    Component: LogoutLinear,
    componentName: "LogoutLinear",
  },
  {
    variant: "outline",
    slug: "logout-outline",
    Component: LogoutOutline,
    componentName: "LogoutOutline",
  },
  {
    variant: "twotone",
    slug: "logout-twotone",
    Component: LogoutTwotone,
    componentName: "LogoutTwotone",
  },
];
