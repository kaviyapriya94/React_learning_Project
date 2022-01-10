import React,{useState} from 'react';
import Dummy from './dummy.js'
import { useDispatch,useSelector } from "react-redux";
import actions from "../redux/AgeCalculator/actions";
import { useNavigate } from 'react-router-dom';


export default function AgeCalculator(){
    const navigate=useNavigate();
    const selectedDetails = useSelector(
        (state) => state.searchReducer
      );
      console.log("test")
      console.log(selectedDetails);
    const[a,setA]=useState('Welcome');
    const[DOB,setDOB]=useState(''),
    dispatch = useDispatch()
    
   

    function check(){
        setA('hello');
    }
    
    function handleCalculate(){
       
        const Birth_Date = new Date(DOB);
        const today = new Date();
        
        const Years=Math.abs(today.getFullYear()-Birth_Date.getFullYear());
       const Months=Math.abs(today.getMonth()-Birth_Date.getMonth());
       const Days=Math.abs((today.getDate()-Birth_Date.getDate()));
        dispatch({ type: actions.UPDATE_SELECTED_DETAILS, payload: {Years:Years,Months:Months,Days:Days}});
        console.log(Years);
        navigate('/child');
       /* navigate('/child',{state : {
            Years : Years ,
            Months : Months,
            Days : Days
            }  
        })*/
    }
    return(
        <div>
            <h1 className="p-5 text-center">Age Calculator</h1>
            <form>
                <div className="row mb-3 pt-3">
                    <label className="control-label col-sm-3">Enter Your date of birth(DOB):</label>
                    <div className="col-sm-3">
                        <input type="date" onChange={e=>setDOB(e.target.value)} />
                    </div>
                    <div className="col-auto">
                    <button type="button" className="btn bg-primary text-white" onClick={handleCalculate}>Calculate</button>
                    </div>
                </div>
            </form>
            <Dummy check={check} a={a}/>
        </div>
    );
}
    
