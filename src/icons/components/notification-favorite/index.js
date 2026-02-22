import NotificationFavoriteBold from "./NotificationFavoriteBold";
import NotificationFavoriteBroken from "./NotificationFavoriteBroken";
import NotificationFavoriteBulk from "./NotificationFavoriteBulk";
import NotificationFavoriteLinear from "./NotificationFavoriteLinear";
import NotificationFavoriteOutline from "./NotificationFavoriteOutline";
import NotificationFavoriteTwotone from "./NotificationFavoriteTwotone";

export { NotificationFavoriteBold, NotificationFavoriteBroken, NotificationFavoriteBulk, NotificationFavoriteLinear, NotificationFavoriteOutline, NotificationFavoriteTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "notification-favorite-bold",
    Component: NotificationFavoriteBold,
    componentName: "NotificationFavoriteBold",
  },
  {
    variant: "broken",
    slug: "notification-favorite-broken",
    Component: NotificationFavoriteBroken,
    componentName: "NotificationFavoriteBroken",
  },
  {
    variant: "bulk",
    slug: "notification-favorite-bulk",
    Component: NotificationFavoriteBulk,
    componentName: "NotificationFavoriteBulk",
  },
  {
    variant: "linear",
    slug: "notification-favorite-linear",
    Component: NotificationFavoriteLinear,
    componentName: "NotificationFavoriteLinear",
  },
  {
    variant: "outline",
    slug: "notification-favorite-outline",
    Component: NotificationFavoriteOutline,
    componentName: "NotificationFavoriteOutline",
  },
  {
    variant: "twotone",
    slug: "notification-favorite-twotone",
    Component: NotificationFavoriteTwotone,
    componentName: "NotificationFavoriteTwotone",
  },
];
