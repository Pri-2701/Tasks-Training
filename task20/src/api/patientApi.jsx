let patients = [
  { id: 1, name: "John Doe", age: 45, disease: "Pneumonia" },
  { id: 2, name: "Jane Smith", age: 32, disease: "Diabetes" },
  { id: 3, name: "Michael Lee", age: 58, disease: "Hypertension" },
];

export const fetchPatients = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.1 ? resolve([...patients]) : reject("Failed to fetch data");
    }, 1000);
  });

export const addPatient = (patient) =>
  new Promise((resolve) => {
    setTimeout(() => {
      const newPatient = { id: Date.now(), ...patient };
      patients.push(newPatient);
      resolve(newPatient);
    }, 500);
  });

export const editPatient = (id, updatedPatient) =>
  new Promise((resolve) => {
    setTimeout(() => {
      patients = patients.map((p) => (p.id === id ? { ...p, ...updatedPatient } : p));
      resolve(updatedPatient);
    }, 500);
  });

export const deletePatient = (id) =>
  new Promise((resolve) => {
    setTimeout(() => {
      patients = patients.filter((p) => p.id !== id);
      resolve(true);
    }, 500);
  });
