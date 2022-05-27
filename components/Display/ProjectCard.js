

export default function ProjectCard({link, title, description, photo, id}) {
    return (
        <>
            <div className="my-5">
                <a href={link} className='hover:cursor-pointer'>
                    <h2
                        type="text"
                        id="user-info-email"
                        className="flex-1 w-full py-2 px-4 bg-white text-gray-700 text-lg md:text-xl font-semibold"
                    >{title}</h2>
                </a>
                <div className="h-5" />
                <p
                    type="text"
                    id="user-info-name"
                    className="rounded-md border-transparent flex-1 appearance-none  border-t border-gray-300 w-full py-2 px-4 text-gray-700 text-base md:text-lg"
                >{description}</p>
            </div>
            <div className="border-[1.5px] border-solid  border-gray-300 m-10 " />
        </>
    )
}