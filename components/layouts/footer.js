import Logo from '~/components/brands/logo'

export default function Footer(){
    return(
        <footer className="bg-black text-white border-t border-gray-900">
            <div className="flex justify-center flex-col place-items-center p-10">
                <Logo />
                <p className="text-sm mt-4">&copy;{new Date().getFullYear()} dhoniaridho. All Right Reserved</p>
            </div>
        </footer>
    )
}