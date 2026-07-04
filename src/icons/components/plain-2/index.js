import Plain2Bold from "./Plain2Bold";
import Plain2Broken from "./Plain2Broken";
import Plain2Bulk from "./Plain2Bulk";
import Plain2Linear from "./Plain2Linear";
import Plain2Outline from "./Plain2Outline";
import Plain2Twotone from "./Plain2Twotone";

export { Plain2Bold, Plain2Broken, Plain2Bulk, Plain2Linear, Plain2Outline, Plain2Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "plain-2-bold",
    Component: Plain2Bold,
    componentName: "Plain2Bold",
  },,
  {
    variant: "broken",
    slug: "plain-2-broken",
    Component: Plain2Broken,
    componentName: "Plain2Broken",
  },,
  {
    variant: "bulk",
    slug: "plain-2-bulk",
    Component: Plain2Bulk,
    componentName: "Plain2Bulk",
  },,
  {
    variant: "linear",
    slug: "plain-2-linear",
    Component: Plain2Linear,
    componentName: "Plain2Linear",
  },,
  {
    variant: "outline",
    slug: "plain-2-outline",
    Component: Plain2Outline,
    componentName: "Plain2Outline",
  },,
  {
    variant: "twotone",
    slug: "plain-2-twotone",
    Component: Plain2Twotone,
    componentName: "Plain2Twotone",
  }
];

export default { Plain2Bold, Plain2Broken, Plain2Bulk, Plain2Linear, Plain2Outline, Plain2Twotone };
