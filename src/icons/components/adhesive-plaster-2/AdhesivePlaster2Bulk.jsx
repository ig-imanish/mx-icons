import React from "react";
import Icon from "../../Icon";

export default function AdhesivePlaster2Bulk({
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
      <path opacity="0.5" d="M20.4155 12.765L11.235 3.58447C9.12233 1.47184 5.69709 1.47184 3.58447 3.58447C1.47184 5.69709 1.47184 9.12233 3.58447 11.235L12.765 20.4155C14.8777 22.5282 18.3029 22.5282 20.4155 20.4155C22.5282 18.3029 22.5282 14.8777 20.4155 12.765Z" fill="currentColor"/>
      <path d="M19.8854 12.2344L20.416 12.765C20.5958 12.9448 20.7604 13.1342 20.9096 13.3315L13.332 20.9091C13.1347 20.7599 12.9453 20.5953 12.7655 20.4155L12.2349 19.8849L19.8854 12.2344C19.8855 12.2343 19.8853 12.2345 19.8854 12.2344Z" fill="currentColor"/>
      <path d="M10.6683 3.09033C10.8658 3.23968 11.0553 3.40437 11.2354 3.5844L11.7655 4.11449C11.7654 4.11457 11.7655 4.11441 11.7655 4.11449L4.11498 11.765L3.58489 11.2349C3.40486 11.0549 3.24017 10.8653 3.09082 10.6678L10.6683 3.09033Z" fill="currentColor"/>
      <circle cx="9.17203" cy="12" r="1" transform="rotate(-45 9.17203 12)" fill="currentColor"/>
      <circle cx="12.0002" cy="14.8286" r="1" transform="rotate(-45 12.0002 14.8286)" fill="currentColor"/>
      <circle cx="12.0002" cy="9.17139" r="1" transform="rotate(-45 12.0002 9.17139)" fill="currentColor"/>
      <circle cx="14.8283" cy="12" r="1" transform="rotate(-45 14.8283 12)" fill="currentColor"/>
    </Icon>
  );
}
