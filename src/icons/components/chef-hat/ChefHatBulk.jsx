import React from "react";
import Icon from "../../Icon";

export default function ChefHatBulk({
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
      <path d="M18.9986 18H5.00195C5.01214 19.3969 5.08369 20.9119 5.58605 21.4142C6.17183 22 7.11464 22 9.00026 22H15.0003C16.8859 22 17.8287 22 18.4145 21.4142C18.9168 20.9119 18.9884 19.3969 18.9986 18Z" fill="currentColor"/>
      <path opacity="0.5" d="M7 5C4.23858 5 2 7.23858 2 10C2 12.0503 3.2341 13.8124 5 14.584V18H19L19 14.584C20.7659 13.8124 22 12.0503 22 10C22 7.23858 19.7614 5 17 5C16.7495 5 16.5033 5.01842 16.2626 5.05399C15.6604 3.27806 13.9794 2 12 2C10.0206 2 8.33961 3.27806 7.73736 5.05399C7.49673 5.01842 7.25052 5 7 5Z" fill="currentColor"/>
    </Icon>
  );
}
