import { FacebookLogoIcon, InstagramLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react"

function Footer() {

    let data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-gradient-to-r from-indigo-900 to-purple-700 text-white mt-10">
                <div className="container flex flex-col items-center py-6">
                    <p className='text-xl font-bold'>
                        Blog Pessoal Generation | Copyright: {data}
                    </p>
                    <p className='text-lg mb-4'>Acesse nossas redes sociais</p>
                    <div className='flex gap-4'>
                        <LinkedinLogoIcon size={48} weight='bold' className='cursor-pointer hover:text-gray-300 transition-colors duration-200'/>
                        <InstagramLogoIcon size={48} weight='bold' className='cursor-pointer hover:text-gray-300 transition-colors duration-200'/>
                        <FacebookLogoIcon size={48} weight='bold' className='cursor-pointer hover:text-gray-300 transition-colors duration-200'/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
