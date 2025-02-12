
import { MapPin, Package } from "lucide-react";
import { products, vietnamCities } from "../../../config/data/data";
import { Link } from "react-router-dom";
import { user } from "../../../config/data/user";

export const ProductPage=()=>{
    return(
      <div className="flex">
          <div className="w-[190px] bg-gray-500">
              filter menu coming later
          </div>
          <div className="flex-1">
              <div className="">Sorting menu coming later</div>
              <div>
                  <ProductTable/>
              </div>
          </div>
      </div>
    )
}

const ProductTable = () => {
  const {id: clientID}=user;
  return (
    <div className="grid grid-cols-5 gap-4 p-4">
      {products.map((product) => (
        <Link
          key={product.id}
          to={"/detail/"+product.id+"/"+clientID}
          className="h-fit bg-white border border-[#00000017]"
        >
          <img className="w-full h-1/2 object-cover" src={product.imageSrc} alt={product.name} />
          <div className="grid grid-rows-4 gap-2 p-2 ">
            <span className="whitespace-nowrap overflow-hidden text-ellipsis">{product.name}</span>
            <div className="flex items-center gap-1">
                <span className="text-[#EE4D2D] font-medium text-[1rem]">{product.price}</span>
                {product.sale > 0 && <span className="text-[#EE4D2D] font-light text-[0.6rem] bg-[#feeeea] p-1">-{product.sale*100}%</span>}
            </div>
            <div className="flex items-center gap-1">
              <MapPin/><span className="whitespace-nowrap overflow-hidden text-ellipsis">{vietnamCities.filter(item=> item.id === product.city)[0].name}</span>
            </div>
            <div className="flex items-center gap-1">
                <Package/>
                <span className="text-green-500 font-medium text-[1rem]">{product.available}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

