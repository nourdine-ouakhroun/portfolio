import './main.css';
function Main({ component }) {
	return (
		<div id='app-main' className='z-[3] w-full h-full grid-name'>
			{component}
		</div>
	);
}

export default Main;
