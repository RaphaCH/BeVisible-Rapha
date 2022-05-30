import { FaBeer, FaFirefox, FaEye, FaPen, FaFilter } from 'react-icons/fa';
import AppInput from '../AppInput';

export default function SearchBarWithFilter({selectedBadge, onSelectChange, onInputChange, inputValue}) {


    return (
        <div className="h-20 flex justify-around items-center bg-steelBlue text-white shadow-2xl">
            <div className='flex p-5'>
                <AppInput icon='FaFilter' placeholder='Search for a student' onChange={e => onInputChange(e)} value={inputValue} />
                <div className="flex justify-center">
                    <div className="mb-3 xl:w-96">
                        <select className='badge-filter' aria-label="filter learners by knowledge"
                            id="badge-input"
                            value={selectedBadge}
                            onChange={e => onSelectChange(e)}
                        >
                            <option value=''>Filter by knowledge</option>
                            <option value="fa-brands fa-js-square">JavaScript</option>
                            <option value='fa-brands fa-python'>React</option>
                            <option value='fa-brands fa-html5'>Html</option>
                            <option value='fa-brands fa-css3'>Css</option>
                            <option value='fa-brands fa-node-js'>Node.js</option>
                            <option value='fa-brands fa-react'>React</option>
                            <option value='fa-brands fa-vuejs'>Vue</option>
                            <option value='fa-brands fa-angular'>Angular</option>
                            <option value='fa-brands fa-figma'>Figma</option>
                        </select>
                    </div>
                </div>
                <SideBarIcon icon={<FaEye size={28} />} text='View Profile' />
                <SideBarIcon icon={<FaPen size={28} />} text='Edit Profile' />
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