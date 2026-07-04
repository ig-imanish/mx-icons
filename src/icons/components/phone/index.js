import PhoneBold from "./PhoneBold";
import PhoneBroken from "./PhoneBroken";
import PhoneBulk from "./PhoneBulk";
import PhoneLinear from "./PhoneLinear";
import PhoneOutline from "./PhoneOutline";
import PhoneTwotone from "./PhoneTwotone";

export { PhoneBold, PhoneBroken, PhoneBulk, PhoneLinear, PhoneOutline, PhoneTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "phone-bold",
    Component: PhoneBold,
    componentName: "PhoneBold",
  },,
  {
    variant: "broken",
    slug: "phone-broken",
    Component: PhoneBroken,
    componentName: "PhoneBroken",
  },,
  {
    variant: "bulk",
    slug: "phone-bulk",
    Component: PhoneBulk,
    componentName: "PhoneBulk",
  },,
  {
    variant: "linear",
    slug: "phone-linear",
    Component: PhoneLinear,
    componentName: "PhoneLinear",
  },,
  {
    variant: "outline",
    slug: "phone-outline",
    Component: PhoneOutline,
    componentName: "PhoneOutline",
  },,
  {
    variant: "twotone",
    slug: "phone-twotone",
    Component: PhoneTwotone,
    componentName: "PhoneTwotone",
  }
];

export default { PhoneBold, PhoneBroken, PhoneBulk, PhoneLinear, PhoneOutline, PhoneTwotone };
