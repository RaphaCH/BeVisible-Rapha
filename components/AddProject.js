

export default function AddProject({}) {
  return (
    <>
      <div className="my-5">
        <input
          type="text"
          id="user-info-email"
          className="app-input"
          placeholder="Project name"
        />
        <div className="h-5"></div>
        <input
          type="text"
          id="user-info-email"
          className="app-input"
          placeholder="link"
        />
        <div className="h-5"></div>
        <textarea
          type="text"
          id="user-info-name"
          className="app-input"
          placeholder="White a short description of this project!"
        ></textarea>
      </div>
      <div className="border-[1.5px] border-solid  border-gray-300 m-10 " />
    </>
  );
}
