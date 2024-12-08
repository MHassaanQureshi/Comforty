import Image from "next/image";
import Link from "next/link";

interface Props {
    name: string;
    price: number;
    from: number;
    img: string;
    id: string;
}

export default function SaleProductcard({ id, name, price, from, img }: Props) {
    return (
        <Link href={`/item/${id}`} passHref>
            <div className="flex flex-col w-[full]">
                <div>
                    <span className="absolute bg-[#F5813F] p-1 text-white ml-2 mt-4 text-sm rounded-lg">
                        Sales
                    </span>
                    <Image src={img} alt="unable to load" width={250} height={100} />
                </div>
                <div className="flex flex-col">
                    <h1 className="font-bold">{name}</h1>
                    <span className="flex justify-between p-2 items-center">
                        <span className="flex gap-2 items-center">
                            <p>${price}</p>
                            <p className="line-through text-[#9A9CAA] text-sm">${from}</p>
                        </span>
                        <span className="hover:bg-[#029FAE] rounded-lg p-2">
                            <Image src="/images/cart.png" alt="unable to load" width={20} height={20} />
                        </span>
                    </span>
                </div>
            </div>
        </Link>
    );
}
