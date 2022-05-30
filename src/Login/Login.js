import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../UserProvider";
import './Login.css';
import Logo from "../assets/images/logo.svg";

import LOGIN_API_URL from "../api/apiLogin";
import Swal from 'sweetalert2';
window.Swal = Swal;

const Login = () => {

    const user = useUser();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState(null);
    const navigate = useNavigate();

    function sendLoginRequest() {
        setErrorMsg("");
        const reqBody = {
            usuario: username,
            password: password
        };

        fetch(`${LOGIN_API_URL}`, {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(reqBody),
        })
            .then((response) => {
                //console.log('Respuesta del api:', response);
                if (response.status === 200) return response.text();
                else if (response.status === 401 || response.status === 403) {
                    setErrorMsg("Usuario o contraseña invalida");
                    error();
                } else {
                    setErrorMsg(
                        "Algo salio mal, intentelo de nuevo despues"
                    );
                    error();
                }
            })
            .then((data) => {
                var userID = JSON.parse(data);           
                if (data) {
                    user.setID(userID.idEmpresa);
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `Bienvenido: ${userID.idEmpresa}`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                    navigate("/mainLayout");
                }
            });
    }

    function error() {
        return (
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: `${errorMsg}`,
                showConfirmButton: false,
                timer: 1500
            })
        )
    }

    return (
        <>
            <div className='login-box'>
                <img src={Logo} className='avatar' alt='' />
                <button
                    className="exit"
                    variant="secondary"
                    type="button"
                    size="lg"
                    onClick={() => {
                        navigate("/");
                    }}
                >
                    Exit
                </button>
                <h1>Bienvenido</h1>
                <form>

                    <label htmlFor="username">Usuario</label>
                    <input
                        type="text"
                        size="lg"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <label htmlFor="password">Contraseña</label>
                    <input
                        type="password"
                        size="lg"
                        placeholder="Type in your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                        className='buton'
                        id="submit"
                        type="button"
                        size="lg"
                        onClick={() => sendLoginRequest()}
                    >Ingresar
                    </button>
                </form>
            </div>
        </>
    )
}

export default Login;