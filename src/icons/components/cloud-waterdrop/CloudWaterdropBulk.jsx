import React from "react";
import Icon from "../../Icon";

export default function CloudWaterdropBulk({
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
      <path opacity="0.5" d="M16.2857 19C19.4416 19 22 16.4717 22 13.3529C22 10.8811 20.393 8.78024 18.1551 8.01498C17.8371 5.19371 15.4159 3 12.4762 3C9.32028 3 6.7619 5.52827 6.7619 8.64706C6.7619 9.33687 6.88706 9.9978 7.11616 10.6089C6.8475 10.5567 6.56983 10.5294 6.28571 10.5294C3.91878 10.5294 2 12.4256 2 14.7647C2 17.1038 3.91878 19 6.28571 19H16.2857Z" fill="currentColor"/>
      <path d="M15 19.0837C15 20.6946 13.6569 22.0004 12 22.0004C10.3431 22.0004 9 20.6946 9 19.0837C9 18.1718 9.96143 16.9838 10.7958 16.1245C11.4626 15.4377 12.5374 15.4377 13.2042 16.1245C14.0386 16.9838 15 18.1718 15 19.0837Z" fill="currentColor"/>
    </Icon>
  );
}
