

export default function AddProject({description, link, title, onChange, onClick, isNew = false}) {
  return (
    <>
      <div className="my-5">
        <input
          type="text"
          name='title'
          value={title}
          onChange={e => onChange(e)}
          className="app-input"
          placeholder="Project name"
        />
        <p>{title}</p>
        <div className="h-5"></div>
        <input
          type="text"
          name='link'
          value={link}
          onChange={onChange}
          className="app-input"
          placeholder="link"
        />
        <p>{link}</p>
        <div className="h-5"></div>
        <textarea
          type="text"
          name='description'
          value={description}
          onChange={onChange}
          className="app-input"
          placeholder="White a short description of this project!"
        ></textarea>
        <p>{description}</p>
      </div>
      <button onClick={e =>onClick(e)}>{isNew ? 'Add Project' : 'Update Project'}</button>
      <div className="border-[1.5px] border-solid  border-gray-300 m-10 " />
    </>
  );
}
