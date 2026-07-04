import ItCommandBold from "./ItCommandBold";
import ItCommandBroken from "./ItCommandBroken";
import ItCommandBulk from "./ItCommandBulk";
import ItCommandLinear from "./ItCommandLinear";
import ItCommandOutline from "./ItCommandOutline";
import ItCommandTwotone from "./ItCommandTwotone";

export { ItCommandBold, ItCommandBroken, ItCommandBulk, ItCommandLinear, ItCommandOutline, ItCommandTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "it-command-bold",
    Component: ItCommandBold,
    componentName: "ItCommandBold",
  },,
  {
    variant: "broken",
    slug: "it-command-broken",
    Component: ItCommandBroken,
    componentName: "ItCommandBroken",
  },,
  {
    variant: "bulk",
    slug: "it-command-bulk",
    Component: ItCommandBulk,
    componentName: "ItCommandBulk",
  },,
  {
    variant: "linear",
    slug: "it-command-linear",
    Component: ItCommandLinear,
    componentName: "ItCommandLinear",
  },,
  {
    variant: "outline",
    slug: "it-command-outline",
    Component: ItCommandOutline,
    componentName: "ItCommandOutline",
  },,
  {
    variant: "twotone",
    slug: "it-command-twotone",
    Component: ItCommandTwotone,
    componentName: "ItCommandTwotone",
  }
];

export default { ItCommandBold, ItCommandBroken, ItCommandBulk, ItCommandLinear, ItCommandOutline, ItCommandTwotone };
