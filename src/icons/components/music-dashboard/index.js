import MusicDashboardBold from "./MusicDashboardBold";
import MusicDashboardBroken from "./MusicDashboardBroken";
import MusicDashboardBulk from "./MusicDashboardBulk";
import MusicDashboardLinear from "./MusicDashboardLinear";
import MusicDashboardOutline from "./MusicDashboardOutline";
import MusicDashboardTwotone from "./MusicDashboardTwotone";

export { MusicDashboardBold, MusicDashboardBroken, MusicDashboardBulk, MusicDashboardLinear, MusicDashboardOutline, MusicDashboardTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "music-dashboard-bold",
    Component: MusicDashboardBold,
    componentName: "MusicDashboardBold",
  },
  {
    variant: "broken",
    slug: "music-dashboard-broken",
    Component: MusicDashboardBroken,
    componentName: "MusicDashboardBroken",
  },
  {
    variant: "bulk",
    slug: "music-dashboard-bulk",
    Component: MusicDashboardBulk,
    componentName: "MusicDashboardBulk",
  },
  {
    variant: "linear",
    slug: "music-dashboard-linear",
    Component: MusicDashboardLinear,
    componentName: "MusicDashboardLinear",
  },
  {
    variant: "outline",
    slug: "music-dashboard-outline",
    Component: MusicDashboardOutline,
    componentName: "MusicDashboardOutline",
  },
  {
    variant: "twotone",
    slug: "music-dashboard-twotone",
    Component: MusicDashboardTwotone,
    componentName: "MusicDashboardTwotone",
  },
];
