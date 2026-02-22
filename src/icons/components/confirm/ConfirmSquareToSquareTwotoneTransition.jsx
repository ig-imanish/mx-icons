import Icon from "../../Icon";

export default function ConfirmSquareToSquareTwotoneTransition({
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
		<path d="M4 12v-7c0 -0.55 0.45 -1 1 -1h14c0.55 0 1 0.45 1 1v14c0 0.55 -0.45 1 -1 1h-14c-0.55 0 -1 -0.45 -1 -1Z" fill="currentColor" fill-opacity="0.3">
			<animate attributeName="fill-opacity" dur="0.2s" fill="freeze" values="0;0.3" />
		</path>
		<path d="M8 12l3 3l5 -5" fill="none" stroke-dasharray="14">
			<animate attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" fill="freeze" values="0;14" />
		</path>
	</g>
    </Icon>
  );
}
