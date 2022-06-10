




export default function UpdatePromotion({before, after, onChange, onClick}) {
  return (
    <>
      <div className="my-5">
      <p>{before.title}</p>
        <input
          type="text"
          name='title'
          value={after.title}
          onChange={onChange}
          className="app-input"
          placeholder="Project name"
        />
        <div className="h-5"></div>
        <p>{before.link}</p>
        <input
          type="text"
          name='link'
          value={after.link}
          onChange={onChange}
          className="app-input"
          placeholder="link"
        />
        <div className="h-5"></div>
        <p>{before.description}</p>
        <textarea
          type="text"
          name='description'
          value={after.description}
          onChange={onChange}
          className="app-input"
          placeholder="White a short description of this project!"
        ></textarea>
      </div>
      <button onClick={onClick}>Update Project</button>
      <div className="border-[1.5px] border-solid  border-gray-300 m-10 " />
    </>
  );
}
