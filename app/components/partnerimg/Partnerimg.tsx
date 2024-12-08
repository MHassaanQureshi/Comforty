import Image from "next/image"

interface brandprops{
    link:string;
}
export default function Partnerimg({link}:brandprops){
    return(
        <>
        <Image src={link} alt="unable to load" width={100} height={100} className="mix-blend-multiply"/>
        </>
    )
}