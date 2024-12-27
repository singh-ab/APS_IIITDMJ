interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  color?: "teal" | "white";
}

export default function Button({
  children,
  onClick,
  color = "teal",
}: ButtonProps) {
  const colorStyles = {
    teal: "shadow-[0_0_0_3px_teal-400_inset] border-teal-400 text-teal-400 hover:border-white hover:text-white",
    white:
      "shadow-[0_0_0_1px_white_inset] text-white hover:border-teal-400 hover:text-teal-400",
  };

  return (
    <button
      className={`px-6 py-2 bg-transparent font-bold transform hover:-translate-y-1 transition duration-400 ${
        color === "teal" ? "border" : ""
      } ${colorStyles[color]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
