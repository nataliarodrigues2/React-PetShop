import { Link } from "react-router-dom";
import "../styles/NavBar.css";

export default function NavBar() {
    return (
        <nav className="navbar">
            <h2>PetShop</h2>

            <div className="nav-links">
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/owners">Donos</Link>
                <Link to="/pets">Pets</Link>
            </div>
        </nav>
    );
}