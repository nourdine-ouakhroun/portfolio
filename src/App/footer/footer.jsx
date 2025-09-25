import data from '../../data.json'

function Footer(){
    return (
        <div className="hidden md:flex border-t-[1px] border-t-custom-gray justify-between" style={{ gridArea: 'foter' }}>
            <div className="w-[20rem] lg:w-[22rem] xl:w-[24rem] 2xl:w-[26rem] flex">
                <div className="flex justify-center items-center border-r-[1px] border-r-custom-gray w-[10rem] xl:w-[11rem]">
                    <span className="text-sm lg:text-base xl:text-[0.95rem] 2xl:text-[1rem] text-light-gray">find me in:</span>
                </div>
                {/* <div className="flex justify-center items-center border-r-[1px] border-r-custom-gray w-[5rem]">
                    <img className="" src="/assets/twiter.svg" alt="" />
                </div> */}
                <a href={data.contact.socials[1].link} target="_blank" rel="noreferrer" className="border-r-[1px] border-r-custom-gray flex justify-between items-center gap-2">
                    <div className="flex justify-center items-center w-[4rem] xl:w-[4.5rem]">
                        <img className="w-[18px] h-[18px] xl:w-[20px] xl:h-[20px]" src={data.contact.socials[1].icon} alt="" />
                    </div>
                </a>
            </div>
            <div className="flex justify-evenly items-center border-l-[1px] border-l-custom-gray w-[6rem] md:w-[16rem] lg:w-[18rem]">
                <a href={data.contact.socials[0].link} target="_blank" rel="noreferrer" className="flex justify-between items-center gap-2">
                    <span className="hidden md:flex text-light-gray text-sm lg:text-base xl:text-[0.95rem]">@nourdine-ouakhroun</span>
                    <img className="w-[18px] h-[18px] xl:w-[20px] xl:h-[20px]" src={data.contact.socials[0].icon} alt="" />
                </a>
            </div>
        </div>
    )
}

export default Footer