import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";

const RoutesMain = () => {
    return (
        <Routes>

            <Route path="/" element={<Dashboard/>}>
                <Route path="/dashboard" element={<Dashboard/>}/>
            </Route>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
        </Routes>
    )
    
}

export default RoutesMain