import { Product } from "@app/lib/definitions"
import { useContext } from "react"
import { FilterContext } from "./context/ProductContext"

export default function ListItems(props: { products: Product }) {
    const { removeProduct } = useContext(FilterContext);

    return (
        <div style={{ borderColor: "#c69747" }} className='relative opacity-70 bg-amber-200 border-4 rounded-lg h-42 w-2/5 m-6 overflow-x-hidden shadow-2xl'>
            <div onClick={() => removeProduct(props.products.id)} className=' right-0 absolute m-1'>
                <button className='bg-black w-5 h-5 rounded-full hover:text-red-600 text-white p-4 flex justify-center items-center'>
                    <div>X</div>
                </button>
            </div>
            <ul>
                <li className="p-4 text-lg font-bold">#{props.products.id}</li>
                <li className="p-4">{props.products.name}</li>
                <li className="p-4">Preço: {props.products.price}</li>
                <li className="p-4">Descrição: {props.products.description}</li>
            </ul>
        </div>
    )
};