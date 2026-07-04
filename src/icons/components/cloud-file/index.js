import CloudFileBold from "./CloudFileBold";
import CloudFileBroken from "./CloudFileBroken";
import CloudFileBulk from "./CloudFileBulk";
import CloudFileLinear from "./CloudFileLinear";
import CloudFileOutline from "./CloudFileOutline";
import CloudFileTwotone from "./CloudFileTwotone";

export { CloudFileBold, CloudFileBroken, CloudFileBulk, CloudFileLinear, CloudFileOutline, CloudFileTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "cloud-file-bold",
    Component: CloudFileBold,
    componentName: "CloudFileBold",
  },,
  {
    variant: "broken",
    slug: "cloud-file-broken",
    Component: CloudFileBroken,
    componentName: "CloudFileBroken",
  },,
  {
    variant: "bulk",
    slug: "cloud-file-bulk",
    Component: CloudFileBulk,
    componentName: "CloudFileBulk",
  },,
  {
    variant: "linear",
    slug: "cloud-file-linear",
    Component: CloudFileLinear,
    componentName: "CloudFileLinear",
  },,
  {
    variant: "outline",
    slug: "cloud-file-outline",
    Component: CloudFileOutline,
    componentName: "CloudFileOutline",
  },,
  {
    variant: "twotone",
    slug: "cloud-file-twotone",
    Component: CloudFileTwotone,
    componentName: "CloudFileTwotone",
  }
];

export default { CloudFileBold, CloudFileBroken, CloudFileBulk, CloudFileLinear, CloudFileOutline, CloudFileTwotone };
