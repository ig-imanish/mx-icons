import React from "react";
import Icon from "../../Icon";

export default function EndCallBold({
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
      <path d="M8 13.4782L8 12.8617C8 12.8617 8 11.3963 12 11.3963C16 11.3963 16 12.8617 16 12.8617V13.25C16 14.2064 16.7227 15.0192 17.7004 15.1625L19.7004 15.4556C20.9105 15.6329 22 14.7267 22 13.5429V11.4183C22 10.8313 21.8162 10.2542 21.3703 9.85601C20.2296 8.83732 17.4208 7 12 7C6.25141 7 3.44027 9.58269 2.44083 10.7889C2.1247 11.1704 2 11.6525 2 12.1414L2 14.0643C2 15.3623 3.29561 16.292 4.57997 15.9156L6.57997 15.3295C7.42329 15.0823 8 14.3305 8 13.4782Z" fill="currentColor"/>
    </Icon>
  );
}
