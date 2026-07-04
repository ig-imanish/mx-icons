import JarOfPillsBold from "./JarOfPillsBold";
import JarOfPillsBroken from "./JarOfPillsBroken";
import JarOfPillsBulk from "./JarOfPillsBulk";
import JarOfPillsLinear from "./JarOfPillsLinear";
import JarOfPillsOutline from "./JarOfPillsOutline";
import JarOfPillsTwotone from "./JarOfPillsTwotone";

export { JarOfPillsBold, JarOfPillsBroken, JarOfPillsBulk, JarOfPillsLinear, JarOfPillsOutline, JarOfPillsTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "jar-of-pills-bold",
    Component: JarOfPillsBold,
    componentName: "JarOfPillsBold",
  },,
  {
    variant: "broken",
    slug: "jar-of-pills-broken",
    Component: JarOfPillsBroken,
    componentName: "JarOfPillsBroken",
  },,
  {
    variant: "bulk",
    slug: "jar-of-pills-bulk",
    Component: JarOfPillsBulk,
    componentName: "JarOfPillsBulk",
  },,
  {
    variant: "linear",
    slug: "jar-of-pills-linear",
    Component: JarOfPillsLinear,
    componentName: "JarOfPillsLinear",
  },,
  {
    variant: "outline",
    slug: "jar-of-pills-outline",
    Component: JarOfPillsOutline,
    componentName: "JarOfPillsOutline",
  },,
  {
    variant: "twotone",
    slug: "jar-of-pills-twotone",
    Component: JarOfPillsTwotone,
    componentName: "JarOfPillsTwotone",
  }
];

export default { JarOfPillsBold, JarOfPillsBroken, JarOfPillsBulk, JarOfPillsLinear, JarOfPillsOutline, JarOfPillsTwotone };
