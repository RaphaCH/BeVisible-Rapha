import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function AppInput({ icon, spin = false, name, value, onChange, placeholder, type = 'text', required, minLength, pattern, title }) {
  return (
    <div className="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl">
      <FontAwesomeIcon icon={icon} spin={spin} className='text-gray-400' />
      <input
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        minLength={minLength}
        pattern={pattern}
        className=" pl-2 w-full outline-none border-none"
        type={type}
        title={title}
        placeholder={placeholder} />
    </div >
  ) 
}

