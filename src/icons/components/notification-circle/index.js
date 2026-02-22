import NotificationCircleBroken from "./NotificationCircleBroken";
import NotificationCircleBulk from "./NotificationCircleBulk";
import NotificationCircleLinear from "./NotificationCircleLinear";
import NotificationCircleOutline from "./NotificationCircleOutline";
import NotificationCircleTwotone from "./NotificationCircleTwotone";

export { NotificationCircleBroken, NotificationCircleBulk, NotificationCircleLinear, NotificationCircleOutline, NotificationCircleTwotone };

export const variants = [
  {
    variant: "broken",
    slug: "notification-circle-broken",
    Component: NotificationCircleBroken,
    componentName: "NotificationCircleBroken",
  },
  {
    variant: "bulk",
    slug: "notification-circle-bulk",
    Component: NotificationCircleBulk,
    componentName: "NotificationCircleBulk",
  },
  {
    variant: "linear",
    slug: "notification-circle-linear",
    Component: NotificationCircleLinear,
    componentName: "NotificationCircleLinear",
  },
  {
    variant: "outline",
    slug: "notification-circle-outline",
    Component: NotificationCircleOutline,
    componentName: "NotificationCircleOutline",
  },
  {
    variant: "twotone",
    slug: "notification-circle-twotone",
    Component: NotificationCircleTwotone,
    componentName: "NotificationCircleTwotone",
  },
];
