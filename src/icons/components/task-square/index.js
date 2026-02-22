import TaskSquareBold from "./TaskSquareBold";
import TaskSquareBroken from "./TaskSquareBroken";
import TaskSquareBulk from "./TaskSquareBulk";
import TaskSquareLinear from "./TaskSquareLinear";
import TaskSquareOutline from "./TaskSquareOutline";
import TaskSquareTwotone from "./TaskSquareTwotone";

export { TaskSquareBold, TaskSquareBroken, TaskSquareBulk, TaskSquareLinear, TaskSquareOutline, TaskSquareTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "task-square-bold",
    Component: TaskSquareBold,
    componentName: "TaskSquareBold",
  },
  {
    variant: "broken",
    slug: "task-square-broken",
    Component: TaskSquareBroken,
    componentName: "TaskSquareBroken",
  },
  {
    variant: "bulk",
    slug: "task-square-bulk",
    Component: TaskSquareBulk,
    componentName: "TaskSquareBulk",
  },
  {
    variant: "linear",
    slug: "task-square-linear",
    Component: TaskSquareLinear,
    componentName: "TaskSquareLinear",
  },
  {
    variant: "outline",
    slug: "task-square-outline",
    Component: TaskSquareOutline,
    componentName: "TaskSquareOutline",
  },
  {
    variant: "twotone",
    slug: "task-square-twotone",
    Component: TaskSquareTwotone,
    componentName: "TaskSquareTwotone",
  },
];
