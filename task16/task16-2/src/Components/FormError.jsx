import { useForm } from "./Form";

function FormError() {
  const { error } = useForm();

  if (!error) return null;

  return <p style={{ color: "red" }}>{error}</p>;
}

export default FormError;
