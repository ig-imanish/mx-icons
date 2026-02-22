import Icon from "../../Icon";

export default function VolumeMinus({
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
		<path d="M4 10h3.5l3.5 -3.5v10.5l-3.5 -3.5h-3.5Z" stroke-dasharray="34">
			<animate attributeName="stroke-dashoffset" dur="0.4s" fill="freeze" values="34;0" />
		</path>
		<path d="M15 12h6" stroke-dasharray="8" stroke-dashoffset="8">
			<animate attributeName="stroke-dashoffset" begin="0.4s" dur="0.2s" fill="freeze" to="0" />
		</path>
	</g>
    </Icon>
  );
}
