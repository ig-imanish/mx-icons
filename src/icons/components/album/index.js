import AlbumBold from "./AlbumBold";
import AlbumBroken from "./AlbumBroken";
import AlbumBulk from "./AlbumBulk";
import AlbumLinear from "./AlbumLinear";
import AlbumOutline from "./AlbumOutline";
import AlbumTwotone from "./AlbumTwotone";

export { AlbumBold, AlbumBroken, AlbumBulk, AlbumLinear, AlbumOutline, AlbumTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "album-bold",
    Component: AlbumBold,
    componentName: "AlbumBold",
  },,
  {
    variant: "broken",
    slug: "album-broken",
    Component: AlbumBroken,
    componentName: "AlbumBroken",
  },,
  {
    variant: "bulk",
    slug: "album-bulk",
    Component: AlbumBulk,
    componentName: "AlbumBulk",
  },,
  {
    variant: "linear",
    slug: "album-linear",
    Component: AlbumLinear,
    componentName: "AlbumLinear",
  },,
  {
    variant: "outline",
    slug: "album-outline",
    Component: AlbumOutline,
    componentName: "AlbumOutline",
  },,
  {
    variant: "twotone",
    slug: "album-twotone",
    Component: AlbumTwotone,
    componentName: "AlbumTwotone",
  }
];

export default { AlbumBold, AlbumBroken, AlbumBulk, AlbumLinear, AlbumOutline, AlbumTwotone };
