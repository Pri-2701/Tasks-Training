import Card from "./Card";
import Button from "./Button";

function PatientCard({name, age, disease}) {
    return (
        <Card>
            <h3>Name: {name}</h3>
            <p>age: {age}</p>
            <p>Disease: {disease}</p>

             <Button text="View Details" onClick={()=> alert(name)} />
        </Card>
        
    );
}

export default PatientCard;