
import Card from "@/components/home/Card";
import ICard from "@/interfaces/ICard";
import { GetApiData } from "@/services/GetApiData";
import { useEffect, useState } from "react";

export default function Home(){
    const [cards, setCards] = useState<ICard[]>([]);
    
    useEffect(() => {
      const fetchData = async () => {
              const allcards = await GetApiData('');
              setCards(allcards.results);
      };
      fetchData();
    }, []);

    return(
        <main className="flex flex-wrap gap-4">
          {cards.map(card => {
            return(
              <Card height={300} width={300} id={card.id} image={card.image} name={card.name} key={card.id}></Card>
            )
          })}
        </main>
    );
}
