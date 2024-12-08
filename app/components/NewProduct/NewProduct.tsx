import Image from "next/image";
interface props{
    name:string;
    price:number;
  
    img:string;
}
export default function NewProduct({name,price,img}:props){
    return(
        <div className="flex flex-col w-[full]">
            <div>
            <span className="absolute bg-[#01AD5A] p-1 text-white ml-2 mt-4 text-sm rounded-lg">
      New
    </span>
                <Image src={img} alt="unable to load" width={250} height={100} />
            </div>
            <div className="flex flex-col">
            <h1 className="font-bold">{name}</h1>
                <span className="flex justify-between p-2 items-center">
  
                    <span className="flex gap-2 items-center">
                        <p>${price}</p>
                        </span>
                        <span className="hover:bg-[#029FAE] rounded-lg p-2">
                        <Image src="/images/cart.png" alt="umable to load" width={20} height={20} />
                        </span>
                </span>
                
            </div>
        </div>
    )
}