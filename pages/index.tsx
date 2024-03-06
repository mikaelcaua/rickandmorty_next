
// import { Card } from "@/components/home/Card";
// import { IPerson } from "@/interfaces/IPerson";
// import { CardList } from "@/services/CardList";

// import { useEffect, useState } from "react";

// export default function Home() {
//   const [cards, setCards] = useState<IPerson[]>([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       let i = 1;
//       const newCards:IPerson[] = []; // Array para armazenar os novos resultados

//       while (i <= 42) {
//         const allcards = await CardList('?page=' + i);
//         newCards.push(...allcards.results); // Adiciona os novos resultados ao array
//         i++;
//       }

//       setCards(prev => [...prev, ...newCards]); // Atualiza a lista de cartões com os novos resultados
//     };

//     fetchData();
//   }, []);

//   return (
//     <main className="">
//       <div className="flex flex-wrap gap-x-5 gap-y-10 justify-center m-auto max-w-6xl">
//         {cards.map(card => {
//           return (
//             <Card
//               height={280}
//               width={280}
//               id={card.id}
//               image={card.image}
//               name={card.name}
//               key={card.id}
//             />
//           );
//         })}
//       </div>
//     </main>
//   );
// }


import { Card } from "@/components/home/Card";
import { IPerson } from "@/interfaces/IPerson";
import { CardList } from "@/services/CardList";

import { useEffect, useState } from "react";

export default function Home() {
  const [cards, setCards] = useState<IPerson[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const promises = [];
      let numPages = 42;
      for (let i = 1; i <= numPages; i++) {
        promises.push(CardList('?page=' + i));
      }

      try {
        const responses = await Promise.all(promises);
        const allCards = responses.flatMap(response => response.results);
        setCards(allCards);
        
      } catch (error) {
        console.error("Error fetching data:", error);
      }

      // for (let i = 1; i <= numPages; i++) {
      //   let response = await CardList('?page=' + i);
      //   setCards(prev => [...prev, ...response.results]);
      // } SOLUÇÃO MAL OTIMIZADA
    
    };

    fetchData();
  }, []);

  return (
    <main className="container_main">
      <div className="flex flex-wrap gap-x-5 gap-y-10 justify-center m-auto max-w-6xl min-h-[98vh] mx-2">
        {cards.length==0 && <p className="text-neutral-50 font-extrabold text-2xl font-madimi pt-6">Carregando...</p>} 
        {cards.map(card => (
          <Card
            height={280}
            width={280}
            id={card.id}
            image={card.image}
            name={card.name}
            key={card.id}
          />
        ))}
      </div>
    </main>
  );
}
