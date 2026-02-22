import Icon from "../../Icon";

export default function ClipboardRemove({
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
      <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
		<path d="M12 3h7v18h-14v-18h7Z" stroke-width="2" stroke-dasharray="66">
			<animate attributeName="stroke-dashoffset" dur="0.6s" fill="freeze" values="66;0" />
		</path>
		<path d="M14.5 3.5v3h-5v-3" stroke-dasharray="14" stroke-dashoffset="14">
			<animate attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" fill="freeze" to="0" />
		</path>
		<g stroke-width="2" stroke-dasharray="12">
			<path d="M9 10l6 6" stroke-dashoffset="12">
				<animate attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" fill="freeze" to="0" />
			</path>
			<path d="M15 10l-6 6" stroke-dashoffset="12">
				<animate attributeName="stroke-dashoffset" begin="1.1s" dur="0.2s" fill="freeze" to="0" />
			</path>
		</g>
	</g>
    </Icon>
  );
}
