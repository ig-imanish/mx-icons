import WinRarBold from "./WinRarBold";
import WinRarBroken from "./WinRarBroken";
import WinRarBulk from "./WinRarBulk";
import WinRarLinear from "./WinRarLinear";
import WinRarOutline from "./WinRarOutline";
import WinRarTwotone from "./WinRarTwotone";

export { WinRarBold, WinRarBroken, WinRarBulk, WinRarLinear, WinRarOutline, WinRarTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "win-rar-bold",
    Component: WinRarBold,
    componentName: "WinRarBold",
  },,
  {
    variant: "broken",
    slug: "win-rar-broken",
    Component: WinRarBroken,
    componentName: "WinRarBroken",
  },,
  {
    variant: "bulk",
    slug: "win-rar-bulk",
    Component: WinRarBulk,
    componentName: "WinRarBulk",
  },,
  {
    variant: "linear",
    slug: "win-rar-linear",
    Component: WinRarLinear,
    componentName: "WinRarLinear",
  },,
  {
    variant: "outline",
    slug: "win-rar-outline",
    Component: WinRarOutline,
    componentName: "WinRarOutline",
  },,
  {
    variant: "twotone",
    slug: "win-rar-twotone",
    Component: WinRarTwotone,
    componentName: "WinRarTwotone",
  }
];

export default { WinRarBold, WinRarBroken, WinRarBulk, WinRarLinear, WinRarOutline, WinRarTwotone };
