import Icon from "../../Icon";

export default function NavigationRightDown({
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
      <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
		<path d="M3 9h9c2.76 0 5 2.24 5 5v6" stroke-dasharray="26">
			<animate attributeName="stroke-dashoffset" dur="0.6s" fill="freeze" values="26;0" />
		</path>
		<path d="M17 21l4 -4M17 21l-4 -4" stroke-dasharray="8" stroke-dashoffset="8">
			<animate attributeName="stroke-dashoffset" begin="0.6s" dur="0.4s" fill="freeze" to="0" />
		</path>
	</g>
    </Icon>
  );
}
