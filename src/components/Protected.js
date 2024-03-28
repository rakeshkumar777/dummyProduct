import React from "react"
import { Navigate, Outlet } from "react-router-dom"
const Protected = (props) => {
    const { token } = props;
    return (
        token ? <Outlet /> : <Navigate to='/' />
    )

}

export default Protected