import Icon from "../../Icon";

export default function LoadingLoop({
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
      <path d="M12 3c4.97 0 9 4.03 9 9" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
		<animateTransform attributeName="transform" type="rotate" dur="1.5s" repeatCount="indefinite" values="0 12 12;360 12 12" />
	</path>
    </Icon>
  );
}
