import type { Metadata } from 'next';
import Link from 'next/link';
import '@app/ui/global.css';
import { Nav } from '@app/lib/definitions';


export const metadata: Metadata = {
  title: 'Beco Sossego',
  description: 'Software de gerenciamento de pedidos para restaurantes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const navBar: Nav[] = [{
    name: 'Home',
    href: '/',
  },
  {
    name: 'Pedidos',
    href: '/pedidos',
  },
  {
    name: 'Produtos',
    href: '/products',
  },
  {
    name: 'Clientes',
    href: '/clients',
  }
]
  const navBar2: Nav[] = [{
    name: 'Configurações',
    href: '/config',
  },
  {
    name: 'Sair',
    href: '/login',
  }]

  
  return (
    <html lang='en'>
      <body className='text-white h-screen w-screen'>
        <section className='flex flex-row h-full w-full'>
          <div className='bg-zinc-700 text-2xl h-full flex flex-col justify-between fonte-semibold w-max shadow-2xl'>
            <ul className='p-8 w-full'>
              {navBar.map((item: Nav, index: number) => {
                return (
                  <li className='m-3 hover:text-black hover:opacity-40' key={index}>
                    <Link href={item.href}>{item.name}</Link>
                  </li>
                );
              })}
            </ul>
            <ul className='p-8 w-full'>
              {navBar2.map((item: any, index: number) => {
                return(
                  <li className='m-3 hover:text-black hover:opacity-40' key={index}>
                    <Link href={item.href}>{item.name}</Link>
                  </li>
                )
              }
            )}
              
            </ul>
          </div>
          <div className=' bg-zinc-300 overflow-auto p-8 h-full w-full flex-1 text-black'>{children}</div>
        </section>
      </body>
    </html>
  );
}
