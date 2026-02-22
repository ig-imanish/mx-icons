import SecurityCardBold from "./SecurityCardBold";
import SecurityCardBroken from "./SecurityCardBroken";
import SecurityCardBulk from "./SecurityCardBulk";
import SecurityCardLinear from "./SecurityCardLinear";
import SecurityCardOutline from "./SecurityCardOutline";
import SecurityCardTwotone from "./SecurityCardTwotone";

export { SecurityCardBold, SecurityCardBroken, SecurityCardBulk, SecurityCardLinear, SecurityCardOutline, SecurityCardTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "security-card-bold",
    Component: SecurityCardBold,
    componentName: "SecurityCardBold",
  },
  {
    variant: "broken",
    slug: "security-card-broken",
    Component: SecurityCardBroken,
    componentName: "SecurityCardBroken",
  },
  {
    variant: "bulk",
    slug: "security-card-bulk",
    Component: SecurityCardBulk,
    componentName: "SecurityCardBulk",
  },
  {
    variant: "linear",
    slug: "security-card-linear",
    Component: SecurityCardLinear,
    componentName: "SecurityCardLinear",
  },
  {
    variant: "outline",
    slug: "security-card-outline",
    Component: SecurityCardOutline,
    componentName: "SecurityCardOutline",
  },
  {
    variant: "twotone",
    slug: "security-card-twotone",
    Component: SecurityCardTwotone,
    componentName: "SecurityCardTwotone",
  },
];
