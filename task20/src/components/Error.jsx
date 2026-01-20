export default function Error({ message }) {
  return (
    <div style={{ padding: "2rem", textAlign: "center", color: "red" }}>
      <strong>Error:</strong> {message}
    </div>
  );
}
