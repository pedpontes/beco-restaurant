'use client'

import React, { useState } from 'react'
import { Product } from '@app/lib/definitions'
import FilterInput from '../FilterInput';
import ListProducts from '../ListProducts';

type FilterContextType = {
  products: Product[];
  filteredProducts: Product[];
  filter: (text: string) => void;
  removeProduct: (id: number) => void;
}

export const FilterContext = React.createContext({} as FilterContextType);

export default function ProductContext(props: { products: Product[] }) {

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
      <FilterContext.Provider value={{ products, filteredProducts, filter, removeProduct }}>
        <FilterInput />
        <ListProducts />
      </FilterContext.Provider>
    </>
  )
}


