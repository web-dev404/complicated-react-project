import {Suspense, useContext, useState} from "react";
import {Link, Route, Routes} from 'react-router-dom'
import {classNames} from "./helpers/classNames/classNames";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {Theme, ThemeContext} from "./theme/ThemeContext";
import {useTheme} from "./theme/useTheme";

const App = () => {
	const {theme, toggleTheme} = useTheme();
	
	return (
		<div className={classNames('app', {hovered: true, selected: false}, [theme, 'cls2'])}>
			<button onClick={toggleTheme}>toggleTheme</button>
			
			<Link to={'/'}>Main </Link>
			<Link to={'/about'}> About</Link>
			
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path="/" element={<MainPageAsync/>}/>
					<Route path="/about" element={<AboutPageAsync/>}/>
				</Routes>
			</Suspense>
		</div>
	)
}
export default App;