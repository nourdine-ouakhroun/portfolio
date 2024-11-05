import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HeaderBar from './header/header.jsx'
import Main from './main/main.jsx'
import Hello from './hello/hello.jsx'
import AboutMe from './About-me/About-me.jsx'
// import Projects from './projects/projects.jsx'
// import ContactMe from './contact-me/contact-me.jsx'

function App() {
	return (
		<Router>
			<div className='app w-full h-full bg-custom-blue text-white border border-gray-800 relative'>
				<HeaderBar />
				<Routes>
					<Route path='/' element={<Main component={<Hello />} />} />
					<Route path='/about-me' element={<Main component={<AboutMe />} />} />
					{/* <Route path='/projects' e	lement={<Main component={<Projects />} />} />
					<Route path='/contact-me' element={<Main component={<ContactMe />} />} /> */}
				</Routes>
				<div className='absolute w-[65%] h-full right-0 z-2'>
					<img className="w-full h-full" src="src/assets/Background Blurs.svg" alt="" />
				</div>
			</div>
		</Router>
	)
}

export default App

