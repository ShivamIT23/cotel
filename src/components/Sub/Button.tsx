export default function Button({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className="rounded-[100px] w-fit min-w-32 bg-[#444823] p-2 gap-2 flex md:whitespace-nowrap hover:drop-shadow-lg transition"
    >
      <button className="bg-inherit flex items-center rounded-[100px] justify-evenly whitespace-nowrap text-white min-w-full w-fit h-fit roboto font-bold text-xl sm:text-2xl md:text-[14px]">
        {children}
      </button>
    </div>
  );
}
