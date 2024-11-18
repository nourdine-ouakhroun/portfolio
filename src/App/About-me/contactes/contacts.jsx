import data from '/src/data.json'

function Component({img, text}){
    return (
        <div className="w-[90%] h-[3rem] flex justify-start items-center gap-3">
            <img className="w-[2rem]" src={img} alt="" />
            <span className="text-xl text-light-gray">{text}</span>
        </div>
    )
}

function Contacts(){
    return(
        <div className="w-full h-[7rem] flex flex-col justify-center items-center">
            <Component img="/assets/mail-icon.svg" text={data.contact.email}/>
            <Component img="/assets/phone-icon.svg" text={data.contact.phone}/>
        </div>
    )
}

export default Contacts