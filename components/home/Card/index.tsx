import AboutPerson from "@/pages/[aboutperson]";
import Image from "next/image";
import Link from "next/link";


interface CardProps{
    name:string;
    image:string;
    id:string;
    width:number;
    height:number;
}

export function Card({id,image, name,width,height}:CardProps){
    return(
    
    <div key={id} className="card bg-[#3C3E44] flex flex-col-reverse items-center justify-between box-border max-w-72 rounded-lg relative">
        <Link href={`${id}`} className="text-white font-madimi font-semibold p-5 my-3 border-white border-2 rounded-2xl  hover:text-[#3C3E44] hover:bg-white transition-background-color duration-1000 ease-in-out ">Saber Mais</Link>

        <section className="flex w-full justify-center flex-col ">
            <h2 className={`font-madimi  py-6 font-extrabold text-white max-w-60 px-1 text-center self-center min-h-20 text-2xl`}>{name}</h2>
            <p className="font-sans px-4 pb-3 text-white text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error nihil quasi et perferendis autem odit cum maiores accusantium ipsum? Ratione in expedita soluta molestias, hic cupiditate. Impedit voluptate cumque unde?</p>
        </section>
        <Image  className='w-full rounded-t-lg' src={image} alt={'card de '+name} width={width} height={height}></Image>
    </div>
    )
}