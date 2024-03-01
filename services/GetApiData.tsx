import axios from "axios";

export async function GetApiData(path:string){
    const url = "https://rickandmortyapi.com/api/character" + '/' + path;
    const response = await axios.get(url);
    return response.data;
}
