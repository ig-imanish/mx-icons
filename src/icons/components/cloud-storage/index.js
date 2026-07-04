import CloudStorageBold from "./CloudStorageBold";
import CloudStorageBroken from "./CloudStorageBroken";
import CloudStorageBulk from "./CloudStorageBulk";
import CloudStorageLinear from "./CloudStorageLinear";
import CloudStorageOutline from "./CloudStorageOutline";
import CloudStorageTwotone from "./CloudStorageTwotone";

export { CloudStorageBold, CloudStorageBroken, CloudStorageBulk, CloudStorageLinear, CloudStorageOutline, CloudStorageTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "cloud-storage-bold",
    Component: CloudStorageBold,
    componentName: "CloudStorageBold",
  },,
  {
    variant: "broken",
    slug: "cloud-storage-broken",
    Component: CloudStorageBroken,
    componentName: "CloudStorageBroken",
  },,
  {
    variant: "bulk",
    slug: "cloud-storage-bulk",
    Component: CloudStorageBulk,
    componentName: "CloudStorageBulk",
  },,
  {
    variant: "linear",
    slug: "cloud-storage-linear",
    Component: CloudStorageLinear,
    componentName: "CloudStorageLinear",
  },,
  {
    variant: "outline",
    slug: "cloud-storage-outline",
    Component: CloudStorageOutline,
    componentName: "CloudStorageOutline",
  },,
  {
    variant: "twotone",
    slug: "cloud-storage-twotone",
    Component: CloudStorageTwotone,
    componentName: "CloudStorageTwotone",
  }
];

export default { CloudStorageBold, CloudStorageBroken, CloudStorageBulk, CloudStorageLinear, CloudStorageOutline, CloudStorageTwotone };
