import LifebuoyBold from "./LifebuoyBold";
import LifebuoyBroken from "./LifebuoyBroken";
import LifebuoyBulk from "./LifebuoyBulk";
import LifebuoyLinear from "./LifebuoyLinear";
import LifebuoyOutline from "./LifebuoyOutline";
import LifebuoyTwotone from "./LifebuoyTwotone";

export { LifebuoyBold, LifebuoyBroken, LifebuoyBulk, LifebuoyLinear, LifebuoyOutline, LifebuoyTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "lifebuoy-bold",
    Component: LifebuoyBold,
    componentName: "LifebuoyBold",
  },
  {
    variant: "broken",
    slug: "lifebuoy-broken",
    Component: LifebuoyBroken,
    componentName: "LifebuoyBroken",
  },
  {
    variant: "bulk",
    slug: "lifebuoy-bulk",
    Component: LifebuoyBulk,
    componentName: "LifebuoyBulk",
  },
  {
    variant: "linear",
    slug: "lifebuoy-linear",
    Component: LifebuoyLinear,
    componentName: "LifebuoyLinear",
  },
  {
    variant: "outline",
    slug: "lifebuoy-outline",
    Component: LifebuoyOutline,
    componentName: "LifebuoyOutline",
  },
  {
    variant: "twotone",
    slug: "lifebuoy-twotone",
    Component: LifebuoyTwotone,
    componentName: "LifebuoyTwotone",
  },
];
