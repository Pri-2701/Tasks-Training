//create myltifield Controlled input
import { useState}  from "react";    

function Controlled2() {
    const [formData, setFormData] = useState({Email:"",Pass:""});   //state object to store  multiple fields


 const handleChange = (e) => {     //common change handler for multiple fields
    setFormData({
        ...formData,          //keep other fields unchanges   
        [e.target.name]: e.target.value  //update only change field
    });
 };
return (
    <div className="Controlled2">
        <h2>Multi Field Form</h2>

        <input type="text" name="Email" value={formData.Email} onChange={handleChange} placeholder="enter a mail"/>
        
        <input type="password" name="Pass"value={formData.Pass} onChange={handleChange} placeholder="enter a password"/>

        <p><strong>Email:</strong>{formData.Email}</p>
        <p><strong>Password:</strong>{formData.Pass}</p>

    </div>

    
);
}

export default Controlled2;