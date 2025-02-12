import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { products } from "../../../config/data/data";
import { addToCart, checkAllItemInCart, checkItemInCart, removeFromCart } from "../../redux/slices/cartSlice";
import { useEffect, useState } from "react";

export const CartDetail=()=>{
    const cartList=useSelector(state => state.cart);
    const {clientID}=useParams();
    const dispatch=useDispatch();
    const [checkAll, setCheckedAll]=useState()

    const clientCart=cartList.filter(item=> item.clientID === Number(clientID))[0].cart;
    const clientCheckedItems=clientCart.filter(item=> item.checked)
    let totalPriceBeforeSale=0;
    const totalPrice=clientCheckedItems.reduce((sum, item)=> {
      const product=products.filter(product=> product.id === item.id)[0]
      const saledPrice=product.price*(1-product.sale)
      totalPriceBeforeSale+= product.price* item.amount;
      return sum +(saledPrice * item.amount )
    },0)

    const handleChangeAmount=(id, value, currentAmount)=>{
      const newAmount= currentAmount+value;
      console.log(newAmount)
      if(newAmount <1) return;
      dispatch(addToCart({clientID:Number(clientID) ,id: Number(id), amount: value}))
    }

    const handleRemoveFromCart=(id)=>{
      dispatch(removeFromCart({clientID: Number(clientID) ,id: id}))
    }
    const handleCheckItemInCart=(id)=>{
      dispatch(checkItemInCart({clientID: Number(clientID) ,id: id}))
    }
    const handleCheckAllItemInCart=async (e)=>{
      setCheckedAll(!checkAll)
    }



    const handleRenderCard=()=>{
      return clientCart.map((item, index)=>{
        const product=products.filter(product=> product.id === item.id)[0];
        const discountPrice =Math.round(product.price * (1- product.sale)).toFixed(2)
        const totalMoney=Math.round(discountPrice * item.amount); 
        return(
          <div key={index} className="flex items-center border border-[#00000017]">
            <input className="mx-[20px]" type="checkbox" checked={item.checked} onChange={()=>handleCheckItemInCart(product.id)}/>
            <div className="flex-1 flex">
              <div className="flex-1">
                <div className="flex">
                  <img src={product.imageSrc} alt="avvvv" className="w-[80px] h-[80px]" />
                  <div className="flex items-center">{product.name}</div>
                </div>
              </div>

              <div className="flex-1"></div>
              <div className="flex-1 flex gap-2">
                <span className="line-through flex items-center">₫{product.price}</span>
                <span className="flex items-center">₫{discountPrice}</span>
              </div>
              <div className="flex-1 flex items-center">
                <div className="flex w-[115px]">
                  <button className="border border-[#00000017] flex-[1.3]" 
                    onClick={()=>handleChangeAmount(product.id,1,item.amount)}
                  >+</button>
                  <span className="border border-[#00000017] flex-[2.3] bg-white text-center">{item.amount}</span>
                  <button className="border border-[#00000017] flex-[1.3]" 
                    onClick={()=>handleChangeAmount(product.id,-1,item.amount)}
                  >-</button>
                </div>
              </div>
              <div className="flex-1 text-red-500 flex items-center">
                ₫{totalMoney}
              </div>
              <div className="flex-1 flex items-center" onClick={()=>handleRemoveFromCart(product.id)}>
                Xóa
              </div>
            </div>
          </div>
        )
        }
      )
    }
    useEffect(()=>{
      if(checkAll ===undefined) return;
      dispatch(checkAllItemInCart({clientID: Number(clientID) , value: checkAll}))
    },[checkAll])
    return(
        <div className="w-full flex flex-col gap-3">
          <div className="flex">
              <input className="mx-[20px]" type="checkbox" />
              <span className="flex-1 py-[20px]">Sản phẩm</span>
              <div className="flex-1"></div>
              <div className="flex-1 py-[20px]">Đơn giá</div>
              <div className="flex-1 py-[20px]">Số lượng</div>
              <div className="flex-1 py-[20px]">Số tiền</div>
              <div className="flex-1 py-[20px]">Thao tác</div>
          
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex-1 py-[20px]">
              <input className="mx-[20px]" type="checkbox" />
              <span className="text-white bg-red-500">Yêu thích</span>
            </div>

            <div className="">
              {handleRenderCard()}  
            </div>
            <div className="bg-white flex">
              <div className="flex-1 flex py-[20px] items-center">
                <input className="mx-[20px]" type="checkbox" value={checkAll} onChange={(e)=>handleCheckAllItemInCart(e)}/>
                <span>Chọn tất cả {`(${clientCart.length})`}</span>
              </div>
              <div className="flex-1 flex">
                <div className="flex-1 py-[20px] flex items-center">
                  <span>Tổng thanh toán {`(${clientCheckedItems.length} Sản phẩm)`}</span>
                </div>
                <div className="flex-1 flex flex-col py-[20px]">
                  <span className="text-red-500">{totalPrice}</span>
                  <span className="flex gap-2">
                    <span>Tiết kiệm </span>
                    <span className="text-red-500">{totalPriceBeforeSale - totalPrice}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}