import './App.css';

function SecretComponent() {
  return (
    <h1>Informations pour utilisateur autorisé uniquement</h1>
  )
}

function RegularComponent() {
  return (
    <h1>Informations disponibles pour tous</h1>
  )
}

function App(props) {
  return (
    <>
      {props.authorized ? <SecretComponent /> : <RegularComponent />}
    </>
  )
}

export default App;
