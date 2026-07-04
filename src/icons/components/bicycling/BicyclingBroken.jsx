import React from "react";
import Icon from "../../Icon";

export default function BicyclingBroken({
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
      <circle cx="15" cy="4" r="2" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="6" cy="18" r="3" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="18" cy="18" r="3" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M18.5 9.99951H16.4744C15.2534 9.99951 14.6429 9.99951 14.0934 9.77292C13.544 9.54633 13.111 9.11597 12.2449 8.25524L11.6676 7.68145C10.8828 6.90152 10.4904 6.51155 10.0257 6.5539C9.56102 6.59624 9.24559 7.05071 8.61471 7.95964M12 17.9995L12.0572 17.6411C12.2918 16.1715 12.4091 15.4368 12.081 14.8369C11.7529 14.237 11.0709 13.9394 9.70695 13.3443L8.23125 12.7004C7.1987 12.2498 6.68242 12.0246 6.55348 11.5698C6.50262 11.3904 6.5218 11.2098 6.60313 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
