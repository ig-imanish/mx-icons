import React from "react";
import Icon from "../../Icon";

export default function MinimalisticMagnifierBulk({
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
      <path opacity="0.5" d="M20.3133 11.1566C20.3133 16.2137 16.2137 20.3133 11.1566 20.3133C6.09956 20.3133 2 16.2137 2 11.1566C2 6.09956 6.09956 2 11.1566 2C16.2137 2 20.3133 6.09956 20.3133 11.1566Z" fill="currentColor"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M18.8387 18.8387C19.121 18.5564 19.5787 18.5564 19.861 18.8387L21.7887 20.7664C22.071 21.0487 22.071 21.5064 21.7887 21.7887C21.5064 22.071 21.0487 22.071 20.7664 21.7887L18.8387 19.861C18.5564 19.5787 18.5564 19.121 18.8387 18.8387Z" fill="currentColor"/>
    </Icon>
  );
}
