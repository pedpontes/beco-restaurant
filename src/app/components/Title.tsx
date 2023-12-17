

export default function Title({children}: {children: React.ReactNode}) {
    return (
        <>
            <div className='ml-5'>
                <h1 className='text-5xl'>{children}</h1>
            </div>
        </>
    )
}
