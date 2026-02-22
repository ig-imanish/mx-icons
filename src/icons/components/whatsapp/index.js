import WhatsappBold from "./WhatsappBold";
import WhatsappLinear from "./WhatsappLinear";

export { WhatsappBold, WhatsappLinear };

export const variants = [
  {
    variant: "bold",
    slug: "whatsapp-bold",
    Component: WhatsappBold,
    componentName: "WhatsappBold",
  },
  {
    variant: "linear",
    slug: "whatsapp-linear",
    Component: WhatsappLinear,
    componentName: "WhatsappLinear",
  },
];
