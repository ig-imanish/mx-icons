import Icon from "../../Icon";

export default function PaintDrop({
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
      <path d="M12 3c0 0 7 6 7 12c0 2 -1 6 -7 6M12 3c0 0 -7 6 -7 12c0 2 1 6 7 6" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="28">
		<animate attributeName="stroke-dashoffset" dur="0.6s" fill="freeze" values="28;0" />
	</path>
    </Icon>
  );
}
