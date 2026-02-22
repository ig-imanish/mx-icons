import Icon from "../../Icon";

export default function CloseToMenuTransition({
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
      <path d="M5 5l7 0l7 0M5 12h14M5 19l7 0l7 0" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
		<animate attributeName="d" dur="0.4s" fill="freeze" values="M5 5l7 7l7 -7M12 12h0M5 19l7 -7l7 7;M5 5l7 0l7 0M5 12h14M5 19l7 0l7 0" />
	</path>
    </Icon>
  );
}
