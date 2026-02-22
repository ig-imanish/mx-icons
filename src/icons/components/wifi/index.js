import WifiBold from "./WifiBold";
import WifiBroken from "./WifiBroken";
import WifiBulk from "./WifiBulk";
import WifiLinear from "./WifiLinear";
import WifiOutline from "./WifiOutline";
import WifiTwotone from "./WifiTwotone";

export { WifiBold, WifiBroken, WifiBulk, WifiLinear, WifiOutline, WifiTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "wifi-bold",
    Component: WifiBold,
    componentName: "WifiBold",
  },
  {
    variant: "broken",
    slug: "wifi-broken",
    Component: WifiBroken,
    componentName: "WifiBroken",
  },
  {
    variant: "bulk",
    slug: "wifi-bulk",
    Component: WifiBulk,
    componentName: "WifiBulk",
  },
  {
    variant: "linear",
    slug: "wifi-linear",
    Component: WifiLinear,
    componentName: "WifiLinear",
  },
  {
    variant: "outline",
    slug: "wifi-outline",
    Component: WifiOutline,
    componentName: "WifiOutline",
  },
  {
    variant: "twotone",
    slug: "wifi-twotone",
    Component: WifiTwotone,
    componentName: "WifiTwotone",
  },
];
