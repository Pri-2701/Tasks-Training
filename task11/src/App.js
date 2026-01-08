import Layout from "./Layout";
import Header from "./Header"
import PatientCard from "./PatientCard";
import "./App.css";



function App() {
  const patients = [
    {id: 1, name:"john", age:30, disease:"flu"},
    {id: 2, name:"jane", age:35, disease:"fever"},
    {id: 3, name:"mark", age:40, disease:"Dengu"}
   ]
  return (
    // // <div className="app-container">
    // //      <Sidebar/>
    // //      <div className="main-container">
    // //       <Header/>
    // //       <h2>Patients</h2>
    // //       <div className="patient-list">
    // //         {patients.map((patient)=> (
    // //           <PatientCard
    // //         key={patient.id}
    // //           name={patient.name}
    // //           age={patient.age}
    // //           disease={patient.disease}
    // //           />
    // //           ))}
    // //       </div>
            
          
    //       </div> 
    // </div>

    <Layout>
      <Header/>
      <h2>Patients</h2>
      <div className="patient-list">
        {patients.map((patient)=>(
          <PatientCard
           key={patient.id}
           name={patient.name}
           age={patient.age}
           disease={patient.disease}
           />
        ))}
      </div>
    </Layout>
  );
}

export default App;