import MapPointFavouriteBold from "./MapPointFavouriteBold";
import MapPointFavouriteBroken from "./MapPointFavouriteBroken";
import MapPointFavouriteBulk from "./MapPointFavouriteBulk";
import MapPointFavouriteLinear from "./MapPointFavouriteLinear";
import MapPointFavouriteOutline from "./MapPointFavouriteOutline";
import MapPointFavouriteTwotone from "./MapPointFavouriteTwotone";

export { MapPointFavouriteBold, MapPointFavouriteBroken, MapPointFavouriteBulk, MapPointFavouriteLinear, MapPointFavouriteOutline, MapPointFavouriteTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "map-point-favourite-bold",
    Component: MapPointFavouriteBold,
    componentName: "MapPointFavouriteBold",
  },,
  {
    variant: "broken",
    slug: "map-point-favourite-broken",
    Component: MapPointFavouriteBroken,
    componentName: "MapPointFavouriteBroken",
  },,
  {
    variant: "bulk",
    slug: "map-point-favourite-bulk",
    Component: MapPointFavouriteBulk,
    componentName: "MapPointFavouriteBulk",
  },,
  {
    variant: "linear",
    slug: "map-point-favourite-linear",
    Component: MapPointFavouriteLinear,
    componentName: "MapPointFavouriteLinear",
  },,
  {
    variant: "outline",
    slug: "map-point-favourite-outline",
    Component: MapPointFavouriteOutline,
    componentName: "MapPointFavouriteOutline",
  },,
  {
    variant: "twotone",
    slug: "map-point-favourite-twotone",
    Component: MapPointFavouriteTwotone,
    componentName: "MapPointFavouriteTwotone",
  }
];

export default { MapPointFavouriteBold, MapPointFavouriteBroken, MapPointFavouriteBulk, MapPointFavouriteLinear, MapPointFavouriteOutline, MapPointFavouriteTwotone };
