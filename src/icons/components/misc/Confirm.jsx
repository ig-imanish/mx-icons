import Icon from "../../Icon";

export default function Confirm({
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
      <path d="M5 11l6 6l10 -10" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="26">
		<animate attributeName="stroke-dashoffset" dur="0.6s" fill="freeze" values="26;0" />
	</path>
    </Icon>
  );
}
