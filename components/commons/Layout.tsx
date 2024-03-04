import { ReactNode } from "react";
import Header from "./Header";

interface LayoutProps{
    children: ReactNode | string
}

export default function Layout({children}:LayoutProps){
    return(
        <div className="bg-[#272B33]">
            <Header></Header>
            {children}
        </div>
    )
}