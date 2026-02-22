import Icon from "../../Icon";

export default function HashSmall({
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
		<g stroke-dasharray="16">
			<path d="M6 9h13">
				<animate attributeName="stroke-dashoffset" dur="0.3s" fill="freeze" values="16;0" />
			</path>
			<path d="M5 15h13" stroke-dashoffset="16">
				<animate attributeName="stroke-dashoffset" begin="0.3s" dur="0.3s" fill="freeze" to="0" />
			</path>
		</g>
		<g stroke-dasharray="18">
			<path d="M10 5l-2 14" stroke-dashoffset="18">
				<animate attributeName="stroke-dashoffset" begin="0.7s" dur="0.3s" fill="freeze" to="0" />
			</path>
			<path d="M16 5l-2 14" stroke-dashoffset="18">
				<animate attributeName="stroke-dashoffset" begin="1s" dur="0.3s" fill="freeze" to="0" />
			</path>
		</g>
	</g>
    </Icon>
  );
}
