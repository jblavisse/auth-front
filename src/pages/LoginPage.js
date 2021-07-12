import { useState } from "react";
import { useHistory } from "react-router";
import AuthService from '../services/auth.service';

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const history = useHistory();

    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === "" || password === "") {
            setError("Tous les champs sont requis");
        }
        else {
            AuthService.login(email, password)
            .then(() => { 
                history.push('/admin')
             })
            .catch(res => {
                console.log(res);
                setError("L'identifiant ou le mot de passe n'est pas correct");
            })
        }
    }
    
    return (
        <>
          <h1>Se connecter</h1>
          <form onSubmit={handleSubmit} className="form">
              {error && <span>{error}</span>}
              
              <div className="form__input">
                <label htmlFor="">Email</label>
                <input type="text" value={email} 
                    onChange={e => setEmail(e.target.value)}
                />
              </div>

              <div className="form__input">
                <label htmlFor="">Mot de passe</label>
                <input type="password" value={password}
                    onChange={e => setPassword(e.target.value)}
                />
              </div>
              
            <button type="submit">Envoyer</button>
            </form>  
        </>
    )
}
