import React from 'react';
import { useDispatch} from "react-redux";
import actions from "../redux/authRoutes/actions";
export default function Dashboard(){
    console.log("login Successful");
    const  dispatch = useDispatch();
    const handleClick=()=>{
        // const isAuthenticated=false;
        
        dispatch({ type: actions.UPDATE_AUTH_DETAILS, payload: {isAuthenticated: false}});
    }
    return(
        <div className='text-center p-5'>
            <h1 className='pb-3'>Dashboard Page</h1>
            <button className="btn btn-md bg-primary text-white" type="button" onClick={handleClick}>Logout</button>
        </div>
    );
}
    
