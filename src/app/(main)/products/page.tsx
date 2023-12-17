import ProductContext from '../../components/product/context/ProductContext'
import { Product } from '@app/lib/definitions';

const List: Product[] = [
  {
    id: 1,
    name: 'Produto 1',
    price: 10,
    category: { id: 1, name: 'Categoria 1' },
    recipe: null,
    description: 'Descrição 1'
  },
  {
    id: 2,
    name: 'Produto 2',
    price: 20,
    category: { id: 2, name: 'Categoria 2' },
    recipe: null,
    description: 'Descrição 2'
  },
  {
    id: 3,
    name: 'Produto 3',
    price: 30,
    category: { id: 3, name: 'Categoria 3' },
    recipe: null,
    description: 'Descrição 3'
  },
  {
    id: 4,
    name: 'Produto 4',
    price: 40,
    category: { id: 4, name: 'Categoria 4' },
    recipe: null,
    description: 'Descrição 4'
  },
  {
    id: 5,
    name: 'Produto 5',
    price: 50,
    category: { id: 5, name: 'Categoria 5' },
    recipe: null,
    description: 'Descrição 5'
  },
  {
    id: 6,
    name: 'Produto 6',
    price: 60,
    category: { id: 6, name: 'Categoria 6' },
    recipe: null,
    description: 'Descrição 6'
  },
  {
    id: 7,
    name: 'Produto 7',
    price: 70,
    category: { id: 7, name: 'Categoria 7' },
    recipe: null,
    description: 'Descrição 7'
  },
  {
    id: 8,
    name: 'Produto 8',
    price: 80,
    category: { id: 8, name: 'Categoria 8' },
    recipe: null,
    description: 'Descrição 8'
  },
  {
    id: 9,
    name: 'Produto 9',
    price: 90,
    category: { id: 9, name: 'Categoria 9' },
    recipe: null,
    description: 'Descrição 9'
  },
  {
    id: 10,
    name: 'Produto 10',
    price: 100,
    category: { id: 10, name: 'Categoria 10' },
    recipe: null,
    description: 'Descrição 10'
  },
];


export default async function Page() {

  return (
    <>
      <div className='flex-col justify-center'>
        <div className='ml-5'>
          <h1 className='text-5xl'>Produtos</h1>
        </div>
        <ProductContext products={List}/>
      </div>
    </>
  )
}
