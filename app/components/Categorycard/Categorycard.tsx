import Image from "next/image";

interface Props {
  name: string;
  img: string;
  products: number;
}

export default function CategoryCard({ name, img, products }: Props) {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="relative w-[300px]">
        {/* Image */}
        <Image src={img} alt="unable to load" width={300} height={200} className="hover:scale-105 transition-transform duration-500"/>

        {/* Span at the bottom */}
        <span className="absolute bottom-0 left-0 bg-black p-2 w-full text-white bg-opacity-80">
          <h1 className="text-lg">{name}</h1>
          <p className="text-sm">{products} Products</p>
        </span>
      </div>
    </div>
  );
}
