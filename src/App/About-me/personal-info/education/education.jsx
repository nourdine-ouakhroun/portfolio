import { useDispatch, useSelector } from "react-redux";
import { removeComponent, toggleComponent } from "../../../../componentsSlice";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Tag = ({text, state, children}) => {
    const styles = {
        blue: {
            color: 'rgb(44 97 151)',
        },
        gray: {
            color: 'gray',
        },
        white: {
            color: '#c7d1db',
        },
    }
    return (
        <div className="w-full text-2xl">
            {
                state === 'inlined' ? (

                    <>
                    <span style={styles.gray}>{'<'}</span>
                    <span style={styles.blue}>{text}</span>
                    <span style={styles.gray}>{'>'}</span>
                    <span style={styles.white}>
                        {children}
                    </span>
                    <span style={styles.gray}>{'</'}</span>
                    <span style={styles.blue}>{text}</span>
                    <span style={styles.gray}>{'>'}</span>
                    </>
                ) : (
                    <div className="w-full">
                        <span style={styles.gray}>{'<'}</span>
                        <span style={styles.blue}>{text}</span>
                        <span style={styles.gray}>{'>'}</span>
                        <p className="ml-10" style={styles.white}>
                            {children}
                        </p>
                        <span style={styles.gray}>{'</'}</span>
                        <span style={styles.blue}>{text}</span>
                        <span style={styles.gray}>{'>'}</span>
                    </div>
                )
            }
        </div>
    );
}

const education = [
    {
        year: '2022 — 2024',
        title: 'Software Engineering',
        institution: '1337 Coding School, 42 Network, UM6P',
        location: 'Tétouan',
        skills: [
            'Programming Languages',
            'Project Management',
            'Data Structures',
            'Web Development',
            'Algorithms',
            'Version Control',
            'Self-learning'
        ]
    },
    {
        year: '2020 — 2023',
        title: 'Licentiate Degree in Economics and Management',
        institution: 'Ibn Zohr University, FSJES-CUAM Agadir, Ait Melloul',
        achievement: 'Licentiate Degree in Economics Sciences and Management, Specialization in Management',
        skills: [
            'Management and Leadership',
            'Project Management',
            'Communication',
            'Teamwork'
        ]
    },
    {
        year: '2018 — 2020',
        title: 'Baccalaureate in Economics',
        location: 'Morocco',
        skills: [
            'Economics',
            'Accounting',
            'Business Law',
            'Mathematics'
        ]
    }
]

const EducationComponent = () => {


    return (
        <div className="w-[95%] h-[90%]">
            <Tag text='education'>
                <Tag text='degree'>
                    <Tag text='year' state="inlined">{education[0].year}</Tag>
                    <Tag text='title' state="inlined">{education[0].title}</Tag>
                    <Tag text='institution'>{education[0].institution}</Tag>
                    <Tag text='location' state="inlined">{education[0].location}</Tag>
                    <Tag text='skills'>
                        {
                            education[0].skills.map((skill, index) => {
                                return (
                                    <Tag text='skill' state="inlined" key={index}>{skill}</Tag>
                                )
                            })
                        }
                    </Tag>
                </Tag>
                {/* <Tag text='degree'>
                    <Tag text='year' state="inlined">2020 — 2023</Tag>
                    <Tag text='title' state="inlined">Licentiate Degree in Economics and Management</Tag>
                    <Tag text='institution' state="inlined">Ibn Zohr University, FSJES-CUAM Agadir, Ait Melloul</Tag>
                    <Tag text='achievement' state="inlined">Licentiate Degree in Economics Sciences and Management, Specialization in Management</Tag>
                    <Tag text='skills'>
                        <Tag text='skill' state="inlined" >Management and Leadership</Tag>
                        <Tag text='skill' state="inlined" >Project Management</Tag>
                        <Tag text='skill' state="inlined" >Communication</Tag>
                        <Tag text='skill' state="inlined" >Teamwork</Tag>
                    </Tag>
                </Tag>
                <Tag text='degree'>
                    <Tag text='year' state="inlined">2018 — 2020</Tag>
                    <Tag text='title' state="inlined">Baccalaureate in Economics</Tag>
                    <Tag text='location' state="inlined">Morocco</Tag>
                    <Tag text='skills'>
                        <Tag text='skill' state="inlined" >Economics</Tag>
                        <Tag text='skill' state="inlined" >Accounting</Tag>
                        <Tag text='skill' state="inlined" >Business Law</Tag>
                        <Tag text='skill' state="inlined" >Mathematics</Tag>
                    </Tag>
                </Tag> */}
            </Tag>

        </div>
    );
}
const lines = [
    '<education>',
    '    <degree>',
    '        <year>2022 — 2024</year>',
    '        <title>Software Engineering</title>',
    '        <institution>1337 Coding School, 42 Network</institution>',
    '        <location>Tétouan</location>',
    '        <skills>',
    '            <skill>Programming Languages</skill>',
    '            <skill>Project Management</skill>',
    '            <skill>Data Structures</skill>',
    '            <skill>Web Development</skill>',
    '            <skill>Algorithms</skill>',
    '            <skill>Version Control</skill>',
    '            <skill>Self-learning</skill>',
    '        </skills>',
    '    </degree>',
    '',
]
// '    <degree>',
// '        <year>2020 — 2023</year>',
// '        <title>Licentiate Degree in Economics and Management</title>',
// '        <institution>Ibn Zohr University, FSJES-CUAM Agadir, Ait Melloul</institution>',
// '        <achievement>Licentiate Degree in Economics Sciences and Management, Specialization in Management</achievement>',
// '        <skills>',
// '            <skill>Management and Leadership</skill>',
// '            <skill>Project Management</skill>',
// '            <skill>Communication</skill>',
// '            <skill>Teamwork</skill>',
// '        </skills>',
// '    </degree>',
// '',
// '    <degree>',
// '        <year>2018 — 2020</year>',
// '        <title>Baccalaureate in Economics</title>',
// '        <location>Morocco</location>',
// '        <skills>',
// '            <skill>Economics</skill>',
// '            <skill>Accounting</skill>',
// '            <skill>Business Law</skill>',
// '            <skill>Mathematics</skill>',
// '        </skills>',
// '    </degree>',
// '</education>'

