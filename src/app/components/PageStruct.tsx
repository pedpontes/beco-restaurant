


export default function PageStruct({children}: {children: React.ReactNode}) {
    return (
        <>
            <div className='flex-col justify-center'>
                {children}
            </div>
        </>
    )
}