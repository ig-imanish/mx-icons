import AudioSquareBold from "./AudioSquareBold";
import AudioSquareBroken from "./AudioSquareBroken";
import AudioSquareBulk from "./AudioSquareBulk";
import AudioSquareLinear from "./AudioSquareLinear";
import AudioSquareOutline from "./AudioSquareOutline";
import AudioSquareTwotone from "./AudioSquareTwotone";

export { AudioSquareBold, AudioSquareBroken, AudioSquareBulk, AudioSquareLinear, AudioSquareOutline, AudioSquareTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "audio-square-bold",
    Component: AudioSquareBold,
    componentName: "AudioSquareBold",
  },
  {
    variant: "broken",
    slug: "audio-square-broken",
    Component: AudioSquareBroken,
    componentName: "AudioSquareBroken",
  },
  {
    variant: "bulk",
    slug: "audio-square-bulk",
    Component: AudioSquareBulk,
    componentName: "AudioSquareBulk",
  },
  {
    variant: "linear",
    slug: "audio-square-linear",
    Component: AudioSquareLinear,
    componentName: "AudioSquareLinear",
  },
  {
    variant: "outline",
    slug: "audio-square-outline",
    Component: AudioSquareOutline,
    componentName: "AudioSquareOutline",
  },
  {
    variant: "twotone",
    slug: "audio-square-twotone",
    Component: AudioSquareTwotone,
    componentName: "AudioSquareTwotone",
  },
];
