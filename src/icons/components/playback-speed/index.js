import PlaybackSpeedBold from "./PlaybackSpeedBold";
import PlaybackSpeedBroken from "./PlaybackSpeedBroken";
import PlaybackSpeedBulk from "./PlaybackSpeedBulk";
import PlaybackSpeedLinear from "./PlaybackSpeedLinear";
import PlaybackSpeedOutline from "./PlaybackSpeedOutline";
import PlaybackSpeedTwotone from "./PlaybackSpeedTwotone";

export { PlaybackSpeedBold, PlaybackSpeedBroken, PlaybackSpeedBulk, PlaybackSpeedLinear, PlaybackSpeedOutline, PlaybackSpeedTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "playback-speed-bold",
    Component: PlaybackSpeedBold,
    componentName: "PlaybackSpeedBold",
  },,
  {
    variant: "broken",
    slug: "playback-speed-broken",
    Component: PlaybackSpeedBroken,
    componentName: "PlaybackSpeedBroken",
  },,
  {
    variant: "bulk",
    slug: "playback-speed-bulk",
    Component: PlaybackSpeedBulk,
    componentName: "PlaybackSpeedBulk",
  },,
  {
    variant: "linear",
    slug: "playback-speed-linear",
    Component: PlaybackSpeedLinear,
    componentName: "PlaybackSpeedLinear",
  },,
  {
    variant: "outline",
    slug: "playback-speed-outline",
    Component: PlaybackSpeedOutline,
    componentName: "PlaybackSpeedOutline",
  },,
  {
    variant: "twotone",
    slug: "playback-speed-twotone",
    Component: PlaybackSpeedTwotone,
    componentName: "PlaybackSpeedTwotone",
  }
];

export default { PlaybackSpeedBold, PlaybackSpeedBroken, PlaybackSpeedBulk, PlaybackSpeedLinear, PlaybackSpeedOutline, PlaybackSpeedTwotone };
