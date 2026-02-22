import Icon from "../../Icon";

export default function FilterAlt({
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
		<path d="M4 7h16" stroke-dasharray="18">
			<animate attributeName="stroke-dashoffset" dur="0.3s" fill="freeze" values="18;0" />
		</path>
		<path d="M7 12h10" stroke-dasharray="12" stroke-dashoffset="12">
			<animate attributeName="stroke-dashoffset" begin="0.3s" dur="0.2s" fill="freeze" to="0" />
		</path>
		<path d="M11 17h2" stroke-dasharray="4" stroke-dashoffset="4">
			<animate attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" fill="freeze" to="0" />
		</path>
	</g>
    </Icon>
  );
}
