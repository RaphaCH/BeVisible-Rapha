import { FaBeer, FaFirefox } from 'react-icons/fa';
import Image from 'next/image';


export default function SideBar() {
    return (
        <div className="w-screen p-5 flex flex-row justify-between bg-steelBlue text-white shadow-2xl">
            {/* <Image src={'https://github.com/RaphaCH.png'} width={60} height={60} className='rounded-full' /> */}
            <div className='flex flex-row justify-end'>
                <SideBarIcon icon={<FaBeer size={28} />} />
                <SideBarIcon icon={<FaFirefox size={28} />} />
            </div>
        </div>
    )
}

const SideBarIcon = ({ icon, text = 'caceta' }) => (
    <div className="sidebar-icon group">
        {icon}
        <span className='sidebar-tooltip group-hover:scale-100'>
            {text}
        </span>
    </div>
)