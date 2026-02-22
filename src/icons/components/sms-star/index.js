import SmsStarBold from "./SmsStarBold";
import SmsStarBroken from "./SmsStarBroken";
import SmsStarBulk from "./SmsStarBulk";
import SmsStarLinear from "./SmsStarLinear";
import SmsStarOutline from "./SmsStarOutline";
import SmsStarTwotone from "./SmsStarTwotone";

export { SmsStarBold, SmsStarBroken, SmsStarBulk, SmsStarLinear, SmsStarOutline, SmsStarTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "sms-star-bold",
    Component: SmsStarBold,
    componentName: "SmsStarBold",
  },
  {
    variant: "broken",
    slug: "sms-star-broken",
    Component: SmsStarBroken,
    componentName: "SmsStarBroken",
  },
  {
    variant: "bulk",
    slug: "sms-star-bulk",
    Component: SmsStarBulk,
    componentName: "SmsStarBulk",
  },
  {
    variant: "linear",
    slug: "sms-star-linear",
    Component: SmsStarLinear,
    componentName: "SmsStarLinear",
  },
  {
    variant: "outline",
    slug: "sms-star-outline",
    Component: SmsStarOutline,
    componentName: "SmsStarOutline",
  },
  {
    variant: "twotone",
    slug: "sms-star-twotone",
    Component: SmsStarTwotone,
    componentName: "SmsStarTwotone",
  },
];
