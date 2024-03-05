import axios from "axios";

export async function CardList(path:string){
    try {
        const url = "https://rickandmortyapi.com/api/character/"+ path;
        const response = await axios.get(url);
        return await response.data;
    } catch (error) {
        console.error("Erro ao obter dados:", error);
        throw error; // Re-throw para que o erro seja capturado onde a função foi chamada
    }
}