function Component({img, text}){
    return (
        <div className="w-[90%] h-[3rem] flex justify-start items-center gap-3">
            <img className="w-[7%]" src={img} alt="" />
            <span className="text-xl text-light-gray">{text}</span>
        </div>
    )
}

function Contacts(){
    return(
        <div className="w-full h-[7rem] flex flex-col justify-center items-center">
            <Component img="/src/assets/mail-icon.svg" text="nourdineoukhroun@gmail.com"/>
            <Component img="/src/assets/phone-icon.svg" text="+212620704142"/>
        </div>
    )
}

export default Contacts