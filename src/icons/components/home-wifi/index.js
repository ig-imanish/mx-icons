import HomeWifiBold from "./HomeWifiBold";
import HomeWifiBroken from "./HomeWifiBroken";
import HomeWifiBulk from "./HomeWifiBulk";
import HomeWifiLinear from "./HomeWifiLinear";
import HomeWifiOutline from "./HomeWifiOutline";
import HomeWifiTwotone from "./HomeWifiTwotone";

export { HomeWifiBold, HomeWifiBroken, HomeWifiBulk, HomeWifiLinear, HomeWifiOutline, HomeWifiTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "home-wifi-bold",
    Component: HomeWifiBold,
    componentName: "HomeWifiBold",
  },
  {
    variant: "broken",
    slug: "home-wifi-broken",
    Component: HomeWifiBroken,
    componentName: "HomeWifiBroken",
  },
  {
    variant: "bulk",
    slug: "home-wifi-bulk",
    Component: HomeWifiBulk,
    componentName: "HomeWifiBulk",
  },
  {
    variant: "linear",
    slug: "home-wifi-linear",
    Component: HomeWifiLinear,
    componentName: "HomeWifiLinear",
  },
  {
    variant: "outline",
    slug: "home-wifi-outline",
    Component: HomeWifiOutline,
    componentName: "HomeWifiOutline",
  },
  {
    variant: "twotone",
    slug: "home-wifi-twotone",
    Component: HomeWifiTwotone,
    componentName: "HomeWifiTwotone",
  },
];
