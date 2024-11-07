import './App.css'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HeaderBar from './header/header.jsx'
import Footer from './footer/footer.jsx'
import Main from './main/main.jsx'
import Hello from './hello/hello.jsx'
import AboutMe from './About-me/About-me.jsx'
// import Projects from './projects/projects.jsx'
// import ContactMe from './contact-me/contact-me.jsx'
function AppComponent() {
	const location = useLocation();
	const isHomePage = location.pathname === '/';
	return (
		<div className={`${isHomePage ? 'bg-home' : ''} app w-full h-full bg-custom-blue text-white border border-gray-800`}>
			<HeaderBar />
			<Routes>
				<Route path='/' element={<Main component={<Hello />} />} />
				<Route path='/about-me/*' element={<Main component={<AboutMe />} />} />
				{/* <Route path='/projects' element={<Main component={<Projects />} />} />
				<Route path='/contact-me' element={<Main component={<ContactMe />} />} /> */}
			</Routes>
			<Footer />
		</div>
	);
}

// Wrap App within Router in AppWrapper
function App() {
	return (
		<Router>
			<AppComponent />
		</Router>
	);
}

export default App;