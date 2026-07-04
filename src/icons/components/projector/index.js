import ProjectorBold from "./ProjectorBold";
import ProjectorBroken from "./ProjectorBroken";
import ProjectorBulk from "./ProjectorBulk";
import ProjectorLinear from "./ProjectorLinear";
import ProjectorOutline from "./ProjectorOutline";
import ProjectorTwotone from "./ProjectorTwotone";

export { ProjectorBold, ProjectorBroken, ProjectorBulk, ProjectorLinear, ProjectorOutline, ProjectorTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "projector-bold",
    Component: ProjectorBold,
    componentName: "ProjectorBold",
  },,
  {
    variant: "broken",
    slug: "projector-broken",
    Component: ProjectorBroken,
    componentName: "ProjectorBroken",
  },,
  {
    variant: "bulk",
    slug: "projector-bulk",
    Component: ProjectorBulk,
    componentName: "ProjectorBulk",
  },,
  {
    variant: "linear",
    slug: "projector-linear",
    Component: ProjectorLinear,
    componentName: "ProjectorLinear",
  },,
  {
    variant: "outline",
    slug: "projector-outline",
    Component: ProjectorOutline,
    componentName: "ProjectorOutline",
  },,
  {
    variant: "twotone",
    slug: "projector-twotone",
    Component: ProjectorTwotone,
    componentName: "ProjectorTwotone",
  }
];

export default { ProjectorBold, ProjectorBroken, ProjectorBulk, ProjectorLinear, ProjectorOutline, ProjectorTwotone };
