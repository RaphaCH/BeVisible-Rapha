

export default function Button({ type = 'button', name, color, onSubmit, onClick, style }) {
  return (
    <button type={type} onClick={onClick} onSubmit={onSubmit} className={`block w-full bg-beCode mt-5 py-2 rounded-2xl 
    hover:bg-indigo-700 transition-all duration-500 
    text-white font-semibold mb-2 ${style}`}>
      {name}
    </button>
  )
}