import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../features/userSlice';

const CardLogout = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const logoutHandler = (e) => {
        e.preventDefault();
        dispatch(logout())
        navigate('/')

    }
    return (
        <>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "200px" }}>
                <h2>Well Come Rakesh!</h2>
                <button onClick={logoutHandler} className='btn btn-danger'>Logout</button>
            </div>
        </>
    )
}

export default CardLogout
