import ItCodeBold from "./ItCodeBold";
import ItCodeBroken from "./ItCodeBroken";
import ItCodeBulk from "./ItCodeBulk";
import ItCodeLinear from "./ItCodeLinear";
import ItCodeOutline from "./ItCodeOutline";
import ItCodeTwotone from "./ItCodeTwotone";

export { ItCodeBold, ItCodeBroken, ItCodeBulk, ItCodeLinear, ItCodeOutline, ItCodeTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "it-code-bold",
    Component: ItCodeBold,
    componentName: "ItCodeBold",
  },,
  {
    variant: "broken",
    slug: "it-code-broken",
    Component: ItCodeBroken,
    componentName: "ItCodeBroken",
  },,
  {
    variant: "bulk",
    slug: "it-code-bulk",
    Component: ItCodeBulk,
    componentName: "ItCodeBulk",
  },,
  {
    variant: "linear",
    slug: "it-code-linear",
    Component: ItCodeLinear,
    componentName: "ItCodeLinear",
  },,
  {
    variant: "outline",
    slug: "it-code-outline",
    Component: ItCodeOutline,
    componentName: "ItCodeOutline",
  },,
  {
    variant: "twotone",
    slug: "it-code-twotone",
    Component: ItCodeTwotone,
    componentName: "ItCodeTwotone",
  }
];

export default { ItCodeBold, ItCodeBroken, ItCodeBulk, ItCodeLinear, ItCodeOutline, ItCodeTwotone };
