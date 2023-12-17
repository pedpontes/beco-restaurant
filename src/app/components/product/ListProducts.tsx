import { Product } from "@app/lib/definitions";
import ListItems from "./ProductContainer";
import { FilterContext } from "./context/ProductContext";
import { useContext } from "react";

export default function ListProducts() {

    const { filteredProducts } = useContext(FilterContext);

    return (
        <>
            <div className="flex flex-wrap w-full justify-center">
                {filteredProducts.map((item: Product, index: number) => {
                    return (
                        <ListItems key={index} products={item}/>
                    )
                })}

            </div>
        </>
    )
}