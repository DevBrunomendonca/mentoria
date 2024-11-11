import Image from "next/image";

const ButtonWtpp = () => {
  return (
    <a
      href="https://wa.link/wg1gkq"
      target="_blank"
      className="fixed z-50 bottom-[2vh] right-4"
    >
      <Image
        src="/icons/icone-wtpp.svg"
        alt="Icone whatsApp"
        width={50}
        height={50}
        quality={100}
      />
    </a>
  );
};

export default ButtonWtpp;
