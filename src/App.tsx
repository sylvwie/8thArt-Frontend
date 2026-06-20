import { createHashRouter, Outlet, RouterProvider } from 'react-router-dom' // createBrowserRouter     const router = createBrowserRouter([
import './App.css'
import { Header } from './components/Header'
import { Dashboard } from './pages/Dashboard'
import { Login } from './pages/Login'
import { Shop } from './pages/Shop'
import { Archive } from './pages/Archive'
import { Profile } from './pages/Profile'
import { Footer } from './components/Footer.tsx'
import { FaultyTerminal } from './components/motion/FaultyTerminal.tsx'
import { Register } from './pages/Register.tsx'
import { GameDetail } from './pages/GameDetail.tsx'
import { FeaturedStory } from './pages/FeaturedStory.tsx'
import { Cross } from './pages/CrossPlayground.tsx'
import { About } from './pages/About.tsx'
import { PlatformPage } from './components/archive_pages/PlatformPage.tsx'
import { GenrePage } from './components/archive_pages/GenrePage.tsx'
import { DeveloperPage } from './components/archive_pages/DeveloperPage.tsx'

export default function App() {
	const router = createHashRouter([
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
					path: 'register',
					element: <Register />
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
					path: 'cross',
					element: <Cross />
				},
				{
					path: 'about',
					element: <About />
				},
				{
					path: 'profile',
					element: <Profile />
				},
				{
					path: 'game-detail/:gameId',
  					element: <GameDetail />
				},
				{
					path: 'featured-story',
					element: <FeaturedStory />
				},
				{
					path: '/genre/:genreCategory/:genreValue',
					element: <GenrePage />
				},
				{
					path: 'platform/:platformName',
					element: <PlatformPage />
				},
				{
					path: 'developer/:developerName',
					element: <DeveloperPage />
				},
			]
		},

	])
	return <RouterProvider router={router} />
}

function Layout() {
	return <>

		<FaultyTerminal
		  	className="faulty-terminal"
  			style={{}}

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
