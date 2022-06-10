

export default function AddPromotion({name = 'Johnson', iteration = 7, onChange, onClick,}) {
  return (
    <>
      <div className="my-5 flex flex-col">
        <input
          type="text"
          name='name'
          value={name}
          onChange={e => onChange(e)}
          className="app-input"
          placeholder="Project name"
        />
        <div className="h-5"></div>
        <input
          type="text"
          name='iteration'
          value={iteration}
          onChange={onChange}
          className="app-input"
          placeholder="link"
        />
        <div className="h-5"></div>
        <button className="block w-full bg-beCodeLight mt-5 py-2 rounded-2xl 
    hover:bg-indigo-700 hover:text-white transition-all duration-500 
    text-white font-semibold mb-2 self-center" onClick={onClick}>Add Promotion</button>
      </div>
    </>
  );
}
