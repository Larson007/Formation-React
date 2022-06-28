import './App.css';

function Header(props) {

  console.log(props);

  return (
    <header>
      <h1>{props.name}</h1>
    </header>
  )
}

function Main(props) {
  return (
    <header>
      <p>création d'un élément{props.adjectives}</p>
    </header>
  )
}

function Footer(props) {
  return (
    <header>
      <p>Copyright &copy; {props.year}</p>
    </header>
  )
}

function App() {
  return (
    <div className="App">
      <Header name='Mon application React'/>
      <Main adjectives=' : dynamic data'/>
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
