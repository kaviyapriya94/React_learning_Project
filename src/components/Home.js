import React, { useRef } from 'react';
import { useDispatch} from "react-redux";
import actions from "../redux/authRoutes/actions";
const Home=()=>{
   const  dispatch = useDispatch();
   const UserName=useRef();
   const Password=useRef();

    const handleClick=()=>{
        // const isAuthenticated=true;
        
        // dispatch({ type: actions.UPDATE_AUTH_DETAILS, payload: isAuthenticated});
        
            dispatch({ type: actions.LOG_IN, payload: {UserName: UserName.current.value, Password: Password.current.value} } );
           
    }

    return(
        <div className="container">
            <div className="row justify-content-center">
                <h1 className="text-primary pt-5 pb-3 text-center">Login</h1>
                <div className="col-sm-5">
                    <form >
                        <div className="form-group  pt-4">
                            <label className="col-sm-5">Username</label>
                            <input className="col-sm-7" ref={UserName} name="username"  type="text" />
                        </div>
                        <div className="form-group  pt-4">
                            <label className="col-sm-5">Password</label>
                            <input className="col-sm-7" ref={Password} name="password"  type="text" />
                        </div>
                        <div className='text-center pt-3'>
                            <button className="btn btn-md bg-primary text-white" type="button" onClick={handleClick}>Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
    
export default Home;