import React, {useState} from "react";

const Semaforo = ()=>{

    const [colorRed, setColorRed] = useState("0 0 0px white");
    const [colorOrange, setColorOrange] = useState("0 0 0px white");
    const [colorGreen, setColorGreen] = useState("0 0 0px white");

    const setRed = ()=>{
        setColorRed("0 0 20px white");
        setColorOrange("0 0 0px white")
        setColorGreen("0 0 0px white")
    }

    const setOrange = ()=>{
        setColorRed("0 0 0px white");
        setColorOrange("0 0 20px white")
        setColorGreen("0 0 0px white")
    }

    const setGreen = ()=>{
        setColorRed("0 0 0px white");
        setColorOrange("0 0 0px white")
        setColorGreen("0 0 20px white")
    }
   
    return(   
            <div className="d-flex flex-column align-items-center">
                <div className="d-flex flex-column align-items-center bg-black" style={{width:"10px", height:"75px"}}></div>
                <div className="d-flex flex-column align-items-center gap-3 bg-black p-2 rounded" style={{width:"75px", height:"200px"}}>                 
                    <button type="button" className={`btn btn-danger rounded-circle`} onClick={setRed} style={{boxShadow: `${colorRed}`, width:"50px", height:"50px"}}></button>
                    <button type="button" className={`btn btn-warning rounded-circle`} onClick={setOrange} style={{boxShadow: `${colorOrange}`, width:"50px", height:"50px"}}></button>
                    <button type="button" className={`btn btn-success rounded-circle`} onClick={setGreen} style={{boxShadow: `${colorGreen}`, width:"50px", height:"50px"}}></button>
                </div>
            </div>    
                           
    ) 
};

export default Semaforo;