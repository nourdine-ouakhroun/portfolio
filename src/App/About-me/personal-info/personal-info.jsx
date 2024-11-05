import './personal-info.css'
import costumStyle from '../../utils/utils.jsx'
import { useState } from 'react'
function PersonalInfoCategory({text, icon}) {
    const [show, setShow] = useState(false)

    const clickhandler = () =>{
        setShow(!show)
    }   
    return(
        <div className={costumStyle.container} onClick={clickhandler}>
            <img className={`mr-3 ${show ? 'rotate-90' : ''}`} src="src/assets/arow.svg" alt="" />
            <img className="mr-2" src={icon} alt="" />
            <span className={show ? "text-white" : "text-steel-blue"}>{text}</span>
        </div>
    )
}

function PersonalInfo(){
    return(
        <div className="w-full flex justify-start items-center flex-col mb-2">
            <PersonalInfoCategory text="bio" icon="src/assets/o-folder.svg"/>
            <PersonalInfoCategory text="interests" icon="src/assets/g-folder.svg"/>
            <PersonalInfoCategory text="education" icon="src/assets/m-folder.svg"/>
        </div>
    )
}

export default PersonalInfo