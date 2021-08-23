
import { HiOutlineX } from 'react-icons/hi' 

export default function Modal(props) {

    const {src, isOpen } = props

    return(
		<div className={`fixed w-full inset-0 block h-screen bg-transparent z-50 flex justify-center place-items-center ${isOpen ? '' : 'hidden'}`}>
		<div className={`flex place-items-center justify-center h-screen w-full text-cente z-20 transform transition-transform ${isOpen ? 'scale-100' : 'scale-0'}`}>
		<div className="bg-white text-black w-3/4 h-3/4 flex justify-between flex-col">
			<div className="h-16 flex justify-end px-5">
				<button>
					<HiOutlineX size="30px" />
				</button>
			</div>
						<div className="flex-1">
						2
			</div>
		</div>
		</div>
		<div className={`bg-gray-900 w-full h-screen bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 z-0 fixed ${isOpen ? 'opacity-100' : 'opacity-0 hidden'}`}></div>
		</div>
    )
}