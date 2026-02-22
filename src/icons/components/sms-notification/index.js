import SmsNotificationBold from "./SmsNotificationBold";
import SmsNotificationBroken from "./SmsNotificationBroken";
import SmsNotificationBulk from "./SmsNotificationBulk";
import SmsNotificationLinear from "./SmsNotificationLinear";
import SmsNotificationOutline from "./SmsNotificationOutline";
import SmsNotificationTwotone from "./SmsNotificationTwotone";

export { SmsNotificationBold, SmsNotificationBroken, SmsNotificationBulk, SmsNotificationLinear, SmsNotificationOutline, SmsNotificationTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "sms-notification-bold",
    Component: SmsNotificationBold,
    componentName: "SmsNotificationBold",
  },
  {
    variant: "broken",
    slug: "sms-notification-broken",
    Component: SmsNotificationBroken,
    componentName: "SmsNotificationBroken",
  },
  {
    variant: "bulk",
    slug: "sms-notification-bulk",
    Component: SmsNotificationBulk,
    componentName: "SmsNotificationBulk",
  },
  {
    variant: "linear",
    slug: "sms-notification-linear",
    Component: SmsNotificationLinear,
    componentName: "SmsNotificationLinear",
  },
  {
    variant: "outline",
    slug: "sms-notification-outline",
    Component: SmsNotificationOutline,
    componentName: "SmsNotificationOutline",
  },
  {
    variant: "twotone",
    slug: "sms-notification-twotone",
    Component: SmsNotificationTwotone,
    componentName: "SmsNotificationTwotone",
  },
];
