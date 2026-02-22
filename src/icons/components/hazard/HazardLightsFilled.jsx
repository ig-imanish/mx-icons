import Icon from "../../Icon";

export default function HazardLightsFilled({
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
		<path d="M12 10l4 7h-8Z" fill="currentColor" stroke-dasharray="28" fill-opacity="0">
			<animate attributeName="stroke-dashoffset" dur="0.4s" fill="freeze" values="28;0" />
			<animate attributeName="fill-opacity" begin="0.6s" dur="0.4s" fill="freeze" to="1" />
		</path>
		<path d="M12 4l9.25 16h-18.5Z" fill="none" opacity="0">
			<set attributeName="opacity" to="1" begin="0.4s" fill="freeze" />
			<animate attributeName="d" begin="0.4s" dur="0.2s" fill="freeze" values="M12 10l4 7h-8Z;M12 4l9.25 16h-18.5Z" />
		</path>
	</g>
    </Icon>
  );
}
