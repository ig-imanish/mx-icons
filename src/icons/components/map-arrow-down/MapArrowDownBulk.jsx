import React from "react";
import Icon from "../../Icon";

export default function MapArrowDownBulk({
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
      <path d="M8.0374 14.1437C7.78266 14.2711 7.47314 14.1602 7.35714 13.9001L3.16447 4.49844C2.49741 3.00261 3.97865 1.45104 5.36641 2.19197L11.2701 5.344C11.7293 5.58915 12.2697 5.58915 12.7289 5.344L18.6326 2.19197C20.0204 1.45104 21.5016 3.00261 20.8346 4.49844L19.2629 8.02275C19.0743 8.44563 18.7448 8.78997 18.3307 8.99704L8.0374 14.1437Z" fill="currentColor"/>
      <path opacity="0.5" d="M8.6095 15.5342C8.37019 15.6538 8.26749 15.9407 8.37646 16.185L10.5271 21.0076C11.1174 22.3314 12.8818 22.3314 13.4722 21.0076L17.4401 12.1099C17.6313 11.6812 17.1797 11.2491 16.7598 11.459L8.6095 15.5342Z" fill="currentColor"/>
    </Icon>
  );
}
