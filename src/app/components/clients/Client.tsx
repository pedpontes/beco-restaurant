import { User } from "@app/lib/definitions";

export async function Clients() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", { method: 'GET' })
    const users: User[] = await response.json();

    return (
        <>
            <div className="ml-5">
                <h1 className='text-5xl'>Clientes</h1>
                <h3>Lista de clientes:</h3>
            </div>
            <div>
                <div className="flex flex-wrap justify-center">
                    {users.map((item: User, index: number) => {
                        return (
                            <ListUsers key={index}
                                id={item.id}
                                name={item.name}
                                email={item.email}
                                phone={item.phone}
                            />
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export function ListUsers(props: User) {
    return (
        <div className='bg-red-400 rounded-lg h-max w-1/4 m-6 overflow-x-hidden shadow-2xl'>
            <ul>
                <li className="p-4 text-lg font-bold">#{props.id}</li>
                <li className="p-4">Nome: {props.name}</li>
                <li className="p-4">Email: {props.email}</li>
                <li className="p-4">Telefone: {props.phone}</li>
            </ul>
        </div>
    )
}

