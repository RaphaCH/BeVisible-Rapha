import { FaBeer, FaFirefox } from 'react-icons/fa';


export default function SideBar() {
    return (
        <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-primary text-white shadow-lg">
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