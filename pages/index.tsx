
import { Card } from "@/components/home/Card";
import {IPerson} from "@/interfaces/IPerson";
import { CardList } from "@/services/CardList";

import { useEffect, useState } from "react";

export default function Home(){
    const [cards, setCards] = useState<IPerson[]>([]);
    
    useEffect(() => {
      const fetchData = async () => {
              const allcards = await CardList('');
              setCards((prev)=> allcards.results);
      };
      fetchData();
    }, []);

    return(
        <main className="">
          <div className="flex flex-wrap gap-x-5 gap-y-10 justify-center m-auto max-w-6xl"> 
            {cards.map(card => {
              return(
                <Card height={280} width={280} id={card.id} image={card.image} name={card.name} key={card.id}></Card>
              )
            })}
          </div>
        </main>
    );
}
