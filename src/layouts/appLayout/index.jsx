import { Outlet } from "react-router-dom"
import { Menu } from "../../components"


export const RootPage=()=>{
    return(
        <div className="bg-[#f5f5f5]">
            <Menu/>
            <div className="max-w-[1200px] mx-auto">
                <Outlet/>
            </div>
        </div>
    )
}