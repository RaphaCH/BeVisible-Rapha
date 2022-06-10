import Image from "next/image";

import { FaBeer, FaFirefox, FaEye, FaPen, FaFilter } from "react-icons/fa";
import AppInput from "../AppInput";

export default function SearchBarWithFilter({
  greeting,
  selectedBadge,
  onSelectChange,
  onInputChange,
  inputValue,
}) {
  return (
    <div className="h-20 flex flex-row justify-end items-center bg-white text-white shadow-2xl">
      <div className="w-1/2 flex flex-row justify-start items-center">
        <div className="w-20 self-start">
          <Image
            width={470}
            height={470}
            alt="logo of the company"
            src="/images/logo-becode.png"
            layout="responsive"
          />
        </div>
          <p className="text-base text-beCode">Welcome, {greeting}</p>
      </div>

      <div className="w-1/2 flex p-5">
        <AppInput
          icon="FaFilter"
          placeholder="Search for a student"
          onChange={(e) => onInputChange(e)}
          value={inputValue}
        />
        <select
          className="app-input mx-3"
          aria-label="filter learners by knowledge"
          id="badge-input"
          value={selectedBadge}
          onChange={(e) => onSelectChange(e)}
        >
          <option value="">Filter by knowledge</option>
          <option value="fa-brands fa-js-square">JavaScript</option>
          <option value="fa-brands fa-python">Python</option>
          <option value="fa-brands fa-html5">Html</option>
          <option value="fa-brands fa-css3">Css</option>
          <option value="fa-brands fa-node-js">Node.js</option>
          <option value="fa-brands fa-react">React</option>
          <option value="fa-brands fa-vuejs">Vue</option>
          <option value="fa-brands fa-angular">Angular</option>
          <option value="fa-brands fa-figma">Figma</option>
        </select>
        {/* <SideBarIcon icon={<FaEye size={28} />} text="View Profile" />
        <SideBarIcon icon={<FaPen size={28} />} text="Edit Profile" /> */}
      </div>
    </div>
  );
}

const SideBarIcon = ({ icon, text = "caceta" }) => (
  <div className="sidebar-icon group">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);
