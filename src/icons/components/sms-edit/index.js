import SmsEditBold from "./SmsEditBold";
import SmsEditBroken from "./SmsEditBroken";
import SmsEditBulk from "./SmsEditBulk";
import SmsEditLinear from "./SmsEditLinear";
import SmsEditOutline from "./SmsEditOutline";
import SmsEditTwotone from "./SmsEditTwotone";

export { SmsEditBold, SmsEditBroken, SmsEditBulk, SmsEditLinear, SmsEditOutline, SmsEditTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "sms-edit-bold",
    Component: SmsEditBold,
    componentName: "SmsEditBold",
  },
  {
    variant: "broken",
    slug: "sms-edit-broken",
    Component: SmsEditBroken,
    componentName: "SmsEditBroken",
  },
  {
    variant: "bulk",
    slug: "sms-edit-bulk",
    Component: SmsEditBulk,
    componentName: "SmsEditBulk",
  },
  {
    variant: "linear",
    slug: "sms-edit-linear",
    Component: SmsEditLinear,
    componentName: "SmsEditLinear",
  },
  {
    variant: "outline",
    slug: "sms-edit-outline",
    Component: SmsEditOutline,
    componentName: "SmsEditOutline",
  },
  {
    variant: "twotone",
    slug: "sms-edit-twotone",
    Component: SmsEditTwotone,
    componentName: "SmsEditTwotone",
  },
];
