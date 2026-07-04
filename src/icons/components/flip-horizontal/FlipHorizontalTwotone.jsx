import React from "react";
import Icon from "../../Icon";

export default function FlipHorizontalTwotone({
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
      <path d="M2 18.1136V5.88641C2 4.18426 2 3.33319 2.54242 3.05405C3.08484 2.77491 3.77738 3.26959 5.16247 4.25894L6.74371 5.3884C7.35957 5.8283 7.6675 6.04825 7.83375 6.3713C8 6.69435 8 7.07277 8 7.8296V16.1705C8 16.9273 8 17.3057 7.83375 17.6288C7.6675 17.9518 7.35957 18.1718 6.74372 18.6117L5.16248 19.7411C3.77738 20.7305 3.08484 21.2251 2.54242 20.946C2 20.6669 2 19.8158 2 18.1136Z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M22 18.1136V5.88641C22 4.18426 22 3.33319 21.4576 3.05405C20.9152 2.77491 20.2226 3.26959 18.8375 4.25894L17.2563 5.3884C16.6404 5.8283 16.3325 6.04825 16.1662 6.3713C16 6.69435 16 7.07277 16 7.8296V16.1705C16 16.9273 16 17.3057 16.1662 17.6288C16.3325 17.9518 16.6404 18.1718 17.2563 18.6117L18.8375 19.7411C20.2226 20.7305 20.9152 21.2251 21.4576 20.946C22 20.6669 22 19.8158 22 18.1136Z" stroke="currentColor" strokeWidth="1.5"/>
      <path opacity="0.5" d="M12 14V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path opacity="0.5" d="M12 6V2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path opacity="0.5" d="M12 22V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
