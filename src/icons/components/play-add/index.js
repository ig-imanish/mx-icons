import PlayAddBold from "./PlayAddBold";
import PlayAddBroken from "./PlayAddBroken";
import PlayAddBulk from "./PlayAddBulk";
import PlayAddLinear from "./PlayAddLinear";
import PlayAddOutline from "./PlayAddOutline";
import PlayAddTwotone from "./PlayAddTwotone";

export { PlayAddBold, PlayAddBroken, PlayAddBulk, PlayAddLinear, PlayAddOutline, PlayAddTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "play-add-bold",
    Component: PlayAddBold,
    componentName: "PlayAddBold",
  },
  {
    variant: "broken",
    slug: "play-add-broken",
    Component: PlayAddBroken,
    componentName: "PlayAddBroken",
  },
  {
    variant: "bulk",
    slug: "play-add-bulk",
    Component: PlayAddBulk,
    componentName: "PlayAddBulk",
  },
  {
    variant: "linear",
    slug: "play-add-linear",
    Component: PlayAddLinear,
    componentName: "PlayAddLinear",
  },
  {
    variant: "outline",
    slug: "play-add-outline",
    Component: PlayAddOutline,
    componentName: "PlayAddOutline",
  },
  {
    variant: "twotone",
    slug: "play-add-twotone",
    Component: PlayAddTwotone,
    componentName: "PlayAddTwotone",
  },
];
