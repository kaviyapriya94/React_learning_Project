import React from 'react';
import { useDispatch} from "react-redux";
import actions from "../redux/authRoutes/actions";
const Home=()=>{
   const  dispatch = useDispatch();
    const handleClick=()=>{
        const isAuthenticated=true;
        
        dispatch({ type: actions.UPDATE_AUTH_DETAILS, payload: isAuthenticated});
    }

    return(
        <div className="p-5 text-center">
            <h1 className="pb-3">Home Page</h1>
            <button className="btn btn-md bg-primary text-white" onClick={handleClick}>Login</button>
        </div>
    );
}
    
export default Home;