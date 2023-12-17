import Filter from './ListProducts'
import { Product } from '@app/lib/definitions';

export async function Produtos() {

  return (
    <>
      <div className='flex-col justify-center'>
        <div className='ml-5'>
          <h1 className='text-5xl'>Produtos</h1>
        </div>
        {/* <Filter products={products} /> */}
      </div>
    </>
  )
}