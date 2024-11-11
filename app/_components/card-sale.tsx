import Image from "next/image";

interface CardSaleProps {
  src: string;
  title: string;
  description: string;
}

const CardSale = ({ src, title, description }: CardSaleProps) => {
  return (
    <div className="bg-white space-y-1 p-6 flex flex-col items-start">
      <Image
        src={src}
        alt={`Icone ${title}`}
        width={0}
        height={0}
        className="h-9 w-full max-w-9"
      />
      <h3 className="font-medium pt-1 text-lg text-black">{title}</h3>
      <p className="text-gray-500 text-sm">{description}</p>
    </div>
  );
};

export default CardSale;
