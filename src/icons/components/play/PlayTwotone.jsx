import Icon from "../../Icon";

export default function PlayTwotone({
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
      <path d="M8 6l10 6l-10 6Z" stroke="currentColor" fill="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill-opacity="0" stroke-dasharray="38">
		<animate attributeName="stroke-dashoffset" dur="0.5s" fill="freeze" values="38;0" />
		<animate attributeName="fill-opacity" begin="0.5s" dur="0.15s" fill="freeze" to="0.3" />
	</path>
    </Icon>
  );
}
