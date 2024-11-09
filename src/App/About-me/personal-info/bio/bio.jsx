function Bio(){
    return (
        <div className="w-[85%] flex flex-col">
            <div className="flex justify-start items-center">
                <img src={"/src/assets/img.svg"} alt=""/>
                <span className='text-2xl text-light-gray'>nouakhro.jpeg</span>
            </div>
            <div className="flex justify-start items-center">
                <img src={"/src/assets/Readmi.svg"} alt=""/>
                <span className='text-2xl text-light-gray'>about-me.md</span>
            </div>
        </div>
    )
}

export default Bio