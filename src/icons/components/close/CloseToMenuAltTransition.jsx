import Icon from "../../Icon";

export default function CloseToMenuAltTransition({
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
      <path d="M5 5l14 0M5 19l14 0M5 12h14" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
		<animate attributeName="d" dur="0.4s" fill="freeze" values="M5 5l14 14M5 19l14 -14M12 12h0;M5 5l14 0M5 19l14 0M5 12h14" />
	</path>
    </Icon>
  );
}
