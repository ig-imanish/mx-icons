import React from "react";
import Icon from "../../Icon";

export default function ForbiddenCircleBulk({
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
      <path opacity="0.5" d="M4.92893 4.92893C1.02369 8.83418 1.02369 15.1658 4.92893 19.0711C8.83418 22.9763 15.1656 22.9761 19.0708 19.0708C22.9761 15.1656 22.9763 8.83418 19.0711 4.92893C15.1658 1.02369 8.83418 1.02369 4.92893 4.92893Z" fill="currentColor"/>
      <path d="M18.5211 4.41846L4.41797 18.5213C4.58006 18.7094 4.75031 18.8928 4.9287 19.0712C5.1071 19.2496 5.29057 19.4199 5.47863 19.582L19.5817 5.47914C19.4196 5.29103 19.2493 5.10752 19.0708 4.92908C18.8925 4.75073 18.7091 4.58052 18.5211 4.41846Z" fill="currentColor"/>
    </Icon>
  );
}
