import data from '../../data.json'

function Footer(){
    return (
        <div className="hidden md:flex border-t-[1px] border-t-custom-gray justify-between" style={{ gridArea: 'foter' }}>
            <div className="w-[25rem] flex">
                <div className="flex justify-center items-center border-r-[1px] border-r-custom-gray w-[13rem]">
                    <span className="text-xl text-light-gray">find me in:</span>
                </div>
                <div className="flex justify-center items-center border-r-[1px] border-r-custom-gray w-[5rem]">
                    <img className="" src="/assets/twiter.svg" alt="" />
                </div>
                <a href={data.contact.socials[1].link} target="_blank" rel="noreferrer" className="border-r-[1px] border-r-custom-gray flex justify-between items-center gap-2">
                    <div className="flex justify-center items-center  w-[5rem]">
                        <img className="" src={data.contact.socials[1].icon} alt="" />
                    </div>
                </a>
            </div>
            <div className="flex justify-evenly items-center border-l-[1px] border-l-custom-gray w-[5rem] md:w-[20rem]">
                <a href={data.contact.socials[0].link} target="_blank" rel="noreferrer" className="flex justify-between items-center gap-2">
                    <span className="text-xl hidden md:flex text-light-gray">@nourdine-ouakhroun</span>
                    <img className="" src={data.contact.socials[0].icon} alt="" />
                </a>
            </div>
        </div>
    )
}

export default Footer