import React from "react";
import Icon from "../../Icon";

export default function Tennis2Twotone({
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
      <path d="M3.33971 16.9997C6.10113 21.7826 12.217 23.4214 17 20.66C18.9496 19.5344 20.3768 17.8514 21.1965 15.9286C22.3878 13.1341 22.296 9.83304 20.6602 6.99972C19.0244 4.1664 16.2114 2.43642 13.1957 2.07088C11.1207 1.81935 8.94957 2.21386 6.99996 3.33946C2.21703 6.10089 0.578283 12.2168 3.33971 16.9997Z" stroke="currentColor" strokeWidth="1.5"/>
      <path opacity="0.5" d="M13.1958 2.07129C13.1958 2.07129 12.0981 6.17 14.5981 10.5001C17.0981 14.8303 21.1965 15.929 21.1965 15.929M2.80347 8.07129C2.80347 8.07129 6.90191 9.17 9.40191 13.5001C11.9019 17.8303 10.8042 21.929 10.8042 21.929" stroke="currentColor" strokeWidth="1.5" strokeDasharray="1.5 2"/>
    </Icon>
  );
}
