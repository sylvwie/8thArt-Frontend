import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import './App.css'
import { Header } from './components/Header'
import { Dashboard } from './pages/Dashboard'
import { Login } from './pages/Login'
import { Shop } from './pages/Shop'
import { Archive } from './pages/Archive'
import { About } from './pages/About'
import { Profile } from './pages/Profile'
import Dither from './components/motion/Dither.tsx';
import { Footer } from './components/Footer.tsx'

export default function App() {
	const router = createBrowserRouter([
		{
			element: <Layout />,
			children: [
				{
					path: '',
					element: <Dashboard />
				},
				{
					path: 'dashboard',
					element: <Dashboard />
				},
				{
					path: 'login',
					element: <Login />
				},
				{
					path: 'shop',
					element: <Shop />
				},
				{
					path: 'archive',
					element: <Archive />
				},
				{
					path: 'about',
					element: <About />
				},
				{
					path: 'profile',
					element: <Profile />
				},
			]
		},

	])
	return <RouterProvider router={router} />
}

function Layout() {
	return <>

		<Dither
			waveColor={[0.5, 0.5, 0.5]}
			disableAnimation={false}
			enableMouseInteraction={true}
			mouseRadius={0.3}
			colorNum={2}
			waveAmplitude={0.3}
			waveFrequency={3}
			waveSpeed={0.04}
		/>

		<Header />
		<main>
		<Outlet />
		</main>
		<Footer />

		<div className="crt"></div>
	</>
}
