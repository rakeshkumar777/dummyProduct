import React from 'react';
import {Link,Outlet} from 'react-router-dom';

const Forgot = () => {
    return (
        <>
            <div style={{ border: "1px solid #d6e7ec", backgroundColor: "#d6e7ec", width: "400px", postion: "relative", marginTop: "100px", marginLeft: "425px", color: "black", borderRadius: "10px" }}>
                <h2 style={{ marginLeft: "20px" }} >Find Your Account</h2>
                <hr />
                <p style={{ marginLeft: "20px" }}>Please enter your email address or mobile number to search for your account</p>
                <input type='text' placeholder="Email address or mobile number" style={{ width: "350px", height: "30px", borderRadius: "10px", marginLeft: "20px", marginBottom: "20px" }} />
                <hr />
                <Link style={{textDecoration:"none"}} to='/'><button style={{marginLeft:"250px",padding:"10px",borderRadius:"10px",marginBottom:"10px"}}>Cancel</button></Link>
                <button style={{padding:"10px",cursor:"pointer",color:"white",backgroundColor:"#1877f2",borderRadius:"10px"}} >Search</button>

            </div>



<Outlet/>

        </>
    )
}

export default Forgot
