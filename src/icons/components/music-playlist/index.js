import MusicPlaylistBold from "./MusicPlaylistBold";
import MusicPlaylistBroken from "./MusicPlaylistBroken";
import MusicPlaylistBulk from "./MusicPlaylistBulk";
import MusicPlaylistLinear from "./MusicPlaylistLinear";
import MusicPlaylistOutline from "./MusicPlaylistOutline";
import MusicPlaylistTwotone from "./MusicPlaylistTwotone";

export { MusicPlaylistBold, MusicPlaylistBroken, MusicPlaylistBulk, MusicPlaylistLinear, MusicPlaylistOutline, MusicPlaylistTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "music-playlist-bold",
    Component: MusicPlaylistBold,
    componentName: "MusicPlaylistBold",
  },
  {
    variant: "broken",
    slug: "music-playlist-broken",
    Component: MusicPlaylistBroken,
    componentName: "MusicPlaylistBroken",
  },
  {
    variant: "bulk",
    slug: "music-playlist-bulk",
    Component: MusicPlaylistBulk,
    componentName: "MusicPlaylistBulk",
  },
  {
    variant: "linear",
    slug: "music-playlist-linear",
    Component: MusicPlaylistLinear,
    componentName: "MusicPlaylistLinear",
  },
  {
    variant: "outline",
    slug: "music-playlist-outline",
    Component: MusicPlaylistOutline,
    componentName: "MusicPlaylistOutline",
  },
  {
    variant: "twotone",
    slug: "music-playlist-twotone",
    Component: MusicPlaylistTwotone,
    componentName: "MusicPlaylistTwotone",
  },
];
