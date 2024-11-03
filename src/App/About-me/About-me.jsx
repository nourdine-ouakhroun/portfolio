import './About-me.css'
import costumStyle from '../utils/utils.jsx'
import Category from '../category/category.jsx'
function AboutMe(){
    return(
        <div className="w-full h-full about-me flex justify-start items-center flex-col">
            <div className={costumStyle.container + ' h-[4rem]'}>
                <p>_about-me</p>
            </div>
            <Category name="personal-info"/>
            <Category name="professional-info"/>
            <Category name="hobbies"/>
            <Category name="skills"/>
            

        </div>
    )
}

export default AboutMe