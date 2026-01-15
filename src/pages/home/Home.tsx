function Home() {
    return (
        <>
            <div className="bg-gradient-to-r from-indigo-900 to-purple-700 flex justify-center min-h-screen">
                <div className='container grid grid-cols-2 text-white gap-4'>
                    <div className="flex flex-col gap-6 items-center justify-center py-10">
                        <h2 className='text-5xl font-extrabold tracking-wide'>
                            Seja Bem Vindo!
                        </h2>
                        <p className='text-xl text-gray-200 text-center'>
                            Expresse aqui seus pensamentos e opiniões
                        </p>

                        <div className="flex justify-around gap-4">
                            <div className='rounded-full text-white border-white border-2 py-3 px-6 cursor-pointer 
                                            hover:bg-white hover:text-purple-700 transition-all duration-300'>
                                Nova Postagem
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center items-center">
                        <img 
                            src="https://i.imgur.com/fyfri1v.png" 
                            alt="Imagem Página Home" 
                            className='w-2/3 rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
