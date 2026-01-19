const Patients = Array.from({ length: 1000 }, (_, i) => ({
  id: i,
  name: `Patient ${i + 1}`,
}));

export default Patients;
