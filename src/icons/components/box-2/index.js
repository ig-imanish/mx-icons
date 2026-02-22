import Box2Bold from "./Box2Bold";
import Box2Broken from "./Box2Broken";
import Box2Bulk from "./Box2Bulk";
import Box2Linear from "./Box2Linear";
import Box2Outline from "./Box2Outline";
import Box2Twotone from "./Box2Twotone";

export { Box2Bold, Box2Broken, Box2Bulk, Box2Linear, Box2Outline, Box2Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "box2-bold",
    Component: Box2Bold,
    componentName: "Box2Bold",
  },
  {
    variant: "broken",
    slug: "box2-broken",
    Component: Box2Broken,
    componentName: "Box2Broken",
  },
  {
    variant: "bulk",
    slug: "box2-bulk",
    Component: Box2Bulk,
    componentName: "Box2Bulk",
  },
  {
    variant: "linear",
    slug: "box2-linear",
    Component: Box2Linear,
    componentName: "Box2Linear",
  },
  {
    variant: "outline",
    slug: "box2-outline",
    Component: Box2Outline,
    componentName: "Box2Outline",
  },
  {
    variant: "twotone",
    slug: "box2-twotone",
    Component: Box2Twotone,
    componentName: "Box2Twotone",
  },
];
