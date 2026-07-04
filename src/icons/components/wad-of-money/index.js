import WadOfMoneyBold from "./WadOfMoneyBold";
import WadOfMoneyBroken from "./WadOfMoneyBroken";
import WadOfMoneyBulk from "./WadOfMoneyBulk";
import WadOfMoneyLinear from "./WadOfMoneyLinear";
import WadOfMoneyOutline from "./WadOfMoneyOutline";
import WadOfMoneyTwotone from "./WadOfMoneyTwotone";

export { WadOfMoneyBold, WadOfMoneyBroken, WadOfMoneyBulk, WadOfMoneyLinear, WadOfMoneyOutline, WadOfMoneyTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "wad-of-money-bold",
    Component: WadOfMoneyBold,
    componentName: "WadOfMoneyBold",
  },,
  {
    variant: "broken",
    slug: "wad-of-money-broken",
    Component: WadOfMoneyBroken,
    componentName: "WadOfMoneyBroken",
  },,
  {
    variant: "bulk",
    slug: "wad-of-money-bulk",
    Component: WadOfMoneyBulk,
    componentName: "WadOfMoneyBulk",
  },,
  {
    variant: "linear",
    slug: "wad-of-money-linear",
    Component: WadOfMoneyLinear,
    componentName: "WadOfMoneyLinear",
  },,
  {
    variant: "outline",
    slug: "wad-of-money-outline",
    Component: WadOfMoneyOutline,
    componentName: "WadOfMoneyOutline",
  },,
  {
    variant: "twotone",
    slug: "wad-of-money-twotone",
    Component: WadOfMoneyTwotone,
    componentName: "WadOfMoneyTwotone",
  }
];

export default { WadOfMoneyBold, WadOfMoneyBroken, WadOfMoneyBulk, WadOfMoneyLinear, WadOfMoneyOutline, WadOfMoneyTwotone };
