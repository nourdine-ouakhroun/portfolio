import { useDispatch, useSelector } from "react-redux";
import { removeComponent, toggleComponent } from "../../../../componentsSlice";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";







function Resume() {
    const dispatch = useDispatch();
    const selectedComponents = useSelector(
      (state) => state.components.selectedComponents
    );
    const location = useLocation();
    const locationPath = location.pathname.endsWith('bio');
  
    const handleClick = (data) => {
        console.log("=====>", data);
        // data.forEach((component) => {
            dispatch(toggleComponent(data));
        // });
    };
  
    // Trigger actions when the component mounts
    useEffect(() => {
        if (locationPath) {
            // handleClick({
            //     img: '/src/assets/Readmi.svg',
            //     text: 'about-me.md',
            //     component: <Writer Lines={lines}/>
            // });
            // handleClick({
            //     img: '/src/assets/img.svg',
            //     text: 'nouakhro.jpeg',
            //     component: <MyImg/>
            // });
        }
        else {
            dispatch(removeComponent({ text: 'about-me.md' }));
            dispatch(removeComponent({ text: 'nouakhro.jpeg' }));
        }
      }, [locationPath]);
      
  
    return (
        <></>
    );
  }
  
  export default Resume;