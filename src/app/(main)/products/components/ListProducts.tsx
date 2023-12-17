'use client'

import React, { useState } from 'react'
import { Product } from '@app/lib/definitions'

export default function Filter(props: { products: Product[] }) {
  const [products, setProducts] = useState<Product[]>(props.products);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(props.products);

  function filter(text: string): void {
    text = text.trim();
    const filtered = products.filter((item: Product) => {
      return item.name.toLowerCase().includes(text.toLowerCase())
    })
    setFilteredProducts(filtered)
  }

  function removeProduct(id: number): void {
    const filtered = products.filter((item: Product) => {
      return item.id !== id
    })
    setProducts(filtered);
    setFilteredProducts(filtered);
  }

  return (
    <>
      <div className='ml-5 flex justify-between'>
        <div className='flex items-center gap-4 justify-center'>
          <div className='text-lg'>Filtro: </div>
          <input placeholder='Nome do produto' onInput={(e) => filter(e.target.value)} type="text" className="p-1 bg-white mr-32 rounded-xl border-2 border-zinc-600" />
        </div>
      </div>
      <div className="flex flex-wrap w-full justify-center">
        {filteredProducts.map((item: Product, index: number) => {
          return (
            <ListItems key={index}
              id={item.id}
              name={item.name}
              price={item.price}
              description={item.description}
            />
          )
        })}
      </div>
    </>
  )


  //container for each product
  function ListItems(props: Product) {
    return (
      <div style={{ borderColor: "#c69747" }} className='relative opacity-70 bg-amber-200 border-4 rounded-lg h-42 w-2/5 m-6 overflow-x-hidden shadow-2xl'>
        <div onClick={() => removeProduct(props.id)} className=' right-0 absolute m-1'>
          <button className='bg-black w-5 h-5 rounded-full hover:text-red-600 text-white p-4 flex justify-center items-center'>
            <div>X</div>
          </button>
        </div>
        <ul>
          <li className="p-4 text-lg font-bold">#{props.id}</li>
          <li className="p-4">{props.name}</li>
          <li className="p-4">Preço: {props.price}</li>
          <li className="p-4">Descrição: {props.description}</li>
        </ul>
      </div>
    )
  };
}


