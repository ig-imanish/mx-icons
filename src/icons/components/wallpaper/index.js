import WallpaperBold from "./WallpaperBold";
import WallpaperBroken from "./WallpaperBroken";
import WallpaperBulk from "./WallpaperBulk";
import WallpaperLinear from "./WallpaperLinear";
import WallpaperOutline from "./WallpaperOutline";
import WallpaperTwotone from "./WallpaperTwotone";

export { WallpaperBold, WallpaperBroken, WallpaperBulk, WallpaperLinear, WallpaperOutline, WallpaperTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "wallpaper-bold",
    Component: WallpaperBold,
    componentName: "WallpaperBold",
  },,
  {
    variant: "broken",
    slug: "wallpaper-broken",
    Component: WallpaperBroken,
    componentName: "WallpaperBroken",
  },,
  {
    variant: "bulk",
    slug: "wallpaper-bulk",
    Component: WallpaperBulk,
    componentName: "WallpaperBulk",
  },,
  {
    variant: "linear",
    slug: "wallpaper-linear",
    Component: WallpaperLinear,
    componentName: "WallpaperLinear",
  },,
  {
    variant: "outline",
    slug: "wallpaper-outline",
    Component: WallpaperOutline,
    componentName: "WallpaperOutline",
  },,
  {
    variant: "twotone",
    slug: "wallpaper-twotone",
    Component: WallpaperTwotone,
    componentName: "WallpaperTwotone",
  }
];

export default { WallpaperBold, WallpaperBroken, WallpaperBulk, WallpaperLinear, WallpaperOutline, WallpaperTwotone };
