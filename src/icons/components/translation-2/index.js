import Translation2Bold from "./Translation2Bold";
import Translation2Broken from "./Translation2Broken";
import Translation2Bulk from "./Translation2Bulk";
import Translation2Linear from "./Translation2Linear";
import Translation2Outline from "./Translation2Outline";
import Translation2Twotone from "./Translation2Twotone";

export { Translation2Bold, Translation2Broken, Translation2Bulk, Translation2Linear, Translation2Outline, Translation2Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "translation-2-bold",
    Component: Translation2Bold,
    componentName: "Translation2Bold",
  },,
  {
    variant: "broken",
    slug: "translation-2-broken",
    Component: Translation2Broken,
    componentName: "Translation2Broken",
  },,
  {
    variant: "bulk",
    slug: "translation-2-bulk",
    Component: Translation2Bulk,
    componentName: "Translation2Bulk",
  },,
  {
    variant: "linear",
    slug: "translation-2-linear",
    Component: Translation2Linear,
    componentName: "Translation2Linear",
  },,
  {
    variant: "outline",
    slug: "translation-2-outline",
    Component: Translation2Outline,
    componentName: "Translation2Outline",
  },,
  {
    variant: "twotone",
    slug: "translation-2-twotone",
    Component: Translation2Twotone,
    componentName: "Translation2Twotone",
  }
];

export default { Translation2Bold, Translation2Broken, Translation2Bulk, Translation2Linear, Translation2Outline, Translation2Twotone };