// function Writer({Lines}){

//     return(<>
//         <div className='w-[90%] h-[90%]'>
//             {
//                Lines.map((line, index)=>{
//                     return (
//                         <p key={index} className='text-light-gray text-2xl' style={{ whiteSpace: 'pre' }}>
//                             {`${index + 1}   ${line}`}
//                         </p>
//                     )
//                })
//             }
//         </div>
//     </>)
// }
function Writer({component, lenght}){

    return(<>
        <div className='w-[95%] h-[90%] flex'>
            <div className="w-[3rem] h-full flex flex-col justify-start items-start" >
                {
                    Array.from({length: lenght}, (_, index) => {
                        return (
                            <p key={index} className='text-light-gray text-2xl' style={{ whiteSpace: 'pre' }}>
                                {`${index + 1}`}
                            </p>
                        )
                    })
                }
            </div>
            <div className="w-full h-full">
                {component}
            </div>
        </div>
    </>)
}

function MyImg(){

    return(<>
        {/* <img className="absolute" src="/src/assets/Background Blurs.svg" alt="" /> */}
        <div className='w-[90%] h-[90%] relative flex justify-center items-start drop-shadow-[80px_30px_10px_rgba(0,0,0,1)]'>
            <img 
                className="
                w-[80%]
                opacity-80
                " 
                src="/src/assets/nouakhro-none_background.jpeg" 
                alt="Profile Image"
            />
        </div>
        {/* <div className='w-[90%] h-[90%] relative flex justify-center items-start'>
            <img 
                className="
                w-[100%]
                opacity-80
                " 
                src="/src/assets/nouakhro.jpeg" 
                alt="Profile Image"
            />
        </div> */}
    </>)
}


// const BioComponent = [
//     {
//         img : '/src/assets/Readmi.svg',
//         text: 'education.html',
//         component: <Writer Lines={lines}/>
//     },
// ]


function Education() {
    const dispatch = useDispatch();
    const selectedComponents = useSelector(
      (state) => state.components.selectedComponents
    );
    const location = useLocation();
    const locationPath = location.pathname.endsWith('education');
  
    const handleClick = (data) => {
        dispatch(toggleComponent(data));
    };
  
    // Trigger actions when the component mounts
    useEffect(() => {
        if (locationPath) {
            handleClick({
                img: '/src/assets/Readmi.svg',
                text: '1337.html',
                component: <Writer component={<EducationComponent/>} lenght={20}/>
            });
            handleClick({
                img: '/src/assets/Readmi.svg',
                text: 'education.html',
                component: <Writer component={<EducationComponent/>} lenght={20}/>
            });
        }
        else {
            dispatch(removeComponent({ text: 'education.html' }));
            dispatch(removeComponent({ text: '1337.html' }));
        }
      }, [locationPath]);
      
  
    return (
        <div className="w-[85%] flex flex-col">
            <div className="flex justify-start items-center">
            <img src="/src/assets/Readmi.svg" alt="" />
            <span className="text-2xl text-light-gray">education.html</span>
            </div>
        </div>
    );
  }
  
  export default Education;