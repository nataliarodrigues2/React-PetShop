import { Routes, Route, Navigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Dashboard from '../pages/Dashboard';
import OwnersPage from '../pages/OwnersPage';
import PetsPage from '../pages/PetsPage';
import Login from '../pages/Login';

export default function AppRoutes() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/owners" element={<OwnersPage />} />
                <Route path="/pets" element={<PetsPage />} />
                <Route path="/" element={<Navigate to="/dashboard" />} />
            </Routes>
        </>
    );
}