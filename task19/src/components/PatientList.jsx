import { List } from "react-window";
import patients from "../data/patients"; 
import PatientRow from "./PatientRow";

function PatientList() {
  return (
    <List
      height={300}
      itemCount={patients.length}
      itemSize={35}
      width={300}
    >
      {({ index, style }) => (
        <PatientRow
          name={patients[index].name}
          style={style}
        />
      )}
    </List>
  );
}

export default PatientList;



