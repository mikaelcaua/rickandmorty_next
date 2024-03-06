import Link from "next/link";

export default function NavBar(){
    return(
        <div >
            <ul className="flex items-center justify-center py-1 font-madimi font-bold flex-row text-2xl gap-20 ">
                <li><Link href={'../'}>Home</Link></li>
                <li><Link href={'../'}>About</Link></li>
            </ul>
        </div>
    )
}