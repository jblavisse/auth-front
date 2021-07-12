import { NavLink, useHistory } from "react-router-dom"
import AuthService from '../services/auth.service'

export default function AdminPage() {
    let history = useHistory();

    function logout() {
      AuthService.logout();
      history.push("/");
    }

    return (
        <>
          <nav>
            <NavLink to="/tasks">Mes tâches</NavLink>
            <button onClick={logout}>Se déconnecter</button>
          </nav>
          <h1>Bienvenue sur l'espace connecté!</h1>  
        </>
    )
}
