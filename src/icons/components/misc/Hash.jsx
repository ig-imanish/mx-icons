import Icon from "../../Icon";

export default function Hash({
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
		<g stroke-dasharray="20">
			<path d="M4 9h17">
				<animate attributeName="stroke-dashoffset" dur="0.3s" fill="freeze" values="20;0" />
			</path>
			<path d="M3 15h17" stroke-dashoffset="20">
				<animate attributeName="stroke-dashoffset" begin="0.3s" dur="0.3s" fill="freeze" to="0" />
			</path>
		</g>
		<g stroke-dasharray="22">
			<path d="M10 3l-2 18" stroke-dashoffset="22">
				<animate attributeName="stroke-dashoffset" begin="0.7s" dur="0.3s" fill="freeze" to="0" />
			</path>
			<path d="M16 3l-2 18" stroke-dashoffset="22">
				<animate attributeName="stroke-dashoffset" begin="1s" dur="0.3s" fill="freeze" to="0" />
			</path>
		</g>
	</g>
    </Icon>
  );
}
