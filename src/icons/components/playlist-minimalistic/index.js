import PlaylistMinimalisticBold from "./PlaylistMinimalisticBold";
import PlaylistMinimalisticBroken from "./PlaylistMinimalisticBroken";
import PlaylistMinimalisticBulk from "./PlaylistMinimalisticBulk";
import PlaylistMinimalisticLinear from "./PlaylistMinimalisticLinear";
import PlaylistMinimalisticOutline from "./PlaylistMinimalisticOutline";
import PlaylistMinimalisticTwotone from "./PlaylistMinimalisticTwotone";

export { PlaylistMinimalisticBold, PlaylistMinimalisticBroken, PlaylistMinimalisticBulk, PlaylistMinimalisticLinear, PlaylistMinimalisticOutline, PlaylistMinimalisticTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "playlist-minimalistic-bold",
    Component: PlaylistMinimalisticBold,
    componentName: "PlaylistMinimalisticBold",
  },,
  {
    variant: "broken",
    slug: "playlist-minimalistic-broken",
    Component: PlaylistMinimalisticBroken,
    componentName: "PlaylistMinimalisticBroken",
  },,
  {
    variant: "bulk",
    slug: "playlist-minimalistic-bulk",
    Component: PlaylistMinimalisticBulk,
    componentName: "PlaylistMinimalisticBulk",
  },,
  {
    variant: "linear",
    slug: "playlist-minimalistic-linear",
    Component: PlaylistMinimalisticLinear,
    componentName: "PlaylistMinimalisticLinear",
  },,
  {
    variant: "outline",
    slug: "playlist-minimalistic-outline",
    Component: PlaylistMinimalisticOutline,
    componentName: "PlaylistMinimalisticOutline",
  },,
  {
    variant: "twotone",
    slug: "playlist-minimalistic-twotone",
    Component: PlaylistMinimalisticTwotone,
    componentName: "PlaylistMinimalisticTwotone",
  }
];

export default { PlaylistMinimalisticBold, PlaylistMinimalisticBroken, PlaylistMinimalisticBulk, PlaylistMinimalisticLinear, PlaylistMinimalisticOutline, PlaylistMinimalisticTwotone };
