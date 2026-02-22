import Icon from "../../Icon";

export default function TwitterXAlt({
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
      <path d="M1 2h2.5l15 20h-2.5ZM5.5 2h2.5l15 20h-2.5ZM3 2h5v2h-5ZM16 20h5v2h-5ZM18.5 2h3.5l-17 20h-3.5Z" fill="currentColor">
		<animate attributeName="d" dur="0.8s" fill="freeze" keyTimes="0;0.3;0.5;1" values="M8.5 2h2.5l0 0h-2.5ZM13 2h2.5l0 0h-2.5ZM10.5 2h5v0h-5ZM8.5 2h5v0h-5ZM10 2h3.5l0 0h-3.5Z;M8.5 2h2.5l0 20h-2.5ZM13 2h2.5l0 20h-2.5ZM10.5 2h5v2h-5ZM8.5 20h5v2h-5ZM10 2h3.5l0 20h-3.5Z;M8.5 2h2.5l0 20h-2.5ZM13 2h2.5l0 20h-2.5ZM10.5 2h5v2h-5ZM8.5 20h5v2h-5ZM10 2h3.5l0 20h-3.5Z;M1 2h2.5l15 20h-2.5ZM5.5 2h2.5l15 20h-2.5ZM3 2h5v2h-5ZM16 20h5v2h-5ZM18.5 2h3.5l-17 20h-3.5Z" />
	</path>
    </Icon>
  );
}
