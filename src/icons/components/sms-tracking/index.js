import SmsTrackingBold from "./SmsTrackingBold";
import SmsTrackingBroken from "./SmsTrackingBroken";
import SmsTrackingBulk from "./SmsTrackingBulk";
import SmsTrackingLinear from "./SmsTrackingLinear";
import SmsTrackingOutline from "./SmsTrackingOutline";
import SmsTrackingTwotone from "./SmsTrackingTwotone";

export { SmsTrackingBold, SmsTrackingBroken, SmsTrackingBulk, SmsTrackingLinear, SmsTrackingOutline, SmsTrackingTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "sms-tracking-bold",
    Component: SmsTrackingBold,
    componentName: "SmsTrackingBold",
  },
  {
    variant: "broken",
    slug: "sms-tracking-broken",
    Component: SmsTrackingBroken,
    componentName: "SmsTrackingBroken",
  },
  {
    variant: "bulk",
    slug: "sms-tracking-bulk",
    Component: SmsTrackingBulk,
    componentName: "SmsTrackingBulk",
  },
  {
    variant: "linear",
    slug: "sms-tracking-linear",
    Component: SmsTrackingLinear,
    componentName: "SmsTrackingLinear",
  },
  {
    variant: "outline",
    slug: "sms-tracking-outline",
    Component: SmsTrackingOutline,
    componentName: "SmsTrackingOutline",
  },
  {
    variant: "twotone",
    slug: "sms-tracking-twotone",
    Component: SmsTrackingTwotone,
    componentName: "SmsTrackingTwotone",
  },
];
