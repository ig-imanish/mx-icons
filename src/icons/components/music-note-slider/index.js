import MusicNoteSliderBold from "./MusicNoteSliderBold";
import MusicNoteSliderBroken from "./MusicNoteSliderBroken";
import MusicNoteSliderBulk from "./MusicNoteSliderBulk";
import MusicNoteSliderLinear from "./MusicNoteSliderLinear";
import MusicNoteSliderOutline from "./MusicNoteSliderOutline";
import MusicNoteSliderTwotone from "./MusicNoteSliderTwotone";

export { MusicNoteSliderBold, MusicNoteSliderBroken, MusicNoteSliderBulk, MusicNoteSliderLinear, MusicNoteSliderOutline, MusicNoteSliderTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "music-note-slider-bold",
    Component: MusicNoteSliderBold,
    componentName: "MusicNoteSliderBold",
  },,
  {
    variant: "broken",
    slug: "music-note-slider-broken",
    Component: MusicNoteSliderBroken,
    componentName: "MusicNoteSliderBroken",
  },,
  {
    variant: "bulk",
    slug: "music-note-slider-bulk",
    Component: MusicNoteSliderBulk,
    componentName: "MusicNoteSliderBulk",
  },,
  {
    variant: "linear",
    slug: "music-note-slider-linear",
    Component: MusicNoteSliderLinear,
    componentName: "MusicNoteSliderLinear",
  },,
  {
    variant: "outline",
    slug: "music-note-slider-outline",
    Component: MusicNoteSliderOutline,
    componentName: "MusicNoteSliderOutline",
  },,
  {
    variant: "twotone",
    slug: "music-note-slider-twotone",
    Component: MusicNoteSliderTwotone,
    componentName: "MusicNoteSliderTwotone",
  }
];

export default { MusicNoteSliderBold, MusicNoteSliderBroken, MusicNoteSliderBulk, MusicNoteSliderLinear, MusicNoteSliderOutline, MusicNoteSliderTwotone };
