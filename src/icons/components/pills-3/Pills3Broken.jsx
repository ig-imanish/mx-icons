import React from "react";
import Icon from "../../Icon";

export default function Pills3Broken({
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
      <path d="M11 9.4723C11 8.32065 10.5607 7.169 9.68198 6.29032C8.93067 5.53902 7.9798 5.10891 7 5M11 9.4723C11 10.624 10.5607 11.7756 9.68198 12.6543C7.92462 14.4116 5.07538 14.4116 3.31802 12.6543C2.43934 11.7756 2 10.624 2 9.4723M11 9.4723H2M2 9.4723C2 8.32065 2.43934 7.169 3.31802 6.29032" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M14.7574 7.12132C15.9289 8.29289 17.8284 8.29289 19 7.12132C19.5858 6.53553 19.8787 5.76777 19.8787 5C19.8787 4.23223 19.5858 3.46447 19 2.87868C17.8284 1.70711 15.9289 1.70711 14.7574 2.87868C14.1716 3.46447 13.8787 4.23223 13.8787 5C13.8787 5.76777 14.1716 6.53553 14.7574 7.12132Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M17.381 20.9052L20.9052 17.381C22.3649 15.9213 22.3649 13.5546 20.9052 12.0948C19.4454 10.6351 17.0787 10.6351 15.619 12.0948L12.0948 15.619C10.6351 17.0787 10.6351 19.4454 12.0948 20.9052C12.636 21.4464 13.3019 21.7869 14 21.9268" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M14 14C14 14 14.2813 15.4596 15.911 17.0892C17.5407 18.7189 19 19 19 19" stroke="currentColor" strokeWidth="1.5"/>
    </Icon>
  );
}
