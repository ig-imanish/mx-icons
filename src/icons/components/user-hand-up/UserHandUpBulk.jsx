import React from "react";
import Icon from "../../Icon";

export default function UserHandUpBulk({
  size = 24,
  color = "#292D32",
  className = "",
  ...props
}) {
  return (
    <Icon
      size={size}
      color={color}
      fill="currentColor"
      className={className}
      {...props}
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M1.81828 5.27239C2.22012 5.17193 2.62732 5.41625 2.72778 5.81809L3.10975 7.34596C3.71957 9.78523 5.64125 11.6764 8.0847 12.25H16.0002C18.0912 12.25 19.8512 13.8151 20.0956 15.8918L20.745 21.4124C20.7934 21.8237 20.4992 22.1965 20.0878 22.2449C19.6764 22.2933 19.3037 21.999 19.2553 21.5876L18.6058 16.0671C18.4504 14.7458 17.3306 13.75 16.0002 13.75H7.91785L7.83748 13.7321C4.80227 13.0576 2.40864 10.7262 1.65454 7.70976L1.27257 6.1819C1.17211 5.78005 1.41643 5.37285 1.81828 5.27239Z" fill="currentColor"/>
      <path opacity="0.5" d="M8 13.75V18C8 19.8856 8 20.8284 8.58579 21.4142C9.17157 22 10.1144 22 12 22C13.8856 22 14.8284 22 15.4142 21.4142C16 20.8284 16 19.8856 16 18V13.75H8Z" fill="currentColor"/>
      <circle cx="12" cy="6" r="4" fill="currentColor"/>
    </Icon>
  );
}
