import logo from "../../assets/logo.png";

export function Header() {
  return (
    <div className="flex relative mt-4 mb-10">
      <img src={logo} alt="Tasks List" className="w-28 h-28 -rotate-12" />
      <p className="text-5xl font-bold text-white absolute ml-20 mt-8 drop-shadow-[-1px_2px_1px_rgba(0,0,0,0.5)]">
        Tasks List
      </p>
    </div>
  );
}
