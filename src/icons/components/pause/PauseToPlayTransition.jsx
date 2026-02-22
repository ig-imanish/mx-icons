import Icon from "../../Icon";

export default function PauseToPlayTransition({
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
      <path d="M13 15l-5 3l0 -12l5 3l0 0M13 9l5 3l0 0l-5 3l0 0" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
		<animate attributeName="d" dur="0.6s" fill="freeze" keyTimes="0;0.33;1" values="M9 18l-2 0l0 -12l2 0l0 12M15 6l2 0l0 12l-2 0l0 -12;M13 15l-5 3l0 -12l5 3l0 6M13 9l5 3l0 0l-5 3l0 -6;M13 15l-5 3l0 -12l5 3l0 0M13 9l5 3l0 0l-5 3l0 0" />
	</path>
    </Icon>
  );
}
