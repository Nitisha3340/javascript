

function App() {
  return (
      <div>
        <Student name="Nitisha" />
        <Student name="Ankita" />
        </div>
    
  );
  function Student(props) {
    return <h2>Hello, {props.name}!</h2>;
  }
}

export default App
