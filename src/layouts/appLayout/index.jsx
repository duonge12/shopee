import { Menu } from "../../components"
import { ProductPage } from "../../pages"
import "./appLayout.css"


export const RootPage=()=>{
    return(
        <div className="bg-[#f5f5f5]">
            <Menu/>
            <ProductPage/>
        </div>
    )
}