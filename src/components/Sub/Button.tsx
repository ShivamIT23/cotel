export default function Button({ children }: { children: React.ReactNode }) {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div
      onClick={() => scrollToSection("franchise")}
      className="rounded-[100px] w-fit min-w-32 bg-[#444823] p-2 gap-2 flex md:whitespace-nowrap hover:drop-shadow-lg transition"
    >
      <button className="bg-inherit flex items-center justify-evenly text-white min-w-full w-fit h-fit roboto font-medium md:text-[16px]">
        {children}
      </button>
    </div>
  );
}
