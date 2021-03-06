import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";

export const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/InterfaceLoginReact" exact element={<Login />}/>
                <Route path="/register" exact element={<Register />}/>
            </Routes>
        </Router> 
    )
}