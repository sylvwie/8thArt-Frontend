import { createHashRouter, Outlet, RouterProvider } from 'react-router-dom' // createBrowserRouter     const router = createBrowserRouter([
import './App.css'
import { Header } from './components/Header'
import { Footer } from './components/Footer.tsx'
import { Dashboard } from './pages/Dashboard'
import { Login } from './pages/Login'
import { Shop } from './pages/Shop'
import { Archive } from './pages/Archive'
import { Profile } from './pages/Profile'
import { FaultyTerminal } from './components/motion/FaultyTerminal.tsx'
import { Register } from './pages/Register.tsx'
import { GameDetail } from './pages/GameDetail.tsx'
import { Cross } from './pages/CrossPlayground.tsx'
import { About } from './pages/About.tsx'
import { PlatformPage } from './components/archive_pages/PlatformPage.tsx'
import { GenrePage } from './components/archive_pages/GenrePage.tsx'
import { DeveloperPage } from './components/archive_pages/DeveloperPage.tsx'
import FeaturedStory1 from './pages/featured_stories/FeaturedStory1.tsx'
import FeaturedStory2 from './pages/featured_stories/FeaturedStory2.tsx'
import FeaturedStory3 from './pages/featured_stories/FeaturedStory3.tsx'
import FeaturedStory4 from './pages/featured_stories/FeaturedStory4.tsx'
import FeaturedStory5 from './pages/featured_stories/FeaturedStory5.tsx'
import FeaturedStory6 from './pages/featured_stories/FeaturedStory6.tsx'
import FeaturedStory7 from './pages/featured_stories/FeaturedStory7.tsx'

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
				{
					path: 'featured-story-1',
					element: <FeaturedStory1 />
				},
				{
					path: 'featured-story-2',
					element: <FeaturedStory2 />
				},
				{
					path: 'featured-story-3',
					element: <FeaturedStory3 />
				},
				{
					path: 'featured-story-4',
					element: <FeaturedStory4 />
				},
				{
					path: 'featured-story-5',
					element: <FeaturedStory5 />
				},
				{
					path: 'featured-story-6',
					element: <FeaturedStory6 />
				},
				{
					path: 'featured-story-7',
					element: <FeaturedStory7 />
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
