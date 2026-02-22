import GroupBulk from "./GroupBulk";
import GroupLinear from "./GroupLinear";

export { GroupBulk, GroupLinear };

export const variants = [
  {
    variant: "bulk",
    slug: "group-bulk",
    Component: GroupBulk,
    componentName: "GroupBulk",
  },
  {
    variant: "linear",
    slug: "group-linear",
    Component: GroupLinear,
    componentName: "GroupLinear",
  },
];
