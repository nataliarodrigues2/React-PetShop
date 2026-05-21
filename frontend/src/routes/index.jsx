import { Routes, Route, useLocation } from 'react-router-dom'
import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'
import OwnersPage from '../pages/OwnersPage'
import PetsPage from '../pages/PetsPage'
import NavBar from '../components/NavBar'

function AppRoutes(){
    const location = useLocation()
    const hideNav = location.pathname === '/' || location.pathname === '/login'

    return(
        <>
            {!hideNav && <NavBar />}
            <Routes>
                <Route path={['/', '/login']} element={<Login />} />
                <Route path='/dashboard' element={<Dashboard />}/>
                <Route path='/owners' element={<OwnersPage />}/>
                <Route path='/pets' element={<PetsPage />}/>
                <Route path='*' element={<Login />} />
            </Routes>
        </>
    )
}

export default AppRoutes