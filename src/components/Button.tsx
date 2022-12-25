import { VariantProps, cva } from "class-variance-authority";

const buttonStyles = cva("rounded-lg text-slate-800 focus:outline-none", {
  variants: {
    intent: {
      primary:
        "px-5 py-2 bg-sky-300 hover:bg-sky-700 focus:ring focus:ring-sky-700",
      default:
        "px-3 py-2 bg-gray-100 hover:bg-gray-300 focus:ring focus:ring-gray-500",
    },
    animate: {
      true: "animate-shake",
    },
  },
  defaultVariants: {
    intent: "default",
  },
});

type Props = {
  type?: "button" | "submit";
  onClick(): void;
  children: React.ReactNode;
  animate?: boolean;
} & VariantProps<typeof buttonStyles>;

export function Button({
  type = "button",
  intent,
  children,
  onClick,
  animate = false,
}: Props) {
  return (
    <button
      className={buttonStyles({ intent, animate })}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
