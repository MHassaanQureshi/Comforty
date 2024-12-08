import Image from "next/image";
interface props{
    img:string;
    price:number;
    
    name:string;
}
export default function NotSaleProduct({img,price,name}:props){
    return(
        <div className="flex flex-col w-[full]">
            <div>
            
                <Image src={img} alt="unable to load" width={250} height={100} />
            </div>
            <div className="flex flex-col">
            <h1 className="font-bold">{name}</h1>
                <span className="flex justify-between p-2 items-center">
  
                    <span className="flex gap-2">
                        <p>{price}</p>
                        </span>
                        <span className="hover:bg-[#029FAE] rounded-lg p-2" >
                        <Image src="/images/cart.png" alt="umable to load" width={20} height={20} />
                        </span>
                </span>
                
            </div>
        </div>
    )
}