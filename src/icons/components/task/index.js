import TaskBold from "./TaskBold";
import TaskBroken from "./TaskBroken";
import TaskBulk from "./TaskBulk";
import TaskLinear from "./TaskLinear";
import TaskOutline from "./TaskOutline";
import TaskTwotone from "./TaskTwotone";

export { TaskBold, TaskBroken, TaskBulk, TaskLinear, TaskOutline, TaskTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "task-bold",
    Component: TaskBold,
    componentName: "TaskBold",
  },
  {
    variant: "broken",
    slug: "task-broken",
    Component: TaskBroken,
    componentName: "TaskBroken",
  },
  {
    variant: "bulk",
    slug: "task-bulk",
    Component: TaskBulk,
    componentName: "TaskBulk",
  },
  {
    variant: "linear",
    slug: "task-linear",
    Component: TaskLinear,
    componentName: "TaskLinear",
  },
  {
    variant: "outline",
    slug: "task-outline",
    Component: TaskOutline,
    componentName: "TaskOutline",
  },
  {
    variant: "twotone",
    slug: "task-twotone",
    Component: TaskTwotone,
    componentName: "TaskTwotone",
  },
];
