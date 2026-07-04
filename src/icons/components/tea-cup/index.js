import TeaCupBold from "./TeaCupBold";
import TeaCupBroken from "./TeaCupBroken";
import TeaCupBulk from "./TeaCupBulk";
import TeaCupLinear from "./TeaCupLinear";
import TeaCupOutline from "./TeaCupOutline";
import TeaCupTwotone from "./TeaCupTwotone";

export { TeaCupBold, TeaCupBroken, TeaCupBulk, TeaCupLinear, TeaCupOutline, TeaCupTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "tea-cup-bold",
    Component: TeaCupBold,
    componentName: "TeaCupBold",
  },,
  {
    variant: "broken",
    slug: "tea-cup-broken",
    Component: TeaCupBroken,
    componentName: "TeaCupBroken",
  },,
  {
    variant: "bulk",
    slug: "tea-cup-bulk",
    Component: TeaCupBulk,
    componentName: "TeaCupBulk",
  },,
  {
    variant: "linear",
    slug: "tea-cup-linear",
    Component: TeaCupLinear,
    componentName: "TeaCupLinear",
  },,
  {
    variant: "outline",
    slug: "tea-cup-outline",
    Component: TeaCupOutline,
    componentName: "TeaCupOutline",
  },,
  {
    variant: "twotone",
    slug: "tea-cup-twotone",
    Component: TeaCupTwotone,
    componentName: "TeaCupTwotone",
  }
];

export default { TeaCupBold, TeaCupBroken, TeaCupBulk, TeaCupLinear, TeaCupOutline, TeaCupTwotone };
