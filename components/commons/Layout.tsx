import { ReactNode } from "react";
import Header from "./Header";

interface LayoutProps{
    children: ReactNode | string
}

export default function Layout({children}:LayoutProps){
    return(
        <>
            <Header></Header>
            {children}
        </>
    )
}