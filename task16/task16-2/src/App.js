import Form from "./Components/Form";

function App() {
  return (
    <Form>
      <Form.Label>Email</Form.Label>
      <Form.Input type="email" />
      <Form.Error />
    </Form>
  );
}

export default App;


