import React, { useEffect, useState } from "react";
import { auth_profile } from "../services/auth.service";
const Profile = (props)=>{
    const [user,setUser] = useState({});
    const getProfile = async ()=>{
        const u = await auth_profile();
        setUser(u);
    }
    useEffect(()=>{
        getProfile();
    },[]);
    return (
        <section>
            <div className="container">
                <h1>User: {user.name}</h1>
            </div>
        </section>
    )
}
export default Profile;