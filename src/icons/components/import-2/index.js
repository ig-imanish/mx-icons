import Import2Bold from "./Import2Bold";
import Import2Broken from "./Import2Broken";
import Import2Bulk from "./Import2Bulk";
import Import2Linear from "./Import2Linear";
import Import2Outline from "./Import2Outline";
import Import2Twotone from "./Import2Twotone";

export { Import2Bold, Import2Broken, Import2Bulk, Import2Linear, Import2Outline, Import2Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "import2-bold",
    Component: Import2Bold,
    componentName: "Import2Bold",
  },
  {
    variant: "broken",
    slug: "import2-broken",
    Component: Import2Broken,
    componentName: "Import2Broken",
  },
  {
    variant: "bulk",
    slug: "import2-bulk",
    Component: Import2Bulk,
    componentName: "Import2Bulk",
  },
  {
    variant: "linear",
    slug: "import2-linear",
    Component: Import2Linear,
    componentName: "Import2Linear",
  },
  {
    variant: "outline",
    slug: "import2-outline",
    Component: Import2Outline,
    componentName: "Import2Outline",
  },
  {
    variant: "twotone",
    slug: "import2-twotone",
    Component: Import2Twotone,
    componentName: "Import2Twotone",
  },
];
