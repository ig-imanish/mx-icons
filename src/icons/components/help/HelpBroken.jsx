import React from "react";
import Icon from "../../Icon";

export default function HelpBroken({
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
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M15 9L19 5" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M5 19L9 15" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M9 9L5 5" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M19 19L15 15" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M9.41235 2.33892C11.0533 1.89775 12.8289 1.86936 14.5882 2.34078C19.9229 3.7702 23.0887 9.25357 21.6593 14.5882C20.2299 19.9229 14.7465 23.0887 9.41185 21.6593C4.07719 20.2299 0.911364 14.7465 2.34078 9.41185C2.8122 7.65248 3.72457 6.12901 4.92711 4.92847" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
