import { useState } from "react"
import {FcPlus} from "react-icons/fc"
import {AiOutlineMinusCircle} from "react-icons/ai"
import "../styles/Question.css";

const Question = ({title, answer}) => {
    const [show,setShow] = useState(false);
    return (
        <article className="article">
            
            <h2>{title}
            </h2>
            {show ? <p>{answer}</p> : null }
            <div id="proba" onClick={() => setShow(!show)} >{show ? <AiOutlineMinusCircle id="minus" /> : <FcPlus id="plus" className="plus-icon" /> }</div> 
        </article>
    )
}
export default Question