import CourthouseBold from "./CourthouseBold";
import CourthouseBroken from "./CourthouseBroken";
import CourthouseBulk from "./CourthouseBulk";
import CourthouseLinear from "./CourthouseLinear";
import CourthouseOutline from "./CourthouseOutline";
import CourthouseTwotone from "./CourthouseTwotone";

export { CourthouseBold, CourthouseBroken, CourthouseBulk, CourthouseLinear, CourthouseOutline, CourthouseTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "courthouse-bold",
    Component: CourthouseBold,
    componentName: "CourthouseBold",
  },
  {
    variant: "broken",
    slug: "courthouse-broken",
    Component: CourthouseBroken,
    componentName: "CourthouseBroken",
  },
  {
    variant: "bulk",
    slug: "courthouse-bulk",
    Component: CourthouseBulk,
    componentName: "CourthouseBulk",
  },
  {
    variant: "linear",
    slug: "courthouse-linear",
    Component: CourthouseLinear,
    componentName: "CourthouseLinear",
  },
  {
    variant: "outline",
    slug: "courthouse-outline",
    Component: CourthouseOutline,
    componentName: "CourthouseOutline",
  },
  {
    variant: "twotone",
    slug: "courthouse-twotone",
    Component: CourthouseTwotone,
    componentName: "CourthouseTwotone",
  },
];
