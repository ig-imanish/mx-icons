import Icon from "../../Icon";

export default function MenuFoldLeft({
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
		<path d="M19 5h-14" stroke-dasharray="16">
			<animate attributeName="stroke-dashoffset" dur="0.3s" fill="freeze" values="16;0" />
		</path>
		<path d="M19 12h-9" stroke-dasharray="12" stroke-dashoffset="12">
			<animate attributeName="stroke-dashoffset" begin="0.3s" dur="0.2s" fill="freeze" to="0" />
		</path>
		<path d="M19 19h-14" stroke-dasharray="16" stroke-dashoffset="16">
			<animate attributeName="stroke-dashoffset" begin="0.5s" dur="0.3s" fill="freeze" to="0" />
		</path>
		<path d="M7 9l-3 3l3 3" stroke-dasharray="12" stroke-dashoffset="12">
			<animate attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" fill="freeze" to="0" />
		</path>
	</g>
    </Icon>
  );
}
