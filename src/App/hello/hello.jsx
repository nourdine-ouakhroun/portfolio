import { useEffect, useRef } from 'react';
import './hello.css';

function Code(){
	return(
		<div className='w-[45rem] h-[15rem] bg-custom-blue rounded-xl flex-shrink-0'></div>
	)
}

const CodeContainer = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (containerRef.current) {
                // Smoothly scroll down by the height of one Code component
                const scrollHeight = containerRef.current.scrollHeight;
                const clientHeight = containerRef.current.clientHeight;
                const scrollPosition = containerRef.current.scrollTop;

                if (scrollPosition + clientHeight < scrollHeight) {
                    containerRef.current.scrollTo({
                        top: scrollPosition + 200, // Adjust this value based on your design
                        behavior: 'smooth', // This enables smooth scrolling
                    });
                }
            }
        }, 1000); // Scroll every second

        return () => clearInterval(intervalId); // Clean up the interval on unmount
    }, []);

    return (
        <div className='flex flex-col flex-1 h-full overflow-y-scroll scrollbar-hidden gap-12' ref={containerRef}>
            <Code />
            <Code />
            <Code />
            <Code />
            <Code />
        </div>
    );
};


function Hello() {
	return (
		<div className='w-full h-full flex justify-center items-center relative gap-24'>
			<div className='flex flex-col gap-20 flex-1 justify-center items-end'>
				<div className="flex flex-col gap-3">
					<p>Hello, World! I am</p>
					<p className='text-7xl' >Nourdine Ouakhroun</p>
					<p className='text-4xl text-purple'> {'>'} Full Stack Developer</p>
				</div>
				<p id="github" className='gap-3'>
					<span id="comment">
						// find my profile on GitHub:
					</span>
					<span id="link">
						<span id='type'>const </span>
						<span id='variable'>github</span>
						<span id='equal'>= </span>
						<a href="https://github.com/nourdine-ouakhroun" target="_blank" rel="noreferrer">
							<span>
								"https://github.com/nourdine-ouakhroun" 
							</span>
						</a>
					</span>
				</p>
			</div>
			<CodeContainer/>
		</div>
	);
}

export default Hello;