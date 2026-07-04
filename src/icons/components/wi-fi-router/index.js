import WiFiRouterBold from "./WiFiRouterBold";
import WiFiRouterBroken from "./WiFiRouterBroken";
import WiFiRouterBulk from "./WiFiRouterBulk";
import WiFiRouterLinear from "./WiFiRouterLinear";
import WiFiRouterOutline from "./WiFiRouterOutline";
import WiFiRouterTwotone from "./WiFiRouterTwotone";

export { WiFiRouterBold, WiFiRouterBroken, WiFiRouterBulk, WiFiRouterLinear, WiFiRouterOutline, WiFiRouterTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "wi-fi-router-bold",
    Component: WiFiRouterBold,
    componentName: "WiFiRouterBold",
  },,
  {
    variant: "broken",
    slug: "wi-fi-router-broken",
    Component: WiFiRouterBroken,
    componentName: "WiFiRouterBroken",
  },,
  {
    variant: "bulk",
    slug: "wi-fi-router-bulk",
    Component: WiFiRouterBulk,
    componentName: "WiFiRouterBulk",
  },,
  {
    variant: "linear",
    slug: "wi-fi-router-linear",
    Component: WiFiRouterLinear,
    componentName: "WiFiRouterLinear",
  },,
  {
    variant: "outline",
    slug: "wi-fi-router-outline",
    Component: WiFiRouterOutline,
    componentName: "WiFiRouterOutline",
  },,
  {
    variant: "twotone",
    slug: "wi-fi-router-twotone",
    Component: WiFiRouterTwotone,
    componentName: "WiFiRouterTwotone",
  }
];

export default { WiFiRouterBold, WiFiRouterBroken, WiFiRouterBulk, WiFiRouterLinear, WiFiRouterOutline, WiFiRouterTwotone };
