

export default function ProjectCard({projectName = 'Not Another Cookbook', projectDescription = 'A very cool app about sharing cooking new recipes, sharing new recipes and turning your recipes into a shopping list'}) {
    return (
        <>
            <div className="my-5">
                <h2
                    type="text"
                    id="user-info-email"
                    className="flex-1 w-full py-2 px-4 bg-white text-gray-700 text-lg md:text-xl font-semibold"
                >{projectName}</h2>
                <div className="h-5" />
                <p
                    type="text"
                    id="user-info-name"
                    className="rounded-md border-transparent flex-1 appearance-none  border-t border-gray-300 w-full py-2 px-4 text-gray-700 text-base md:text-lg"
                >{projectDescription}</p>
            </div>
            <div className="border-[1.5px] border-solid  border-gray-300 m-10 " />
        </>
    )
}