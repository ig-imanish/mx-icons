import HomeWiFiBold from "./HomeWiFiBold";
import HomeWiFiBroken from "./HomeWiFiBroken";
import HomeWiFiBulk from "./HomeWiFiBulk";
import HomeWiFiLinear from "./HomeWiFiLinear";
import HomeWiFiOutline from "./HomeWiFiOutline";
import HomeWiFiTwotone from "./HomeWiFiTwotone";

export { HomeWiFiBold, HomeWiFiBroken, HomeWiFiBulk, HomeWiFiLinear, HomeWiFiOutline, HomeWiFiTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "home-wi-fi-bold",
    Component: HomeWiFiBold,
    componentName: "HomeWiFiBold",
  },,
  {
    variant: "broken",
    slug: "home-wi-fi-broken",
    Component: HomeWiFiBroken,
    componentName: "HomeWiFiBroken",
  },,
  {
    variant: "bulk",
    slug: "home-wi-fi-bulk",
    Component: HomeWiFiBulk,
    componentName: "HomeWiFiBulk",
  },,
  {
    variant: "linear",
    slug: "home-wi-fi-linear",
    Component: HomeWiFiLinear,
    componentName: "HomeWiFiLinear",
  },,
  {
    variant: "outline",
    slug: "home-wi-fi-outline",
    Component: HomeWiFiOutline,
    componentName: "HomeWiFiOutline",
  },,
  {
    variant: "twotone",
    slug: "home-wi-fi-twotone",
    Component: HomeWiFiTwotone,
    componentName: "HomeWiFiTwotone",
  }
];

export default { HomeWiFiBold, HomeWiFiBroken, HomeWiFiBulk, HomeWiFiLinear, HomeWiFiOutline, HomeWiFiTwotone };
