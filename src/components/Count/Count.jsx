import { useState, useRef, useEffect } from "react";
import './Count.scss';

export default function Count(){
    const [count, setCount] = useState(0);

    const add = () => {
            setCount(count + 1) ;
        }

    const minus = () => {
        if(count > 0)
            setCount(count - 1);
        }
    
    return(
        <div className="Count">
            <h1>Disable Count if less than 1</h1>
            <button className="AddCount" onClick={add}>+</button>
            <h1 className="CountNum">{count}</h1>
            <button 
            className="MinusCOunt" 
            disabled = {(count < 1) ? true : false}
            onClick={minus}>-</button>
        </div>
    )
}