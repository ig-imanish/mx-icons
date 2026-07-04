import TurntableMusicNoteBold from "./TurntableMusicNoteBold";
import TurntableMusicNoteBroken from "./TurntableMusicNoteBroken";
import TurntableMusicNoteBulk from "./TurntableMusicNoteBulk";
import TurntableMusicNoteLinear from "./TurntableMusicNoteLinear";
import TurntableMusicNoteOutline from "./TurntableMusicNoteOutline";
import TurntableMusicNoteTwotone from "./TurntableMusicNoteTwotone";

export { TurntableMusicNoteBold, TurntableMusicNoteBroken, TurntableMusicNoteBulk, TurntableMusicNoteLinear, TurntableMusicNoteOutline, TurntableMusicNoteTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "turntable-music-note-bold",
    Component: TurntableMusicNoteBold,
    componentName: "TurntableMusicNoteBold",
  },,
  {
    variant: "broken",
    slug: "turntable-music-note-broken",
    Component: TurntableMusicNoteBroken,
    componentName: "TurntableMusicNoteBroken",
  },,
  {
    variant: "bulk",
    slug: "turntable-music-note-bulk",
    Component: TurntableMusicNoteBulk,
    componentName: "TurntableMusicNoteBulk",
  },,
  {
    variant: "linear",
    slug: "turntable-music-note-linear",
    Component: TurntableMusicNoteLinear,
    componentName: "TurntableMusicNoteLinear",
  },,
  {
    variant: "outline",
    slug: "turntable-music-note-outline",
    Component: TurntableMusicNoteOutline,
    componentName: "TurntableMusicNoteOutline",
  },,
  {
    variant: "twotone",
    slug: "turntable-music-note-twotone",
    Component: TurntableMusicNoteTwotone,
    componentName: "TurntableMusicNoteTwotone",
  }
];

export default { TurntableMusicNoteBold, TurntableMusicNoteBroken, TurntableMusicNoteBulk, TurntableMusicNoteLinear, TurntableMusicNoteOutline, TurntableMusicNoteTwotone };
