import Image from "next/image";
import Link from "next/link";

import { useCart } from "@/app/context/cartContext";
interface Props {
    img: string;
    price: string;
    name: string;
    id:string;
    from:string;
}


export default function NotSaleProduct({
    img,
    price,
    name, 
    from,
    id, // Default height is 100
}: Props) {
    const { addToCart } = useCart();
    const handleAddToCart = () => {
        const item = {
          img,
          price: parseFloat(price), // Convert price to a number for better handling
          name,
          from: 0, // You can add a 'from' price here if necessary
          review: 0, // Add review count if available
        };
        addToCart(item);
      };
    return (
        
            <div className="flex flex-col w-[full]">
                <div>
                    <span className="absolute bg-[#F5813F] p-1 text-white ml-2 mt-4 text-sm rounded-lg">
                        Sales
                    </span>
                    <Image src={img} alt="unable to load" width={250} height={100} className="hover:scale-105 transition-transform duration-500"/>
                </div>
                <div className="flex flex-col">
                    <h1 className="font-bold">{name}</h1>
                    <span className="flex justify-between p-2 items-center">
                        <span className="flex gap-2 items-center">
                            <p>${price}</p>
                            <p className="line-through text-[#9A9CAA] text-sm">${from}</p>
                        </span>
                        <span className="hover:bg-[#029FAE] rounded-lg">
                    <button onClick={handleAddToCart}>
                    <Image 
                            src="/images/cart.png" 
                            alt="unable to load" 
                            width={20} 
                            height={20} 
                        />
    </button>
                    </span>
                    </span>
                </div>
            </div>
       
    );
}
