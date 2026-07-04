import React from "react";
import Icon from "../../Icon";

export default function PaletteRoundBulk({
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
      <path d="M7 18C7 18.5523 6.55228 19 6 19C5.44772 19 5 18.5523 5 18C5 17.4477 5.44772 17 6 17C6.55228 17 7 17.4477 7 18Z" fill="currentColor"/>
      <path opacity="0.4" d="M10 6V18C10 20.2091 8.20914 22 6 22C3.79086 22 2 20.2091 2 18V6C2 3.79086 3.79086 2 6 2C8.20914 2 10 3.79086 10 6Z" fill="currentColor"/>
      <path opacity="0.7" d="M9.24756 20.3357L13.2218 16.3614L19.0599 10.2719C20.5819 8.68438 20.5554 6.17138 19.0003 4.61629C17.4218 3.03773 14.8624 3.03773 13.2838 4.61629L10 7.90015V18C10 18.8718 9.72106 19.6786 9.24756 20.3357Z" fill="currentColor"/>
      <path d="M13.2218 16.3617L9.24756 20.336C9.72014 19.6801 9.99891 18.8752 10 18.0053C9.99711 20.212 8.20736 22 6 22H17.8994C20.1086 22 21.8994 20.2091 21.8994 18C21.8994 15.7909 20.1086 14 17.8994 14H15.486L13.2218 16.3617Z" fill="currentColor"/>
    </Icon>
  );
}
