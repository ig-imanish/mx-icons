import TeacherBold from "./TeacherBold";
import TeacherBroken from "./TeacherBroken";
import TeacherBulk from "./TeacherBulk";
import TeacherLinear from "./TeacherLinear";
import TeacherOutline from "./TeacherOutline";
import TeacherTwotone from "./TeacherTwotone";

export { TeacherBold, TeacherBroken, TeacherBulk, TeacherLinear, TeacherOutline, TeacherTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "teacher-bold",
    Component: TeacherBold,
    componentName: "TeacherBold",
  },
  {
    variant: "broken",
    slug: "teacher-broken",
    Component: TeacherBroken,
    componentName: "TeacherBroken",
  },
  {
    variant: "bulk",
    slug: "teacher-bulk",
    Component: TeacherBulk,
    componentName: "TeacherBulk",
  },
  {
    variant: "linear",
    slug: "teacher-linear",
    Component: TeacherLinear,
    componentName: "TeacherLinear",
  },
  {
    variant: "outline",
    slug: "teacher-outline",
    Component: TeacherOutline,
    componentName: "TeacherOutline",
  },
  {
    variant: "twotone",
    slug: "teacher-twotone",
    Component: TeacherTwotone,
    componentName: "TeacherTwotone",
  },
];
