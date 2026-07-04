import NotificationRemoveBold from "./NotificationRemoveBold";
import NotificationRemoveBroken from "./NotificationRemoveBroken";
import NotificationRemoveBulk from "./NotificationRemoveBulk";
import NotificationRemoveLinear from "./NotificationRemoveLinear";
import NotificationRemoveOutline from "./NotificationRemoveOutline";
import NotificationRemoveTwotone from "./NotificationRemoveTwotone";

export { NotificationRemoveBold, NotificationRemoveBroken, NotificationRemoveBulk, NotificationRemoveLinear, NotificationRemoveOutline, NotificationRemoveTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "notification-remove-bold",
    Component: NotificationRemoveBold,
    componentName: "NotificationRemoveBold",
  },,
  {
    variant: "broken",
    slug: "notification-remove-broken",
    Component: NotificationRemoveBroken,
    componentName: "NotificationRemoveBroken",
  },,
  {
    variant: "bulk",
    slug: "notification-remove-bulk",
    Component: NotificationRemoveBulk,
    componentName: "NotificationRemoveBulk",
  },,
  {
    variant: "linear",
    slug: "notification-remove-linear",
    Component: NotificationRemoveLinear,
    componentName: "NotificationRemoveLinear",
  },,
  {
    variant: "outline",
    slug: "notification-remove-outline",
    Component: NotificationRemoveOutline,
    componentName: "NotificationRemoveOutline",
  },,
  {
    variant: "twotone",
    slug: "notification-remove-twotone",
    Component: NotificationRemoveTwotone,
    componentName: "NotificationRemoveTwotone",
  }
];

export default { NotificationRemoveBold, NotificationRemoveBroken, NotificationRemoveBulk, NotificationRemoveLinear, NotificationRemoveOutline, NotificationRemoveTwotone };
