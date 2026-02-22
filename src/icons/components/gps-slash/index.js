import GpsSlashBold from "./GpsSlashBold";
import GpsSlashBroken from "./GpsSlashBroken";
import GpsSlashBulk from "./GpsSlashBulk";
import GpsSlashLinear from "./GpsSlashLinear";
import GpsSlashOutline from "./GpsSlashOutline";
import GpsSlashTwotone from "./GpsSlashTwotone";

export { GpsSlashBold, GpsSlashBroken, GpsSlashBulk, GpsSlashLinear, GpsSlashOutline, GpsSlashTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "gps-slash-bold",
    Component: GpsSlashBold,
    componentName: "GpsSlashBold",
  },
  {
    variant: "broken",
    slug: "gps-slash-broken",
    Component: GpsSlashBroken,
    componentName: "GpsSlashBroken",
  },
  {
    variant: "bulk",
    slug: "gps-slash-bulk",
    Component: GpsSlashBulk,
    componentName: "GpsSlashBulk",
  },
  {
    variant: "linear",
    slug: "gps-slash-linear",
    Component: GpsSlashLinear,
    componentName: "GpsSlashLinear",
  },
  {
    variant: "outline",
    slug: "gps-slash-outline",
    Component: GpsSlashOutline,
    componentName: "GpsSlashOutline",
  },
  {
    variant: "twotone",
    slug: "gps-slash-twotone",
    Component: GpsSlashTwotone,
    componentName: "GpsSlashTwotone",
  },
];
