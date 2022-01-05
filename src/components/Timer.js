import React,{useState,useEffect} from 'react';
export default function Timer(){
    const [d,setD]= useState(new Date());
    useEffect(()=>{
        //Component did mount
        console.log('timer starts now');
        const timerID=setInterval(()=>tick(),1000);
        //component will unmount
        return function stop(){
            console.log('timer stopped');
            clearInterval(timerID);
        }   
    },[]);
    const tick=()=>{
        setD(new Date());
    }
    
    return(
        
     <h1 className="p-5 text-center">{d.toLocaleTimeString()}</h1>
 );
}
    
