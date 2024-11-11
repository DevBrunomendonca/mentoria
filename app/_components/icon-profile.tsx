import Image from "next/image";

interface IconProfileProps {
  src: string;
  className?: string;
}

const IconProfile = ({ src, className }: IconProfileProps) => {
  return (
    <Image
      src={src}
      alt="Icone de Perfil"
      height={48}
      width={48}
      quality={100}
      sizes="100vh"
      className={`${className}`}
    />
  );
};

export default IconProfile;
