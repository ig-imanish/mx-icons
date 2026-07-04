import MusicNote2Bold from "./MusicNote2Bold";
import MusicNote2Broken from "./MusicNote2Broken";
import MusicNote2Bulk from "./MusicNote2Bulk";
import MusicNote2Linear from "./MusicNote2Linear";
import MusicNote2Outline from "./MusicNote2Outline";
import MusicNote2Twotone from "./MusicNote2Twotone";

export { MusicNote2Bold, MusicNote2Broken, MusicNote2Bulk, MusicNote2Linear, MusicNote2Outline, MusicNote2Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "music-note-2-bold",
    Component: MusicNote2Bold,
    componentName: "MusicNote2Bold",
  },,
  {
    variant: "broken",
    slug: "music-note-2-broken",
    Component: MusicNote2Broken,
    componentName: "MusicNote2Broken",
  },,
  {
    variant: "bulk",
    slug: "music-note-2-bulk",
    Component: MusicNote2Bulk,
    componentName: "MusicNote2Bulk",
  },,
  {
    variant: "linear",
    slug: "music-note-2-linear",
    Component: MusicNote2Linear,
    componentName: "MusicNote2Linear",
  },,
  {
    variant: "outline",
    slug: "music-note-2-outline",
    Component: MusicNote2Outline,
    componentName: "MusicNote2Outline",
  },,
  {
    variant: "twotone",
    slug: "music-note-2-twotone",
    Component: MusicNote2Twotone,
    componentName: "MusicNote2Twotone",
  }
];

export default { MusicNote2Bold, MusicNote2Broken, MusicNote2Bulk, MusicNote2Linear, MusicNote2Outline, MusicNote2Twotone };
