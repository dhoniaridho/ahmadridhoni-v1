export default function Footer(){
    return(
        <footer className="bg-black text-white border-t border-gray-900">
            <div className="flex justify-end h-16 place-items-center px-10">
                <p className="text-sm">&copy;{new Date().getFullYear()} dhoniaridho. All Right Reserved</p>
            </div>
        </footer>
    )
}