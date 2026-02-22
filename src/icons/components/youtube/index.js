import YoutubeBold from "./YoutubeBold";
import YoutubeFilled from "./YoutubeFilled";
import YoutubeLinear from "./YoutubeLinear";
import YoutubeTwotone from "./YoutubeTwotone";

export { YoutubeBold, YoutubeFilled, YoutubeLinear, YoutubeTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "youtube-bold",
    Component: YoutubeBold,
    componentName: "YoutubeBold",
  },
  {
    variant: "filled",
    slug: "youtube-filled",
    Component: YoutubeFilled,
    componentName: "YoutubeFilled",
  },
  {
    variant: "linear",
    slug: "youtube-linear",
    Component: YoutubeLinear,
    componentName: "YoutubeLinear",
  },
  {
    variant: "twotone",
    slug: "youtube-twotone",
    Component: YoutubeTwotone,
    componentName: "YoutubeTwotone",
  },
];
