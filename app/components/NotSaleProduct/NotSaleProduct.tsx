import Image from "next/image";

interface Props {
    img: string;
    price: number;
    name: string;
    customWidth?: number;  // Optional custom width
    customHeight?: number; // Optional custom height
}

export default function NotSaleProduct({
    img,
    price,
    name,
    customWidth = 250,   // Default width is 250
    customHeight = 100   // Default height is 100
}: Props) {
    return (
        <div className="flex flex-col w-[full]">
            <div>
                <Image 
                    src={img} 
                    alt="unable to load" 
                    width={customWidth} 
                    height={customHeight} 
                />
            </div>
            <div className="flex flex-col">
                <h1 className="font-bold">{name}</h1>
                <span className="flex justify-between p-2 items-center">
                    <span className="flex gap-2">
                        <p>${price}</p>
                    </span>
                    <span className="hover:bg-[#029FAE] rounded-lg p-2">
                        <Image 
                            src="/images/cart.png" 
                            alt="unable to load" 
                            width={20} 
                            height={20} 
                        />
                    </span>
                </span>
            </div>
        </div>
    );
}

// Usage with custom width and height

