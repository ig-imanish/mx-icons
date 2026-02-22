import GalleryFavoriteBold from "./GalleryFavoriteBold";
import GalleryFavoriteBroken from "./GalleryFavoriteBroken";
import GalleryFavoriteBulk from "./GalleryFavoriteBulk";
import GalleryFavoriteLinear from "./GalleryFavoriteLinear";
import GalleryFavoriteOutline from "./GalleryFavoriteOutline";
import GalleryFavoriteTwotone from "./GalleryFavoriteTwotone";

export { GalleryFavoriteBold, GalleryFavoriteBroken, GalleryFavoriteBulk, GalleryFavoriteLinear, GalleryFavoriteOutline, GalleryFavoriteTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "gallery-favorite-bold",
    Component: GalleryFavoriteBold,
    componentName: "GalleryFavoriteBold",
  },
  {
    variant: "broken",
    slug: "gallery-favorite-broken",
    Component: GalleryFavoriteBroken,
    componentName: "GalleryFavoriteBroken",
  },
  {
    variant: "bulk",
    slug: "gallery-favorite-bulk",
    Component: GalleryFavoriteBulk,
    componentName: "GalleryFavoriteBulk",
  },
  {
    variant: "linear",
    slug: "gallery-favorite-linear",
    Component: GalleryFavoriteLinear,
    componentName: "GalleryFavoriteLinear",
  },
  {
    variant: "outline",
    slug: "gallery-favorite-outline",
    Component: GalleryFavoriteOutline,
    componentName: "GalleryFavoriteOutline",
  },
  {
    variant: "twotone",
    slug: "gallery-favorite-twotone",
    Component: GalleryFavoriteTwotone,
    componentName: "GalleryFavoriteTwotone",
  },
];
