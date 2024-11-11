import Image from "next/image";
import { ReactNode } from "react";

interface CardAboutProps {
  src: string;
  title: string;
  children: ReactNode;
}

const CardAbout = ({ src, title, children }: CardAboutProps) => {
  return (
    <div className="flex items-start justify-start gap-2">
      <div className="bg-[#F8F2FF] p-2">
        <Image src={src} alt="Icone Card" height={24} width={24} />
      </div>
      <div>
        <h3>{title}</h3>
        <ul className="pl-3">{children}</ul>
      </div>
    </div>
  );
};

export default CardAbout;
