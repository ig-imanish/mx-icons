import Icon from "../../Icon";

export default function ArrowsVerticalAlt({
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
		<path d="M17 21l0 -10.5M7 3l0 10.5" stroke-dasharray="14">
			<animate attributeName="stroke-dashoffset" dur="0.4s" fill="freeze" values="14;0" />
		</path>
		<path d="M17 10l-4 4M17 10l4 4M7 14l-4 -4M7 14l4 -4" stroke-dasharray="8" stroke-dashoffset="8">
			<animate attributeName="stroke-dashoffset" begin="0.4s" dur="0.2s" fill="freeze" to="0" />
		</path>
	</g>
    </Icon>
  );
}
