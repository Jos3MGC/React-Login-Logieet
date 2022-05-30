import './assets/libs/boxicons-2.1.1/css/boxicons.min.css'
import './scss/App.scss'
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import HomeApp from "./pages/HomeApp";
import Login from "./Login/Login";
import PrivateRoute from "./PrivateRoute/index";
import { useUser } from "./UserProvider/index";

function App() {
  const [roles, setRoles] = useState([]);
  const [errorId, setErrorId] = useState("")
  const user = useUser();

  useEffect(() => {
    setRoles(getRolesFromId());
  }, [user.id]);

  function getRolesFromId() {
    if (typeof user.id !== 'string') {
       setErrorId("Id invalido");
    }
    return errorId;
  }
  return (
    <Routes>
      <Route
        path="/mainLayout/*"
        element={
          (
            <PrivateRoute>
              <HomeApp />
            </PrivateRoute>
          )
        }
      />
      {/*<Route path="login" element={<Login />} />*/}
      <Route index element={<Login />} />
      <Route path="/Logieet" element={<Login />} />
      <Route path="*" element={<div>404 - not found</div>} />
    </Routes>
  );
}

export default App;

