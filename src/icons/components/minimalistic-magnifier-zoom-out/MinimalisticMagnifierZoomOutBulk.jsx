import React from "react";
import Icon from "../../Icon";

export default function MinimalisticMagnifierZoomOutBulk({
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
      <g opacity="0.5">
      <path d="M11.1566 20.3133C16.2137 20.3133 20.3133 16.2137 20.3133 11.1566C20.3133 6.09956 16.2137 2 11.1566 2C6.09956 2 2 6.09956 2 11.1566C2 16.2137 6.09956 20.3133 11.1566 20.3133Z" fill="currentColor"/>
      </g>
      <path fillRule="evenodd" clipRule="evenodd" d="M8.02344 11.1565C8.02344 10.7572 8.34709 10.4336 8.74633 10.4336H13.5656C13.9648 10.4336 14.2885 10.7572 14.2885 11.1565C14.2885 11.5557 13.9648 11.8794 13.5656 11.8794H8.74633C8.34709 11.8794 8.02344 11.5557 8.02344 11.1565Z" fill="currentColor"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M18.8387 18.8387C19.121 18.5564 19.5787 18.5564 19.861 18.8387L21.7887 20.7664C22.071 21.0487 22.071 21.5064 21.7887 21.7887C21.5064 22.071 21.0487 22.071 20.7664 21.7887L18.8387 19.861C18.5564 19.5787 18.5564 19.121 18.8387 18.8387Z" fill="currentColor"/>
    </Icon>
  );
}
