import { FaBeer, FaFirefox, FaEye, FaPen } from 'react-icons/fa';
import Image from 'next/image';


export default function SideBar() {
    return (
        <div className="h-20 flex justify-end items-center bg-steelBlue text-white shadow-2xl">
            {/* <Image src={'https://github.com/RaphaCH.png'} width={60} height={60} className='rounded-full' /> */}
            <div className='flex p-5'>
                <SideBarIcon icon={<FaEye size={28} />} text='View Profile' />
                <SideBarIcon icon={<FaPen size={28} />} text='Edit Profile'/>
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