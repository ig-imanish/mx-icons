import MusicNoteBold from "./MusicNoteBold";
import MusicNoteBroken from "./MusicNoteBroken";
import MusicNoteBulk from "./MusicNoteBulk";
import MusicNoteLinear from "./MusicNoteLinear";
import MusicNoteOutline from "./MusicNoteOutline";
import MusicNoteTwotone from "./MusicNoteTwotone";

export { MusicNoteBold, MusicNoteBroken, MusicNoteBulk, MusicNoteLinear, MusicNoteOutline, MusicNoteTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "music-note-bold",
    Component: MusicNoteBold,
    componentName: "MusicNoteBold",
  },,
  {
    variant: "broken",
    slug: "music-note-broken",
    Component: MusicNoteBroken,
    componentName: "MusicNoteBroken",
  },,
  {
    variant: "bulk",
    slug: "music-note-bulk",
    Component: MusicNoteBulk,
    componentName: "MusicNoteBulk",
  },,
  {
    variant: "linear",
    slug: "music-note-linear",
    Component: MusicNoteLinear,
    componentName: "MusicNoteLinear",
  },,
  {
    variant: "outline",
    slug: "music-note-outline",
    Component: MusicNoteOutline,
    componentName: "MusicNoteOutline",
  },,
  {
    variant: "twotone",
    slug: "music-note-twotone",
    Component: MusicNoteTwotone,
    componentName: "MusicNoteTwotone",
  }
];

export default { MusicNoteBold, MusicNoteBroken, MusicNoteBulk, MusicNoteLinear, MusicNoteOutline, MusicNoteTwotone };
