
import {IPerson, defaultPerson} from "@/interfaces/IPerson";
import { CardList } from "@/services/CardList";
import Image from "next/image";
import { useRouter } from "next/router"
import { useEffect, useState } from "react"


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
        <>
            <h1>Name: {person.name}</h1>
            <Image src={person.image} alt={person?.name} width={500} height={500} unoptimized></Image>
        </>
    )
}