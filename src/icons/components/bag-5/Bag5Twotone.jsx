import React from "react";
import Icon from "../../Icon";

export default function Bag5Twotone({
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
      <path d="M3.79424 14.9709C4.33141 17.6567 4.59999 18.9996 5.48746 19.8646C5.65149 20.0244 5.82894 20.1699 6.01786 20.2994C7.04004 21 8.40956 21 11.1486 21H12.8515C15.5906 21 16.9601 21 17.9823 20.2994C18.1712 20.1699 18.3486 20.0244 18.5127 19.8646C19.4001 18.9996 19.6687 17.6567 20.2059 14.9709C20.9771 11.1149 21.3627 9.18686 20.475 7.82067C20.3143 7.5733 20.1267 7.34447 19.9157 7.13836C18.7501 6 16.7839 6 12.8515 6H11.1486C7.21622 6 5.25004 6 4.08447 7.13836C3.87342 7.34447 3.68582 7.5733 3.5251 7.82067C2.63744 9.18686 3.02304 11.1149 3.79424 14.9709Z" stroke="currentColor" strokeWidth="1.5"/>
      <circle opacity="0.5" cx="15" cy="10" r="1" fill="currentColor"/>
      <circle opacity="0.5" cx="9" cy="10" r="1" fill="currentColor"/>
      <path opacity="0.5" d="M9 6V5C9 3.34315 10.3431 2 12 2C13.6569 2 15 3.34315 15 5V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
