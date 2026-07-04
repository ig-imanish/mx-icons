import React from "react";
import Icon from "../../Icon";

export default function PlaylistMinimalistic3Twotone({
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
      <path opacity="0.5" d="M20 4L3 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path opacity="0.5" d="M8 14H3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path opacity="0.5" d="M12 9L3 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M16 17.4286C16 18.8487 14.8807 20 13.5 20C12.1193 20 11 18.8487 11 17.4286C11 16.0084 12.1193 14.8571 13.5 14.8571C14.8807 14.8571 16 16.0084 16 17.4286ZM16 17.4286V11" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M18.675 8.11607L16.9205 8.95824C16.5788 9.12225 16.408 9.20426 16.2845 9.33067C16.1855 9.43211 16.1091 9.55346 16.0605 9.68666C16 9.85265 16 10.0422 16 10.4212C16 11.2976 16 11.7358 16.1911 11.9987C16.3421 12.2066 16.5673 12.3483 16.8201 12.3945C17.1397 12.453 17.5348 12.2634 18.325 11.8841L20.0795 11.0419C20.4212 10.8779 20.592 10.7959 20.7155 10.6695C20.8145 10.5681 20.8909 10.4467 20.9395 10.3135C21 10.1475 21 9.95803 21 9.57901C21 8.70256 21 8.26434 20.8089 8.00144C20.6579 7.79361 20.4327 7.65188 20.1799 7.60565C19.8603 7.54717 19.4652 7.7368 18.675 8.11607Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
