import { Routes, Route } from "react-router-dom"
import Dashboard from "../pages/dashboard"
import Login from "../pages/login"
import Register from "../pages/register"

const RoutesMain = () => {
    return(
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="register" element={<Register/>}/>
            <Route path="dashboard" element={<Dashboard/>}/>
        </Routes>
    )
}
export default RoutesMain