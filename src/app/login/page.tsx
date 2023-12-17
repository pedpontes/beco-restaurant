
export default function Login() {
    return (
        <>
            <section>
                <div className='flex flex-col justify-center items-center h-full'>
                    <div className='bg-white rounded-lg shadow-lg w-96 h-96 flex flex-col justify-center items-center'>
                        <h1 className='text-4xl font-bold'>Beco Sossego</h1>
                        <form className='flex flex-col justify-center items-center'>
                            <input className='border-2 border-gray-300 rounded-lg w-80 h-10 p-2 my-2' type='text' placeholder='Email' />
                            <input className='border-2 border-gray-300 rounded-lg w-80 h-10 p-2 my-2' type='password' placeholder='Senha' />
                            <button className='border-2 border-gray-300 rounded-lg w-80 h-10 p-2 my-2 bg-yellow-200 hover:bg-yellow-300'>Entrar</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}