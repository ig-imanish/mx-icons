import Icon from "../../Icon";

export default function VolumeLowFilled({
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
      <path d="M8 10h3.5l3.5 -3.5v10.5l-3.5 -3.5h-3.5Z" stroke="currentColor" fill="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="34" fill-opacity="0">
		<animate attributeName="stroke-dashoffset" dur="0.4s" fill="freeze" values="34;0" />
		<animate attributeName="fill-opacity" begin="0.4s" dur="0.4s" fill="freeze" to="1" />
	</path>
    </Icon>
  );
}
