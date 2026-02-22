import Icon from "../../Icon";

export default function VolumeMedium({
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
      <path d="M6 10h3.5l3.5 -3.5v10.5l-3.5 -3.5h-3.5Z" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="34">
		<animate attributeName="stroke-dashoffset" dur="0.4s" fill="freeze" values="34;0" />
	</path>
	<path d="M16 12c0 0 0 0 0 0c0 0 0 0 0 0Z" fill="currentColor">
		<animate attributeName="d" begin="0.4s" dur="0.2s" fill="freeze" to="M16 16c1.5 -0.71 2.5 -2.24 2.5 -4c0 -1.77 -1 -3.26 -2.5 -4Z" />
	</path>
    </Icon>
  );
}
