
import {IPerson, defaultPerson} from "@/interfaces/IPerson";
import { CardList } from "@/services/CardList";
import Image from "next/image";
import { useRouter } from "next/router"
import { useState } from "react"
import {Roboto} from "next/font/google"

const roboto_font = Roboto({
    subsets:['latin'],
    weight:["400", "900"]
})

export default function AboutPerson(){
    const router = useRouter()
    const id = router.query.aboutperson

    const [person, setPerson] = useState<IPerson>(defaultPerson);

    async function fetchCharacterData() {
        try {
            const character = await CardList(`${id}`); 
            setPerson(character)
        } catch (error) {
            console.error("Erro ao buscar dados de personagens:", error);
   
        }
    }

    fetchCharacterData();


    return(
        <div className="flex items-center flex-col mx-2 min-h-[98vh]">

            <h1 className="text-neutral-50 font-extrabold text-3xl font-madimi pb-10 mx-4">{person.name}</h1>

            <Image src={person.image} alt={person.name} width={300} height={300} unoptimized className="rounded-xl"></Image>

            <section className={`flex flex-col gap-12 items-center md:flex-row w-full justify-around pt-10 ${roboto_font.className} font-bold text-zinc-300`}>
                <div className="flex items-center flex-col justify-center gap-3 text-2x1">
                    <label className="border-b-2 border-solid">Status</label>
                    <p className="font-normal font-madimi">{person.status}</p>
                </div>

                <div className="flex items-center flex-col justify-center gap-3 text-2x1 ">
                    <label className="border-b-2 border-solid">Localition</label>
                    <p className="font-normal font-madimi">{person.location.name}</p>
                </div>

                <div className="flex items-center flex-col justify-center gap-3 text-2x1">
                    <label className="border-b-2 border-solid">Species</label>
                    <p className="font-normal font-madimi">{person.species}</p>
                </div>
                
            </section>
        </div>
    )
}