import Icon from "../../Icon";

export default function CloseSmall({
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
      <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke-dasharray="18">
		<path d="M7 7l10 10">
			<animate attributeName="stroke-dashoffset" dur="0.5s" fill="freeze" values="18;0" />
		</path>
		<path d="M17 7l-10 10" stroke-dashoffset="18">
			<animate attributeName="stroke-dashoffset" begin="0.5s" dur="0.5s" fill="freeze" to="0" />
		</path>
	</g>
    </Icon>
  );
}
