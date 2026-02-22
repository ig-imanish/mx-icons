import DirectNotificationBold from "./DirectNotificationBold";
import DirectNotificationBroken from "./DirectNotificationBroken";
import DirectNotificationBulk from "./DirectNotificationBulk";
import DirectNotificationLinear from "./DirectNotificationLinear";
import DirectNotificationOutline from "./DirectNotificationOutline";
import DirectNotificationTwotone from "./DirectNotificationTwotone";

export { DirectNotificationBold, DirectNotificationBroken, DirectNotificationBulk, DirectNotificationLinear, DirectNotificationOutline, DirectNotificationTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "direct-notification-bold",
    Component: DirectNotificationBold,
    componentName: "DirectNotificationBold",
  },
  {
    variant: "broken",
    slug: "direct-notification-broken",
    Component: DirectNotificationBroken,
    componentName: "DirectNotificationBroken",
  },
  {
    variant: "bulk",
    slug: "direct-notification-bulk",
    Component: DirectNotificationBulk,
    componentName: "DirectNotificationBulk",
  },
  {
    variant: "linear",
    slug: "direct-notification-linear",
    Component: DirectNotificationLinear,
    componentName: "DirectNotificationLinear",
  },
  {
    variant: "outline",
    slug: "direct-notification-outline",
    Component: DirectNotificationOutline,
    componentName: "DirectNotificationOutline",
  },
  {
    variant: "twotone",
    slug: "direct-notification-twotone",
    Component: DirectNotificationTwotone,
    componentName: "DirectNotificationTwotone",
  },
];
