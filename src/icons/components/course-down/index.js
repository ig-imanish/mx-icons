import CourseDownBold from "./CourseDownBold";
import CourseDownBroken from "./CourseDownBroken";
import CourseDownBulk from "./CourseDownBulk";
import CourseDownLinear from "./CourseDownLinear";
import CourseDownOutline from "./CourseDownOutline";
import CourseDownTwotone from "./CourseDownTwotone";

export { CourseDownBold, CourseDownBroken, CourseDownBulk, CourseDownLinear, CourseDownOutline, CourseDownTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "course-down-bold",
    Component: CourseDownBold,
    componentName: "CourseDownBold",
  },,
  {
    variant: "broken",
    slug: "course-down-broken",
    Component: CourseDownBroken,
    componentName: "CourseDownBroken",
  },,
  {
    variant: "bulk",
    slug: "course-down-bulk",
    Component: CourseDownBulk,
    componentName: "CourseDownBulk",
  },,
  {
    variant: "linear",
    slug: "course-down-linear",
    Component: CourseDownLinear,
    componentName: "CourseDownLinear",
  },,
  {
    variant: "outline",
    slug: "course-down-outline",
    Component: CourseDownOutline,
    componentName: "CourseDownOutline",
  },,
  {
    variant: "twotone",
    slug: "course-down-twotone",
    Component: CourseDownTwotone,
    componentName: "CourseDownTwotone",
  }
];

export default { CourseDownBold, CourseDownBroken, CourseDownBulk, CourseDownLinear, CourseDownOutline, CourseDownTwotone };
