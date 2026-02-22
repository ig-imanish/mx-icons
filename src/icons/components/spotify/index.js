import SpotifyFilled from "./SpotifyFilled";
import SpotifyTwotone from "./SpotifyTwotone";

export { SpotifyFilled, SpotifyTwotone };

export const variants = [
  {
    variant: "filled",
    slug: "spotify-filled",
    Component: SpotifyFilled,
    componentName: "SpotifyFilled",
  },
  {
    variant: "twotone",
    slug: "spotify-twotone",
    Component: SpotifyTwotone,
    componentName: "SpotifyTwotone",
  },
];
