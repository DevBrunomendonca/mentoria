import { ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="bg-black px-4 py-2">
      <div className="flex items-center justify-center w-full gap-3">
        <span className="bg-[#F50056] px-[11px] py-1 rounded-3xl text-white text-xs">
          14:57
        </span>
        <p className="text-white text-xs ">Por tempo limitado</p>
        <a href="https://pay.kiwify.com.br/QR59cLu" target="_blank">
          <Button className="text-white text-xs p-0 font-light" variant="link">
            Garantir agora
            <ArrowUpRight size={16} />
          </Button>
        </a>
      </div>
    </header>
  );
};

export default Header;
