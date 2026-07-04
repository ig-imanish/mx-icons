import Server2Bold from "./Server2Bold";
import Server2Broken from "./Server2Broken";
import Server2Bulk from "./Server2Bulk";
import Server2Linear from "./Server2Linear";
import Server2Outline from "./Server2Outline";
import Server2Twotone from "./Server2Twotone";

export { Server2Bold, Server2Broken, Server2Bulk, Server2Linear, Server2Outline, Server2Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "server-2-bold",
    Component: Server2Bold,
    componentName: "Server2Bold",
  },,
  {
    variant: "broken",
    slug: "server-2-broken",
    Component: Server2Broken,
    componentName: "Server2Broken",
  },,
  {
    variant: "bulk",
    slug: "server-2-bulk",
    Component: Server2Bulk,
    componentName: "Server2Bulk",
  },,
  {
    variant: "linear",
    slug: "server-2-linear",
    Component: Server2Linear,
    componentName: "Server2Linear",
  },,
  {
    variant: "outline",
    slug: "server-2-outline",
    Component: Server2Outline,
    componentName: "Server2Outline",
  },,
  {
    variant: "twotone",
    slug: "server-2-twotone",
    Component: Server2Twotone,
    componentName: "Server2Twotone",
  }
];

export default { Server2Bold, Server2Broken, Server2Bulk, Server2Linear, Server2Outline, Server2Twotone };
