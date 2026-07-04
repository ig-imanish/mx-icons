import GalleryFavouriteBold from "./GalleryFavouriteBold";
import GalleryFavouriteBroken from "./GalleryFavouriteBroken";
import GalleryFavouriteBulk from "./GalleryFavouriteBulk";
import GalleryFavouriteLinear from "./GalleryFavouriteLinear";
import GalleryFavouriteOutline from "./GalleryFavouriteOutline";
import GalleryFavouriteTwotone from "./GalleryFavouriteTwotone";

export { GalleryFavouriteBold, GalleryFavouriteBroken, GalleryFavouriteBulk, GalleryFavouriteLinear, GalleryFavouriteOutline, GalleryFavouriteTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "gallery-favourite-bold",
    Component: GalleryFavouriteBold,
    componentName: "GalleryFavouriteBold",
  },,
  {
    variant: "broken",
    slug: "gallery-favourite-broken",
    Component: GalleryFavouriteBroken,
    componentName: "GalleryFavouriteBroken",
  },,
  {
    variant: "bulk",
    slug: "gallery-favourite-bulk",
    Component: GalleryFavouriteBulk,
    componentName: "GalleryFavouriteBulk",
  },,
  {
    variant: "linear",
    slug: "gallery-favourite-linear",
    Component: GalleryFavouriteLinear,
    componentName: "GalleryFavouriteLinear",
  },,
  {
    variant: "outline",
    slug: "gallery-favourite-outline",
    Component: GalleryFavouriteOutline,
    componentName: "GalleryFavouriteOutline",
  },,
  {
    variant: "twotone",
    slug: "gallery-favourite-twotone",
    Component: GalleryFavouriteTwotone,
    componentName: "GalleryFavouriteTwotone",
  }
];

export default { GalleryFavouriteBold, GalleryFavouriteBroken, GalleryFavouriteBulk, GalleryFavouriteLinear, GalleryFavouriteOutline, GalleryFavouriteTwotone };
