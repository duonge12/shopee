import { products } from "../../../config/data/data";

  
  export function Modal({ open, purchased_products}) {
    if (!open) return null;
    const purchasedList=purchased_products.map((item,index)=>{
        const product=products.filter((product,productIndex)=> product.id === item.id)[0];
        return(
            <div className="w-[400px] h-fit flex">
                <img className="h-[50px] w-[50px]" src={product.imageSrc}/>
                <div className="flex w-full items-center pl-2">
                    <span className="overflow-hidden text-ellipsis flex-1">{product.name}</span>
                    <span className="w-[50px]">{product.price}</span>
                </div>
            </div>
        )
    }
    )
    return (
      <div className="w-fit absolute top-[150%] right-[-50%] bg-white p-2 rounded-md">
        {purchasedList}
      </div>
    );
  }
  