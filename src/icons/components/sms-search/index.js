import SmsSearchBold from "./SmsSearchBold";
import SmsSearchBroken from "./SmsSearchBroken";
import SmsSearchBulk from "./SmsSearchBulk";
import SmsSearchLinear from "./SmsSearchLinear";
import SmsSearchOutline from "./SmsSearchOutline";
import SmsSearchTwotone from "./SmsSearchTwotone";

export { SmsSearchBold, SmsSearchBroken, SmsSearchBulk, SmsSearchLinear, SmsSearchOutline, SmsSearchTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "sms-search-bold",
    Component: SmsSearchBold,
    componentName: "SmsSearchBold",
  },
  {
    variant: "broken",
    slug: "sms-search-broken",
    Component: SmsSearchBroken,
    componentName: "SmsSearchBroken",
  },
  {
    variant: "bulk",
    slug: "sms-search-bulk",
    Component: SmsSearchBulk,
    componentName: "SmsSearchBulk",
  },
  {
    variant: "linear",
    slug: "sms-search-linear",
    Component: SmsSearchLinear,
    componentName: "SmsSearchLinear",
  },
  {
    variant: "outline",
    slug: "sms-search-outline",
    Component: SmsSearchOutline,
    componentName: "SmsSearchOutline",
  },
  {
    variant: "twotone",
    slug: "sms-search-twotone",
    Component: SmsSearchTwotone,
    componentName: "SmsSearchTwotone",
  },
];
