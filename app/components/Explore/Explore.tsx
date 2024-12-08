import Image from "next/image";

export default function Explore() {
  return (
    <div className="flex flex-col items-center justify-center space-y-8 md:flex-row md:space-y-2 md:space-x-2">
      {/* Text and Image Section */}
      <div className="w-full flex flex-col items-center md:flex-row md:items-start md:h-[80%]">
        <h1 className="text-xl uppercase mb-4 md:writing-vertical md:mb-0  text-center md:text-left md:mt-10 md:-mr-8">
          EXPLORE NEW AND POPULAR STYLES
        </h1>
        <div className="w-full flex justify-center  ">
          <Image
            src="/images/product-3.png"
            alt="unable to load"
            width={300}
            height={100}
            className="max-w-full md:h-[80%] md:w-[80%] hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-2 gap-4 sm:gap-6 md:w-[60%]  md:gap-10 md:h-[80%]">
        <span className="flex flex-col gap-4 md:h-full md:gap-20"><Image
          src="/images/product-1.png"
          alt="unable to load"
          width={150}
          height={100}
          className="max-w-full md:w-[22rem] hover:scale-105 transition-transform duration-500"
        />
        <Image
          src="/images/product-4.png"
          alt="unable to load"
          width={150}
          height={100}
          className="max-w-full md:w-[20rem]  hover:scale-105 transition-transform duration-500"
        /></span>
        <span className="flex flex-col gap-4 md:h-full md:gap-20">
        <Image
          src="/images/product-2.png"
          alt="unable to load"
          width={150}
          height={100}
          className="max-w-full md:w-[20rem]  hover:scale-105 transition-transform duration-500"
        />
        <Image
          src="/images/product-1.png"
          alt="unable to load"
          width={150}
          height={100}
          className="max-w-full md:w-[20rem] hover:scale-105 transition-transform duration-500"
        />
        </span>
      </div>
    </div>
  );
}
