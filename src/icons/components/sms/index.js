import SmsBold from "./SmsBold";
import SmsBroken from "./SmsBroken";
import SmsBulk from "./SmsBulk";
import SmsLinear from "./SmsLinear";
import SmsOutline from "./SmsOutline";
import SmsTwotone from "./SmsTwotone";

export { SmsBold, SmsBroken, SmsBulk, SmsLinear, SmsOutline, SmsTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "sms-bold",
    Component: SmsBold,
    componentName: "SmsBold",
  },
  {
    variant: "broken",
    slug: "sms-broken",
    Component: SmsBroken,
    componentName: "SmsBroken",
  },
  {
    variant: "bulk",
    slug: "sms-bulk",
    Component: SmsBulk,
    componentName: "SmsBulk",
  },
  {
    variant: "linear",
    slug: "sms-linear",
    Component: SmsLinear,
    componentName: "SmsLinear",
  },
  {
    variant: "outline",
    slug: "sms-outline",
    Component: SmsOutline,
    componentName: "SmsOutline",
  },
  {
    variant: "twotone",
    slug: "sms-twotone",
    Component: SmsTwotone,
    componentName: "SmsTwotone",
  },
];
