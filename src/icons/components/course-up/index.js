import CourseUpBold from "./CourseUpBold";
import CourseUpBroken from "./CourseUpBroken";
import CourseUpBulk from "./CourseUpBulk";
import CourseUpLinear from "./CourseUpLinear";
import CourseUpOutline from "./CourseUpOutline";
import CourseUpTwotone from "./CourseUpTwotone";

export { CourseUpBold, CourseUpBroken, CourseUpBulk, CourseUpLinear, CourseUpOutline, CourseUpTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "course-up-bold",
    Component: CourseUpBold,
    componentName: "CourseUpBold",
  },,
  {
    variant: "broken",
    slug: "course-up-broken",
    Component: CourseUpBroken,
    componentName: "CourseUpBroken",
  },,
  {
    variant: "bulk",
    slug: "course-up-bulk",
    Component: CourseUpBulk,
    componentName: "CourseUpBulk",
  },,
  {
    variant: "linear",
    slug: "course-up-linear",
    Component: CourseUpLinear,
    componentName: "CourseUpLinear",
  },,
  {
    variant: "outline",
    slug: "course-up-outline",
    Component: CourseUpOutline,
    componentName: "CourseUpOutline",
  },,
  {
    variant: "twotone",
    slug: "course-up-twotone",
    Component: CourseUpTwotone,
    componentName: "CourseUpTwotone",
  }
];

export default { CourseUpBold, CourseUpBroken, CourseUpBulk, CourseUpLinear, CourseUpOutline, CourseUpTwotone };
