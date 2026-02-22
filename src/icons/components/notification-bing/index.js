import NotificationBingBold from "./NotificationBingBold";
import NotificationBingBroken from "./NotificationBingBroken";
import NotificationBingBulk from "./NotificationBingBulk";
import NotificationBingLinear from "./NotificationBingLinear";
import NotificationBingOutline from "./NotificationBingOutline";
import NotificationBingTwotone from "./NotificationBingTwotone";

export { NotificationBingBold, NotificationBingBroken, NotificationBingBulk, NotificationBingLinear, NotificationBingOutline, NotificationBingTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "notification-bing-bold",
    Component: NotificationBingBold,
    componentName: "NotificationBingBold",
  },
  {
    variant: "broken",
    slug: "notification-bing-broken",
    Component: NotificationBingBroken,
    componentName: "NotificationBingBroken",
  },
  {
    variant: "bulk",
    slug: "notification-bing-bulk",
    Component: NotificationBingBulk,
    componentName: "NotificationBingBulk",
  },
  {
    variant: "linear",
    slug: "notification-bing-linear",
    Component: NotificationBingLinear,
    componentName: "NotificationBingLinear",
  },
  {
    variant: "outline",
    slug: "notification-bing-outline",
    Component: NotificationBingOutline,
    componentName: "NotificationBingOutline",
  },
  {
    variant: "twotone",
    slug: "notification-bing-twotone",
    Component: NotificationBingTwotone,
    componentName: "NotificationBingTwotone",
  },
];
