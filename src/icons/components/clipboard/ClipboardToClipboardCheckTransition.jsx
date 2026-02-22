import Icon from "../../Icon";

export default function ClipboardToClipboardCheckTransition({
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
      <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
		<path d="M12 3h7v18h-14v-18h7Z" stroke-width="2" />
		<path d="M14.5 3.5v3h-5v-3" />
		<path d="M9 13l2 2l4 -4" stroke-width="2" stroke-dasharray="12">
			<animate attributeName="stroke-dashoffset" dur="0.2s" fill="freeze" values="12;0" />
		</path>
	</g>
    </Icon>
  );
}
