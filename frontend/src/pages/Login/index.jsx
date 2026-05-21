import { useState } from "react";
import '../../styles/Login.css'
import header from '../../assets/dog.png'
import dogs from '../../assets/dogs.png'

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        console.log({ email, password })
    }

    return (
        <div className="login-page">
            <div className="login-box">

                <img
                    src={header}
                    className="pets-banner"
                />

                <form onSubmit={handleSubmit}>
                    <h1>Login</h1>

                    <input
                        type="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                        type="password"
                        placeholder="Senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button type="submit">Entrar</button>
                </form>
                <img
                    src={dogs}
                    className="pets-bottom"
                />

            </div>
        </div>
    )
}

export default Login