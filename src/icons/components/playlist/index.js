import PlaylistBold from "./PlaylistBold";
import PlaylistBroken from "./PlaylistBroken";
import PlaylistBulk from "./PlaylistBulk";
import PlaylistLinear from "./PlaylistLinear";
import PlaylistOutline from "./PlaylistOutline";
import PlaylistTwotone from "./PlaylistTwotone";

export { PlaylistBold, PlaylistBroken, PlaylistBulk, PlaylistLinear, PlaylistOutline, PlaylistTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "playlist-bold",
    Component: PlaylistBold,
    componentName: "PlaylistBold",
  },,
  {
    variant: "broken",
    slug: "playlist-broken",
    Component: PlaylistBroken,
    componentName: "PlaylistBroken",
  },,
  {
    variant: "bulk",
    slug: "playlist-bulk",
    Component: PlaylistBulk,
    componentName: "PlaylistBulk",
  },,
  {
    variant: "linear",
    slug: "playlist-linear",
    Component: PlaylistLinear,
    componentName: "PlaylistLinear",
  },,
  {
    variant: "outline",
    slug: "playlist-outline",
    Component: PlaylistOutline,
    componentName: "PlaylistOutline",
  },,
  {
    variant: "twotone",
    slug: "playlist-twotone",
    Component: PlaylistTwotone,
    componentName: "PlaylistTwotone",
  }
];

export default { PlaylistBold, PlaylistBroken, PlaylistBulk, PlaylistLinear, PlaylistOutline, PlaylistTwotone };
