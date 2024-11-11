import Image from "next/image";

interface CardTestimonialsProps {
  src: string;
  name: string;
  description: string;
}

const CardTestimonials = ({
  src,
  name,
  description,
}: CardTestimonialsProps) => {
  return (
    <div className="p-5 flex w-full min-w-[300px] flex-col items-start gap-2 rounded-lg border-[1px] border-gray-500 border-opacity-15">
      <Image src={src} alt="Icone de perfil" width={48} height={48} />
      <h3 className="text-black font-semibold text-lg">{name}</h3>
      <p className="text-gray-500 text-sm">{description}</p>
    </div>
  );
};

export default CardTestimonials;
