import Image from "next/image";

interface CardProps{
    name:string;
    image:string;
    id:string;
    width:number;
    height:number;
}

export default function Card({name, image, width, height, id}:CardProps){
    return(
    
    <div key={id} className="card">
        <h2>{name}</h2>
        <Image  src={image} alt={'card de '+name} width={width} height={height}></Image>
    </div>
    )
}