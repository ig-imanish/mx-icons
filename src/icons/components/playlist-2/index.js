import Playlist2Bold from "./Playlist2Bold";
import Playlist2Broken from "./Playlist2Broken";
import Playlist2Bulk from "./Playlist2Bulk";
import Playlist2Linear from "./Playlist2Linear";
import Playlist2Outline from "./Playlist2Outline";
import Playlist2Twotone from "./Playlist2Twotone";

export { Playlist2Bold, Playlist2Broken, Playlist2Bulk, Playlist2Linear, Playlist2Outline, Playlist2Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "playlist-2-bold",
    Component: Playlist2Bold,
    componentName: "Playlist2Bold",
  },,
  {
    variant: "broken",
    slug: "playlist-2-broken",
    Component: Playlist2Broken,
    componentName: "Playlist2Broken",
  },,
  {
    variant: "bulk",
    slug: "playlist-2-bulk",
    Component: Playlist2Bulk,
    componentName: "Playlist2Bulk",
  },,
  {
    variant: "linear",
    slug: "playlist-2-linear",
    Component: Playlist2Linear,
    componentName: "Playlist2Linear",
  },,
  {
    variant: "outline",
    slug: "playlist-2-outline",
    Component: Playlist2Outline,
    componentName: "Playlist2Outline",
  },,
  {
    variant: "twotone",
    slug: "playlist-2-twotone",
    Component: Playlist2Twotone,
    componentName: "Playlist2Twotone",
  }
];

export default { Playlist2Bold, Playlist2Broken, Playlist2Bulk, Playlist2Linear, Playlist2Outline, Playlist2Twotone };
