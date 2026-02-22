import PersonalcardBold from "./PersonalcardBold";
import PersonalcardBroken from "./PersonalcardBroken";
import PersonalcardBulk from "./PersonalcardBulk";
import PersonalcardLinear from "./PersonalcardLinear";
import PersonalcardOutline from "./PersonalcardOutline";
import PersonalcardTwotone from "./PersonalcardTwotone";

export { PersonalcardBold, PersonalcardBroken, PersonalcardBulk, PersonalcardLinear, PersonalcardOutline, PersonalcardTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "personalcard-bold",
    Component: PersonalcardBold,
    componentName: "PersonalcardBold",
  },
  {
    variant: "broken",
    slug: "personalcard-broken",
    Component: PersonalcardBroken,
    componentName: "PersonalcardBroken",
  },
  {
    variant: "bulk",
    slug: "personalcard-bulk",
    Component: PersonalcardBulk,
    componentName: "PersonalcardBulk",
  },
  {
    variant: "linear",
    slug: "personalcard-linear",
    Component: PersonalcardLinear,
    componentName: "PersonalcardLinear",
  },
  {
    variant: "outline",
    slug: "personalcard-outline",
    Component: PersonalcardOutline,
    componentName: "PersonalcardOutline",
  },
  {
    variant: "twotone",
    slug: "personalcard-twotone",
    Component: PersonalcardTwotone,
    componentName: "PersonalcardTwotone",
  },
];
