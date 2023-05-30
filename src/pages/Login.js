import React, { useContext, useState } from "react";
import UserContext from "../store/context";
import { auth_login } from "../services/auth.service";
import api from "../services/api";
const Login = (props)=>{
    const {state,dispatch} = useContext(UserContext);
    const [user,setUser] = useState({email:"",password:""});
    const handleInput = (event)=>{
        user[event.target.name] = event.target.value;
        setUser(user);
    }
    const loginSubmit = async (e)=>{
        e.preventDefault();
        const u = await auth_login(user);
        dispatch({type:"AUTH_LOGIN",payload:u.token});
        state.token = u.token;
        setTimeout(()=>{dispatch({type:"HIDE_LOADING"})},1000);
        localStorage.setItem("state",JSON.stringify(state));
        api.defaults.headers.common["Authorization"] = `Bearer ${u.token}`;
    }
    return (
        <section>
          <div className='container'>
          <form onSubmit={loginSubmit} method="post">
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" onChange={handleInput} name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" onChange={handleInput} name="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </section>
    );
}
export default Login;