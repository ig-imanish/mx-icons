import MessageFavoriteBold from "./MessageFavoriteBold";
import MessageFavoriteBroken from "./MessageFavoriteBroken";
import MessageFavoriteBulk from "./MessageFavoriteBulk";
import MessageFavoriteLinear from "./MessageFavoriteLinear";
import MessageFavoriteOutline from "./MessageFavoriteOutline";
import MessageFavoriteTwotone from "./MessageFavoriteTwotone";

export { MessageFavoriteBold, MessageFavoriteBroken, MessageFavoriteBulk, MessageFavoriteLinear, MessageFavoriteOutline, MessageFavoriteTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "message-favorite-bold",
    Component: MessageFavoriteBold,
    componentName: "MessageFavoriteBold",
  },
  {
    variant: "broken",
    slug: "message-favorite-broken",
    Component: MessageFavoriteBroken,
    componentName: "MessageFavoriteBroken",
  },
  {
    variant: "bulk",
    slug: "message-favorite-bulk",
    Component: MessageFavoriteBulk,
    componentName: "MessageFavoriteBulk",
  },
  {
    variant: "linear",
    slug: "message-favorite-linear",
    Component: MessageFavoriteLinear,
    componentName: "MessageFavoriteLinear",
  },
  {
    variant: "outline",
    slug: "message-favorite-outline",
    Component: MessageFavoriteOutline,
    componentName: "MessageFavoriteOutline",
  },
  {
    variant: "twotone",
    slug: "message-favorite-twotone",
    Component: MessageFavoriteTwotone,
    componentName: "MessageFavoriteTwotone",
  },
];
