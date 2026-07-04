import MusicNotesBold from "./MusicNotesBold";
import MusicNotesBroken from "./MusicNotesBroken";
import MusicNotesBulk from "./MusicNotesBulk";
import MusicNotesLinear from "./MusicNotesLinear";
import MusicNotesOutline from "./MusicNotesOutline";
import MusicNotesTwotone from "./MusicNotesTwotone";

export { MusicNotesBold, MusicNotesBroken, MusicNotesBulk, MusicNotesLinear, MusicNotesOutline, MusicNotesTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "music-notes-bold",
    Component: MusicNotesBold,
    componentName: "MusicNotesBold",
  },,
  {
    variant: "broken",
    slug: "music-notes-broken",
    Component: MusicNotesBroken,
    componentName: "MusicNotesBroken",
  },,
  {
    variant: "bulk",
    slug: "music-notes-bulk",
    Component: MusicNotesBulk,
    componentName: "MusicNotesBulk",
  },,
  {
    variant: "linear",
    slug: "music-notes-linear",
    Component: MusicNotesLinear,
    componentName: "MusicNotesLinear",
  },,
  {
    variant: "outline",
    slug: "music-notes-outline",
    Component: MusicNotesOutline,
    componentName: "MusicNotesOutline",
  },,
  {
    variant: "twotone",
    slug: "music-notes-twotone",
    Component: MusicNotesTwotone,
    componentName: "MusicNotesTwotone",
  }
];

export default { MusicNotesBold, MusicNotesBroken, MusicNotesBulk, MusicNotesLinear, MusicNotesOutline, MusicNotesTwotone };
