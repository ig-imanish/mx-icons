import React from "react";
import Icon from "../../Icon";

export default function StretchingTwotone({
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
      <circle cx="14.5" cy="4.5" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
      <path opacity="0.5" d="M5 22.0002L8.84856 20.6274C9.30437 20.4648 9.68576 20.1425 9.92204 19.7202L12.6343 14.872C12.8012 14.5736 12.8889 14.2374 12.8889 13.8955V11.2751C12.8889 10.1982 11.7878 9.47213 10.798 9.89634L8.34221 10.9488C7.35935 11.37 7.12031 12.655 7.88594 13.4015L8.5 14.0002" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M19.0001 22.0002V16.7681C19.0001 15.5355 17.8959 14.5962 16.6793 14.7939L15.6667 14.9585" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
}
