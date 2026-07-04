import React from "react";
import Icon from "../../Icon";

export default function FiltersBold({
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
      <path d="M18 8C18 11.3137 15.3137 14 12 14C8.68629 14 6 11.3137 6 8C6 4.68629 8.68629 2 12 2C15.3137 2 18 4.68629 18 8Z" fill="currentColor"/>
      <path d="M5.03349 10.7834C3.22163 11.816 2 13.7653 2 16C2 19.3137 4.68629 22 8 22C11.3137 22 14 19.3137 14 16C14 15.7437 13.9839 15.4911 13.9527 15.2432C13.3301 15.4107 12.6755 15.5 12 15.5C8.84139 15.5 6.13882 13.5474 5.03349 10.7834Z" fill="currentColor"/>
      <path d="M15.3866 14.6936C15.4611 15.1179 15.5 15.5544 15.5 16C15.5 18.0906 14.6446 19.9815 13.2646 21.3416C14.0849 21.7625 15.0147 22 16 22C19.3137 22 22 19.3137 22 16C22 13.7653 20.7783 11.816 18.9665 10.7834C18.2876 12.4811 17.0062 13.8726 15.3866 14.6936Z" fill="currentColor"/>
    </Icon>
  );
}
