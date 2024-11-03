import './hello.css';

function Hello() {
	return (
		<div id='hello-component'>
			<div className="info">
				<p>Hello, World! I am</p>
				<p id="name">Nourdine Ouakhroun</p>
				<p id="specialty"> > Full Stack Developer</p>
			</div>
			<p id="github">
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
	);
}

export default Hello;