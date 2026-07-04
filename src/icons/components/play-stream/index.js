import PlayStreamBold from "./PlayStreamBold";
import PlayStreamBroken from "./PlayStreamBroken";
import PlayStreamBulk from "./PlayStreamBulk";
import PlayStreamLinear from "./PlayStreamLinear";
import PlayStreamOutline from "./PlayStreamOutline";
import PlayStreamTwotone from "./PlayStreamTwotone";

export { PlayStreamBold, PlayStreamBroken, PlayStreamBulk, PlayStreamLinear, PlayStreamOutline, PlayStreamTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "play-stream-bold",
    Component: PlayStreamBold,
    componentName: "PlayStreamBold",
  },,
  {
    variant: "broken",
    slug: "play-stream-broken",
    Component: PlayStreamBroken,
    componentName: "PlayStreamBroken",
  },,
  {
    variant: "bulk",
    slug: "play-stream-bulk",
    Component: PlayStreamBulk,
    componentName: "PlayStreamBulk",
  },,
  {
    variant: "linear",
    slug: "play-stream-linear",
    Component: PlayStreamLinear,
    componentName: "PlayStreamLinear",
  },,
  {
    variant: "outline",
    slug: "play-stream-outline",
    Component: PlayStreamOutline,
    componentName: "PlayStreamOutline",
  },,
  {
    variant: "twotone",
    slug: "play-stream-twotone",
    Component: PlayStreamTwotone,
    componentName: "PlayStreamTwotone",
  }
];

export default { PlayStreamBold, PlayStreamBroken, PlayStreamBulk, PlayStreamLinear, PlayStreamOutline, PlayStreamTwotone };
