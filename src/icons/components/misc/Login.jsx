import Icon from "../../Icon";

export default function Login({
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
		<path d="M13 4l7 0c0.55 0 1 0.45 1 1v14c0 0.55 -0.45 1 -1 1h-7" stroke-dasharray="34">
			<animate attributeName="stroke-dashoffset" dur="0.4s" fill="freeze" values="34;0" />
		</path>
		<path d="M3 12h11.5" stroke-dasharray="14" stroke-dashoffset="14">
			<animate attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" fill="freeze" to="0" />
		</path>
		<path d="M14.5 12l-3.5 -3.5M14.5 12l-3.5 3.5" stroke-dasharray="8" stroke-dashoffset="8">
			<animate attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" fill="freeze" to="0" />
		</path>
	</g>
    </Icon>
  );
}
