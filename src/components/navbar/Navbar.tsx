function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4 bg-gradient-to-r from-indigo-900 to-purple-700 text-white shadow-lg sticky top-0 z-50'>
                <div className="container flex justify-between items-center text-lg mx-8">
                    <span className='font-bold text-2xl tracking-wide'>Blog Pessoal</span>

                    <div className='flex gap-6 font-medium'>
                        <span className='cursor-pointer hover:text-gray-300 transition-colors duration-200'>Postagens</span>
                        <span className='cursor-pointer hover:text-gray-300 transition-colors duration-200'>Temas</span>
                        <span className='cursor-pointer hover:text-gray-300 transition-colors duration-200'>Cadastrar tema</span>
                        <span className='cursor-pointer hover:text-gray-300 transition-colors duration-200'>Perfil</span>
                        <span className='cursor-pointer hover:text-gray-300 transition-colors duration-200'>Sair</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
