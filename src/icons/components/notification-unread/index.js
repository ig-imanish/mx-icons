import NotificationUnreadBold from "./NotificationUnreadBold";
import NotificationUnreadBroken from "./NotificationUnreadBroken";
import NotificationUnreadBulk from "./NotificationUnreadBulk";
import NotificationUnreadLinear from "./NotificationUnreadLinear";
import NotificationUnreadOutline from "./NotificationUnreadOutline";
import NotificationUnreadTwotone from "./NotificationUnreadTwotone";

export { NotificationUnreadBold, NotificationUnreadBroken, NotificationUnreadBulk, NotificationUnreadLinear, NotificationUnreadOutline, NotificationUnreadTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "notification-unread-bold",
    Component: NotificationUnreadBold,
    componentName: "NotificationUnreadBold",
  },,
  {
    variant: "broken",
    slug: "notification-unread-broken",
    Component: NotificationUnreadBroken,
    componentName: "NotificationUnreadBroken",
  },,
  {
    variant: "bulk",
    slug: "notification-unread-bulk",
    Component: NotificationUnreadBulk,
    componentName: "NotificationUnreadBulk",
  },,
  {
    variant: "linear",
    slug: "notification-unread-linear",
    Component: NotificationUnreadLinear,
    componentName: "NotificationUnreadLinear",
  },,
  {
    variant: "outline",
    slug: "notification-unread-outline",
    Component: NotificationUnreadOutline,
    componentName: "NotificationUnreadOutline",
  },,
  {
    variant: "twotone",
    slug: "notification-unread-twotone",
    Component: NotificationUnreadTwotone,
    componentName: "NotificationUnreadTwotone",
  }
];

export default { NotificationUnreadBold, NotificationUnreadBroken, NotificationUnreadBulk, NotificationUnreadLinear, NotificationUnreadOutline, NotificationUnreadTwotone };
