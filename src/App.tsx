import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import './App.css'
import { Header } from './components/Header'
import { Dashboard } from './pages/Dashboard'
import { Login } from './pages/Login'
import { Shop } from './pages/Shop'
import { Archive } from './pages/Archive'
import { About } from './pages/About'
import { Profile } from './pages/Profile'
import { Footer } from './components/Footer.tsx'
import { FaultyTerminal } from './components/motion/FaultyTerminal.tsx'

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

		<FaultyTerminal
			scale={1.3}
			digitSize={1.2}
			scanlineIntensity={0.5}
			glitchAmount={1}
			flickerAmount={1}
			noiseAmp={0.85}
			chromaticAberration={0}
			dither={0.1}
			curvature={0.15}
			tint="#2a4553"
			mouseReact
			mouseStrength={0.15}
			brightness={0.6}
		/>

		<Header />
		<main>
		<Outlet />
		</main>
		<Footer />

		<div className="crt"></div>
	</>
}

/*	
		<FaultyTerminal>
			scale={1.3}
			digitSize={1.2}
			scanlineIntensity={0.5}
			glitchAmount={1}
			flickerAmount={1}
			noiseAmp={0.85}
			chromaticAberration={0}
			dither={0.1}
			curvature={0.15}
			tint="#87bcdb"
			mouseReact
			mouseStrength={0.15}
			brightness={0.6}
		</FaultyTerminal>
*/