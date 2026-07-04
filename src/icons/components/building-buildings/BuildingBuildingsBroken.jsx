import React from "react";
import Icon from "../../Icon";

export default function BuildingBuildingsBroken({
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
      <path d="M22 22L2 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M21 22V13M11.0044 5C11.0223 3.76022 11.1143 3.05733 11.5858 2.58579C12.1716 2 13.1144 2 15 2H17C18.8857 2 19.8285 2 20.4143 2.58579C21 3.17157 21 4.11438 21 6V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M15 22V16M3 22V13M3 9C3 7.11438 3 6.17157 3.58579 5.58579C4.17157 5 5.11438 5 7 5H11C12.8856 5 13.8284 5 14.4142 5.58579C15 6.17157 15 7.11438 15 9V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M9 22V19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M6 8H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M6 11H7M12 11H9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M6 14H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
