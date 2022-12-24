import { VariantProps, cva } from "class-variance-authority";

const buttonStyles = cva("rounded-lg text-slate-800", {
  variants: {
    intent: {
      primary: "px-5 py-2 bg-sky-300 hover:bg-sky-500",
      default: "px-3 py-2 bg-gray-100 hover:bg-gray-300",
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
    <button className={buttonStyles({ intent, animate })} onClick={onClick}>
      {children}
    </button>
  );
}
