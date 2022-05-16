import { FaBeer, FaFirefox, FaEye, FaPen, FaFilter } from 'react-icons/fa';
import AppInput from '../AppInput';

export default function SearchBarWithFilter() {


    return (
        <div className="h-20 flex justify-evenly items-center bg-steelBlue text-white shadow-2xl">
            <div className='flex p-5'>
                <AppInput icon='FaFilter' placeholder='Search for a student' />
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