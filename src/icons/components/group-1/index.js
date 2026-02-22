import Group1Bulk from "./Group1Bulk";
import Group1Linear from "./Group1Linear";

export { Group1Bulk, Group1Linear };

export const variants = [
  {
    variant: "bulk",
    slug: "group1-bulk",
    Component: Group1Bulk,
    componentName: "Group1Bulk",
  },
  {
    variant: "linear",
    slug: "group1-linear",
    Component: Group1Linear,
    componentName: "Group1Linear",
  },
];
