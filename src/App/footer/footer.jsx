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
                <div className="flex justify-center items-center border-r-[1px] border-r-custom-gray w-[5rem]">
                    <img className="" src="/assets/Facbook.svg" alt="" />
                </div>
            </div>
            <div className="flex justify-evenly items-center border-l-[1px] border-l-custom-gray w-[5rem] md:w-[20rem]">
                <span className="text-xl hidden md:flex text-light-gray">@nourdine-ouakhroun</span>
                <img className="" src="/assets/github.svg" alt="" />
            </div>
        </div>
    )
}

export default Footer