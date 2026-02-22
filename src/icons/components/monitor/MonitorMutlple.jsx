import Icon from "../../Icon";

export default function MonitorMutlple({
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
      <path d="M14 18h-9v-12h18v12Z" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="62">
		<animate attributeName="stroke-dashoffset" dur="0.6s" fill="freeze" values="62;0" />
	</path>
	<path d="M12 17h4v0h-4Z" fill="currentColor">
		<animate attributeName="d" begin="0.6s" dur="0.2s" fill="freeze" to="M12 17h4v6h-4Z" />
	</path>
	<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
		<path d="M14 22h3M14 22h-3" stroke-dasharray="6" stroke-dashoffset="6">
			<animate attributeName="stroke-dashoffset" begin="0.8s" dur="0.4s" fill="freeze" to="0" />
		</path>
		<path d="M1 14v-12h18" stroke-dasharray="32">
			<animate attributeName="stroke-dashoffset" dur="0.6s" fill="freeze" values="32;0" />
		</path>
	</g>
    </Icon>
  );
}
