import PhoneCallingBold from "./PhoneCallingBold";
import PhoneCallingBroken from "./PhoneCallingBroken";
import PhoneCallingBulk from "./PhoneCallingBulk";
import PhoneCallingLinear from "./PhoneCallingLinear";
import PhoneCallingOutline from "./PhoneCallingOutline";
import PhoneCallingTwotone from "./PhoneCallingTwotone";

export { PhoneCallingBold, PhoneCallingBroken, PhoneCallingBulk, PhoneCallingLinear, PhoneCallingOutline, PhoneCallingTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "phone-calling-bold",
    Component: PhoneCallingBold,
    componentName: "PhoneCallingBold",
  },,
  {
    variant: "broken",
    slug: "phone-calling-broken",
    Component: PhoneCallingBroken,
    componentName: "PhoneCallingBroken",
  },,
  {
    variant: "bulk",
    slug: "phone-calling-bulk",
    Component: PhoneCallingBulk,
    componentName: "PhoneCallingBulk",
  },,
  {
    variant: "linear",
    slug: "phone-calling-linear",
    Component: PhoneCallingLinear,
    componentName: "PhoneCallingLinear",
  },,
  {
    variant: "outline",
    slug: "phone-calling-outline",
    Component: PhoneCallingOutline,
    componentName: "PhoneCallingOutline",
  },,
  {
    variant: "twotone",
    slug: "phone-calling-twotone",
    Component: PhoneCallingTwotone,
    componentName: "PhoneCallingTwotone",
  }
];

export default { PhoneCallingBold, PhoneCallingBroken, PhoneCallingBulk, PhoneCallingLinear, PhoneCallingOutline, PhoneCallingTwotone };
