import Icon from "../../Icon";

export default function DocumentRemove({
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
		<path d="M13 3l6 6v12h-14v-18h8" stroke-width="2" stroke-dasharray="64">
			<animate attributeName="stroke-dashoffset" dur="0.6s" fill="freeze" values="64;0" />
		</path>
		<path d="M12.5 3v5.5h6.5" stroke-dasharray="14" stroke-dashoffset="14">
			<animate attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" fill="freeze" to="0" />
		</path>
		<path d="M9 14h6" stroke-width="2" stroke-dasharray="8" stroke-dashoffset="8">
			<animate attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" fill="freeze" to="0" />
		</path>
	</g>
    </Icon>
  );
}
