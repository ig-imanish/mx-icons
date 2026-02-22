import BrakeAbs from "./BrakeAbs";
import BrakeAbsFilled from "./BrakeAbsFilled";
import BrakeAbsTwotone from "./BrakeAbsTwotone";
import BrakeAlert from "./BrakeAlert";
import BrakeAlertFilled from "./BrakeAlertFilled";
import BrakeAlertTwotone from "./BrakeAlertTwotone";
import BrakeFilled from "./BrakeFilled";
import BrakeHold from "./BrakeHold";
import BrakeHoldFilled from "./BrakeHoldFilled";
import BrakeHoldTwotone from "./BrakeHoldTwotone";
import BrakeParking from "./BrakeParking";
import BrakeParkingFilled from "./BrakeParkingFilled";
import BrakeParkingTwotone from "./BrakeParkingTwotone";
import BrakeTwotone from "./BrakeTwotone";

export { BrakeAbs, BrakeAbsFilled, BrakeAbsTwotone, BrakeAlert, BrakeAlertFilled, BrakeAlertTwotone, BrakeFilled, BrakeHold, BrakeHoldFilled, BrakeHoldTwotone, BrakeParking, BrakeParkingFilled, BrakeParkingTwotone, BrakeTwotone };

export const variants = [
  {
    variant: "linear",
    slug: "brake-abs",
    Component: BrakeAbs,
    componentName: "BrakeAbs",
  },
  {
    variant: "filled",
    slug: "brake-abs-filled",
    Component: BrakeAbsFilled,
    componentName: "BrakeAbsFilled",
  },
  {
    variant: "twotone",
    slug: "brake-abs-twotone",
    Component: BrakeAbsTwotone,
    componentName: "BrakeAbsTwotone",
  },
  {
    variant: "linear",
    slug: "brake-alert",
    Component: BrakeAlert,
    componentName: "BrakeAlert",
  },
  {
    variant: "filled",
    slug: "brake-alert-filled",
    Component: BrakeAlertFilled,
    componentName: "BrakeAlertFilled",
  },
  {
    variant: "twotone",
    slug: "brake-alert-twotone",
    Component: BrakeAlertTwotone,
    componentName: "BrakeAlertTwotone",
  },
  {
    variant: "filled",
    slug: "brake-filled",
    Component: BrakeFilled,
    componentName: "BrakeFilled",
  },
  {
    variant: "linear",
    slug: "brake-hold",
    Component: BrakeHold,
    componentName: "BrakeHold",
  },
  {
    variant: "filled",
    slug: "brake-hold-filled",
    Component: BrakeHoldFilled,
    componentName: "BrakeHoldFilled",
  },
  {
    variant: "twotone",
    slug: "brake-hold-twotone",
    Component: BrakeHoldTwotone,
    componentName: "BrakeHoldTwotone",
  },
  {
    variant: "linear",
    slug: "brake-parking",
    Component: BrakeParking,
    componentName: "BrakeParking",
  },
  {
    variant: "filled",
    slug: "brake-parking-filled",
    Component: BrakeParkingFilled,
    componentName: "BrakeParkingFilled",
  },
  {
    variant: "twotone",
    slug: "brake-parking-twotone",
    Component: BrakeParkingTwotone,
    componentName: "BrakeParkingTwotone",
  },
  {
    variant: "twotone",
    slug: "brake-twotone",
    Component: BrakeTwotone,
    componentName: "BrakeTwotone",
  },
];
