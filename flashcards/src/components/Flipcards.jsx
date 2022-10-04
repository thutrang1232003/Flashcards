import { useState } from "react";
import ReactCardFlip from "react-card-flip";

function Flipcards (props){
    const[flip, setFlip] = useState(false);
    return (
        <ReactCardFlip isFlipped = {flip} flipDirection = "horizontal">
            <div style={{}}>
                Great!
                <button style={{}} onClick = {() => setFlip(!flip)}>Click to flip</button>
            </div>
            <div style={{}}>
                Hyvä!
                <button style={{}} onClick = {() => setFlip(!flip)}>Click to flip</button>
            </div>
        </ReactCardFlip>
    )
}
export default Flipcards;