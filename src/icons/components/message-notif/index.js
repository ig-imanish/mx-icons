import MessageNotifBold from "./MessageNotifBold";
import MessageNotifBroken from "./MessageNotifBroken";
import MessageNotifBulk from "./MessageNotifBulk";
import MessageNotifLinear from "./MessageNotifLinear";
import MessageNotifOutline from "./MessageNotifOutline";
import MessageNotifTwotone from "./MessageNotifTwotone";

export { MessageNotifBold, MessageNotifBroken, MessageNotifBulk, MessageNotifLinear, MessageNotifOutline, MessageNotifTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "message-notif-bold",
    Component: MessageNotifBold,
    componentName: "MessageNotifBold",
  },
  {
    variant: "broken",
    slug: "message-notif-broken",
    Component: MessageNotifBroken,
    componentName: "MessageNotifBroken",
  },
  {
    variant: "bulk",
    slug: "message-notif-bulk",
    Component: MessageNotifBulk,
    componentName: "MessageNotifBulk",
  },
  {
    variant: "linear",
    slug: "message-notif-linear",
    Component: MessageNotifLinear,
    componentName: "MessageNotifLinear",
  },
  {
    variant: "outline",
    slug: "message-notif-outline",
    Component: MessageNotifOutline,
    componentName: "MessageNotifOutline",
  },
  {
    variant: "twotone",
    slug: "message-notif-twotone",
    Component: MessageNotifTwotone,
    componentName: "MessageNotifTwotone",
  },
];
