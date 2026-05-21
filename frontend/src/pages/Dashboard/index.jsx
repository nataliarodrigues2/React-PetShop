import { Link } from 'react-router-dom';
import '../../styles/Dashboard.css';

function Dashboard() {
    const menuItems = [
        {
            title: 'Donos',
            description: 'Gerencie os donos dos pets',
            path: '/owners',
            icon: '👥',
            color: '#FF6B9D'
        },
        {
            title: 'Pets',
            description: 'Cadastre e acompanhe os pets',
            path: '/pets',
            icon: '🐾',
            color: '#C44569'
        },
        {
            title: 'Serviços',
            description: 'Gerencie os serviços prestados',
            path: '/services',
            icon: '🛠️',
            color: '#4A90E2'
        },
        {
            title: 'Tipos de Serviço',
            description: 'Configure os tipos de serviço',
            path: '/service-types',
            icon: '📋',
            color: '#7B68EE'
        },
        {
            title: 'Usuários',
            description: 'Gerencie os usuários do sistema',
            path: '/users',
            icon: '👨‍💼',
            color: '#50C878'
        }
    ];

    return (
        <div className="dashboard">
            <div className="dashboard-header">
                <h1>Dashboard</h1>
                <p>Bem-vindo ao PetShop</p>
            </div>

            <div className="menu-grid">
                {menuItems.map((item) => (
                    <Link
                        key={item.path}
                        to={item.path}
                        className="menu-card"
                        style={{ borderLeftColor: item.color }}
                    >
                        <div className="menu-icon" style={{ backgroundColor: item.color }}>
                            {item.icon}
                        </div>
                        <div className="menu-content">
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>
                        </div>
                        <div className="menu-arrow">→</div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Dashboard;