import TestTubeBold from "./TestTubeBold";
import TestTubeBroken from "./TestTubeBroken";
import TestTubeBulk from "./TestTubeBulk";
import TestTubeLinear from "./TestTubeLinear";
import TestTubeOutline from "./TestTubeOutline";
import TestTubeTwotone from "./TestTubeTwotone";

export { TestTubeBold, TestTubeBroken, TestTubeBulk, TestTubeLinear, TestTubeOutline, TestTubeTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "test-tube-bold",
    Component: TestTubeBold,
    componentName: "TestTubeBold",
  },,
  {
    variant: "broken",
    slug: "test-tube-broken",
    Component: TestTubeBroken,
    componentName: "TestTubeBroken",
  },,
  {
    variant: "bulk",
    slug: "test-tube-bulk",
    Component: TestTubeBulk,
    componentName: "TestTubeBulk",
  },,
  {
    variant: "linear",
    slug: "test-tube-linear",
    Component: TestTubeLinear,
    componentName: "TestTubeLinear",
  },,
  {
    variant: "outline",
    slug: "test-tube-outline",
    Component: TestTubeOutline,
    componentName: "TestTubeOutline",
  },,
  {
    variant: "twotone",
    slug: "test-tube-twotone",
    Component: TestTubeTwotone,
    componentName: "TestTubeTwotone",
  }
];

export default { TestTubeBold, TestTubeBroken, TestTubeBulk, TestTubeLinear, TestTubeOutline, TestTubeTwotone };
