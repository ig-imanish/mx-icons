import MusicNote4Bold from "./MusicNote4Bold";
import MusicNote4Broken from "./MusicNote4Broken";
import MusicNote4Bulk from "./MusicNote4Bulk";
import MusicNote4Linear from "./MusicNote4Linear";
import MusicNote4Outline from "./MusicNote4Outline";
import MusicNote4Twotone from "./MusicNote4Twotone";

export { MusicNote4Bold, MusicNote4Broken, MusicNote4Bulk, MusicNote4Linear, MusicNote4Outline, MusicNote4Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "music-note-4-bold",
    Component: MusicNote4Bold,
    componentName: "MusicNote4Bold",
  },,
  {
    variant: "broken",
    slug: "music-note-4-broken",
    Component: MusicNote4Broken,
    componentName: "MusicNote4Broken",
  },,
  {
    variant: "bulk",
    slug: "music-note-4-bulk",
    Component: MusicNote4Bulk,
    componentName: "MusicNote4Bulk",
  },,
  {
    variant: "linear",
    slug: "music-note-4-linear",
    Component: MusicNote4Linear,
    componentName: "MusicNote4Linear",
  },,
  {
    variant: "outline",
    slug: "music-note-4-outline",
    Component: MusicNote4Outline,
    componentName: "MusicNote4Outline",
  },,
  {
    variant: "twotone",
    slug: "music-note-4-twotone",
    Component: MusicNote4Twotone,
    componentName: "MusicNote4Twotone",
  }
];

export default { MusicNote4Bold, MusicNote4Broken, MusicNote4Bulk, MusicNote4Linear, MusicNote4Outline, MusicNote4Twotone };
