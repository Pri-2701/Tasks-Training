//create dynamic form vlaidation

import { useState }  from "react";

function Controlled3(){
const[age, setAge] = useState("");
const[error, setError] = useState("");

const handleChange = (e) => {
    const value = e.target.value;
    setAge(value);


if(!value) {
    setError("Age is required");
} 
else if(Number.isNaN(Number(value))) {
    setError("Age must be a number");
}
else if(value < 18) {
    setError("Age must be 18 or more");
}
else {
    setError("");
}
}



const handleSubmit = (e) => {
    e.preventDefault();
    if(!error && age) {
        alert("valid age submitted");
    }
};

return (
    <div>
    <h3>One key Validation</h3>

    <form onSubmit={handleSubmit}>
        <input
            type="text"
            value={age}
            onChange={handleChange}
            placeholder="Enter a age"
        />
        {error && <p>{error}</p>}
        <button type="submit">Submit</button>
    </form>

    <p><strong>Age:</strong>{age}</p>
    </div>

);
}

export default Controlled3;