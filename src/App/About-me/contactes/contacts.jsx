import data from '/src/data.json'

function Component({img, text}){
    return (
        <div className="w-[99%] h-[3rem] flex justify-start items-center gap-3">
            <img src={img} alt="" />
            <span className="text-sm xl:text-md 3xl:text-lg text-light-gray">{text}</span>
        </div>
    )
}

function Contacts(){
    return(
        <div className="flex flex-col justify-center items-start">
            <Component img="/assets/mail-icon.svg" text={data.contact.email}/>
            <Component img="/assets/phone-icon.svg" text={data.contact.phone}/>
        </div>
    )
}

export default Contacts