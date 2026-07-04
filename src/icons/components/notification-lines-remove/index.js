import NotificationLinesRemoveBold from "./NotificationLinesRemoveBold";
import NotificationLinesRemoveBroken from "./NotificationLinesRemoveBroken";
import NotificationLinesRemoveBulk from "./NotificationLinesRemoveBulk";
import NotificationLinesRemoveLinear from "./NotificationLinesRemoveLinear";
import NotificationLinesRemoveOutline from "./NotificationLinesRemoveOutline";
import NotificationLinesRemoveTwotone from "./NotificationLinesRemoveTwotone";

export { NotificationLinesRemoveBold, NotificationLinesRemoveBroken, NotificationLinesRemoveBulk, NotificationLinesRemoveLinear, NotificationLinesRemoveOutline, NotificationLinesRemoveTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "notification-lines-remove-bold",
    Component: NotificationLinesRemoveBold,
    componentName: "NotificationLinesRemoveBold",
  },,
  {
    variant: "broken",
    slug: "notification-lines-remove-broken",
    Component: NotificationLinesRemoveBroken,
    componentName: "NotificationLinesRemoveBroken",
  },,
  {
    variant: "bulk",
    slug: "notification-lines-remove-bulk",
    Component: NotificationLinesRemoveBulk,
    componentName: "NotificationLinesRemoveBulk",
  },,
  {
    variant: "linear",
    slug: "notification-lines-remove-linear",
    Component: NotificationLinesRemoveLinear,
    componentName: "NotificationLinesRemoveLinear",
  },,
  {
    variant: "outline",
    slug: "notification-lines-remove-outline",
    Component: NotificationLinesRemoveOutline,
    componentName: "NotificationLinesRemoveOutline",
  },,
  {
    variant: "twotone",
    slug: "notification-lines-remove-twotone",
    Component: NotificationLinesRemoveTwotone,
    componentName: "NotificationLinesRemoveTwotone",
  }
];

export default { NotificationLinesRemoveBold, NotificationLinesRemoveBroken, NotificationLinesRemoveBulk, NotificationLinesRemoveLinear, NotificationLinesRemoveOutline, NotificationLinesRemoveTwotone };
