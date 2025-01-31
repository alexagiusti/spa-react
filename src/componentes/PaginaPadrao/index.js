import Banner from "componentes/Banner";
import { Outlet } from "react-router-dom";

export default function PaginaPadrão() {
    return (
        <main>
            <Banner />
           
           <Outlet/>
        </main>
    )
}