import SmileysBold from "./SmileysBold";
import SmileysBroken from "./SmileysBroken";
import SmileysBulk from "./SmileysBulk";
import SmileysLinear from "./SmileysLinear";
import SmileysOutline from "./SmileysOutline";
import SmileysTwotone from "./SmileysTwotone";

export { SmileysBold, SmileysBroken, SmileysBulk, SmileysLinear, SmileysOutline, SmileysTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "smileys-bold",
    Component: SmileysBold,
    componentName: "SmileysBold",
  },
  {
    variant: "broken",
    slug: "smileys-broken",
    Component: SmileysBroken,
    componentName: "SmileysBroken",
  },
  {
    variant: "bulk",
    slug: "smileys-bulk",
    Component: SmileysBulk,
    componentName: "SmileysBulk",
  },
  {
    variant: "linear",
    slug: "smileys-linear",
    Component: SmileysLinear,
    componentName: "SmileysLinear",
  },
  {
    variant: "outline",
    slug: "smileys-outline",
    Component: SmileysOutline,
    componentName: "SmileysOutline",
  },
  {
    variant: "twotone",
    slug: "smileys-twotone",
    Component: SmileysTwotone,
    componentName: "SmileysTwotone",
  },
];
