import { Settings } from "lucide-react";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b-3 border-b-[#000000] border-t-3 border-t-[#F1B27E] shadow-md font-titi print:hidden">
      <div className="flex justify-between items-center px-4 py-3">
        <div className="flex items-center gap-2">
          <p className="font-bold tracking-wider uppercase text-2xl">
            <span className="underline decoration-[#F1B27E] decoration-2 underline-offset-8">
              Table editor
            </span>
          </p>
          <span className="text-[10px] bg-[#F1B27E] text-black px-1.5 py-0.5 rounded font-bold">
            BETA
          </span>
        </div>
        <button className="p-2 rounded-full hover:bg-[#F1B27E]/50 active:scale-95 transition-all duration-200">
          <Settings
            width={22}
            className="cursor-pointer text-black hover:rotate-45 transition-transform duration-300"
          />
        </button>
      </div>
    </header>
  );
};
