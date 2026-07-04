import StructureBold from "./StructureBold";
import StructureBroken from "./StructureBroken";
import StructureBulk from "./StructureBulk";
import StructureLinear from "./StructureLinear";
import StructureOutline from "./StructureOutline";
import StructureTwotone from "./StructureTwotone";

export { StructureBold, StructureBroken, StructureBulk, StructureLinear, StructureOutline, StructureTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "structure-bold",
    Component: StructureBold,
    componentName: "StructureBold",
  },,
  {
    variant: "broken",
    slug: "structure-broken",
    Component: StructureBroken,
    componentName: "StructureBroken",
  },,
  {
    variant: "bulk",
    slug: "structure-bulk",
    Component: StructureBulk,
    componentName: "StructureBulk",
  },,
  {
    variant: "linear",
    slug: "structure-linear",
    Component: StructureLinear,
    componentName: "StructureLinear",
  },,
  {
    variant: "outline",
    slug: "structure-outline",
    Component: StructureOutline,
    componentName: "StructureOutline",
  },,
  {
    variant: "twotone",
    slug: "structure-twotone",
    Component: StructureTwotone,
    componentName: "StructureTwotone",
  }
];

export default { StructureBold, StructureBroken, StructureBulk, StructureLinear, StructureOutline, StructureTwotone };
