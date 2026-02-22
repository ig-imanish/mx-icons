import Icon from "../../Icon";

export default function MenuToCloseAltTransition({
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
		<path d="M5 5l14 14M5 19l14 -14">
			<animate attributeName="d" dur="0.4s" fill="freeze" values="M5 5l14 0M5 19l14 0;M5 5l14 14M5 19l14 -14" />
		</path>
		<path d="M12 12h0">
			<animate attributeName="d" dur="0.4s" fill="freeze" values="M5 12h14;M12 12h0" />
			<set attributeName="opacity" to="0" begin="0.4s" fill="freeze" />
		</path>
	</g>
    </Icon>
  );
}
