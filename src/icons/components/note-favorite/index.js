import NoteFavoriteBold from "./NoteFavoriteBold";
import NoteFavoriteBroken from "./NoteFavoriteBroken";
import NoteFavoriteBulk from "./NoteFavoriteBulk";
import NoteFavoriteLinear from "./NoteFavoriteLinear";
import NoteFavoriteOutline from "./NoteFavoriteOutline";
import NoteFavoriteTwotone from "./NoteFavoriteTwotone";

export { NoteFavoriteBold, NoteFavoriteBroken, NoteFavoriteBulk, NoteFavoriteLinear, NoteFavoriteOutline, NoteFavoriteTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "note-favorite-bold",
    Component: NoteFavoriteBold,
    componentName: "NoteFavoriteBold",
  },
  {
    variant: "broken",
    slug: "note-favorite-broken",
    Component: NoteFavoriteBroken,
    componentName: "NoteFavoriteBroken",
  },
  {
    variant: "bulk",
    slug: "note-favorite-bulk",
    Component: NoteFavoriteBulk,
    componentName: "NoteFavoriteBulk",
  },
  {
    variant: "linear",
    slug: "note-favorite-linear",
    Component: NoteFavoriteLinear,
    componentName: "NoteFavoriteLinear",
  },
  {
    variant: "outline",
    slug: "note-favorite-outline",
    Component: NoteFavoriteOutline,
    componentName: "NoteFavoriteOutline",
  },
  {
    variant: "twotone",
    slug: "note-favorite-twotone",
    Component: NoteFavoriteTwotone,
    componentName: "NoteFavoriteTwotone",
  },
];
