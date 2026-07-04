import React from "react";
import Icon from "../../Icon";

export default function Playlist2Linear({
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
      <path d="M16 16.4286C16 17.8487 14.8807 19 13.5 19C12.1193 19 11 17.8487 11 16.4286C11 15.0084 12.1193 13.8571 13.5 13.8571C14.8807 13.8571 16 15.0084 16 16.4286ZM16 16.4286V10" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M18.675 7.11607L16.9205 7.95824C16.5788 8.12225 16.408 8.20426 16.2845 8.33067C16.1855 8.43211 16.1091 8.55346 16.0605 8.68666C16 8.85265 16 9.04216 16 9.42118C16 10.2976 16 10.7358 16.1911 10.9987C16.3421 11.2066 16.5673 11.3483 16.8201 11.3945C17.1397 11.453 17.5348 11.2634 18.325 10.8841L20.0795 10.0419C20.4212 9.87793 20.592 9.79593 20.7155 9.66952C20.8145 9.56808 20.8909 9.44673 20.9395 9.31353C21 9.14754 21 8.95803 21 8.57901C21 7.70256 21 7.26434 20.8089 7.00144C20.6579 6.79361 20.4327 6.65188 20.1799 6.60565C19.8603 6.54717 19.4652 6.7368 18.675 7.11607Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M15 5L3 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M13 9L3 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M9 13H3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M8 17H3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
