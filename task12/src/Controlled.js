//create Controlled input
import {useState} from "react";

function Controlled() {
    const [userName, setUsername] = useState("0");

    return (
        <div>
            <h2>Controlled Input</h2>

            <input type="text" name="name" value={userName} onChange={(e) => setUsername(e.target.value)} placeholder="Enter usename"/>

            <p><strong>username:</strong> {userName}</p>
        </div>
    );
}

export default Controlled;