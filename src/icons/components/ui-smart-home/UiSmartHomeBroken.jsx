import React from "react";
import Icon from "../../Icon";

export default function UiSmartHomeBroken({
  size = 24,
  color = "#292D32",
  className = "",
  ...props
}) {
  return (
    <Icon
      size={size}
      color={color}
      fill="none"
      className={className}
      {...props}
    >
      <path d="M22.0001 12.2039V13.725C22.0001 17.6258 22.0001 19.5763 20.8285 20.7881C19.657 22 17.7713 22 14.0001 22M21.4809 7.82274C20.9617 6.87421 20.0132 6.28551 18.1161 5.10812L16.1161 3.86687C14.1107 2.62229 13.108 2 12.0001 2C10.8922 2 9.8895 2.62229 7.88414 3.86687L5.88415 5.10813C3.98706 6.28551 3.03851 6.87421 2.51931 7.82274C2.20174 8.40293 2.07841 9.05632 2.03052 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M11 22C11 17.0294 6.97056 13 2 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M8 22C8 18.6863 5.31371 16 2 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M5 22C5 20.3431 3.65685 19 2 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
