import Image from "next/image"

export default function Header(){
    return(
        <header className="px-8 py-5 flex items-center justify-center bg-slate-600 mb-8 ">
            
            <Image src={'/logo-rick-and-morty.png'} alt="logo rick and morty" width={500} height={500}></Image>
        </header>
    )
}