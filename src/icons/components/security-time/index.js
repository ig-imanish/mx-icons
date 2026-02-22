import SecurityTimeBold from "./SecurityTimeBold";
import SecurityTimeBroken from "./SecurityTimeBroken";
import SecurityTimeBulk from "./SecurityTimeBulk";
import SecurityTimeLinear from "./SecurityTimeLinear";
import SecurityTimeOutline from "./SecurityTimeOutline";
import SecurityTimeTwotone from "./SecurityTimeTwotone";

export { SecurityTimeBold, SecurityTimeBroken, SecurityTimeBulk, SecurityTimeLinear, SecurityTimeOutline, SecurityTimeTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "security-time-bold",
    Component: SecurityTimeBold,
    componentName: "SecurityTimeBold",
  },
  {
    variant: "broken",
    slug: "security-time-broken",
    Component: SecurityTimeBroken,
    componentName: "SecurityTimeBroken",
  },
  {
    variant: "bulk",
    slug: "security-time-bulk",
    Component: SecurityTimeBulk,
    componentName: "SecurityTimeBulk",
  },
  {
    variant: "linear",
    slug: "security-time-linear",
    Component: SecurityTimeLinear,
    componentName: "SecurityTimeLinear",
  },
  {
    variant: "outline",
    slug: "security-time-outline",
    Component: SecurityTimeOutline,
    componentName: "SecurityTimeOutline",
  },
  {
    variant: "twotone",
    slug: "security-time-twotone",
    Component: SecurityTimeTwotone,
    componentName: "SecurityTimeTwotone",
  },
];
