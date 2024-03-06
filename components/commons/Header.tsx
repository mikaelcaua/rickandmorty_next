
import {Roboto} from "next/font/google"
import NavBar from "./NavBar"

const roboto_font = Roboto({
    subsets:['latin'],
    weight:["400", "900"]
})

export default function Header(){
    return(
        <div className={`px-8 flex justify-center bg-white mb-8 min-h-60 items-center gap-10 flex-col`}>
            <h1 className={`${roboto_font.className} font-extrabold text-5xl text-center`}>Rick and Morty</h1>
            <NavBar></NavBar>

        </div>
    )
}