import { Bell, ChevronDown, Facebook, Globe, InstagramIcon, Search, ShieldQuestionIcon, ShoppingCart, User } from "lucide-react"
import "./index.css"
import { ShopeeIcon } from "../../assets/icons"
import { useSelector } from "react-redux"
import { useState } from "react"
import { Modal } from "../modales"
import { user } from "../../../config/data/user"
import { Link } from "react-router-dom"


export const Menu=()=>{
    const [visibleCart,setVisibleCart]=useState(false)
    const cart=useSelector(state=> state.cart)
    const clientCart=cart.filter(item=> item.clientID === user.id)[0]
    return(
        <div className="bg-[#fa5230]">
            <div className="max-w-[1200px] mx-auto"> 
                <div>
                    <div className="flex justify-between">
                        <div className="whitespace-nowrap">
                            <a className="border-r-[#f96d5c] border-r-2 p-1 text-white">Kênh người bán</a>
                            <a className="border-r-[#f96d5c] border-r-2 p-1 text-white">Tải ứng dụng</a>
                            <span className="inline-flex items-center text-white p-1">
                                <span>Kết nối</span>
                                <a className="inline"><Facebook width={16} height={16}/> </a>
                                <a className="inline"><InstagramIcon width={16} height={16}/> </a>
                            </span>
                        </div>
                        <div className="whitespace-nowrap">
                            <a className="border-r-[#f96d5c] border-r-2 p-1 text-white"><Bell className="inline-block"/> Thông báo</a>
                            <a className="border-r-[#f96d5c] border-r-2 p-1 text-white"><ShieldQuestionIcon className="inline-block"/> Hỗ trợ</a>
                            <span className="border-r-[#f96d5c] border-r-2 p-1 text-white inline-block"><Globe className="inline-block"/> Tiếng Việt <ChevronDown className="inline-block"/></span>
                            <a className="border-r-[#f96d5c] border-r-2 p-1 text-white"><User className="inline-block"/> duonge12</a>
                        </div>
                    </div>
                </div>
                <div className="flex items-center">
                    <Link to={'/'} className="ml-[40px] inline-block">
                        <ShopeeIcon/>
                    </Link>
                    <div className="w-[840px]">
                        <SearchBar/>
                    </div>
                    <Link to={'/cartDetail/'+user.id} className="flex-1 px-6 relative" onMouseEnter={()=>setVisibleCart(true)} onMouseLeave={()=>setVisibleCart(false)} >
                        <span className="absolute top-[-40%] text-[10px] left-[48px] bg-white py-[0.5px] px-[6px] rounded-full">{clientCart ? clientCart.cart.length : 0}</span>
                        <ShoppingCart/>
                        <Modal open={visibleCart} clientCart={clientCart.cart}/>
                    </Link>
                </div>
            </div>
        </div>
    )
}

const SearchBar=({props})=>{
    return(
        <div className="w-full flex bg-[white] whitespace-nowrap p-1 rounded-sm">
            <input className="w-full outline-none pl-2" type="text" placeholder={props ? props.placeholder : "Search product"}/>
            <button className="px-[15px] py-[5px] bg-[#fa5230] rounded-sm">
                <Search stroke="white"/>
            </button>
        </div>
    )
}