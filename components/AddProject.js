

export default function AddProject({description, link, title, onChange, onClick, isNew = false, projectId, indexId}) {
  return (
    <>
      <div className="my-5">
      <p>{title}</p>
        <input
          type="text"
          name='title'
          value={title}
          onChange={e => onChange(e)}
          className="app-input"
          placeholder="Project name"
        />
        <div className="h-5"></div>
        <p>{link}</p>
        <input
          type="text"
          name='link'
          value={link}
          onChange={onChange}
          className="app-input"
          placeholder="link"
        />
        <div className="h-5"></div>
        <p>{description}</p>
        <textarea
          type="text"
          name='description'
          value={description}
          onChange={onChange}
          className="app-input"
          placeholder="White a short description of this project!"
        ></textarea>
      </div>
      <button onClick={projectId ? e =>onClick(e, projectId, indexId) : e =>onClick(e)}>{isNew ? 'Add Project' : 'Update Project'}</button>
      <div className="border-[1.5px] border-solid  border-gray-300 m-10 " />
    </>
  );
}
