import { FaBeer, FaFirefox } from 'react-icons/fa';
import Image from 'next/image';


export default function SideBar() {
    return (
        <div className="l-0 h-screen w-32 m-0 p-5 flex flex-col bg-steelBlue text-white shadow-2xl">
            <Image src={'https://github.com/RaphaCH.png'} width={80} height={80} className='rounded-full' />
            <SideBarIcon icon={<FaBeer size={28} />} />
            <SideBarIcon icon={<FaFirefox size={28} />} />
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