import { FaBeer, FaFirefox, FaEye, FaPen, FaArrowRight} from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';


export default function SideBar() {
    return (
        <div className="h-20 flex justify-end items-center bg-steelBlue text-white shadow-2xl">
            <div className='flex p-5'>
                <Link href='/dashboard/view'>
                    <a><SideBarIcon icon={<FaEye size={28} />} text='View Profile' /></a>
                </Link>
                <Link href='/dashboard/edit'>
                    <a><SideBarIcon icon={<FaPen size={28} />} text='View Profile' /></a>
                </Link>
                <Link href='/users/login'>
                    <a><SideBarIcon icon={<FaArrowRight size={28} />} text='View Profile' /></a>
                </Link>
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