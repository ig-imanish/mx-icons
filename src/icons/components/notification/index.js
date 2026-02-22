import NotificationBold from "./NotificationBold";
import NotificationBroken from "./NotificationBroken";
import NotificationBulk from "./NotificationBulk";
import NotificationLinear from "./NotificationLinear";
import NotificationOutline from "./NotificationOutline";
import NotificationTwotone from "./NotificationTwotone";

export { NotificationBold, NotificationBroken, NotificationBulk, NotificationLinear, NotificationOutline, NotificationTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "notification-bold",
    Component: NotificationBold,
    componentName: "NotificationBold",
  },
  {
    variant: "broken",
    slug: "notification-broken",
    Component: NotificationBroken,
    componentName: "NotificationBroken",
  },
  {
    variant: "bulk",
    slug: "notification-bulk",
    Component: NotificationBulk,
    componentName: "NotificationBulk",
  },
  {
    variant: "linear",
    slug: "notification-linear",
    Component: NotificationLinear,
    componentName: "NotificationLinear",
  },
  {
    variant: "outline",
    slug: "notification-outline",
    Component: NotificationOutline,
    componentName: "NotificationOutline",
  },
  {
    variant: "twotone",
    slug: "notification-twotone",
    Component: NotificationTwotone,
    componentName: "NotificationTwotone",
  },
];
