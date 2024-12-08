import Image from "next/image";
export default function Categorycard(){
    return(
        <div className="w-full flex flex-col items-center">
            <span className="absolute bg-black p-1 mt-[58%] w-[300px] text-white  bg-opacity-80 ">
                <h1 className="teXt-lg">Wing chair</h1>
                <p className="text-sm">3,584 Products</p>
            </span>
            <Image src="/images/cat-2.png" alt="unable to load" width={300} height={200} />
            
        </div>
    )
}