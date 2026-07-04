import NotificationUnreadLinesBold from "./NotificationUnreadLinesBold";
import NotificationUnreadLinesBroken from "./NotificationUnreadLinesBroken";
import NotificationUnreadLinesBulk from "./NotificationUnreadLinesBulk";
import NotificationUnreadLinesLinear from "./NotificationUnreadLinesLinear";
import NotificationUnreadLinesOutline from "./NotificationUnreadLinesOutline";
import NotificationUnreadLinesTwotone from "./NotificationUnreadLinesTwotone";

export { NotificationUnreadLinesBold, NotificationUnreadLinesBroken, NotificationUnreadLinesBulk, NotificationUnreadLinesLinear, NotificationUnreadLinesOutline, NotificationUnreadLinesTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "notification-unread-lines-bold",
    Component: NotificationUnreadLinesBold,
    componentName: "NotificationUnreadLinesBold",
  },,
  {
    variant: "broken",
    slug: "notification-unread-lines-broken",
    Component: NotificationUnreadLinesBroken,
    componentName: "NotificationUnreadLinesBroken",
  },,
  {
    variant: "bulk",
    slug: "notification-unread-lines-bulk",
    Component: NotificationUnreadLinesBulk,
    componentName: "NotificationUnreadLinesBulk",
  },,
  {
    variant: "linear",
    slug: "notification-unread-lines-linear",
    Component: NotificationUnreadLinesLinear,
    componentName: "NotificationUnreadLinesLinear",
  },,
  {
    variant: "outline",
    slug: "notification-unread-lines-outline",
    Component: NotificationUnreadLinesOutline,
    componentName: "NotificationUnreadLinesOutline",
  },,
  {
    variant: "twotone",
    slug: "notification-unread-lines-twotone",
    Component: NotificationUnreadLinesTwotone,
    componentName: "NotificationUnreadLinesTwotone",
  }
];

export default { NotificationUnreadLinesBold, NotificationUnreadLinesBroken, NotificationUnreadLinesBulk, NotificationUnreadLinesLinear, NotificationUnreadLinesOutline, NotificationUnreadLinesTwotone };
