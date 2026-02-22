import AwardBold from "./AwardBold";
import AwardBroken from "./AwardBroken";
import AwardBulk from "./AwardBulk";
import AwardLinear from "./AwardLinear";
import AwardOutline from "./AwardOutline";
import AwardTwotone from "./AwardTwotone";

export { AwardBold, AwardBroken, AwardBulk, AwardLinear, AwardOutline, AwardTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "award-bold",
    Component: AwardBold,
    componentName: "AwardBold",
  },
  {
    variant: "broken",
    slug: "award-broken",
    Component: AwardBroken,
    componentName: "AwardBroken",
  },
  {
    variant: "bulk",
    slug: "award-bulk",
    Component: AwardBulk,
    componentName: "AwardBulk",
  },
  {
    variant: "linear",
    slug: "award-linear",
    Component: AwardLinear,
    componentName: "AwardLinear",
  },
  {
    variant: "outline",
    slug: "award-outline",
    Component: AwardOutline,
    componentName: "AwardOutline",
  },
  {
    variant: "twotone",
    slug: "award-twotone",
    Component: AwardTwotone,
    componentName: "AwardTwotone",
  },
];
