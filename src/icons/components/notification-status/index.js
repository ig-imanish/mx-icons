import NotificationStatusBold from "./NotificationStatusBold";
import NotificationStatusBroken from "./NotificationStatusBroken";
import NotificationStatusBulk from "./NotificationStatusBulk";
import NotificationStatusLinear from "./NotificationStatusLinear";
import NotificationStatusOutline from "./NotificationStatusOutline";
import NotificationStatusTwotone from "./NotificationStatusTwotone";

export { NotificationStatusBold, NotificationStatusBroken, NotificationStatusBulk, NotificationStatusLinear, NotificationStatusOutline, NotificationStatusTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "notification-status-bold",
    Component: NotificationStatusBold,
    componentName: "NotificationStatusBold",
  },
  {
    variant: "broken",
    slug: "notification-status-broken",
    Component: NotificationStatusBroken,
    componentName: "NotificationStatusBroken",
  },
  {
    variant: "bulk",
    slug: "notification-status-bulk",
    Component: NotificationStatusBulk,
    componentName: "NotificationStatusBulk",
  },
  {
    variant: "linear",
    slug: "notification-status-linear",
    Component: NotificationStatusLinear,
    componentName: "NotificationStatusLinear",
  },
  {
    variant: "outline",
    slug: "notification-status-outline",
    Component: NotificationStatusOutline,
    componentName: "NotificationStatusOutline",
  },
  {
    variant: "twotone",
    slug: "notification-status-twotone",
    Component: NotificationStatusTwotone,
    componentName: "NotificationStatusTwotone",
  },
];
