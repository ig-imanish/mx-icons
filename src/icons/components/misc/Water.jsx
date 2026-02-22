import Icon from "../../Icon";

export default function Water({
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
      <path d="M12 5c0 0 5 6 5 9c0 2.76 -2.24 5 -5 5M12 5c0 0 -5 6 -5 9c0 2.76 2.24 5 5 5" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="22">
		<animate attributeName="stroke-dashoffset" dur="0.5s" fill="freeze" values="22;0" />
	</path>
    </Icon>
  );
}
