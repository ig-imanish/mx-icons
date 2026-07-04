import IPhoneBold from "./IPhoneBold";
import IPhoneBroken from "./IPhoneBroken";
import IPhoneBulk from "./IPhoneBulk";
import IPhoneLinear from "./IPhoneLinear";
import IPhoneOutline from "./IPhoneOutline";
import IPhoneTwotone from "./IPhoneTwotone";

export { IPhoneBold, IPhoneBroken, IPhoneBulk, IPhoneLinear, IPhoneOutline, IPhoneTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "i-phone-bold",
    Component: IPhoneBold,
    componentName: "IPhoneBold",
  },,
  {
    variant: "broken",
    slug: "i-phone-broken",
    Component: IPhoneBroken,
    componentName: "IPhoneBroken",
  },,
  {
    variant: "bulk",
    slug: "i-phone-bulk",
    Component: IPhoneBulk,
    componentName: "IPhoneBulk",
  },,
  {
    variant: "linear",
    slug: "i-phone-linear",
    Component: IPhoneLinear,
    componentName: "IPhoneLinear",
  },,
  {
    variant: "outline",
    slug: "i-phone-outline",
    Component: IPhoneOutline,
    componentName: "IPhoneOutline",
  },,
  {
    variant: "twotone",
    slug: "i-phone-twotone",
    Component: IPhoneTwotone,
    componentName: "IPhoneTwotone",
  }
];

export default { IPhoneBold, IPhoneBroken, IPhoneBulk, IPhoneLinear, IPhoneOutline, IPhoneTwotone };
