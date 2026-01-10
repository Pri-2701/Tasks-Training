import useFetch  from "./useFetch";

function  App() {
  const{data, loading, error} = useFetch("https://jsonplaceholder.typicode.com/users");

  if(loading) return <p>Loading....</p>
  if(error) return <p>Error: {error.message}</p>

  return (
    <ul>
    {Array && Array.isArray(data) && data.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );

}

export default App;