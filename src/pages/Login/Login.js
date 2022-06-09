import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../UserProvider";
import './Login.css';
import Logo from "../../assets/images/logo.svg";

import LOGIN_API_URL from "../../api/apiLogin";
import Swal from 'sweetalert2';
window.Swal = Swal;

function sleep(time){
    return new Promise((resolve)=>setTimeout(resolve,time)
  )
}

const Login = () => {

    const user = useUser();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function sendLoginRequest() {
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
                if (response.status === 200) return response.text();
                else if (response.status === 401 || response.status === 403) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'error',
                        title: 'Usuario o contraseña invalida',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    sleep(1500).then(() => {
                        window.location.reload(true)
                    })
                } else {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'error',
                        title: 'Algo salio mal, intentelo de nuevo despues',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    sleep(1500).then(() => {
                        window.location.reload(true)
                    })
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
                        placeholder="Usuario"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <label htmlFor="password">Contraseña</label>
                    <input
                        type="password"
                        size="lg"
                        placeholder="Ingrese su contraseña"
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