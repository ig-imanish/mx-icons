import Plain3Bold from "./Plain3Bold";
import Plain3Broken from "./Plain3Broken";
import Plain3Bulk from "./Plain3Bulk";
import Plain3Linear from "./Plain3Linear";
import Plain3Outline from "./Plain3Outline";
import Plain3Twotone from "./Plain3Twotone";

export { Plain3Bold, Plain3Broken, Plain3Bulk, Plain3Linear, Plain3Outline, Plain3Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "plain-3-bold",
    Component: Plain3Bold,
    componentName: "Plain3Bold",
  },,
  {
    variant: "broken",
    slug: "plain-3-broken",
    Component: Plain3Broken,
    componentName: "Plain3Broken",
  },,
  {
    variant: "bulk",
    slug: "plain-3-bulk",
    Component: Plain3Bulk,
    componentName: "Plain3Bulk",
  },,
  {
    variant: "linear",
    slug: "plain-3-linear",
    Component: Plain3Linear,
    componentName: "Plain3Linear",
  },,
  {
    variant: "outline",
    slug: "plain-3-outline",
    Component: Plain3Outline,
    componentName: "Plain3Outline",
  },,
  {
    variant: "twotone",
    slug: "plain-3-twotone",
    Component: Plain3Twotone,
    componentName: "Plain3Twotone",
  }
];

export default { Plain3Bold, Plain3Broken, Plain3Bulk, Plain3Linear, Plain3Outline, Plain3Twotone };
