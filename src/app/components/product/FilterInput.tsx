'use client'

import React, { useContext } from 'react';
import { FilterContext } from './context/ProductContext';


export default function FilterInput() {
    const { filter } = useContext(FilterContext);

    return (
        <>
            <div className='ml-5 flex justify-between'>
                <div className='flex items-center gap-4 justify-center'>
                    <div className='text-lg'>Filtro: </div>
                    <input
                        placeholder='Nome do produto'
                        onInput={(e) => filter(e.target.value)}
                        type="text"
                        className="p-1 bg-white mr-32 rounded-xl border-2 border-zinc-600"
                    />
                </div>
            </div>
        </>
    );
}