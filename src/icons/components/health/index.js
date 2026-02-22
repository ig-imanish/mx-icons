import HealthBold from "./HealthBold";
import HealthBroken from "./HealthBroken";
import HealthBulk from "./HealthBulk";
import HealthLinear from "./HealthLinear";
import HealthOutline from "./HealthOutline";
import HealthTwotone from "./HealthTwotone";

export { HealthBold, HealthBroken, HealthBulk, HealthLinear, HealthOutline, HealthTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "health-bold",
    Component: HealthBold,
    componentName: "HealthBold",
  },
  {
    variant: "broken",
    slug: "health-broken",
    Component: HealthBroken,
    componentName: "HealthBroken",
  },
  {
    variant: "bulk",
    slug: "health-bulk",
    Component: HealthBulk,
    componentName: "HealthBulk",
  },
  {
    variant: "linear",
    slug: "health-linear",
    Component: HealthLinear,
    componentName: "HealthLinear",
  },
  {
    variant: "outline",
    slug: "health-outline",
    Component: HealthOutline,
    componentName: "HealthOutline",
  },
  {
    variant: "twotone",
    slug: "health-twotone",
    Component: HealthTwotone,
    componentName: "HealthTwotone",
  },
];
