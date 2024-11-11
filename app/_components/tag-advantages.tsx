import Image from "next/image";

interface TagAdvantagensProps {
  paragraph: string;
  src: string;
}

const TagAdvantages = ({ src, paragraph }: TagAdvantagensProps) => {
  return (
    <div className="p-3 flex rounded-md items-center border-[1px] border-opacity-20 border-gray-500 justify-start gap-1">
      <Image
        src={src}
        alt="Icone Vantagens"
        height={0}
        width={0}
        sizes="100vh"
        className="h-[20px] w-full max-w-[30px]"
      />
      <p className="text-xs text-gray-500">{paragraph}</p>
    </div>
  );
};

export default TagAdvantages;
