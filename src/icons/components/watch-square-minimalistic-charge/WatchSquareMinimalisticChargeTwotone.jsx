import React from "react";
import Icon from "../../Icon";

export default function WatchSquareMinimalisticChargeTwotone({
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
      <path opacity="0.5" d="M5 12C5 9.19108 5 7.78661 5.67412 6.77772C5.96596 6.34096 6.34096 5.96596 6.77772 5.67412C7.78661 5 9.19108 5 12 5C14.8089 5 16.2134 5 17.2223 5.67412C17.659 5.96596 18.034 6.34096 18.3259 6.77772C19 7.78661 19 9.19108 19 12C19 14.8089 19 16.2134 18.3259 17.2223C18.034 17.659 17.659 18.034 17.2223 18.3259C16.2134 19 14.8089 19 12 19C9.19108 19 7.78661 19 6.77772 18.3259C6.34096 18.034 5.96596 17.659 5.67412 17.2223C5 16.2134 5 14.8089 5 12Z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M12.8571 9L10 12H14L11.1429 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7 2H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M7 22H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
