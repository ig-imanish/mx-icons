import StarSlashBold from "./StarSlashBold";
import StarSlashBroken from "./StarSlashBroken";
import StarSlashBulk from "./StarSlashBulk";
import StarSlashLinear from "./StarSlashLinear";
import StarSlashOutline from "./StarSlashOutline";
import StarSlashTwotone from "./StarSlashTwotone";

export { StarSlashBold, StarSlashBroken, StarSlashBulk, StarSlashLinear, StarSlashOutline, StarSlashTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "star-slash-bold",
    Component: StarSlashBold,
    componentName: "StarSlashBold",
  },
  {
    variant: "broken",
    slug: "star-slash-broken",
    Component: StarSlashBroken,
    componentName: "StarSlashBroken",
  },
  {
    variant: "bulk",
    slug: "star-slash-bulk",
    Component: StarSlashBulk,
    componentName: "StarSlashBulk",
  },
  {
    variant: "linear",
    slug: "star-slash-linear",
    Component: StarSlashLinear,
    componentName: "StarSlashLinear",
  },
  {
    variant: "outline",
    slug: "star-slash-outline",
    Component: StarSlashOutline,
    componentName: "StarSlashOutline",
  },
  {
    variant: "twotone",
    slug: "star-slash-twotone",
    Component: StarSlashTwotone,
    componentName: "StarSlashTwotone",
  },
];
