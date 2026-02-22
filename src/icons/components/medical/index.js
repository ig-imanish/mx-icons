import MedicalServices from "./MedicalServices";
import MedicalServicesFilled from "./MedicalServicesFilled";
import MedicalServicesTwotone from "./MedicalServicesTwotone";

export { MedicalServices, MedicalServicesFilled, MedicalServicesTwotone };

export const variants = [
  {
    variant: "linear",
    slug: "medical-services",
    Component: MedicalServices,
    componentName: "MedicalServices",
  },
  {
    variant: "filled",
    slug: "medical-services-filled",
    Component: MedicalServicesFilled,
    componentName: "MedicalServicesFilled",
  },
  {
    variant: "twotone",
    slug: "medical-services-twotone",
    Component: MedicalServicesTwotone,
    componentName: "MedicalServicesTwotone",
  },
];
