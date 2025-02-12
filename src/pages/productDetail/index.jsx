import { useParams } from "react-router-dom";
import { products } from "../../../config/data/data";
import { ShoppingCart, Truck } from "lucide-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";

export const ProductCard = () => {
    const [amount, setAmount]=useState(1);
    const {id, clientID}=useParams()
    const dispatch=useDispatch()
    const product=products.filter(item=> item.id=== id*1)[0]
    const salePrice=product.price*(1-product.sale);
    
    const handleChangeAmount=(value)=>{
        const newValue=amount+value
        if(newValue<1) return;
        setAmount(amount+value)
    }
    const handleAddToCart=()=>{
        dispatch(addToCart({clientID:Number(clientID), id: Number(id), amount:amount}))
    }   
    return (
        <div>
            <div className="flex gap-4 p-4 bg-white">
                <div className="">
                    <img src={product.imageSrc} className="w-[450px] h-[450px] object-cover"/>
                    <div className="flex gap-1 p-1">
                        <div className="w-[82px] h-[82px] bg-amber-200"></div>
                        <div className="w-[82px] h-[82px] bg-amber-200"></div>
                        <div className="w-[82px] h-[82px] bg-amber-200"></div>
                        <div className="w-[82px] h-[82px] bg-amber-200"></div>
                        <div className="w-[82px] h-[82px] bg-amber-200"></div>
                    </div>
                </div>
                <div className="flex-1 flex flex-col gap-1">
                    <div className="h-[450px] flex flex-col">
                        <h1 className="text-[40px]" >{product.name}</h1>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <span className="font-bold mr-1">5.0</span>
                                <span className="text-yellow-500 mr-1">★★★★★</span>
                                <span className="mr-2">(107 Đánh Giá)</span>
                                <span>560 Sold</span>
                            </div>
                            <div>
                                <span>Tố cáo</span>
                            </div>
                        </div>
                        <div className="flex items-center p-4 bg-[#f5f5f5]">
                            <span className="text-red-500 font-semibold mr-2 text-[25px]">{Math.round(salePrice).toFixed(2)}</span>
                            <span className="line-through text-gray-500">{Math.round(product.price).toFixed(2)}</span>
                        </div>
                        <div className="flex flex-col gap-3 text-[20px] flex-1">
                            <div className="flex flex-1">
                                <div className="flex-1 text-[#757575]">
                                    Vận chuyển
                                </div>
                                <div className="flex-5">
                                    <div>Nhận từ 16 Th02 - 19 Th02</div>
                                    <div></div>
                                </div>
                            </div>
                            <div className="flex flex-1">
                                <div className="flex-1 text-[#757575]">
                                    An tâm mua sắm cùng shopee
                                </div>
                                <div className="flex-5">
                                    <div>Xử lý đơn hàng từ shopee</div>
                                    
                                </div>
                            </div>
                            <div className="flex flex-1">
                                <div className="flex-1 text-[#757575]">
                                    Số lượng
                                </div>
                                <div className="flex-5">
                                    <div className="flex w-[115px]">
                                        <button className="border border-[#00000017] flex-[1.3]" onClick={()=>handleChangeAmount(1)}>+</button>
                                        <span className="border border-[#00000017] flex-[2.3] bg-white text-center">{amount}</span>
                                        <button className="border border-[#00000017] flex-[1.3]" onClick={()=>handleChangeAmount(-1)}>-</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h-[80px] flex gap-3">
                        <button className="flex justify-center gap-1 bg-[#ffeee8] border border-orange-700 h-fit min-w-[180px] p-4 text-orange-700" onClick={handleAddToCart}>
                            <ShoppingCart/>
                            <span>Thêm vào giỏ hàng</span>
                        </button>
                        <button className="flex justify-center gap-3 bg-red-800 h-fit min-w-[180px] p-4 text-white">
                            <span>Mua ngay</span>
                        </button>
                    </div>
                   



                </div>
            </div>
        </div>
    );
};