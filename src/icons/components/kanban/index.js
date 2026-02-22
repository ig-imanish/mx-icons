import KanbanBold from "./KanbanBold";
import KanbanBulk from "./KanbanBulk";
import KanbanLinear from "./KanbanLinear";
import KanbanOutline from "./KanbanOutline";
import KanbanTwotone from "./KanbanTwotone";

export { KanbanBold, KanbanBulk, KanbanLinear, KanbanOutline, KanbanTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "kanban-bold",
    Component: KanbanBold,
    componentName: "KanbanBold",
  },
  {
    variant: "bulk",
    slug: "kanban-bulk",
    Component: KanbanBulk,
    componentName: "KanbanBulk",
  },
  {
    variant: "linear",
    slug: "kanban-linear",
    Component: KanbanLinear,
    componentName: "KanbanLinear",
  },
  {
    variant: "outline",
    slug: "kanban-outline",
    Component: KanbanOutline,
    componentName: "KanbanOutline",
  },
  {
    variant: "twotone",
    slug: "kanban-twotone",
    Component: KanbanTwotone,
    componentName: "KanbanTwotone",
  },
];
