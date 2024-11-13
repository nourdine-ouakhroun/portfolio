import Category from "../category/category"



function L

function ProjectsFliter()
{
    return (
        <div>

        </div>
    )
}

function Projects()
{
    return (
        <div className="w-full h-full about-me flex md:grid grid-cols-[1fr_4fr]  justify-start items-center flex-col">
            <div className='flex w-full h-full md:border-r-[1px] border-r-custom-gray'>
                <div className='w-full h-full md:border-r-[1px] border-r-custom-gray'>
                    <Category name="Projects" component={<ProjectsFliter/>}/>
                </div>
            </div> 
        </div>
    )
}

export default Projects