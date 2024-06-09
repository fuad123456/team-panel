
import './App.css'

import { Route, Routes } from 'react-router-dom';
import MainLayout from './loyouts/MainLayout.tsx';
import Permissions from './components/Permissions/Permissions.tsx';
import Team from './components/Team/Team.tsx';
import Blog from './components/Blog/Blog.tsx';
import Moderation from './components/Moderation/Moderation.tsx';
import Currency from './components/currency/Currency.tsx';
import Profile from './components/Profile/Profile.tsx';
import Analytic from './components/Analitic/Analytic.tsx';
import Chats from './components/Chats/Chats.tsx';

function App() {
	
	return (
		<>
			<Routes>
				<Route element={<MainLayout/>} path='/'>
					<Route path='/permissions' element={<Permissions/>}/>
					<Route path='/team' element={<Team/>}/>
					<Route path='/moderation' element={<Moderation/>}/>
					<Route path='/blog' element={<Blog/>}/>
					<Route path='/currency' element={<Currency/>}/>
					<Route path='/profile' element={<Profile/>}/>
					<Route path='/analitic' element={<Analytic/>}/>
					<Route path='/chats' element={<Chats/>}/>
				</Route>
			</Routes>
		</>
	)
}

export default App
