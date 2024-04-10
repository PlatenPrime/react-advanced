import { useState } from 'react'

import './App.css'
import { Link, Outlet } from 'react-router-dom'

function App() {
	const [count, setCount] = useState(0)

	return (
		<>
			<p>HOME PAGE</p>
			<ul>
				<li><Link to="/">Home</Link></li>
				<li>
					<Link to="/about">About</Link>
				</li>
				<li><Link to="/movies">Movies</Link></li>

				<main><Outlet /></main>

			</ul>
		</>
	)
}

export default App
